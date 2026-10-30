    function getEventQuizOverrides(themeKey, gradeKey) {
      const themeLabel = (typeof THEMES !== 'undefined' && THEMES[themeKey]?.label) || '행사';
      const byGrade = {
        '1-2': {
          0: {
            category: `${themeLabel} 준비`,
            q: `${themeLabel}에 출발하기 전에 가장 먼저 확인할 약속은 무엇일까요?`,
            options: ['모둠 친구·선생님과 만날 집결 장소', '혼자 몰래 가 볼 숨은 장소', '장난감만 가득 챙기기'],
            answer: 0,
            hint: '길을 잃거나 흩어졌을 때 다시 만날 수 있는 약속 장소를 먼저 알아 두어요.',
            explanation: '출발 전에 선생님·보호자와 집결 장소와 이동 순서를 먼저 확인해요.'
          },
          1: {
            category: '함께 이동하기',
            q: `${themeLabel} 장소에서 이동할 때 안전한 행동은 무엇일까요?`,
            options: ['선생님·보호자의 안내를 따라 질서 있게 이동해요', '혼자 줄에서 빠져나와 낯선 길로 가요', '앞 친구의 가방을 밀며 빨리 달려가요'],
            answer: 0,
            hint: '여러 사람이 함께 움직일 때는 인솔하는 어른의 안내를 따라 차근차근 걸어요.',
            explanation: '인솔 교사·보호자와 함께 정해진 동선으로 안전하게 이동해요.'
          },
          6: {
            category: '공공장소 배려',
            q: `${themeLabel}에서 다른 반이나 이웃 사람들을 만났을 때 알맞은 태도는?`,
            options: ['통로를 비워 주고 차례와 질서를 서로 존중해요', '우리 모둠만 빨리 가려고 길을 막아요', '큰 소리로 떠들며 줄 사이로 끼어들어요'],
            answer: 0,
            hint: '모두가 함께 쓰는 공간에서는 서로 양보하고 통로를 넓게 비워 주어야 안전해요.',
            explanation: '공공장소에서는 서로의 이동 동선과 차례를 배려해요.'
          }
        },
        '3-4': {
          0: {
            category: '사전 동선 점검',
            q: `${themeLabel} 장소에 도착했을 때 모둠원들과 가장 먼저 확인할 것은?`,
            options: ['주변 이동로와 비상 출구·비상 집결지 위치', '가장 줄이 긴 인기 코너 순서', '사진이 잘 나오는 좁은 계단 자리', '기념품을 많이 살 수 있는 상점'],
            answer: 0,
            hint: '사람이 갑자기 몰릴 때 당황하지 않고 빠져나갈 수 있는 출구와 만날 장소를 먼저 확인해요.',
            explanation: '행사장 도착 직후 비상 출구와 이동로, 집결 장소를 먼저 파악해요.'
          },
          1: {
            category: '참여 계획',
            q: `${themeLabel} 활동을 시작하기 전 인솔 선생님·보호자와 꼭 정할 약속은?`,
            options: ['이동 범위와 다시 모일 시간·비상 연락 방법', '누가 가장 먼저 뛰어갈지 순서', '간식을 가장 많이 먹는 방법', '혼자 구경할 비밀 코스'],
            answer: 0,
            hint: '혼자 대열에서 이탈하지 않도록 활동 구역과 모이는 시간을 미리 약속해야 해요.',
            explanation: '인솔자와 활동 범위·집결 시간·연락 방법을 사전에 약속해요.'
          },
          7: {
            category: '공공 질서 존중',
            q: `${themeLabel}에서 여러 단체와 관람객이 함께 이용할 때 올바른 태도는?`,
            options: ['안내 표지판과 우측통행 질서를 지키며 서로 배려한다', '우리 반이 먼저 보려고 좁은 입구를 가로막는다', '줄을 서지 않고 빈틈으로 비집고 들어간다', '통로 한가운데 앉아 쉬면서 길을 막는다'],
            answer: 0,
            hint: '여러 사람이 모이는 곳에서는 규칙과 동선을 함께 지켜야 모두가 안전해요.',
            explanation: '공공장소의 안내와 질서를 존중할 때 모두가 안전하게 즐길 수 있어요.'
          }
        },
        '5-6': {
          0: {
            category: '안전 동선 설계',
            q: `${themeLabel}을(를) 안전하게 운영하기 위해 사전 답사·안내에서 가장 중요한 기준은?`,
            options: ['병목 예상 구간 파악과 분산 이동로·비상 출구 확보', '모든 인원을 가장 좁은 입구 한 곳으로 동시 입장시키기', '비상 집결지 없이 자율적으로 흩어져 이동하기', '안내 표지판보다 구두 전달에만 의존하기'],
            answer: 0,
            hint: '인파가 한곳에 집중되지 않도록 병목 구간과 우회 출구를 사전에 설계해야 해요.',
            explanation: '다중밀집 예방을 위해 병목 구간과 분산 동선, 비상 출구를 먼저 확보합니다.'
          },
          1: {
            category: '공동체 배려',
            q: `${themeLabel} 중 단체 이동과 관람 예절을 지키는 성숙한 시민 의식은?`,
            options: ['공공시설의 안전 수칙을 준수하고 타인의 이동권과 선택권을 존중한다', '우리 모둠의 편의를 위해 관람 통로 중앙을 점유한다', '혼잡한 계단에서 속도를 높여 앞사람을 추월한다', '안전요원의 우회 안내를 무시하고 직진한다'],
            answer: 0,
            hint: '나와 공동체 모두의 안전을 위해 공공 안전 수칙과 배려 원칙을 함께 실천해요.',
            explanation: '공공 안전 수칙 준수와 타인 배려는 다중밀집 사고 예방의 핵심입니다.'
          }
        }
      };
      return (byGrade[gradeKey] && byGrade[gradeKey]) || {};
    }
    function getActiveQuizzes(gradeKey = state.grade) {
      const base = EDUCATION_DATA[gradeKey]?.quizzes || EDUCATION_DATA['3-4'].quizzes;
      if (typeof isHalloweenTheme === 'function' && isHalloweenTheme()) return base;
      const themeKey = state.teacher?.theme || 'halloween';
      if (themeKey === 'halloween') return base;
      const themeLabel = (typeof THEMES !== 'undefined' && THEMES[themeKey]?.label) || '행사';
      const overrides = getEventQuizOverrides(themeKey, gradeKey);
      return base.map((item, idx) => {
        if (overrides[idx]) return overrides[idx];
        return {
          ...item,
          q: item.q.replace(/할로윈/g, themeLabel).replace(/축제장/g, `${themeLabel} 장소`),
          explanation: item.explanation.replace(/할로윈/g, themeLabel)
        };
      });
    }
    function quizQuestionId(index) { return `${state.grade}:q${index+1}`; }
    function quizOrder(index) {
      const id=quizQuestionId(index);
      const q=getActiveQuizzes()[index];
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
      return getActiveQuizzes().reduce((total,_,i)=>total+(state.quizFirst[quizQuestionId(i)]?.correct?1:0),0);
    }
    function firstUnassistedScore() {
      return getActiveQuizzes().reduce((total,_,i)=>{
        const answer=state.quizFirst[quizQuestionId(i)];
        return total+(answer?.correct && !answer.hintUsed && !answer.fiftyUsed ? 1:0);
      },0);
    }
    function reviewedQuizScore() {
      return getActiveQuizzes().reduce((total,_,i)=>{
        const attempts=state.quizAttempts[quizQuestionId(i)] || [];
        return total+(attempts.length>1 && attempts.at(-1).correct ? 1:0);
      },0);
    }
    function startQuizReview(onlyWrong) {
      const quizzes=getActiveQuizzes();
      const items=quizzes.map((_,i)=>i).filter(i=>!onlyWrong || !state.quizFirst[quizQuestionId(i)]?.correct);
      if(!items.length)return;
      state.quizReviewItems=items;
      state.quizReview=true;
      state.quizAttemptRound=(state.quizAttemptRound||0)+1;
      state.quizIndex=0;
      state.quizCombo=0;
      state.quizFiftyUsed=false;
      state.quizHints={};state.quizFifties={};
      resetSpeedOxState();
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
    const EVENT_QUIZ_FUN_FACTS = [
      '🏛️ 깜짝 상식 박물관: 초록색 비상구(EXIT) 유도등은 정전이 되어도 내부 배터리로 최소 20~60분 이상 밝게 빛나도록 안전 기준이 정해져 있어요!',
      '🏛️ 깜짝 상식 박물관: 양방향 통로에서 모두가 오른쪽으로 걸으면 마주 오는 사람과의 충돌 위험이 70% 이상 줄어들고 이동 속도도 훨씬 안정돼요!',
      '🏛️ 깜짝 상식 박물관: 비상구 표지판이 초록색인 이유는 연기가 자욱하거나 어두운 곳에서도 우리 눈의 망막이 가장 또렷하게 구별할 수 있는 빛의 파장이 초록색(약 500~550nm)이기 때문이에요!',
      '🏛️ 깜짝 상식 박물관: 1㎡(가로·세로 1m) 안에 5명 이상이 모이면 내 힘으로 걷기 어렵고 물결처럼 흔들리기 시작해요. 그래서 어깨가 자꾸 닿을 때 미리 대각선 가장자리로 빠져나와야 해요!',
      '🏛️ 깜짝 상식 박물관: 두 손으로 가슴 앞 공간(흉강)을 감싸면 갈비뼈가 움직일 수 있는 최소 3~5cm의 공간이 유지되어 압박 속에서도 소중한 호흡을 지킬 수 있어요!',
      '🏛️ 깜짝 상식 박물관: 붐비는 길에서 한 사람이 물건을 주우려 멈춰 허리를 숙이면 뒤따라오던 사람들의 시야가 가려져 단 3초 만에 도미노처럼 연쇄 넘어짐이 일어날 수 있어요!',
      '🏛️ 깜짝 상식 박물관: 큰 행사장이나 박물관에서는 입구보다 출구 쪽이 좁아지는 병목 구간이 많아서, 들어가기 전에 대체 출구를 하나 더 봐 두는 것이 안전해요!',
      '🏛️ 깜짝 상식 박물관: 위급할 때 112·119에 신고할 때는 "어디(건물·지형지물 이름)에서 무슨 일이 났는지"를 가장 먼저 말해야 출동 대원이 가장 빠르게 도착할 수 있어요!'
    ];
    const QUIZ_GOAL_BRIDGE = [
      { label: '문화의 기원과 다양성', tab: 'tab-culture', scenarioIdx: null, tag: '🏛️ 문화 탐정' },
      { label: '보호자 동행·사전 약속', tab: 'tab-culture', scenarioIdx: null, tag: '🤝 안전한 약속' },
      { label: '이동로와 출구 확인', tab: 'tab-safety', scenarioIdx: 0, tag: '🗺️ 동선 살피기' },
      { label: '혼잡 신호에 대응', tab: 'tab-safety', scenarioIdx: 2, tag: '🔍 위험 신호 찾기' },
      { label: '물건보다 몸 먼저', tab: 'tab-safety', scenarioIdx: 4, tag: '🛡️ 내 몸 지키기' },
      { label: '떠밀림·넘어짐 몸 보호', tab: 'tab-safety', scenarioIdx: 3, tag: '🏃 위기 대처' },
      { label: '다문화 고유 의미 존중', tab: 'tab-culture', scenarioIdx: null, tag: '🌏 다문화 존중' },
      { label: '배려하는 복장과 축제 약속', tab: 'tab-costume', scenarioIdx: null, tag: '🧙 배려하는 복장' }
    ];
    const QUIZ_GOAL_BY_CATEGORY = {
      '할로윈 이야기': { label: '문화의 기원과 다양성', tab: 'tab-culture', scenarioIdx: null, tag: '🏛️ 문화 탐정' },
      '문화의 변화': { label: '문화의 기원과 변화', tab: 'tab-culture', scenarioIdx: null, tag: '🏛️ 문화 탐정' },
      '역사 읽기': { label: '문화의 기원과 변화', tab: 'tab-culture', scenarioIdx: null, tag: '🏛️ 문화 탐정' },
      '함께 즐기기': { label: '보호자 동행·사전 약속', tab: 'tab-culture', scenarioIdx: null, tag: '🤝 안전한 약속' },
      '참여 계획': { label: '보호자 동행·사전 약속', tab: 'tab-culture', scenarioIdx: null, tag: '🤝 안전한 약속' },
      '사전 계획': { label: '보호자 동행·사전 약속', tab: 'tab-culture', scenarioIdx: null, tag: '🤝 안전한 약속' },
      '길 살피기': { label: '이동로와 출구 확인', tab: 'tab-safety', scenarioIdx: 0, tag: '🗺️ 동선 살피기' },
      '혼잡 신호': { label: '혼잡 신호에 대응', tab: 'tab-safety', scenarioIdx: 2, tag: '🔍 위험 신호 찾기' },
      '위험 신호': { label: '혼잡 신호에 대응', tab: 'tab-safety', scenarioIdx: 2, tag: '🔍 위험 신호 찾기' },
      '위험 판단': { label: '혼잡 신호에 대응', tab: 'tab-safety', scenarioIdx: 2, tag: '🔍 위험 신호 찾기' },
      '몸 먼저': { label: '물건보다 몸 먼저', tab: 'tab-safety', scenarioIdx: 4, tag: '🛡️ 내 몸 지키기' },
      '물건보다 몸': { label: '물건보다 몸 먼저', tab: 'tab-safety', scenarioIdx: 4, tag: '🛡️ 내 몸 지키기' },
      '떠밀릴 때': { label: '떠밀림·호흡 공간 확보', tab: 'tab-safety', scenarioIdx: 3, tag: '🏃 위기 대처' },
      '떠밀림 대응': { label: '떠밀림·호흡 공간 확보', tab: 'tab-safety', scenarioIdx: 3, tag: '🏃 위기 대처' },
      '넘어짐 대응': { label: '넘어짐·위급 상황 몸 보호', tab: 'tab-safety', scenarioIdx: 5, tag: '🛟 위급 상황 대처' },
      '옷 고르기': { label: '배려하는 복장과 소품', tab: 'tab-costume', scenarioIdx: null, tag: '🧙 배려하는 복장' },
      '분장과 공공성': { label: '배려하는 복장과 공공성', tab: 'tab-costume', scenarioIdx: null, tag: '🧙 배려하는 복장' },
      '다른 문화': { label: '다문화 고유 의미 존중', tab: 'tab-culture', scenarioIdx: null, tag: '🌏 다문화 존중' },
      '문화 존중': { label: '다문화 고유 의미 존중', tab: 'tab-culture', scenarioIdx: null, tag: '🌏 다문화 존중' },
      '우리 반 약속': { label: '배려하는 복장과 축제 약속', tab: 'tab-costume', scenarioIdx: null, tag: '🤝 배려 약속' },
      '축제 설계': { label: '배려하는 복장과 축제 약속', tab: 'tab-costume', scenarioIdx: null, tag: '🤝 배려 약속' }
    };
    function getQuizGoalInfo(q, qi) {
      return (q && QUIZ_GOAL_BY_CATEGORY[q.category]) || QUIZ_GOAL_BRIDGE[qi % QUIZ_GOAL_BRIDGE.length];
    }
    function renderQuizWeaknessBridge() {
      const box = document.getElementById('quizWeaknessBridge');
      if (!box) return;
      box.replaceChildren();
      const quizzes = getActiveQuizzes();
      const missedIndices = quizzes
        .map((_, idx) => idx)
        .filter(idx => !state.quizFirst[quizQuestionId(idx)]?.correct);
      const header = document.createElement('div');
      header.className = 'font-extrabold text-amber-300';
      header.textContent = missedIndices.length
        ? `🔍 오답 원인 진단 · 다시 살펴볼 핵심 원칙 (${missedIndices.length}개)`
        : '🌟 모든 핵심 안전·문화 원칙을 첫 시도에 정확히 판단했어요!';
      box.appendChild(header);
      const growthText = document.createElement('p');
      growthText.className = 'text-xs font-bold text-emerald-300';
      growthText.textContent = `🌱→🌳 성장 비교: 첫 생각 정답 ${firstQuizScore()}/${quizzes.length}개 → 복습으로 스스로 바로잡은 문항 +${reviewedQuizScore()}개`;
      box.appendChild(growthText);
      const wrap = document.createElement('div');
      wrap.className = 'flex flex-wrap gap-1.5 pt-1';
      const targetList = missedIndices.length ? missedIndices : [2, 3, 4];
      targetList.forEach(qi => {
        const info = getQuizGoalInfo(quizzes[qi], qi);
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
    const SPEED_OX_BY_GRADE = {
      '1-2': [
        { q: '축제장에 들어가면 사탕 가게보다 초록색 비상구(나가는 문)부터 눈으로 찾아봐요.', answer: true, exp: '딩동댕(O)! 위급할 때 나갈 수 있는 초록색 비상구와 넓은 길을 먼저 봐 두어요.' },
        { q: '사람이 꽉 찬 길에서 장난감이 떨어지면 그 자리에서 바로 허리를 숙여 주워요.', answer: false, exp: '아니에요(X)! 걸어오는 사람들과 부딪혀 위험하니 숙이지 않고 내 몸부터 지켜요.' },
        { q: '앞이 잘 안 보이는 가면이나 바닥에 길게 끌리는 망토는 넘어질 수 있어 피해야 해요.', answer: true, exp: '딩동댕(O)! 눈이 잘 보이고 발에 걸리지 않는 편한 옷을 입어야 안전해요.' },
        { q: '옆 친구와 어깨가 자꾸 닿고 걸음이 느려지면 더 좁은 안쪽으로 비집고 들어가요.', answer: false, exp: '아니에요(X)! 어깨가 자꾸 닿는 건 위험 신호라서 넓은 길가로 나와야 해요.' },
        { q: '사람들에게 밀릴 때는 두 손이나 가방을 가슴 앞에 모아 숨 쉴 곳을 지켜요.', answer: true, exp: '딩동댕(O)! 가슴 앞 공간을 지키면 답답하지 않게 숨을 쉴 수 있어요.' }
      ],
      '3-4': SPEED_OX_QUESTIONS,
      '5-6': [
        { q: '입구가 넓더라도 안쪽 통로가 좁아지는 병목 구간에서는 사전에 대체 출구와 우회 동선을 확인해야 한다.', answer: true, exp: '맞아요(O)! 병목 구간은 짧은 시간에 밀집도가 급증하므로 사전 대피 동선 파악이 필수예요.' },
        { q: '1㎡당 5명 이상 밀집해 떠밀리는 상황에서는 군중의 흐름을 정면으로 거슬러 강하게 밀고 나가야 한다.', answer: false, exp: '아니에요(X)! 정면 역행은 연쇄 전도를 유발하므로 흐름을 따라 대각선 가장자리로 이탈해야 해요.' },
        { q: '비슷한 시기에 열리는 세계의 명절·축제는 겉모습이 닮았다면 하나의 기원으로 단정해도 된다.', answer: false, exp: '아니에요(X)! 각 문화가 형성된 역사적 맥락과 고유한 의미를 각각 존중해야 해요.' },
        { q: '실제 경찰·소방·군인의 제복과 혼동되는 복장은 긴급 구조 현장의 식별을 방해할 수 있어 피해야 한다.', answer: true, exp: '맞아요(O)! 위급 상황에서 실제 대원을 즉시 구별할 수 있도록 공공성과 관련 법규를 살펴야 해요.' },
        { q: '군중 속에서 넘어져 바로 일어날 수 없을 때는 두 팔로 머리를 감싸고 무릎을 당겨 태아 자세로 장기를 보호한다.', answer: true, exp: '맞아요(O)! 머리와 흉강·복부 장기가 압박받지 않도록 몸을 둥글게 말아 보호해요.' }
      ]
    };
    function getSpeedOxQuestions(shuffle = false) {
      const gradeKey = (typeof state !== 'undefined' && state.grade) || '3-4';
      const themeKey = (typeof state !== 'undefined' && state.teacher?.theme) || 'halloween';
      const themeLabel = (typeof THEMES !== 'undefined' && THEMES[themeKey]?.label) || '행사';
      const basePool = SPEED_OX_BY_GRADE[gradeKey] || SPEED_OX_QUESTIONS;
      const adapted = basePool.map((item, idx) => {
        if (themeKey !== 'halloween' && idx === 2 && gradeKey !== '1-2') {
          return {
            q: `${themeLabel} 이동 중 모둠 친구나 선생님을 놓치면 혼자 찾아다니지 않고 약속한 집결 장소에서 기다려야 한다.`,
            answer: true,
            exp: `맞아요(O)! ${themeLabel}에서 대열과 떨어졌을 때는 미리 약속한 집결지에서 기다리거나 인솔 교사·112에 알려요.`
          };
        }
        return item;
      });
      if (!shuffle) return adapted;
      const copy = [...adapted];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }
    let speedOxState = { active: false, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false, questions: null };
    let speedOxInterval = null;
    function stopSpeedOxTimer() {
      if (speedOxInterval) { clearInterval(speedOxInterval); speedOxInterval = null; }
    }
    function resetSpeedOxState() {
      stopSpeedOxTimer();
      speedOxState = { active: false, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false, questions: null };
    }
    function renderSpeedOxBonus() {
      const box = document.getElementById('speedOxBonusBox');
      if (!box) return;
      box.replaceChildren();
      const activeQuestions = speedOxState.questions || getSpeedOxQuestions(false);
      if (!speedOxState.active && !speedOxState.done) {
        const row = document.createElement('div');
        row.className = 'flex flex-wrap items-center justify-between gap-2';
        const title = document.createElement('span');
        title.className = 'font-extrabold text-amber-300';
        title.textContent = `⚡ 보너스 미션 · ${EDUCATION_DATA[state.grade]?.label || ''} 30초 스피드 OX (${activeQuestions.length}문항)`;
        const startBtn = document.createElement('button');
        startBtn.type = 'button';
        startBtn.id = 'btnStartSpeedOx';
        startBtn.className = 'mini-chip font-extrabold';
        startBtn.textContent = '⚡ 30초 스피드 OX 시작!';
        startBtn.addEventListener('click', () => {
          stopSpeedOxTimer();
          speedOxState = { active: true, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false, questions: getSpeedOxQuestions(false) };
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
        head.textContent = `🏆 스피드 OX 완주 결과: ${speedOxState.score} / ${activeQuestions.length} 정답!`;
        const retryBtn = document.createElement('button');
        retryBtn.type = 'button';
        retryBtn.className = 'mini-chip text-[11px]';
        retryBtn.textContent = '🔄 스피드 OX 다른 순서로 다시 도전';
        retryBtn.addEventListener('click', () => {
          speedOxState = { active: false, idx: 0, score: 0, secondsLeft: 30, feedback: '', done: false, questions: getSpeedOxQuestions(true) };
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
      const item = activeQuestions[speedOxState.idx];
      const top = document.createElement('div');
      top.className = 'flex items-center justify-between gap-2 font-extrabold text-amber-300';
      top.innerHTML = `<span>⚡ 스피드 OX (${speedOxState.idx + 1}/${activeQuestions.length})</span><span id="speedOxTimerText">⏱️ ${speedOxState.secondsLeft}초</span>`;
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
          if (speedOxState.idx + 1 < activeQuestions.length) {
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
      const quizzes=getActiveQuizzes();
      const limit=state.quizReview ? state.quizReviewItems.length : quizzes.length;
      const themePrefix=(typeof isHalloweenTheme === 'function' && !isHalloweenTheme() && typeof THEMES !== 'undefined')
        ? `${THEMES[state.teacher.theme]?.label || '행사'} · `
        : '';
      document.getElementById('quizGradeLabel').textContent=`${themePrefix}생각 확인 · ${EDUCATION_DATA[state.grade].label} · ${quizzes.length}가지 질문`;
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
        if(Object.keys(state.quizFirst).length>=quizzes.length) unlockStamp('s4','퀴즈 참여');
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
      const isCore10=Number(state.teacher?.minutes)===10 && [0,2,3,5].includes(qi);
      const goalInfo=getQuizGoalInfo(q, qi);
      if(typeTagEl)typeTagEl.textContent=`${goalInfo.tag || QUIZ_TYPE_TAGS[qi % QUIZ_TYPE_TAGS.length]}${isCore10?' · ⚡10분 핵심':''}`;
      if(typeof updatePairBatonBanner==='function')updatePairBatonBanner(state.quizIndex);
      const cheerEl=document.getElementById('quizCheerText');
      if(cheerEl)cheerEl.textContent=quizCheerMessage(state.quizCombo);
      document.getElementById('quizQuestionText').textContent=q.q;
      const hint=document.getElementById('quizHintBox');
      hint.textContent=q.hint || '먼저 안전과 배려를 생각해 보세요.';
      hint.classList.toggle('hidden',!state.quizHints[id]);
      const fifty=document.getElementById('btnQuizFifty');
      fifty.disabled=state.quizFiftyUsed || order.length<=2 || !!existing;
      fifty.style.opacity='';
      fifty.textContent=state.quizFiftyUsed ? '🔀 50:50 사용됨' : order.length<=2 ? '🔀 50:50 (4지선다용)' : '🔀 50:50 찬스';
      const hintBtn=document.getElementById('btnQuizHint');
      hintBtn.disabled=!!(existing && existing.correct) || !!state.quizHints[id];
      hintBtn.classList.toggle('hint-guide-pulse', !!(existing && !existing.correct && !state.quizHints[id]));
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
        const bridge = getQuizGoalInfo(q, qi);
        explanation.className=`rounded-xl p-3 border ${existing.correct?'bg-emerald-950 border-emerald-400':'bg-rose-950 border-rose-400'} text-sm space-y-1.5`;
        const mainText = document.createElement('p');
        mainText.textContent = `${existing.correct?'⭕ 이번 판단은 맞았어요.':'❌ 이번 판단은 다시 살펴봐요.'} ${q.explanation}`;
        explanation.appendChild(mainText);
        const factPool = (typeof isHalloweenTheme === 'function' && !isHalloweenTheme()) ? EVENT_QUIZ_FUN_FACTS : QUIZ_FUN_FACTS;
        const funFactText = factPool[qi % factPool.length];
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
