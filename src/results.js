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
