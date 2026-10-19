    const RESULT_FONT = '"Malgun Gothic", "Apple SD Gothic Neo", sans-serif';
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
      lines.forEach(line=>{const p=document.createElement('p');p.textContent=line;summary.appendChild(p);});
      const remaining=SAFETY_GOALS.filter(goal=>!state.safetyConfirmed[goal.id] || state.safetyConfirmed[goal.id].contentVersion!==SAFETY_CONTENT_VERSION);
      if(remaining.length){const p=document.createElement('p');p.textContent=`다시 확인할 목표: ${remaining.map(g=>g.title).join(', ')}`;summary.appendChild(p);}
      const certButton=document.getElementById('btnDownloadCert');
      const participationButton=document.getElementById('btnDownloadParticipation');
      if(certButton)certButton.disabled=!canDownloadSafetyCertificate();
      if(participationButton)participationButton.disabled=!canDownloadParticipation();
    }
    function renderCertificateCanvas() {
      const canvas=document.getElementById('certificateCanvas');
      if(!canvas)return;
      const ctx=drawSheetBase(canvas,canDownloadSafetyCertificate()?'안전 대장 임명장':'안전 목표 확인 현황 · 미완료',`${THEMES[state.teacher.theme].label} · ${EDUCATION_DATA[state.grade].label} · 안전 자료 ${CONTENT_VERSION}`);
      syncButtonGroup('.cert-theme-btn','data-theme',state.certTheme);
      syncButtonGroup('.cert-sticker-btn','data-sticker',state.certSticker);
      ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font=`bold 17px ${RESULT_FONT}`;
      const identity=[safeLabel(state.profile.school,'학교명 미입력',40),safeLabel(state.profile.className,'학급 미입력',30),safeLabel(state.profile.name,'별칭 없는 학습자',40)].join(' · ');
      printLines(ctx,identity,canvas.width/2,190,680,26,3);
      ctx.fillStyle='#fef3c7';ctx.font=`19px ${RESULT_FONT}`;
      if(canDownloadSafetyCertificate()) {
        ctx.fillText('안전 상황을 살피고 공통 안전 목표 6가지를',canvas.width/2,290,700);
        ctx.fillText('새 질문으로 다시 판단해 확인했습니다.',canvas.width/2,324,700);
      } else {
        ctx.fillText(`현재 ${confirmedGoalCount()}/6개 목표를 확인했습니다.`,canvas.width/2,290,700);
        ctx.fillText('남은 목표를 확인하면 임명장을 저장할 수 있습니다.',canvas.width/2,324,700);
      }
      ctx.fillStyle='#111827';ctx.fillRect(65,370,670,230);
      ctx.fillStyle='#fde68a';ctx.font=`bold 16px ${RESULT_FONT}`;ctx.fillText('나의 안전 약속',canvas.width/2,405);
      ctx.fillStyle='#fff';ctx.font=`16px ${RESULT_FONT}`;
      printLines(ctx,safeLabel(state.profile.pledge,'안전 약속을 적어 보세요.'),canvas.width/2,440,620,28,5);
      ctx.fillStyle='#e0e7ff';ctx.font=`15px ${RESULT_FONT}`;
      ctx.fillText(`${state.certSticker} 확인 날짜 ${new Date().toLocaleDateString('ko-KR')}`,canvas.width/2,649);
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
      printLines(ctx,safeLabel(state.profile.pledge,'아직 적지 않았어요.'),75,y,950,35,8);
      ctx.fillStyle='#cbd5e1';ctx.font=`16px ${RESULT_FONT}`;
      ctx.fillText(`학습 내용 버전 ${CONTENT_VERSION} · 이 기기에서 생성`,75,1430);
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
          status.textContent=`이 기기에서 ${records.length}개 결과를 확인했어요: ${records.map(r=>`${r.profile?.name||'별칭 없음'} (${r.grade}, ${r.candyPoints}점)`).join(' · ')}`;
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
