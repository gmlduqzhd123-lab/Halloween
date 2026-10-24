//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  }
}(function () {
    return qrcode;
}));

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript UTF8 Support (optional)
//
// Copyright (c) 2011 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

!function(qrcode) {

  //---------------------------------------------------------------------
  // overwrite qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

}(qrcode);

const CONTENT_VERSION = '2026-10-20.2';
const SAFETY_CONTENT_VERSION = '2026-10-20.1';
const CONTENT_SOURCES = {
  crowd: {title: '국민재난안전포털 · 다중운집인파사고 대비 국민행동요령', url: 'https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html', checked: '2026-10-19'},
  police: {title: '경찰제복 및 경찰장비의 규제에 관한 법률 제9조', url: 'https://law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1008601875', checked: '2026-10-20'},
  military: {title: '군복 및 군용장구의 단속에 관한 법률 제9조', url: 'https://law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1028626005', checked: '2026-10-20'},
  education: {title: '교육부 다중밀집 안전교육 보완 발표 기사 (표준안 원문 아님)', url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148907746', checked: '2026-10-19'}
};

// Confirmation questions ask for a new decision; viewing feedback does not complete an objective.
const SAFETY_GOALS = [
  {id:'route', title:'이동로와 출구 확인', source:'crowd', checks:{
    '1-2': ['축제장에 들어가기 전에 무엇을 볼까요?', ['나갈 수 있는 길', '사탕 가게만'], 0],
    '3-4': ['처음 가는 행사장에서 사람이 늘고 있습니다. 먼저 확인할 것은?', ['주변 이동로와 나갈 수 있는 곳', '가장 붐비는 사진 자리'], 0],
    '5-6': ['입구는 넓지만 안쪽 길은 좁은 행사장입니다. 동선을 어떻게 점검할까요?', ['혼잡과 주변 이동로, 이용 가능한 출구를 먼저 확인한다', '안쪽으로 간 뒤 출구는 나중에 찾는다'], 0]
  }},
  {id:'two-way', title:'양방향 통행 살피기', source:'crowd', checks:{
    '1-2': ['서로 마주 보고 걷는 길에서는?', ['오른쪽으로 차근차근', '가운데서 갑자기 멈추기'], 0],
    '3-4': ['양방향으로 사람들이 걷는 평상시 길에서 왜 오른쪽으로 걸을까요?', ['서로의 흐름을 살피며 부딪힘을 줄이려고', '어떤 위험에서도 오른쪽만 고집하려고'], 0],
    '5-6': ['행사장 양방향 길에서 우측통행 안내가 있습니다. 사람이 떠밀리는 상황에도 그대로 적용할까요?', ['아니다. 떠밀릴 때는 군중의 힘에 무리하게 저항하지 않는다', '그렇다. 언제나 오른쪽으로 밀어붙인다'], 0]
  }},
  {id:'warning', title:'혼잡 신호에 대응', source:'crowd', checks:{
    '1-2': ['걸음이 느려지고 어깨가 닿으면?', ['움직임을 살피며 벗어나기', '더 안쪽으로 들어가기'], 0],
    '3-4': ['어깨가 계속 닿기 시작했어요. 왜 그 자리를 벗어나야 할까요?', ['혼잡해지는 위험 신호이기 때문', '친구보다 빨리 가기 위해서'], 0],
    '5-6': ['통행 속도가 갑자기 느려지는 구간을 발견했습니다. 적절한 경로 판단은?', ['주변 흐름을 보고 가능한 가장자리나 넓은 쪽으로 벗어난다', '좁은 중심부를 가로질러 무조건 빠르게 간다'], 0]
  }},
  {id:'chest', title:'떠밀릴 때 몸 보호', source:'crowd', checks:{
    '1-2': ['사람들에게 떠밀릴 때 가슴 앞은?', ['두 손이나 가방으로 공간 지키기', '팔을 내려 꼭 붙이기'], 0],
    '3-4': ['떠밀리는 상황에서 팔을 가슴 앞에 두는 이유는?', ['가슴을 보호하고 숨 쉴 공간을 확보하려고', '다른 사람을 밀어내려고'], 0],
    '5-6': ['이미 군중 속에 갇혀 떠밀릴 때 적절한 설명은?', ['군중의 힘에 무리하게 저항하지 않고 가슴 앞 공간을 보호한다', '가슴 자세를 취하면 몇 초간 사고를 걱정하지 않아도 된다'], 0]
  }},
  {id:'belongings', title:'물건보다 몸 먼저', source:'crowd', checks:{
    '1-2': ['사람이 많은 곳에서 물건이 떨어지면?', ['줍지 않고 내 몸부터 지키기', '바로 허리 숙여 줍기'], 0],
    '3-4': ['붐비는 길에 신발이 벗겨졌어요. 무엇을 먼저 할까요?', ['허리를 숙이지 않고 이동 가능한 안전한 곳으로 벗어난다', '그 자리에서 신발을 찾느라 멈춘다'], 0],
    '5-6': ['소지품을 잃어버렸다는 친구를 만났습니다. 어떤 설명이 적절할까요?', ['혼잡한 흐름에서 허리를 숙이면 위험하므로 몸을 먼저 보호한다', '값비싼 물건이면 즉시 돌아가 찾아야 한다'], 0]
  }},
  {id:'fallen', title:'넘어졌을 때 몸 보호', source:'crowd', checks:{
    '1-2': ['넘어져 바로 일어날 수 없을 때는?', ['머리를 감싸고 몸을 둥글게', '팔과 다리를 길게 뻗기'], 0],
    '3-4': ['넘어진 뒤 바로 일어날 수 없다면 몸을 어떻게 할까요?', ['두 팔로 머리를 감싸고 다리를 몸쪽으로 당긴다', '팔과 다리를 넓게 뻗어 움직이지 않는다'], 0],
    '5-6': ['군중 속에서 넘어져 일어날 수 없는 상황에 맞는 행동은?', ['머리를 두 팔로 감싸고 다리를 당겨 몸을 둥글게 보호한다', '떨어진 물건을 찾으려고 주변을 더듬는다'], 0]
  }}
];

const SAFETY_SCENARIO_LOW = [
  {title:'축제에 도착했어요. 먼저 어디를 볼까요?', desc:'사람이 많아지기 전에 길을 살펴봐요.', choices:['넓은 길과 나가는 곳을 찾아요.','사람이 꽉 찬 좁은 길로 달려가요.']},
  {title:'사람들이 마주 보고 걷는 길이에요.', desc:'서로 부딪히지 않으려면?', choices:['오른쪽으로 천천히 걷고 멈출 때도 살펴요.','길 가운데서 갑자기 멈춰요.']},
  {title:'사람들과 어깨가 자꾸 닿아요.', desc:'걸음도 느려졌어요. 어떻게 할까요?', choices:['흐름을 보며 넓은 쪽으로 벗어나요.','사람들을 밀며 더 안쪽으로 가요.']},
  {title:'사람들에게 떠밀리고 있어요.', desc:'가슴 앞 숨 쉴 공간을 지켜요.', choices:['두 손이나 가방을 가슴 앞에 두어요.','두 팔을 몸에 꼭 붙여요.']},
  {title:'사람이 많은 길에 물건이 떨어졌어요.', desc:'물건보다 내 몸이 먼저예요.', choices:['숙이지 않고 먼저 안전한 쪽으로 가요.','바로 숙여서 물건을 주워요.']},
  {title:'넘어져서 바로 일어날 수 없어요.', desc:'내 머리와 몸을 보호해요.', choices:['머리를 감싸고 몸을 둥글게 해요.','팔과 다리를 길게 뻗어요.']}
];

// Each theme is a distinct setting with three complete decisions. They reuse the reviewed crowd objectives.
const THEMES = {
  halloween: {label:'할로윈', icon:'🎃', situations:[]},
  school: {label:'학교 축제', icon:'🏫', situations:[
    ['교실 공연장 앞', '공연이 시작되자 교실 앞 복도가 붐빕니다.', '복도의 이동로를 보고 덜 붐비는 자리에서 기다린다', '친구들 사이를 비집고 공연장 문 앞으로 간다', 'route'],
    ['체험 부스 줄', '인기 있는 부스의 줄이 좁은 계단까지 이어집니다.', '줄의 위치를 선생님께 알리고 다른 부스를 먼저 살핀다', '계단에서 줄을 계속 늘려 세운다', 'warning'],
    ['떨어진 안내지', '여러 반이 함께 이동할 때 안내지를 떨어뜨렸습니다.', '숙여 줍지 않고 먼저 이동 가능한 곳으로 벗어난다', '친구들을 멈춰 세우고 바로 줍는다', 'belongings']
  ]},
  field: {label:'현장체험학습', icon:'🚌', situations:[
    ['박물관 입구', '단체 관람객이 몰리는 입구에서 반 친구와 함께 들어갑니다.', '인솔 교사의 안내와 주변 이동로를 확인한다', '가장 좁은 문으로 먼저 달려간다', 'route'],
    ['전시실 통로', '전시실 통로에서 다른 단체와 마주 걷습니다.', '양방향 이동 흐름을 보고 오른쪽으로 차근차근 걷는다', '중앙에 갑자기 서서 사진을 찍는다', 'two-way'],
    ['기념품을 떨어뜨림', '출구 근처가 붐빌 때 작은 기념품이 떨어졌습니다.', '혼잡한 곳에서 숙이지 않고 몸을 먼저 보호한다', '즉시 허리를 숙여 찾는다', 'belongings']
  ]},
  trip: {label:'수학여행', icon:'🧳', situations:[
    ['숙소 로비', '여러 학급이 동시에 로비로 들어옵니다.', '이동로를 먼저 살피고 인솔 교사의 안내에 따라 대기한다', '가방을 끌고 인파 가운데로 들어간다', 'route'],
    ['관광지 골목', '관광지의 좁은 길에서 보행 속도가 느려집니다.', '몸이 닿기 시작하면 흐름을 살펴 가능한 넓은 쪽으로 벗어난다', '더 좁은 길로 방향을 꺾어 빨리 지나간다', 'warning'],
    ['여행 가방', '사람이 밀려오는 길에서 가방이 넘어졌습니다.', '가방보다 몸을 먼저 보호하며 이동 가능한 곳으로 간다', '그 자리에서 가방을 바로 세운다', 'belongings']
  ]},
  sports: {label:'체육대회', icon:'🏅', situations:[
    ['응원석 출입구', '경기가 끝나자 응원석 출입구로 학생들이 몰립니다.', '주변 이동로와 덜 붐비는 출입구를 확인한다', '한 출입구로 한꺼번에 뛰어간다', 'route'],
    ['운동장 통로', '양쪽에서 학생들이 이동하는 운동장 통로입니다.', '오른쪽으로 걸으며 갑자기 멈추지 않는다', '통로 가운데에서 오래 서서 친구를 기다린다', 'two-way'],
    ['떨어진 응원 도구', '많은 학생이 이동하는 중 응원 도구를 놓쳤습니다.', '허리를 숙이지 않고 몸부터 보호한다', '학생들 발 사이로 손을 넣어 줍는다', 'belongings']
  ]},
  local: {label:'지역 행사', icon:'🎪', situations:[
    ['야외 무대 앞', '무대 앞으로 관람객이 점점 몰립니다.', '혼잡 상황과 주변 이동로를 확인한다', '무대와 가장 가까운 좁은 자리로 간다', 'route'],
    ['푸드트럭 골목', '푸드트럭 사이 좁은 길에서 어깨가 자꾸 닿습니다.', '이동 흐름을 살피며 가능한 넓은 쪽으로 벗어난다', '사람들을 밀며 줄 사이로 들어간다', 'warning'],
    ['뒤쪽에서 떠밀림', '공연이 끝난 뒤 내 의지와 달리 밀리고 있습니다.', '군중의 힘에 무리하게 저항하지 않고 가슴 앞 공간을 보호한다', '가슴 자세로 다른 사람을 밀어낸다', 'chest']
  ]}
};

// Story cards for the non-Halloween themes. Each card turns one reviewed crowd-safety objective into a scene from that event.
// Row: [art, caption, title, body, keyPoint, question, clue, poll options, poll feedbacks]
const THEME_STORY_ROWS = {
  school: {
    '1-2': [
      ['classroom', '우리 학교 축제', '오늘은 학교 축제 날이에요', '운동장과 복도에 공연과 체험 부스가 열려요. 여러 반 친구들이 한꺼번에 움직여서 평소보다 붐벼요.', '축제 날에는 길이 더 붐벼요.', '학교 축제에서 가장 해 보고 싶은 것은 무엇인가요?',
        '축제 날에는 다른 반 친구들도 같은 길로 다녀서 복도가 평소보다 붐벼요!',
        ['🎤 공연 보기', '🎨 체험 부스 하기'], ['좋아요! 공연장에 갈 때는 나가는 문도 함께 찾아봐요.', '멋져요! 부스 줄이 길면 다른 부스부터 둘러봐요.']],
      ['exit', '나가는 문 찾기', '강당에 들어가기 전에', '공연을 보러 강당에 가요. 들어가기 전에 나가는 문이 어디 있는지 선생님과 함께 찾아봐요.', '들어갈 때 나가는 문도 봐요.', '우리 학교 강당의 나가는 문은 어디에 있나요?',
        '초록색 바탕에 달리는 사람이 그려진 표지판이 나가는 문(비상구)을 알려 줘요!',
        ['🧑‍🏫 선생님과 함께 찾기', '👀 모둠 친구와 함께 찾기'], ['좋아요! 선생님과 함께 보면 정확하게 알 수 있어요.', '좋아요! 친구와 함께 기억하면 더 오래 잊지 않아요.']],
      ['path', '복도에서 걷기', '복도에서는 오른쪽으로', '마주 오는 친구들이 많은 복도예요. 오른쪽으로 천천히 걷고, 갑자기 멈추지 않아요.', '오른쪽으로 천천히 걸어요.', '복도에서 뛰면 어떤 일이 생길까요?',
        '마주 오는 친구와 부딪히지 않으려면 오른쪽으로 걷고, 멈출 때는 벽 쪽으로 비켜서요!',
        ['➡️ 오른쪽으로 걷기', '🐢 천천히 걷기'], ['맞아요! 오른쪽으로 걸으면 마주 오는 친구와 덜 부딪혀요.', '맞아요! 천천히 걸으면 갑자기 멈춰도 부딪히지 않아요.']],
      ['booth', '긴 줄', '인기 부스 줄이 계단까지 왔어요', '줄이 너무 길어 계단까지 이어졌어요. 계단에서 줄을 서지 않고, 선생님께 알린 뒤 다른 부스를 먼저 가요.', '계단은 줄 서는 곳이 아니에요.', '줄이 너무 길 때 무엇을 하면 좋을까요?',
        '계단에서는 한 사람만 밀려도 여러 사람이 함께 넘어질 수 있어요!',
        ['🔄 다른 부스 먼저 가기', '🙋 선생님께 알리기'], ['좋은 생각이에요! 줄이 줄어들면 다시 오면 돼요.', '좋아요! 선생님이 줄을 안전한 곳으로 옮겨 줄 수 있어요.']],
      ['crowd', '떨어진 안내지', '안내지를 떨어뜨렸어요', '사람이 많은 복도에서 안내지가 떨어졌어요. 바로 숙여 줍지 않고, 먼저 덜 붐비는 곳으로 가요.', '물건보다 내 몸이 먼저예요.', '떨어진 물건은 언제 주우면 좋을까요?',
        '붐비는 곳에서 허리를 숙이면 다른 사람에게 밀려 넘어지기 쉬워요!',
        ['🚶 넓은 곳으로 먼저 가기', '🙋 어른에게 도움 청하기'], ['맞아요! 덜 붐비는 곳으로 가는 게 먼저예요.', '좋아요! 어른이 사람이 줄어든 뒤 함께 찾아 줄 수 있어요.']],
      ['meet', '차례대로 나가기', '즐겁게 마무리해요', '공연이 끝나면 한꺼번에 나가지 않고 차례를 기다려요. 친구를 놓치면 정한 곳에서 선생님을 기다려요.', '차례를 지키면 모두 안전해요.', '우리 반이 만날 곳은 어디로 정할까요?',
        '길을 잃으면 여기저기 찾아다니지 말고 약속한 곳에서 기다려요!',
        ['🚩 교실 앞에서 만나기', '🌳 운동장 나무 아래에서 만나기'], ['좋아요! 모두 아는 장소라서 찾기 쉬워요.', '좋아요! 눈에 잘 띄는 곳이라 찾기 쉬워요.']]
    ],
    '3-4': [
      ['classroom', '축제 준비', '학교 축제 날의 길은 평소와 달라요', '학교 축제에는 공연, 체험 부스, 먹거리 장터가 한꺼번에 열려요. 많은 학생이 같은 시간에 움직이기 때문에 평소에 넓던 복도와 계단도 금세 붐벼요.', '행사 날에는 길이 좁아질 수 있다고 미리 생각해요.', '우리 학교에서 가장 붐빌 것 같은 곳은 어디인가요?',
        '사람이 많이 모이는 곳은 행사 시작 직전과 끝난 직후에 가장 붐벼요!',
        ['🎤 강당 공연 무대', '🍢 먹거리 장터'], ['좋아요! 공연이 끝나는 시간에는 출구가 붐비니 미리 출구를 확인해요.', '좋아요! 장터 줄이 통로를 막지 않는지도 살펴봐요.']],
      ['exit', '강당 입구', '공연장에 들어가기 전에 확인할 것', '강당에 들어가기 전에 비상구 표지판과 나가는 길을 확인해요. 공연이 끝나면 모두가 한꺼번에 일어나니, 가까운 출구 하나만 생각하지 말고 다른 출구도 알아 둬요.', '들어가기 전에 나갈 길을 두 곳 이상 알아 둬요.', '가까운 출구가 붐빈다면 어디로 나갈 수 있을까요?',
        '비상구 표지판의 초록색 달리는 사람 그림은 대피할 수 있는 방향을 알려 줘요!',
        ['🚪 다른 출구로 돌아가기', '⏳ 사람이 줄 때까지 기다리기'], ['좋은 판단이에요! 출구를 두 곳 이상 알아 두면 덜 붐비는 길을 고를 수 있어요.', '좋은 판단이에요! 자리에서 잠시 기다리면 한꺼번에 몰리지 않아요.']],
      ['path', '양방향 복도', '복도에서 마주 걸을 때', '부스를 찾아다니는 학생들이 복도 양쪽에서 걸어와요. 오른쪽으로 걷고, 친구를 기다릴 때는 길 가운데가 아니라 벽 쪽으로 비켜서요.', '길 가운데에서 갑자기 멈추지 않아요.', '복도 가운데에서 멈춰 서면 뒤에 오는 사람은 어떻게 될까요?',
        '길 가운데서 갑자기 멈추면 뒤에서 오는 사람이 연달아 부딪힐 수 있어요!',
        ['🧱 벽 쪽으로 비켜서기', '🙌 친구에게 손짓해서 부르기'], ['맞아요! 벽 쪽에 서면 다른 사람이 지나갈 길이 생겨요.', '좋아요! 손짓할 때도 길 가운데에서는 비켜서서 기다려요.']],
      ['booth', '계단까지 이어진 줄', '인기 부스 줄이 계단까지 이어졌어요', '좁은 계단에 줄이 길게 늘어서면 오르내리는 사람과 부딪히고 밀리기 쉬워요. 줄을 계단에서 늘리지 않도록 선생님께 알리고, 다른 부스를 먼저 둘러봐요.', '계단과 좁은 통로에는 줄을 세우지 않아요.', '줄을 어디에 서면 다른 사람이 지나가기 편할까요?',
        '계단은 발을 헛디디기 쉬워서, 붐비는 계단에서 밀리면 여러 사람이 함께 넘어질 수 있어요!',
        ['🏫 넓은 운동장 쪽에 줄 서기', '🕒 시간 정해 다시 오기'], ['좋은 생각이에요! 넓은 곳에 줄을 서면 지나가는 사람과 부딪히지 않아요.', '좋은 생각이에요! 붐비는 시간을 피하면 모두가 편해요.']],
      ['crowd', '혼잡 신호', '어깨가 자꾸 닿기 시작했어요', '공연이 끝난 뒤 복도에서 걸음이 느려지고 어깨가 자꾸 닿아요. 이것은 혼잡해진다는 신호예요. 떨어진 안내지는 줍지 말고, 흐름을 보며 덜 붐비는 쪽으로 벗어나요.', '혼잡 신호를 느끼면 넓은 쪽으로 벗어나요.', '혼잡 신호에는 또 어떤 것이 있을까요?',
        '걸음이 느려지고 몸이 자꾸 닿는 것은 \'여기가 혼잡해지고 있어요\'라는 위험 신호예요!',
        ['🐢 걸음이 느려져요', '🗣️ 소리가 커지고 웅성거려요'], ['맞아요! 걸음이 느려지면 앞쪽이 막히고 있다는 뜻일 수 있어요.', '좋은 관찰이에요! 주변 상황이 달라지면 멈추고 둘러봐요.']],
      ['meet', '안전한 마무리', '다음 축제를 더 안전하게', '축제가 끝나면 반별로 차례를 정해 이동하고, 친구를 놓치면 약속한 장소에서 기다려요. 위험해 보이는 곳을 발견하면 바로 선생님께 알려요.', '차례, 약속 장소, 알리기를 기억해요.', '우리 반 축제 안전 약속을 한 문장으로 만들어 볼까요?',
        '위험한 곳을 발견했을 때 어른에게 알리는 것도 모두를 지키는 안전 행동이에요!',
        ['🚶 차례대로 이동하기', '📣 위험하면 바로 알리기'], ['멋진 약속이에요! 차례를 지키면 한꺼번에 몰리지 않아요.', '멋진 약속이에요! 빨리 알리면 큰 사고를 막을 수 있어요.']]
    ],
    '5-6': [
      ['classroom', '행사 기획자의 눈', '학교 축제의 동선을 미리 그려 봅니다', '공연, 체험 부스, 장터가 동시에 열리면 학생들의 이동 방향이 서로 엇갈립니다. 어느 시간에 어느 장소로 사람이 몰릴지 미리 예상하면 혼잡을 줄일 수 있습니다.', '혼잡은 미리 예상할수록 줄일 수 있습니다.', '공연이 끝나는 시간과 장터 시작 시간이 겹치면 어떤 문제가 생길까요?',
        '행사 시간표를 겹치지 않게 짜는 것만으로도 특정 장소에 사람이 한꺼번에 몰리는 것을 줄일 수 있어요!',
        ['🕒 행사 시간 나누기', '🗺️ 이동 방향 정하기'], ['좋은 설계예요! 시간을 나누면 한 장소에 사람이 몰리는 것을 줄일 수 있어요.', '좋은 설계예요! 한 방향으로 다니는 동선은 엇갈리는 흐름을 줄여 줘요.']],
      ['exit', '출구 점검', '강당의 출구를 여러 개 확인합니다', '강당에 들어갈 때 비상구 위치와 나가는 길을 확인합니다. 모든 사람이 가장 가까운 출구로만 몰리면 병목이 생기므로, 다른 출구까지 함께 알아 둡니다.', '출구 하나만 알면 그곳이 병목이 될 수 있습니다.', '출구 안내를 어떻게 하면 사람들이 한쪽으로 몰리지 않을까요?',
        '좁아지는 지점(병목)에서는 앞사람이 멈추면 뒤에서 미는 힘이 계속 쌓일 수 있어요!',
        ['🪧 출구별 안내판 붙이기', '🧑‍🏫 구역별로 퇴장 순서 정하기'], ['훌륭해요! 안내판이 있으면 사람들이 여러 출구로 나뉘어 나갈 수 있어요.', '훌륭해요! 순서를 정하면 출구 앞 병목을 줄일 수 있어요.']],
      ['path', '양방향 흐름', '복도의 우측통행은 왜 필요할까요?', '양방향으로 걷는 복도에서 우측통행을 하면 서로의 흐름이 나뉘어 부딪힘이 줄어듭니다. 다만 사람에게 떠밀리는 상황에서는 방향을 고집하지 않고 군중의 힘에 무리하게 저항하지 않습니다.', '평상시 규칙과 위급 상황의 판단을 구분합니다.', '우측통행 안내가 있어도 상황에 따라 달리 판단해야 할 때는 언제일까요?',
        '우측통행은 평상시 질서를 위한 약속이고, 떠밀릴 때는 군중의 흐름에 무리하게 맞서지 않는 것이 먼저예요!',
        ['📏 평상시에는 우측통행', '🌊 떠밀릴 때는 무리하게 버티지 않기'], ['정확해요! 평상시 우측통행은 흐름을 나누는 데 도움이 돼요.', '정확해요! 위급할 때는 몸을 보호하는 판단이 우선이에요.']],
      ['booth', '줄 서기 설계', '줄의 위치도 안전 설계의 일부입니다', '인기 부스의 줄이 계단이나 좁은 복도까지 이어지면 이동로가 막히고 밀림이 생기기 쉽습니다. 줄이 길어지면 담당 교사에게 알려 넓은 장소로 줄을 옮기거나 번호표를 쓰는 방법을 제안합니다.', '줄은 이동로를 막지 않는 곳에 세웁니다.', '줄이 이동로를 막지 않게 하는 방법에는 무엇이 있을까요?',
        '번호표나 시간 예약처럼 줄을 짧게 만드는 방법도 혼잡을 줄이는 안전 대책이에요!',
        ['🎫 번호표 나눠 주기', '🏟️ 넓은 곳으로 줄 옮기기'], ['좋은 제안이에요! 번호표가 있으면 줄을 길게 서지 않아도 돼요.', '좋은 제안이에요! 넓은 곳에 줄을 서면 이동로가 막히지 않아요.']],
      ['crowd', '위험 신호 읽기', '보행 속도가 갑자기 느려졌다면', '보행 속도가 떨어지고 주변 사람과 몸이 계속 닿는다면 혼잡 신호입니다. 떨어진 물건을 줍느라 허리를 숙이지 말고, 흐름을 살피며 가장자리나 넓은 쪽으로 벗어납니다.', '물건보다 몸을 먼저 보호합니다.', '혼잡 신호를 늦게 알아차리면 어떤 일이 생길 수 있을까요?',
        '혼잡한 곳에서 허리를 숙이면 균형을 잃고 넘어지기 쉬워 더 큰 위험으로 이어질 수 있어요!',
        ['🤕 넘어지는 사람이 생길 수 있어요', '🧱 출구 쪽이 꽉 막힐 수 있어요'], ['맞아요! 한 사람이 넘어지면 주변 사람도 연달아 넘어질 수 있어요.', '맞아요! 막힌 곳 뒤로 사람이 계속 쌓이면 압력이 커질 수 있어요.']],
      ['meet', '다시 설계하기', '더 안전한 학교 축제 안내문 만들기', '반별 퇴장 순서, 만날 장소, 위험을 발견했을 때 알릴 사람을 안내문에 담습니다. 안전 규칙이 미리 공유되면 모든 학생이 마음 놓고 축제를 즐길 수 있습니다.', '안전 계획은 함께 공유될 때 힘을 발휘합니다.', '축제 안내문에 꼭 넣을 안전 규칙 두 가지는 무엇일까요?',
        '안전 규칙은 미리 알리고 함께 연습할 때 실제 상황에서도 떠올리기 쉬워요!',
        ['🚩 반별 만날 장소', '📣 위험을 알릴 사람'], ['좋은 선택이에요! 만날 곳이 정해져 있으면 서로 찾느라 헤매지 않아요.', '좋은 선택이에요! 누구에게 알릴지 알면 빠르게 대응할 수 있어요.']]
    ]
  },
  field: {
    '1-2': [
      ['bus', '버스에서 내려요', '체험학습 장소에 도착했어요', '버스에서 내리면 모둠 친구와 함께 줄을 서요. 다른 학교 친구들도 많이 와서 입구가 붐벼요.', '내리면 모둠 친구와 함께 있어요.', '체험학습에서 누구와 함께 다닐까요?',
        '체험학습 장소에는 다른 학교 친구들도 많이 와서 입구와 출구가 붐빌 수 있어요!',
        ['👫 모둠 친구', '🧑‍🏫 선생님'], ['좋아요! 모둠 친구와 서로 잘 있는지 살펴봐요.', '좋아요! 선생님 가까이에서 안내를 잘 들어요.']],
      ['exit', '입구와 출구', '들어가는 문, 나가는 문', '박물관에 들어가기 전에 선생님이 나가는 문을 알려 줘요. 귀를 쫑긋 세우고 잘 들어요.', '나가는 문을 기억해요.', '나가는 문을 잊어버리면 누구에게 물어볼까요?',
        '나가는 문 위에는 초록색 비상구 표지판이 있어요. 함께 찾아봐요!',
        ['🧑‍🏫 선생님', '🪪 이름표 단 직원'], ['맞아요! 선생님이 가장 먼저 도와줄 수 있어요.', '맞아요! 이름표를 단 직원도 길을 알려 줄 수 있어요.']],
      ['path', '전시실 길', '전시실에서 마주 걸어요', '다른 학교 친구들이 앞에서 걸어와요. 오른쪽으로 천천히 걷고, 사진은 길을 막지 않는 곳에서 찍어요.', '길 가운데에서 멈추지 않아요.', '사진을 찍고 싶을 때는 어디에 서면 좋을까요?',
        '사진은 사람이 지나가지 않는 벽 쪽에서 찍으면 모두가 편해요!',
        ['🧱 벽 쪽에 서서 찍기', '👀 사람이 적을 때 찍기'], ['좋아요! 벽 쪽은 다른 사람이 지나가는 길을 막지 않아요.', '좋아요! 사람이 적을 때 찍으면 서로 편해요.']],
      ['crowd', '붐비는 출구', '출구가 꽉 찼어요', '구경이 끝나고 출구 앞이 붐벼요. 앞으로 밀지 않고 선생님 말을 들으며 차례를 기다려요.', '밀지 않고 기다려요.', '줄을 기다릴 때 어떻게 하면 좋을까요?',
        '앞사람을 밀면 여러 사람이 함께 넘어질 수 있어요. 손은 내 몸 가까이에!',
        ['🙌 손은 내 몸 가까이', '🐢 앞사람과 거리 두기'], ['좋아요! 손을 몸 가까이 두면 앞사람을 밀지 않아요.', '좋아요! 조금 떨어지면 부딪히지 않아요.']],
      ['bag', '떨어진 기념품', '기념품을 떨어뜨렸어요', '사람이 많은 출구에서 기념품이 떨어졌어요. 바로 숙이지 않고, 먼저 덜 붐비는 곳으로 가서 선생님께 말해요.', '물건보다 내 몸이 먼저예요.', '물건을 잃어버리면 누구에게 말할까요?',
        '붐비는 곳에서 숙이면 넘어지기 쉬워요. 사람이 줄어든 뒤 어른과 함께 찾아요!',
        ['🧑‍🏫 선생님께 말하기', '👫 모둠 친구에게 알리기'], ['좋아요! 선생님이 사람이 줄어든 뒤 함께 찾아 줄 거예요.', '좋아요! 친구에게 알리면 함께 선생님께 말할 수 있어요.']],
      ['meet', '만나는 곳', '친구를 놓쳤을 때', '모둠 친구가 안 보이면 여기저기 찾아다니지 않아요. 처음 정한 만나는 곳에서 기다리거나 안내하는 어른에게 말해요.', '약속한 곳에서 기다려요.', '우리 모둠 만나는 곳은 어디로 정할까요?',
        '안내 데스크나 이름표를 단 직원도 도움을 줄 수 있는 어른이에요!',
        ['🚌 버스 내린 곳', '🪧 안내 데스크 앞'], ['좋아요! 모두 기억하기 쉬운 곳이에요.', '좋아요! 도와줄 어른이 있는 곳이라 더 안전해요.']]
    ],
    '3-4': [
      ['bus', '도착과 모둠 확인', '버스에서 내리면 먼저 할 일', '체험학습 장소에는 여러 학교의 버스가 한꺼번에 도착해요. 내리자마자 흩어지지 말고 모둠 인원을 확인한 뒤, 인솔 선생님의 안내에 따라 이동해요.', '도착하면 모둠 확인이 먼저예요.', '모둠 인원을 확인하는 좋은 방법은 무엇일까요?',
        '여러 학교 버스가 같은 시간에 도착하면 주차장과 입구가 동시에 붐빌 수 있어요!',
        ['🔢 번호 붙여 세기', '👀 짝꿍 확인하기'], ['좋아요! 번호를 붙이면 빠르게 인원을 확인할 수 있어요.', '좋아요! 짝꿍끼리 서로 확인하면 아무도 놓치지 않아요.']],
      ['exit', '박물관 입구', '입구에서 출구까지 미리 살펴요', '단체 관람객이 몰리는 입구에서는 가장 좁은 문으로 달려가지 않아요. 안내도를 보고 이동로와 나가는 곳을 먼저 확인한 뒤 차례대로 들어가요.', '안내도에서 나가는 곳을 먼저 찾아요.', '안내도에서 어떤 표시를 찾으면 나가는 길을 알 수 있을까요?',
        '안내도에 있는 초록색 비상구 표시와 화살표를 찾으면 나가는 길을 알 수 있어요!',
        ['🟩 비상구 표시', '➡️ 출구 화살표'], ['맞아요! 초록색 비상구 표시는 대피할 수 있는 곳을 알려 줘요.', '맞아요! 화살표를 따라가면 나가는 길을 찾을 수 있어요.']],
      ['path', '전시실 통로', '다른 단체와 마주 걸을 때', '전시실 통로에서 다른 학교 학생들과 마주 걸어요. 오른쪽으로 차근차근 걷고, 사진은 통로를 막지 않는 곳에서 짧게 찍어요.', '통로 가운데에서 오래 멈추지 않아요.', '인기 있는 전시물 앞이 붐빌 때는 어떻게 할까요?',
        '인기 전시물 앞은 사람이 몰리기 쉬우니 먼저 덜 붐비는 전시부터 보는 것도 좋은 방법이에요!',
        ['🔄 다른 전시 먼저 보기', '⏳ 가장자리에서 기다리기'], ['좋은 판단이에요! 덜 붐비는 곳부터 보면 모두가 편해요.', '좋은 판단이에요! 가장자리에서 기다리면 통로를 막지 않아요.']],
      ['crowd', '혼잡 신호', '출구 앞에서 걸음이 느려졌어요', '관람이 끝날 시간이 되자 출구 앞에 사람이 몰려 걸음이 느려지고 어깨가 닿아요. 앞사람을 밀지 말고, 흐름을 보며 덜 붐비는 쪽에서 기다려요.', '혼잡 신호가 보이면 서두르지 않아요.', '출구가 붐빌 때 왜 서두르면 위험할까요?',
        '출구 앞처럼 길이 좁아지는 곳에서 뒤에서 밀면 앞사람에게 힘이 쌓여요!',
        ['🤕 넘어질 수 있어서', '🧱 앞사람이 밀려서'], ['맞아요! 서두르다 넘어지면 뒤 사람도 함께 넘어질 수 있어요.', '맞아요! 내가 밀면 그 힘이 앞사람에게 전해져요.']],
      ['bag', '물건보다 몸', '기념품이 발밑에 떨어졌어요', '출구 근처가 붐빌 때 작은 기념품이 떨어졌어요. 혼잡한 곳에서 허리를 숙이면 넘어지거나 밀릴 수 있어요. 몸을 먼저 보호하고 사람이 줄어든 뒤 선생님과 함께 찾아요.', '붐빌 때는 숙이지 않아요.', '물건을 다시 찾을 수 있는 안전한 방법은 무엇일까요?',
        '잃어버린 물건은 사람이 줄어든 뒤 직원에게 물어보면 찾을 수 있는 경우가 많아요!',
        ['🧑‍🏫 선생님과 함께 찾기', '🪧 분실물 센터에 묻기'], ['좋아요! 사람이 줄어든 뒤 함께 찾으면 안전해요.', '좋아요! 분실물 센터에 맡겨진 경우도 많아요.']],
      ['meet', '길을 잃었을 때', '모둠과 떨어졌다면', '모둠과 떨어지면 혼자 찾아다니다 더 멀어질 수 있어요. 미리 정한 만날 장소로 가거나, 안내 데스크·직원에게 학교 이름과 선생님 이름을 말해요.', '만날 장소와 선생님 이름을 기억해요.', '길을 잃었을 때 말해야 할 정보는 무엇일까요?',
        '학교 이름, 학년과 반, 선생님 이름을 기억해 두면 길을 잃었을 때 큰 도움이 돼요!',
        ['🏫 학교와 반 이름', '🧑‍🏫 선생님 이름'], ['맞아요! 학교와 반을 말하면 선생님을 빨리 찾을 수 있어요.', '맞아요! 선생님 이름을 알면 연락하기 쉬워요.']]
    ],
    '5-6': [
      ['bus', '인솔 계획', '현장체험학습의 첫 10분이 중요합니다', '여러 학교 버스가 동시에 도착하면 주차장과 입구에 사람이 몰립니다. 하차 후 모둠 인원 확인, 집결 장소, 이동 순서를 먼저 정해 두면 혼잡 속에서도 흩어지지 않습니다.', '도착 직후의 계획이 하루의 안전을 좌우합니다.', '도착 직후 모둠이 꼭 확인해야 할 세 가지는 무엇일까요?',
        '도착 시간을 학교끼리 조금씩 나누기만 해도 입구 혼잡을 크게 줄일 수 있어요!',
        ['🔢 인원 확인', '🚩 집결 장소'], ['좋은 선택이에요! 인원 확인은 모든 이동의 시작이에요.', '좋은 선택이에요! 집결 장소를 정하면 흩어져도 다시 만날 수 있어요.']],
      ['exit', '동선 읽기', '안내도로 동선을 미리 그려 봅니다', '관람 시설의 안내도에는 출입구, 비상구, 엘리베이터와 계단 위치가 표시되어 있습니다. 입구가 넓어도 내부 통로가 좁을 수 있으므로 들어가기 전에 나가는 경로를 두 가지 이상 확인합니다.', '들어가기 전에 나가는 경로를 두 가지 이상 확인합니다.', '안내도에서 혼잡해질 수 있는 지점을 어떻게 찾을 수 있을까요?',
        '계단과 엘리베이터 앞, 출입문처럼 길이 좁아지는 곳이 혼잡이 생기기 쉬운 지점이에요!',
        ['↔️ 길이 좁아지는 곳 찾기', '🚪 출입문이 적은 곳 찾기'], ['정확해요! 좁아지는 지점은 병목이 생기기 쉬워요.', '정확해요! 출입문이 적은 곳은 사람이 한쪽으로 몰릴 수 있어요.']],
      ['path', '양방향 통로', '통로에서 갑자기 멈추면 생기는 일', '전시실 통로에서 한 사람이 갑자기 멈추면 뒤따르는 사람들이 연달아 속도를 줄이며 정체가 생깁니다. 사진 촬영이나 대화는 통로 가장자리에서 하고, 양방향 흐름에서는 오른쪽으로 걷습니다.', '작은 멈춤이 큰 정체로 이어질 수 있습니다.', '단체 관람에서 통로 정체를 줄일 수 있는 규칙은 무엇일까요?',
        '앞에서 생긴 정체는 뒤쪽 사람에게 잘 보이지 않아서 뒤에서는 계속 밀고 들어올 수 있어요!',
        ['📸 사진은 가장자리에서', '🗣️ 대화는 멈추지 않고 걸으면서'], ['좋은 규칙이에요! 가장자리에서 찍으면 통로가 막히지 않아요.', '좋은 규칙이에요! 흐름을 끊지 않으면 정체가 줄어요.']],
      ['crowd', '혼잡 판단', '출구가 붐빌 때의 선택', '관람 종료 시간에 출구 앞이 붐비면 보행 속도가 느려지고 몸이 닿기 시작합니다. 이때는 출구로 서둘러 파고들기보다 흐름을 살피며 덜 붐비는 곳에서 기다리거나 다른 출구를 이용합니다.', '서두르기보다 기다리는 것이 더 빠를 때가 있습니다.', '출구가 하나뿐이라면 어떤 방법으로 혼잡을 줄일 수 있을까요?',
        '출구가 붐빌 때 잠시 기다리면 한꺼번에 몰리는 것을 막아 전체 이동이 오히려 원활해질 수 있어요!',
        ['⏳ 구역별로 나눠서 나가기', '🕒 종료 시간 전에 미리 이동하기'], ['훌륭해요! 나눠서 나가면 출구 앞 병목이 줄어요.', '훌륭해요! 붐비는 시간을 피하는 것도 좋은 전략이에요.']],
      ['bag', '우선순위', '소지품과 내 몸, 무엇이 먼저일까요?', '혼잡한 곳에서 떨어진 물건을 주우려고 허리를 숙이면 균형을 잃고 넘어질 수 있으며, 뒤에서 오는 사람도 함께 위험해집니다. 몸을 먼저 보호하고, 물건은 혼잡이 풀린 뒤 직원이나 교사에게 도움을 요청합니다.', '물건은 다시 찾을 수 있지만 안전은 먼저 지켜야 합니다.', '친구가 물건을 주우려 할 때 어떻게 말해 줄까요?',
        '혼잡한 곳에서는 넘어진 사람 위로 다른 사람이 연달아 넘어질 수 있어 허리를 숙이지 않는 것이 중요해요!',
        ['🛑 "숙이지 말고 먼저 이동하자!"', '🧑‍🏫 "사람이 줄면 선생님과 찾자!"'], ['좋아요! 짧고 분명한 말이 위급할 때 더 잘 전달돼요.', '좋아요! 다시 찾을 방법을 알려 주면 친구가 안심할 수 있어요.']],
      ['meet', '비상 연락 계획', '흩어졌을 때를 대비한 약속', '모둠과 떨어졌을 때를 대비해 집결 장소, 교사 연락처, 도움을 요청할 장소를 미리 정합니다. 위급한 상황을 보았다면 주변 직원에게 알리고 필요하면 112나 119에 신고합니다.', '흩어지기 전에 다시 만나는 방법을 정합니다.', '우리 모둠의 비상 연락 계획에는 무엇을 넣을까요?',
        '위급 상황을 신고할 때는 장소, 상황, 다친 사람 수를 차분히 말하면 도움이 빨리 도착해요!',
        ['📞 선생님 연락처', '📍 도움 요청 장소'], ['좋은 계획이에요! 연락처가 있으면 빠르게 연결될 수 있어요.', '좋은 계획이에요! 도움을 청할 곳을 알면 당황하지 않아요.']]
    ]
  },
  trip: {
    '1-2': [
      ['bus', '여행 출발', '반 친구들과 여행을 떠나요', '여러 반이 함께 버스를 타고 여행을 가요. 휴게소와 숙소에는 다른 사람들도 많아서 길이 붐빌 수 있어요.', '처음 가는 곳은 더 잘 살펴봐요.', '여행 가서 가장 해 보고 싶은 것은 무엇인가요?',
        '휴게소와 관광지에는 다른 여행객도 많아서 우리 반만 있을 때보다 훨씬 붐벼요!',
        ['🏯 멋진 곳 구경하기', '🍙 친구와 맛있는 것 먹기'], ['좋아요! 구경할 때도 짝꿍과 함께 다녀요.', '좋아요! 먹을 곳이 붐비면 차례를 기다려요.']],
      ['exit', '숙소 로비', '숙소에 도착했어요', '여러 반이 한꺼번에 로비로 들어와요. 가방을 끌고 사람 사이로 들어가지 않고, 선생님 안내에 따라 기다려요.', '선생님 안내에 따라 기다려요.', '숙소에서 나가는 문은 어떻게 찾을까요?',
        '큰 가방을 끌고 사람 사이로 들어가면 다른 사람 발에 걸릴 수 있어요!',
        ['🟩 초록색 표지판 찾기', '🧑‍🏫 선생님께 물어보기'], ['맞아요! 초록색 표지판이 나가는 문을 알려 줘요.', '맞아요! 선생님께 물어보면 정확히 알 수 있어요.']],
      ['path', '관광지 길', '좁은 길에서는 천천히', '관광지 골목이 좁고 사람이 많아요. 오른쪽으로 천천히 걷고, 짝꿍 손을 놓치지 않아요.', '짝꿍과 함께 천천히 걸어요.', '좁은 길에서 짝꿍과 어떻게 걸으면 좋을까요?',
        '짝꿍과 손을 잡을 때는 옆으로 길게 서지 말고 앞뒤로 서면 길을 막지 않아요!',
        ['👫 앞뒤로 서서 걷기', '✋ 손 꼭 잡기'], ['좋아요! 앞뒤로 서면 다른 사람이 지나갈 길이 생겨요.', '좋아요! 손을 잡으면 서로 놓치지 않아요.']],
      ['crowd', '꽉 찬 골목', '어깨가 자꾸 닿아요', '골목에서 걸음이 느려지고 어깨가 자꾸 닿아요. 더 좁은 길로 들어가지 않고, 넓은 쪽으로 천천히 나와요.', '넓은 쪽으로 벗어나요.', '어깨가 자꾸 닿으면 어떻게 해야 할까요?',
        '사람이 너무 많으면 \'조금 기다렸다 가자!\'라고 말하는 것도 용기 있는 행동이에요!',
        ['🚶 넓은 쪽으로 나오기', '⏳ 잠깐 기다리기'], ['맞아요! 넓은 곳은 숨쉬기도 편해요.', '맞아요! 사람이 줄어든 뒤 가면 더 안전해요.']],
      ['bag', '넘어진 가방', '가방이 넘어졌어요', '사람이 많은 길에서 가방이 넘어졌어요. 그 자리에서 바로 세우지 않고, 먼저 덜 붐비는 곳으로 가서 선생님을 불러요.', '가방보다 내 몸이 먼저예요.', '짐이 무거울 때 누구에게 도움을 청할까요?',
        '가방은 다시 세울 수 있어요. 붐비는 곳에서는 내 몸을 먼저 지켜요!',
        ['🧑‍🏫 선생님', '👫 짝꿍'], ['좋아요! 선생님이 짐 옮기는 것을 도와줄 수 있어요.', '좋아요! 짝꿍과 함께 선생님께 말해요.']],
      ['meet', '만나는 곳', '여행지에서 길을 잃으면', '처음 가는 곳에서 친구들이 안 보이면 멈춰서 주위를 살펴요. 정한 곳에서 기다리고, 안내하는 어른에게 학교 이름을 말해요.', '멈추고, 기다리고, 말해요.', '여행 가기 전에 꼭 외워 둘 것은 무엇일까요?',
        '학교 이름과 선생님 이름을 외워 두면 길을 잃었을 때 어른이 빨리 도와줄 수 있어요!',
        ['🏫 학교 이름', '🧑‍🏫 선생님 이름'], ['맞아요! 학교 이름을 말하면 찾기 쉬워요.', '맞아요! 선생님 이름을 알면 어른이 연락해 줄 수 있어요.']]
    ],
    '3-4': [
      ['bus', '여행 계획', '수학여행지는 처음 가는 곳이에요', '수학여행지는 길과 건물이 낯설고, 다른 학교와 여행객도 함께 있어요. 출발 전에 일정표를 보며 붐빌 만한 장소와 만날 장소를 미리 알아 둬요.', '낯선 곳일수록 미리 알아 둬요.', '일정표에서 붐빌 것 같은 장소는 어디인가요?',
        '여행지에는 우리 학교뿐 아니라 다른 학교와 일반 여행객도 함께 있어 시간대에 따라 매우 붐빌 수 있어요!',
        ['🏯 유명한 관광지 입구', '🍜 점심 먹는 식당가'], ['좋은 예상이에요! 입구에서는 모둠이 흩어지지 않게 주의해요.', '좋은 예상이에요! 식사 시간에는 많은 사람이 한꺼번에 몰려요.']],
      ['exit', '숙소 로비', '숙소에 도착하면 대피로부터', '여러 학급이 동시에 로비로 들어오면 혼잡해져요. 가방을 끌고 인파 가운데로 들어가지 말고, 안내에 따라 기다리며 방 근처의 비상구와 계단 위치를 확인해요.', '숙소에서는 방과 가까운 비상구를 확인해요.', '숙소 방에서 가장 가까운 비상구는 어떻게 찾을까요?',
        '숙소에서는 방문 뒤나 복도에 붙은 대피 안내도를 보면 비상구 위치를 알 수 있어요!',
        ['🗺️ 대피 안내도 보기', '🟩 복도 비상구 표지판 따라가기'], ['맞아요! 대피 안내도에 비상구와 계단 위치가 나와 있어요.', '맞아요! 표지판을 따라 직접 한 번 걸어 보면 더 잘 기억해요.']],
      ['path', '관광지 골목', '좁은 길에서 마주 걸을 때', '관광지 골목은 좁고 구경하는 사람들이 자주 멈춰요. 오른쪽으로 걷고, 구경하고 싶은 가게가 있으면 길을 막지 않도록 가장자리에 서요.', '구경할 때는 가장자리에 서요.', '좁은 골목에서 모둠이 함께 이동하는 좋은 방법은 무엇일까요?',
        '모둠이 옆으로 나란히 걸으면 길을 막기 쉬워요. 앞뒤로 줄지어 걸으면 길이 넓어져요!',
        ['🚶‍♂️ 앞뒤로 줄지어 걷기', '🙋 모둠장이 앞에서 안내하기'], ['좋아요! 줄지어 걸으면 다른 사람이 지나갈 길이 생겨요.', '좋아요! 모둠장이 앞에서 살피면 함께 움직이기 쉬워요.']],
      ['crowd', '혼잡 신호', '보행 속도가 느려지고 몸이 닿아요', '유명한 장소 앞에서 걸음이 느려지고 몸이 자꾸 닿기 시작해요. 더 좁은 길로 꺾어 빨리 빠져나가려 하지 말고, 흐름을 살피며 가능한 넓은 쪽으로 벗어나요.', '좁은 지름길보다 넓은 길이 안전해요.', '왜 좁은 지름길이 더 위험할 수 있을까요?',
        '좁은 길은 사람이 조금만 늘어도 금세 꽉 차서 빠져나오기 어려워질 수 있어요!',
        ['🚧 금세 꽉 차서', '🔙 되돌아 나오기 어려워서'], ['맞아요! 좁은 길은 조금만 붐벼도 움직이기 어려워요.', '맞아요! 들어가는 사람과 나오는 사람이 엇갈리면 더 위험해요.']],
      ['bag', '여행 가방', '사람이 밀려오는데 가방이 넘어졌어요', '사람이 밀려오는 길에서 가방이 넘어졌어요. 그 자리에서 가방을 세우려고 허리를 숙이면 밀려 넘어질 수 있어요. 가방보다 몸을 먼저 보호하며 이동 가능한 곳으로 가요.', '가방보다 몸을 먼저 보호해요.', '여행 가방은 어떻게 챙기면 이동이 더 안전할까요?',
        '큰 가방은 숙소에 두고, 다닐 때는 가벼운 가방만 메면 붐비는 곳에서 몸을 지키기 쉬워요!',
        ['🎒 가벼운 가방만 메기', '🧳 큰 가방은 숙소에 두기'], ['좋아요! 가벼우면 붐비는 곳에서 몸을 지키기 쉬워요.', '좋아요! 큰 짐이 없으면 길을 막지 않아요.']],
      ['meet', '안전한 여행 마무리', '여행 중 길을 잃었을 때', '낯선 곳에서 모둠과 떨어지면 멈춰서 주위를 살피고, 미리 정한 만날 장소로 가요. 그래도 만나지 못하면 안내소나 직원에게 학교 이름과 선생님 이름을 말해요.', '멈추고, 약속 장소로 가고, 도움을 청해요.', '수학여행 전에 모둠과 정해 둘 약속은 무엇일까요?',
        '만날 장소는 큰 간판이나 건물처럼 누구나 찾기 쉬운 곳으로 정하는 것이 좋아요!',
        ['📍 만날 장소 정하기', '⏰ 다시 모일 시간 정하기'], ['좋은 약속이에요! 장소를 알면 흩어져도 다시 만날 수 있어요.', '좋은 약속이에요! 시간을 정하면 서로 기다리기 쉬워요.']]
    ],
    '5-6': [
      ['bus', '사전 조사', '수학여행 일정에서 혼잡을 예측합니다', '유명 관광지, 숙소 체크인, 식사 시간처럼 많은 사람이 같은 장소에 모이는 시점이 있습니다. 일정표와 지도를 보고 혼잡이 예상되는 장소와 시간을 미리 표시해 두면 대응이 빨라집니다.', '혼잡은 장소와 시간이 겹칠 때 생깁니다.', '일정표에서 혼잡이 예상되는 시간과 장소를 찾아볼까요?',
        '같은 장소라도 시간에 따라 혼잡도가 크게 달라져서 방문 시간을 조정하는 것만으로도 위험을 줄일 수 있어요!',
        ['🏨 숙소 체크인 시간', '🍽️ 점심 식사 시간'], ['좋은 분석이에요! 여러 학급이 한꺼번에 도착하는 시간이에요.', '좋은 분석이에요! 식사 시간에는 식당 입구가 붐벼요.']],
      ['exit', '숙소 안전 점검', '숙소에 도착하면 대피 경로부터 확인합니다', '숙소 로비는 여러 학급이 동시에 들어오면 쉽게 붐빕니다. 안내에 따라 대기한 뒤, 객실 문에 붙은 대피 안내도로 가장 가까운 비상구와 다른 대피 경로를 함께 확인합니다.', '대피 경로는 하나가 아니라 둘을 확인합니다.', '가장 가까운 비상구를 쓸 수 없을 때를 대비해 무엇을 확인해야 할까요?',
        '대피 안내도에는 현재 위치와 비상구까지의 경로가 표시되어 있어 처음 가는 건물에서 특히 유용해요!',
        ['🚪 두 번째 대피 경로', '🪜 계단 위치'], ['정확해요! 대피 경로를 둘 이상 알면 막혔을 때도 대응할 수 있어요.', '정확해요! 화재처럼 위급할 때는 엘리베이터 대신 계단을 이용해요.']],
      ['path', '골목의 흐름', '관광지 골목은 왜 쉽게 막힐까요?', '관광지 골목은 폭이 좁고, 구경하려고 멈추는 사람이 많아 흐름이 자주 끊깁니다. 양방향 흐름에서는 오른쪽으로 걷고, 멈출 때는 가장자리로 비켜서 흐름을 막지 않습니다.', '멈춤은 가장자리에서 합니다.', '모둠 전체가 골목 흐름을 막지 않으려면 어떻게 이동해야 할까요?',
        '한 사람이 멈춰도 뒤에서는 그 이유가 보이지 않아 계속 밀려들 수 있어요!',
        ['🚶‍♀️ 한 줄로 이동하기', '🙋 모둠장이 멈출 곳 정하기'], ['좋은 방법이에요! 한 줄로 이동하면 골목 폭을 덜 차지해요.', '좋은 방법이에요! 멈출 곳을 정하면 흐름을 끊지 않아요.']],
      ['crowd', '경로 판단', '혼잡한 골목에서 지름길을 택해도 될까요?', '보행 속도가 느려지고 몸이 닿기 시작하면 혼잡 신호입니다. 더 좁은 길로 꺾어 빨리 빠져나가려 하면 오히려 갇힐 수 있으므로, 흐름을 살피며 가능한 넓은 쪽으로 벗어납니다.', '빠른 길보다 넓은 길을 고릅니다.', '지름길이 위험할 수 있는 이유를 두 가지 들어 볼까요?',
        '좁은 길에서는 앞과 뒤가 모두 막히면 스스로 빠져나오기 어려워져요!',
        ['🚧 앞뒤가 막히면 갇혀요', '🌊 사람이 더 몰려들 수 있어요'], ['맞아요! 좁은 길은 빠져나갈 공간이 부족해요.', '맞아요! 다른 사람도 같은 지름길을 찾을 수 있어요.']],
      ['bag', '짐과 안전', '짐이 많을수록 몸을 지키기 어렵습니다', '사람이 밀려오는 상황에서 넘어진 가방을 세우려고 멈추거나 허리를 숙이면 넘어질 위험이 커집니다. 떠밀리는 상황에서는 군중의 힘에 무리하게 저항하지 않고 팔로 가슴 앞 공간을 보호합니다.', '짐보다 몸, 버티기보다 보호가 먼저입니다.', '가슴 앞 공간을 보호하는 자세는 왜 필요할까요?',
        '떠밀릴 때 팔로 가슴 앞을 감싸면 숨 쉴 공간을 지키는 데 도움이 돼요. 다만 안전을 보장하는 자세는 아니어서 혼잡을 미리 피하는 것이 가장 중요해요!',
        ['🫁 숨 쉴 공간을 지키려고', '💪 가슴이 눌리지 않게 하려고'], ['맞아요! 가슴이 눌리면 숨쉬기 어려워질 수 있어요.', '맞아요! 팔로 감싸면 가슴이 직접 눌리는 것을 줄이는 데 도움이 돼요.']],
      ['meet', '비상 계획', '여행지에서 흩어졌을 때의 계획', '모둠별 집결 장소와 시간을 정하고, 교사 연락처와 숙소 이름을 기억해 둡니다. 위급한 상황을 보았다면 주변 직원에게 알리고 필요하면 112나 119에 신고합니다.', '계획을 세운 모둠은 흩어져도 다시 모일 수 있습니다.', '우리 모둠의 수학여행 비상 계획을 세 줄로 정리해 볼까요?',
        '신고할 때는 장소, 상황, 다친 사람 수를 차분히 말하면 도움이 빨리 도착해요!',
        ['📍 집결 장소와 시간', '📞 연락처와 숙소 이름'], ['좋은 계획이에요! 다시 만날 방법이 가장 먼저예요.', '좋은 계획이에요! 연락할 수 있으면 빠르게 도움을 받을 수 있어요.']]
    ]
  },
  sports: {
    '1-2': [
      ['track', '운동장 축제', '오늘은 체육대회 날이에요', '운동장에 전교생이 모여 달리기와 응원을 해요. 사람이 아주 많아서 움직일 때 더 조심해요.', '사람이 많으면 천천히 움직여요.', '체육대회에서 가장 기대되는 경기는 무엇인가요?',
        '체육대회 날에는 전교생이 운동장에 모여서 평소보다 훨씬 북적여요!',
        ['🏃 이어달리기', '📣 신나는 응원'], ['좋아요! 달리기가 끝나면 천천히 걸어서 자리로 돌아가요.', '좋아요! 응원할 때도 자리에서 일어나 밀지 않아요.']],
      ['exit', '응원석 출입구', '응원석에 앉기 전에', '응원석에 앉기 전에 나가는 길을 선생님과 함께 봐요. 그리고 우리 반 자리를 기억해요.', '나가는 길과 우리 자리를 기억해요.', '우리 반 자리를 쉽게 기억하는 방법은 무엇일까요?',
        '우리 반 깃발이나 큰 나무처럼 눈에 띄는 것을 보면 자리를 쉽게 기억할 수 있어요!',
        ['🚩 반 깃발 보기', '🌳 근처 큰 나무 보기'], ['좋아요! 깃발을 보면 우리 반 자리를 금방 찾을 수 있어요.', '좋아요! 눈에 잘 띄는 나무는 좋은 표시예요.']],
      ['path', '운동장 통로', '통로에서는 오른쪽으로', '양쪽에서 친구들이 지나가는 통로예요. 오른쪽으로 걷고, 친구를 기다릴 때는 통로 가운데에 서 있지 않아요.', '통로 가운데에 오래 서 있지 않아요.', '통로에서 친구를 기다릴 때 어디에 서면 좋을까요?',
        '통로 가운데에 서 있으면 지나가는 친구들이 부딪힐 수 있어요!',
        ['🧱 통로 옆으로 비켜서기', '🪑 우리 반 자리에서 기다리기'], ['맞아요! 옆으로 비켜서면 통로가 막히지 않아요.', '맞아요! 자리에서 기다리면 서로 찾기 쉬워요.']],
      ['crowd', '경기 끝', '경기가 끝나고 모두 일어났어요', '경기가 끝나자 모두 한꺼번에 출입구로 가요. 뛰지 않고, 선생님 안내에 따라 차례대로 움직여요.', '뛰지 않고 차례대로 움직여요.', '왜 한꺼번에 뛰어가면 위험할까요?',
        '한꺼번에 뛰면 앞 친구가 넘어질 때 뒤 친구들도 함께 넘어질 수 있어요!',
        ['🤕 넘어질 수 있어서', '💥 친구와 부딪혀서'], ['맞아요! 한 친구가 넘어지면 여러 친구가 함께 넘어질 수 있어요.', '맞아요! 뛰면 멈추기 어려워서 부딪히기 쉬워요.']],
      ['bag', '떨어진 응원 도구', '응원 도구를 놓쳤어요', '친구들이 많이 지나가는 길에서 응원 도구가 떨어졌어요. 발 사이로 손을 넣어 줍지 않고, 먼저 내 몸을 지켜요.', '물건보다 내 몸이 먼저예요.', '떨어진 응원 도구는 언제 찾으면 좋을까요?',
        '응원 도구는 다시 찾을 수 있어요. 내 손과 몸이 다치지 않는 게 먼저예요!',
        ['⏳ 사람이 다 지나간 뒤', '🧑‍🏫 선생님과 함께'], ['좋아요! 사람이 줄면 안전하게 찾을 수 있어요.', '좋아요! 선생님과 함께 찾으면 더 안전해요.']],
      ['help', '넘어졌을 때', '넘어져서 바로 못 일어나면', '사람이 많은 곳에서 넘어져 바로 일어나기 어려우면 두 팔로 머리를 감싸고 몸을 둥글게 해요. 주변 친구는 바로 선생님을 불러요.', '머리를 감싸고 몸을 둥글게 해요.', '친구가 넘어진 걸 보면 어떻게 도와줄까요?',
        '머리를 두 팔로 감싸고 다리를 당겨 몸을 둥글게 하면 머리와 배를 지킬 수 있어요!',
        ['📣 선생님 부르기', '🙅 주변 친구들에게 멈추라고 말하기'], ['좋아요! 선생님이 빨리 도와줄 수 있어요.', '좋아요! 친구들이 멈추면 넘어진 친구가 일어날 수 있어요.']]
    ],
    '3-4': [
      ['track', '전교생이 모이는 날', '체육대회는 사람이 가장 많이 모이는 학교 행사예요', '체육대회에는 전교생과 선생님, 때로는 가족까지 운동장에 모여요. 경기 시작 전과 끝난 뒤에는 많은 사람이 한꺼번에 움직여서 출입구와 통로가 특히 붐벼요.', '경기 시작 전과 끝난 뒤를 조심해요.', '체육대회에서 가장 붐비는 순간은 언제일까요?',
        '체육대회처럼 모두가 같은 시간에 같은 곳으로 움직이는 순간이 가장 붐벼요!',
        ['🏁 경기 시작 직전', '🏆 폐회식 끝난 직후'], ['좋은 관찰이에요! 모두 자리를 찾느라 붐벼요.', '좋은 관찰이에요! 모두가 한꺼번에 나가려 해서 가장 붐벼요.']],
      ['exit', '응원석 출입구', '응원석 출입구를 여러 개 알아 둬요', '경기가 끝나면 응원석 학생들이 한 출입구로 몰릴 수 있어요. 자리에 앉기 전에 가까운 출입구와 덜 붐비는 다른 출입구를 함께 확인해요.', '출입구를 두 곳 이상 알아 둬요.', '한 출입구로만 몰리면 어떤 일이 생길까요?',
        '덜 붐비는 출입구로 돌아가면 조금 멀어도 오히려 더 빨리, 더 안전하게 나갈 수 있어요!',
        ['🧱 출입구가 꽉 막혀요', '🤕 밀려서 넘어질 수 있어요'], ['맞아요! 한 곳으로 몰리면 출입구가 막혀요.', '맞아요! 뒤에서 밀리면 넘어질 위험이 커져요.']],
      ['path', '운동장 통로', '양쪽에서 걸어오는 통로', '경기 사이에 학생들이 양쪽에서 통로를 지나가요. 오른쪽으로 걷고, 갑자기 멈추지 않아요. 친구를 기다릴 때는 통로 가운데가 아니라 옆으로 비켜서요.', '오른쪽으로 걷고 갑자기 멈추지 않아요.', '통로에서 갑자기 멈추면 왜 위험할까요?',
        '갑자기 멈추면 뒤에서 오던 사람이 미처 멈추지 못하고 부딪힐 수 있어요!',
        ['💥 뒷사람과 부딪혀요', '🧱 통로가 막혀요'], ['맞아요! 뒤에서 오던 사람이 멈추지 못할 수 있어요.', '맞아요! 한 사람이 멈추면 뒤가 줄줄이 막혀요.']],
      ['crowd', '폐회식 뒤 퇴장', '모두가 한꺼번에 나가려고 해요', '폐회식이 끝나자 학생들이 한 출입구로 뛰어가요. 앞이 막혀 걸음이 느려지고 몸이 닿기 시작하면 혼잡 신호예요. 뛰지 말고, 덜 붐비는 출입구나 자리에서 차례를 기다려요.', '혼잡 신호가 보이면 뛰지 않고 기다려요.', '반별로 나가는 순서를 정하면 무엇이 좋을까요?',
        '반별로 나가는 순서를 정하면 출입구 한 곳에 사람이 몰리는 것을 막을 수 있어요!',
        ['🚪 출입구가 덜 붐벼요', '😌 서두르지 않아도 돼요'], ['맞아요! 순서대로 나가면 출입구가 막히지 않아요.', '맞아요! 내 차례를 알면 마음 놓고 기다릴 수 있어요.']],
      ['bag', '떨어진 응원 도구', '응원 도구가 발 사이로 떨어졌어요', '많은 학생이 이동하는 중에 응원 도구를 놓쳤어요. 학생들 발 사이로 손을 넣어 줍지 말고, 허리를 숙이지 않은 채 몸부터 보호해요. 사람이 지나간 뒤 다시 찾아요.', '붐빌 때는 허리를 숙이지 않아요.', '왜 붐비는 곳에서 허리를 숙이면 위험할까요?',
        '허리를 숙이면 균형을 잃기 쉽고, 뒤에서 오는 사람이 나를 보지 못해 부딪힐 수 있어요!',
        ['🤕 균형을 잃어서', '👀 뒷사람이 나를 못 봐서'], ['맞아요! 숙인 자세는 밀리면 넘어지기 쉬워요.', '맞아요! 숙이면 다른 사람 눈에 잘 띄지 않아요.']],
      ['help', '넘어졌을 때', '넘어져서 바로 일어날 수 없다면', '사람이 많은 곳에서 넘어져 바로 일어나기 어려우면 두 팔로 머리를 감싸고 다리를 몸쪽으로 당겨 몸을 둥글게 해요. 넘어진 친구를 보면 주변에 멈추라고 알리고 선생님을 불러요.', '머리를 감싸고 몸을 둥글게 보호해요.', '친구가 넘어졌을 때 주변 친구들은 무엇을 할 수 있을까요?',
        '"멈춰요! 친구가 넘어졌어요!"처럼 크게 알리면 주변 사람들이 멈출 수 있어요!',
        ['📣 크게 알리기', '🧑‍🏫 선생님 부르기'], ['좋아요! 주변이 멈추면 넘어진 친구가 일어날 수 있어요.', '좋아요! 선생님이 빨리 도움을 줄 수 있어요.']]
    ],
    '5-6': [
      ['track', '행사 분석', '체육대회의 혼잡은 언제 생길까요?', '체육대회는 전교생과 교직원, 가족이 한 공간에 모이는 큰 행사입니다. 개회식 입장, 종목 사이 이동, 폐회식 후 퇴장처럼 많은 사람이 같은 방향으로 움직이는 순간에 혼잡이 집중됩니다.', '혼잡은 같은 시간, 같은 방향의 이동에서 생깁니다.', '체육대회 일정 중 혼잡이 집중되는 순간을 세 가지 찾아볼까요?',
        '많은 사람이 같은 방향으로 동시에 움직이면 출입구처럼 좁아지는 지점에 압력이 집중돼요!',
        ['🚶 개회식 입장', '🏃 종목 사이 이동'], ['좋은 분석이에요! 모든 학생이 같은 곳으로 들어가는 순간이에요.', '좋은 분석이에요! 선수와 응원단이 엇갈리며 움직여요.']],
      ['exit', '출입구 분산', '출입구가 여러 개인 이유', '응원석이나 운동장에 출입구가 여러 개 있어도 사람들은 가장 가까운 곳으로 몰리는 경향이 있습니다. 자리에 앉기 전에 여러 출입구를 확인해 두면 혼잡할 때 덜 붐비는 경로를 고를 수 있습니다.', '가까운 출구가 늘 가장 빠른 출구는 아닙니다.', '사람들이 여러 출입구로 나뉘어 나가게 하려면 어떤 안내가 필요할까요?',
        '사람들은 익숙하거나 가까운 출구로 몰리는 경향이 있어서, 다른 출구를 안내하는 것이 중요해요!',
        ['📣 출입구별로 나눠 안내하기', '🪧 출입구 위치 안내판 붙이기'], ['훌륭해요! 안내가 있으면 사람들이 고르게 나뉘어요.', '훌륭해요! 눈에 보이는 안내판은 선택을 쉽게 해 줘요.']],
      ['path', '흐름 유지', '통로에서의 작은 행동이 흐름을 바꿉니다', '양방향 통로에서 오른쪽으로 걸으면 흐름이 나뉘어 부딪힘이 줄어듭니다. 통로 가운데에서 오래 멈추거나 친구를 기다리면 뒤쪽에 정체가 생기므로, 멈출 때는 통로 밖으로 비켜섭니다.', '흐름을 끊지 않는 것도 안전 행동입니다.', '통로를 막지 않고 친구를 기다릴 수 있는 방법은 무엇일까요?',
        '정체는 앞에서 시작되지만 뒤쪽 사람은 이유를 모른 채 계속 다가오기 쉬워요!',
        ['🧱 통로 밖으로 비켜서기', '📍 만날 곳을 미리 정하기'], ['좋은 방법이에요! 통로 밖에서 기다리면 흐름이 끊기지 않아요.', '좋은 방법이에요! 만날 곳이 있으면 통로에서 기다릴 필요가 없어요.']],
      ['crowd', '퇴장 설계', '폐회식 후 퇴장을 다시 설계해 봅시다', '폐회식 직후 모두가 한 출입구로 이동하면 보행 속도가 급격히 느려지고 몸이 닿는 혼잡이 생깁니다. 학년·반별 퇴장 순서와 출입구를 나누면 같은 인원도 훨씬 안전하게 이동할 수 있습니다.', '순서와 경로를 나누면 혼잡이 줄어듭니다.', '우리 학교 체육대회 퇴장 계획을 어떻게 세우면 좋을까요?',
        '퇴장 시간을 몇 분씩만 나눠도 출입구 앞에 사람이 쌓이는 것을 크게 줄일 수 있어요!',
        ['🔢 학년별 순서 정하기', '🚪 반별 출입구 나누기'], ['좋은 계획이에요! 순서를 나누면 출입구가 붐비지 않아요.', '좋은 계획이에요! 출입구를 나누면 병목이 줄어요.']],
      ['bag', '몸 보호', '떠밀리는 상황에서의 판단', '혼잡 속에서 떨어진 물건을 줍기 위해 허리를 숙이면 넘어질 위험이 커집니다. 이미 떠밀리는 상황이라면 군중의 힘에 무리하게 저항하지 않고 팔로 가슴 앞 공간을 보호하며, 가능할 때 가장자리로 벗어납니다.', '버티기보다 보호하고, 기회가 오면 벗어납니다.', '떠밀릴 때 무리하게 버티면 어떤 위험이 있을까요?',
        '떠밀릴 때 흐름에 맞서 버티면 넘어지거나 다칠 수 있어서, 몸을 보호하며 흐름이 느슨해질 때 벗어나요!',
        ['🤕 넘어질 수 있어요', '😮‍💨 쉽게 지칠 수 있어요'], ['맞아요! 버티다 균형을 잃으면 넘어질 수 있어요.', '맞아요! 힘을 아껴 몸을 보호하는 것이 중요해요.']],
      ['help', '응급 대응', '넘어진 사람을 발견했을 때', '군중 속에서 넘어져 일어날 수 없다면 두 팔로 머리를 감싸고 다리를 당겨 몸을 둥글게 보호합니다. 넘어진 사람을 발견하면 주변에 크게 알려 멈추게 하고, 교사에게 알리며 필요하면 119에 신고합니다.', '알리기, 멈추기, 신고하기가 이어져야 합니다.', '넘어진 사람을 발견했을 때 행동 순서를 정리해 볼까요?',
        '주변 사람이 "멈춰!"라고 함께 외치면 뒤쪽까지 상황이 전달되는 데 도움이 돼요!',
        ['📣 알리기 → 멈추기', '🧑‍🏫 교사 알리기 → 119 신고'], ['좋은 순서예요! 주변이 멈춰야 넘어진 사람이 더 다치지 않아요.', '좋은 순서예요! 어른과 구조대에 빨리 연결하는 것이 중요해요.']]
    ]
  },
  local: {
    '1-2': [
      ['stage', '동네 축제', '동네 축제에 가요', '가족과 함께 동네 축제에 가요. 무대 공연, 먹거리, 놀이가 있어서 사람이 아주 많아요.', '축제에는 꼭 어른과 함께 가요.', '축제에 누구와 함께 가면 좋을까요?',
        '동네 축제에는 어른, 아이, 다른 동네 사람까지 많이 와서 길이 금세 붐벼요!',
        ['👨‍👩‍👧 가족', '🧑‍🏫 보호자 어른'], ['좋아요! 가족과 함께 다니면 안전해요.', '좋아요! 어른과 함께 가는 것이 약속이에요.']],
      ['meet', '만날 곳 정하기', '도착하면 만날 곳부터', '축제장에 도착하면 가족과 만날 곳을 정해요. 큰 간판이나 안내소처럼 눈에 잘 띄는 곳이 좋아요.', '만날 곳을 함께 정해요.', '축제장에서 만날 곳으로 어디가 좋을까요?',
        '만날 곳은 큰 간판이나 안내소처럼 누구나 쉽게 찾을 수 있는 곳이 좋아요!',
        ['🪧 안내소 앞', '🎡 큰 놀이기구 앞'], ['좋아요! 안내소에는 도와줄 어른도 있어요.', '좋아요! 크고 눈에 잘 띄어서 찾기 쉬워요.']],
      ['booth', '먹거리 골목', '먹거리 골목이 좁아요', '푸드트럭 사이 길이 좁고 사람이 많아요. 보호자 손을 잡고 오른쪽으로 천천히 걸어요.', '어른 손을 잡고 천천히 걸어요.', '좁은 길에서는 어떻게 걸으면 좋을까요?',
        '손을 잡고 걸을 때는 옆으로 나란히 서지 말고 앞뒤로 서면 길이 덜 막혀요!',
        ['✋ 어른 손 잡기', '🐢 천천히 걷기'], ['맞아요! 손을 잡으면 서로 놓치지 않아요.', '맞아요! 천천히 걸으면 부딪히지 않아요.']],
      ['stage', '무대 앞', '무대 앞으로 사람들이 몰려요', '공연이 시작되자 사람들이 무대 앞으로 몰려요. 맨 앞으로 가지 않고, 넓고 덜 붐비는 곳에서 봐요.', '넓은 곳에서 공연을 봐요.', '무대가 잘 안 보이면 어떻게 할까요?',
        '무대 맨 앞은 사람이 가장 빽빽하게 모이는 곳이라 밀리기 쉬워요!',
        ['🔙 뒤쪽 넓은 곳에서 보기', '📺 큰 화면으로 보기'], ['좋아요! 뒤쪽은 덜 붐벼서 편하게 볼 수 있어요.', '좋아요! 큰 화면이 있으면 멀리서도 잘 보여요.']],
      ['crowd', '떠밀릴 때', '사람들에게 밀리고 있어요', '공연이 끝나고 사람들에게 밀려요. 두 손을 가슴 앞에 모아 숨 쉴 공간을 지키고, 어른 곁에 있어요.', '가슴 앞 숨 쉴 공간을 지켜요.', '가슴 앞에 손을 모으는 이유는 무엇일까요?',
        '두 손이나 가방을 가슴 앞에 두면 숨 쉴 공간을 지키는 데 도움이 돼요!',
        ['😮‍💨 숨을 편하게 쉬려고', '🛡️ 가슴을 지키려고'], ['맞아요! 가슴 앞에 공간이 있으면 숨쉬기 편해요.', '맞아요! 손이 가슴을 감싸 지켜 줘요.']],
      ['help', '도움 요청', '도움이 필요할 때', '가족을 잃어버리거나 위험해 보이면 안내소나 이름표를 단 직원에게 말해요. 어른은 위급할 때 112나 119에 신고해요.', '혼자 해결하지 말고 도움을 청해요.', '축제장에서 도움을 줄 수 있는 사람은 누구일까요?',
        '112는 경찰, 119는 소방·구급 신고 번호예요. 위급할 때 어른이 도와줘요!',
        ['🪪 이름표 단 직원', '👮 경찰관'], ['맞아요! 직원은 축제장을 잘 알아서 도와줄 수 있어요.', '맞아요! 경찰관도 길 잃은 어린이를 도와줘요.']]
    ],
    '3-4': [
      ['stage', '지역 축제', '지역 행사는 누구나 올 수 있어요', '지역 축제에는 동네 주민뿐 아니라 다른 지역 사람들도 많이 와요. 학교 행사보다 사람이 훨씬 많을 수 있으니, 출발 전에 보호자와 시간·장소·돌아올 길을 함께 정해요.', '출발 전에 보호자와 계획을 세워요.', '축제에 가기 전에 보호자와 정할 것은 무엇일까요?',
        '지역 축제는 학교 행사와 달리 정해진 인원이 없어서 예상보다 사람이 훨씬 많이 올 수 있어요!',
        ['⏰ 돌아올 시간', '📍 만날 장소'], ['좋은 계획이에요! 시간을 정하면 늦게까지 붐비는 곳에 있지 않아요.', '좋은 계획이에요! 떨어져도 다시 만날 수 있어요.']],
      ['meet', '도착 직후', '도착하면 길과 만날 곳을 확인해요', '축제장에 도착하면 안내도에서 출입구와 넓은 길, 안내소 위치를 확인해요. 혹시 떨어졌을 때 다시 만날 장소도 보호자와 정해요.', '넓은 길, 출구, 만날 장소를 확인해요.', '안내도가 없다면 무엇을 보고 길을 기억할까요?',
        '큰 건물, 간판, 무대처럼 움직이지 않는 것을 기준으로 길을 기억하면 헷갈리지 않아요!',
        ['🏢 큰 건물이나 간판', '🎪 무대 위치'], ['좋아요! 움직이지 않는 큰 건물은 좋은 길잡이예요.', '좋아요! 무대를 기준으로 방향을 기억할 수 있어요.']],
      ['booth', '푸드트럭 골목', '좁은 골목에서 어깨가 자꾸 닿아요', '푸드트럭 사이 좁은 길에 줄과 지나가는 사람이 섞여 어깨가 자꾸 닿아요. 사람들을 밀며 줄 사이로 들어가지 말고, 흐름을 살피며 가능한 넓은 쪽으로 벗어나요.', '어깨가 닿으면 넓은 쪽으로 벗어나요.', '먹거리 골목이 붐빌 때 어떤 시간에 가면 좋을까요?',
        '줄 서는 사람과 지나가는 사람이 섞이는 곳은 쉽게 막혀서 혼잡이 빨리 생겨요!',
        ['🌅 일찍 가기', '🕒 식사 시간 피하기'], ['좋은 생각이에요! 사람이 몰리기 전에 가면 여유로워요.', '좋은 생각이에요! 붐비는 시간을 피하면 모두가 편해요.']],
      ['stage', '무대 앞', '무대 앞으로 관람객이 점점 몰려요', '인기 공연이 시작되자 무대 앞에 사람이 점점 몰려요. 무대와 가장 가까운 좁은 자리로 들어가지 말고, 혼잡 상황과 주변 이동로를 확인하며 덜 붐비는 곳에서 봐요.', '가까운 자리보다 안전한 자리를 골라요.', '무대 앞 맨 앞자리가 위험할 수 있는 이유는 무엇일까요?',
        '무대 맨 앞은 뒤에서 미는 힘이 모이는 곳이라 빠져나오기 가장 어려운 자리예요!',
        ['🧱 뒤에서 미는 힘이 모여서', '🚪 빠져나오기 어려워서'], ['맞아요! 뒤쪽 사람들이 앞으로 몰리면 맨 앞에 힘이 쌓여요.', '맞아요! 앞뒤가 꽉 차면 나오기 어려워요.']],
      ['crowd', '떠밀림', '공연이 끝난 뒤 내 뜻과 달리 밀려요', '공연이 끝나고 사람들이 한꺼번에 움직여 밀리고 있어요. 군중의 힘에 무리하게 버티지 말고, 두 팔로 가슴 앞을 감싸 숨 쉴 공간을 지켜요. 흐름이 느슨해지면 가장자리로 벗어나요.', '버티지 말고 가슴 앞 공간을 지켜요.', '떠밀리는 상황에서 하지 말아야 할 행동은 무엇일까요?',
        '떠밀릴 때 버티면 넘어지기 쉬워요. 흐름에 맞서지 말고 몸을 보호하는 것이 먼저예요!',
        ['🙅 흐름에 맞서 버티기', '🙅 허리 숙여 물건 줍기'], ['맞아요! 버티면 넘어지거나 다칠 수 있어요.', '맞아요! 숙이면 밀려 넘어지기 쉬워요.']],
      ['help', '도움 요청', '위험을 보면 바로 알려요', '넘어진 사람이나 너무 붐비는 곳을 보면 보호자와 안내 요원에게 바로 알려요. 위급한 상황이라면 어른이 112나 119에 신고하고, 넘어져 일어나기 어려우면 머리를 감싸고 몸을 둥글게 보호해요.', '알리고, 신고하고, 몸을 보호해요.', '112와 119는 각각 어떤 일이 있을 때 전화할까요?',
        '112는 경찰(범죄·길 잃음 등), 119는 소방·구급(다친 사람·화재 등) 신고 번호예요!',
        ['👮 112: 경찰 도움', '🚑 119: 구급·소방 도움'], ['맞아요! 길을 잃었거나 위험한 일이 생기면 112예요.', '맞아요! 다친 사람이 있으면 119예요.']]
    ],
    '5-6': [
      ['stage', '참여 전 점검', '지역 축제는 왜 더 신중하게 준비해야 할까요?', '지역 축제는 입장 인원이 정해져 있지 않은 경우가 많아 예상보다 많은 사람이 모일 수 있습니다. 방문 전에 행사 시간표와 장소, 혼잡 예상 정보를 확인하고 보호자와 귀가 시간과 경로를 정합니다.', '방문 전 정보 확인이 첫 번째 안전 행동입니다.', '방문 전에 확인할 수 있는 축제 정보에는 무엇이 있을까요?',
        '지자체나 행사 주최 측이 미리 알리는 교통 통제, 시간표, 혼잡 안내를 확인하면 붐비는 시간을 피할 수 있어요!',
        ['🗓️ 공연 시간표', '🚧 교통 통제 안내'], ['좋은 정보예요! 인기 공연 시간에는 사람이 몰려요.', '좋은 정보예요! 통제 구역을 알면 귀가 경로를 미리 정할 수 있어요.']],
      ['meet', '공간 파악', '도착 직후 공간을 읽는 방법', '도착하면 안내도와 주변 지형을 보고 출입구, 넓은 이동로, 안내소와 의무실 위치를 확인합니다. 보호자와 떨어질 때를 대비해 눈에 띄는 집결 장소를 정합니다.', '도착 직후의 확인이 위급할 때의 대응을 좌우합니다.', '처음 가는 축제장에서 공간을 빠르게 파악하는 방법은 무엇일까요?',
        '의무실과 안내소 위치를 알아 두면 다치거나 길을 잃었을 때 바로 도움을 받을 수 있어요!',
        ['🗺️ 안내도 사진 찍어 두기', '🏢 큰 건물 기준으로 기억하기'], ['좋은 방법이에요! 사진이 있으면 언제든 다시 볼 수 있어요.', '좋은 방법이에요! 기준점이 있으면 방향을 잃지 않아요.']],
      ['booth', '혼잡 신호', '줄과 이동 흐름이 섞이는 곳', '푸드트럭 골목처럼 줄 서는 사람과 지나가는 사람이 섞이는 곳은 흐름이 쉽게 막힙니다. 어깨가 계속 닿고 보행 속도가 느려지면 혼잡 신호이므로, 사람들을 밀고 들어가지 않고 흐름을 살펴 넓은 쪽으로 벗어납니다.', '흐름이 섞이는 곳은 혼잡이 빨리 생깁니다.', '행사 주최 측이라면 먹거리 골목의 혼잡을 어떻게 줄일까요?',
        '줄을 서는 공간과 지나가는 길을 나누기만 해도 골목의 흐름이 훨씬 원활해져요!',
        ['🪢 줄 서는 공간 따로 만들기', '➡️ 한 방향으로만 걷는 길 만들기'], ['훌륭한 기획이에요! 줄과 이동로가 섞이지 않아요.', '훌륭한 기획이에요! 흐름이 한 방향이면 부딪힘이 줄어요.']],
      ['stage', '관람 위치 선택', '무대 앞 자리를 고르는 기준', '인기 공연 때는 무대 앞으로 관람객이 계속 몰려 앞쪽에 압력이 쌓입니다. 무대와 가까운 좁은 자리보다 이동로와 출구에 가깝고 혼잡이 덜한 위치를 선택하는 것이 안전합니다.', '잘 보이는 자리보다 빠져나올 수 있는 자리를 고릅니다.', '공연을 즐기면서도 안전한 관람 위치의 조건은 무엇일까요?',
        '공연 중에는 뒤쪽 사람들이 잘 보려고 앞으로 다가오면서 앞쪽 압력이 점점 커질 수 있어요!',
        ['🚪 출구 가까운 곳', '↔️ 옆으로 빠질 공간이 있는 곳'], ['좋은 기준이에요! 출구가 가까우면 빨리 벗어날 수 있어요.', '좋은 기준이에요! 옆 공간이 있으면 혼잡할 때 피할 수 있어요.']],
      ['crowd', '떠밀릴 때', '군중에 떠밀릴 때 알아야 할 것', '이미 군중 속에서 떠밀린다면 흐름에 무리하게 저항하지 않고 팔로 가슴 앞 공간을 보호합니다. 이 자세는 숨 쉴 공간을 지키는 데 도움을 주지만 안전을 보장하지는 않으므로, 혼잡 신호를 일찍 알아차려 피하는 것이 가장 중요합니다.', '몸 보호 자세보다 미리 피하는 판단이 먼저입니다.', '왜 "미리 피하기"가 "몸 보호 자세"보다 중요할까요?',
        '몸 보호 자세는 위급할 때 쓰는 마지막 방법이에요. 가장 좋은 안전은 처음부터 혼잡한 곳에 들어가지 않는 거예요!',
        ['🛡️ 자세만으로는 안전하지 않아서', '⏱️ 혼잡이 심해지면 벗어나기 어려워서'], ['정확해요! 보호 자세는 도움일 뿐 보장은 아니에요.', '정확해요! 일찍 피할수록 선택지가 많아요.']],
      ['help', '신고와 도움', '위험을 발견했을 때의 행동', '넘어진 사람이나 위험할 정도의 혼잡을 발견하면 주변에 알리고 안내 요원에게 전달하며, 위급하면 112나 119에 장소와 상황을 구체적으로 신고합니다. 넘어져 일어날 수 없을 때는 머리를 감싸고 몸을 둥글게 보호합니다.', '빠른 알림과 정확한 신고가 모두를 지킵니다.', '신고할 때 꼭 말해야 할 정보 세 가지는 무엇일까요?',
        '신고할 때는 "어디서, 무슨 일이, 몇 명이" 다쳤는지 차분히 말하면 도움이 빨리 도착해요!',
        ['📍 장소', '🚨 상황과 다친 사람 수'], ['맞아요! 정확한 장소가 있어야 구조대가 바로 찾아와요.', '맞아요! 상황을 알려야 필요한 도움을 준비할 수 있어요.']]
    ]
  }
};

const THEME_STORY_GRADE_LABELS = {'1-2': '1~2학년', '3-4': '3~4학년', '5-6': '5~6학년'};
const THEME_STORIES = Object.fromEntries(Object.entries(THEME_STORY_ROWS).map(([theme, grades]) => [theme,
  Object.fromEntries(Object.entries(grades).map(([grade, rows]) => [grade, {
    stories: rows.map(([art, caption, title, body, keyPoint, question]) => ({art, caption, title, body, keyPoint, question,
      sourceText: '국민재난안전포털', sourceUrl: CONTENT_SOURCES.crowd.url})),
    clues: rows.map(row => `🔎 숨은 단서 (${THEME_STORY_GRADE_LABELS[grade]}): ${row[6]}`),
    polls: rows.map(row => ({options: row[7], feedbacks: row[8]}))
  }]))
]));

    // ==================== ENRICHED GRADE-LEVEL EDUCATIONAL DATASET ====================
    const FESTIVAL_DETAILS = {
      halloween: {
        title: "할로윈 · 10월 31일",
        desc: "옛 켈트 지역의 계절 풍습과 만성절 전야 등 여러 역사적 요소가 전해져요. 오늘날에는 지역과 가족에 따라 분장, 호박 장식, 이웃 행사 등 다른 방식으로 즐깁니다.",
        question: "모든 지역의 할로윈 모습이 같을까요?",
        sourceText: "미국 의회도서관", sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
      },
      muertos: {
        title: "죽은 자들의 날 · 멕시코",
        desc: "세상을 떠난 가족을 기억하고 맞이하는 고유한 전통입니다. 지역과 가족마다 기리는 모습이 다르며, 할로윈과 날짜가 가깝더라도 같은 축제로 묶을 수 없어요.",
        question: "이 문화를 소개할 때 먼저 말해야 할 뜻은 무엇일까요?",
        sourceText: "유네스코", sourceUrl: "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
      },
      korea: {
        title: "추석 · 대한민국",
        desc: "음력 8월 15일을 중심으로 가족이 모여 수확을 돌아보고 음식을 나누는 명절입니다. 할로윈이나 죽은 자들의 날과 기원도 날짜도 다르므로 각각의 의미를 따로 배웁니다.",
        question: "가까운 시기의 명절이라도 무엇이 서로 다를까요?",
        sourceText: "국립민속박물관 어린이박물관", sourceUrl: "https://www.nfm.go.kr/kids/user/content.do?pageId=PAGE_000000000000051"
      }
    };

    const EDUCATION_DATA = {
      "1-2": {
        label: "🌱 1~2학년",
        classDefault: "1학년 1반",
        stories: [
          {
            "art": "pumpkin",
            "caption": "10월 31일",
            "title": "할로윈은 어떤 날일까요?",
            "body": "10월 31일, 여러 나라에서 분장하거나 호박을 꾸미며 즐겨요. 모든 사람이 같은 방법으로 보내는 날은 아니에요.",
            "keyPoint": "날짜와 놀이 모습을 알아보아요.",
            "question": "우리 반에서는 어떤 놀이를 해 보고 싶나요?",
            "sourceText": "미국 의회도서관",
            "sourceUrl": "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            "art": "lantern",
            "caption": "호박 등불",
            "title": "호박에 얼굴을 그려요",
            "body": "속을 파낸 호박에 얼굴을 새긴 장식을 잭오랜턴이라고 해요. 옛날에는 순무로 만들기도 했어요.",
            "keyPoint": "잭오랜턴은 호박 등불이에요.",
            "question": "내 호박에는 어떤 표정을 그릴까요?",
            "sourceText": "스미스소니언",
            "sourceUrl": "https://gardens.si.edu/american-garden-story/ghosts-of-pumpkins-past/"
          },
          {
            "art": "neighbor",
            "caption": "이웃과 인사",
            "title": "간식을 나눌 때 지킬 약속",
            "body": "어떤 지역에서는 아이들이 어른과 함께 이웃을 찾아가 간식을 받아요. 처음 보는 집에 혼자 찾아가지는 않아요.",
            "keyPoint": "간식보다 어른과 함께하는 안전한 약속이 먼저예요.",
            "question": "방문하기 전에 누구와 상의해야 할까요?",
            "sourceText": "UNICEF USA",
            "sourceUrl": "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            "art": "path",
            "caption": "잘 보이고 잘 걷기",
            "title": "분장 옷도 안전하게 골라요",
            "body": "앞이 잘 보이는 가면과 걷기 편한 옷을 골라요. 어두운 곳에서는 밝은 표시가 도움이 돼요.",
            "keyPoint": "멋진 옷보다 잘 보고 잘 걷는 일이 중요해요.",
            "question": "길게 끌리는 망토는 어떻게 고치면 좋을까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          },
          {
            "art": "flower",
            "caption": "서로 다른 문화",
            "title": "멕시코에는 다른 기념일이 있어요",
            "body": "멕시코의 죽은 자들의 날에는 세상을 떠난 가족을 기억해요. 할로윈과 날짜가 가깝지만 서로 다른 뜻을 지닌 날이에요.",
            "keyPoint": "다른 문화의 이름과 뜻을 존중해요.",
            "question": "두 날이 다르다는 걸 친구에게 어떻게 설명할까요?",
            "sourceText": "유네스코",
            "sourceUrl": "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            "art": "classroom",
            "caption": "우리 반 축제",
            "title": "안전하고 다정하게 마무리해요",
            "body": "교실에서 꾸미고 인사하며 즐길 수도 있어요. 친구가 싫다는 장난은 멈추고, 쓰레기는 함께 치워요.",
            "keyPoint": "즐거움은 모두가 편안할 때 더 커져요.",
            "question": "우리 반에서 지킬 약속 하나를 말해 볼까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          }
        ],
        quizzes: [
          {
            "category": "할로윈 이야기",
            "q": "호박에 얼굴을 새긴 장식은 무엇일까요?",
            "options": [
              "잭오랜턴",
              "송편",
              "마리골드꽃"
            ],
            "answer": 0,
            "hint": "속을 파낸 호박에 눈·코·입을 그려 등불처럼 밝히는 장식이에요.",
            "explanation": "호박 등불을 잭오랜턴이라고 불러요."
          },
          {
            "category": "함께 즐기기",
            "q": "이웃을 방문하는 놀이를 한다면 먼저 어떻게 할까요?",
            "options": [
              "보호자와 함께 갈 곳을 정해요",
              "혼자 낯선 집에 가요",
              "친구를 밀며 먼저 가요"
            ],
            "answer": 0,
            "hint": "처음 보는 집에 혼자 가지 않고 나를 지켜 주는 어른과 먼저 상의해요.",
            "explanation": "장소와 시간을 어른과 함께 정해요."
          },
          {
            "category": "길 살피기",
            "q": "축제장에 도착하면 먼저 무엇을 볼까요?",
            "options": [
              "넓은 길과 나가는 곳",
              "가장 긴 간식 줄",
              "사람이 몰린 좁은 길"
            ],
            "answer": 0,
            "hint": "사람이 많아질 때 안전하게 빠져나갈 수 있는 길을 먼저 찾아요.",
            "explanation": "들어가기 전에 이동로와 출구를 확인해요."
          },
          {
            "category": "혼잡 신호",
            "q": "걸음이 느려지고 어깨가 자꾸 닿으면?",
            "options": [
              "어른에게 알리고 흐름을 살펴 벗어나요",
              "더 안쪽으로 가요",
              "그 자리에 갑자기 멈춰요"
            ],
            "answer": 0,
            "hint": "옆 사람과 자꾸 몸이 부딪히는 것은 사람이 너무 많아졌다는 위험 신호예요.",
            "explanation": "몸이 자꾸 닿는 것은 혼잡 신호예요."
          },
          {
            "category": "몸 먼저",
            "q": "붐비는 길에 물건을 떨어뜨렸어요.",
            "options": [
              "숙이지 않고 몸을 먼저 지켜요",
              "바로 허리를 숙여요",
              "뒤로 뛰어가요"
            ],
            "answer": 0,
            "hint": "사람들이 걷는 길에서 허리를 숙이면 뒤따라오는 사람과 부딪혀 위험해요.",
            "explanation": "혼잡한 곳에서는 물건보다 몸을 먼저 보호해요."
          },
          {
            "category": "옷 고르기",
            "q": "즐겁고 안전한 분장 옷은?",
            "options": [
              "앞이 보이고 걷기 편한 옷",
              "눈을 가리는 가면",
              "바닥에 끌리는 망토"
            ],
            "answer": 0,
            "hint": "계단이나 길에서 넘어지지 않으려면 눈이 잘 보이고 발에 걸리지 않아야 해요.",
            "explanation": "잘 보고 잘 움직일 수 있는 옷을 골라요."
          },
          {
            "category": "다른 문화",
            "q": "멕시코의 죽은 자들의 날을 소개할 때 알맞은 말은?",
            "options": [
              "가족을 기억하는 고유한 기념일이에요",
              "할로윈과 똑같은 날이에요",
              "모든 멕시코 사람이 같은 놀이만 해요"
            ],
            "answer": 0,
            "hint": "주황색 꽃과 음식으로 세상을 떠난 가족을 사랑으로 기억하는 날이에요.",
            "explanation": "날짜가 가까워도 문화의 의미는 달라요."
          },
          {
            "category": "우리 반 약속",
            "q": "친구가 싫다는 장난을 한다면?",
            "options": [
              "바로 멈추고 마음을 물어요",
              "웃으면서 계속해요",
              "더 큰 장난을 해요"
            ],
            "answer": 0,
            "hint": "진정한 축제는 모든 친구가 편안하고 기분 좋을 때 완성돼요.",
            "explanation": "모두가 편안할 때 즐거운 축제가 돼요."
          }
        ]
      },
      "3-4": {
        label: "🍀 3~4학년",
        classDefault: "3학년 1반",
        stories: [
          {
            "art": "pumpkin",
            "caption": "여러 풍습이 만난 날",
            "title": "할로윈의 이야기는 하나일까요?",
            "body": "할로윈에는 옛 켈트 지역의 계절 풍습과 만성절 전야에 얽힌 이야기가 함께 전해져요. 지금은 지역마다 즐기는 방식도 달라요.",
            "keyPoint": "한 가지 이야기로 기원을 단정하지 않아요.",
            "question": "오래된 풍습이 오늘날 놀이로 바뀐 예가 있나요?",
            "sourceText": "미국 의회도서관",
            "sourceUrl": "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            "art": "lantern",
            "caption": "순무에서 호박으로",
            "title": "등불 재료가 바뀐 까닭",
            "body": "아일랜드에서는 순무에 얼굴을 새기기도 했어요. 사람들이 미국으로 이주하면서 조각하기 쉬운 호박이 널리 쓰이게 되었어요.",
            "keyPoint": "사람이 이동하면 문화의 모습도 변해요.",
            "question": "재료가 달라져도 이어진 것은 무엇일까요?",
            "sourceText": "스미스소니언",
            "sourceUrl": "https://gardens.si.edu/american-garden-story/ghosts-of-pumpkins-past/"
          },
          {
            "art": "neighbor",
            "caption": "함께 정하는 놀이",
            "title": "간식을 나누는 방법도 다양해요",
            "body": "이웃을 방문하는 지역도 있고, 학교나 어른이 마련한 장소에서 즐기는 지역도 있어요. 참여하기 전에는 보호자와 장소·시간을 정해요.",
            "keyPoint": "낯선 곳을 혼자 찾아가는 놀이는 하지 않아요.",
            "question": "행사 전에 어른과 어떤 두 가지를 확인할까요?",
            "sourceText": "UNICEF USA",
            "sourceUrl": "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            "art": "path",
            "caption": "축제장에 도착하면",
            "title": "길과 출구를 먼저 살펴요",
            "body": "축제장에 들어가기 전에는 혼잡한 곳과 이동로를 확인해요. 사람이 몰리기 시작하면 사진보다 안전한 길을 먼저 생각해요.",
            "keyPoint": "들어가기 전에 나갈 길도 확인해요.",
            "question": "입구는 넓지만 안쪽 길이 좁다면 어떻게 할까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          },
          {
            "art": "flower",
            "caption": "비슷한 날짜, 다른 뜻",
            "title": "죽은 자들의 날과 비교해요",
            "body": "멕시코의 죽은 자들의 날은 세상을 떠난 가족을 기리는 전통이에요. 할로윈과 날짜가 가깝다는 이유로 같은 축제라고 부르지 않아요.",
            "keyPoint": "이름·뜻·방식을 따로 살펴보아요.",
            "question": "두 문화를 비교할 때 먼저 확인할 것은 무엇일까요?",
            "sourceText": "유네스코",
            "sourceUrl": "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            "art": "classroom",
            "caption": "함께 만드는 축제",
            "title": "우리 반의 안전 계획을 세워요",
            "body": "교실에서도 분장과 만들기를 즐길 수 있어요. 이동하는 길은 비워 두고, 싫어하는 장난은 하지 않으며, 끝나면 함께 정리해요.",
            "keyPoint": "재미와 배려를 함께 계획해요.",
            "question": "우리 반 축제 규칙을 한 문장으로 써 볼까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          }
        ],
        quizzes: [
          {
            "category": "문화의 변화",
            "q": "순무 등불이 호박 등불로 바뀐 이유에 가까운 것은?",
            "options": [
              "이주한 사람들이 구하기 쉽고 조각하기 좋은 재료를 썼기 때문",
              "순무 등불이 법으로 금지됐기 때문",
              "모든 지역에 순무가 없었기 때문",
              "호박이 항상 같은 크기였기 때문"
            ],
            "answer": 0,
            "hint": "아일랜드에서 미국으로 이주한 사람들이 새 환경에서 쉽게 구할 수 있었던 작물을 떠올려 보세요.",
            "explanation": "이주와 환경 변화가 장식 재료를 바꾸었어요."
          },
          {
            "category": "참여 계획",
            "q": "학교 밖 할로윈 행사에 가기 전 먼저 정할 것은?",
            "options": [
              "동행할 어른과 장소·시간",
              "받을 간식의 개수",
              "사진 찍을 차례",
              "분장 점수"
            ],
            "answer": 0,
            "hint": "혼자 낯선 곳에 가지 않도록 보호자와 미리 약속해야 할 두 가지를 생각해 보세요.",
            "explanation": "보호자와 동행 계획을 세우고 이동로를 확인해요."
          },
          {
            "category": "길 살피기",
            "q": "입구는 넓지만 안쪽 통로가 좁다면?",
            "options": [
              "혼잡과 주변 이동로를 먼저 살핀다",
              "안쪽으로 달려가 사진을 찍는다",
              "출구는 나중에 생각한다",
              "사람이 몰릴 때까지 기다린다"
            ],
            "answer": 0,
            "hint": "들어가기 전에 언제든 빠져나갈 수 있는 길과 출구를 먼저 확인해요.",
            "explanation": "출구와 주변 이동로를 미리 확인해요."
          },
          {
            "category": "위험 신호",
            "q": "옆 사람과 계속 부딪히고 걸음이 느려진다면?",
            "options": [
              "이동 흐름에 맞춰 가능한 넓은 쪽으로 벗어난다",
              "더 좁은 길로 들어간다",
              "가운데서 멈춰 친구를 기다린다",
              "반대 방향으로 밀어붙인다"
            ],
            "answer": 0,
            "hint": "어깨가 자꾸 닿는 것은 밀집 위험 신호이므로 흐름을 거스르지 않고 대각선 가장자리로 이동해요.",
            "explanation": "몸이 닿고 보행이 느려지는 것은 혼잡 신호예요."
          },
          {
            "category": "떠밀릴 때",
            "q": "내 의지와 다르게 떠밀릴 때 가슴 앞 공간을 지키는 이유는?",
            "options": [
              "가슴을 보호하고 숨 쉴 공간을 확보하려고",
              "다른 사람을 밀어내려고",
              "사진을 잘 찍으려고",
              "물건을 줍기 편하려고"
            ],
            "answer": 0,
            "hint": "두 손이나 가방을 가슴 앞에 모으면 폐가 숨을 쉴 수 있는 공간(흉강)이 생겨요.",
            "explanation": "군중의 힘에 무리하게 맞서지 않고 가슴을 보호해요."
          },
          {
            "category": "물건보다 몸",
            "q": "붐비는 길에서 신발이 벗겨졌다면?",
            "options": [
              "허리를 숙이지 않고 안전한 곳으로 벗어난다",
              "그 자리에서 신발을 찾는다",
              "친구를 멈춰 세운다",
              "반대 방향으로 달린다"
            ],
            "answer": 0,
            "hint": "인파 속에서 허리를 숙이면 뒤따라오는 사람들에게 부딪히거나 넘어질 수 있어요.",
            "explanation": "혼잡한 곳에서는 물건보다 몸을 먼저 지켜요."
          },
          {
            "category": "옷 고르기",
            "q": "실제 경찰관처럼 보이는 옷 대신 어떤 옷이 좋을까요?",
            "options": [
              "움직이기 편하고 혼동을 주지 않는 창의적인 옷",
              "실제 제복과 같은 옷",
              "얼굴 전체를 가리는 가면",
              "긴 끈이 끌리는 옷"
            ],
            "answer": 0,
            "hint": "위급할 때 진짜 구조대원·경찰관과 혼동되지 않고 걷기 편한 옷이 안전해요.",
            "explanation": "다른 사람이 실제 대원으로 오해하지 않도록 해요."
          },
          {
            "category": "문화 존중",
            "q": "죽은 자들의 날과 할로윈을 비교하는 방법은?",
            "options": [
              "각각의 뜻과 전통을 따로 알아본다",
              "날짜가 가까우니 같은 축제라고 부른다",
              "한쪽이 다른 쪽을 따라 했다고 단정한다",
              "무서운 그림만 보고 뜻을 추측한다"
            ],
            "answer": 0,
            "hint": "비슷한 시기에 열리더라도 각 문화의 고유한 이름과 의미를 먼저 살펴보아요.",
            "explanation": "겉모습보다 그 문화를 기리는 사람들의 의미를 살펴요."
          }
        ]
      },
      "5-6": {
        label: "🌟 5~6학년",
        classDefault: "5학년 1반",
        stories: [
          {
            "art": "pumpkin",
            "caption": "역사를 읽는 눈",
            "title": "할로윈은 어떻게 형성됐을까요?",
            "body": "켈트 지역의 서우인 풍습과 만성절 전야를 비롯한 여러 역사적 요소가 오늘날 할로윈 설명에 등장합니다. 각 풍습의 관계를 단순한 한 줄의 기원으로 단정하지 않습니다.",
            "keyPoint": "문화의 역사는 여러 자료를 함께 읽어야 합니다.",
            "question": "기원에 관한 설명이 서로 다르면 무엇을 확인해야 할까요?",
            "sourceText": "미국 의회도서관",
            "sourceUrl": "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            "art": "lantern",
            "caption": "이주와 변화",
            "title": "순무 등불이 호박 등불이 되다",
            "body": "아일랜드의 순무 조각 풍습은 이주와 함께 북미로 전해졌고 호박 장식으로 변했습니다. 같은 상징도 재료와 환경에 따라 달라질 수 있습니다.",
            "keyPoint": "문화는 이동하며 변화합니다.",
            "question": "재료의 변화가 문화 전체의 변화와 어떻게 연결될까요?",
            "sourceText": "스미스소니언",
            "sourceUrl": "https://gardens.si.edu/american-garden-story/ghosts-of-pumpkins-past/"
          },
          {
            "art": "neighbor",
            "caption": "참여와 선택",
            "title": "축제 방식은 누가 정할까요?",
            "body": "지역마다 이웃 방문, 학교 행사, 모금 활동처럼 참여 방식이 다릅니다. 참여하지 않을 자유도 존중하고, 참여한다면 장소와 동행할 어른을 먼저 정합니다.",
            "keyPoint": "모든 사람이 같은 방식으로 즐길 필요는 없습니다.",
            "question": "친구가 참여하고 싶지 않다면 어떻게 배려할까요?",
            "sourceText": "UNICEF USA",
            "sourceUrl": "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            "art": "path",
            "caption": "위험 신호 읽기",
            "title": "좁은 길에서 걸음이 느려진다면",
            "body": "사람과 자꾸 몸이 닿고 보행 속도가 떨어지면 혼잡 신호입니다. 이동 흐름을 살피며 벗어나고, 떠밀릴 때는 무리하게 역행하지 않습니다.",
            "keyPoint": "혼잡을 일찍 알아차리는 판단이 중요합니다.",
            "question": "출구로 가는 길이 더 붐빈다면 어떤 경로를 찾을까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          },
          {
            "art": "flower",
            "caption": "문화의 맥락",
            "title": "날짜가 비슷해도 같은 축제일까요?",
            "body": "멕시코의 죽은 자들의 날에는 세상을 떠난 가족을 기억하는 고유한 전통이 있습니다. 할로윈이나 한국의 추석과 닮은 점을 찾더라도 각각의 역사와 의미를 먼저 설명해야 합니다.",
            "keyPoint": "비교는 차이를 지우는 일이 아닙니다.",
            "question": "다른 문화를 소개할 때 피해야 할 단정은 무엇일까요?",
            "sourceText": "유네스코",
            "sourceUrl": "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            "art": "classroom",
            "caption": "기획자의 관점",
            "title": "우리 반 축제를 다시 설계한다면",
            "body": "이동로, 참여 선택권, 쓰레기 정리, 싫은 장난을 멈출 규칙을 함께 정해 봅니다. 안전 대책이 있으면 어떤 학생도 소외되지 않는 축제를 만들 수 있습니다.",
            "keyPoint": "즐거움과 안전은 함께 설계할 수 있습니다.",
            "question": "우리 반 행사 안내문에 넣을 규칙 두 가지는 무엇일까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          }
        ],
        quizzes: [
          {
            "category": "역사 읽기",
            "q": "할로윈의 기원을 설명할 때 가장 신중한 표현은?",
            "options": [
              "여러 풍습과 역사적 요소가 영향을 주었다",
              "단 하나의 사건에서 갑자기 만들어졌다",
              "모든 지역이 늘 같은 방식으로 즐겼다",
              "분장 풍습의 유래는 모두 확정됐다"
            ],
            "answer": 0,
            "hint": "켈트 지역의 계절 풍습과 만성절 전야 등 다양한 역사적 배경이 함께 전해져요.",
            "explanation": "자료마다 강조점이 달라 한 가지 기원으로 단정하지 않습니다."
          },
          {
            "category": "문화 존중",
            "q": "멕시코의 죽은 자들의 날을 소개하는 태도는?",
            "options": [
              "고유한 역사와 가족을 기리는 뜻을 설명한다",
              "할로윈의 다른 이름이라고 부른다",
              "겉모습만 보고 같은 축제라고 한다",
              "모든 참여 방식이 같다고 말한다"
            ],
            "answer": 0,
            "hint": "유네스코 인류무형문화유산으로 등재된 가족 추모 전통의 고유한 맥락을 떠올려 보세요.",
            "explanation": "비슷한 시기라도 고유한 맥락을 존중합니다."
          },
          {
            "category": "사전 계획",
            "q": "행사 안내도에서 가장 먼저 확인할 정보는?",
            "options": [
              "혼잡 구간과 주변 이동로·출구",
              "사진이 잘 나오는 장소",
              "간식 종류",
              "친구들의 의상 색"
            ],
            "answer": 0,
            "hint": "다중밀집 환경에 들어가기 전에는 위급 시 빠져나갈 수 있는 동선부터 확인해요.",
            "explanation": "장소에 가기 전 혼잡 상황과 이동로를 확인합니다."
          },
          {
            "category": "위험 판단",
            "q": "좁은 통로에서 속도가 줄고 몸이 닿는다면?",
            "options": [
              "흐름을 살피며 가능한 가장자리로 벗어난다",
              "사람을 밀며 정면으로 역행한다",
              "통로 가운데서 멈춘다",
              "더 좁은 길로 방향을 바꾼다"
            ],
            "answer": 0,
            "hint": "인파의 흐름과 정면으로 맞서지 않고 대각선 방향 가장자리나 넓은 곳으로 이동해요.",
            "explanation": "움직임을 살펴 대각선으로 벗어나는 것이 권장됩니다."
          },
          {
            "category": "떠밀림 대응",
            "q": "군중 속에서 의지와 다르게 떠밀릴 때는?",
            "options": [
              "무리하게 저항하지 않고 가슴 앞 공간을 보호한다",
              "앞사람을 강하게 밀어낸다",
              "반대 방향으로 뛰어간다",
              "몸을 숙여 소지품을 찾는다"
            ],
            "answer": 0,
            "hint": "팔짱을 끼거나 가방을 가슴 앞에 안아 호흡할 수 있는 흉강 공간을 확보해야 해요.",
            "explanation": "가슴을 보호해 숨 쉴 공간을 확보합니다."
          },
          {
            "category": "넘어짐 대응",
            "q": "넘어져 바로 일어날 수 없다면?",
            "options": [
              "두 팔로 머리를 감싸고 몸을 둥글게 한다",
              "팔과 다리를 넓게 뻗는다",
              "가방부터 찾는다",
              "주변 사람을 붙잡아 세게 끌어당긴다"
            ],
            "answer": 0,
            "hint": "머리와 가슴(장기)이 압박받지 않도록 무릎을 당겨 공처럼 몸을 둥글게 말아요.",
            "explanation": "머리와 몸을 보호하는 자세를 취합니다."
          },
          {
            "category": "분장과 공공성",
            "q": "실제 대원과 혼동되는 복장을 피하는 까닭은?",
            "options": [
              "긴급 상황에서 대원을 알아보기 어렵게 할 수 있어서",
              "사진 색감이 달라져서",
              "호박 장식과 어울리지 않아서",
              "모든 분장이 금지되어서"
            ],
            "answer": 0,
            "hint": "위급한 순간 시민들이 실제 경찰·소방 대원을 즉시 구별할 수 있어야 해요.",
            "explanation": "실제 제복과 혼동될 가능성을 줄이고 세부 법률은 교사와 확인합니다."
          },
          {
            "category": "축제 설계",
            "q": "우리 반 행사 계획에서 우선할 것은?",
            "options": [
              "이동로·참여 선택권·정리 약속을 함께 정한다",
              "인기 활동만 좁은 공간에 모은다",
              "싫다는 장난도 계속한다",
              "안내 없이 동시에 입장한다"
            ],
            "answer": 0,
            "hint": "모두가 안전하고 소외되지 않는 축제를 위해 기획 단계에서 정해야 할 규칙을 골라 보세요.",
            "explanation": "안전과 배려는 행사 기획 단계에서 함께 고려합니다."
          }
        ]
      }
    };

    // ==================== STEP 2: 6-STEP CROWD SAFETY SCENARIOS ====================
    const SAFETY_SCENARIOS = [
      {
        stage: "약속 1 · 방문 전 & 도착 직후",
        emoji: "🗺️",
        title: "축제 거리에 도착했어요! 제일 먼저 무엇을 확인할까요?",
        desc: "신나는 구경을 시작하기 전에, 혹시 사람이 많아질 때를 대비해 꼭 먼저 눈으로 찾아두어야 하는 곳이 있어요.",
        choices: [
          {
            text: "빠져나갈 수 있는 넓은 길과 비상 대피로(출구) 위치를 먼저 확인해요.",
            correct: true,
            feedback: "딩동댕! 도착하자마자 비상 이동로와 넓은 출구를 미리 확인해 두면 위급할 때 빠르게 대피할 수 있어요."
          },
          {
            text: "사람이 제일 빽빽하게 모여 있는 좁은 골목으로 무조건 달려가요.",
            correct: false,
            feedback: "위험해요! 좁은 골목이나 가파른 비탈길에 사람이 많이 몰린 곳은 사고 위험이 높으니 피해야 해요."
          }
        ]
      },
      {
        stage: "약속 2 · 길을 걸을 때",
        emoji: "🚶‍♂️",
        title: "양방향으로 사람이 많이 걷는 길에서는 어떻게 걸을까요?",
        desc: "앞뒤에서 많은 사람들이 걸어오고 있어요. 서로 부딪히지 않고 원활하게 이동하려면 어떻게 걸어야 할까요?",
        choices: [
          {
            text: "오른쪽(우측통행)으로 차근차근 걷고, 갑자기 멈추거나 방향을 바꾸지 않아요.",
            correct: true,
            feedback: "맞아요! 양방향 통행 시 오른쪽으로 걷고, 앞뒤 흐름을 살피며 걸어야 넘어지지 않고 안전해요."
          },
          {
            text: "길 한가운데 갑자기 멈춰 서서 사진을 찍거나 반대 방향으로 밀치며 달려요.",
            correct: false,
            feedback: "위험해요! 많은 사람이 걷는 길에서 갑자기 멈추면 뒤따라오던 사람들이 연달아 넘어질 수 있어요."
          }
        ]
      },
      {
        stage: "약속 3 · 위험 신호 감지",
        emoji: "↗️",
        title: "옆 사람과 자꾸 어깨가 부딪히고 걸음이 느려지기 시작했어요!",
        desc: "점점 사람이 많아져서 내 몸이 다른 사람과 닿기 시작했어요. 인파 사고를 막기 위한 행동은 무엇일까요?",
        choices: [
          {
            text: "위험 신호이므로 사람들의 이동 흐름에 맞춰 대각선 방향 넓은 곳으로 즉시 빠져나와요.",
            correct: true,
            feedback: "정확해요! 신체 접촉이 시작되면 흐름을 거스르지 말고 대각선 방향 가장자리나 넓은 곳으로 바로 벗어나야 해요."
          },
          {
            text: "사람들이 걸어오는 정반대 방향으로 억지로 몸을 돌려 세게 밀쳐요.",
            correct: false,
            feedback: "위험해요! 인파의 흐름을 정면으로 거슬러 역행하면 더 큰 압력을 받아 넘어지기 쉬워요."
          }
        ]
      },
      {
        stage: "약속 4 · 숨 쉴 공간 확보",
        emoji: "🛡️",
        title: "사람들에게 떠밀릴 때 내 가슴(숨 쉴 공간)을 지키는 자세는?",
        desc: "사람이 너무 많아 내 의지와 상관없이 밀리고 있을 때, 답답하지 않게 숨 쉴 공간을 확보해야 해요!",
        choices: [
          {
            text: "두 손을 가슴 앞으로 모으거나 팔짱을 끼고(또는 가방을 가슴 앞에 안아) 공간을 확보해요.",
            correct: true,
            feedback: "최고예요! 권투 선수처럼 두 손을 가슴 앞에 모으거나 팔짱을 끼면 폐가 숨을 쉴 수 있는 공간(흉강)을 지킬 수 있어요."
          },
          {
            text: "양팔을 차렷 자세로 몸에 붙이거나 두 손을 머리 위로 높이 들어요.",
            correct: false,
            feedback: "위험해요! 팔을 내려놓으면 가슴이 압박되어 숨쉬기 어려워질 수 있어요. 꼭 가슴 앞 공간을 지켜 주세요."
          }
        ]
      },
      {
        stage: "약속 5 · 떨어진 물건 대처",
        emoji: "🙅",
        title: "인파 속에서 걷다가 사탕 바구니나 신발이 바닥에 떨어졌어요!",
        desc: "사람들이 계속 걸어오고 있는 복잡한 길에서 내 소지품이 발밑에 떨어졌을 때 어떻게 해야 할까요?",
        choices: [
          {
            text: "절대 허리를 숙여 줍지 않고, 물건을 포기한 채 안전한 곳으로 먼저 빠져나와요.",
            correct: true,
            feedback: "맞아요! 국민재난안전포털에서도 '소지품이 떨어졌다고 주우려고 허리를 숙이면 매우 위험하다'고 강조하고 있어요."
          },
          {
            text: "아까운 물건을 주우려고 그 자리에서 즉시 허리를 숙여 바닥을 짚어요.",
            correct: false,
            feedback: "절대 안 돼요! 인파 속에서 허리를 숙이면 뒤따라오는 사람들에게 밟히거나 넘어져 큰 사고로 이어질 수 있어요."
          }
        ]
      },
      {
        stage: "약속 6 · 넘어졌을 때 & 신고",
        emoji: "🚑",
        title: "위험이 느껴지거나 넘어져서 바로 일어날 수 없을 때는?",
        desc: "위급한 상황을 발견했거나, 만약 넘어졌는데 즉시 일어나기 어려운 순간의 행동요령이에요.",
        choices: [
          {
            text: "위험 시 112·119에 바로 신고하고, 넘어졌을 땐 머리를 두 팔로 감싸고 다리를 당겨 공처럼 둥글게 말아요.",
            correct: true,
            feedback: "적절한 몸 보호 행동이에요. 다른 상황도 새 질문으로 다시 확인해 보세요."
          },
          {
            text: "팔다리를 길게 뻗고 누워 있거나 장난으로 119에 거짓 신고를 해요.",
            correct: false,
            feedback: "넘어졌을 땐 머리와 가슴(장기)을 보호하기 위해 공처럼 둥글게 몸을 말아야 하며, 장난 신고는 절대 금물이에요!"
          }
        ]
      }
    ];

    // ==================== STEP 3: 12 COSTUME ITEMS & 4 ETIQUETTE PLEDGES ====================
    const COSTUME_ITEMS = [
      {
        id: "c1",
        emoji: "👮‍♂️",
        name: "경찰관 제복과 수갑",
        checkPoint: "🚨 제복 오인 방지",
        safe: false,
        reason: "실제 경찰관과 혼동될 수 있는 제복·장비는 피하고, 법률의 조건과 예외는 선생님과 확인해요.",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 경찰 제복 대신 동화 속 명탐정 망토나 별빛 보안관 모자로 꾸며요!"
      },
      {
        id: "c2",
        emoji: "🎃",
        name: "주황색 호박 망토",
        checkPoint: "👟 보행·움직임 안전",
        safe: true,
        reason: "걷기도 편하고 친구들과 기분 좋게 즐길 수 있는 안전한 할로윈 옷이에요!",
        reform: "✨ 이렇게 입으면 더 안전해요: 망토 길이를 무릎 위로 맞추고 똑딱단추로 고정하면 계단에서도 걸리지 않아요!"
      },
      {
        id: "c3",
        emoji: "🧑‍🚒",
        name: "소방관 출동복과 헬멧",
        checkPoint: "🚨 구조대 혼동 방지",
        safe: false,
        reason: "실제 소방관과 혼동될 수 있는 출동복은 행사 분장으로 피하는 것이 좋아요. 경찰제복장비법이나 군복단속법이 똑같이 적용되는 것은 아니에요.",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 출동복은 소방관님께 양보하고 주황색 호박 영웅 조끼로 바꿔 입어요!"
      },
      {
        id: "c4",
        emoji: "🧙‍♀️",
        name: "별 무늬 마법사 옷",
        checkPoint: "👀 시야 확보",
        safe: true,
        reason: "동화 속 주인공처럼 재미있고 안전하게 즐길 수 있는 멋진 분장이에요!",
        reform: "✨ 이렇게 입으면 더 안전해요: 모자 챙이 눈을 가리지 않게 살짝 올려 쓰고 가벼운 천 소재를 골라요!"
      },
      {
        id: "c5",
        emoji: "🗡️",
        name: "뾰족한 장난감 칼·총",
        checkPoint: "🛡️ 소품 부상 방지",
        safe: false,
        reason: "사람이 많은 곳에서 뾰족하고 딱딱한 소품을 들면 옆 친구가 다칠 수 있어요!",
        reform: "✂️ 이렇게 바꿔 입어요: 딱딱한 무기 소품 대신 폭신한 솜방울 요술봉이나 둥근 호박 바구니를 들어요!"
      },
      {
        id: "c6",
        emoji: "🪖",
        name: "실제 군인 전투복",
        checkPoint: "🚨 제복 규정 확인",
        safe: false,
        reason: "실제 군복·군용장구는 별도 규정이 있어요. 단순한 무늬 옷까지 똑같이 판단하지 말고 선생님과 확인해요.",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 전투복 대신 우주 탐험가 복장이나 숲속 요정 망토로 멋지게 변신해요!"
      },
      {
        id: "c7",
        emoji: "🩸",
        name: "피 묻은 무서운 분장",
        checkPoint: "🤝 친구 배려·응급 구분",
        safe: false,
        reason: "친구가 놀라고, 실제 다친 응급 환자가 생겼을 때 분장으로 오해받을 수 있어요!",
        reform: "✂️ 이렇게 바꿔 입어요: 무서운 상처 분장 대신 반짝이는 별·달·호박 페이스 스티커를 붙여요!"
      },
      {
        id: "c8",
        emoji: "🧚",
        name: "야광 스티커 붙인 옷",
        checkPoint: "🌙 야간 시인성 확보",
        safe: true,
        reason: "눈에 잘 띄는 꾸미기는 좋지만, 밤길에서는 어른의 안내와 주변 이동로를 계속 살펴요.",
        reform: "✨ 이렇게 입으면 더 안전해요: 가방·소매·운동화 뒤쪽에 야광 반사띠를 붙이면 어두운 곳에서도 잘 보여요!"
      },
      {
        id: "c9",
        emoji: "🎭",
        name: "앞이 안 보이는 가면",
        checkPoint: "👀 시야 가림 주의",
        safe: false,
        reason: "눈구멍이 좁아 앞이 잘 안 보이는 가면을 쓰면 계단이나 길에서 넘어지기 쉬워요!",
        reform: "✂️ 이렇게 바꿔 입어요: 얼굴 전체를 덮는 가면 대신 시야가 활짝 트인 귀여운 머리띠나 모자를 써요!"
      },
      {
        id: "c10",
        emoji: "🧣",
        name: "바닥에 끌리는 긴 망토",
        checkPoint: "👟 걸림·넘어짐 주의",
        safe: false,
        reason: "옷자락이 너무 길어 발에 걸리면 다른 사람과 엉켜 넘어질 위험이 커요!",
        reform: "✂️ 이렇게 바꿔 입어요: 발목에 걸리지 않게 허리·무릎 길이의 짧은 망토나 날개 장식으로 바꿔 입어요!"
      },
      {
        id: "c11",
        emoji: "🚑",
        name: "119 구급대원 조끼",
        checkPoint: "🚨 응급 구조 보호",
        safe: false,
        reason: "응급 현장에서 진짜 구급대원과 혼동을 주어 구조 활동을 방해할 수 있어요!",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 구급 조끼 대신 동화 속 마음 치유 요정이나 무지개 마법사로 꾸며요!"
      },
      {
        id: "c12",
        emoji: "🦸",
        name: "활동하기 편한 동화 옷",
        checkPoint: "👟 활동성·안전 최고",
        safe: true,
        reason: "시야가 트여 있고 움직이기 편해서 안전하고 즐겁게 축제를 즐길 수 있어요!",
        reform: "✨ 이렇게 입으면 더 안전해요: 발에 꼭 맞는 운동화를 신고 양손을 자유롭게 비워 두면 더욱 안전해요!"
      }
    ];

    const ETIQUETTE_RULES = [
      { id: "e1", icon: "🍬", title: "포장이 잘 밀봉된 간식만 먹기", desc: "포장지가 뜯겨 있거나 알레르기 성분이 있는 간식은 먹지 않아요." },
      { id: "e2", icon: "🤫", title: "밤늦게 소음 내지 않고 이웃 배려하기", desc: "약속되지 않은 집의 초인종을 누르거나 밤길에 큰 소리를 내지 않아요." },
      { id: "e3", icon: "🗑️", title: "사탕 껍질과 쓰레기는 내 가방에!", desc: "길거리에 쓰레기를 버리지 않고 머문 자리를 깨끗하게 정리해요." },
      { id: "e4", icon: "🤝", title: "친구가 싫어하는 무서운 장난 금지", desc: "모두가 기분 좋게 웃을 수 있도록 친구의 마음을 먼저 배려해요." }
    ];

    // ==================== APPLICATION STATE ====================
    const state = {
      sessionId: (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      legacy: null,
      gradeRecords: {},
      rewardLedger: {},
      profile: {school:'',className:'',name:'',pledge:''},
      storageAvailable: true,
      teacher: {grade:'3-4', minutes:40, mode:'together', direction:'all', theme:'halloween', required:['culture','safety','costume','quiz'], optional:[], order:['culture','safety','costume','quiz'], start:'tab-culture'},
      themeResponses: {},
      safetyFirst: {},
      safetyConfirmed: {},
      quizFirst: {},
      quizAttempts: {},
      quizOrders: {},
      quizHints: {},
      quizFifties: {},
      quizReview: false,
      quizReviewItems: [],
      quizAttemptRound: 0,
      grade: "3-4",
      activeTab: "tab-culture",
      boardMode: false,
      soundOn: true,
      autoFullscreenAttempted: false,
      candyPoints: 0,
      storyIndex: 0,
      readStories: { 0: true },
      themeStoryProgress: {},
      lantern: {
        lit: false,
        rewarded: false,
        eye: "⭐ ⭐",
        mouth: "😄 활짝",
        hat: "🎩"
      },
      scenarioIndex: 0,
      completedScenarios: {},
      gameStage: 1,
      avatar: {
        char: "🧒",
        costume: "🎃",
        prop: "🕯️",
        runwayRewarded: false
      },
      avatarReason: '',
      avatarReasonText: '',
      costumeChoices: {},
      etiquetteChecked: { e1: false, e2: false, e3: false, e4: false },
      quizIndex: 0,
      quizScore: 0,
      quizCombo: 0,
      quizAnswered: false,
      quizFiftyUsed: false,
      currentShuffledOptions: [],
      currentAnswerIndex: 0,
      certTheme: "purple",
      certSticker: "🎃",
      stamps: {
        s1: false,
        s2: false,
        s3: false,
        s4: false
      }
    };

    const ACTIVITY_IDS = ['culture','safety','costume','quiz'];
    const ACTIVITY_TABS = {culture:'tab-culture', safety:'tab-safety', costume:'tab-costume', quiz:'tab-quiz'};
    const LESSON_PLANS = {
      10: '도입 2분: 오늘의 질문 · 안전 상황 5분 · 확인 퀴즈와 정리 3분',
      20: '도입 3분: 주제 소개 · 안전 상황 8분 · 복장 판단 5분 · 확인과 정리 4분',
      40: '도입 5분: 축제 비교 · 안전 상황 10분 · 복장 선택 10분 · 퀴즈와 복습 10분 · 정리 5분'
    };
    function defaultRequiredFor(theme, minutes) {
      if (theme !== 'halloween') return ['culture','safety','quiz'];
      return minutes === 10 ? ['safety','quiz'] : minutes === 20 ? ['safety','costume','quiz'] : ACTIVITY_IDS;
    }
    function sanitizeTeacher(input) {
      const raw = input && typeof input === 'object' ? input : {};
      const enumValue = (value, allowed, fallback) => allowed.includes(String(value)) ? String(value) : fallback;
      const minutes = Number(raw.minutes);
      const grade = enumValue(raw.grade, Object.keys(EDUCATION_DATA), '3-4');
      const theme = enumValue(raw.theme, Object.keys(THEMES), 'halloween');
      const direction = enumValue(raw.direction, ['culture','safety','all'], 'all');
      const required = Array.isArray(raw.required) ? [...new Set(raw.required.filter(id => ACTIVITY_IDS.includes(id)))] : defaultRequiredFor(theme, minutes);
      const order = Array.isArray(raw.order) && raw.order.length === 4 && new Set(raw.order).size === 4 && raw.order.every(id => ACTIVITY_IDS.includes(id)) ? raw.order : ACTIVITY_IDS;
      const start = enumValue(raw.start, Object.values(ACTIVITY_TABS), ACTIVITY_TABS[order[0]]);
      return {grade, minutes:[10,20,40].includes(minutes) ? minutes : 40,
        mode:enumValue(raw.mode, ['together','pairs','individual'], 'together'),
        direction, theme, required, optional:ACTIVITY_IDS.filter(id => !required.includes(id)), order, start};
    }
    function teacherFromUrl() {
      const params = new URLSearchParams(location.search);
      if (params.get('lesson') !== '1') return null;
      return sanitizeTeacher({grade:params.get('g'), minutes:params.get('m'), mode:params.get('mode'),
        direction:params.get('d'), theme:params.get('t'), required:(params.get('req') || '').split(',').filter(Boolean),
        order:(params.get('ord') || '').split(','), start:params.get('start')});
    }
    function shareLessonUrl() {
      const url = new URL('./', location.href);
      const t = state.teacher;
      url.searchParams.set('lesson','1');
      url.searchParams.set('g',t.grade);
      url.searchParams.set('m',String(t.minutes));
      url.searchParams.set('mode',t.mode);
      url.searchParams.set('d',t.direction);
      url.searchParams.set('t',t.theme);
      url.searchParams.set('req',t.required.join(','));
      url.searchParams.set('ord',t.order.join(','));
      url.searchParams.set('start',t.start);
      return url.href;
    }
    function renderTeacherSettings() {
      const t = state.teacher;
      [['teacherGrade',t.grade],['teacherMinutes',t.minutes],['teacherMode',t.mode],['teacherDirection',t.direction],['teacherTheme',t.theme],['teacherStart',t.start],['teacherOrder',t.order.join(',')]].forEach(([id,value]) => {document.getElementById(id).value = value;});
      document.querySelectorAll('.teacherRequired').forEach(input => {input.checked = t.required.includes(input.value);});
      document.getElementById('teacherPlan').textContent = LESSON_PLANS[t.minutes];
      const url = shareLessonUrl();
      document.getElementById('shareUrlInput').value = url;
      const qrBox = document.getElementById('shareQr');
      qrBox.replaceChildren();
      try {
        const code = qrcode(0,'M');
        code.addData(url);
        code.make();
        qrBox.innerHTML = code.createSvgTag({cellSize:3, margin:4, scalable:true});
      } catch (e) { qrBox.textContent = 'QR을 만들 수 없습니다. 주소를 복사해 사용하세요.'; }
    }
    function pairTurnSuffix(index) {
      if (!state.teacher || state.teacher.mode !== 'pairs') return '';
      return index % 2 === 0 ? ' · 🐥짝꿍1' : ' · 🐣짝꿍2';
    }
    const THEME_CRAFT_CONFIG = {
      halloween: {
        badge: '체험 놀이터 · 나만의 호박 등불 만들기',
        title: '나만의 호박등 만들기',
        btnOn: '등불 켜기',
        btnOff: '등불 끄기',
        litCaption: '빛나는 호박등이 완성됐어요. 꾸민 모양을 설명해 보세요!',
        unlitCaption: '눈·입·모자를 고르고 등불을 켜 보세요!',
        certTitle: '나만의 호박등',
        nextText: '다음: 다른 문화 살펴보기 →'
      },
      school: {
        badge: '체험 놀이터 · 학교 축제 안전 응원봉 만들기',
        title: '나만의 안전 응원봉 만들기',
        btnOn: '응원불 켜기',
        btnOff: '응원불 끄기',
        litCaption: '반짝이는 안전 응원봉 완성! 무대 앞에서도 질서를 지켜요!',
        unlitCaption: '눈·입·장식을 골라 나만의 안전 응원봉을 켜 보세요!',
        certTitle: '나의 안전 응원봉',
        nextText: '이야기로 돌아가기 →'
      },
      field: {
        badge: '체험 놀이터 · 현장체험 안전 배낭 꾸미기',
        title: '나만의 안전 배낭 꾸미기',
        btnOn: '야광등 켜기',
        btnOff: '야광등 끄기',
        litCaption: '멀리서도 잘 보이는 야광 안전 배낭이 완성됐어요!',
        unlitCaption: '표정과 모자 배지를 골라 안전 배낭 야광등을 켜 보세요!',
        certTitle: '나의 안전 배낭',
        nextText: '이야기로 돌아가기 →'
      },
      trip: {
        badge: '체험 놀이터 · 수학여행 안전 가방 꾸미기',
        title: '나만의 안전 여행가방 꾸미기',
        btnOn: '네임택 켜기',
        btnOff: '네임택 끄기',
        litCaption: '내 가방 표시 완료! 붐비는 곳에선 가방보다 내 몸이 먼저예요!',
        unlitCaption: '나만의 여행가방 표정과 장식을 골라 불을 켜 보세요!',
        certTitle: '나의 안전 가방',
        nextText: '이야기로 돌아가기 →'
      },
      sports: {
        badge: '체험 놀이터 · 체육대회 안전 응원도구 만들기',
        title: '나만의 안전 응원도구 만들기',
        btnOn: '응원불 켜기',
        btnOff: '응원불 끄기',
        litCaption: '멋진 안전 응원도구 완성! 떨어뜨려도 인파 속에선 줍지 않아요!',
        unlitCaption: '표정과 모자를 골라 우리 반 안전 응원도구를 완성해 보세요!',
        certTitle: '나의 안전 응원도구',
        nextText: '이야기로 돌아가기 →'
      },
      local: {
        badge: '체험 놀이터 · 지역 행사 안전 등불 만들기',
        title: '나만의 안전 나들이 등불 만들기',
        btnOn: '안전등 켜기',
        btnOff: '안전등 끄기',
        litCaption: '밤길에도 잘 보이는 지역 행사 안전 등불이 완성됐어요!',
        unlitCaption: '눈·입·모자를 골라 밤길 안전 등불을 밝혀 보세요!',
        certTitle: '나의 안전 등불',
        nextText: '이야기로 돌아가기 →'
      }
    };
    function getThemeCraftConfig() {
      return THEME_CRAFT_CONFIG[state.teacher?.theme] || THEME_CRAFT_CONFIG.halloween;
    }
    function applyTeacherSettings() {
      const read = id => document.getElementById(id).value;
      const next = sanitizeTeacher({grade:read('teacherGrade'), minutes:read('teacherMinutes'), mode:read('teacherMode'),
        direction:read('teacherDirection'), theme:read('teacherTheme'), required:[...document.querySelectorAll('.teacherRequired:checked')].map(input => input.value),
        order:read('teacherOrder').split(','), start:read('teacherStart')});
      state.teacher = next;
      switchGrade(next.grade);
      setCultureStage('story');
      renderStorySlide();
      renderLanternWorkshop();
      renderScenario();
      renderCostumeCards();
      renderQuiz();
      switchTab(next.start);
      saveProgress();
      renderTeacherSettings();
      renderThemeSituations();
      renderLearningSummary();
    }
    function activityDone(id) {
      if (id === 'safety' && state.teacher.theme !== 'halloween') return THEMES[state.teacher.theme].situations.every((_, i) => {
        const response=state.themeResponses[`${state.teacher.theme}:${i}`];
        return response?.correct && typeof response.apply==='string' && response.apply.trim().length>0;
      });
      if (id === 'culture' && !isHalloweenTheme()) return Object.keys(storyProgress().readStories).length >= getStories().length;
      return !!state.stamps[{culture:'s1',safety:'s2',costume:'s3',quiz:'s4'}[id]];
    }
    function canDownloadParticipation() {
      return state.teacher.required.length > 0 && state.teacher.required.every(activityDone);
    }
    function confirmedGoalCount() {
      return SAFETY_GOALS.filter(goal => state.safetyConfirmed[goal.id]?.contentVersion === SAFETY_CONTENT_VERSION).length;
    }
    function canDownloadSafetyCertificate() { return confirmedGoalCount() === SAFETY_GOALS.length; }

    // ==================== HELPER: SAFE BUTTON GROUP HIGHLIGHT SYNC ====================
    function syncButtonGroup(selector, dataAttr, activeValue) {
      document.querySelectorAll(selector).forEach(btn => {
        const isMatch = btn.getAttribute(dataAttr) === String(activeValue);
        if (isMatch) {
          btn.classList.remove("border-indigo-700");
          btn.classList.add("border-amber-400");
        } else {
          btn.classList.remove("border-amber-400");
          btn.classList.add("border-indigo-700");
        }
      });
    }

    function syncStageButtons() {
      document.querySelectorAll(".game-stage-btn").forEach(btn => {
        const isCurrent = parseInt(btn.getAttribute("data-stage"), 10) === state.gameStage;
        btn.className = isCurrent
          ? "game-stage-btn nowrap px-2 py-0.5 rounded-lg bg-amber-400 text-indigo-950 text-xs font-black"
          : "game-stage-btn nowrap px-2 py-0.5 rounded-lg bg-indigo-900 text-indigo-200 border border-indigo-700 text-xs font-bold";
      });
    }

    // ==================== CANDY POINTS, LEVEL & CONFETTI BURST ====================
    function getLevelTitle(pts) {
      if (pts >= 250) return "Lv.4 안전대왕 👑";
      if (pts >= 150) return "Lv.3 수호대장 🛡️";
      if (pts >= 70) return "Lv.2 등불지기 🕯️";
      return "Lv.1 새싹탐험 🌱";
    }

    function addCandyPoints(amount, reasonText) {
      state.candyPoints += amount;
      saveProgress();
      renderCandyHeader();
      renderCertificateCanvas();
      if (reasonText) {
        showToast(`${reasonText} (+${amount}🍬)`, "🍬");
      }
    }

    function awardOnce(contentId, kind, amount, reasonText) {
      const key = `${state.sessionId}:${contentId}:${kind}`;
      if (state.rewardLedger[key]) return false;
      state.rewardLedger[key] = {amount, at: Date.now()};
      addCandyPoints(amount, reasonText);
      return true;
    }

    function renderCandyHeader() {
      const ptEl = document.getElementById("candyPointText");
      const lvEl = document.getElementById("playerLevelText");
      if (ptEl) ptEl.textContent = state.candyPoints;
      if (lvEl) lvEl.textContent = getLevelTitle(state.candyPoints);
    }

    function burstCandyConfetti(count = 16) {
      const container = document.getElementById("confettiContainer");
      if (!container) return;
      const icons = ["🍬", "🍭", "🎃", "⭐", "✨", "🏅", "🎈"];
      for (let i = 0; i < count; i++) {
        const span = document.createElement("span");
        span.className = "candy-particle select-none";
        span.textContent = icons[i % icons.length];
        const startX = window.innerWidth * (0.25 + Math.random() * 0.5);
        const startY = window.innerHeight * (0.35 + Math.random() * 0.25);
        const tx = `${Math.round((Math.random() - 0.5) * 280)}px`;
        const ty = `${Math.round(-90 - Math.random() * 190)}px`;
        const rot = `${Math.round((Math.random() - 0.5) * 520)}deg`;
        span.style.left = `${startX}px`;
        span.style.top = `${startY}px`;
        span.style.setProperty("--tx", tx);
        span.style.setProperty("--ty", ty);
        span.style.setProperty("--rot", rot);
        container.appendChild(span);
        setTimeout(() => span.remove(), 1200);
      }
    }

    // ==================== FULLSCREEN & EXIT MANAGEMENT ====================
    function isFullscreenActive() {
      return !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
    }

    function updateFullscreenButtonLabel() {
      const labelEl = document.getElementById("fullscreenLabel");
      if (labelEl) {
        labelEl.textContent = isFullscreenActive() ? "화면축소" : "전체화면";
      }
    }

    function requestAppFullscreen() {
      try {
        const el = document.documentElement;
        if (!isFullscreenActive()) {
          if (el.requestFullscreen) {
            el.requestFullscreen().catch(() => {});
          } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
          } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
          } else {
            showToast("이 브라우저는 전체화면을 지원하지 않아요. 상단 📲 설치 버튼으로 홈 화면에 추가해 보세요!", "📱");
          }
        }
      } catch (e) {
        // Ignore fullscreen restrictions in sandboxed environments
      }
    }

    function exitAppFullscreen() {
      try {
        if (isFullscreenActive()) {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      } catch (e) {
        // Ignore fullscreen errors
      }
    }

    function toggleFullscreen() {
      if (isFullscreenActive()) {
        exitAppFullscreen();
      } else {
        requestAppFullscreen();
      }
      setTimeout(updateFullscreenButtonLabel, 150);
    }

    // ==================== SAFE LOCALSTORAGE ====================
    const PROGRESS_KEY = 'halloween_edu_progress_v2';
    const GRADE_FIELDS = ['storyIndex','readStories','lantern','scenarioIndex','completedScenarios','gameStage','avatar','avatarReason','avatarReasonText','costumeChoices','etiquetteChecked','quizIndex','quizScore','quizCombo','quizFiftyUsed','quizFirst','quizAttempts','quizOrders','quizHints','quizFifties','quizReview','quizReviewItems','quizAttemptRound','safetyFirst','safetyConfirmed','stamps','themeResponses','themeStoryProgress'];
    const FRESH_GRADE = Object.fromEntries(GRADE_FIELDS.map(key => [key, JSON.parse(JSON.stringify(state[key]))]));
    function rememberGrade() {
      state.gradeRecords[state.grade] = Object.fromEntries(GRADE_FIELDS.map(key => [key, JSON.parse(JSON.stringify(state[key]))]));
    }
    function restoreGrade(grade) {
      const saved = state.gradeRecords[grade] || {};
      GRADE_FIELDS.forEach(key => { state[key] = JSON.parse(JSON.stringify(Object.hasOwn(saved, key) ? saved[key] : FRESH_GRADE[key])); });
      state.quizAnswered = false;
      state.currentShuffledOptions = [];
      state.currentAnswerIndex = 0;
    }
    function validSaved(parsed) {
      if(!parsed || !safeImportedTree(parsed) || parsed.schemaVersion!==2 ||
        typeof parsed.contentVersion!=='string' || parsed.contentVersion.length>40 ||
        typeof parsed.sessionId!=='string' || !parsed.sessionId || parsed.sessionId.length>100 ||
        !Object.hasOwn(EDUCATION_DATA,parsed.grade) || !parsed.gradeRecords || Array.isArray(parsed.gradeRecords) ||
        !parsed.rewardLedger || Array.isArray(parsed.rewardLedger) ||
        !Number.isInteger(parsed.candyPoints) || parsed.candyPoints<0 || parsed.candyPoints>=1000000) return false;
      if(!Object.entries(parsed.gradeRecords).every(([grade,record])=>{
        if(!Object.hasOwn(EDUCATION_DATA,grade) || !record || typeof record!=='object' || Array.isArray(record))return false;
        const orders=record.quizOrders || {};
        return Object.entries(orders).every(([id,order])=>{
          const match=id.match(/^([1-5]-[2-6]):q(\d+)$/);
          const index=match ? Number(match[2])-1 : -1;
          const question=match && match[1]===grade ? EDUCATION_DATA[grade].quizzes[index] : null;
          return question && Array.isArray(order) && order.length>=2 && order.length<=6 &&
            (parsed.contentVersion!==CONTENT_VERSION || order.length===question.options.length) &&
            new Set(order).size===order.length && order.every(option=>Number.isInteger(option) && option>=0 && option<order.length);
        });
      }))return false;
      const ledger=Object.entries(parsed.rewardLedger);
      if(!ledger.every(([key,entry])=>key.startsWith(`${parsed.sessionId}:`) && entry &&
        Number.isInteger(entry.amount) && entry.amount>=0 && entry.amount<=100))return false;
      if(ledger.reduce((sum,[,entry])=>sum+entry.amount,0)!==parsed.candyPoints)return false;
      const profile=parsed.profile;
      if(!profile || typeof profile!=='object' || Array.isArray(profile) ||
        !Object.entries({school:40,className:30,name:40,pledge:160}).every(([key,max])=>typeof profile[key]==='string' && profile[key].length<=max))return false;
      return true;
    }
    let preserveExistingProgress = false;
    function migrateLearningContent(parsed, raw) {
      if (parsed.contentVersion === CONTENT_VERSION) return;
      try { localStorage.setItem(`${PROGRESS_KEY}_before_content_${Date.now()}`, raw); }
      catch (error) { state.storageAvailable = false; preserveExistingProgress = true; return; }
      Object.values(parsed.gradeRecords).forEach(record => {
        record.storyIndex = 0;
        record.readStories = {0:true};
        record.themeStoryProgress = {};
        record.quizIndex = 0;
        record.quizScore = 0;
        record.quizCombo = 0;
        record.quizFiftyUsed = false;
        record.quizFirst = {};
        record.quizAttempts = {};
        record.quizOrders = {};
        record.quizHints = {};
        record.quizFifties = {};
        record.quizReview = false;
        record.quizReviewItems = [];
        record.quizAttemptRound = 0;
        record.stamps = {...record.stamps, s1:false, s4:false};
      });
      parsed.contentVersion = CONTENT_VERSION;
    }
    function loadSavedProgress() {
      try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (validSaved(parsed)) {
            const contentMigrated = parsed.contentVersion !== CONTENT_VERSION;
            migrateLearningContent(parsed, raw);
            state.sessionId = parsed.sessionId;
            state.grade = parsed.grade;
            state.gradeRecords = parsed.gradeRecords;
            state.rewardLedger = parsed.rewardLedger;
            state.candyPoints = parsed.candyPoints;
            state.legacy = parsed.legacy || null;
            state.profile = parsed.profile && typeof parsed.profile === 'object' ? parsed.profile : state.profile;
            state.teacher = sanitizeTeacher(parsed.teacher);
            state.activeTab = ['tab-culture','tab-safety','tab-costume','tab-quiz','tab-cert'].includes(parsed.activeTab) ? parsed.activeTab : state.teacher.start;
            restoreGrade(state.grade);
            if (contentMigrated && !preserveExistingProgress) saveProgress();
            return;
          }
          preserveExistingProgress = true;
          state.storageAvailable = false;
          return;
        }
        const oldRaw = localStorage.getItem('halloween_edu_progress_v1');
        if (oldRaw) {
          const old = JSON.parse(oldRaw);
          state.legacy = {
            grade: EDUCATION_DATA[old.grade] ? old.grade : null,
            stamps: old.stamps && typeof old.stamps === 'object' ? Object.fromEntries(['s1','s2','s3','s4'].map(key => [key, old.stamps[key] === true])) : {},
            candyPoints: Number.isFinite(old.candyPoints) ? Math.max(0, Math.min(999999, old.candyPoints)) : 0
          };
          if (state.legacy.grade) state.grade = state.legacy.grade;
        }
      } catch (e) {
        state.storageAvailable = false;
        preserveExistingProgress = true;
        return;
      }
      saveProgress();
    }

    function saveProgress() {
      rememberGrade();
      if (preserveExistingProgress) return;
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify({
          schemaVersion: 2, contentVersion: CONTENT_VERSION, sessionId: state.sessionId,
          grade: state.grade, gradeRecords: state.gradeRecords, rewardLedger: state.rewardLedger,
          candyPoints: state.candyPoints, legacy: state.legacy, teacher: state.teacher, activeTab: state.activeTab
          , profile: state.profile
        }));
        state.storageAvailable = true;
      } catch (e) {
        if (state.storageAvailable) showToast('이 기기에 저장할 수 없습니다. 현재 탭에서는 계속 학습할 수 있어요.', '⚠️');
        state.storageAvailable = false;
      }
    }

    // ==================== WEB AUDIO SYNTHESIZER ====================
    let audioCtx = null;
    function playSound(type) {
      if (!state.soundOn) return;
      try {
        if (!audioCtx) {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (!AudioContextClass) return;
          audioCtx = new AudioContextClass();
        }
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === "correct") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.09);
          osc.frequency.setValueAtTime(783.99, now + 0.18);
          gain.gain.setValueAtTime(0.16, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
        } else if (type === "wrong") {
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.setValueAtTime(175, now + 0.12);
          gain.gain.setValueAtTime(0.14, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
        } else if (type === "stamp") {
          osc.type = "sine";
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.08);
          osc.frequency.setValueAtTime(783.99, now + 0.16);
          osc.frequency.setValueAtTime(1046.5, now + 0.24);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
        } else {
          osc.type = "sine";
          osc.frequency.setValueAtTime(440, now);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
        }
      } catch (e) {
        // Ignore audio errors
      }
    }

    // ==================== TOAST NOTIFICATION ====================
    function showToast(message, icon = "🎃") {
      const container = document.getElementById("toastContainer");
      const toast = document.createElement("div");
      toast.className = "pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-950/95 border border-amber-400/60 text-white text-xs sm:text-sm font-bold shadow-2xl transition-all duration-300";
      toast.innerHTML = `<span class="text-base">${icon}</span><span>${message}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-8px)";
        setTimeout(() => toast.remove(), 300);
      }, 2600);
    }

    // ==================== STAMP & HEADER RENDER ====================
    function unlockStamp(key, label) {
      if (!state.stamps[key]) {
        state.stamps[key] = true;
        awardOnce(`stamp:${key}`, 'completion', 50, `${label} 활동 완료`);
        saveProgress();
        playSound("stamp");
        burstCandyConfetti(22);
        showToast(`[${label}] 활동 완료를 기록했어요.`, "🏅");
        renderStamps();
        renderCandyHeader();
        renderCertificateCanvas();
      }
    }

    function renderStamps() {
      const keys = ["s1", "s2", "s3", "s4"];
      let count = 0;
      keys.forEach((k, idx) => {
        const earned = !!state.stamps[k];
        if (earned) count++;
        const card = document.getElementById(`stampCard${idx + 1}`);
        const icon = document.getElementById(`stampIcon${idx + 1}`);
        if (earned) {
          card.classList.add("stamp-earned");
          icon.textContent = "🏅";
        } else {
          card.classList.remove("stamp-earned");
          icon.textContent = "🔒";
        }
      });
      document.getElementById("stampCountText").textContent = `${count}/4`;
      document.getElementById("journeyCount").textContent = `${count} / 4`;
    }

    // ==================== SPEECH SYNTHESIS CLEANUP ====================
    function stopSpeaking() {
      try {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
      } catch (e) {}
      const lbl = document.getElementById("speakBtnLabel");
      if (lbl) lbl.textContent = "소리 듣기";
    }
    function currentSpeechRate() {
      if (state.speechSlow) return 0.78;
      return state.grade === '1-2' ? 0.88 : 0.98;
    }
    function syncSpeechRateButton() {
      const btn = document.getElementById('btnSpeechRate');
      const label = document.getElementById('speechRateLabel');
      if (!btn) return;
      btn.setAttribute('aria-pressed', String(!!state.speechSlow));
      btn.classList.toggle('is-picked', !!state.speechSlow);
      if (label) label.textContent = state.speechSlow ? '천천히 0.8x' : '보통 속도';
    }
    function speakText(text) {
      stopSpeaking();
      if (!state.soundOn || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
        showToast('이 기기에서 음성을 사용할 수 없어 화면의 글로 진행해요.', '🔈');
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang='ko-KR';
      utterance.rate=currentSpeechRate();
      try { window.speechSynthesis.speak(utterance); } catch (e) { showToast('음성을 사용할 수 없어 화면의 글로 진행해요.', '🔈'); }
    }

    // ==================== TAB 1: STORY & JACK-O'-LANTERN WORKSHOP ====================
    const STORY_SCENES = {
      pumpkin: '<ellipse cx="110" cy="101" rx="60" ry="47" fill="#f59d52"/><path d="M110 55V40q12-10 23-4" fill="none" stroke="#65835b" stroke-width="8" stroke-linecap="round"/><path d="M76 68q-19 39 0 66m68-66q19 39 0 66" fill="none" stroke="#dc773a" stroke-width="4"/><path d="m84 91 11 7-11 5m52-12-11 7 11 5M91 116q19 19 38 0" fill="none" stroke="#703f33" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
      lantern: '<circle cx="110" cy="91" r="58" fill="#ffe1a5"/><path d="M110 55V42q10-8 20-5" fill="none" stroke="#62815b" stroke-width="7" stroke-linecap="round"/><ellipse cx="110" cy="105" rx="52" ry="42" fill="#ed9952"/><path d="m85 92 10 5m40-5-10 5M91 116q19 16 38 0" fill="none" stroke="#613b30" stroke-width="4" stroke-linecap="round"/>',
      neighbor: '<path d="M31 94 67 63l36 31v45H31zM118 94l36-31 36 31v45h-72z" fill="#f6b47c" stroke="#8b5a4a" stroke-width="3" stroke-linejoin="round"/><path d="M30 95h74m13 0h74" stroke="#8b5a4a" stroke-width="3"/><rect x="50" y="108" width="20" height="31" rx="3" fill="#fff4de"/><rect x="143" y="108" width="20" height="31" rx="3" fill="#fff4de"/><path d="M103 61q7-13 14 0-7 13-14 20-7-7-14-20 7-13 14 0" fill="#d98073"/>',
      path: '<path d="M67 145q48-52 20-75Q67 50 85 32" fill="none" stroke="#d8b98d" stroke-width="35" stroke-linecap="round"/><path d="M67 145q48-52 20-75Q67 50 85 32" fill="none" stroke="#fff5db" stroke-width="25" stroke-linecap="round"/><rect x="133" y="57" width="54" height="34" rx="8" fill="#6d8d81"/><path d="M145 74h27m-12-9 12 9-12 9" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M143 92v42" stroke="#6d8d81" stroke-width="6"/>',
      flower: '<path d="M110 76v60m-30-26q30-8 30 11m30-11q-30-8-30 11" fill="none" stroke="#69906a" stroke-width="5" stroke-linecap="round"/><g fill="#f5b96a"><ellipse cx="110" cy="50" rx="12" ry="23"/><ellipse cx="110" cy="91" rx="12" ry="23"/><ellipse cx="89" cy="70" rx="23" ry="12"/><ellipse cx="131" cy="70" rx="23" ry="12"/><ellipse cx="95" cy="55" rx="12" ry="21" transform="rotate(-45 95 55)"/><ellipse cx="125" cy="85" rx="12" ry="21" transform="rotate(-45 125 85)"/></g><circle cx="110" cy="70" r="14" fill="#8d6246"/>',
      classroom: '<rect x="38" y="35" width="144" height="105" rx="12" fill="#f8cda2" stroke="#b77b60" stroke-width="3"/><path d="M48 49h124m-115 0 10 16 10-16 10 16 10-16 10 16 10-16 10 16 10-16 10 16 10-16" fill="none" stroke="#c77660" stroke-width="3"/><rect x="58" y="81" width="53" height="43" rx="5" fill="#fff7e7"/><path d="M71 95h28m-28 10h21" stroke="#8e9b89" stroke-width="3" stroke-linecap="round"/><ellipse cx="146" cy="106" rx="20" ry="18" fill="#ed9d58"/><path d="M140 107h12m-9 8q7 5 13-1" fill="none" stroke="#794735" stroke-width="3" stroke-linecap="round"/>',
      exit: '<rect x="56" y="28" width="108" height="38" rx="7" fill="#3f9a6b"/><circle cx="80" cy="38" r="4" fill="#fff"/><path d="M80 43l-4 9 6 3m-2-12 6 6 6-1m-10 4-6 8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M104 47h40m-9-8 9 8-9 8" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="82" y="76" width="56" height="66" rx="4" fill="#fff7e7" stroke="#8b5a4a" stroke-width="3"/><circle cx="127" cy="111" r="3" fill="#8b5a4a"/>',
      booth: '<path d="M22 82 52 54l30 28z" fill="#e0796a"/><rect x="27" y="82" width="50" height="46" rx="3" fill="#fff4de" stroke="#b77b60" stroke-width="2"/><path d="M138 82l30-28 30 28z" fill="#6d8d81"/><rect x="143" y="82" width="50" height="46" rx="3" fill="#fff4de" stroke="#b77b60" stroke-width="2"/><g fill="#f2b78f"><circle cx="101" cy="78" r="7"/><circle cx="117" cy="92" r="7"/><circle cx="101" cy="108" r="7"/><circle cx="117" cy="124" r="7"/></g><g fill="#8fa7c9"><ellipse cx="101" cy="90" rx="8" ry="5"/><ellipse cx="117" cy="104" rx="8" ry="5"/><ellipse cx="101" cy="120" rx="8" ry="5"/><ellipse cx="117" cy="136" rx="8" ry="5"/></g>',
      crowd: '<g fill="#f2b78f"><circle cx="58" cy="70" r="9"/><circle cx="80" cy="64" r="9"/><circle cx="102" cy="72" r="9"/><circle cx="69" cy="94" r="9"/><circle cx="91" cy="90" r="9"/><circle cx="113" cy="96" r="9"/><circle cx="60" cy="118" r="9"/><circle cx="82" cy="114" r="9"/><circle cx="104" cy="120" r="9"/></g><g fill="#a48dc0"><ellipse cx="58" cy="82" rx="11" ry="5"/><ellipse cx="80" cy="76" rx="11" ry="5"/><ellipse cx="102" cy="84" rx="11" ry="5"/><ellipse cx="69" cy="106" rx="11" ry="5"/><ellipse cx="91" cy="102" rx="11" ry="5"/><ellipse cx="113" cy="108" rx="11" ry="5"/><ellipse cx="60" cy="130" rx="11" ry="5"/><ellipse cx="82" cy="126" rx="11" ry="5"/><ellipse cx="104" cy="132" rx="11" ry="5"/></g><path d="M130 100q22-4 40-30" fill="none" stroke="#6d8d81" stroke-width="7" stroke-linecap="round"/><path d="m156 64 15 5-1 16" fill="none" stroke="#6d8d81" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>',
      meet: '<path d="M110 32v100" stroke="#8b5a4a" stroke-width="5" stroke-linecap="round"/><path d="M112 34h44l-11 13 11 13h-44z" fill="#e0796a"/><circle cx="74" cy="90" r="11" fill="#f2b78f"/><path d="M60 132q0-28 14-28t14 28z" fill="#8fa7c9"/><circle cx="146" cy="90" r="11" fill="#f2b78f"/><path d="M132 132q0-28 14-28t14 28z" fill="#e8a25b"/>',
      bus: '<rect x="32" y="56" width="156" height="66" rx="14" fill="#f2b84b" stroke="#b7813a" stroke-width="3"/><g fill="#dff1f5"><rect x="44" y="68" width="26" height="22" rx="4"/><rect x="78" y="68" width="26" height="22" rx="4"/><rect x="112" y="68" width="26" height="22" rx="4"/><rect x="148" y="68" width="28" height="40" rx="4"/></g><path d="M40 104h100" stroke="#b7813a" stroke-width="3"/><circle cx="68" cy="124" r="12" fill="#4e4458"/><circle cx="154" cy="124" r="12" fill="#4e4458"/><circle cx="68" cy="124" r="4" fill="#d8d0e4"/><circle cx="154" cy="124" r="4" fill="#d8d0e4"/>',
      bag: '<rect x="76" y="56" width="68" height="80" rx="11" fill="#7f9bc4" stroke="#5c6f8f" stroke-width="3"/><path d="M95 56V42h30v14" fill="none" stroke="#5c6f8f" stroke-width="6" stroke-linejoin="round"/><path d="M76 82h68m-68 28h68" stroke="#5c6f8f" stroke-width="3"/><circle cx="90" cy="141" r="6" fill="#4e4458"/><circle cx="130" cy="141" r="6" fill="#4e4458"/><path d="M160 64l12-8m-10 26 16-2" stroke="#e0796a" stroke-width="5" stroke-linecap="round"/>',
      track: '<ellipse cx="110" cy="100" rx="84" ry="40" fill="#e8956b"/><ellipse cx="110" cy="100" rx="60" ry="22" fill="#cfe2bd"/><ellipse cx="110" cy="100" rx="72" ry="31" fill="none" stroke="#fff5db" stroke-width="2" stroke-dasharray="7 6"/><path d="M28 34q82 22 164 0" fill="none" stroke="#8b5a4a" stroke-width="2"/><g fill="#e0796a"><path d="M46 38l6 13 6-11z"/><path d="M90 45l6 13 6-12z"/><path d="M134 45l6 12 6-13z"/></g><g fill="#6d8d81"><path d="M68 42l6 13 6-12z"/><path d="M112 46l6 13 6-13z"/><path d="M156 40l6 11 6-13z"/></g>',
      stage: '<rect x="34" y="34" width="152" height="64" rx="8" fill="#7b6a96"/><path d="M34 34h152v14H34z" fill="#c4677a"/><path d="M34 48q12 30 0 50m152-50q-12 30 0 50" fill="#c4677a"/><rect x="66" y="78" width="88" height="20" rx="3" fill="#ffe3a8"/><circle cx="110" cy="64" r="8" fill="#f2b78f"/><g fill="#f2b78f"><circle cx="54" cy="124" r="9"/><circle cx="80" cy="120" r="9"/><circle cx="106" cy="124" r="9"/><circle cx="132" cy="120" r="9"/><circle cx="158" cy="124" r="9"/></g><g fill="#8fa7c9"><ellipse cx="54" cy="138" rx="12" ry="6"/><ellipse cx="80" cy="134" rx="12" ry="6"/><ellipse cx="106" cy="138" rx="12" ry="6"/><ellipse cx="132" cy="134" rx="12" ry="6"/><ellipse cx="158" cy="138" rx="12" ry="6"/></g>',
      help: '<rect x="78" y="26" width="64" height="112" rx="13" fill="#5d5470"/><rect x="85" y="40" width="50" height="80" rx="6" fill="#fff4de"/><text x="110" y="72" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#3e66a8">112</text><text x="110" y="102" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#c4544b">119</text><circle cx="110" cy="129" r="4" fill="#d8d0e4"/>'
    };
    function storyArtwork(kind) {
      const scene = STORY_SCENES[kind] || STORY_SCENES.pumpkin;
      return `<svg viewBox="0 0 220 170" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="170" rx="25" fill="#fff1da"/><circle cx="35" cy="37" r="6" fill="#ffe0a0"/><circle cx="181" cy="35" r="4" fill="#ffe0a0"/><path d="M0 146q110-28 220 0v24H0z" fill="#e3e9d6"/>${scene}</svg>`;
    }
    const STORY_CLUES_BY_GRADE = {
      "1-2": [
        "🔎 숨은 단서 (1~2학년): 10월의 마지막 날(31일), 호박을 꾸미거나 다정한 인사를 나누며 가을을 보내요!",
        "🔎 숨은 단서 (1~2학년): 옛날 아일랜드에서는 호박 대신 동그란 ‘순무’에 얼굴을 그려 등불을 만들었대요!",
        "🔎 숨은 단서 (1~2학년): 이웃집에 갈 때는 혼자 가지 않고 꼭 부모님이나 선생님과 손을 잡고 함께 가요!",
        "🔎 숨은 단서 (1~2학년): 어두운 길에서는 반짝이는 야광 스티커를 붙이면 멀리서도 나를 잘 볼 수 있어요!",
        "🔎 숨은 단서 (1~2학년): 멕시코에서는 주황색 꽃길과 맛있는 빵을 차려 놓고 사랑하는 가족을 떠올려요!",
        "🔎 숨은 단서 (1~2학년): 친구가 ‘그만해!’라고 말하면 바로 멈추고 다정한 말을 건네는 것이 진짜 멋진 친구예요!"
      ],
      "3-4": [
        "🔎 숨은 단서 (3~4학년): 옛날 켈트족의 계절 명절 ‘서우인’과 만성절 전야 이야기가 만나 오늘날 다양한 문화가 되었어요!",
        "🔎 숨은 단서 (3~4학년): 아일랜드 사람들이 미국으로 이주하면서 조각하기 쉬운 호박으로 등불 재료가 바뀌었대요!",
        "🔎 숨은 단서 (3~4학년): 미국에서는 어린이들이 간식 바구니 대신 유니세프 모금 상자를 들고 이웃을 돕기도 해요!",
        "🔎 숨은 단서 (3~4학년): 축제장 입구의 초록색 달리는 사람 표지판(비상구)을 미리 찾으면 위급할 때 안전해요!",
        "🔎 숨은 단서 (3~4학년): 멕시코의 ‘죽은 자들의 날’에 쓰이는 주황색 금잔화(마리골드) 향기는 가족을 안내하는 뜻이 있어요!",
        "🔎 숨은 단서 (3~4학년): 진정한 축제의 주인공은 친구의 마음을 배려하고 머문 자리를 깨끗이 정리하는 사람이에요!"
      ],
      "5-6": [
        "🔎 숨은 단서 (5~6학년): 문화의 기원은 하나의 사건이 아니라 여러 시대의 계절 풍습과 기록이 겹쳐 형성되었어요!",
        "🔎 숨은 단서 (5~6학년): 사람들의 이주와 지역 작물 환경의 차이가 전통 장식의 재료까지 변화시킨 역사적 사례예요!",
        "🔎 숨은 단서 (5~6학년): 축제에 참여하는 방식만큼이나 ‘참여하지 않을 자유’도 존중받는 성숙한 공동체 문화를 만들어요!",
        "🔎 숨은 단서 (5~6학년): 보행 속도가 느려지고 어깨가 자꾸 닿는 밀집 신호가 보이면 즉시 넓은 이동로로 벗어나야 해요!",
        "🔎 숨은 단서 (5~6학년): 유네스코 인류무형문화유산인 ‘죽은 자들의 날’은 공포가 아닌 가족과의 유대와 기억을 기리는 전통이에요!",
        "🔎 숨은 단서 (5~6학년): 안전한 동선 설계, 참여 선택권 보장, 정리 규칙이 함께할 때 모두가 편안한 행사가 완성돼요!"
      ]
    };
    const STORY_POLLS_BY_GRADE = {
      "1-2": [
        {
          options: ["🎃 귀여운 호박 모형 꾸미기", "👋 친구와 다정하게 인사 나누기"],
          feedbacks: [
            "좋아요! 알록달록 귀여운 호박을 꾸미며 교실을 밝게 장식해 봐요.",
            "멋져요! 친구들과 반갑게 인사를 나누면 우리 반 모두가 즐거워져요."
          ]
        },
        {
          options: ["😄 방긋 웃는 다정한 표정", "😮 동그랗게 깜짝 놀란 표정"],
          feedbacks: [
            "보기만 해도 기분 좋아지는 웃는 호박등이네요! 호박 꾸미기에서 직접 만들어 봐요.",
            "재미있고 귀여운 깜짝 표정이네요! 호박 꾸미기에서 멋지게 완성해 봐요."
          ]
        },
        {
          options: ["👨‍👩‍👧 부모님(보호자)과 먼저 상의해요", "🏫 선생님·어른과 함께 약속해요"],
          feedbacks: [
            "딩동댕! 어디로 갈지, 누구와 갈지 꼭 부모님(보호자)과 먼저 상의해요.",
            "맞아요! 혼자 결정하지 않고 나를 지켜 주는 어른과 먼저 약속하고 함께 움직여요."
          ]
        },
        {
          options: ["✂️ 무릎 위로 짧게 줄여서 입어요", "🧷 바닥에 끌리지 않게 접어 고정해요"],
          feedbacks: [
            "딩동댕! 망토 길이를 무릎 위로 짧게 줄이면 발에 밟히지 않아 넘어지지 않아요.",
            "좋은 방법이에요! 옷자락이 바닥에 끌리지 않게 단단히 고정하면 안전하게 걸을 수 있어요."
          ]
        },
        {
          options: ["🌼 가족을 기억하고 사랑하는 날이라고 알려줘요", "📅 날짜만 가깝고 이름과 뜻이 다른 문화라고 말해요"],
          feedbacks: [
            "맞아요! 죽은 자들의 날은 무서운 날이 아니라 세상을 떠난 가족을 기억하는 따뜻한 날이에요.",
            "정확해요! 시기가 비슷해도 나라마다 고유한 이름과 소중한 뜻이 다르다고 설명해 줘요."
          ]
        },
        {
          options: ["🛑 친구가 싫어하는 장난은 바로 멈추기", "🧹 놀이가 끝난 뒤 쓰레기 함께 치우기"],
          feedbacks: [
            "최고예요! 친구의 기분을 살피고 싫다는 장난을 바로 멈추면 모두가 편안해요.",
            "멋진 약속이에요! 함께 놀고 난 자리를 깨끗이 정리하면 기분 좋게 마무리할 수 있어요."
          ]
        }
      ],
      "3-4": [
        {
          options: ["🕯️ 순무 등불이 호박등(잭오랜턴) 만들기로 바뀐 것", "🍬 옛 계절 풍습이 이웃과 인사·간식 나누기로 바뀐 것"],
          feedbacks: [
            "맞아요! 옛날 순무에 불을 밝히던 풍습이 오늘날 호박등을 꾸미는 놀이로 이어졌어요.",
            "정확해요! 계절의 변화를 기념하던 옛 풍습이 오늘날 이웃과 함께 즐기는 축제로 변화했어요."
          ]
        },
        {
          options: ["🕯️ 얼굴 모양을 새겨 등불을 밝히는 전통", "🎃 가을밤 이웃과 함께 명절을 기념하는 의미"],
          feedbacks: [
            "딩동댕! 순무에서 호박으로 재료는 바뀌었지만 얼굴을 새겨 등불을 밝히는 풍습은 그대로 이어졌어요.",
            "맞아요! 사는 곳과 재료가 달라져도 함께 등불을 만들고 가을을 기념하는 마음은 이어졌어요."
          ]
        },
        {
          options: ["📍 어디로 갈지(방문할 장소와 안전한 이동 경로)", "⏰ 언제까지 다녀올지(약속 시간과 동행할 어른)"],
          feedbacks: [
            "맞아요! 낯선 곳에 혼자 가지 않도록 방문할 장소와 이동 경로를 어른과 먼저 정해요.",
            "정확해요! 동행할 어른과 돌아올 시간을 미리 약속해야 안전하게 즐길 수 있어요."
          ]
        },
        {
          options: ["🚪 들어가기 전 주변 이동로와 비상 출구부터 확인하기", "🚶 사람이 몰린 좁은 길 대신 여유 있는 길로 이동하기"],
          feedbacks: [
            "좋은 판단이에요! 안쪽이 좁은 곳에서는 언제든 빠져나갈 수 있는 이동로와 출구를 먼저 확인해요.",
            "맞아요! 안쪽 좁은 통로로 사람이 몰리면 무리하게 들어가지 않고 넓은 길로 이동해요."
          ]
        },
        {
          options: ["📖 각 문화의 고유한 이름과 역사적 유래", "🌼 그 날을 기리는 진짜 뜻과 전통 방식"],
          feedbacks: [
            "맞아요! 날짜가 가깝더라도 각 문화가 가진 고유한 이름과 유래를 먼저 확인해요.",
            "정확해요! 겉모습만 보지 않고 가족을 기억하는 고유한 뜻과 방식을 따로 살펴보아요."
          ]
        },
        {
          options: ["🚶 이동하는 통로는 비워 두고 안전하게 걸어요", "🤝 싫어하는 장난은 멈추고 끝난 뒤 함께 정리해요"],
          feedbacks: [
            "멋진 규칙이에요! 교실 통로를 넓게 비워 두면 부딪히거나 넘어지지 않고 안전해요.",
            "최고예요! 친구를 배려하고 함께 정리하는 약속이 우리 반 축제를 더 즐겁게 만들어요."
          ]
        }
      ],
      "5-6": [
        {
          options: ["📚 출처가 분명한 여러 역사 자료 비교하기", "🔍 시대·지역별 풍습의 근거 살펴보기"],
          feedbacks: [
            "훌륭해요! 한 가지 주장만 믿지 않고 도서관·박물관 등 출처가 분명한 여러 역사 자료를 함께 비교해 봐요.",
            "정확해요! 각 풍습이 어떤 시대와 지역에서 어떻게 전해졌는지 구체적인 근거를 확인해야 해요."
          ]
        },
        {
          options: ["🌍 이주와 자연환경 변화에 맞춰 전통이 적응함", "🕯️ 상징의 의미는 유지되면서 표현 방식이 넓어짐"],
          feedbacks: [
            "맞아요! 사람들이 새로운 지역으로 이동하면서 그곳의 환경과 작물에 맞춰 문화의 모습도 자연스럽게 변했어요.",
            "정확해요! 등불을 밝히는 상징적 맥락은 이어지면서도 시대와 환경에 따라 표현 재료가 달라졌어요."
          ]
        },
        {
          options: ["🤝 참여하지 않을 자유와 선택권을 존중하기", "💬 강요하지 않고 누구나 편안한 분위기 만들기"],
          feedbacks: [
            "성숙한 태도예요! 축제를 즐기는 방식만큼이나 참여하지 않을 자유도 똑같이 존중받아야 해요.",
            "맞아요! 억지로 권하지 않고 각자 원하는 방식으로 편안하게 지낼 수 있도록 배려해요."
          ]
        },
        {
          options: ["↗️ 인파 흐름을 따라 대각선 가장자리 넓은 곳으로 이동", "🗺️ 미리 확인해 둔 덜 붐비는 대체 출구·우회 통로 활용"],
          feedbacks: [
            "정확해요! 흐름을 정면으로 거스르지 않고 대각선 가장자리나 넓은 공간으로 먼저 벗어나요.",
            "좋은 판단이에요! 한 출구로만 몰리지 않고 사전에 파악해 둔 여유 있는 우회 경로를 이용해 대피해요."
          ]
        },
        {
          options: ["🚫 날짜나 겉모습만 보고 ‘같은 축제’라고 단정하기", "🚫 고유한 맥락 없이 ‘한쪽이 따라 했다’고 단정하기"],
          feedbacks: [
            "정확히 짚었어요! 시기나 장식이 비슷해 보여도 고유한 역사와 의미가 다르므로 같은 축제라고 단정하면 안 돼요.",
            "맞아요! 각 문화가 형성된 역사적 배경을 살피지 않고 단순 모방이라고 단정하는 태도는 피해야 해요."
          ]
        },
        {
          options: ["🚶 이동 통로 비워 두기 & 🛑 싫은 장난 즉시 멈추기", "🤝 참여 선택권 보장하기 & 🧹 끝난 뒤 함께 정리하기"],
          feedbacks: [
            "멋진 기획이에요! 보행 안전을 위한 통로 확보와 친구 배려 규칙은 안전한 행사의 기본이에요.",
            "훌륭해요! 누구도 소외되지 않는 선택권 존중과 공동 정리 약속이 더해지면 완성도 높은 행사가 돼요."
          ]
        }
      ]
    };
    // Halloween keeps its original story and progress fields; other themes read THEME_STORIES and keep progress per theme.
    function isHalloweenTheme() {
      return state.teacher.theme === 'halloween' || !THEME_STORIES[state.teacher.theme];
    }
    function themeStoryData() {
      return isHalloweenTheme() ? null : THEME_STORIES[state.teacher.theme][state.grade];
    }
    function getStories() {
      return themeStoryData()?.stories || EDUCATION_DATA[state.grade].stories;
    }
    function getStoryClues() {
      return themeStoryData()?.clues || STORY_CLUES_BY_GRADE[state.grade] || STORY_CLUES_BY_GRADE["3-4"];
    }
    function getStoryPolls() {
      return themeStoryData()?.polls || STORY_POLLS_BY_GRADE[state.grade] || STORY_POLLS_BY_GRADE["3-4"];
    }
    function storyProgress() {
      if (isHalloweenTheme()) return state;
      const total = getStories().length;
      const saved = state.themeStoryProgress[state.teacher.theme];
      const valid = saved && Number.isInteger(saved.storyIndex) && saved.storyIndex >= 0 && saved.storyIndex < total &&
        saved.readStories && typeof saved.readStories === 'object' && !Array.isArray(saved.readStories);
      if (!valid) state.themeStoryProgress[state.teacher.theme] = {storyIndex: 0, readStories: {0: true}};
      return state.themeStoryProgress[state.teacher.theme];
    }
    function storyKey(index) {
      return isHalloweenTheme() ? `${state.grade}:${index}` : `${state.grade}:${state.teacher.theme}:${index}`;
    }
    function storyRewardId(index) {
      return isHalloweenTheme() ? `story:${index}` : `story:${state.teacher.theme}:${index}`;
    }
    function storySpeechText() {
      const current = getStories()[storyProgress().storyIndex];
      return `${current.title}. ${current.body}. ${current.keyPoint}. ${current.question}`;
    }
    const PUMPKIN_RECIPES = [
      { name: "별빛 마법사 호박", eye: "⭐ ⭐", mouth: "😄 활짝", hat: "🎩" },
      { name: "황금 왕관 야옹 호박", eye: "😊 😊", mouth: "🐱 야옹", hat: "👑" },
      { name: "하트 리본 요정 호박", eye: "❤️ ❤️", mouth: "😮 깜짝", hat: "🎀" },
      { name: "멋쟁이 초록 대장 호박", eye: "🕶️ 🕶️", mouth: "🦷 이빨", hat: "🌱" }
    ];
    const FESTIVAL_QUIZZES = {
      halloween: {
        options: ["아니요, 지역과 가정마다 다르게 즐겨요", "네, 전 세계가 똑같은 한 가지 놀이만 해요"],
        correct: 0,
        feedback: "💮 [할로윈 도장 완료!] 맞아요, 지역·학교·가정마다 즐기는 방법이 서로 달라요."
      },
      muertos: {
        options: ["세상을 떠난 가족을 기억하고 맞이하는 고유한 전통", "할로윈과 이름만 다른 똑같은 축제"],
        correct: 0,
        feedback: "💮 [죽은 자들의 날 도장 완료!] 가족을 기리는 멕시코의 소중한 고유 문화를 이해했어요."
      },
      korea: {
        options: ["기원과 날짜, 수확을 돌아보며 가족이 모이는 고유한 의미가 달라요", "가을에 열리므로 서양 축제와 기원·의미가 똑같아요"],
        correct: 0,
        feedback: "💮 [추석 도장 완료!] 기원과 날짜, 의미가 서로 다른 명절임을 정확히 비교했어요."
      }
    };
    const storyPollPicked = {};
    const storyClueOpened = {};
    const festivalStamps = {};
    let currentFestivalKey = 'halloween';

    let cultureStage = 'story';
    function setCultureStage(stage, focus = false) {
      if (!['story','craft','compare'].includes(stage)) return;
      cultureStage = stage;
      document.querySelectorAll('[data-culture-stage]').forEach(panel => {
        panel.classList.toggle('hidden', panel.dataset.cultureStage !== stage);
      });
      document.querySelectorAll('[data-culture-step]').forEach(button => {
        const selected = button.dataset.cultureStep === stage;
        button.classList.toggle('is-current', selected);
        if (selected) button.setAttribute('aria-current', 'step');
        else button.removeAttribute('aria-current');
      });
      if (stage === 'compare') renderFestivalQuiz(currentFestivalKey);
      if (focus) {
        const heading = document.querySelector(`[data-culture-stage="${stage}"] h2, [data-culture-stage="${stage}"] h3`);
        if (heading) { heading.tabIndex = -1; heading.focus(); }
      }
    }
    function renderFestivalQuiz(key) {
      currentFestivalKey = key;
      const qBox = document.getElementById('festivalQuizBox');
      const fBox = document.getElementById('festivalQuizFeedback');
      if (!qBox || !fBox) return;
      qBox.replaceChildren();
      const quiz = FESTIVAL_QUIZZES[key];
      if (!quiz) return;
      quiz.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `mini-chip ${festivalStamps[key] === idx ? 'is-picked' : ''}`;
        btn.textContent = `${idx === 0 ? '🅰️' : '🅱️'} ${optText}`;
        btn.addEventListener('click', () => {
          festivalStamps[key] = idx;
          playSound(idx === quiz.correct ? 'correct' : 'wrong');
          renderFestivalQuiz(key);
        });
        qBox.appendChild(btn);
      });
      if (festivalStamps[key] !== undefined) {
        const isRight = festivalStamps[key] === quiz.correct;
        fBox.className = `text-xs font-bold mt-1 ${isRight ? 'text-emerald-300' : 'text-rose-300'}`;
        const stampTotal = Object.keys(FESTIVAL_QUIZZES).filter(k => festivalStamps[k] === FESTIVAL_QUIZZES[k].correct).length;
        fBox.textContent = isRight
          ? `${quiz.feedback} (문화 스탬프 ${stampTotal}/3)`
          : '❌ 설명을 다시 읽고 그 문화의 고유한 뜻을 골라 보세요!';
      } else {
        fBox.className = 'hidden text-xs font-bold';
        fBox.textContent = '';
      }
    }
    const EASY_GLOSSARY = {
      "풍습·전통": "🏺 옛날부터 그 지역 사람들이 해마다 이어 온 생활 모습이나 기념 방식이에요.",
      "인류무형문화유산": "🌍 오래전부터 전해 내려와 세계가 함께 소중히 지키기로 약속한 전통문화예요.",
      "비상구(출구)": "🟩 위급할 때 안전하게 밖으로 대피할 수 있는 초록색 표지판 문이에요.",
      "다중밀집": "👥 좁은 공간에 아주 많은 사람이 빽빽하게 모인 상태예요.",
      "우측통행": "➡️ 서로 마주 보고 걸을 때 부딪히지 않도록 오른쪽 길로 걷는 약속이에요.",
      "대각선 이동": "↗️ 사람들 흐름을 거스르지 않고 비스듬히 가장자리 넓은 곳으로 빠져나가는 방법이에요.",
      "가슴 앞 공간(흉강)": "👐 양팔로 가슴 앞을 감싸 폐가 숨을 편하게 쉴 수 있게 지키는 공간이에요.",
      "병목 현상": "🚧 넓은 길에서 갑자기 좁은 문이나 계단으로 사람이 몰려 길이 막히는 현상이에요.",
      "집결 장소": "🚩 모둠 친구나 선생님을 놓쳤을 때 다시 만나기로 미리 약속한 넓은 장소예요."
    };
    const openedGlossaryByBox = {};
    function renderGlossaryBox(boxId, keys) {
      const box = document.getElementById(boxId);
      if (!box) return;
      box.replaceChildren();
      const row = document.createElement("div");
      row.className = "flex flex-wrap items-center gap-1.5";
      const label = document.createElement("span");
      label.className = "font-extrabold text-amber-300 text-[11px]";
      label.textContent = "📚 쉬운 말 사전:";
      row.appendChild(label);
      const activeTerm = openedGlossaryByBox[boxId];
      keys.forEach(term => {
        if (!EASY_GLOSSARY[term]) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `mini-chip glossary-chip ${activeTerm === term ? "is-picked" : ""}`;
        btn.textContent = term;
        btn.addEventListener("click", () => {
          openedGlossaryByBox[boxId] = openedGlossaryByBox[boxId] === term ? null : term;
          playSound("click");
          renderGlossaryBox(boxId, keys);
          if (openedGlossaryByBox[boxId] && state.autoRead) {
            speakText(`${term}. ${EASY_GLOSSARY[term]}`);
          }
        });
        row.appendChild(btn);
      });
      box.appendChild(row);
      if (activeTerm && EASY_GLOSSARY[activeTerm]) {
        const desc = document.createElement("p");
        desc.className = "glossary-meaning text-amber-200 font-bold text-xs pt-0.5";
        desc.textContent = `💡 ${activeTerm}: ${EASY_GLOSSARY[activeTerm]}`;
        box.appendChild(desc);
      }
    }
    function syncAutoReadButtons() {
      document.querySelectorAll(".auto-read-btn").forEach(btn => {
        btn.setAttribute("aria-pressed", String(!!state.autoRead));
        btn.classList.toggle("border-amber-400", !!state.autoRead);
        btn.classList.toggle("text-amber-300", !!state.autoRead);
        const label = btn.querySelector(".auto-read-label");
        if (label) label.textContent = state.autoRead ? "자동 읽기 ON" : "자동 읽기 OFF";
      });
    }
    function autoSpeakIfEnabled(text) {
      if (state.autoRead && state.soundOn && text) {
        speakText(text);
      }
    }
    let echoReadTimer = null;
    function renderStorySlide() {
      stopSpeaking();
      if (echoReadTimer) { clearInterval(echoReadTimer); echoReadTimer = null; }
      const echoStatus = document.getElementById("storyEchoStatus");
      if (echoStatus) { echoStatus.classList.add("hidden"); echoStatus.textContent = ""; }
      const gradeData = EDUCATION_DATA[state.grade];
      const stories = getStories();
      const progress = storyProgress();
      const current = stories[progress.storyIndex];
      const halloween = isHalloweenTheme();
      document.body.dataset.storyTheme = halloween ? 'halloween' : 'event';
      document.getElementById("cultureSectionTitle").textContent = `${THEMES[state.teacher.theme].label} 이야기`;
      if (!halloween && cultureStage === 'compare') setCultureStage('story');
      const themeCraftBtn = document.getElementById("btnThemeCraft");
      if (themeCraftBtn) {
        themeCraftBtn.classList.toggle("hidden", halloween);
        if (!halloween) themeCraftBtn.textContent = `🎒 ${getThemeCraftConfig().certTitle} 꾸미기`;
      }

      document.getElementById("currentGradeBadge").textContent = gradeData.label;
      const picture = document.getElementById("storyEmojiGraphic");
      picture.innerHTML = storyArtwork(current.art);
      picture.setAttribute('aria-label', current.caption);
      document.getElementById("storyVisualCaption").textContent = current.caption;
      const clueKey = storyKey(progress.storyIndex);
      const clueBox = document.getElementById("storyClueBox");
      if (clueBox) {
        clueBox.textContent = storyClueOpened[clueKey]
          ? getStoryClues()[progress.storyIndex]
          : "👆 그림을 눌러 숨은 이야기 단서를 찾아보세요!";
      }
      document.getElementById("storySlideTag").textContent = `카드 ${progress.storyIndex + 1} / ${stories.length}${pairTurnSuffix(progress.storyIndex)}`;
      document.getElementById("storySlideTitle").textContent = current.title;
      document.getElementById("storySlideBody").textContent = current.body;
      document.getElementById("storySlideKeyPoint").textContent = current.keyPoint;
      document.getElementById("storyThinkingQuestion").textContent = current.question;
      document.getElementById("storySourceLink").innerHTML = `<a href="${current.sourceUrl}" target="_blank" rel="noopener noreferrer" class="underline hover:text-amber-300">${current.sourceText} ↗</a>`;

      const pollKey = storyKey(progress.storyIndex);
      const pollBox = document.getElementById("storyPollBox");
      const pollFeedback = document.getElementById("storyPollFeedback");
      const pairTalkBox = document.getElementById("storyPairTalkBox");
      const poll = getStoryPolls()[progress.storyIndex];
      if (pollBox && pollFeedback && poll) {
        pollBox.replaceChildren();
        poll.options.forEach((opt, idx) => {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = `mini-chip ${storyPollPicked[pollKey] === idx ? "is-picked" : ""}`;
          chip.textContent = opt;
          chip.addEventListener("click", () => {
            storyPollPicked[pollKey] = idx;
            playSound("click");
            renderStorySlide();
          });
          pollBox.appendChild(chip);
        });
        if (storyPollPicked[pollKey] !== undefined) {
          const pickedIdx = storyPollPicked[pollKey];
          const fbText = (poll.feedbacks && poll.feedbacks[pickedIdx]) || poll.feedback || "";
          pollFeedback.className = "text-xs mt-1.5 font-bold text-emerald-300";
          pollFeedback.textContent = `💬 ${fbText}`;
          if (pairTalkBox) {
            pairTalkBox.classList.remove("hidden");
            pairTalkBox.replaceChildren();
            const otherIdx = pickedIdx === 0 ? 1 : 0;
            const otherOpt = poll.options[otherIdx] || poll.options[0];
            const promptEl = document.createElement("div");
            promptEl.className = "font-bold text-amber-200 leading-snug";
            promptEl.textContent = `🤝 짝꿍 생각 나누기(20초): 내가 고른 이유를 말하고, [${otherOpt}] 보기를 고른 친구는 어떤 마음일지 함께 이야기해 볼까요?`;
            const doneBtn = document.createElement("button");
            doneBtn.type = "button";
            doneBtn.id = "btnPairTalkDone";
            const isTalkDone = !!storyPollPicked[`${pollKey}:talk`];
            doneBtn.className = `mini-chip text-[11px] ${isTalkDone ? "is-picked" : ""}`;
            doneBtn.textContent = isTalkDone ? "🌟 짝꿍과 생각 나눔 완료!" : "🗣️ 짝꿍과 이야기 나눴어요!";
            doneBtn.addEventListener("click", () => {
              storyPollPicked[`${pollKey}:talk`] = true;
              playSound("correct");
              awardOnce(storyRewardId(progress.storyIndex), 'pairtalk', 10, "짝꿍 생각 나누기");
              renderStorySlide();
            });
            pairTalkBox.appendChild(promptEl);
            pairTalkBox.appendChild(doneBtn);
          }
        } else {
          pollFeedback.className = "hidden text-xs mt-1.5 font-bold";
          pollFeedback.textContent = "";
          if (pairTalkBox) {
            pairTalkBox.classList.add("hidden");
            pairTalkBox.replaceChildren();
          }
        }
      }

      const pillsEl = document.getElementById("storyStepPills");
      pillsEl.innerHTML = "";
      stories.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `w-5 h-2 rounded-full transition ${idx === progress.storyIndex ? "bg-amber-400" : progress.readStories[idx] ? "bg-orange-500/60" : "bg-indigo-700"}`;
        btn.setAttribute("aria-label", `${idx + 1}번 카드로 이동`);
        btn.addEventListener("click", () => {
          const isNew = !progress.readStories[idx];
          progress.storyIndex = idx;
          progress.readStories[idx] = true;
          if (isNew) awardOnce(storyRewardId(idx), 'read', 10, "이야기 카드 읽기");
          playSound("click");
          renderStorySlide();
        });
        pillsEl.appendChild(btn);
      });

      const readCount = Object.keys(progress.readStories).length;
      document.getElementById("storyReadCountBadge").textContent = `${readCount} / ${stories.length}`;

      document.getElementById("btnPrevStory").disabled = progress.storyIndex === 0;
      const nextBtn = document.getElementById("btnNextStory");
      if (progress.storyIndex === stories.length - 1) {
        nextBtn.textContent = halloween ? "문화 살펴보기 →" : "안전한 선택으로 →";
      } else {
        nextBtn.textContent = "다음 카드 →";
      }

      if (readCount >= stories.length) {
        unlockStamp("s1", `놀이 1: ${THEMES[state.teacher.theme].label} 이야기`);
      }
      renderGlossaryBox("storyGlossaryBox", halloween ? ["풍습·전통", "인류무형문화유산", "비상구(출구)"] : ["다중밀집", "병목 현상", "집결 장소", "비상구(출구)"]);
      syncAutoReadButtons();
      syncSpeechRateButton();
    }

    let currentRecipeIdx = 0;
    function renderLanternWorkshop() {
      const cfg = getThemeCraftConfig();
      const badgeEl = document.getElementById("craftWorkshopBadge");
      const titleEl = document.getElementById("craftWorkshopTitle");
      const toCompareBtn = document.getElementById("btnToCompare");
      if (badgeEl) badgeEl.textContent = cfg.badge;
      if (titleEl) titleEl.textContent = cfg.title;
      if (toCompareBtn) toCompareBtn.textContent = cfg.nextText;

      document.getElementById("pumpkinEyesDisplay").textContent = state.lantern.eye;
      document.getElementById("pumpkinMouthDisplay").textContent = state.lantern.mouth;
      document.getElementById("pumpkinHatDisplay").textContent = state.lantern.hat;

      syncButtonGroup(".lantern-eye-btn", "data-eye", state.lantern.eye);
      syncButtonGroup(".lantern-mouth-btn", "data-mouth", state.lantern.mouth);
      syncButtonGroup(".lantern-hat-btn", "data-hat", state.lantern.hat);

      const bodyEl = document.getElementById("pumpkinBodyVisual");
      const boxEl = document.getElementById("pumpkinPreviewBox");
      const btnEl = document.getElementById("btnToggleLanternLight");
      const capEl = document.getElementById("pumpkinStatusCaption");
      const recipeEl = document.getElementById("pumpkinRecipeBox");

      if (state.lantern.lit) {
        bodyEl.classList.add("lantern-lit");
        boxEl.classList.add("border-amber-400");
        btnEl.textContent = cfg.btnOff;
        capEl.textContent = cfg.litCaption;
      } else {
        bodyEl.classList.remove("lantern-lit");
        boxEl.classList.remove("border-amber-400");
        btnEl.textContent = cfg.btnOn;
        capEl.textContent = cfg.unlitCaption;
      }
      if (recipeEl) {
        const recipe = PUMPKIN_RECIPES[currentRecipeIdx % PUMPKIN_RECIPES.length];
        const matched = state.lantern.eye === recipe.eye && state.lantern.mouth === recipe.mouth && state.lantern.hat === recipe.hat;
        recipeEl.replaceChildren();
        const span = document.createElement("span");
        span.textContent = matched
          ? `🎉 [${recipe.name}] 레시피 완성! 다른 조합도 만들어 볼까요? `
          : `🎯 오늘의 호박 미션: [${recipe.name}] (${recipe.eye} + ${recipe.mouth} + ${recipe.hat}) `;
        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "mini-chip ml-1";
        nextBtn.textContent = "🎲 미션 변경";
        nextBtn.addEventListener("click", () => {
          currentRecipeIdx = (currentRecipeIdx + 1) % PUMPKIN_RECIPES.length;
          playSound("click");
          renderLanternWorkshop();
        });
        recipeEl.appendChild(span);
        recipeEl.appendChild(nextBtn);
      }
      renderCertificateCanvas();
    }

    function toggleSpeakCurrentStory() {
      if (!("speechSynthesis" in window)) {
        showToast("이 브라우저는 음성 읽기를 지원하지 않아요.", "ℹ️");
        return;
      }
      if (window.speechSynthesis.speaking) {
        stopSpeaking();
        return;
      }
      const current = getStories()[storyProgress().storyIndex];
      const utter = new SpeechSynthesisUtterance(`${current.title}. ${current.body}. 핵심 쏙쏙! ${current.keyPoint}`);
      utter.lang = "ko-KR";
      utter.rate = currentSpeechRate();
      utter.onend = () => {
        document.getElementById("speakBtnLabel").textContent = "소리 듣기";
      };
      utter.onerror = () => {
        document.getElementById("speakBtnLabel").textContent = "소리 듣기";
      };
      document.getElementById("speakBtnLabel").textContent = "⏹️ 멈춤";
      window.speechSynthesis.speak(utter);
    }

    // ==================== TAB 2: CROWD SAFETY SCENARIOS ====================
    const SAFETY_ACTION_DRILLS = [
      { title: "🔦 미니 실습 · 비상구 표지판 스캔", desc: "행사장에 도착했어요! 진짜 비상 대피소 표지판을 눌러 확인해 보세요.", btnText: "🟩 초록색 비상구(EXIT) 확인", doneText: "✅ 비상구와 넓은 통로 위치를 눈으로 먼저 기억했어요!" },
      { title: "👣 미니 실습 · 양방향 우측통행 발맞추기", desc: "마주 오는 사람과 부딪히지 않게 오른쪽 차선으로 걸어 볼까요?", btnText: "➡️ 오른쪽 길로 차근차근 걷기", doneText: "✅ 앞뒤 간격을 살피며 오른쪽으로 안전하게 걸었어요!" },
      { title: "↗️ 미니 실습 · 혼잡 신호 탈출 시뮬레이션", desc: "어깨가 자꾸 부딪히기 시작했어요! 어느 쪽으로 빠져나갈까요?", btnText: "↗️ 흐름을 따라 대각선 가장자리로 이동", doneText: "✅ 무리하게 역행하지 않고 대각선 넓은 곳으로 벗어났어요!" },
      { title: "👐 미니 실습 · 가슴 앞 숨 쉴 공간 3번 지키기", desc: "버튼을 3번 눌러 권투 선수처럼 가슴 앞 공간(흉강)을 지켜 보세요!", btnText: "🛡️ 가슴 앞 팔짱 방어 자세", targetClicks: 3, doneText: "✅ 가슴 앞 숨 쉴 공간을 든든하게 확보했어요!" },
      { title: "🍬 미니 실습 · 떨어진 물건 유혹 패스하기", desc: "복잡한 길에 아끼는 사탕이 떨어졌어요! 어떻게 행동할까요?", btnText: "🚶 허리 숙이지 않고 내 몸 먼저 이동", doneText: "✅ 인파 속에서는 물건보다 내 몸을 먼저 지켰어요!" },
      { title: "🚑 미니 실습 · 넘어졌을 때 몸 보호 & 119", desc: "일어나기 힘들 때 머리와 가슴을 보호하는 자세를 취해 보세요!", btnText: "🙆 머리 감싸고 공처럼 둥글게 말기", doneText: "✅ 머리와 장기를 보호하는 방어 자세와 112·119 신고 요령을 익혔어요!" }
    ];
    const safetyDrillCounts = {};
    const safetyDrillRemaining = {};
    let safetyDrillInterval = null;
    function startSafetyDrillCountdown(idx) {
      if (safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      safetyDrillRemaining[idx] = 3;
      renderSafetyActionDrill();
      safetyDrillInterval = setInterval(() => {
        if ((safetyDrillRemaining[idx] || 0) > 1) {
          safetyDrillRemaining[idx]--;
          playSound("click");
          renderSafetyActionDrill();
        } else {
          clearInterval(safetyDrillInterval);
          safetyDrillInterval = null;
          safetyDrillRemaining[idx] = 0;
          playSound("stamp");
          renderSafetyActionDrill();
        }
      }, 1000);
    }
    function renderSafetyActionDrill() {
      const box = document.getElementById("safetyActionDrill");
      if (!box) return;
      box.replaceChildren();
      const idx = state.scenarioIndex;
      const drill = SAFETY_ACTION_DRILLS[idx];
      if (!drill) return;
      const needed = drill.targetClicks || 1;
      const current = safetyDrillCounts[idx] || 0;
      const isDone = current >= needed;
      const countdown = safetyDrillRemaining[idx];

      const titleEl = document.createElement("div");
      titleEl.className = "font-extrabold text-amber-300";
      titleEl.textContent = drill.title;
      box.appendChild(titleEl);

      const descEl = document.createElement("p");
      descEl.textContent = isDone
        ? (countdown > 0
            ? `${drill.doneText} · 🙌 지금 자리에서 3초 동안 몸동작을 따라 해 봐요! (${countdown}초)`
            : countdown === 0
            ? `${drill.doneText} · 👏 3초 몸동작 따라 하기 성공!`
            : drill.doneText)
        : drill.desc;
      box.appendChild(descEl);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `mini-chip ${isDone ? "is-picked" : ""}`;
      btn.textContent = isDone
        ? (countdown > 0 ? `🌟 실습 완료! (⏱️ 몸동작 ${countdown}초)` : "🌟 실습 완료! (🙌 3초 몸동작 따라 하기)")
        : needed > 1
        ? `${drill.btnText} (${current}/${needed})`
        : drill.btnText;
      btn.addEventListener("click", () => {
        safetyDrillCounts[idx] = Math.min(needed, (safetyDrillCounts[idx] || 0) + 1);
        const nowDone = safetyDrillCounts[idx] >= needed;
        playSound(nowDone ? "correct" : "click");
        if (nowDone) {
          startSafetyDrillCountdown(idx);
        } else {
          renderSafetyActionDrill();
        }
      });
      box.appendChild(btn);
    }

    function renderScenario() {
      if (safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      const item = SAFETY_SCENARIOS[state.scenarioIndex];
      const goal = SAFETY_GOALS[state.scenarioIndex];
      const low = state.grade === '1-2' ? SAFETY_SCENARIO_LOW[state.scenarioIndex] : null;
      document.getElementById("scenarioStepBadge").textContent = `약속 ${state.scenarioIndex + 1} / ${SAFETY_SCENARIOS.length}${pairTurnSuffix(state.scenarioIndex)}`;
      document.getElementById("scenarioEmoji").textContent = item.emoji;
      document.getElementById("scenarioStageTag").textContent = item.stage;
      document.getElementById("scenarioTitle").textContent = low?.title || item.title;
      document.getElementById("scenarioDesc").textContent = low?.desc || (state.grade === '5-6' ? `${item.desc} 두 행동의 위험과 근거를 비교해 보세요.` : item.desc);
      const signalBar = document.getElementById("scenarioSignalBar");
      if (signalBar) {
        signalBar.textContent = state.completedScenarios[state.scenarioIndex]
          ? "🟢 안전 신호등 · 올바른 행동을 찾았어요!"
          : "🟡 상황 살피기 · 어떤 행동이 안전할까요?";
      }

      const choicesEl = document.getElementById("scenarioChoices");
      const feedbackBox = document.getElementById("scenarioFeedbackBox");
      choicesEl.innerHTML = "";
      feedbackBox.className = "hidden rounded-xl p-3 border text-xs sm:text-sm space-y-1";
      feedbackBox.innerHTML = "";
      document.getElementById('btnSpeakSafetyFeedback').classList.add('hidden');

      item.choices.forEach((choice, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "w-full text-left p-3 rounded-xl bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-700 hover:border-amber-400 transition flex items-start gap-2.5 min-h-[48px]";
        btn.innerHTML = `
          <span class="nowrap px-2 py-0.5 rounded-lg bg-indigo-800 text-amber-300 font-black text-xs">선택 ${idx + 1}</span>
          <span class="text-xs sm:text-sm font-bold text-white leading-snug">${low?.choices[idx] || choice.text}</span>
        `;
        btn.addEventListener("click", () => {
          if (!state.safetyFirst[goal.id]) state.safetyFirst[goal.id] = {correct: !!choice.correct, at: Date.now()};
          if (choice.correct) {
            playSound("correct");
            if (!state.completedScenarios[state.scenarioIndex]) {
              state.completedScenarios[state.scenarioIndex] = true;
              awardOnce(`scenario:${goal.id}`, 'first-correct', 15, "안전 상황 판단");
            }
            if (signalBar) signalBar.textContent = "🟢 안전 확보 · 올바른 판단이에요!";
            feedbackBox.className = "rounded-xl p-3 border bg-emerald-950/80 border-emerald-400/60 text-emerald-100 text-xs sm:text-sm space-y-1";
            feedbackBox.innerHTML = `<div class="font-black text-emerald-300">⭕ 적절한 선택이에요. 이유를 한 번 더 확인해요.</div><p>${choice.feedback}</p>`;
          } else {
            playSound("wrong");
            if (signalBar) signalBar.textContent = "🔴 위험 주의 · 다시 안전한 길을 골라 봐요!";
            feedbackBox.className = "rounded-xl p-3 border bg-rose-950/80 border-rose-400/60 text-rose-100 text-xs sm:text-sm space-y-1";
            feedbackBox.innerHTML = `<div class="font-black text-rose-300">❌ 다시 골라 볼까요?</div><p>${choice.feedback}</p>`;
          }
          document.getElementById('importantStatus').textContent = choice.feedback;
          document.getElementById('btnSpeakSafetyFeedback').classList.remove('hidden');
          saveProgress();
          renderSafetyFollowup();
        });
        choicesEl.appendChild(btn);
      });

      document.getElementById("btnPrevScenario").disabled = state.scenarioIndex === 0;
      const nextBtn = document.getElementById("btnNextScenario");
      nextBtn.textContent = state.scenarioIndex === SAFETY_SCENARIOS.length - 1 ? "다음: 옷차림 생각하기 →" : "다음 약속 →";
      renderSafetyFollowup();
      renderSafetyActionDrill();
      renderGlossaryBox("safetyGlossaryBox", ["다중밀집", "우측통행", "대각선 이동", "가슴 앞 공간(흉강)", "병목 현상", "집결 장소"]);
    }

    function renderSafetyFollowup() {
      const goal = SAFETY_GOALS[state.scenarioIndex];
      const box = document.getElementById('safetyFollowup');
      box.replaceChildren();
      const heading = document.createElement('strong');
      heading.textContent = `${state.safetyConfirmed[goal.id] ? '✅ 확인 완료' : '🔎 다시 판단하기'} · ${goal.title}`;
      box.appendChild(heading);
      if (!state.completedScenarios[state.scenarioIndex]) {
        const text = document.createElement('p');
        text.textContent = '위 상황에서 적절한 행동을 고르면 새 질문이 열려요. 해설만 읽어서는 완료되지 않아요.';
        box.appendChild(text);
        return;
      }
      const check = goal.checks[state.grade];
      const question = document.createElement('p');
      question.textContent = check[0];
      box.appendChild(question);
      const feedbackEl = document.createElement('p');
      feedbackEl.className = state.safetyConfirmed[goal.id] ? 'text-xs font-bold text-emerald-300 mt-1' : 'hidden text-xs font-bold mt-1';
      if (state.safetyConfirmed[goal.id]) {
        feedbackEl.textContent = `⭕ ${goal.title} 목표를 새 질문으로 정확히 확인했어요!`;
      }
      check[1].forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        const isConfirmedCorrect = !!state.safetyConfirmed[goal.id] && index === check[2];
        button.className = `w-full text-left rounded-xl border px-3 py-2 ${isConfirmedCorrect ? 'bg-emerald-950/80 border-emerald-400 text-emerald-100 font-bold' : 'bg-indigo-900 border-indigo-600'}`;
        button.textContent = `${index + 1}. ${option}`;
        button.disabled = !!state.safetyConfirmed[goal.id];
        button.addEventListener('click', () => {
          if (index === check[2]) {
            playSound('correct');
            state.safetyConfirmed[goal.id] = {contentVersion: SAFETY_CONTENT_VERSION, at: Date.now()};
            awardOnce(`goal:${goal.id}`, 'confirmed', 20, '안전 목표 다시 확인');
            if (SAFETY_GOALS.every(g => state.safetyConfirmed[g.id]?.contentVersion === SAFETY_CONTENT_VERSION)) unlockStamp('s2', '안전 목표 6개 확인');
            document.getElementById('importantStatus').textContent = `${goal.title} 목표를 새 질문으로 확인했어요.`;
            saveProgress();
            renderSafetyFollowup();
            renderCertificateCanvas();
          } else {
            playSound('wrong');
            feedbackEl.className = 'text-xs font-bold text-rose-300 mt-1';
            feedbackEl.textContent = '❌ 이 선택의 이유를 다시 살피고 안전한 행동을 골라 보세요.';
            document.getElementById('importantStatus').textContent = '이 선택의 이유를 다시 살피고 판단해 보세요.';
          }
        });
        box.appendChild(button);
      });
      box.appendChild(feedbackEl);
      const link = document.createElement('a');
      link.href = CONTENT_SOURCES[goal.source].url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.className = 'underline text-sky-200';
      link.textContent = `교사용 근거: ${CONTENT_SOURCES[goal.source].title}`;
      box.appendChild(link);
    }

    function renderThemeSituations() {
      const theme = THEMES[state.teacher.theme];
      const card = document.getElementById('themeSituationCard');
      card.classList.toggle('hidden', state.teacher.theme === 'halloween');
      if (state.teacher.theme === 'halloween') return;
      document.getElementById('themeSituationTitle').textContent = `${theme.icon} ${theme.label} · 상황 판단 3가지`;
      document.getElementById('themeSituationGuide').textContent = state.grade === '1-2'
        ? '그림과 짧은 문장을 보고 두 행동 중 하나를 골라요.'
        : state.grade === '3-4' ? '행동을 고르고 친구에게 그 이유를 설명해 보세요.'
        : '행사 동선을 떠올리고 더 나은 이동 방법을 근거와 함께 제안해 보세요.';
      const list = document.getElementById('themeSituations');
      list.replaceChildren();
      theme.situations.forEach((row,index) => {
        const [title,context,good,bad,goalId] = row;
        const id = `${state.teacher.theme}:${index}`;
        const saved = state.themeResponses[id];
        const section = document.createElement('section');
        section.className = 'rounded-xl bg-indigo-950 border border-indigo-700 p-3 space-y-2';
        const heading = document.createElement('h3');
        heading.className = 'font-bold text-amber-200';
        heading.textContent = `${index+1}. ${title}`;
        section.appendChild(heading);
        const desc = document.createElement('p');
        desc.textContent = state.grade === '1-2' ? context.replace('여러 학급이 동시에','여러 반이 함께').replace('내 의지와 달리','갑자기') : context;
        section.appendChild(desc);
        const choices = [good,bad];
        choices.forEach((label,choiceIndex) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'w-full text-left rounded-xl bg-indigo-800 p-2 border border-indigo-600';
          button.textContent = `${choiceIndex === 0 ? 'A' : 'B'}. ${label}`;
          button.setAttribute('aria-pressed', String(saved?.choice === choiceIndex));
          button.addEventListener('click', () => {
            const first = state.themeResponses[id]?.first;
            state.themeResponses[id] = {first:first || {choice:choiceIndex, correct:choiceIndex===0, at:Date.now()},
              choice:choiceIndex, correct:choiceIndex===0, apply:state.themeResponses[id]?.apply || ''};
            if (choiceIndex === 0) awardOnce(`theme:${id}`,'first-correct',10,'상황 판단');
            saveProgress();
            renderThemeSituations();
            renderLearningSummary();
          });
          section.appendChild(button);
        });
        if (saved) {
          const feedback = document.createElement('p');
          feedback.className = saved.correct ? 'text-emerald-200' : 'text-rose-200';
          feedback.textContent = saved.correct
            ? `적절한 선택이에요. ${SAFETY_GOALS.find(goal=>goal.id===goalId).title}을 생각했어요. 출처: ${CONTENT_SOURCES.crowd.title}`
            : `다시 살펴봐요. ${SAFETY_GOALS.find(goal=>goal.id===goalId).title} 행동을 먼저 생각해요.`;
          section.appendChild(feedback);
        }
        const applyLabel = document.createElement('label');
        applyLabel.textContent = state.grade === '1-2' ? '내가 할 행동 한마디: ' : state.grade === '3-4' ? '친구에게 이유를 한 문장으로 설명해요: ' : '이 장소의 이동 동선을 어떻게 바꿀지 근거를 적어 보세요: ';
        const apply = document.createElement('input');
        apply.type='text'; apply.maxLength=120;
        apply.className='w-full rounded-xl bg-slate-900 border border-indigo-500 px-3 py-2';
        apply.value = saved?.apply || '';
        apply.addEventListener('change', () => {
          state.themeResponses[id] = {...state.themeResponses[id],apply:apply.value.slice(0,120)};
          saveProgress();
          renderLearningSummary();
        });
        applyLabel.appendChild(apply);
        section.appendChild(applyLabel);
        list.appendChild(section);
      });
    }

    // Canvas coordinates stay at 600×250. CSS scales only the display.
    let gameAnimId = null;
    const STAGE_MISSIONS = {
      1: '1단계 미션: 🟩 비상구 표지판을 확인하며 넓은 출구로 이동해요!',
      2: '2단계 미션: ➡️ 우측통행 화살표를 따라가고 🍬 떨어진 물건은 줍지 말아요!',
      3: '3단계 미션: 👧 길가의 친구와 함께 대각선 넓은 출구로 빠져나와요!'
    };
    const THEME_GAME_MAP = {
      halloween: { place: '🎃 할로윈 축제 거리', trapIcon: '🍬', trapLabel: '떨어진 사탕 주의' },
      school: { place: '🏫 학교 축제 강당 복도', trapIcon: '📄', trapLabel: '떨어진 안내지 주의' },
      field: { place: '🚌 박물관 전시실 통로', trapIcon: '🎁', trapLabel: '떨어진 기념품 주의' },
      trip: { place: '🧳 수학여행 숙소·골목', trapIcon: '🧳', trapLabel: '넘어진 가방 주의' },
      sports: { place: '🏅 체육대회 응원석 출입구', trapIcon: '📣', trapLabel: '떨어진 응원도구 주의' },
      local: { place: '🎪 야외 무대 푸드트럭 거리', trapIcon: '🥤', trapLabel: '떨어진 소지품 주의' }
    };
    function getActiveGameTheme() {
      const key = (typeof state !== 'undefined' && state.teacher?.theme) || 'halloween';
      return THEME_GAME_MAP[key] || THEME_GAME_MAP.halloween;
    }
    function updateGameCrowdMeter() {
      if (typeof document === 'undefined') return;
      const meterText = document.getElementById('gameCrowdMeterText');
      const placeBadge = document.getElementById('gameThemePlaceBadge');
      const themeCfg = getActiveGameTheme();
      if (placeBadge) placeBadge.textContent = themeCfg.place;
      if (!meterText) return;
      if (safetyGame.won) {
        meterText.textContent = '🟢 실시간 혼잡도: 안전 출구 도착 완료!';
        return;
      }
      if (safetyGame.route === 'crowded') {
        meterText.textContent = '🔴 실시간 혼잡도: 위험 (좁은 병목 구간! 넓은 길로 바꾸세요)';
        return;
      }
      const p = safetyGame.player;
      const minDist = safetyGame.hazards.length
        ? Math.min(...safetyGame.hazards.map(h => Math.hypot(p.x - h.x, p.y - h.y) - h.r))
        : 999;
      if (minDist < 48) {
        meterText.textContent = '🔴 실시간 혼잡도: 밀집 경고 (어깨가 닿아요! 가장자리로 이동)';
      } else if (minDist < 95) {
        meterText.textContent = '🟡 실시간 혼잡도: 주의 (보행 속도와 앞뒤 간격 살피기)';
      } else {
        meterText.textContent = '🟢 실시간 혼잡도: 여유 (안전 거리 유지 중)';
      }
    }
    const safetyGame = {
      running:false, won:false, paused:false, route:null, lastFrame:0,
      player:{x:42,y:210,r:13,targetX:null,targetY:null},
      hazards:[], items:[], bonusCollected:false, exitZone:{x:520,y:22,w:65,h:48}, keys:new Set(), decisionRecorded:false
    };
    function stopSafetyGameLoop() {
      if (gameAnimId !== null) cancelAnimationFrame(gameAnimId);
      gameAnimId = null;
      safetyGame.lastFrame = 0;
    }
    function pauseSafetyGame() {
      if (!safetyGame.running || safetyGame.won) return;
      safetyGame.paused = true;
      stopSafetyGameLoop();
      updateGameStatusText('일시정지 · 계속하기를 누르세요');
      document.getElementById('btnStartCanvasGame').textContent = '▶ 이어하기';
    }
    function resumeSafetyGame() {
      if (!safetyGame.running || !safetyGame.paused) return;
      safetyGame.paused = false;
      document.getElementById('btnStartCanvasGame').textContent = '⏸ 일시정지';
      updateGameStatusText(STAGE_MISSIONS[state.gameStage] || '이동 중');
      gameLoop();
    }
    function initSafetyGame() {
      stopSafetyGameLoop();
      safetyGame.running = true;
      safetyGame.won = false;
      safetyGame.paused = false;
      safetyGame.route = null;
      safetyGame.decisionRecorded = false;
      safetyGame.bonusCollected = false;
      safetyGame.player = {x:42,y:210,r:13,targetX:null,targetY:null};
      const isEasyGrade = typeof state !== 'undefined' && state.grade === '1-2';
      safetyGame.easyMode = isEasyGrade;
      safetyGame.exitZone = isEasyGrade ? {x:500,y:18,w:85,h:56} : {x:520,y:22,w:65,h:48};
      const baseSpeed = isEasyGrade ? 18 : 28;
      const speed = baseSpeed + (state.gameStage-1)*(isEasyGrade ? 5 : 8); // logical pixels per second
      safetyGame.hazards = [
        {x:220,y:113,r:isEasyGrade?21:28,dx:speed,dy:0},
        {x:355,y:165,r:isEasyGrade?20:26,dx:-speed*0.7,dy:0}
      ];
      if (state.gameStage === 3 && !isEasyGrade) {
        safetyGame.hazards.push({x:290,y:140,r:22,dx:speed*0.5,dy:0});
      }
      const themeCfg = getActiveGameTheme();
      if (state.gameStage === 1) {
        safetyGame.items = [{x:240,y:76,r:16,kind:'sign',icon:'🟩',label:'비상구 확인',done:false}];
      } else if (state.gameStage === 2) {
        safetyGame.items = [
          {x:280,y:72,r:16,kind:'lane',icon:'➡️',label:'우측통행 유지',done:false},
          {x:270,y:165,r:18,kind:'candyTrap',icon:themeCfg.trapIcon,label:themeCfg.trapLabel,done:false}
        ];
      } else {
        safetyGame.items = [{x:175,y:86,r:16,kind:'friend',icon:'👧',label:'친구와 동행',done:false}];
      }
      safetyGame.keys.clear();
      document.getElementById('btnStartCanvasGame').textContent = '⏸ 일시정지';
      syncStageButtons();
      updateGameStatusText('먼저 경로를 고르세요');
      updateGameCrowdMeter();
      renderGameChoices();
      gameLoop();
    }
    function resizeSafetyCanvas() {
      const canvas = document.getElementById('safetyGameCanvas');
      if (!canvas) return;
      canvas.style.aspectRatio = '600 / 250';
      canvas.style.height = 'auto';
      drawSafetyGame();
    }
    function updateGameStatusText(msg) {
      const el = document.getElementById('gameStatusBadge');
      if (el) el.textContent = msg;
    }
    function movePlayer(dir) {
      if (!safetyGame.running || safetyGame.paused || safetyGame.won || safetyGame.route !== 'wide') return;
      const p = safetyGame.player;
      const step = (typeof state !== 'undefined' && state.grade === '1-2') ? 24 : 18;
      p.targetX = null; p.targetY = null;
      if (dir==='up') p.y-=step;
      if (dir==='down') p.y+=step;
      if (dir==='left') p.x-=step;
      if (dir==='right') p.x+=step;
      p.x=Math.max(15,Math.min(585,p.x));
      p.y=Math.max(15,Math.min(235,p.y));
      checkGamePosition();
      drawSafetyGame();
    }
    function activateChestGuardBoost() {
      showToast('떠밀리는 상황에서는 군중을 밀어내지 말고 두 손이나 가방으로 가슴 앞 숨 쉴 공간을 보호해요. 이 자세가 안전을 보장하지는 않아요.', '👐');
    }
    function chooseGameRoute(choice) {
      safetyGame.route=choice;
      safetyGame.decisionRecorded=true;
      if (choice==='wide') updateGameStatusText('혼잡한 길을 피해 출구로 이동해요');
      else updateGameStatusText('혼잡한 길을 골랐어요. 경로를 다시 살펴보세요');
      updateGameCrowdMeter();
      renderGameChoices();
      drawSafetyGame();
    }
    function renderGameChoices() {
      const routeBox=document.getElementById('gameRouteChoices');
      routeBox.replaceChildren();
      const prompt=document.createElement('p');
      prompt.textContent='어느 길로 이동할까요?';
      routeBox.appendChild(prompt);
      [['wide','🟢 사람이 덜 몰린 넓은 길'],['crowded','🔴 사람이 몰리는 좁은 길']].forEach(([value,label])=>{
        const btn=document.createElement('button');
        btn.type='button';btn.className='w-full rounded-xl border border-indigo-500 bg-indigo-900 p-2 text-left';
        btn.textContent=label;
        btn.setAttribute('aria-pressed',String(safetyGame.route===value));
        btn.addEventListener('click',()=>chooseGameRoute(value));
        routeBox.appendChild(btn);
      });
      const reason=document.getElementById('gameReasonChoices');
      reason.replaceChildren();
      if (!safetyGame.won) return;
      const title=document.createElement('p');
      title.textContent='왜 이 경로가 더 적절할까요?';
      reason.appendChild(title);
      [['safe','혼잡을 피하고 이동 가능한 출구를 확인했기 때문'],['unsafe','방패를 모으면 밀집 구역도 안전해지기 때문']].forEach(([value,label])=>{
        const btn=document.createElement('button');
        btn.type='button';btn.className='w-full rounded-xl border border-indigo-500 bg-indigo-900 p-2 text-left';
        btn.textContent=label;
        btn.addEventListener('click',()=>{
          if(value==='safe') {
            awardOnce(`game:${state.gameStage}`,'reason',10,'경로 선택 이유 확인');
            document.getElementById('importantStatus').textContent='혼잡한 곳을 피해 이동로를 확인하는 이유를 설명했어요.';
          } else document.getElementById('importantStatus').textContent='방패나 자세가 밀집 사고를 막아 주지는 않아요. 다시 생각해 보세요.';
          saveProgress();
        });
        reason.appendChild(btn);
      });
    }
    function updateSafetyGame(seconds) {
      if (!safetyGame.running || safetyGame.paused || safetyGame.won) return;
      const p=safetyGame.player;
      const speed=110;
      let dx=0,dy=0;
      if(safetyGame.keys.has('ArrowLeft')) dx--;
      if(safetyGame.keys.has('ArrowRight')) dx++;
      if(safetyGame.keys.has('ArrowUp')) dy--;
      if(safetyGame.keys.has('ArrowDown')) dy++;
      if(safetyGame.route==='wide' && (dx || dy)) {
        const length=Math.hypot(dx,dy);
        p.x+=dx/length*speed*seconds;
        p.y+=dy/length*speed*seconds;
      } else if(safetyGame.route==='wide' && p.targetX!==null) {
        const tx=p.targetX-p.x,ty=p.targetY-p.y,dist=Math.hypot(tx,ty);
        const move=Math.min(dist,speed*seconds);
        if(dist>0){p.x+=tx/dist*move;p.y+=ty/dist*move;}
        if(dist<2){p.targetX=null;p.targetY=null;}
      }
      p.x=Math.max(15,Math.min(585,p.x));
      p.y=Math.max(15,Math.min(235,p.y));
      safetyGame.hazards.forEach(h=>{
        h.x+=h.dx*seconds;h.y+=h.dy*seconds;
        if(h.x<190 || h.x>400) h.dx*=-1;
      });
      checkGamePosition();
    }
    function checkGamePosition() {
      const p=safetyGame.player;
      if(safetyGame.hazards.some(h=>Math.hypot(p.x-h.x,p.y-h.y)<p.r+h.r-3)) {
        p.x=42;p.y=210;p.targetX=null;p.targetY=null;
        updateGameStatusText('혼잡한 구역을 피해서 다시 이동해요');
      }
      if(Array.isArray(safetyGame.items)) {
        safetyGame.items.forEach(item=>{
          if(Math.hypot(p.x-item.x,p.y-item.y)<p.r+item.r) {
            if(item.kind==='candyTrap') {
              p.x=42;p.y=210;p.targetX=null;p.targetY=null;
              updateGameStatusText('떨어진 물건은 줍지 않고 넓은 길로 이동해요!');
            } else if(!item.done) {
              item.done=true;
              safetyGame.bonusCollected=true;
              updateGameStatusText(`✅ ${item.label} 성공! 이제 출구로 이동해요`);
            }
          }
        });
      }
      const e=safetyGame.exitZone;
      if(safetyGame.route==='wide' && p.x>e.x && p.x<e.x+e.w && p.y>e.y && p.y<e.y+e.h) {
        safetyGame.won=true;safetyGame.running=false;
        updateGameStatusText(safetyGame.bonusCollected ? '🌟 미션 달성! 안전하게 출구에 도착했어요' : '이동 가능한 출구에 도착했어요 · 이유도 확인해요');
        if (typeof document !== 'undefined') {
          const startBtn = document.getElementById('btnStartCanvasGame');
          if (startBtn) startBtn.textContent=(typeof state !== 'undefined' && state.gameStage<3)?'▶ 다음 단계':'▶ 다시 시작';
        }
        renderGameChoices();
        stopSafetyGameLoop();
      }
      updateGameCrowdMeter();
    }
    function drawSafetyGame() {
      updateGameCrowdMeter();
      const canvas=document.getElementById('safetyGameCanvas');
      if(!canvas)return;
      const ctx=canvas.getContext('2d');
      const {x,y}=safetyGame.player;
      const stageNum=(typeof state!=='undefined' && state.gameStage) ? state.gameStage : 1;
      ctx.fillStyle='#0f172a';ctx.fillRect(0,0,600,250);
      ctx.strokeStyle='#064e3b';ctx.lineWidth=38;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(42,210);ctx.lineTo(120,100);ctx.lineTo(460,58);ctx.lineTo(545,46);ctx.stroke();
      ctx.strokeStyle='#10b98155';ctx.lineWidth=2;ctx.setLineDash([6,6]);
      ctx.beginPath();ctx.moveTo(42,210);ctx.lineTo(120,100);ctx.lineTo(460,58);ctx.lineTo(545,46);ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeStyle='#7f1d1d';ctx.lineWidth=32;
      ctx.beginPath();ctx.moveTo(42,210);ctx.lineTo(230,165);ctx.lineTo(400,170);ctx.stroke();
      ctx.fillStyle='#a7f3d0';ctx.font='bold 12px "Gowun Dodum", sans-serif';
      ctx.fillText(STAGE_MISSIONS[stageNum] || '🟢 덜 붐비는 넓은 길',18,22);
      ctx.fillStyle='#fde68a';ctx.font='bold 11px "Gowun Dodum", sans-serif';
      ctx.fillText(getActiveGameTheme().place,435,20);
      ctx.fillStyle='#fecaca';ctx.font='bold 12px "Gowun Dodum", sans-serif';ctx.fillText('🔴 혼잡한 좁은 길',220,208);
      if(typeof state!=='undefined' && state.grade==='1-2'){
        if(!safetyGame.running) safetyGame.exitZone={x:500,y:18,w:85,h:56};
        ctx.fillStyle='#fde68a';ctx.font='bold 11px "Gowun Dodum", sans-serif';
        ctx.fillText('🌱 1~2학년 이지 모드: 넓은 출구·천천히 이동해요',18,240);
      } else if(typeof state!=='undefined' && !safetyGame.running){
        safetyGame.exitZone={x:520,y:22,w:65,h:48};
      }
      const e=safetyGame.exitZone;
      ctx.fillStyle='#047857';ctx.fillRect(e.x,e.y,e.w,e.h);
      ctx.strokeStyle='#6ee7b7';ctx.lineWidth=2;ctx.strokeRect(e.x,e.y,e.w,e.h);
      ctx.fillStyle='white';ctx.font='bold 13px "Gowun Dodum", sans-serif';ctx.fillText('🟩 출구',e.x+10,e.y+29);
      if(Array.isArray(safetyGame.items)){
        safetyGame.items.forEach(item=>{
          if(item.done)return;
          ctx.beginPath();ctx.arc(item.x,item.y,item.r,0,Math.PI*2);
          ctx.fillStyle=item.kind==='candyTrap'?'#f59e0b44':'#38bdf844';ctx.fill();
          ctx.strokeStyle=item.kind==='candyTrap'?'#fbbf24':'#7dd3fc';ctx.lineWidth=2;ctx.stroke();
          ctx.fillStyle='#fff';ctx.font='15px "Gowun Dodum", sans-serif';ctx.fillText(item.icon,item.x-8,item.y+5);
          ctx.fillStyle='#e0f2fe';ctx.font='bold 11px "Gowun Dodum", sans-serif';ctx.fillText(item.label,item.x-28,item.y-20);
        });
      }
      safetyGame.hazards.forEach(h=>{ctx.beginPath();ctx.arc(h.x,h.y,h.r,0,Math.PI*2);ctx.fillStyle='#be123c88';ctx.fill();ctx.strokeStyle='#fb7185';ctx.stroke();ctx.fillStyle='#ffe4e6';ctx.font='11px "Gowun Dodum", sans-serif';ctx.fillText('밀집',h.x-11,h.y+4);});
      ctx.beginPath();ctx.arc(x,y,13,0,Math.PI*2);ctx.fillStyle='#f97316';ctx.fill();
      ctx.fillStyle='white';ctx.font='16px "Gowun Dodum", sans-serif';ctx.fillText((typeof state!=='undefined' && state.avatar?.char) || '🧒',x-9,y+5);
      if(safetyGame.bonusCollected && !safetyGame.won){
        ctx.fillStyle='#fde68a';ctx.font='12px "Gowun Dodum", sans-serif';ctx.fillText('✨',x+10,y-8);
      }
      if(safetyGame.won){ctx.fillStyle='#0f172adc';ctx.fillRect(0,0,600,250);ctx.fillStyle='#fde68a';ctx.font='bold 20px "Gowun Dodum", sans-serif';ctx.fillText(safetyGame.bonusCollected?'🌟 미션 성공! 안전한 출구를 찾았어요!':'이동 가능한 출구를 찾았어요!',118,120);}
    }
    function gameLoop(now=performance.now()) {
      if(gameAnimId!==null || safetyGame.paused || !safetyGame.running || state.activeTab!=='tab-safety' || document.hidden) return;
      const tick=time=>{
        gameAnimId=null;
        if(safetyGame.paused || !safetyGame.running || state.activeTab!=='tab-safety' || document.hidden) return;
        const seconds=safetyGame.lastFrame ? Math.min(0.05,(time-safetyGame.lastFrame)/1000) : 0;
        safetyGame.lastFrame=time;
        updateSafetyGame(seconds);
        drawSafetyGame();
        if(safetyGame.running) gameAnimId=requestAnimationFrame(tick);
      };
      safetyGame.lastFrame=now;
      gameAnimId=requestAnimationFrame(tick);
    }


    // ==================== TAB 3: AVATAR DRESS-UP & COSTUME SORTING ====================
    const AVATAR_MISSIONS = [
      { id: 'night', title: '🌙 저녁 축제에서도 눈에 잘 띄고 두 손이 자유로운 코디', tip: '밝은 의상이나 야광 소품을 고르고 밤길 반사 테스트를 켜 보세요!' },
      { id: 'stairs', title: '🪜 계단과 복도를 걸을 때 발에 걸리지 않는 활동 코디', tip: '끌리지 않는 단정한 옷과 앞이 잘 보이는 모자·머리띠를 골라 보세요!' },
      { id: 'respect', title: '🤝 친구를 놀라게 하지 않고 경찰·소방관과 헷갈리지 않는 코디', tip: '실제 제복이나 날카로운 장난감 대신 친근한 축제 소품을 골라 보세요!' }
    ];
    let avatarMissionIndex = 0;

    function renderAvatarDressup() {
      document.getElementById("avatarCharIcon").textContent = state.avatar.char;
      document.getElementById("avatarCostumeIcon").textContent = state.avatar.costume;
      document.getElementById("avatarPropIcon").textContent = state.avatar.prop;

      syncButtonGroup(".avatar-char-btn", "data-char", state.avatar.char);
      syncButtonGroup(".avatar-costume-btn", "data-costume", state.avatar.costume);
      syncButtonGroup(".avatar-prop-btn", "data-prop", state.avatar.prop);
      syncButtonGroup(".cert-sticker-btn", "data-sticker", state.certSticker);

      const missionBox = document.getElementById("avatarMissionBox");
      if (missionBox) {
        const mission = AVATAR_MISSIONS[avatarMissionIndex % AVATAR_MISSIONS.length];
        missionBox.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-1.5">
            <span id="avatarMissionTitle" class="font-extrabold text-amber-200">🎯 오늘의 코디 미션 (${(avatarMissionIndex % AVATAR_MISSIONS.length) + 1}/${AVATAR_MISSIONS.length}): ${mission.title}</span>
            <button id="btnNextAvatarMission" type="button" class="mini-chip text-[11px]">🔄 다음 미션</button>
          </div>
          <p class="text-[11px] text-indigo-200">${mission.tip}</p>
        `;
        const nextMissionBtn = document.getElementById("btnNextAvatarMission");
        if (nextMissionBtn) {
          nextMissionBtn.addEventListener("click", () => {
            avatarMissionIndex = (avatarMissionIndex + 1) % AVATAR_MISSIONS.length;
            playSound("click");
            renderAvatarDressup();
          });
        }
      }

      const checklistBox = document.getElementById("avatarSafetyChecklist");
      if (checklistBox) {
        const isNightTested = document.getElementById("avatarRunwayStage")?.classList.contains("night-stage-active");
        const checks = [
          { label: "👀 시야 확보 (눈 가리지 않음)", ok: true },
          { label: "👟 보행 편리 (끌리지 않는 길이)", ok: true },
          { label: "✨ 야간 식별 (밝은 소품·야광 확인)", ok: Boolean(isNightTested || ["🎃", "🕯️", "⭐"].includes(state.avatar.prop) || ["🧙", "🧚"].includes(state.avatar.costume)) },
          { label: "🚫 유사 제복·위험 소품 제외", ok: true }
        ];
        checklistBox.innerHTML = checks.map(c => `
          <div class="rounded-lg px-2 py-1.5 border ${c.ok ? "bg-emerald-950/70 border-emerald-500/60 text-emerald-200" : "bg-amber-950/60 border-amber-400/60 text-amber-200"} font-bold flex items-center gap-1">
            <span>${c.ok ? "✅" : "💡"}</span><span>${c.label}</span>
          </div>
        `).join("");
      }
    }

    let costumePage = 0;
    let costumeFocusMode = false;
    function renderCostumeCards() {
      const grid = document.getElementById("costumeCardsGrid");
      grid.innerHTML = "";
      const perPage = costumeFocusMode ? 1 : 4;
      const totalPages = Math.ceil(COSTUME_ITEMS.length / perPage);
      costumePage = Math.max(0, Math.min(costumePage, totalPages - 1));
      grid.className = costumeFocusMode
        ? "grid grid-cols-1 max-w-md mx-auto gap-2.5"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5";
      const focusBtn = document.getElementById("btnCostumeFocusMode");
      if (focusBtn) {
        focusBtn.setAttribute("aria-pressed", String(costumeFocusMode));
        focusBtn.textContent = costumeFocusMode ? "📋 4장씩 보기" : "🔍 1장씩 보기";
      }
      const togetherBanner = document.getElementById("costumeTogetherBanner");
      if (togetherBanner) {
        togetherBanner.classList.toggle("hidden", state.teacher?.mode !== "together");
      }
      let correctCount = 0;

      COSTUME_ITEMS.forEach((item, itemIndex) => {
        const chosen = state.costumeChoices[item.id];
        const hasAnswered = chosen !== undefined;
        const isCorrect = hasAnswered && chosen === item.safe;
        if (isCorrect) correctCount++;

        if (Math.floor(itemIndex / perPage) !== costumePage) return;
        const card = document.createElement("div");
        card.className = `glass-panel rounded-2xl p-3 flex flex-col justify-between border transition ${
          !hasAnswered
            ? "border-indigo-700/80"
            : isCorrect
            ? "border-emerald-400 bg-emerald-950/40"
            : "border-rose-400 bg-rose-950/40"
        }`;

        card.innerHTML = `
          <div class="text-center space-y-1">
            <div class="text-3xl sm:text-4xl select-none py-0.5">${item.emoji}</div>
            <h4 class="font-title text-xs sm:text-sm text-white nowrap">${item.name}</h4>
            ${item.checkPoint ? `<span class="inline-block px-2 py-0.5 rounded-full bg-indigo-950/90 border border-indigo-700 text-[11px] font-bold text-amber-300">${item.checkPoint}</span>` : ""}
          </div>

          <div class="mt-2.5 space-y-1.5">
            <div class="grid grid-cols-2 gap-1">
              <button type="button" data-id="${item.id}" data-choice="safe" class="costume-choice-btn nowrap px-1.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-black border transition min-h-[34px] ${
                hasAnswered && chosen === true
                  ? "bg-emerald-500 text-indigo-950 border-emerald-300"
                  : "bg-indigo-900/90 hover:bg-emerald-600/40 text-emerald-200 border-emerald-500/40"
              }">
                ⭕ 안전
              </button>
              <button type="button" data-id="${item.id}" data-choice="unsafe" class="costume-choice-btn nowrap px-1.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-black border transition min-h-[34px] ${
                hasAnswered && chosen === false
                  ? "bg-rose-500 text-white border-rose-300"
                  : "bg-indigo-900/90 hover:bg-rose-600/40 text-rose-200 border-rose-500/40"
              }">
                ❌ 피하기
              </button>
            </div>
            ${
              hasAnswered
                ? `<div class="rounded-lg p-2 text-[11px] leading-snug space-y-1 ${
                    isCorrect ? "bg-emerald-950/90 text-emerald-200" : "bg-rose-950/90 text-rose-200"
                  }">
                    <div class="font-black mb-0.5 nowrap">${isCorrect ? "딩동댕! 👏" : "다시 확인!"}</div>
                    <div>${item.reason}</div>
                    ${item.reform ? `<div class="costume-reform-tip pt-1.5 mt-1 border-t border-amber-400/40 font-extrabold text-amber-200">${item.reform}</div>` : ""}
                  </div><button type="button" class="speak-costume-feedback w-full rounded-lg bg-indigo-800 p-2 text-xs" data-id="${item.id}">🔈 이유와 대체 코디 읽기</button>`
                : ""
            }
          </div>
        `;
        grid.appendChild(card);
      });

      grid.querySelectorAll(".costume-choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          const choice = btn.getAttribute("data-choice") === "safe";
          const targetItem = COSTUME_ITEMS.find(c => c.id === id);
          const wasCorrectBefore = state.costumeChoices[id] === (targetItem && targetItem.safe);
          state.costumeChoices[id] = choice;
          if (targetItem && targetItem.safe === choice) {
            playSound("correct");
            if (!wasCorrectBefore) awardOnce(`costume:${id}`, 'first-correct', 10, "옷장 안전 분류");
          } else {
            playSound("wrong");
          }
          saveProgress();
          renderCostumeCards();
        });
      });
      grid.querySelectorAll('.speak-costume-feedback').forEach(button=>{
        button.addEventListener('click',()=>{
          const item=COSTUME_ITEMS.find(row=>row.id===button.dataset.id);
          if(item)speakText(`${item.name}. ${item.reason} ${item.reform || ''}`);
        });
      });

      document.getElementById("costumeScoreBadge").textContent = `${correctCount} / ${COSTUME_ITEMS.length}${pairTurnSuffix(costumePage)}`;
      document.getElementById('costumePageLabel').textContent = `${costumePage + 1} / ${totalPages}`;
      document.getElementById('btnPrevCostumePage').disabled = costumePage === 0;
      document.getElementById('btnNextCostumePage').disabled = costumePage === totalPages - 1;
      if (correctCount === COSTUME_ITEMS.length) {
        unlockStamp("s3", "놀이 3: 옷 고르기 놀이");
      }
    }

    function renderEtiquetteChecklist() {
      const box = document.getElementById("etiquetteChecklist");
      if (!box) return;
      box.innerHTML = "";
      let checkedCount = 0;

      ETIQUETTE_RULES.forEach(rule => {
        const isChecked = !!state.etiquetteChecked[rule.id];
        if (isChecked) checkedCount++;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute('aria-pressed', String(isChecked));
        btn.className = `text-left p-3 rounded-xl border transition flex items-start gap-2.5 ${
          isChecked
            ? "bg-emerald-950/60 border-emerald-400 text-emerald-100"
            : "bg-indigo-950/80 border-indigo-800 hover:border-amber-400 text-indigo-100"
        }`;
        btn.innerHTML = `
          <span class="text-lg shrink-0">${isChecked ? "✅" : "⬜"}</span>
          <div class="min-w-0">
            <div class="font-title text-xs sm:text-sm text-white nowrap">${rule.icon} ${rule.title}</div>
            <p class="text-[11px] sm:text-xs text-indigo-200 mt-0.5 leading-snug">${rule.desc}</p>
          </div>
        `;
        btn.addEventListener("click", () => {
          const nextState = !state.etiquetteChecked[rule.id];
          state.etiquetteChecked[rule.id] = nextState;
          if (nextState) awardOnce(`etiquette:${rule.id}`, 'checked', 10, "배려 약속 체크");
          playSound(nextState ? "correct" : "click");
          saveProgress();
          renderEtiquetteChecklist();
        });
        box.appendChild(btn);
      });

      document.getElementById("etiquetteCheckBadge").textContent = `약속 체크 ${checkedCount} / ${ETIQUETTE_RULES.length}`;
    }

    function quizQuestionId(index) { return `${state.grade}:q${index+1}`; }
    function quizOrder(index) {
      const id=quizQuestionId(index);
      const q=EDUCATION_DATA[state.grade].quizzes[index];
      if (!Array.isArray(state.quizOrders[id]) || state.quizOrders[id].length!==q.options.length) {
        const order=q.options.map((_,i)=>i);
        if(order.length>2) for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
        state.quizOrders[id]=order;
        saveProgress();
      }
      return state.quizOrders[id];
    }
    function currentQuizIndex() {
      return state.quizReview ? state.quizReviewItems[state.quizIndex] : state.quizIndex;
    }
    function firstQuizScore() {
      return EDUCATION_DATA[state.grade].quizzes.reduce((total,_,i)=>total+(state.quizFirst[quizQuestionId(i)]?.correct?1:0),0);
    }
    function firstUnassistedScore() {
      return EDUCATION_DATA[state.grade].quizzes.reduce((total,_,i)=>{
        const answer=state.quizFirst[quizQuestionId(i)];
        return total+(answer?.correct && !answer.hintUsed && !answer.fiftyUsed ? 1:0);
      },0);
    }
    function reviewedQuizScore() {
      return EDUCATION_DATA[state.grade].quizzes.reduce((total,_,i)=>{
        const attempts=state.quizAttempts[quizQuestionId(i)] || [];
        return total+(attempts.length>1 && attempts.at(-1).correct ? 1:0);
      },0);
    }
    function startQuizReview(onlyWrong) {
      const quizzes=EDUCATION_DATA[state.grade].quizzes;
      state.quizReviewItems=quizzes.map((_,i)=>i).filter(i=>!onlyWrong || !state.quizFirst[quizQuestionId(i)]?.correct);
      state.quizReview=true;
      state.quizAttemptRound=(state.quizAttemptRound||0)+1;
      state.quizIndex=0;
      state.quizFiftyUsed=false;
      state.quizHints={};state.quizFifties={};
      saveProgress();
      renderQuiz();
    }
    const QUIZ_TYPE_TAGS = [
      '🏛️ 문화 탐정',
      '🤝 안전한 약속',
      '🗺️ 동선 살피기',
      '🔍 위험 신호 찾기',
      '🛡️ 내 몸 지키기',
      '🏃 위기 대처',
      '🧙 배려하는 복장',
      '🌏 다문화 존중'
    ];
    const QUIZ_GOAL_BRIDGE = [
      { label: '문화의 기원과 다양성', tab: 'tab-culture', scenarioIdx: null },
      { label: '보호자 동행·사전 약속', tab: 'tab-culture', scenarioIdx: null },
      { label: '이동로와 출구 확인', tab: 'tab-safety', scenarioIdx: 0 },
      { label: '혼잡 신호에 대응', tab: 'tab-safety', scenarioIdx: 2 },
      { label: '물건보다 몸 먼저', tab: 'tab-safety', scenarioIdx: 4 },
      { label: '떠밀림·넘어짐 몸 보호', tab: 'tab-safety', scenarioIdx: 3 },
      { label: '다문화 고유 의미 존중', tab: 'tab-culture', scenarioIdx: null },
      { label: '배려하는 복장과 축제 약속', tab: 'tab-costume', scenarioIdx: null }
    ];
    function renderQuizWeaknessBridge() {
      const box = document.getElementById('quizWeaknessBridge');
      if (!box) return;
      box.replaceChildren();
      const quizzes = EDUCATION_DATA[state.grade].quizzes;
      const missedIndices = quizzes
        .map((_, idx) => idx)
        .filter(idx => !state.quizFirst[quizQuestionId(idx)]?.correct);
      const header = document.createElement('div');
      header.className = 'font-extrabold text-amber-300';
      header.textContent = missedIndices.length
        ? `🔍 오답 원인 진단 · 다시 살펴볼 핵심 원칙 (${missedIndices.length}개)`
        : '🌟 모든 핵심 안전·문화 원칙을 첫 시도에 정확히 판단했어요!';
      box.appendChild(header);
      const wrap = document.createElement('div');
      wrap.className = 'flex flex-wrap gap-1.5 pt-1';
      const targetList = missedIndices.length ? missedIndices : [2, 3, 4];
      targetList.forEach(qi => {
        const info = QUIZ_GOAL_BRIDGE[qi % QUIZ_GOAL_BRIDGE.length];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'mini-chip quiz-bridge-btn';
        btn.dataset.qi = String(qi);
        btn.textContent = `🎯 Q${qi + 1} · ${info.label} 복습 이동 →`;
        btn.addEventListener('click', () => {
          playSound('click');
          if (info.scenarioIdx !== null) {
            state.scenarioIndex = info.scenarioIdx;
            renderScenario();
          }
          switchTab(info.tab);
        });
        wrap.appendChild(btn);
      });
      box.appendChild(wrap);
    }
    function quizCheerMessage(combo) {
      if (combo >= 6) return `👑 ${combo}연속 정답! 우리 반 최고 안전 박사님이에요!`;
      if (combo >= 3) return `✨ ${combo}연속 정답! 안전 감각이 반짝반짝 빛나요!`;
      if (combo >= 1) return `🌱 ${combo}연속 정답! 좋은 출발이에요, 계속 이어 가요!`;
      if (typeof state !== 'undefined' && state.teacher?.mode === 'together') {
        return '🙆‍♂️ 다 함께 손가락으로 정답 번호를 표시한 뒤 확인해 봐요!';
      }
      return '🎃 차근차근 이유를 생각하며 알맞은 답을 골라 봐요!';
    }
    function renderQuiz() {
      const quizzes=EDUCATION_DATA[state.grade].quizzes;
      const limit=state.quizReview ? state.quizReviewItems.length : quizzes.length;
      document.getElementById('quizGradeLabel').textContent=`생각 확인 · ${EDUCATION_DATA[state.grade].label} · ${quizzes.length}가지 질문`;
      const active=document.getElementById('quizActiveContainer');
      const result=document.getElementById('quizResultContainer');
      if(state.quizIndex>=limit){
        active.classList.add('hidden');result.classList.remove('hidden');
        const first=firstQuizScore();
        const reviewed=reviewedQuizScore();
        const rank = first === quizzes.length ? '👑 안전 박사' : first >= 6 ? '🛡️ 안전 수호자' : first >= 3 ? '🕯️ 등불 탐험가' : '🌱 새싹 탐험가';
        document.getElementById('quizFinalScoreTitle').textContent=`처음 이해한 질문 ${first}/${quizzes.length} · ${rank}`;
        document.getElementById('quizFinalScoreDesc').textContent=first===quizzes.length
          ? '처음 확인한 문항을 모두 맞혔어요. 안전 목표 확인은 길안전의 새 질문에서 따로 진행해요.'
          : `처음 틀리거나 확인하지 못한 문항 ${quizzes.length-first}개가 있어요(복습 확인 ${reviewed}개). 다시 판단해 보세요. 해설을 읽는 것만으로 이해 완료로 기록하지 않습니다.`;
        document.getElementById('btnReviewQuiz').disabled=first===quizzes.length;
        if(!state.quizReview && Object.keys(state.quizFirst).length>=quizzes.length) unlockStamp('s4','퀴즈 참여');
        renderQuizWeaknessBridge();
        renderLearningSummary();
        return;
      }
      active.classList.remove('hidden');result.classList.add('hidden');
      const qi=currentQuizIndex();
      const q=quizzes[qi];
      const id=quizQuestionId(qi);
      const order=quizOrder(qi);
      const round=state.quizReview ? state.quizAttemptRound : 0;
      const existing=(state.quizAttempts[id]||[]).find(a=>a.round===round);
      document.getElementById('quizComboBadge').textContent=`🔥 ${state.quizCombo}연속`;
      document.getElementById('quizProgressBadge').textContent=`질문 ${state.quizIndex+1} / ${limit}${typeof pairTurnSuffix === 'function' ? pairTurnSuffix(state.quizIndex) : ''}`;
      document.getElementById('quizQuestionNumber').textContent=`Q${qi+1}${state.quizReview?' 복습':''}`;
      document.getElementById('quizCategoryBadge').textContent=q.category;
      const typeTagEl=document.getElementById('quizTypeTag');
      if(typeTagEl)typeTagEl.textContent=QUIZ_TYPE_TAGS[qi % QUIZ_TYPE_TAGS.length];
      const cheerEl=document.getElementById('quizCheerText');
      if(cheerEl)cheerEl.textContent=quizCheerMessage(state.quizCombo);
      document.getElementById('quizQuestionText').textContent=q.q;
      const hint=document.getElementById('quizHintBox');
      hint.textContent=q.hint || '먼저 안전과 배려를 생각해 보세요.';
      hint.classList.toggle('hidden',!state.quizHints[id]);
      const fifty=document.getElementById('btnQuizFifty');
      fifty.disabled=state.quizFiftyUsed || order.length<=2 || !!existing;
      fifty.style.opacity=fifty.disabled?'0.45':'1';
      document.getElementById('btnQuizHint').disabled=!!existing;
      const options=document.getElementById('quizOptionsContainer');
      options.replaceChildren();
      const explanation=document.getElementById('quizExplanationBox');
      explanation.replaceChildren();
      explanation.className='hidden rounded-xl p-3 border text-xs sm:text-sm space-y-1';
      document.getElementById('btnSpeakQuizFeedback').classList.toggle('hidden',!existing);
      const next=document.getElementById('btnNextQuizQuestion');
      next.classList.toggle('hidden',!existing);
      next.textContent=state.quizIndex===limit-1?'결과 확인':'다음 문제 →';
      order.forEach((originalIndex,displayIndex)=>{
        const btn=document.createElement('button');
        btn.type='button';btn.className='quiz-opt-btn text-left p-3 rounded-xl bg-indigo-950 border border-indigo-700 font-bold text-sm min-h-[48px]';
        btn.dataset.optIdx=String(displayIndex);
        btn.textContent=`${displayIndex+1}. ${q.options[originalIndex]}`;
        if(state.quizFifties[id] && originalIndex!==q.answer && order.filter(x=>x!==q.answer).indexOf(originalIndex)<2){btn.disabled=true;btn.style.opacity='0.3';}
        if(existing){btn.disabled=true;if(originalIndex===existing.selectedOriginalIndex)btn.classList.add(existing.correct?'border-emerald-400':'border-rose-400');}
        btn.addEventListener('click',()=>{
          if(existing)return;
          const answer={round,selectedOriginalIndex:originalIndex,correct:originalIndex===q.answer,
            hintUsed:!!state.quizHints[id],fiftyUsed:!!state.quizFifties[id],at:Date.now()};
          if(!state.quizFirst[id])state.quizFirst[id]=answer;
          (state.quizAttempts[id] ||= []).push(answer);
          if(answer.correct){state.quizCombo++;awardOnce(`quiz:${id}`,'first-correct',20,'퀴즈 정답');}
          else state.quizCombo=0;
          document.getElementById('importantStatus').textContent=answer.correct?'정답입니다.':'오답입니다. 해설을 확인하고 다시 판단하세요.';
          saveProgress();renderQuiz();
        });
        options.appendChild(btn);
      });
      if(existing){
        const bridge = QUIZ_GOAL_BRIDGE[qi % QUIZ_GOAL_BRIDGE.length];
        explanation.className=`rounded-xl p-3 border ${existing.correct?'bg-emerald-950 border-emerald-400':'bg-rose-950 border-rose-400'} text-sm space-y-1.5`;
        const mainText = document.createElement('p');
        mainText.textContent = `${existing.correct?'⭕ 이번 판단은 맞았어요.':'❌ 이번 판단은 다시 살펴봐요.'} ${q.explanation}`;
        explanation.appendChild(mainText);
        if (bridge) {
          const diagRow = document.createElement('div');
          diagRow.className = 'flex flex-wrap items-center justify-between gap-1.5 pt-1 border-t border-indigo-700/60 text-xs';
          const tagSpan = document.createElement('span');
          tagSpan.className = 'font-extrabold text-amber-300';
          tagSpan.textContent = `🎯 핵심 원칙: ${bridge.label}`;
          diagRow.appendChild(tagSpan);
          const jumpBtn = document.createElement('button');
          jumpBtn.type = 'button';
          jumpBtn.className = 'mini-chip quiz-inline-bridge-btn text-[11px]';
          jumpBtn.textContent = `🎯 ${bridge.label} 바로 보기 →`;
          jumpBtn.addEventListener('click', () => {
            if (bridge.scenarioIdx !== null) {
              state.scenarioIndex = bridge.scenarioIdx;
              renderScenario();
            }
            playSound('click');
            switchTab(bridge.tab);
          });
          diagRow.appendChild(jumpBtn);
          explanation.appendChild(diagRow);
        }
      }
    }


    const RESULT_FONT = '"Gowun Dodum", "Malgun Gothic", sans-serif';
    const REASON_LABELS = {vision:'앞이 잘 보이는 옷', movement:'움직이기 편한 옷', props:'뾰족하지 않은 소품', friends:'친구를 배려하는 모습'};
    function safeLabel(value, fallback, limit=160) {
      return typeof value==='string' && value.trim() ? value.trim().slice(0,limit) : fallback;
    }
    function printLines(ctx, text, x, y, maxWidth, lineHeight, maxLines=6) {
      const words=Array.from(String(text));
      let line='', count=0;
      for(const char of words){
        if(ctx.measureText(line+char).width>maxWidth && line){ctx.fillText(line,x,y+count*lineHeight);count++;line='';if(count>=maxLines)return y+count*lineHeight;}
        line+=char;
      }
      if(line){ctx.fillText(line,x,y+count*lineHeight);count++;}
      return y+count*lineHeight;
    }
    function drawSheetBase(canvas,title,subtitle) {
      const ctx=canvas.getContext('2d');
      const w=canvas.width,h=canvas.height;
      const grad=ctx.createLinearGradient(0,0,w,h);
      grad.addColorStop(0,state.certTheme==='emerald'?'#064e3b':'#1e1b4b');
      grad.addColorStop(1,state.certTheme==='gold'?'#78350f':'#0f172a');
      ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
      ctx.strokeStyle='#fbbf24';ctx.lineWidth=8;ctx.strokeRect(24,24,w-48,h-48);
      ctx.fillStyle='#fde68a';ctx.textAlign='center';ctx.font=`bold 39px ${RESULT_FONT}`;
      ctx.fillText(title,w/2,108,w-100);
      ctx.fillStyle='#e0e7ff';ctx.font=`19px ${RESULT_FONT}`;
      ctx.fillText(subtitle,w/2,150,w-100);
      ctx.textAlign='left';
      return ctx;
    }
    function renderLearningSummary() {
      const summary=document.getElementById('learningResultSummary');
      if(!summary)return;
      const required=state.teacher.required;
      const done=required.filter(activityDone).length;
      const first=firstQuizScore();
      const all=EDUCATION_DATA[state.grade].quizzes.length;
      const goals=confirmedGoalCount();
      summary.replaceChildren();
      const title=document.createElement('h2');title.className='font-title text-xl text-amber-300';title.textContent=`${THEMES[state.teacher.theme].label} · 오늘의 학습 결과`;
      summary.appendChild(title);
      const lines=[
        required.length ? `필수 활동 ${done}/${required.length} · ${canDownloadParticipation()?'참여 확인서 발급 가능':'진행 중'}` : '필수 활동이 선택되지 않았어요. 참여 확인서는 발급할 수 없어요.',
        `안전 핵심 목표 ${goals}/6 · ${canDownloadSafetyCertificate()?'안전 대장 임명장 발급 가능':`남은 확인 ${6-goals}개`}`,
        `생각 확인 ${first}/${all} · 다시 판단한 질문 ${reviewedQuizScore()}/${all}`,
        state.legacy ? `이전 활동 기록: ${state.legacy.grade||'학년 미상'} · 스탬프 ${Object.values(state.legacy.stamps).filter(Boolean).length}개 · 사탕 ${state.legacy.candyPoints}점 (현재 회차와 별도)` : '이전 활동 기록 없음',
        state.storageAvailable ? '진행 기록은 현재 기기·브라우저에 저장됩니다.' : '현재 저장되지 않습니다. 탭을 닫기 전에 JSON으로 내보내세요.'
      ];
      lines.forEach((line,index)=>{const p=document.createElement('p');p.textContent=line;if(index>=3)p.className='teacher-summary-detail';summary.appendChild(p);});
      const remaining=SAFETY_GOALS.filter(goal=>!state.safetyConfirmed[goal.id] || state.safetyConfirmed[goal.id].contentVersion!==SAFETY_CONTENT_VERSION);
      if(remaining.length){
        const p=document.createElement('p');p.className='teacher-summary-detail';p.textContent=`다시 확인할 목표: ${remaining.map(g=>g.title).join(', ')}`;summary.appendChild(p);
        const jumpBox=document.createElement('div');
        jumpBox.id='remainingGoalLinks';
        jumpBox.className='flex flex-wrap items-center gap-1.5 pt-1';
        remaining.forEach(goal=>{
          const goalIndex=SAFETY_GOALS.findIndex(g=>g.id===goal.id);
          const btn=document.createElement('button');
          btn.type='button';
          btn.className='mini-chip remaining-goal-btn';
          btn.dataset.goalIndex=String(goalIndex);
          btn.textContent=`🚶 약속 ${goalIndex+1} 확인하러 가기 →`;
          btn.title=`${goal.title} 활동으로 바로 이동`;
          btn.addEventListener('click',()=>{
            state.scenarioIndex=Math.max(0,goalIndex);
            playSound('click');
            renderScenario();
            switchTab('tab-safety');
            const titleEl=document.getElementById('scenarioTitle');
            if(titleEl)titleEl.scrollIntoView({behavior:'smooth',block:'center'});
          });
          jumpBox.appendChild(btn);
        });
        summary.appendChild(jumpBox);
      }
      // 6대 안전 목표 달성률 히트맵 & 원클릭 취약 목표 재수업 (Idea 7)
      const heatmapWrap=document.createElement('div');
      heatmapWrap.id='safetyGoalHeatmap';
      heatmapWrap.className='pt-2 mt-2 border-t border-indigo-800/80 space-y-1.5';
      const hmTitle=document.createElement('div');
      hmTitle.className='text-xs font-extrabold text-amber-300';
      const totalParticipants=classPosterRecords.length>0 ? classPosterRecords.length : 1;
      hmTitle.textContent=`📊 6대 안전 목표 달성률 히트맵 (${classPosterRecords.length>0?`우리 반 ${totalParticipants}명 합산`:'나의 달성 현황'} · 누르면 바로 복습)`;
      heatmapWrap.appendChild(hmTitle);
      const hmGrid=document.createElement('div');
      hmGrid.className='grid grid-cols-2 sm:grid-cols-3 gap-1.5';
      SAFETY_GOALS.forEach((goal,goalIndex)=>{
        let achieved=0;
        if(classPosterRecords.length>0){
          classPosterRecords.forEach(rec=>{
            const g=rec.grade||state.grade;
            const confirmed=rec.gradeRecords?.[g]?.safetyConfirmed?.[goal.id];
            if(confirmed?.contentVersion===SAFETY_CONTENT_VERSION)achieved++;
          });
        } else if(state.safetyConfirmed[goal.id]?.contentVersion===SAFETY_CONTENT_VERSION){
          achieved=1;
        }
        const pct=Math.round((achieved/totalParticipants)*100);
        const cell=document.createElement('button');
        cell.type='button';
        cell.className='heatmap-goal-btn text-left rounded-xl p-2 bg-indigo-950/90 border border-indigo-700 hover:border-amber-400 transition space-y-1';
        cell.dataset.goalIndex=String(goalIndex);
        const rowTop=document.createElement('div');
        rowTop.className='flex items-center justify-between gap-1 text-[11px] font-bold';
        const nameSpan=document.createElement('span');
        nameSpan.textContent=`${pct===100?'🟢':pct>=50?'🟡':'🔴'} ${goal.title}`;
        const pctSpan=document.createElement('span');
        pctSpan.className='text-amber-300';
        pctSpan.textContent=`${pct}%`;
        rowTop.appendChild(nameSpan);
        rowTop.appendChild(pctSpan);
        const track=document.createElement('div');
        track.className='heatmap-track';
        const fill=document.createElement('div');
        fill.className='heatmap-fill';
        fill.style.width=`${pct}%`;
        track.appendChild(fill);
        cell.appendChild(rowTop);
        cell.appendChild(track);
        cell.addEventListener('click',()=>{
          state.scenarioIndex=goalIndex;
          playSound('click');
          renderScenario();
          switchTab('tab-safety');
        });
        hmGrid.appendChild(cell);
      });
      heatmapWrap.appendChild(hmGrid);
      summary.appendChild(heatmapWrap);
      const codeInput=document.getElementById('studentShareCodeInput');
      if(codeInput && typeof generateStudentShareCode==='function'){
        codeInput.value=generateStudentShareCode();
      }
      const certButton=document.getElementById('btnDownloadCert');
      const participationButton=document.getElementById('btnDownloadParticipation');
      if(certButton)certButton.disabled=!(canDownloadSafetyCertificate() || (classPosterActive && classPosterRecords.length>0));
      if(participationButton)participationButton.disabled=!canDownloadParticipation();
    }
    let classPosterActive = false;
    let classPosterRecords = [];
    function drawCanvasQr(ctx, url, x, y, size) {
      try {
        if (typeof qrcode !== 'function') return;
        const code = qrcode(0, 'M');
        code.addData(url);
        code.make();
        const count = code.getModuleCount();
        const pad = 6;
        const cell = (size - pad * 2) / count;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, size, size);
        ctx.fillStyle = '#0f172a';
        for (let r = 0; r < count; r++) {
          for (let c = 0; c < count; c++) {
            if (code.isDark(r, c)) {
              ctx.fillRect(x + pad + c * cell, y + pad + r * cell, Math.ceil(cell), Math.ceil(cell));
            }
          }
        }
      } catch (_) {}
    }
    function renderClassPosterCanvas(records) {
      const canvas = document.getElementById('certificateCanvas');
      if (!canvas || !Array.isArray(records) || !records.length) return;
      classPosterActive = true;
      classPosterRecords = records;
      const clsLabel = safeLabel(records[0]?.profile?.className || state.profile.className, EDUCATION_DATA[state.grade].classDefault, 30);
      const ctx = drawSheetBase(canvas, '🏆 우리 반 안전 대장 협동 포스터', `${THEMES[state.teacher.theme].label} · ${clsLabel} (${records.length}명 참여)`);
      const items = records.slice(0, 12);
      const cols = items.length <= 4 ? 2 : 3;
      const rows = Math.ceil(items.length / cols);
      const startX = 52, startY = 182, gridW = canvas.width - 104, gridH = 445;
      const gap = 10;
      const cellW = (gridW - gap * (cols - 1)) / cols;
      const cellH = Math.min(138, (gridH - gap * Math.max(0, rows - 1)) / Math.max(1, rows));
      items.forEach((rec, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const cx = startX + col * (cellW + gap);
        const cy = startY + row * (cellH + gap);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.78)';
        ctx.fillRect(cx, cy, cellW, cellH);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(cx, cy, cellW, cellH);
        const g = rec.grade || state.grade;
        const gRec = (rec.gradeRecords && rec.gradeRecords[g]) || {};
        const av = gRec.avatar || state.avatar || {costume:'🎃', char:'🧒', prop:'🕯️'};
        const name = safeLabel(rec.profile?.name, `안전대장 ${idx + 1}`, 16);
        const pledge = safeLabel(rec.profile?.pledge, '안전 약속을 실천해요!', 38);
        ctx.textAlign = 'left';
        ctx.font = `22px ${RESULT_FONT}`;
        ctx.fillStyle = '#fff';
        ctx.fillText(`${av.costume || '🎃'}${av.char || '🧒'}${av.prop || '🕯️'}`, cx + 10, cy + 30);
        ctx.font = `bold 14px ${RESULT_FONT}`;
        ctx.fillStyle = '#fde68a';
        ctx.fillText(`${name} (${rec.candyPoints ?? 0}🍬)`, cx + 82, cy + 28, cellW - 90);
        ctx.font = `12px ${RESULT_FONT}`;
        ctx.fillStyle = '#e0e7ff';
        printLines(ctx, pledge, cx + 10, cy + 56, cellW - 20, 18, 3);
      });
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fde68a';
      ctx.font = `bold 15px ${RESULT_FONT}`;
      ctx.fillText(`우리 반 모두가 서로를 배려하고 안전한 길을 선택하기로 약속했습니다! · ${new Date().toLocaleDateString('ko-KR')}`, canvas.width / 2, 658, 700);
      ctx.textAlign = 'left';
      renderLearningSummary();
    }
    function addCurrentStudentToClassPoster() {
      rememberGrade();
      const snapshot = {
        sessionId: state.sessionId,
        grade: state.grade,
        candyPoints: state.candyPoints,
        profile: {
          school: state.profile.school || '',
          className: state.profile.className || EDUCATION_DATA[state.grade].classDefault,
          name: state.profile.name || `안전대장 ${classPosterRecords.length + 1}호`,
          pledge: state.profile.pledge || '오른쪽으로 안전하게 걷고 친구를 배려하겠습니다!'
        },
        gradeRecords: JSON.parse(JSON.stringify(state.gradeRecords))
      };
      classPosterRecords.push(snapshot);
      renderClassPosterCanvas(classPosterRecords);
      const status = document.getElementById('importResults');
      if (status) {
        status.textContent = `🏆 협동 포스터에 ${classPosterRecords.length}명 등록됨: ${classPosterRecords.map(r => r.profile.name).join(', ')}`;
      }
      showToast(`우리 반 협동 포스터에 [${snapshot.profile.name}] 학생이 추가되었어요! (총 ${classPosterRecords.length}명)`, '🏆');
    }
    function renderCertificateCanvas() {
      classPosterActive = false;
      const canvas=document.getElementById('certificateCanvas');
      if(!canvas)return;
      const ctx=drawSheetBase(canvas,canDownloadSafetyCertificate()?'안전 대장 임명장':'안전 목표 확인 현황 · 미완료',`${THEMES[state.teacher.theme].label} · ${EDUCATION_DATA[state.grade].label} · ${getLevelTitle(state.candyPoints)}`);
      syncButtonGroup('.cert-theme-btn','data-theme',state.certTheme);
      syncButtonGroup('.cert-sticker-btn','data-sticker',state.certSticker);
      ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font=`bold 17px ${RESULT_FONT}`;
      const identity=[safeLabel(state.profile.school,'학교명 미입력',40),safeLabel(state.profile.className,'학급 미입력',30),safeLabel(state.profile.name,'별칭 없는 학습자',40)].join(' · ');
      printLines(ctx,identity,canvas.width/2,188,680,24,2);

      // Left showcase card: Custom Jack-o'-Lantern or Theme Craft Item
      const craftTitle = (typeof getThemeCraftConfig === 'function' ? getThemeCraftConfig().certTitle : null) || '나만의 호박등';
      ctx.fillStyle='rgba(15, 23, 42, 0.72)';ctx.fillRect(65,212,185,126);
      ctx.strokeStyle=state.lantern.lit?'#fbbf24':'#6366f1';ctx.lineWidth=2;ctx.strokeRect(65,212,185,126);
      ctx.fillStyle='#fde68a';ctx.font=`bold 13px ${RESULT_FONT}`;ctx.fillText(craftTitle,157,232);
      ctx.font=`22px ${RESULT_FONT}`;ctx.fillText(state.lantern.hat||'🎩',157,258);
      ctx.beginPath();ctx.ellipse(157,290,36,26,0,0,Math.PI*2);
      ctx.fillStyle=state.lantern.lit?'#f97316':'#ea580c';ctx.fill();
      ctx.strokeStyle='#fde047';ctx.lineWidth=state.lantern.lit?3:1.5;ctx.stroke();
      ctx.fillStyle='#fff';ctx.font=`13px ${RESULT_FONT}`;ctx.fillText(state.lantern.eye||'⭐ ⭐',157,286);
      ctx.font=`11px ${RESULT_FONT}`;ctx.fillText(state.lantern.mouth||'😄 활짝',157,304);

      // Right showcase card: Custom Safety Avatar
      ctx.fillStyle='rgba(15, 23, 42, 0.72)';ctx.fillRect(550,212,185,126);
      ctx.strokeStyle='#f472b6';ctx.lineWidth=2;ctx.strokeRect(550,212,185,126);
      ctx.fillStyle='#fbcfe8';ctx.font=`bold 13px ${RESULT_FONT}`;ctx.fillText('나의 안전 아바타',642,232);
      ctx.font=`30px ${RESULT_FONT}`;ctx.fillText(`${state.avatar.costume}${state.avatar.char}${state.avatar.prop}`,642,282);
      ctx.fillStyle='#e0e7ff';ctx.font=`12px ${RESULT_FONT}`;
      ctx.fillText(REASON_LABELS[state.avatarReason]||'안전하고 편한 복장',642,318,165);

      // Center achievement & 4 stamps bar
      ctx.fillStyle='#fef3c7';ctx.font=`17px ${RESULT_FONT}`;
      if(canDownloadSafetyCertificate()) {
        ctx.fillText('안전 상황을 살피고 공통 안전 목표 6가지를',canvas.width/2,256,280);
        ctx.fillText('새 질문으로 다시 판단해 확인했습니다.',canvas.width/2,282,280);
      } else {
        ctx.fillText(`현재 ${confirmedGoalCount()}/6개 목표 확인 완료`,canvas.width/2,256,280);
        ctx.fillText('남은 목표 확인 시 임명장 저장 가능',canvas.width/2,282,280);
      }
      const stampLabels=[['s1','🎃이야기'],['s2','🚶길안전'],['s3','🧙옷장'],['s4','⭕퀴즈']];
      ctx.font=`bold 13px ${RESULT_FONT}`;
      ctx.fillStyle='#fde68a';
      ctx.fillText(stampLabels.map(([k,l])=>`${state.stamps[k]?'🏅':'⬜'}${l}`).join('  '),canvas.width/2,322,280);

      ctx.fillStyle='#111827';ctx.fillRect(65,356,670,244);
      ctx.fillStyle='#fde68a';ctx.font=`bold 16px ${RESULT_FONT}`;ctx.fillText('나의 안전 약속',canvas.width/2,392);
      ctx.fillStyle='#fff';ctx.font=`16px ${RESULT_FONT}`;
      printLines(ctx,safeLabel(state.profile.pledge,'안전 약속을 적어 보세요.'),canvas.width/2,428,620,28,5);
      ctx.fillStyle='#e0e7ff';ctx.font=`15px ${RESULT_FONT}`;
      ctx.fillText(`${state.certSticker} 확인 날짜 ${new Date().toLocaleDateString('ko-KR')} · © 엽쌤`,canvas.width/2,649);
      ctx.fillText('학습 확인 기록 · 실제 안전을 보장하는 증명은 아닙니다.',canvas.width/2,683);
      ctx.textAlign='left';
      renderLearningSummary();
    }
    function downloadCanvas(canvas,filename) {
      const link=document.createElement('a');
      link.href=canvas.toDataURL('image/png');
      link.download=filename.replace(/[\\/:*?"<>|]/g,'_');
      document.body.appendChild(link);link.click();link.remove();
    }
    function downloadCertificatePNG() {
      if (classPosterActive && classPosterRecords.length > 0) {
        renderClassPosterCanvas(classPosterRecords);
        downloadCanvas(document.getElementById('certificateCanvas'), `우리반_안전대장_협동포스터_${safeLabel(state.profile.className, '우리반', 30)}.png`);
        showToast('우리 반 안전 대장 협동 포스터를 저장했어요.', '🏆');
        return;
      }
      if(!canDownloadSafetyCertificate()){renderLearningSummary();showToast('안전 목표 6개를 새 질문으로 확인한 뒤 저장할 수 있어요.','🔎');return;}
      renderCertificateCanvas();
      downloadCanvas(document.getElementById('certificateCanvas'),`안전대장_임명장_${safeLabel(state.profile.name,'학습자',40)}.png`);
      showToast('안전 대장 임명장을 저장했어요.','💾');
    }
    function drawParticipationCanvas() {
      const canvas=document.createElement('canvas');canvas.width=900;canvas.height=650;
      const ctx=drawSheetBase(canvas,'오늘의 활동 참여 확인서',`${THEMES[state.teacher.theme].label} · ${EDUCATION_DATA[state.grade].label}`);
      ctx.fillStyle='#fff';ctx.font=`21px ${RESULT_FONT}`;
      let y=205;
      y=printLines(ctx,`${safeLabel(state.profile.name,'별칭 없는 학습자',40)} · ${safeLabel(state.profile.className,'학급 미입력',30)}`,70,y,760,35,2)+30;
      ctx.fillText(`필수 활동 ${state.teacher.required.length}개 완료`,70,y);y+=50;
      state.teacher.required.forEach(id=>{ctx.fillText(`✓ ${{culture:'이야기',safety:'안전 판단',costume:'옷장',quiz:'퀴즈'}[id]}`,85,y);y+=40;});
      ctx.fillStyle='#fde68a';ctx.font=`16px ${RESULT_FONT}`;
      ctx.fillText('참여 확인은 안전 핵심 목표 6개 확인과 별도입니다.',70,550);
      return canvas;
    }
    function drawResultCanvas() {
      const canvas=document.createElement('canvas');canvas.width=1100;canvas.height=1500;
      const ctx=drawSheetBase(canvas,'나의 학습 결과지',`${THEMES[state.teacher.theme].label} · ${EDUCATION_DATA[state.grade].label} · ${state.teacher.minutes}분 수업`);
      let y=200;
      ctx.fillStyle='#fff';ctx.font=`24px ${RESULT_FONT}`;
      y=printLines(ctx,`학습자: ${safeLabel(state.profile.name,'별칭 없는 학습자',40)} / ${safeLabel(state.profile.school,'학교명 미입력',40)} / ${safeLabel(state.profile.className,'학급 미입력',30)}`,75,y,950,36,3)+25;
      ctx.fillStyle='#fde68a';ctx.font=`bold 26px ${RESULT_FONT}`;ctx.fillText('내가 꾸민 모습',75,y);y+=58;
      ctx.font=`56px ${RESULT_FONT}`;ctx.fillText(`${state.avatar.costume}${state.avatar.char}${state.avatar.prop}`,85,y);y+=48;
      ctx.fillStyle='#fff';ctx.font=`22px ${RESULT_FONT}`;
      y=printLines(ctx,`안전한 이유: ${safeLabel(state.avatarReasonText,REASON_LABELS[state.avatarReason]||'나의 선택',120)}`,75,y,950,34,5)+28;
      ctx.fillStyle='#fde68a';ctx.font=`bold 26px ${RESULT_FONT}`;ctx.fillText('완료한 활동',75,y);y+=42;
      ctx.fillStyle='#fff';ctx.font=`20px ${RESULT_FONT}`;
      y=printLines(ctx,state.teacher.order.map(id=>`${{culture:'이야기',safety:'안전 판단',costume:'옷장',quiz:'퀴즈'}[id]} ${activityDone(id)?'완료':'진행 중'}`).join('  /  '),75,y,950,32,4)+28;
      ctx.fillStyle='#fde68a';ctx.font=`bold 26px ${RESULT_FONT}`;ctx.fillText('판단 기록',75,y);y+=43;
      ctx.fillStyle='#fff';ctx.font=`21px ${RESULT_FONT}`;
      y=printLines(ctx,`생각 확인 ${firstQuizScore()}/${EDUCATION_DATA[state.grade].quizzes.length} · 다시 판단한 질문 ${reviewedQuizScore()}개 · 안전 목표 ${confirmedGoalCount()}/6`,75,y,950,34,3)+20;
      const reviewed=SAFETY_GOALS.filter(goal=>state.safetyConfirmed[goal.id]?.contentVersion===SAFETY_CONTENT_VERSION).map(goal=>goal.title);
      y=printLines(ctx,`다시 확인한 목표: ${reviewed.length?reviewed.join(', '):'아직 없음'}`,75,y,950,34,5)+28;
      ctx.fillStyle='#fde68a';ctx.font=`bold 26px ${RESULT_FONT}`;ctx.fillText('내가 실천할 안전 약속',75,y);y+=44;
      ctx.fillStyle='#fff';ctx.font=`22px ${RESULT_FONT}`;
      printLines(ctx,safeLabel(state.profile.pledge,'아직 적지 않았어요.'),75,y,950,35,5);
      // Family 1-Minute Safety Quiz & QR Box (Idea 9)
      const familyCheck = SAFETY_GOALS[0].checks[state.grade];
      ctx.fillStyle='rgba(15, 23, 42, 0.82)';ctx.fillRect(75,1235,950,150);
      ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.strokeRect(75,1235,950,150);
      ctx.fillStyle='#fde68a';ctx.font=`bold 20px ${RESULT_FONT}`;
      ctx.fillText('🏡 가족과 함께하는 1분 안전 대화 미션',95,1272);
      ctx.fillStyle='#fff';ctx.font=`18px ${RESULT_FONT}`;
      ctx.fillText(`Q. ${familyCheck[0]}`,95,1308,760);
      ctx.fillStyle='#a7f3d0';ctx.font=`bold 18px ${RESULT_FONT}`;
      ctx.fillText(`💡 가족과 나눌 정답: ${familyCheck[1][familyCheck[2]]}`,95,1344,760);
      drawCanvasQr(ctx, typeof shareLessonUrl === 'function' ? shareLessonUrl() : 'https://gmlduqzhd123-lab.github.io/Halloween/', 890, 1250, 118);
      ctx.fillStyle='#cbd5e1';ctx.font=`16px ${RESULT_FONT}`;
      ctx.fillText(`학습 내용 버전 ${CONTENT_VERSION} · 이 기기에서 생성`,75,1430);
      return canvas;
    }
    function drawWorksheetCanvas() {
      const canvas=document.createElement('canvas');canvas.width=1100;canvas.height=1500;
      const ctx=canvas.getContext('2d');
      ctx.fillStyle='#ffffff';ctx.fillRect(0,0,1100,1500);
      ctx.strokeStyle='#0f172a';ctx.lineWidth=4;ctx.strokeRect(36,36,1028,1428);
      ctx.fillStyle='#0f172a';ctx.textAlign='center';ctx.font=`bold 36px ${RESULT_FONT}`;
      ctx.fillText(`${THEMES[state.teacher.theme].label} · 다중밀집 보행 안전 & 문화 존중 활동지`,550,96,960);
      ctx.font=`20px ${RESULT_FONT}`;
      ctx.fillText(`대상: ${EDUCATION_DATA[state.grade].label}  |  학교: _______________   학년/반: _________   이름: _______________`,550,142,960);
      ctx.beginPath();ctx.moveTo(60,165);ctx.lineTo(1040,165);ctx.lineWidth=2;ctx.stroke();
      ctx.textAlign='left';
      let y=210;
      ctx.font=`bold 24px ${RESULT_FONT}`;ctx.fillText('1. 꼭 기억할 다중밀집 보행 안전 약속 6가지 (실천할 약속에 ✓ 표시해요)',65,y);y+=38;
      ctx.font=`19px ${RESULT_FONT}`;
      SAFETY_GOALS.forEach((goal,idx)=>{
        const check=goal.checks[state.grade];
        ctx.fillText(`□ 약속 ${idx+1} [${goal.title}] ${check[0]} → 정답: ${check[1][check[2]]}`,75,y,955);
        y+=34;
      });
      y+=18;
      ctx.font=`bold 24px ${RESULT_FONT}`;ctx.fillText(`2. 스스로 풀어 보는 생각 확인 문제 (${EDUCATION_DATA[state.grade].label} 핵심 4문항)`,65,y);y+=38;
      const quizzes=EDUCATION_DATA[state.grade].quizzes.slice(0,4);
      quizzes.forEach((q,idx)=>{
        ctx.font=`bold 19px ${RESULT_FONT}`;
        y=printLines(ctx,`문항 ${idx+1}. ${q.q}`,75,y,950,28,2)+4;
        ctx.font=`18px ${RESULT_FONT}`;
        const opts=q.options.map((opt,oi)=>`${['①','②','③','④'][oi]||oi+1} ${opt}`).join('    ');
        y=printLines(ctx,opts,95,y,930,27,2)+14;
      });
      y+=12;
      ctx.font=`bold 24px ${RESULT_FONT}`;ctx.fillText('3. 배려하는 옷차림 점검 & 오늘 나의 안전 다짐 한 문장 쓰기',65,y);y+=38;
      ctx.font=`18px ${RESULT_FONT}`;
      ctx.fillText('□ 앞이 잘 보이는 가면·모자 쓰기   □ 바닥에 끌리지 않는 옷 입기   □ 실제 경찰·소방 제복과 혼동되는 옷 피하기   □ 뾰족한 소품 피하기',75,y,955);
      y+=36;
      ctx.strokeStyle='#334155';ctx.lineWidth=1.5;
      ctx.strokeRect(75,y,950,130);
      ctx.font=`bold 19px ${RESULT_FONT}`;ctx.fillText('✍ 나의 안전·배려 다짐:',95,y+36);
      ctx.beginPath();ctx.moveTo(95,y+78);ctx.lineTo(1005,y+78);ctx.moveTo(95,y+114);ctx.lineTo(1005,y+114);ctx.stroke();
      const famY = y + 148;
      const famCheck = SAFETY_GOALS[1].checks[state.grade];
      ctx.strokeRect(75,famY,950,104);
      ctx.font=`bold 18px ${RESULT_FONT}`;ctx.fillText(`🏡 가정 연계 1분 안전 퀴즈: "${famCheck[0]}" (정답: ${famCheck[1][famCheck[2]]})`,95,famY+40,800);
      ctx.font=`16px ${RESULT_FONT}`;ctx.fillText('가족에게 오늘 배운 안전 약속 한 가지를 소개하고 확인 서명을 받아 보세요: ________________ (인)',95,famY+78,800);
      drawCanvasQr(ctx, typeof shareLessonUrl === 'function' ? shareLessonUrl() : 'https://gmlduqzhd123-lab.github.io/Halloween/', 915, famY+7, 90);
      ctx.font=`15px ${RESULT_FONT}`;ctx.fillStyle='#475569';
      ctx.fillText(`근거 자료: 국민재난안전포털 다중운집인파사고 국민행동요령 · 유네스코 · © 엽쌤 교육용 활동지`,65,1438);
      return canvas;
    }
    function generateStudentShareCode() {
      const payload = {
        g: state.grade,
        c: safeLabel(state.profile.className, EDUCATION_DATA[state.grade].classDefault, 20),
        n: safeLabel(state.profile.name, '안전대장', 16),
        p: safeLabel(state.profile.pledge, '안전 약속을 실천해요!', 42),
        pts: state.candyPoints,
        av: [state.avatar.costume || '🎃', state.avatar.char || '🧒', state.avatar.prop || '🕯️'],
        goals: SAFETY_GOALS.filter(g => state.safetyConfirmed[g.id]?.contentVersion === SAFETY_CONTENT_VERSION).map(g => g.id)
      };
      try {
        const json = JSON.stringify(payload);
        const bytes = new TextEncoder().encode(json);
        let binary = '';
        bytes.forEach(b => { binary += String.fromCharCode(b); });
        return `HW1:${btoa(binary)}`;
      } catch (_) {
        return '';
      }
    }
    function importStudentShareCode(rawText) {
      const status = document.getElementById('importResults');
      const tokens = String(rawText || '').trim().split(/\s+/).filter(Boolean);
      if (!tokens.length) {
        if (status) status.textContent = '배움 코드를 입력해 주세요.';
        return false;
      }
      let added = 0;
      tokens.forEach(token => {
        if (!token.startsWith('HW1:')) return;
        try {
          const binary = atob(token.slice(4));
          const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
          const parsed = JSON.parse(new TextDecoder().decode(bytes));
          if (!parsed || typeof parsed !== 'object') return;
          const grade = EDUCATION_DATA[parsed.g] ? parsed.g : state.grade;
          const confirmedMap = {};
          if (Array.isArray(parsed.goals)) {
            parsed.goals.forEach(gid => {
              if (SAFETY_GOALS.some(g => g.id === gid)) {
                confirmedMap[gid] = { contentVersion: SAFETY_CONTENT_VERSION, at: Date.now() };
              }
            });
          }
          const avArr = Array.isArray(parsed.av) ? parsed.av : ['🎃', '🧒', '🕯️'];
          classPosterRecords.push({
            sessionId: `code-${Date.now()}-${Math.random()}`,
            grade,
            candyPoints: Number.isInteger(parsed.pts) ? Math.max(0, Math.min(999999, parsed.pts)) : 0,
            profile: {
              school: state.profile.school || '',
              className: safeLabel(parsed.c, EDUCATION_DATA[grade].classDefault, 30),
              name: safeLabel(parsed.n, `안전대장 ${classPosterRecords.length + 1}호`, 16),
              pledge: safeLabel(parsed.p, '안전 약속을 실천해요!', 60)
            },
            gradeRecords: {
              [grade]: {
                avatar: { costume: safeLabel(avArr[0], '🎃', 4), char: safeLabel(avArr[1], '🧒', 4), prop: safeLabel(avArr[2], '🕯️', 4) },
                safetyConfirmed: confirmedMap
              }
            }
          });
          added++;
        } catch (_) {}
      });
      if (!added) {
        if (status) status.textContent = '유효한 배움 코드(HW1:...)를 찾지 못했어요.';
        return false;
      }
      renderClassPosterCanvas(classPosterRecords);
      if (status) {
        status.textContent = `⚡ 배움 코드로 ${added}명 추가 완료! (총 ${classPosterRecords.length}명: ${classPosterRecords.map(r => r.profile.name).join(', ')})`;
      }
      showToast(`배움 코드로 학생 ${added}명을 협동 포스터에 추가했어요!`, '⚡');
      return true;
    }
    function drawWallPosterCanvas() {
      const canvas = document.createElement('canvas');
      canvas.width = 1100;
      canvas.height = 1500;
      const cls = safeLabel(state.profile.className, EDUCATION_DATA[state.grade].classDefault, 30);
      const ctx = drawSheetBase(canvas, '🪧 우리 반 6대 다중밀집 보행 안전 수칙', `${THEMES[state.teacher.theme].label} · ${cls} 교실 상시 게시용 안전 포스터`);
      const icons = ['🚪', '➡️', '↗️', '👐', '🙅', '🙆'];
      const summaries = [
        '행사장에 들어가기 전 비상구(초록색 표지판)와 넓은 이동로를 먼저 확인해요.',
        '평상시 양방향 통로에서는 서로 부딪히지 않도록 오른쪽으로 차근차근 걸어요.',
        '걸음이 느려지고 어깨가 자꾸 닿는 혼잡 신호가 오면 넓은 가장자리로 벗어나요.',
        '인파에 떠밀릴 때는 무리하게 맞서지 말고 두 팔로 가슴 앞 숨 쉴 공간을 지켜요.',
        '붐비는 길에서 물건이나 신발이 떨어져도 허리를 숙이지 않고 내 몸을 먼저 보호해요.',
        '넘어져서 바로 일어나기 어려울 때는 머리를 감싸고 몸을 공처럼 둥글게 말아요.'
      ];
      let y = 210;
      SAFETY_GOALS.forEach((goal, idx) => {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.82)';
        ctx.fillRect(68, y, 964, 168);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.strokeRect(68, y, 964, 168);
        ctx.fillStyle = '#fde68a';
        ctx.font = `bold 28px ${RESULT_FONT}`;
        ctx.fillText(`${icons[idx]} 수칙 ${idx + 1}. ${goal.title}`, 96, y + 48, 900);
        ctx.fillStyle = '#ffffff';
        ctx.font = `21px ${RESULT_FONT}`;
        printLines(ctx, summaries[idx], 96, y + 92, 900, 32, 2);
        y += 186;
      });
      ctx.fillStyle = '#fde68a';
      ctx.textAlign = 'center';
      ctx.font = `bold 22px ${RESULT_FONT}`;
      ctx.fillText(`🚨 위급 상황 신고: 경찰 112 · 소방/구급 119 · 출처: 국민재난안전포털 다중운집인파사고 행동요령`, 550, 1385, 960);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = `17px ${RESULT_FONT}`;
      ctx.fillText(`생성일: ${new Date().toLocaleDateString('ko-KR')} · © 엽쌤 교육용 안전 포스터`, 550, 1430, 960);
      ctx.textAlign = 'left';
      return canvas;
    }
    function drawParentCardCanvas() {
      const canvas = document.createElement('canvas');
      canvas.width = 900;
      canvas.height = 900;
      const cls = safeLabel(state.profile.className, EDUCATION_DATA[state.grade].classDefault, 30);
      const name = safeLabel(state.profile.name, '우리 아이', 25);
      const ctx = drawSheetBase(canvas, '💌 가정 연계 안전 교육 안내 카드', `${THEMES[state.teacher.theme].label} · ${cls} · ${name}`);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.82)';
      ctx.fillRect(60, 185, 780, 440);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 185, 780, 440);
      ctx.fillStyle = '#fde68a';
      ctx.font = `bold 24px ${RESULT_FONT}`;
      ctx.fillText('🏫 오늘 학교에서 함께 배운 안전 핵심 약속', 88, 232);
      ctx.fillStyle = '#ffffff';
      ctx.font = `20px ${RESULT_FONT}`;
      const points = [
        '1. 행사장·박물관에 들어가기 전 비상구와 넓은 이동로를 먼저 확인해요.',
        '2. 복도와 통로에서는 오른쪽으로 걷고, 어깨가 닿는 혼잡 신호가 오면 벗어나요.',
        '3. 떠밀릴 때는 가슴 앞 숨 쉴 공간을 보호하고, 떨어진 물건은 숙여 줍지 않아요.',
        '4. 서로 다른 문화의 고유한 의미를 존중하고 시야가 트인 안전한 복장을 골라요.'
      ];
      let py = 278;
      points.forEach(line => {
        py = printLines(ctx, line, 88, py, 720, 30, 2) + 12;
      });
      ctx.fillStyle = '#fde68a';
      ctx.font = `bold 22px ${RESULT_FONT}`;
      ctx.fillText(`✍ ${name}의 안전 다짐`, 88, py + 18);
      ctx.fillStyle = '#a7f3d0';
      ctx.font = `20px ${RESULT_FONT}`;
      printLines(ctx, safeLabel(state.profile.pledge, '오른쪽으로 안전하게 걷고 비상 출구를 먼저 확인하겠습니다!', 100), 88, py + 54, 720, 28, 2);

      const familyCheck = SAFETY_GOALS[0].checks[state.grade];
      ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      ctx.fillRect(60, 650, 780, 165);
      ctx.strokeStyle = '#6ee7b7';
      ctx.strokeRect(60, 650, 780, 165);
      ctx.fillStyle = '#fde68a';
      ctx.font = `bold 21px ${RESULT_FONT}`;
      ctx.fillText('🏡 가정에서 자녀와 함께 나누는 1분 질문', 85, 692);
      ctx.fillStyle = '#ffffff';
      ctx.font = `19px ${RESULT_FONT}`;
      ctx.fillText(`질문: ${familyCheck[0]}`, 85, 732, 580);
      ctx.fillStyle = '#a7f3d0';
      ctx.font = `bold 19px ${RESULT_FONT}`;
      ctx.fillText(`정답: ${familyCheck[1][familyCheck[2]]}`, 85, 770, 580);
      drawCanvasQr(ctx, typeof shareLessonUrl === 'function' ? shareLessonUrl() : 'https://gmlduqzhd123-lab.github.io/Halloween/', 695, 668, 125);
      return canvas;
    }
    function exportProgressJSON() {
      rememberGrade();
      const data={schemaVersion:2,contentVersion:CONTENT_VERSION,sessionId:state.sessionId,grade:state.grade,
        gradeRecords:state.gradeRecords,rewardLedger:state.rewardLedger,candyPoints:state.candyPoints,
        legacy:state.legacy,teacher:state.teacher,activeTab:state.activeTab,profile:state.profile};
      const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
      const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=`halloween-record-${state.sessionId}.json`;
      document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
    }
    function safeImportedTree(value,depth=0) {
      if(depth>14)return false;
      if(typeof value==='string')return value.length<=500;
      if(typeof value==='number')return Number.isFinite(value) && Math.abs(value)<10000000000000;
      if(value===null || typeof value==='boolean')return true;
      if(Array.isArray(value))return value.length<=1000 && value.every(item=>safeImportedTree(item,depth+1));
      if(typeof value==='object'){
        const entries=Object.entries(value);
        return entries.length<=300 && entries.every(([key,item])=>key.length<=100 && !['__proto__','constructor','prototype'].includes(key) && safeImportedTree(item,depth+1));
      }
      return false;
    }
    async function importProgressFiles(files) {
      const status=document.getElementById('importResults');
      const records=[];
      try {
        for(const file of files){
          if(file.size>1024*1024)throw new Error(`${file.name}: 파일이 1MB를 넘어요.`);
          const data=JSON.parse(await file.text());
          if(!safeImportedTree(data) || !validSaved(data))throw new Error(`${file.name}: 지원하지 않는 기록 형식이에요.`);
          records.push(data);
        }
        if(records.length>1){
          renderClassPosterCanvas(records);
          status.textContent=`이 기기에서 ${records.length}개 결과를 확인해 협동 포스터로 합쳤어요: ${records.map(r=>`${r.profile?.name||'별칭 없음'} (${r.grade}, ${r.candyPoints}점)`).join(' · ')}`;
          return;
        }
        if(records.length===1){
          const data=records[0];
          state.sessionId=data.sessionId;state.grade=data.grade;state.gradeRecords=data.gradeRecords;
          state.rewardLedger=data.rewardLedger;state.candyPoints=data.candyPoints;
          state.legacy=data.legacy||null;state.teacher=sanitizeTeacher(data.teacher);
          state.profile=data.profile && typeof data.profile==='object' ? data.profile : {school:'',className:'',name:'',pledge:''};
          state.activeTab=['tab-culture','tab-safety','tab-costume','tab-quiz','tab-cert'].includes(data.activeTab) ? data.activeTab : state.teacher.start;
          restoreGrade(state.grade);saveProgress();
          renderAllLearning();
          status.textContent='기록을 이 기기의 현재 회차로 가져왔어요.';
        }
      } catch(error){status.textContent=error.message || '기록을 읽을 수 없어요.';}
    }


    // ==================== NAVIGATION & GRADE SWITCHING ====================
    const WELCOME_THEME_MOODS = {
      halloween: { icon: '🎃', badge: '🎃 할로윈 안전 탐험', sub: '가을 축제의 유래와 밤길·인파 속 안전한 움직임을 이야기로 만나요.' },
      school: { icon: '🏫', badge: '🏫 학교 축제 안전 탐험', sub: '부스와 복도가 붐비는 학교 축제에서 우측통행과 질서를 스스로 판단해요.' },
      field: { icon: '🚌', badge: '🚌 현장체험학습 안전 탐험', sub: '박물관·전시관 관람 동선과 비상구·집결 약속을 미리 확인해요.' },
      trip: { icon: '🧳', badge: '🧳 수학여행 안전 탐험', sub: '숙소 비상 탈출로와 관광지 이동 시 안전한 대열 유지를 연습해요.' },
      sports: { icon: '🏅', badge: '🏅 체육대회 안전 탐험', sub: '응원석과 출입구 병목 구간에서 친구와 안전 거리를 지켜요.' },
      local: { icon: '🎪', badge: '🎪 지역 행사 안전 탐험', sub: '야외 공연장·야시장 인파 속에서 보호자 동행과 대피 요령을 익혀요.' }
    };
    const WELCOME_GRADE_META = {
      '1-2': '🌱 1~2학년 맞춤',
      '3-4': '🌿 3~4학년 맞춤',
      '5-6': '🌳 5~6학년 맞춤'
    };
    function syncWelcomeGrade() {
      document.querySelectorAll('[data-welcome-grade]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.welcomeGrade === state.grade)));
      const currentTheme = (state.teacher && state.teacher.theme) || 'halloween';
      document.querySelectorAll('[data-welcome-theme]').forEach(button => {
        const picked = button.dataset.welcomeTheme === currentTheme;
        button.setAttribute('aria-pressed', String(picked));
        button.classList.toggle('is-picked', picked);
      });
      const welcomeScreen = document.getElementById('welcomeScreen');
      if (welcomeScreen) welcomeScreen.setAttribute('data-welcome-active-theme', currentTheme);
      const mood = WELCOME_THEME_MOODS[currentTheme] || WELCOME_THEME_MOODS.halloween;
      const heroIcon = document.getElementById('welcomeHeroIcon');
      if (heroIcon) heroIcon.textContent = mood.icon;
      const themeBadge = document.getElementById('welcomeThemeBadge');
      if (themeBadge) themeBadge.textContent = mood.badge;
      const subEl = document.getElementById('welcomeSubtitle');
      if (subEl) subEl.textContent = mood.sub;
      const gradeMeta = document.getElementById('welcomeGradeMeta');
      if (gradeMeta) gradeMeta.textContent = WELCOME_GRADE_META[state.grade] || WELCOME_GRADE_META['3-4'];
      const kicker = document.querySelector('.hero-kicker');
      if (kicker && THEMES[currentTheme]) {
        kicker.textContent = `우리 반 계기교육 · ${THEMES[currentTheme].label}`;
      }
    }
    const lessonSteps = {
      'tab-culture':['1 / 4','문화 이야기','그림 이야기를 읽고 문화를 살펴봐요.'],
      'tab-safety':['2 / 4','안전한 선택','여섯 가지 상황에서 안전한 행동을 골라요.'],
      'tab-costume':['3 / 4','배려하는 옷차림','옷과 소품을 살피고 친구와의 약속을 정해요.'],
      'tab-quiz':['4 / 4','생각 정리','배운 내용을 질문으로 확인해요.'],
      'tab-cert':['마무리','나의 배움 기록','오늘의 결과를 보고 안전 약속을 남겨요.']
    };
    const LESSON_PACEMAKER = {
      10: { 'tab-culture': '⏱️ 10분 코스 · 핵심 2분', 'tab-safety': '⏱️ 10분 코스 · 핵심 4분', 'tab-costume': '⏱️ 10분 코스 · 핵심 2분', 'tab-quiz': '⏱️ 10분 코스 · 핵심 2분', 'tab-cert': '⏱️ 10분 코스 · 마무리' },
      20: { 'tab-culture': '⏱️ 20분 코스 · 권장 5분', 'tab-safety': '⏱️ 20분 코스 · 권장 6분', 'tab-costume': '⏱️ 20분 코스 · 권장 4분', 'tab-quiz': '⏱️ 20분 코스 · 권장 3분', 'tab-cert': '⏱️ 20분 코스 · 권장 2분' },
      40: { 'tab-culture': '⏱️ 40분 코스 · 권장 10분', 'tab-safety': '⏱️ 40분 코스 · 권장 12분', 'tab-costume': '⏱️ 40분 코스 · 권장 8분', 'tab-quiz': '⏱️ 40분 코스 · 권장 5분', 'tab-cert': '⏱️ 40분 코스 · 권장 5분' }
    };
    function updateLessonPacemaker(tabId = state.activeTab) {
      const badge = document.getElementById('lessonPacemakerBadge');
      if (!badge) return;
      const mins = Number(state.teacher?.minutes) || 20;
      const map = LESSON_PACEMAKER[mins] || LESSON_PACEMAKER[20];
      badge.textContent = map[tabId] || `⏱️ ${mins}분 수업`;
    }
    function lessonStep(tabId) {
      if (tabId === 'tab-culture' && !isHalloweenTheme()) return ['1 / 4', `${THEMES[state.teacher.theme].label} 이야기`, '그림 이야기를 읽고 안전한 행동을 생각해요.'];
      return lessonSteps[tabId] || lessonSteps['tab-culture'];
    }
    function syncLessonStage() {
      const step = lessonStep(state.activeTab);
      document.getElementById('lessonStageTitle').textContent = step[1];
      document.getElementById('lessonStageHint').textContent = step[2];
      updateLessonPacemaker(state.activeTab);
    }
    function hasLessonProgress() {
      const initialTab = (state.teacher && state.teacher.start) || 'tab-culture';
      return state.activeTab !== initialTab ||
        state.storyIndex > 0 ||
        Object.keys(state.readStories || {}).length > 1 ||
        Object.values(state.themeStoryProgress || {}).some(progress => progress.storyIndex > 0 || Object.keys(progress.readStories || {}).length > 1) ||
        Object.values(state.stamps || {}).some(Boolean) ||
        Object.keys(state.completedScenarios || {}).length > 0 ||
        Object.keys(state.costumeChoices || {}).length > 0 ||
        state.quizIndex > 0 ||
        Object.keys(state.quizFirst || {}).length > 0 ||
        state.candyPoints > 0;
    }
    function updateStartLessonButtonLabel() {
      const hasProgress = hasLessonProgress();
      const startBtn = document.getElementById('btnStartLesson');
      const freshBtn = document.getElementById('btnStartFresh');
      if (startBtn) startBtn.textContent = hasProgress ? '이어서 시작하기 →' : '처음부터 시작하기 →';
      if (freshBtn) freshBtn.classList.toggle('hidden', !hasProgress);
    }
    function startFromBeginning() {
      stopSpeaking();
      stopSafetyGameLoop();
      const selectedGrade = state.grade;
      const startTab = (state.teacher && state.teacher.start) || 'tab-culture';
      state.sessionId = (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      state.gradeRecords = {};
      state.rewardLedger = {};
      state.candyPoints = 0;
      state.grade = selectedGrade;
      state.teacher.grade = selectedGrade;
      restoreGrade(selectedGrade);
      state.activeTab = startTab;
      safetyGame.running = false;
      safetyGame.won = false;
      safetyGame.paused = false;
      safetyGame.route = null;
      safetyGame.player = {x:42, y:210, r:13, targetX:null, targetY:null};
      safetyGame.hazards = [];
      saveProgress();
      renderAllLearning();
      enterLesson();
      switchTab(startTab);
    }
    function enterLesson() {
      document.body.classList.remove('lesson-not-started');
      try { sessionStorage.setItem('halloween-lesson-started', '1'); } catch (_) {}
      document.getElementById('lessonStageTitle').focus();
    }
    function returnToMainScreen() {
      stopSpeaking();
      pauseSafetyGame();
      document.body.classList.add('lesson-not-started');
      document.body.classList.remove('tools-open');
      document.getElementById('btnMoreTools').setAttribute('aria-expanded', 'false');
      try {
        sessionStorage.removeItem('halloween-lesson-started');
        sessionStorage.setItem('halloween-tools-open', 'false');
      } catch (_) {}
      syncWelcomeGrade();
      updateStartLessonButtonLabel();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function renderAllLearning() {
      document.querySelectorAll('.grade-btn').forEach(btn=>{
        const active=btn.dataset.grade===state.grade;
        btn.classList.toggle('grade-active',active);
        btn.setAttribute('aria-pressed',String(active));
      });
      syncWelcomeGrade();
      updateStartLessonButtonLabel();
      syncSpeechRateButton();
      renderStamps();renderCandyHeader();renderStorySlide();renderLanternWorkshop();
      renderScenario();renderThemeSituations();renderAvatarDressup();renderCostumeCards();
      renderEtiquetteChecklist();renderQuiz();renderTeacherSettings();
      [['certSchoolInput','school'],['certClassInput','className'],['certNameInput','name'],['certPledgeInput','pledge']].forEach(([id,key])=>{
        document.getElementById(id).value=state.profile[key]||'';
      });
      document.getElementById('avatarSafetyReason').value=state.avatarReason||'';
      document.getElementById('avatarReasonText').value=state.avatarReasonText||'';
      renderCertificateCanvas();renderLearningSummary();
      setCultureStage('story');
      switchTab(state.activeTab);
      resizeSafetyCanvas();renderGameChoices();
    }
    function startNewSession(kind) {
      stopSpeaking();stopSafetyGameLoop();
      if(preserveExistingProgress){
        try{
          const previous=localStorage.getItem(PROGRESS_KEY);
          if(previous)localStorage.setItem(`${PROGRESS_KEY}_preserved_${Date.now()}`,previous);
          preserveExistingProgress=false;
        }catch(e){state.storageAvailable=false;}
      }
      state.sessionId=(globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      state.gradeRecords={};state.rewardLedger={};state.candyPoints=0;
      state.profile={school:'',className:'',name:'',pledge:''};
      state.grade=state.teacher.grade;
      restoreGrade(state.grade);
      state.activeTab=state.teacher.start;
      safetyGame.running=false;safetyGame.won=false;safetyGame.paused=false;safetyGame.route=null;
      safetyGame.player={x:42,y:210,r:13,targetX:null,targetY:null};
      safetyGame.hazards=[];
      saveProgress();renderAllLearning();
      showToast(kind==='student'?'다음 학생의 새 회차를 시작했어요.':'새 수업 회차를 시작했어요.','🌱');
    }
    let focusBeforeModal=null;
    let activeModal=null;
    function openModal(modal) {
      pauseSafetyGame();stopSpeaking();
      focusBeforeModal=document.activeElement;
      activeModal=modal;
      modal.classList.remove('hidden');
      document.getElementById('appMainWrapper').inert=true;
      const first=modal.querySelector('button,select,input');if(first)first.focus();
    }
    function closeModal(modal) {
      modal.classList.add('hidden');
      if(activeModal===modal)activeModal=null;
      document.getElementById('appMainWrapper').inert=false;
      if(focusBeforeModal && focusBeforeModal.isConnected)focusBeforeModal.focus();
    }
    document.addEventListener('keydown',event=>{
      if(!activeModal)return;
      if(event.key==='Escape'){
        event.preventDefault();closeModal(activeModal);return;
      }
      if(event.key!=='Tab')return;
      const focusables=[...activeModal.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),a[href]')]
        .filter(element=>element.getClientRects().length);
      if(!focusables.length){event.preventDefault();return;}
      const first=focusables[0],last=focusables.at(-1);
      if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
    });
    function switchTab(tabId) {
      stopSpeaking();
      if (state.activeTab === 'tab-safety' && tabId !== 'tab-safety') pauseSafetyGame();
      state.activeTab = tabId;
      const step = lessonStep(tabId);
      document.getElementById('lessonStageNumber').textContent = step[0];
      document.getElementById('lessonStageTitle').textContent = step[1];
      document.getElementById('lessonStageHint').textContent = step[2];
      updateLessonPacemaker(tabId);
      document.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.id === tabId) {
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      });
      document.querySelectorAll(".nav-tab").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
          btn.classList.add("tab-active");
        } else {
          btn.classList.remove("tab-active");
        }
      });
      if (tabId === "tab-safety") {
        setTimeout(resizeSafetyCanvas, 50);
      } else {
        if (tabId === "tab-cert") {
          renderCertificateCanvas();
        }
      }
      saveProgress();
    }

    function switchGrade(gradeKey) {
      if (!EDUCATION_DATA[gradeKey]) return;
      if (gradeKey === state.grade) return;
      stopSpeaking();
      pauseSafetyGame();
      rememberGrade();
      state.grade = gradeKey;
      syncWelcomeGrade();
      state.teacher.grade = gradeKey;
      restoreGrade(gradeKey);
      saveProgress();

      document.querySelectorAll(".grade-btn").forEach(btn => {
        if (btn.getAttribute("data-grade") === gradeKey) {
          btn.classList.add("grade-active");
        } else {
          btn.classList.remove("grade-active");
        }
      });

      document.getElementById("certClassInput").value = EDUCATION_DATA[gradeKey].classDefault;
      setCultureStage('story');
      renderStorySlide();
      renderScenario();
      renderCostumeCards();
      renderEtiquetteChecklist();
      renderStamps();
      renderThemeSituations();
      renderQuiz();
      renderCertificateCanvas();
      drawSafetyGame();
      updateStartLessonButtonLabel();
    }

    // ==================== INITIALIZATION & EVENT LISTENERS ====================
    window.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.welcome-footnote, #safetyPlannerBox').forEach(el => el.remove());
      const offlineStatus=document.getElementById('offlineStatus');
      if ('serviceWorker' in navigator && (location.protocol === 'https:' || ['localhost','127.0.0.1'].includes(location.hostname))) {
        const hadSwController = Boolean(navigator.serviceWorker.controller);
        let swReloading = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (hadSwController && !swReloading && navigator.onLine !== false) {
            swReloading = true;
            location.reload();
          }
        });
        navigator.serviceWorker.register('./sw.js', {scope:'./', updateViaCache:'none'}).then(async reg=>{
          if (navigator.onLine !== false && reg && typeof reg.update === 'function') {
            reg.update().catch(()=>{});
          }
          const registration=await navigator.serviceWorker.ready;
          const prefix=`halloween-edu:${new URL(registration.scope).pathname}:`;
          const files=['index.html','halloween_edu_app.html','app.js','styles.css','manifest.json','icon.svg','404.html'];
          const names=(await caches.keys()).filter(name=>name.startsWith(prefix));
          for(const name of names){
            const cache=await caches.open(name);
            const found=await Promise.all(files.map(file=>cache.match(new URL(file,registration.scope).href)));
            if(found.every(Boolean)){
              offlineStatus.textContent='오프라인 사용 준비 완료';
              return;
            }
          }
          offlineStatus.textContent='오프라인 자료 준비 중';
        }).catch(()=>{offlineStatus.textContent='오프라인 자료를 준비하지 못했어요';});
      } else if(location.protocol==='file:') {
        offlineStatus.textContent='단독 파일 · 인터넷 없이 핵심 학습 가능';
      }
      loadSavedProgress();
      updateStartLessonButtonLabel();
      try { if (sessionStorage.getItem('halloween-lesson-started') === '1') document.body.classList.remove('lesson-not-started'); } catch (_) {}
      const sharedTeacher = teacherFromUrl();
      if (sharedTeacher) {
        state.teacher = sharedTeacher;
        if (state.grade !== sharedTeacher.grade) { rememberGrade(); state.grade = sharedTeacher.grade; restoreGrade(state.grade); }
        state.activeTab = sharedTeacher.start;
        saveProgress();
      }

      // Re-render exported artwork after the bundled Korean font is ready.
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          renderCertificateCanvas();
        }).catch(() => {});
      }

      // Fullscreen is requested only by the explicit button below.
      document.addEventListener("fullscreenchange", updateFullscreenButtonLabel);
      document.addEventListener("webkitfullscreenchange", updateFullscreenButtonLabel);

      // Fullscreen toggle button
      document.getElementById("btnFullscreen").addEventListener("click", () => {
        playSound("click");
        toggleFullscreen();
      });

      // Candy Point Badge click celebration
      document.getElementById("btnCandyPointPop").addEventListener("click", () => {
        playSound("stamp");
        burstCandyConfetti(14);
        showToast(`현재 사탕 점수: ${state.candyPoints}점 (${getLevelTitle(state.candyPoints)})`, "🍭");
      });

      // Fun Story Emoji tap reaction + Hidden Clue discovery
      document.getElementById("btnTapStoryEmoji").addEventListener("click", () => {
        playSound("correct");
        burstCandyConfetti(8);
        const storyIndex = storyProgress().storyIndex;
        storyClueOpened[storyKey(storyIndex)] = true;
        const artEl = document.getElementById("storyEmojiGraphic");
        if (artEl) {
          artEl.classList.remove("story-art-pop");
          void artEl.offsetWidth;
          artEl.classList.add("story-art-pop");
        }
        const clueBox = document.getElementById("storyClueBox");
        if (clueBox) clueBox.textContent = getStoryClues()[storyIndex];
      });

      // Jack-o'-Lantern Workshop Listeners
      document.querySelectorAll(".lantern-eye-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.lantern.eye = btn.getAttribute("data-eye");
          playSound("click");
          renderLanternWorkshop();
        });
      });
      document.querySelectorAll(".lantern-mouth-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.lantern.mouth = btn.getAttribute("data-mouth");
          playSound("click");
          renderLanternWorkshop();
        });
      });
      document.querySelectorAll(".lantern-hat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.lantern.hat = btn.getAttribute("data-hat");
          playSound("click");
          renderLanternWorkshop();
        });
      });
      document.getElementById("btnToggleLanternLight").addEventListener("click", () => {
        state.lantern.lit = !state.lantern.lit;
        if (state.lantern.lit) {
          playSound("stamp");
          burstCandyConfetti(18);
          if (!state.lantern.rewarded) {
            state.lantern.rewarded = true;
            awardOnce('lantern:lit', 'on', 30, "나만의 잭오랜턴 등불 켜기");
          } else {
            showToast("잭오랜턴 등불이 반짝반짝 켜졌어요!", "🕯️");
          }
        } else {
          playSound("click");
        }
        renderLanternWorkshop();
      });

      // Exit button & modal handlers
      const exitModal = document.getElementById("exitModal");
      const exitScreen = document.getElementById("exitScreen");
      document.getElementById("btnExitApp").addEventListener("click", () => {
        playSound("click");
        const count = Object.values(state.stamps).filter(Boolean).length;
        document.getElementById("exitStampSummaryText").textContent = `오늘 살펴본 활동: ${count}/4개`;
        openModal(exitModal);
      });
      document.getElementById("btnCancelExit").addEventListener("click", () => {
        closeModal(exitModal);
      });
      document.getElementById("btnConfirmExit").addEventListener("click", () => {
        stopSpeaking();
        stopSafetyGameLoop();
        exitAppFullscreen();
        closeModal(exitModal);
        exitScreen.classList.remove("hidden");
        try {
          window.close();
        } catch (e) {
          // Fallback to exitScreen already visible
        }
      });
      document.getElementById("btnRelaunchApp").addEventListener("click", () => {
        playSound("stamp");
        exitScreen.classList.add("hidden");
        if (state.activeTab === "tab-safety") {
          setTimeout(resizeSafetyCanvas, 50);
        }
      });

      document.querySelectorAll(".grade-btn").forEach(btn => {
        if (btn.getAttribute("data-grade") === state.grade) {
          btn.classList.add("grade-active");
        } else {
          btn.classList.remove("grade-active");
        }
        btn.addEventListener("click", () => {
          playSound("click");
          switchGrade(btn.getAttribute("data-grade"));
        });
      });
      document.querySelectorAll('[data-welcome-grade]').forEach(button => button.addEventListener('click', () => switchGrade(button.dataset.welcomeGrade)));
      document.querySelectorAll('[data-welcome-theme]').forEach(button => {
        button.addEventListener('click', () => {
          const themeKey = button.dataset.welcomeTheme;
          if (!THEMES[themeKey]) return;
          state.teacher.theme = themeKey;
          const themeSelect = document.getElementById('teacherTheme');
          if (themeSelect) themeSelect.value = themeKey;
          setCultureStage('story');
          syncWelcomeGrade();
          renderStorySlide();
          renderLanternWorkshop();
          syncLessonStage();
          renderScenario();
          renderThemeSituations();
          drawSafetyGame();
          renderLearningSummary();
          renderCertificateCanvas();
          saveProgress();
        });
      });
      let classTimerInterval = null;
      let classTimerHideTimeout = null;
      let pickedPresenterNumbers = [];
      const btnClassTimer = document.getElementById('btnClassTimer');
      const classTimerBanner = document.getElementById('classTimerBanner');
      function renderClassTimerBannerContent(messageText, buttonText = '🎲 발표 번호 뽑기') {
        if (!classTimerBanner) return;
        classTimerBanner.replaceChildren();
        const wrap = document.createElement('div');
        wrap.className = 'flex flex-wrap items-center justify-center gap-2';
        const span = document.createElement('span');
        span.id = 'classTimerMessage';
        span.textContent = messageText;
        const pickBtn = document.createElement('button');
        pickBtn.type = 'button';
        pickBtn.id = 'btnPickPresenter';
        pickBtn.className = 'mini-chip text-xs';
        pickBtn.textContent = buttonText;
        pickBtn.addEventListener('click', () => {
          if (classTimerInterval) {
            clearInterval(classTimerInterval);
            classTimerInterval = null;
            if (btnClassTimer) btnClassTimer.textContent = '⏱️ 5초 투표';
          }
          if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
          const totalStudents = 25;
          if (pickedPresenterNumbers.length >= totalStudents) pickedPresenterNumbers = [];
          const available = [];
          for (let n = 1; n <= totalStudents; n++) {
            if (!pickedPresenterNumbers.includes(n)) available.push(n);
          }
          const chosen = available[Math.floor(Math.random() * available.length)] || 1;
          pickedPresenterNumbers.push(chosen);
          playSound('stamp');
          burstCandyConfetti(10);
          renderClassTimerBannerContent(`🎉 발표 당첨: ${chosen}번 친구! 선택한 번호와 이유를 들려주세요!`, '🎲 다른 번호 뽑기');
          classTimerHideTimeout = setTimeout(() => {
            classTimerBanner.classList.add('hidden');
          }, 8000);
        });
        wrap.appendChild(span);
        wrap.appendChild(pickBtn);
        classTimerBanner.appendChild(wrap);
      }
      if (btnClassTimer && classTimerBanner) {
        btnClassTimer.addEventListener('click', () => {
          if (classTimerInterval) {
            clearInterval(classTimerInterval);
            classTimerInterval = null;
            if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
            classTimerBanner.classList.add('hidden');
            btnClassTimer.textContent = '⏱️ 5초 투표';
            playSound('click');
            return;
          }
          if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
          let remaining = 5;
          classTimerBanner.classList.remove('hidden');
          renderClassTimerBannerContent(`⏱️ 생각 시간 ${remaining}초 · 손가락(1번·2번)으로 정답 번호를 준비해요!`);
          btnClassTimer.textContent = `⏱️ ${remaining}초`;
          playSound('click');
          classTimerInterval = setInterval(() => {
            remaining--;
            if (remaining > 0) {
              playSound('click');
              renderClassTimerBannerContent(`⏱️ 생각 시간 ${remaining}초 · 마음속으로 번호를 골라 보세요!`);
              btnClassTimer.textContent = `⏱️ ${remaining}초`;
            } else {
              clearInterval(classTimerInterval);
              classTimerInterval = null;
              playSound('correct');
              renderClassTimerBannerContent('✋ 하나, 둘, 셋! 손가락으로 정답 번호를 들어 주세요!');
              btnClassTimer.textContent = '⏱️ 5초 투표';
              classTimerHideTimeout = setTimeout(() => {
                classTimerBanner.classList.add('hidden');
              }, 6000);
            }
          }, 1000);
        });
      }
      document.getElementById('btnHomeLogo').addEventListener('click', () => {
        playSound('click');
        returnToMainScreen();
      });
      document.getElementById('btnStartLesson').addEventListener('click', () => {
        enterLesson();
        switchTab(state.activeTab || 'tab-culture');
      });
      const btnStartFresh = document.getElementById('btnStartFresh');
      if (btnStartFresh) {
        btnStartFresh.addEventListener('click', () => {
          playSound('click');
          startFromBeginning();
        });
      }
      const lessonStageInfo = document.getElementById('lessonStageInfo');
      if (lessonStageInfo) {
        lessonStageInfo.addEventListener('click', () => document.getElementById('btnMoreTools').click());
      }
      const btnSpotlightMode = document.getElementById('btnSpotlightMode');
      if (btnSpotlightMode) {
        btnSpotlightMode.addEventListener('click', () => {
          const active = document.body.classList.toggle('spotlight-mode');
          btnSpotlightMode.setAttribute('aria-pressed', String(active));
          btnSpotlightMode.textContent = active ? '🎯 기본 화면' : '🎯 집중 확대';
          playSound('click');
          showToast(active ? '전자칠판 집중 확대 모드가 켜졌어요!' : '기본 수업 화면으로 돌아왔어요.', '🎯');
        });
      }
      const btnSpeechRate = document.getElementById('btnSpeechRate');
      if (btnSpeechRate) {
        btnSpeechRate.addEventListener('click', () => {
          state.speechSlow = !state.speechSlow;
          syncSpeechRateButton();
          playSound('click');
          showToast(state.speechSlow ? '음성 읽기 속도를 천천히(0.8x)로 맞췄어요.' : '음성 읽기 속도를 보통 속도로 맞췄어요.', '🐢');
        });
      }
      document.getElementById('btnMoreTools').addEventListener('click', () => {
        const open = document.body.classList.toggle('tools-open');
        document.getElementById('btnMoreTools').setAttribute('aria-expanded', String(open));
        try { sessionStorage.setItem('halloween-tools-open', String(open)); } catch (_) {}
      });
      try {
        if (sessionStorage.getItem('halloween-tools-open') === 'true') {
          document.body.classList.add('tools-open');
          document.getElementById('btnMoreTools').setAttribute('aria-expanded', 'true');
        }
      } catch (_) {}
      [['btnToggleSafetyGame','optionalSafetyGame'],['btnToggleAvatar','avatarDressupCard']].forEach(([buttonId,cardId]) => {
        const button=document.getElementById(buttonId);
        button.addEventListener('click', () => {
          const open=document.getElementById(cardId).classList.toggle('is-open');
          button.setAttribute('aria-expanded', String(open));
          if(open && cardId==='optionalSafetyGame') setTimeout(resizeSafetyCanvas, 50);
        });
      });
      document.getElementById('btnOptionalCraft').addEventListener('click', () => setCultureStage('craft', true));
      const btnThemeCraft = document.getElementById('btnThemeCraft');
      if (btnThemeCraft) {
        btnThemeCraft.addEventListener('click', () => {
          playSound('click');
          renderLanternWorkshop();
          setCultureStage('craft', true);
        });
      }
      const btnEchoRead = document.getElementById('btnEchoRead');
      if (btnEchoRead) {
        btnEchoRead.addEventListener('click', () => {
          const progress = storyProgress();
          const current = getStories()[progress.storyIndex];
          const echoStatus = document.getElementById('storyEchoStatus');
          if (!current || !echoStatus) return;
          if (echoReadTimer) { clearInterval(echoReadTimer); echoReadTimer = null; }
          playSound('click');
          speakText(current.keyPoint);
          let beat = 3;
          echoStatus.classList.remove('hidden');
          echoStatus.textContent = `🗣️ 다 함께 큰 소리로 따라 읽어요: "${current.keyPoint}" (👏 ${beat})`;
          echoReadTimer = setInterval(() => {
            beat--;
            if (beat > 0) {
              playSound('click');
              echoStatus.textContent = `🗣️ 다 함께 큰 소리로 따라 읽어요: "${current.keyPoint}" (👏 ${beat})`;
            } else {
              clearInterval(echoReadTimer);
              echoReadTimer = null;
              playSound('correct');
              echoStatus.textContent = `🌟 우리 반 한목소리 따라 읽기 성공! "${current.keyPoint}"`;
              awardOnce(storyRewardId(progress.storyIndex), 'echo', 10, '핵심 문장 따라 읽기');
            }
          }, 900);
        });
      }
      document.getElementById('btnToQuiz').addEventListener('click', () => switchTab('tab-quiz'));
      const btnCostumeFocusMode = document.getElementById('btnCostumeFocusMode');
      if (btnCostumeFocusMode) {
        btnCostumeFocusMode.addEventListener('click', () => {
          costumeFocusMode = !costumeFocusMode;
          costumePage = 0;
          playSound('click');
          renderCostumeCards();
        });
      }
      document.getElementById('btnPrevCostumePage').addEventListener('click', () => { costumePage=Math.max(0,costumePage-1);renderCostumeCards(); });
      document.getElementById('btnNextCostumePage').addEventListener('click', () => {
        const perPage = costumeFocusMode ? 1 : 4;
        costumePage=Math.min(Math.ceil(COSTUME_ITEMS.length/perPage)-1,costumePage+1);
        renderCostumeCards();
      });

      document.querySelectorAll(".nav-tab").forEach(btn => {
        btn.addEventListener("click", () => {
          playSound("click");
          switchTab(btn.getAttribute("data-tab"));
        });
      });

      document.getElementById("btnBoardMode").addEventListener("click", () => {
        state.boardMode = !state.boardMode;
        document.documentElement.classList.toggle("board-mode", state.boardMode);
        document.getElementById("boardModeLabel").textContent = state.boardMode ? "원래 크기" : "글자 확대";
        document.getElementById("btnBoardMode").setAttribute("aria-pressed", String(state.boardMode));
        document.getElementById("btnBoardMode").title = state.boardMode ? "원래 크기로" : "글자 확대";
        playSound("click");
        showToast(state.boardMode ? "글씨가 큼직해졌어요!" : "기본 글씨 크기로 돌아왔어요.", "🔍");
      });

      document.getElementById("btnSoundToggle").addEventListener("click", () => {
        state.soundOn = !state.soundOn;
        if (!state.soundOn) stopSpeaking();
        document.getElementById("soundIcon").textContent = state.soundOn ? "🔊" : "🔇";
        document.getElementById("soundLabel").textContent = state.soundOn ? "소리 ON" : "꺼짐";
        if (state.soundOn) playSound("correct");
      });

      const teacherModal = document.getElementById("teacherModal");
      ["btnTeacherGuide", "btnWelcomeGuide"].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.addEventListener("click", () => {
            playSound("click");
            renderTeacherSettings();
            openModal(teacherModal);
          });
        }
      });
      document.getElementById("btnCloseTeacherModal").addEventListener("click", () => {
        closeModal(teacherModal);
      });
      document.getElementById('btnApplyTeacher').addEventListener('click', () => {applyTeacherSettings();closeModal(teacherModal);});
      document.getElementById('btnNextStudent').addEventListener('click', () => {closeModal(teacherModal);startNewSession('student');});
      document.getElementById('teacherMinutes').addEventListener('change',e=>{document.getElementById('teacherPlan').textContent=LESSON_PLANS[e.target.value];});
      document.getElementById('teacherTheme').addEventListener('change',e=>{
        const required=defaultRequiredFor(e.target.value, Number(document.getElementById('teacherMinutes').value));
        document.querySelectorAll('.teacherRequired').forEach(input=>{input.checked=required.includes(input.value);});
      });
      document.querySelectorAll('.teacher-preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const preset = btn.dataset.teacherPreset;
          document.querySelectorAll('.teacher-preset-btn').forEach(b => b.classList.toggle('is-picked', b === btn));
          if (preset === 'morning10') {
            document.getElementById('teacherMinutes').value = '10';
            document.getElementById('teacherMode').value = 'together';
            document.getElementById('teacherDirection').value = 'safety';
            document.getElementById('teacherStart').value = 'tab-safety';
            document.getElementById('teacherOrder').value = 'safety,quiz,costume,culture';
            document.querySelectorAll('.teacherRequired').forEach(input => {
              input.checked = ['safety', 'quiz'].includes(input.value);
            });
          } else if (preset === 'field20') {
            document.getElementById('teacherMinutes').value = '20';
            document.getElementById('teacherMode').value = 'together';
            document.getElementById('teacherDirection').value = 'safety';
            if (document.getElementById('teacherTheme').value === 'halloween') {
              document.getElementById('teacherTheme').value = 'field';
            }
            document.getElementById('teacherStart').value = 'tab-culture';
            document.getElementById('teacherOrder').value = 'culture,safety,costume,quiz';
            document.querySelectorAll('.teacherRequired').forEach(input => {
              input.checked = ['culture', 'safety', 'quiz'].includes(input.value);
            });
          } else if (preset === 'full40') {
            document.getElementById('teacherMinutes').value = '40';
            document.getElementById('teacherMode').value = 'together';
            document.getElementById('teacherDirection').value = 'all';
            document.getElementById('teacherTheme').value = 'halloween';
            document.getElementById('teacherStart').value = 'tab-culture';
            document.getElementById('teacherOrder').value = 'culture,safety,costume,quiz';
            document.querySelectorAll('.teacherRequired').forEach(input => {
              input.checked = true;
            });
          }
          document.getElementById('teacherPlan').textContent = LESSON_PLANS[document.getElementById('teacherMinutes').value];
          playSound('click');
          showToast('수업 프리셋이 채워졌어요! [수업 설정 적용]을 누르면 시작됩니다.', '⚡');
        });
      });
      function copyTextWithToast(text, successMsg) {
        const input = document.getElementById("shareUrlInput");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => showToast(successMsg, "📋")).catch(() => {
            const prev = input.value; input.value = text; input.select();
            try { document.execCommand("copy"); showToast(successMsg, "📋"); } catch (e) { showToast("직접 복사해 주세요.", "ℹ️"); }
            input.value = prev;
          });
        } else {
          const prev = input.value; input.value = text; input.select();
          try { document.execCommand("copy"); showToast(successMsg, "📋"); } catch (e) { showToast("직접 복사해 주세요.", "ℹ️"); }
          input.value = prev;
        }
      }
      const btnCopyNotice = document.getElementById("btnCopyNoticeText");
      if (btnCopyNotice) {
        btnCopyNotice.addEventListener("click", () => {
          const urlText = document.getElementById("shareUrlInput").value || window.location.href;
          copyTextWithToast(`[할로윈 안전 놀이터] 이야기를 읽고 안전한 선택을 배우는 활동이에요. 아래 링크를 눌러 시작해 보세요! 👉 ${urlText}`, "알림장 안내 문구가 복사되었어요!");
        });
      }
      const btnCopyNeis = document.getElementById("btnCopyNeisText");
      if (btnCopyNeis) {
        btnCopyNeis.addEventListener("click", () => {
          copyTextWithToast("다중밀집 환경 보행 안전(우측통행, 비상구 확인, 압사 예방 자세) 및 타 문화 이해·배려하는 복장 안전 계기교육 실시", "수업일지(NEIS) 문구가 복사되었어요!");
        });
      }
      const btnPrintWorksheet = document.getElementById("btnPrintWorksheet");
      if (btnPrintWorksheet) {
        btnPrintWorksheet.addEventListener("click", () => {
          playSound("click");
          const image = document.getElementById("printResultImage");
          if (image) {
            image.src = drawWorksheetCanvas().toDataURL("image/png");
            window.print();
          }
        });
      }
      const btnAutoRead = document.getElementById("btnAutoRead");
      if (btnAutoRead) {
        btnAutoRead.addEventListener("click", () => {
          state.autoRead = !state.autoRead;
          syncAutoReadButtons();
          playSound("click");
          if (state.autoRead) autoSpeakIfEnabled(storySpeechText()); else {
            stopSpeaking();
          }
        });
      }
      document.getElementById("btnCopyShareUrl").addEventListener("click", () => {
        const input = document.getElementById("shareUrlInput");
        const urlText = input.value || window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(urlText).then(() => {
            showToast("주소가 복사되었어요!", "📋");
          }).catch(() => {
            input.select();
            try {
              document.execCommand("copy");
              showToast("주소가 복사되었어요!", "📋");
            } catch (e) {
              showToast("주소창의 URL을 직접 복사해 주세요.", "ℹ️");
            }
          });
        } else {
          input.select();
          try {
            document.execCommand("copy");
            showToast("주소가 복사되었어요!", "📋");
          } catch (e) {
            showToast("주소창의 URL을 직접 복사해 주세요.", "ℹ️");
          }
        }
      });

      const resetModal = document.getElementById("resetModal");
      document.getElementById("btnResetProgress").addEventListener("click", () => {
        openModal(resetModal);
      });
      document.getElementById("btnCancelReset").addEventListener("click", () => {
        closeModal(resetModal);
      });
      document.getElementById("btnConfirmReset").addEventListener("click", () => {
        closeModal(resetModal);startNewSession('lesson');
      });

      document.getElementById("btnSpeakStory").addEventListener("click", toggleSpeakCurrentStory);
      document.getElementById('btnSpeakScenario').addEventListener('click', () => {
        const goal=SAFETY_GOALS[state.scenarioIndex];
        const check=goal.checks[state.grade];
        const title=document.getElementById('scenarioTitle').textContent;
        const desc=document.getElementById('scenarioDesc').textContent;
        const options=[...document.querySelectorAll('#scenarioChoices button')].map(button=>button.textContent.trim()).join('. ');
        speakText(`${title}. ${desc}. ${options}. 다시 확인하기. ${check[0]}. ${check[1].map((option,i)=>`${i+1}번. ${option}`).join('. ')}`);
      });
      document.getElementById('btnSpeakSafetyFeedback').addEventListener('click',()=>{
        speakText(document.getElementById('scenarioFeedbackBox').textContent);
      });
      document.getElementById("btnPrevStory").addEventListener("click", () => {
        const progress = storyProgress();
        if (progress.storyIndex > 0) {
          progress.storyIndex--;
          progress.readStories[progress.storyIndex] = true;
          playSound("click");
          renderStorySlide();
          autoSpeakIfEnabled(storySpeechText());
        }
      });
      document.getElementById("btnNextStory").addEventListener("click", () => {
        const progress = storyProgress();
        if (progress.storyIndex < getStories().length - 1) {
          const nextIdx = progress.storyIndex + 1;
          const isNew = !progress.readStories[nextIdx];
          progress.storyIndex = nextIdx;
          progress.readStories[nextIdx] = true;
          if (isNew) awardOnce(storyRewardId(nextIdx), 'read', 10, "이야기 카드 읽기");
          playSound("click");
          renderStorySlide();
          autoSpeakIfEnabled(storySpeechText());
        } else if (isHalloweenTheme()) {
          setCultureStage('compare', true);
        } else {
          switchTab('tab-safety');
        }
      });

      document.querySelectorAll('[data-culture-step]').forEach(button => {
        button.addEventListener('click', () => setCultureStage(button.dataset.cultureStep, true));
      });
      document.getElementById('btnToCompare').addEventListener('click', () => setCultureStage(isHalloweenTheme() ? 'compare' : 'story', true));
      document.getElementById('btnToSafety').addEventListener('click', () => switchTab('tab-safety'));

      document.querySelectorAll(".festival-card").forEach(card => {
        card.addEventListener("click", () => {
          playSound("click");
          document.querySelectorAll(".festival-card").forEach(c => c.classList.remove("ring-2", "ring-amber-400"));
          card.classList.add("ring-2", "ring-amber-400");
          const key = card.getAttribute("data-festival");
          if (FESTIVAL_DETAILS[key]) {
            document.getElementById("festivalCompareTitle").textContent = FESTIVAL_DETAILS[key].title;
            document.getElementById("festivalCompareDesc").textContent = FESTIVAL_DETAILS[key].desc;
            document.getElementById('festivalCompareQuestion').textContent = FESTIVAL_DETAILS[key].question;
            const link = document.getElementById('festivalSourceLink');
            link.href = FESTIVAL_DETAILS[key].sourceUrl;
            link.textContent = `자료: ${FESTIVAL_DETAILS[key].sourceText} ↗`;
            renderFestivalQuiz(key);
          }
        });
      });

      document.getElementById("btnPrevScenario").addEventListener("click", () => {
        if (state.scenarioIndex > 0) {
          state.scenarioIndex--;
          playSound("click");
          renderScenario();
        }
      });
      document.getElementById("btnNextScenario").addEventListener("click", () => {
        if (state.scenarioIndex < SAFETY_SCENARIOS.length - 1) {
          state.scenarioIndex++;
        } else {
          switchTab('tab-costume');
          return;
        }
        playSound("click");
        renderScenario();
      });

      // Mini-game Stage Selector, Touch-to-Move & Chest Guard Booster
      document.querySelectorAll(".game-stage-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.gameStage = parseInt(btn.getAttribute("data-stage"), 10) || 1;
          syncStageButtons();
          playSound("click");
          initSafetyGame();
          saveProgress();
        });
      });

      document.getElementById("btnStartCanvasGame").addEventListener("click", () => {
        playSound("click");
        if (safetyGame.paused) resumeSafetyGame();
        else if (safetyGame.running) pauseSafetyGame();
        else { if (safetyGame.won && state.gameStage < 3) state.gameStage++; initSafetyGame(); }
      });
      document.getElementById("btnChestGuardBoost").addEventListener("click", activateChestGuardBoost);

      const gameCanvas = document.getElementById("safetyGameCanvas");
      let canvasPointerDown = false;
      function updateCanvasTargetFromPointer(e) {
        if (!safetyGame.running || safetyGame.paused || safetyGame.route !== 'wide') return;
        const rect = gameCanvas.getBoundingClientRect();
        const scaleX = gameCanvas.width / rect.width;
        const scaleY = gameCanvas.height / rect.height;
        safetyGame.player.targetX = Math.max(20, Math.min(gameCanvas.width - 20, (e.clientX - rect.left) * scaleX));
        safetyGame.player.targetY = Math.max(20, Math.min(gameCanvas.height - 20, (e.clientY - rect.top) * scaleY));
      }
      gameCanvas.addEventListener("pointerdown", e => {
        canvasPointerDown = true;
        gameCanvas.focus();
        updateCanvasTargetFromPointer(e);
        playSound("click");
      });
      gameCanvas.addEventListener("pointermove", e => {
        if (!canvasPointerDown) return;
        updateCanvasTargetFromPointer(e);
      });
      window.addEventListener("pointerup", () => { canvasPointerDown = false; });
      window.addEventListener("pointercancel", () => { canvasPointerDown = false; });

      const dpadKeyMap = { up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight" };
      document.querySelectorAll(".game-dpad-btn").forEach(btn => {
        const key = dpadKeyMap[btn.getAttribute("data-dir")];
        btn.addEventListener("click", () => {
          movePlayer(btn.getAttribute("data-dir"));
        });
        if (key) {
          btn.addEventListener("pointerdown", () => safetyGame.keys.add(key));
          ["pointerup", "pointerleave", "pointercancel"].forEach(evt => {
            btn.addEventListener(evt, () => safetyGame.keys.delete(key));
          });
        }
      });
      window.addEventListener("keydown", e => {
        if (state.activeTab !== 'tab-safety' || document.activeElement !== gameCanvas || document.querySelector('[role="dialog"]:not(.hidden)')) return;
        if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); safetyGame.keys.add(e.key); }
      });
      window.addEventListener('keyup', e => safetyGame.keys.delete(e.key));
      window.addEventListener("keydown", e => {
        if (document.body.classList.contains("lesson-not-started")) return;
        if (document.querySelector('[role="dialog"]:not(.hidden), .ysi-back, .yq-back')) return;
        const active = document.activeElement;
        if (active && (active === gameCanvas || ["INPUT", "SELECT", "TEXTAREA"].includes(active.tagName))) return;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        if (e.key === "ArrowRight" || e.key === "PageDown") {
          if (state.activeTab === "tab-culture" && cultureStage === "story") { e.preventDefault(); document.getElementById("btnNextStory").click(); }
          else if (state.activeTab === "tab-safety") { e.preventDefault(); document.getElementById("btnNextScenario").click(); }
          else if (state.activeTab === "tab-costume" && !document.getElementById("btnNextCostumePage").disabled) { e.preventDefault(); document.getElementById("btnNextCostumePage").click(); }
          else if (state.activeTab === "tab-quiz" && !document.getElementById("btnNextQuizQuestion").classList.contains("hidden")) { e.preventDefault(); document.getElementById("btnNextQuizQuestion").click(); }
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
          if (state.activeTab === "tab-culture" && cultureStage === "story" && !document.getElementById("btnPrevStory").disabled) { e.preventDefault(); document.getElementById("btnPrevStory").click(); }
          else if (state.activeTab === "tab-safety" && !document.getElementById("btnPrevScenario").disabled) { e.preventDefault(); document.getElementById("btnPrevScenario").click(); }
          else if (state.activeTab === "tab-costume" && !document.getElementById("btnPrevCostumePage").disabled) { e.preventDefault(); document.getElementById("btnPrevCostumePage").click(); }
        } else if (["1", "2", "3", "4"].includes(e.key)) {
          const idx = Number(e.key) - 1;
          if (state.activeTab === "tab-culture") {
            const btns = cultureStage === "compare"
              ? document.querySelectorAll("#festivalQuizBox button")
              : document.querySelectorAll("#storyPollBox button");
            if (btns[idx]) { e.preventDefault(); btns[idx].click(); }
          } else if (state.activeTab === "tab-safety") {
            const goal = SAFETY_GOALS[state.scenarioIndex];
            const followupBtns = document.querySelectorAll("#safetyFollowup button:not([disabled])");
            const scenarioBtns = document.querySelectorAll("#scenarioChoices button");
            if (state.completedScenarios[state.scenarioIndex] && !state.safetyConfirmed[goal.id] && followupBtns[idx]) {
              e.preventDefault();
              followupBtns[idx].click();
            } else if (scenarioBtns[idx]) {
              e.preventDefault();
              scenarioBtns[idx].click();
            }
          } else if (state.activeTab === "tab-quiz") {
            const quizBtns = document.querySelectorAll("#quizOptionsContainer .quiz-opt-btn:not([disabled])");
            const targetBtn = [...document.querySelectorAll("#quizOptionsContainer .quiz-opt-btn")][idx];
            if (targetBtn && !targetBtn.disabled && quizBtns.length) {
              e.preventDefault();
              targetBtn.click();
            }
          }
        } else if (e.key === "s" || e.key === "S") {
          if (state.activeTab === "tab-culture") { e.preventDefault(); document.getElementById("btnSpeakStory")?.click(); }
          else if (state.activeTab === "tab-safety") { e.preventDefault(); document.getElementById("btnSpeakScenario")?.click(); }
          else if (state.activeTab === "tab-quiz") { e.preventDefault(); document.getElementById("btnSpeakQuiz")?.click(); }
        } else if (e.key === "t" || e.key === "T") {
          e.preventDefault();
          document.getElementById("btnClassTimer")?.click();
        }
      });
      document.addEventListener('visibilitychange', () => {if(document.hidden) pauseSafetyGame();});
      window.addEventListener("resize", () => {
        if (state.activeTab === "tab-safety") resizeSafetyCanvas();
      });

      // Avatar Dress-Up Studio Listeners
      document.querySelectorAll(".avatar-char-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.avatar.char = btn.getAttribute("data-char");
          playSound("click");
          renderAvatarDressup();
        });
      });
      document.querySelectorAll(".avatar-costume-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.avatar.costume = btn.getAttribute("data-costume");
          state.certSticker = state.avatar.costume;
          playSound("click");
          renderAvatarDressup();
          renderCertificateCanvas();
        });
      });
      document.querySelectorAll(".avatar-prop-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.avatar.prop = btn.getAttribute("data-prop");
          playSound("click");
          renderAvatarDressup();
        });
      });
      const nightBtn = document.getElementById("btnNightLightTest");
      if (nightBtn) {
        nightBtn.addEventListener("click", () => {
          const stageEl = document.getElementById("avatarRunwayStage");
          const isNight = stageEl.classList.toggle("night-stage-active");
          playSound("click");
          nightBtn.textContent = isNight ? "☀️ 밝은 조명으로 돌아가기" : "🌙 밤길 야광 반사 테스트";
          document.getElementById("avatarJudgeText").textContent = isNight
            ? "✨ 어두운 밤길에서도 야광 소품과 밝은 의상이 반짝반짝 잘 보여요!"
            : "시야 확보 OK! 밤길 안전 반사 OK!";
          renderAvatarDressup();
        });
      }
      document.getElementById("btnRunwayShow").addEventListener("click", () => {
        if (!state.avatarReason) { showToast('시야·움직임·소품·친구 배려 중 안전한 이유를 먼저 골라요.','🔎'); return; }
        const group = document.getElementById("avatarVisualGroup");
        group.classList.remove("runway-anim");
        void group.offsetWidth;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) group.classList.add("runway-anim");
        playSound("stamp");
        document.getElementById("avatarJudgeText").textContent = `내 선택: ${state.avatarReasonText || REASON_LABELS[state.avatarReason]}. 실제 이동할 때도 시야와 움직임을 확인해요.`;
        state.avatar.runwayRewarded=true;
        awardOnce('avatar:runway','reason',20,'꾸미기 이유 설명');
        saveProgress();
      });
      document.getElementById('avatarSafetyReason').addEventListener('change',e=>{state.avatarReason=e.target.value;saveProgress();renderAvatarDressup();});
      document.getElementById('avatarReasonText').addEventListener('input',e=>{state.avatarReasonText=e.target.value.slice(0,120);saveProgress();});

      document.getElementById("btnResetCostume").addEventListener("click", () => {
        state.costumeChoices = {};
        playSound("click");
        saveProgress();
        renderCostumeCards();
      });

      // Quiz Lifelines & Next Button
      document.getElementById('btnSpeakQuiz').addEventListener('click', () => {
        const index=currentQuizIndex();
        if(index===undefined)return;
        const q=EDUCATION_DATA[state.grade].quizzes[index];
        const order=quizOrder(index);
        speakText(`${q.q}. ${order.map((original,i)=>`${i+1}번. ${q.options[original]}`).join('. ')}`);
      });
      document.getElementById('btnSpeakQuizFeedback').addEventListener('click',()=>{
        speakText(document.getElementById('quizExplanationBox').textContent);
      });
      document.getElementById("btnQuizHint").addEventListener("click", () => {
        state.quizHints[quizQuestionId(currentQuizIndex())] = true;
        saveProgress();
        renderQuiz();
        playSound("click");
      });
      document.getElementById("btnQuizFifty").addEventListener("click", () => {
        const id = quizQuestionId(currentQuizIndex());
        if (state.quizFiftyUsed || EDUCATION_DATA[state.grade].quizzes[currentQuizIndex()].options.length <= 2) return;
        state.quizFiftyUsed = true;
        state.quizFifties[id] = true;
        playSound("correct");
        saveProgress();
        renderQuiz();
        showToast("50:50 찬스! 헷갈리는 오답 2개를 지웠어요!", "🔀");
      });

      document.getElementById("btnNextQuizQuestion").addEventListener("click", () => {
        state.quizIndex++;
        saveProgress();
        playSound("click");
        renderQuiz();
      });
      document.getElementById("btnRestartQuiz").addEventListener("click", () => {
        playSound("click");
        startQuizReview(false);
      });
      document.getElementById('btnReviewQuiz').addEventListener('click', () => startQuizReview(true));
      document.getElementById("btnGoToCertFromQuiz").addEventListener("click", () => {
        playSound("click");
        switchTab("tab-cert");
      });

      // Certificate Customizers
      document.querySelectorAll(".cert-theme-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.certTheme = btn.getAttribute("data-theme");
          playSound("click");
          renderCertificateCanvas();
        });
      });
      document.querySelectorAll(".cert-sticker-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          state.certSticker = btn.getAttribute("data-sticker");
          playSound("click");
          renderCertificateCanvas();
        });
      });

      [['certSchoolInput','school'],['certClassInput','className'],['certNameInput','name'],['certPledgeInput','pledge']].forEach(([id,key]) => {
        document.getElementById(id).addEventListener('input',event=>{
          state.profile[key]=event.target.value.slice(0,{school:40,className:30,name:40,pledge:160}[key]);
          saveProgress();renderCertificateCanvas();renderLearningSummary();
        });
      });
      const btnFillWholeClass = document.getElementById("btnFillWholeClass");
      if (btnFillWholeClass) {
        btnFillWholeClass.addEventListener("click", () => {
          const cls = document.getElementById("certClassInput").value.trim() || EDUCATION_DATA[state.grade].classDefault;
          const wholeClassName = `${cls} 어린이 일동`.slice(0, 40);
          document.getElementById("certNameInput").value = wholeClassName;
          state.profile.name = wholeClassName;
          if (!document.getElementById("certPledgeInput").value.trim()) {
            const defaultPledge = "우리 반 모두 오른쪽으로 안전하게 걷고 서로를 배려하며 즐거운 축제를 만들겠습니다!";
            document.getElementById("certPledgeInput").value = defaultPledge;
            state.profile.pledge = defaultPledge;
          }
          playSound("click");
          saveProgress();
          renderCertificateCanvas();
          renderLearningSummary();
        });
      }
      document.querySelectorAll(".preset-pledge-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.getElementById("certPledgeInput").value = btn.getAttribute("data-pledge");
          state.profile.pledge=document.getElementById("certPledgeInput").value;
          saveProgress();
          playSound("click");
          renderCertificateCanvas();
        });
      });
      document.getElementById("btnRenderCert").addEventListener("click", () => {
        playSound("click");
        renderCertificateCanvas();
        showToast("임명장에 내 이름과 약속이 들어갔어요!", "🎨");
      });
      document.getElementById("btnDownloadCert").addEventListener("click", downloadCertificatePNG);

      document.getElementById('btnDownloadParticipation').addEventListener('click',()=>{
        if(!canDownloadParticipation()){showToast('설정한 필수 활동을 먼저 완료해 주세요.','🔎');return;}
        downloadCanvas(drawParticipationCanvas(),`참여확인서_${safeLabel(state.profile.name,'학습자',40)}.png`);
      });
      document.getElementById('btnDownloadResult').addEventListener('click',()=>downloadCanvas(drawResultCanvas(),`학습결과지_${safeLabel(state.profile.name,'학습자',40)}.png`));
      document.getElementById('btnPrintResult').addEventListener('click',()=>{
        const image=document.getElementById('printResultImage');
        image.src=drawResultCanvas().toDataURL('image/png');
        window.print();
      });
      const btnAddClassPoster = document.getElementById('btnAddClassPoster');
      if (btnAddClassPoster) {
        btnAddClassPoster.addEventListener('click', () => {
          playSound('stamp');
          addCurrentStudentToClassPoster();
        });
      }
      const btnDownloadWallPoster = document.getElementById('btnDownloadWallPoster');
      if (btnDownloadWallPoster) {
        btnDownloadWallPoster.addEventListener('click', () => {
          playSound('stamp');
          downloadCanvas(drawWallPosterCanvas(), `교실게시용_6대안전수칙포스터_${safeLabel(state.profile.className, EDUCATION_DATA[state.grade].classDefault, 20)}.png`);
        });
      }
      const btnDownloadParentCard = document.getElementById('btnDownloadParentCard');
      if (btnDownloadParentCard) {
        btnDownloadParentCard.addEventListener('click', () => {
          playSound('stamp');
          downloadCanvas(drawParentCardCanvas(), `가정연계_안전대화카드_${safeLabel(state.profile.name, '어린이', 20)}.png`);
        });
      }
      const btnCopyStudentCode = document.getElementById('btnCopyStudentCode');
      if (btnCopyStudentCode) {
        btnCopyStudentCode.addEventListener('click', () => {
          const code = document.getElementById('studentShareCodeInput')?.value || generateStudentShareCode();
          copyTextWithToast(code, '내 결과 단축 코드가 복사되었어요! 선생님께 전달해 보세요.');
        });
      }
      const btnImportStudentCode = document.getElementById('btnImportStudentCode');
      if (btnImportStudentCode) {
        btnImportStudentCode.addEventListener('click', () => {
          const input = document.getElementById('importStudentCodeInput');
          if (!input) return;
          if (importStudentShareCode(input.value)) {
            input.value = '';
          }
        });
      }
      document.getElementById('btnExportProgress').addEventListener('click',exportProgressJSON);
      document.getElementById('importProgressFile').addEventListener('change',event=>importProgressFiles([...event.target.files]));

      renderAllLearning();
    });
