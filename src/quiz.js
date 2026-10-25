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
    const QUIZ_FUN_FACTS = [
      '🏛️ 깜짝 상식 박물관: 왜 박쥐가 할로윈 상징이 되었을까요? 옛날 가을 모닥불을 피우면 불빛을 보고 벌레들이 몰려들었고, 그 벌레를 먹으러 박쥐들이 밤하늘을 날아다닌 자연스러운 풍경에서 시작되었대요!',
      '🏛️ 깜짝 상식 박물관: 미국에서는 음식 알레르기가 있는 어린이를 배려해 사탕 대신 작은 문구류·장난감을 나눠 주는 집 앞에 ‘청록색 호박(Teal Pumpkin)’을 놓는 다정한 캠페인도 있어요!',
      '🏛️ 깜짝 상식 박물관: 비상구 표지판이 초록색인 이유는 연기가 자욱하거나 어두운 곳에서도 우리 눈의 망막이 가장 또렷하게 구별할 수 있는 빛의 파장이 초록색(약 500~550nm)이기 때문이에요!',
      '🏛️ 깜짝 상식 박물관: 1㎡(가로·세로 1m) 안에 5명 이상이 모이면 내 힘으로 걷기 어렵고 물결처럼 흔들리기 시작해요. 그래서 어깨가 자꾸 닿을 때 미리 대각선 가장자리로 빠져나와야 해요!',
      '🏛️ 깜짝 상식 박물관: 두 손으로 가슴 앞 공간(흉강)을 감싸면 갈비뼈가 움직일 수 있는 최소 3~5cm의 공간이 유지되어 압박 속에서도 소중한 호흡을 지킬 수 있어요!',
      '🏛️ 깜짝 상식 박물관: 붐비는 길에서 한 사람이 물건을 주우려 멈춰 허리를 숙이면 뒤따라오던 사람들의 시야가 가려져 단 3초 만에 도미노처럼 연쇄 넘어짐이 일어날 수 있어요!',
      '🏛️ 깜짝 상식 박물관: 기네스북에 오른 세계에서 가장 무거운 호박은 무려 1,246kg으로, 소형 자동차 한 대 무게와 비슷하대요!',
      '🏛️ 깜짝 상식 박물관: 멕시코의 ‘죽은 자들의 날’에 장식하는 주황색 금잔화(마리골드)는 태양의 빛과 진한 향기로 가족들이 집으로 오는 길을 밝혀 준다는 따뜻한 뜻을 담고 있어요!'
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
    const SPEED_OX_QUESTIONS = [
      { q: '행사장에 도착하면 간식 줄보다 초록색 비상구와 넓은 이동로를 먼저 확인해야 한다.', answer: true, exp: '맞아요(O)! 들어가기 전에 나갈 수 있는 비상구와 이동로부터 확인해요.' },
      { q: '사람이 많이 몰려 걷는 길에서 좋아하는 물건이 떨어지면 즉시 허리를 숙여 주워야 한다.', answer: false, exp: '아니에요(X)! 붐비는 길에서 숙이면 연쇄 넘어짐이 일어날 수 있어 내 몸을 먼저 지켜요.' },
      { q: '멕시코의 죽은 자들의 날과 한국의 추석은 가을에 열리므로 할로윈과 똑같은 축제이다.', answer: false, exp: '아니에요(X)! 시기가 가까워도 나라마다 고유한 기원과 뜻이 서로 달라요.' },
      { q: '어깨가 자꾸 부딪히고 걸음이 느려지면 흐름을 보며 대각선 가장자리 넓은 곳으로 벗어나야 한다.', answer: true, exp: '맞아요(O)! 신체 접촉과 감속은 혼잡 위험 신호이므로 즉시 넓은 곳으로 이동해요.' },
      { q: '인파에게 떠밀릴 때는 두 팔로 가슴 앞 공간을 감싸 숨 쉴 공간(흉강)을 확보하는 것이 좋다.', answer: true, exp: '맞아요(O)! 팔짱이나 가방 안기 자세로 가슴 앞 호흡 공간을 지켜요.' }
    ];
    let speedOxState = { active: false, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false };
    let speedOxInterval = null;
    function stopSpeedOxTimer() {
      if (speedOxInterval) { clearInterval(speedOxInterval); speedOxInterval = null; }
    }
    function resetSpeedOxState() {
      stopSpeedOxTimer();
      speedOxState = { active: false, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false };
    }
    function renderSpeedOxBonus() {
      const box = document.getElementById('speedOxBonusBox');
      if (!box) return;
      box.replaceChildren();
      if (!speedOxState.active && !speedOxState.done) {
        const row = document.createElement('div');
        row.className = 'flex flex-wrap items-center justify-between gap-2';
        const title = document.createElement('span');
        title.className = 'font-extrabold text-amber-300';
        title.textContent = '⚡ 보너스 미션 · 30초 스피드 OX 진실 혹은 거짓 (5문항)';
        const startBtn = document.createElement('button');
        startBtn.type = 'button';
        startBtn.id = 'btnStartSpeedOx';
        startBtn.className = 'mini-chip font-extrabold';
        startBtn.textContent = '⚡ 30초 스피드 OX 시작!';
        startBtn.addEventListener('click', () => {
          stopSpeedOxTimer();
          speedOxState = { active: true, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false };
          playSound('whistle');
          speedOxInterval = setInterval(() => {
            if (speedOxState.secondsLeft > 1) {
              speedOxState.secondsLeft--;
              const timerEl = document.getElementById('speedOxTimerText');
              if (timerEl) timerEl.textContent = `⏱️ ${speedOxState.secondsLeft}초`;
            } else {
              stopSpeedOxTimer();
              speedOxState.active = false;
              speedOxState.done = true;
              playSound('stamp');
              renderSpeedOxBonus();
            }
          }, 1000);
          renderSpeedOxBonus();
        });
        row.appendChild(title);
        row.appendChild(startBtn);
        box.appendChild(row);
        return;
      }
      if (speedOxState.done) {
        stopSpeedOxTimer();
        const wrap = document.createElement('div');
        wrap.className = 'space-y-1.5';
        const head = document.createElement('div');
        head.className = 'font-extrabold text-amber-300 text-sm';
        head.textContent = `🏆 스피드 OX 완주 결과: ${speedOxState.score} / ${SPEED_OX_QUESTIONS.length} 정답!`;
        const retryBtn = document.createElement('button');
        retryBtn.type = 'button';
        retryBtn.className = 'mini-chip text-[11px]';
        retryBtn.textContent = '🔄 스피드 OX 다시 도전';
        retryBtn.addEventListener('click', () => {
          speedOxState = { active: false, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false };
          renderSpeedOxBonus();
        });
        wrap.appendChild(head);
        if (speedOxState.feedback) {
          const fb = document.createElement('p');
          fb.className = 'text-indigo-100 font-bold';
          fb.textContent = speedOxState.feedback;
          wrap.appendChild(fb);
        }
        wrap.appendChild(retryBtn);
        box.appendChild(wrap);
        return;
      }
      const item = SPEED_OX_QUESTIONS[speedOxState.idx];
      const top = document.createElement('div');
      top.className = 'flex items-center justify-between gap-2 font-extrabold text-amber-300';
      top.innerHTML = `<span>⚡ 스피드 OX (${speedOxState.idx + 1}/${SPEED_OX_QUESTIONS.length})</span><span id="speedOxTimerText">⏱️ ${speedOxState.secondsLeft}초</span>`;
      const qEl = document.createElement('p');
      qEl.className = 'font-bold text-white text-xs sm:text-sm py-1';
      qEl.textContent = `Q. ${item.q}`;
      const btnRow = document.createElement('div');
      btnRow.className = 'grid grid-cols-2 gap-2';
      [[true, '⭕ 맞아요 (O)'], [false, '❌ 아니에요 (X)']].forEach(([val, label]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'speed-ox-btn mini-chip justify-center py-2 font-extrabold text-xs';
        b.textContent = label;
        b.addEventListener('click', () => {
          const right = val === item.answer;
          if (right) speedOxState.score++;
          speedOxState.feedback = item.exp;
          playSound(right ? 'correct' : 'wrong');
          if (speedOxState.idx + 1 < SPEED_OX_QUESTIONS.length) {
            speedOxState.idx++;
          } else {
            stopSpeedOxTimer();
            speedOxState.active = false;
            speedOxState.done = true;
            awardOnce('quiz:speedox', 'bonus', 20, '스피드 OX 보너스 라운드 완주');
          }
          renderSpeedOxBonus();
        });
        btnRow.appendChild(b);
      });
      box.appendChild(top);
      box.appendChild(qEl);
      box.appendChild(btnRow);
      if (speedOxState.feedback) {
        const fb = document.createElement('p');
        fb.className = 'text-[11px] font-bold text-emerald-300 pt-1';
        fb.textContent = `💡 직전 문제 해설: ${speedOxState.feedback}`;
        box.appendChild(fb);
      }
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
        renderSpeedOxBonus();
        renderLearningSummary();
        return;
      }
      stopSpeedOxTimer();
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
      next.classList.toggle('next-step-ready',!!existing);
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
          playSound(answer.correct?'correct':'wrong');
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
        const funFactText = QUIZ_FUN_FACTS[qi % QUIZ_FUN_FACTS.length];
        if (funFactText) {
          const factEl = document.createElement('div');
          factEl.className = 'rounded-lg bg-indigo-950/70 border border-amber-400/40 px-2.5 py-1.5 text-xs font-bold text-amber-200 leading-snug';
          factEl.textContent = funFactText;
          explanation.appendChild(factEl);
        }
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
