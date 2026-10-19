    // Canvas coordinates stay at 600×250. CSS scales only the display.
    let gameAnimId = null;
    const safetyGame = {
      running:false, won:false, paused:false, route:null, lastFrame:0,
      player:{x:42,y:210,r:13,targetX:null,targetY:null},
      hazards:[], exitZone:{x:520,y:22,w:65,h:48}, keys:new Set(), decisionRecorded:false
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
      updateGameStatusText('이동 중');
      gameLoop();
    }
    function initSafetyGame() {
      stopSafetyGameLoop();
      safetyGame.running = true;
      safetyGame.won = false;
      safetyGame.paused = false;
      safetyGame.route = null;
      safetyGame.decisionRecorded = false;
      safetyGame.player = {x:42,y:210,r:13,targetX:null,targetY:null};
      const speed = 28 + (state.gameStage-1)*8; // logical pixels per second
      safetyGame.hazards = [
        {x:220,y:113,r:30,dx:speed,dy:0},
        {x:355,y:165,r:27,dx:-speed*0.7,dy:0}
      ];
      safetyGame.keys.clear();
      document.getElementById('btnStartCanvasGame').textContent = '⏸ 일시정지';
      syncStageButtons();
      updateGameStatusText('먼저 경로를 고르세요');
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
      const step = 18;
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
      const e=safetyGame.exitZone;
      if(safetyGame.route==='wide' && p.x>e.x && p.x<e.x+e.w && p.y>e.y && p.y<e.y+e.h) {
        safetyGame.won=true;safetyGame.running=false;
        updateGameStatusText('이동 가능한 출구에 도착했어요 · 이유도 확인해요');
        document.getElementById('btnStartCanvasGame').textContent=state.gameStage<3?'▶ 다음 단계':'▶ 다시 시작';
        renderGameChoices();
        stopSafetyGameLoop();
      }
    }
    function drawSafetyGame() {
      const canvas=document.getElementById('safetyGameCanvas');
      if(!canvas)return;
      const ctx=canvas.getContext('2d');
      const {x,y}=safetyGame.player;
      ctx.fillStyle='#0f172a';ctx.fillRect(0,0,600,250);
      ctx.strokeStyle='#064e3b';ctx.lineWidth=38;ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(42,210);ctx.lineTo(120,100);ctx.lineTo(460,58);ctx.lineTo(545,46);ctx.stroke();
      ctx.strokeStyle='#7f1d1d';ctx.lineWidth=32;
      ctx.beginPath();ctx.moveTo(42,210);ctx.lineTo(230,165);ctx.lineTo(400,170);ctx.stroke();
      ctx.fillStyle='#fecaca';ctx.font='bold 12px sans-serif';ctx.fillText('🔴 혼잡한 길',220,205);
      const e=safetyGame.exitZone;
      ctx.fillStyle='#047857';ctx.fillRect(e.x,e.y,e.w,e.h);
      ctx.fillStyle='white';ctx.font='bold 13px sans-serif';ctx.fillText('출구',e.x+18,e.y+29);
      safetyGame.hazards.forEach(h=>{ctx.beginPath();ctx.arc(h.x,h.y,h.r,0,Math.PI*2);ctx.fillStyle='#be123c88';ctx.fill();ctx.strokeStyle='#fb7185';ctx.stroke();});
      ctx.beginPath();ctx.arc(x,y,13,0,Math.PI*2);ctx.fillStyle='#f97316';ctx.fill();
      ctx.fillStyle='white';ctx.font='16px sans-serif';ctx.fillText(state.avatar.char || '🧒',x-9,y+5);
      if(safetyGame.won){ctx.fillStyle='#0f172adc';ctx.fillRect(0,0,600,250);ctx.fillStyle='#fde68a';ctx.font='bold 20px sans-serif';ctx.fillText('이동 가능한 출구를 찾았어요!',132,120);}
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
