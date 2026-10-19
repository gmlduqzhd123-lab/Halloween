    // ==================== ENRICHED GRADE-LEVEL EDUCATIONAL DATASET ====================
    const FESTIVAL_DETAILS = {
      halloween: {
        title: "🎃 미국·유럽의 할로윈데이 (10월 31일)",
        desc: "고대 켈트족의 서우인 풍습과 만성절 전날 밤(All Hallows' Eve)이 오늘날 할로윈의 여러 역사적 배경으로 설명돼요. 오늘날에는 호박 장식, 이웃과 간식 나누기, UNICEF 모금처럼 다양한 방식으로 참여해요. 어른이 준비한 장소에서도 주변 이동로를 살펴요."
      },
      muertos: {
        title: "🌼 멕시코의 죽은 자들의 날 (10월 31일 ~ 11월 2일)",
        desc: "2008년 유네스코 인류무형문화유산에 등재된 멕시코의 전통 명절이에요. 세상을 떠난 가족을 기리며 꽃잎과 촛불, 제물을 놓아 가족의 영혼을 맞이해요. 할로윈과는 다른 문화적 맥락을 지녀요."
      },
      korea: {
        title: "🌕 대한민국의 추석 · 동지",
        desc: "우리나라에도 가을 수확에 감사하며 송편을 나누는 '추석', 일 년 중 밤이 가장 긴 날 붉은 팥죽을 쑤어 나쁜 기운을 물리치고 이웃과 나누는 '동지'가 있어요. 나라마다 모습은 달라도 가족과 이웃의 평안을 바라는 따뜻한 마음은 모두 같답니다!"
      }
    };

    const EDUCATION_DATA = {
      "1-2": {
        label: "🌱 1~2학년",
        classDefault: "1학년 1반",
        stories: [
          {
            emoji: "🎃",
            caption: "매년 10월 31일 가을 축제",
            title: "1. 할로윈데이는 무슨 날일까요?",
            body: "매년 10월 31일은 외국의 가을 축제인 '할로윈데이'예요! 옛날 사람들이 추운 겨울이 오기 전에 나쁜 유령이 오지 못하도록 재미있는 가면을 쓰던 놀이에서 시작되었어요.",
            keyPoint: "10월 31일에 재미있게 변장하며 즐기는 외국의 가을 축제예요!",
            sourceText: "출처: 미국 의회도서관",
            sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            emoji: "🕯️",
            caption: "웃고 있는 호박 등불",
            title: "2. 주황색 호박 등불 '잭오랜턴'",
            body: "커다란 주황색 호박 속을 파내고 눈·코·입 모양을 만든 장식을 '잭오랜턴'이라고 불러요. 옛날에는 안에 불빛을 넣기도 했어요. 오늘날에는 축제 장식으로 많이 보여요.",
            keyPoint: "호박으로 만든 환한 등불 이름은 '잭오랜턴'이에요!",
            sourceText: "출처: 스미스소니언 정원 기록",
            sourceUrl: "https://gardens.si.edu/american-garden-story/ghosts-of-pumpkins-past/"
          },
          {
            emoji: "🍬",
            caption: "달콤한 간식과 따뜻한 나눔",
            title: "3. '트릭 오어 트릿!' 사탕 주세요!",
            body: "외국 친구들은 이웃집 문을 똑똑 두드리며 '트릭 오어 트릿(과자 안 주면 장난칠 거예요)!' 하고 인사해요. 사탕 대신 어려운 친구들을 돕는 저금통을 들고 나눔을 실천하기도 해요.",
            keyPoint: "이웃과 반갑게 인사하고 따뜻한 마음을 나누는 날이에요!",
            sourceText: "출처: UNICEF USA",
            sourceUrl: "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            emoji: "🐈‍⬛",
            caption: "주황색과 검은색의 비밀",
            title: "4. 할로윈 대표 색깔은 무엇일까요?",
            body: "할로윈에는 '주황색'과 '검은색'을 가장 많이 써요! 주황색은 잘 익은 가을 호박과 추수를 뜻하고, 검은색은 깊어 가는 가을밤을 뜻한답니다.",
            keyPoint: "주황색은 가을 수확을, 검은색은 어두운 밤하늘을 나타내요!",
            sourceText: "출처: 미국 의회도서관",
            sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            emoji: "🌼",
            caption: "세계 친구들의 가을 명절",
            title: "5. 멕시코와 우리나라의 다른 명절",
            body: "멕시코에서는 '죽은 자들의 날'에 노란 꽃으로 보고 싶은 가족을 맞이하고, 우리나라에서는 '동지'에 따뜻한 팥죽을 먹으며 나쁜 기운을 물리쳐요.",
            keyPoint: "나라마다 축제는 달라도 가족을 사랑하는 마음은 똑같아요!",
            sourceText: "멕시코 명절 근거: 유네스코",
            sourceUrl: "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            emoji: "🏠",
            caption: "안전하고 즐거운 홈로윈",
            title: "6. 집과 교실에서 안전하게 즐겨요!",
            body: "밤늦게 사람이 많은 길에 나가지 않아도, 집이나 교실에서 친구들과 동화책을 읽고 간식을 나누는 '홈로윈(집에서 즐기는 할로윈)'으로 안전하게 즐길 수 있어요!",
            keyPoint: "어른 손을 꼭 잡고, 안전하고 기분 좋게 즐기는 것이 최고예요!",
            sourceText: "교사용 안전 근거: 국민재난안전포털",
            sourceUrl: "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          }
        ],
        quizzes: [
          {
            category: "할로윈 이야기",
            q: "주황색 호박에 눈·코·입을 그려 만든 할로윈 등불의 이름은 무엇일까요?",
            options: ["🎃 잭오랜턴 (호박 등불)", "🧦 크리스마스 양말", "🎂 생일 케이크", "⛄ 눈사람"],
            answer: 0,
            hint: "힌트: '잭(Jack)'이라는 이름이 들어가는 주황색 호박 등불이에요!",
            explanation: "주황색 호박으로 만든 등불은 '잭오랜턴'이라고 불러요!"
          },
          {
            category: "할로윈 색깔",
            q: "할로윈을 대표하는 두 가지 색깔로, 가을 호박과 어두운 밤을 뜻하는 색은?",
            options: ["🧡 주황색과 🖤 검은색", "💙 파란색과 🤍 하얀색", "💗 분홍색과 💚 연두색", "💛 노란색과 🤎 갈색"],
            answer: 0,
            hint: "힌트: 호박의 색깔(🧡)과 밤하늘의 색깔(🖤)을 떠올려 보세요!",
            explanation: "가을 수확(호박)을 뜻하는 주황색과 가을밤을 뜻하는 검은색이 대표 색깔이에요!"
          },
          {
            category: "길 걷기 약속",
            q: "사람이 많은 길이나 복도를 걸을 때 부딪히지 않으려면 어느 쪽으로 걸어야 할까요?",
            options: ["👉 오른쪽으로 차근차근 걸어요", "🏃 앞사람을 밀면서 뛰어가요", "🙈 눈을 감고 걸어요", "🛑 길 한가운데에 드러누워요"],
            answer: 0,
            hint: "힌트: 우리나라 보행 안전 약속인 '우측통행'을 생각해 보세요!",
            explanation: "평상시 양방향 통행에서는 오른쪽으로 걷고 주변 흐름을 살펴요. 떠밀리는 상황에는 다른 행동요령이 필요해요."
          },
          {
            category: "인파 안전",
            q: "사람이 아주 많은 길에서 걷다가 사탕이 바닥에 떨어졌어요! 어떻게 할까요?",
            options: ["🙅 줍지 않고 어른 손을 잡고 이동해요", "🙇 바로 바닥에 엎드려 사탕을 찾아요", "😭 그 자리에 주저앉아 울어요", "🦵 다른 사람 다리를 잡아요"],
            answer: 0,
            hint: "힌트: 사람이 많은 곳에서 허리를 숙이면 매우 위험해요!",
            explanation: "사람이 많은 곳에서 허리를 숙이면 뒤따라오는 사람과 부딪혀 다칠 수 있어요. 내 안전이 제일 소중해요!"
          },
          {
            category: "옷 고르기",
            q: "할로윈에 입으면 진짜 경찰관·소방관과 헷갈릴 수 있어 피하면 좋은 옷은?",
            options: ["🚓 진짜 같은 경찰복·소방복", "🎃 귀여운 호박 망토", "🧙 별 무늬 마법사 모자", "🧚 반짝이는 요정 날개"],
            answer: 0,
            hint: "힌트: 실제 대원과 헷갈리는 옷은 피하는 편이 좋아요.",
            explanation: "진짜 경찰관·소방관 옷을 따라 입으면 위급할 때 누가 진짜인지 헷갈려서 위험해요!"
          },
          {
            category: "안전한 옷",
            q: "어두운 저녁에 길을 걸을 때 자동차나 사람들이 나를 잘 볼 수 있게 도와주는 것은?",
            options: ["✨ 밝은색 옷과 야광 스티커", "🕶️ 눈이 안 보이는 까만 선글라스", "🎭 앞이 잘 안 보이는 좁은 가면", "🧣 바닥에 길게 끌리는 망토"],
            answer: 0,
            hint: "힌트: 어두운 곳에서도 반짝반짝 빛을 반사해 주는 것이 좋아요!",
            explanation: "밝은 옷이나 눈에 띄는 표시가 보행자를 알아보는 데 도움이 될 수 있어요. 밤길에서는 어른과 함께 주변을 계속 살펴요."
          },
          {
            category: "간식 안전",
            q: "할로윈에 받은 사탕이나 과자를 먹기 전에 꼭 확인해야 할 약속은 무엇일까요?",
            options: ["🍬 포장지가 잘 막혀 있는지 어른과 확인해요", "🍂 바닥에 떨어진 사탕을 주워 먹어요", "📦 포장지가 찢어진 과자를 그냥 먹어요", "🐶 강아지 간식을 몰래 먹어요"],
            answer: 0,
            hint: "힌트: 껍질이 열려 있거나 유통기한이 지난 것은 먹으면 안 돼요!",
            explanation: "포장지가 열려 있거나 이상한 간식은 먹지 않고 부모님·선생님과 먼저 확인해요!"
          },
          {
            category: "세계 문화",
            q: "멕시코의 '죽은 자들의 날'에는 노란 꽃으로 집을 예쁘게 꾸며 보고 싶은 가족을 반갑게 맞이해요. 맞을까요?",
            options: ["⭕ 맞아요!", "❌ 아니에요!"],
            answer: 0,
            hint: "힌트: 마리골드꽃으로 가족을 기쁘게 환영하는 멕시코의 전통 축제예요!",
            explanation: "딩동댕! 나라마다 축제를 즐기는 모습은 달라도 가족을 사랑하는 마음은 모두 따뜻해요."
          }
        ]
      },
      "3-4": {
        label: "🍀 3~4학년",
        classDefault: "3학년 1반",
        stories: [
          {
            emoji: "🎃",
            caption: "10월 31일 켈트족의 수확 축제",
            title: "1. 왜 할로윈에 재미있는 분장을 할까요?",
            body: "옛날 아일랜드와 스코틀랜드의 켈트족은 10월 31일에 한 해의 추수를 끝내고 새해를 맞이했어요. 이날 밤 나쁜 유령이 찾아와도 자기네 동료인 줄 알고 지나가도록 분장을 한 데서 시작되었답니다.",
            keyPoint: "나쁜 기운을 막고 가을 수확을 축하하던 옛날 풍습에서 시작되었어요!",
            sourceText: "출처: 미국 의회도서관",
            sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            emoji: "🕯️",
            caption: "순무 등불에서 호박 등불로!",
            title: "2. 호박 등불 '잭오랜턴'의 비밀",
            body: "원래 아일랜드에서는 작은 '순무'의 속을 파서 등불을 만들었어요. 그러다 사람들이 미국으로 건너간 뒤, 순무보다 훨씬 크고 조각하기 쉬운 주황색 '호박'으로 등불을 만들게 되었답니다!",
            keyPoint: "처음에는 순무로 만들다가 미국에서 주황색 호박 등불로 바뀌었어요!",
            sourceText: "출처: 스미스소니언 정원 기록",
            sourceUrl: "https://gardens.si.edu/american-garden-story/ghosts-of-pumpkins-past/"
          },
          {
            emoji: "🍪",
            caption: "소울 케이크에서 유니세프 기부까지",
            title: "3. '트릭 오어 트릿'에 담긴 나눔 정신",
            body: "옛날 유럽의 '소울링'은 오늘날 사탕을 나누는 '트릭 오어 트릿'의 여러 기원 설명 중 하나예요. 요즘엔 UNICEF 모금 상자를 들고 전 세계 어린이를 돕는 캠페인도 열린답니다.",
            keyPoint: "단순히 사탕만 받는 날이 아니라 이웃과 정을 나누는 날이에요!",
            sourceText: "출처: 미국 의회도서관",
            sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            emoji: "🚗",
            caption: "안전하게 진화한 현대 풍습",
            title: "4. 자동차 트렁크에서 간식을 나누는 이유!",
            body: "어른이 준비한 행사 장소에서 자동차 짐칸(트렁크)을 꾸미고 간식을 나누는 '트렁크 오어 트리팅'을 즐기기도 해요. 주차장에서는 차가 움직이는 길을 살피고 어른의 안내를 따라야 해요.",
            keyPoint: "장소가 어디든 주변 이동로와 어른의 안내를 살피는 것이 중요해요!",
            sourceText: "사례: UNICEF USA 행사",
            sourceUrl: "https://www.unicefusa.org/stories/unicef-clubs-add-meaning-their-halloweening"
          },
          {
            emoji: "🌼",
            caption: "유네스코 무형유산 비교하기",
            title: "5. 할로윈 vs 멕시코 '죽은 자들의 날'",
            body: "10월 말부터 11월 초까지 멕시코에서는 '죽은 자들의 날'을 기념해요. 할로윈의 옛 분장 풍습과 달리, 꽃잎과 촛불, 제물로 그리운 가족의 영혼을 맞이하는 의미가 있어요.",
            keyPoint: "나라마다 다른 문화를 비교해 보고 서로 존중하는 마음을 길러요!",
            sourceText: "멕시코 명절 근거: 유네스코",
            sourceUrl: "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            emoji: "🏠",
            caption: "배려와 안전이 먼저인 축제",
            title: "6. 집에서 즐기는 '홈로윈'과 공공예절",
            body: "사람이 많이 붐비는 거리로 나가는 대신 집이나 교실에서 안전하게 즐기는 '홈로윈'이 인기예요. 이웃에게 시끄러운 소음을 내지 않고 쓰레기를 스스로 치우는 성숙한 예절을 지켜요!",
            keyPoint: "이웃을 배려하고 안전 약속을 지킬 때 진짜 즐거운 축제가 됩니다!",
            sourceText: "교사용 안전 근거: 국민재난안전포털",
            sourceUrl: "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          }
        ],
        quizzes: [
          {
            category: "할로윈 유래",
            q: "할로윈의 상징인 '잭오랜턴'은 미국에서 호박으로 만들기 전에 원래 어떤 채소로 만들었을까요?",
            options: ["🌱 순무", "🍉 수박", "🥒 오이", "🍓 딸기"],
            answer: 0,
            hint: "힌트: 아일랜드에서 많이 자라던 무와 비슷한 뿌리채소예요!",
            explanation: "아일랜드와 스코틀랜드에서는 원래 '순무'를 파서 등불을 만들다가, 미국에서 모양 내기 쉬운 '호박'으로 바뀌었어요!"
          },
          {
            category: "안전 문화",
            q: "어른이 준비한 행사에서 자동차 트렁크를 꾸며 간식을 나누는 방식은?",
            options: ["🚗 트렁크 오어 트리팅", "🏊 수영장 파티", "⛷️ 스키장 캠프", "⛺ 사막 캠핑"],
            answer: 0,
            hint: "힌트: 자동차 뒤쪽 짐칸을 뜻하는 영어 단어 '트렁크(Trunk)'가 들어가요!",
            explanation: "자동차 트렁크를 꾸며 간식을 나누는 활동을 '트렁크 오어 트리팅'이라고 불러요. 주차장에서도 차량 이동 구역과 어른의 안내를 확인해요."
          },
          {
            category: "인파 안전",
            q: "구경하러 간 거리에 사람이 너무 많아져서 옆 사람과 자꾸 어깨가 부딪혀요. 어떻게 해야 할까요?",
            options: ["↗️ 사람들의 흐름을 따라 대각선 방향 넓은 곳으로 빠져나온다", "🏃 더 좁은 골목길 안쪽으로 뛰어 들어간다", "🛑 걸음을 멈추고 길 한가운데 앉는다", "😤 반대 방향으로 사람들을 세게 밀친다"],
            answer: 0,
            hint: "힌트: 흐름을 거스르지 않고 비스듬히(대각선으로) 가장자리로 나오는 것이 안전해요!",
            explanation: "어깨가 자꾸 부딪히고 걸음이 느려지면 위험 신호예요! 흐름을 따라 대각선 방향으로 넓고 안전한 곳으로 이동해요."
          },
          {
            category: "인파 안전",
            q: "사람들에게 밀릴 때 내가 숨을 편하게 쉴 수 있도록 가슴 앞 공간을 지키는 자세는 무엇일까요?",
            options: ["🛡️ 두 손으로 팔짱을 끼거나 가방을 가슴 앞에 꼭 안는다", "🧍 양팔을 차렷 자세로 몸에 딱 붙인다", "🙌 두 손을 머리 위로 만세 부른다", "🙇 바닥에 떨어진 물건을 주우려고 허리를 굽힌다"],
            answer: 0,
            hint: "힌트: 가슴(폐)이 눌리지 않도록 두 팔이나 가방으로 앞 공간을 만들어 줘요!",
            explanation: "떠밀리는 상황에서는 가슴 앞 공간을 보호해 숨쉬기를 돕습니다. 이 자세가 사고를 막아 주는 능력은 아니에요."
          },
          {
            category: "위기 대처",
            q: "사람이 많은 곳에서 만약 넘어져서 바로 일어날 수 없을 때 내 몸을 보호하는 올바른 자세는?",
            options: ["🙆 머리를 두 팔로 감싸고 다리를 당겨 공처럼 둥글게 만다", "🛌 팔다리를 넓게 펴고 반듯하게 눕는다", "📱 떨어진 휴대폰을 찾으려고 바닥을 더듬는다", "👟 벗겨진 신발 끈을 다시 묶는다"],
            answer: 0,
            hint: "힌트: 소중한 머리와 가슴을 보호하려면 몸을 둥근 공처럼 말아야 해요!",
            explanation: "일어날 수 없을 때는 머리를 두 팔로 감싸고 몸을 공처럼 둥글게 말아 가슴과 머리를 보호해야 합니다!"
          },
          {
            category: "법규와 예절",
            q: "할로윈에 진짜 경찰관이나 소방관처럼 보이는 옷을 피하면 좋은 이유는 무엇일까요?",
            options: ["🚨 실제 대원과 헷갈릴 수 있어 피하고, 옷에 따라 적용 법도 달라서", "🎨 주황색 호박과 색깔이 안 어울려서", "🧺 빨래하기가 힘들어서", "📸 사진이 예쁘게 안 나와서"],
            answer: 0,
            hint: "힌트: 위급한 사고가 났을 때 누가 진짜 경찰·소방관인지 헷갈리면 큰일 나요!",
            explanation: "실제 대원처럼 보이는 옷은 혼동을 줄 수 있어 피합니다. 경찰제복과 소방복의 법률 조건은 서로 다릅니다."
          },
          {
            category: "세계 문화",
            q: "꽃잎과 촛불로 그리운 가족의 영혼을 맞이하는 멕시코의 축제는?",
            options: ["🌼 죽은 자들의 날", "🎄 크리스마스", "💦 송크란 물축제", "🍅 토마토 축제"],
            answer: 0,
            hint: "힌트: 영화 <코코>의 배경이 된 멕시코의 유네스코 무형유산 명절이에요!",
            explanation: "멕시코의 '죽은 자들의 날'은 마리골드꽃과 해골 가면으로 세상을 떠난 가족을 기쁘게 맞이하는 전통 축제예요!"
          },
          {
            category: "한국 명절 비교",
            q: "우리나라 세시풍속 중 밤이 가장 긴 날에 붉은 팥죽을 쑤어 나쁜 기운을 물리치고 이웃과 나누어 먹던 날은?",
            options: ["🥣 동지", "🎋 칠석", "🌸 삼짇날", "🍉 유두"],
            answer: 0,
            hint: "힌트: '동지팥죽'이라는 말을 떠올려 보세요!",
            explanation: "우리나라에서도 '동지'에 붉은 팥죽으로 나쁜 액운을 쫓고 가족·이웃의 건강을 기원했답니다!"
          }
        ]
      },
      "5-6": {
        label: "🌟 5~6학년",
        classDefault: "5학년 1반",
        stories: [
          {
            emoji: "🏛️",
            caption: "All Hallows' Eve와 서우인 축제",
            title: "1. '할로윈(Halloween)'의 역사적 어원",
            body: "할로윈은 11월 1일 모든 성인을 기리는 만성절(All Hallows' Day)의 전날 밤을 뜻하는 'All Hallows' Eve'가 줄어들어 생긴 이름이에요. 여기에 고대 켈트족이 여름의 끝과 새해를 기리던 '서우인(Samhain)' 풍습이 결합되었답니다.",
            keyPoint: "만성절 전야(All Hallows' Eve)와 고대 켈트족의 수확 축제가 결합해 탄생했어요!",
            sourceText: "출처: 미국 의회도서관",
            sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            emoji: "🕯️",
            caption: "아일랜드 이민과 문화 전파",
            title: "2. 순무 등불이 미국 호박 등불이 된 까닭",
            body: "아일랜드 민담 속 '잭(Jack)'이 속을 파낸 순무에 숯불을 넣고 떠돌았다는 이야기에서 잭오랜턴이 시작되었어요. 이후 19세기 아일랜드인들이 미국으로 이주하면서 순무보다 크고 조각하기 쉬운 호박을 사용하게 되었습니다.",
            keyPoint: "사람들의 이주와 환경 변화에 따라 전통 축제의 상징물도 함께 변화했어요!",
            sourceText: "출처: 스미스소니언 정원 기록",
            sourceUrl: "https://gardens.si.edu/american-garden-story/ghosts-of-pumpkins-past/"
          },
          {
            emoji: "🚗",
            caption: "소울링(Souling)과 트렁크 오어 트리팅",
            title: "3. 나눔과 안전 중심으로 진화한 축제 문화",
            body: "중세 유럽의 '소울링' 등 여러 풍습이 오늘날 '트릭 오어 트릿'의 기원으로 설명돼요. 현대에는 UNICEF 모금 활동이나 어른이 준비한 장소에서 간식을 나누는 방식도 있어요.",
            keyPoint: "옛 풍습과 오늘날의 다양한 참여 방식을 구분해 살펴보아요!",
            sourceText: "출처: 미국 의회도서관",
            sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            emoji: "⚖️",
            caption: "복장과 배려",
            title: "4. 실제 제복처럼 보이는 옷은 피하기",
            body: "축제 옷이 실제 경찰관이나 구조대원의 제복처럼 보이면 다른 사람이 혼동할 수 있어요. 경찰제복·군복에는 각각 별도의 법률과 예외 조건이 있으므로, 교사와 확인하고 나만의 창의적인 옷을 선택해요.",
            keyPoint: "표현의 자유만큼 사회 안전망과 공공질서를 지키는 시민 의식이 중요해요!",
            sourceText: "출처: 국가법령정보센터",
            sourceUrl: "https://law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1008601875"
          },
          {
            emoji: "🌏",
            caption: "유네스코 인류무형문화유산 비교",
            title: "5. 세계의 영혼·수확 명절과 다문화 존중",
            body: "할로윈의 옛 풍습과 달리, 멕시코의 '죽은 자들의 날(유네스코 무형유산)'은 꽃잎과 촛불, 제물로 세상을 떠난 가족을 기려요. 한국의 추석·동지처럼 각 나라의 고유한 문화적 맥락을 비교해 봐요.",
            keyPoint: "각 나라가 삶과 죽음, 수확을 기리는 고유한 문화적 맥락을 이해하고 존중해요!",
            sourceText: "멕시코 명절 근거: 유네스코",
            sourceUrl: "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            emoji: "🏠",
            caption: "비판적 수용과 건강한 홈로윈",
            title: "6. 상업적 유행을 넘어 주체적으로 즐기기",
            body: "과도한 소비나 인파 밀집, 야간 소음은 축제의 본래 의미를 흐릴 수 있어요. 외래 문화를 비판적으로 성찰하고, 가족·친구와 안전하고 소박하게 즐기는 '홈로윈' 문화를 직접 만들어 가요!",
            keyPoint: "무분별한 모방 대신 나와 이웃의 안전을 지키는 주체적인 문화 시민이 되어요!",
            sourceText: "교사용 안전 근거: 국민재난안전포털",
            sourceUrl: "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          }
        ],
        quizzes: [
          {
            category: "역사와 어원",
            q: "할로윈(Halloween)이라는 이름의 유래가 된 서방 기독교의 10월 31일 저녁 명칭은 무엇인가요?",
            options: ["🏛️ All Hallows' Eve (만성절 전야)", "🎄 Christmas Eve (성탄절 전야)", "🐣 Easter Sunday (부활절)", "🦃 Thanksgiving (추수감사절)"],
            answer: 0,
            hint: "힌트: 11월 1일 만성절(All Hallows' Day)의 전날 밤(Eve)을 줄인 말이에요!",
            explanation: "11월 1일 만성절(All Hallows' Day)의 전날 밤인 'All Hallows' Eve'가 축약되어 할로윈이 되었어요!"
          },
          {
            category: "문화의 기원",
            q: "중세 유럽에서 기도와 함께 '소울 케이크'를 받던 풍습으로, 트릭 오어 트릿의 여러 기원 설명 중 하나는?",
            options: ["🍪 소울링 (Souling)", "🍎 애플 보빙 (Apple bobbing)", "🏇 로데오 (Rodeo)", "🎿 컬링 (Curling)"],
            answer: 0,
            hint: "힌트: '소울 케이크(Soul cake)'에서 유래한 풍습 이름을 찾아보세요!",
            explanation: "소울링과 가이징 등 여러 옛 풍습이 오늘날 트릭 오어 트릿의 기원으로 설명돼요. 한 가지 이야기만으로 단정하지 않아요."
          },
          {
            category: "안전 문화",
            q: "어른이 준비한 행사 장소에서 자동차 트렁크를 꾸미고 간식을 나누는 방식은 무엇인가요?",
            options: ["🚗 트렁크 오어 트리팅 (Trunk-or-treating)", "🎢 테마파크 퍼레이드", "🏕️ 글램핑 페스티벌", "🚤 보트 레이싱"],
            answer: 0,
            hint: "힌트: 자동차의 짐칸(Trunk)을 꾸미는 활동이에요.",
            explanation: "자동차 짐칸을 꾸며 간식을 나누는 방식을 '트렁크 오어 트리팅'이라고 해요. 주차장에서는 차량 이동 구역과 어른의 안내를 확인해야 해요."
          },
          {
            category: "다중밀집 안전",
            q: "인파가 빽빽한 곳에서 옆 사람과 신체가 닿고 보행 속도가 느려질 때 국민재난안전포털이 권장하는 행동은?",
            options: ["↗️ 사람들의 이동 흐름에 따라 대각선 방향으로 즉시 벗어난다", "🛑 그 자리에 갑자기 멈춰 서서 친구를 기다린다", "🏃 인파가 걸어오는 정반대 방향으로 밀치며 역행한다", "🙇 바닥에 떨어진 물건을 주우려고 즉시 허리를 숙인다"],
            answer: 0,
            hint: "힌트: 흐름을 정면으로 거스르지 않고 대각선 방향 가장자리로 빠져나와야 해요!",
            explanation: "보행 속도가 느려지거나 어깨가 닿으면 위험 신호이므로 인파 흐름에 맞춰 대각선 방향으로 빠져나와야 안전합니다!"
          },
          {
            category: "위기 대응",
            q: "군중 속에서 넘어져 즉시 일어날 수 없는 위급한 상황일 때, 신체를 보호하기 위한 가장 올바른 자세는?",
            options: ["🙆 머리를 두 팔로 감싸고 다리를 몸쪽으로 당겨 공처럼 둥글게 만다", "🛌 팔다리를 대(大)자로 넓게 펴고 반듯하게 눕는다", "📱 떨어진 스마트폰을 찾기 위해 바닥을 더듬는다", "👟 벗겨진 신발을 다시 신으려고 앉아 있는다"],
            answer: 0,
            hint: "힌트: 머리와 흉강(가슴)을 보호하기 위해 몸을 둥글게 말아야 해요!",
            explanation: "일어날 수 없을 때는 머리를 두 팔로 감싸고 다리를 당겨 공처럼 둥글게 말아 흉강(가슴)과 머리를 보호해야 합니다!"
          },
          {
            category: "법과 질서",
            q: "축제에서 실제 경찰관 제복과 거의 같은 옷을 입고 싶어 하는 친구에게 어떤 말을 하면 좋을까요?",
            options: ["👮 실제 경찰관과 혼동될 수 있으니 피하고, 관련 규정과 예외는 선생님과 확인하자", "🎨 모자 색만 바꾸면 언제나 괜찮아", "📸 사진을 찍을 때만 입으면 어떤 경우에도 괜찮아", "🚨 다른 사람이 경찰관으로 착각할수록 재미있어"],
            answer: 0,
            hint: "힌트: 실제 공무원과 혼동될 가능성과 조건을 함께 생각해 보세요.",
            explanation: "경찰제복·유사경찰제복에는 별도 규정과 예외 조건이 있습니다. 학생 활동에서는 실제 경찰관과 혼동될 복장을 피하고, 자세한 법률 판단은 교사와 확인합니다."
          },
          {
            category: "다문화 비교",
            q: "2008년 유네스코 인류무형문화유산에 등재된 멕시코의 명절로, 마리골드꽃과 제단으로 가족의 영혼을 환영하는 축제는?",
            options: ["🌼 죽은 자들의 날 (Día de Muertos)", "🎭 베네치아 카니발", "🏮 중추절 등불축제", "💃 리우 삼바 축제"],
            answer: 0,
            hint: "힌트: 스페인어로 'Día de Muertos'라고 부르는 멕시코의 전통 축제예요!",
            explanation: "멕시코의 '죽은 자들의 날'은 악령을 쫓는 할로윈과 달리 세상을 떠난 가족의 영혼을 기쁘게 맞이하는 전통 명절입니다."
          },
          {
            category: "시민 의식",
            q: "할로윈데이를 대하는 성숙한 태도로 가장 바람직한 것은 무엇일까요?",
            options: ["🏠 외래 문화의 유래를 바로 알고 안전수칙과 타인 배려 예절을 지키며 즐긴다", "📢 밤늦게 주택가에서 큰 소리로 소음을 내며 돌아다닌다", "🗡️ 사람이 많은 곳에서 날카로운 모형 무기를 휘두른다", "🚮 길거리에 사탕 포장지와 쓰레기를 마음대로 버린다"],
            answer: 0,
            hint: "힌트: 나와 이웃의 안전, 공공예절을 먼저 생각하는 성숙한 시민 의식이 정답이에요!",
            explanation: "문화적 유래를 이해하고 나와 이웃의 안전을 배려하며 건전하게 즐기는 태도가 가장 중요합니다!"
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
        safe: false,
        reason: "실제 경찰관과 혼동될 수 있는 제복·장비는 피하고, 법률의 조건과 예외는 선생님과 확인해요."
      },
      {
        id: "c2",
        emoji: "🎃",
        name: "주황색 호박 망토",
        safe: true,
        reason: "걷기도 편하고 친구들과 기분 좋게 즐길 수 있는 안전한 할로윈 옷이에요!"
      },
      {
        id: "c3",
        emoji: "🧑‍🚒",
        name: "소방관 출동복과 헬멧",
        safe: false,
        reason: "실제 소방관과 혼동될 수 있는 출동복은 행사 분장으로 피하는 것이 좋아요. 경찰제복장비법이나 군복단속법이 똑같이 적용되는 것은 아니에요."
      },
      {
        id: "c4",
        emoji: "🧙‍♀️",
        name: "별 무늬 마법사 옷",
        safe: true,
        reason: "동화 속 주인공처럼 재미있고 안전하게 즐길 수 있는 멋진 분장이에요!"
      },
      {
        id: "c5",
        emoji: "🗡️",
        name: "뾰족한 장난감 칼·총",
        safe: false,
        reason: "사람이 많은 곳에서 뾰족하고 딱딱한 소품을 들면 옆 친구가 다칠 수 있어요!"
      },
      {
        id: "c6",
        emoji: "🪖",
        name: "실제 군인 전투복",
        safe: false,
        reason: "실제 군복·군용장구는 별도 규정이 있어요. 단순한 무늬 옷까지 똑같이 판단하지 말고 선생님과 확인해요."
      },
      {
        id: "c7",
        emoji: "🩸",
        name: "피 묻은 무서운 분장",
        safe: false,
        reason: "친구가 놀라고, 실제 다친 응급 환자가 생겼을 때 분장으로 오해받을 수 있어요!"
      },
      {
        id: "c8",
        emoji: "🧚",
        name: "야광 스티커 붙인 옷",
        safe: true,
        reason: "눈에 잘 띄는 꾸미기는 좋지만, 밤길에서는 어른의 안내와 주변 이동로를 계속 살펴요."
      },
      {
        id: "c9",
        emoji: "🎭",
        name: "앞이 안 보이는 가면",
        safe: false,
        reason: "눈구멍이 좁아 앞이 잘 안 보이는 가면을 쓰면 계단이나 길에서 넘어지기 쉬워요!"
      },
      {
        id: "c10",
        emoji: "🧣",
        name: "바닥에 끌리는 긴 망토",
        safe: false,
        reason: "옷자락이 너무 길어 발에 걸리면 다른 사람과 엉켜 넘어질 위험이 커요!"
      },
      {
        id: "c11",
        emoji: "🚑",
        name: "119 구급대원 조끼",
        safe: false,
        reason: "응급 현장에서 진짜 구급대원과 혼동을 주어 구조 활동을 방해할 수 있어요!"
      },
      {
        id: "c12",
        emoji: "🦸",
        name: "활동하기 편한 동화 옷",
        safe: true,
        reason: "시야가 트여 있고 움직이기 편해서 안전하고 즐겁게 축제를 즐길 수 있어요!"
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
    function sanitizeTeacher(input) {
      const raw = input && typeof input === 'object' ? input : {};
      const enumValue = (value, allowed, fallback) => allowed.includes(String(value)) ? String(value) : fallback;
      const minutes = Number(raw.minutes);
      const grade = enumValue(raw.grade, Object.keys(EDUCATION_DATA), '3-4');
      const theme = enumValue(raw.theme, Object.keys(THEMES), 'halloween');
      const direction = enumValue(raw.direction, ['culture','safety','all'], 'all');
      const defaultRequired = theme !== 'halloween' ? ['safety','quiz'] : minutes === 10 ? ['safety','quiz'] : minutes === 20 ? ['safety','costume','quiz'] : ACTIVITY_IDS;
      const required = Array.isArray(raw.required) ? [...new Set(raw.required.filter(id => ACTIVITY_IDS.includes(id)))] : defaultRequired;
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
    function applyTeacherSettings() {
      const read = id => document.getElementById(id).value;
      const next = sanitizeTeacher({grade:read('teacherGrade'), minutes:read('teacherMinutes'), mode:read('teacherMode'),
        direction:read('teacherDirection'), theme:read('teacherTheme'), required:[...document.querySelectorAll('.teacherRequired:checked')].map(input => input.value),
        order:read('teacherOrder').split(','), start:read('teacherStart')});
      state.teacher = next;
      switchGrade(next.grade);
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
      return !!state.stamps[{culture:'s1',safety:'s2',costume:'s3',quiz:'s4'}[id]];
    }
    function canDownloadParticipation() {
      return state.teacher.required.length > 0 && state.teacher.required.every(activityDone);
    }
    function confirmedGoalCount() {
      return SAFETY_GOALS.filter(goal => state.safetyConfirmed[goal.id]?.contentVersion === CONTENT_VERSION).length;
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
    const GRADE_FIELDS = ['storyIndex','readStories','lantern','scenarioIndex','completedScenarios','gameStage','avatar','avatarReason','avatarReasonText','costumeChoices','etiquetteChecked','quizIndex','quizScore','quizCombo','quizFiftyUsed','quizFirst','quizAttempts','quizOrders','quizHints','quizFifties','quizReview','quizReviewItems','quizAttemptRound','safetyFirst','safetyConfirmed','stamps','themeResponses'];
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
          return question && Array.isArray(order) && order.length===question.options.length &&
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
    function loadSavedProgress() {
      try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (validSaved(parsed)) {
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
    function speakText(text) {
      stopSpeaking();
      if (!state.soundOn || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
        showToast('이 기기에서 음성을 사용할 수 없어 화면의 글로 진행해요.', '🔈');
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang='ko-KR';
      utterance.rate=state.grade==='1-2' ? 0.85 : 0.95;
      try { window.speechSynthesis.speak(utterance); } catch (e) { showToast('음성을 사용할 수 없어 화면의 글로 진행해요.', '🔈'); }
    }

    // ==================== TAB 1: STORY & JACK-O'-LANTERN WORKSHOP ====================
    function renderStorySlide() {
      stopSpeaking();
      const gradeData = EDUCATION_DATA[state.grade];
      const stories = gradeData.stories;
      const current = stories[state.storyIndex];

      document.getElementById("currentGradeBadge").textContent = gradeData.label;
      document.getElementById("storyEmojiGraphic").textContent = current.emoji;
      document.getElementById("storyVisualCaption").textContent = current.caption;
      document.getElementById("storySlideTag").textContent = `카드 ${state.storyIndex + 1} / ${stories.length}`;
      document.getElementById("storySlideTitle").textContent = current.title;
      document.getElementById("storySlideBody").textContent = current.body;
      document.getElementById("storySlideKeyPoint").textContent = current.keyPoint;
      document.getElementById("storySourceLink").innerHTML = `<a href="${current.sourceUrl}" target="_blank" rel="noopener noreferrer" class="underline hover:text-amber-300">${current.sourceText} ↗</a>`;

      const pillsEl = document.getElementById("storyStepPills");
      pillsEl.innerHTML = "";
      stories.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `w-5 h-2 rounded-full transition ${idx === state.storyIndex ? "bg-amber-400" : state.readStories[idx] ? "bg-orange-500/60" : "bg-indigo-700"}`;
        btn.setAttribute("aria-label", `${idx + 1}번 카드로 이동`);
        btn.addEventListener("click", () => {
          const isNew = !state.readStories[idx];
          state.storyIndex = idx;
          state.readStories[idx] = true;
          if (isNew) awardOnce(`story:${idx}`, 'read', 10, "이야기 카드 읽기");
          playSound("click");
          renderStorySlide();
        });
        pillsEl.appendChild(btn);
      });

      const readCount = Object.keys(state.readStories).length;
      document.getElementById("storyReadCountBadge").textContent = `${readCount} / ${stories.length}`;

      document.getElementById("btnPrevStory").disabled = state.storyIndex === 0;
      const nextBtn = document.getElementById("btnNextStory");
      if (state.storyIndex === stories.length - 1) {
        nextBtn.textContent = "2. 길안전 놀이로 →";
      } else {
        nextBtn.textContent = "다음 카드 →";
      }

      if (readCount >= stories.length) {
        unlockStamp("s1", "놀이 1: 할로윈 이야기");
      }
    }

    function renderLanternWorkshop() {
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

      if (state.lantern.lit) {
        bodyEl.classList.add("lantern-lit");
        boxEl.classList.add("border-amber-400");
        btnEl.textContent = "🕯️ 등불 켜짐 ✨";
        capEl.textContent = "우와! 나만의 잭오랜턴이 밤길을 환하게 밝혀요!";
      } else {
        bodyEl.classList.remove("lantern-lit");
        boxEl.classList.remove("border-amber-400");
        btnEl.textContent = state.lantern.rewarded ? "🕯️ 등불 다시 켜기" : "🕯️ 등불 켜기 (+30🍬)";
        capEl.textContent = "눈·입·모자를 고르고 등불을 켜 보세요!";
      }
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
      const current = EDUCATION_DATA[state.grade].stories[state.storyIndex];
      const utter = new SpeechSynthesisUtterance(`${current.title}. ${current.body}. 핵심 쏙쏙! ${current.keyPoint}`);
      utter.lang = "ko-KR";
      utter.rate = state.grade === "1-2" ? 0.92 : 1.0;
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
    function renderScenario() {
      const item = SAFETY_SCENARIOS[state.scenarioIndex];
      const goal = SAFETY_GOALS[state.scenarioIndex];
      const low = state.grade === '1-2' ? SAFETY_SCENARIO_LOW[state.scenarioIndex] : null;
      document.getElementById("scenarioStepBadge").textContent = `약속 ${state.scenarioIndex + 1} / ${SAFETY_SCENARIOS.length}`;
      document.getElementById("scenarioEmoji").textContent = item.emoji;
      document.getElementById("scenarioStageTag").textContent = item.stage;
      document.getElementById("scenarioTitle").textContent = low?.title || item.title;
      document.getElementById("scenarioDesc").textContent = low?.desc || (state.grade === '5-6' ? `${item.desc} 두 행동의 위험과 근거를 비교해 보세요.` : item.desc);

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
            feedbackBox.className = "rounded-xl p-3 border bg-emerald-950/80 border-emerald-400/60 text-emerald-100 text-xs sm:text-sm space-y-1";
            feedbackBox.innerHTML = `<div class="font-black text-emerald-300">⭕ 적절한 선택이에요. 이유를 한 번 더 확인해요.</div><p>${choice.feedback}</p>`;
          } else {
            playSound("wrong");
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
      nextBtn.textContent = state.scenarioIndex === SAFETY_SCENARIOS.length - 1 ? "첫 약속으로" : "다음 약속 →";
      renderSafetyFollowup();
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
      check[1].forEach((option, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'w-full text-left rounded-xl bg-indigo-900 border border-indigo-600 px-3 py-2';
        button.textContent = `${index + 1}. ${option}`;
        button.disabled = !!state.safetyConfirmed[goal.id];
        button.addEventListener('click', () => {
          if (index === check[2]) {
            state.safetyConfirmed[goal.id] = {contentVersion: CONTENT_VERSION, at: Date.now()};
            awardOnce(`goal:${goal.id}`, 'confirmed', 20, '안전 목표 다시 확인');
            if (SAFETY_GOALS.every(g => state.safetyConfirmed[g.id]?.contentVersion === CONTENT_VERSION)) unlockStamp('s2', '안전 목표 6개 확인');
            document.getElementById('importantStatus').textContent = `${goal.title} 목표를 새 질문으로 확인했어요.`;
          } else {
            document.getElementById('importantStatus').textContent = '이 선택의 이유를 다시 살피고 판단해 보세요.';
          }
          saveProgress();
          renderSafetyFollowup();
          renderCertificateCanvas();
        });
        box.appendChild(button);
      });
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

    // GAME_MODULE

    // ==================== TAB 3: AVATAR DRESS-UP & COSTUME SORTING ====================
    function renderAvatarDressup() {
      document.getElementById("avatarCharIcon").textContent = state.avatar.char;
      document.getElementById("avatarCostumeIcon").textContent = state.avatar.costume;
      document.getElementById("avatarPropIcon").textContent = state.avatar.prop;

      syncButtonGroup(".avatar-char-btn", "data-char", state.avatar.char);
      syncButtonGroup(".avatar-costume-btn", "data-costume", state.avatar.costume);
      syncButtonGroup(".avatar-prop-btn", "data-prop", state.avatar.prop);
      syncButtonGroup(".cert-sticker-btn", "data-sticker", state.certSticker);
    }

    function renderCostumeCards() {
      const grid = document.getElementById("costumeCardsGrid");
      grid.innerHTML = "";
      let correctCount = 0;

      COSTUME_ITEMS.forEach(item => {
        const chosen = state.costumeChoices[item.id];
        const hasAnswered = chosen !== undefined;
        const isCorrect = hasAnswered && chosen === item.safe;
        if (isCorrect) correctCount++;

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
                ? `<div class="rounded-lg p-2 text-[11px] leading-snug ${
                    isCorrect ? "bg-emerald-950/90 text-emerald-200" : "bg-rose-950/90 text-rose-200"
                  }">
                    <div class="font-black mb-0.5 nowrap">${isCorrect ? "딩동댕! 👏" : "다시 확인!"}</div>
                    <div>${item.reason}</div>
                  </div><button type="button" class="speak-costume-feedback w-full rounded-lg bg-indigo-800 p-2 text-xs" data-id="${item.id}">🔈 이 옷의 이유 읽기</button>`
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
          if(item)speakText(`${item.name}. ${item.reason}`);
        });
      });

      document.getElementById("costumeScoreBadge").textContent = `${correctCount} / ${COSTUME_ITEMS.length}`;
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

    // QUIZ_MODULE

    // RESULTS_MODULE

    // ==================== NAVIGATION & GRADE SWITCHING ====================
    function renderAllLearning() {
      document.querySelectorAll('.grade-btn').forEach(btn=>{
        const active=btn.dataset.grade===state.grade;
        btn.classList.toggle('grade-active',active);
        btn.setAttribute('aria-pressed',String(active));
      });
      renderStamps();renderCandyHeader();renderStorySlide();renderLanternWorkshop();
      renderScenario();renderThemeSituations();renderAvatarDressup();renderCostumeCards();
      renderEtiquetteChecklist();renderQuiz();renderTeacherSettings();
      [['certSchoolInput','school'],['certClassInput','className'],['certNameInput','name'],['certPledgeInput','pledge']].forEach(([id,key])=>{
        document.getElementById(id).value=state.profile[key]||'';
      });
      document.getElementById('avatarSafetyReason').value=state.avatarReason||'';
      document.getElementById('avatarReasonText').value=state.avatarReasonText||'';
      renderCertificateCanvas();renderLearningSummary();
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
      renderStorySlide();
      renderScenario();
      renderCostumeCards();
      renderEtiquetteChecklist();
      renderStamps();
      renderThemeSituations();
      renderQuiz();
      renderCertificateCanvas();
      showToast(`${EDUCATION_DATA[gradeKey].label} 눈높이로 바뀌었어요!`, "🎈");
    }

    // ==================== INITIALIZATION & EVENT LISTENERS ====================
    window.addEventListener("DOMContentLoaded", () => {
      const offlineStatus=document.getElementById('offlineStatus');
      if ('serviceWorker' in navigator && (location.protocol === 'https:' || ['localhost','127.0.0.1'].includes(location.hostname))) {
        navigator.serviceWorker.register('./sw.js', {scope:'./'}).then(async()=>{
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
      const sharedTeacher = teacherFromUrl();
      if (sharedTeacher) {
        state.teacher = sharedTeacher;
        if (state.grade !== sharedTeacher.grade) { rememberGrade(); state.grade = sharedTeacher.grade; restoreGrade(state.grade); }
        state.activeTab = sharedTeacher.start;
        saveProgress();
      }

      // Re-render certificate once Google Fonts finish loading so Jua/Noto Sans KR appear crisply
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

      // Fun Story Emoji tap reaction
      document.getElementById("btnTapStoryEmoji").addEventListener("click", () => {
        playSound("correct");
        burstCandyConfetti(8);
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
        document.getElementById("exitStampSummaryText").textContent = `오늘 모은 안전 스탬프: ${count}/4개 · 사탕 ${state.candyPoints}점`;
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

      document.querySelectorAll(".nav-tab").forEach(btn => {
        btn.addEventListener("click", () => {
          playSound("click");
          switchTab(btn.getAttribute("data-tab"));
        });
      });

      document.getElementById("btnBoardMode").addEventListener("click", () => {
        state.boardMode = !state.boardMode;
        document.documentElement.classList.toggle("board-mode", state.boardMode);
        document.getElementById("boardModeLabel").textContent = state.boardMode ? "글씨 ON" : "글씨";
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
      document.getElementById("btnTeacherGuide").addEventListener("click", () => {
        playSound("click");
        renderTeacherSettings();openModal(teacherModal);
      });
      document.getElementById("btnCloseTeacherModal").addEventListener("click", () => {
        closeModal(teacherModal);
      });
      document.getElementById('btnApplyTeacher').addEventListener('click', () => {applyTeacherSettings();closeModal(teacherModal);});
      document.getElementById('btnNextStudent').addEventListener('click', () => {closeModal(teacherModal);startNewSession('student');});
      document.getElementById('teacherMinutes').addEventListener('change',e=>{document.getElementById('teacherPlan').textContent=LESSON_PLANS[e.target.value];});
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
        if (state.storyIndex > 0) {
          state.storyIndex--;
          state.readStories[state.storyIndex] = true;
          playSound("click");
          renderStorySlide();
        }
      });
      document.getElementById("btnNextStory").addEventListener("click", () => {
        const stories = EDUCATION_DATA[state.grade].stories;
        if (state.storyIndex < stories.length - 1) {
          const nextIdx = state.storyIndex + 1;
          const isNew = !state.readStories[nextIdx];
          state.storyIndex = nextIdx;
          state.readStories[nextIdx] = true;
          if (isNew) awardOnce(`story:${nextIdx}`, 'read', 10, "이야기 카드 읽기");
          playSound("click");
          renderStorySlide();
        } else {
          switchTab("tab-safety");
        }
      });

      document.querySelectorAll(".festival-card").forEach(card => {
        card.addEventListener("click", () => {
          playSound("click");
          document.querySelectorAll(".festival-card").forEach(c => c.classList.remove("ring-2", "ring-amber-400"));
          card.classList.add("ring-2", "ring-amber-400");
          const key = card.getAttribute("data-festival");
          if (FESTIVAL_DETAILS[key]) {
            document.getElementById("festivalCompareTitle").textContent = FESTIVAL_DETAILS[key].title;
            document.getElementById("festivalCompareDesc").textContent = FESTIVAL_DETAILS[key].desc;
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
          state.scenarioIndex = 0;
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
      gameCanvas.addEventListener("pointerdown", e => {
        gameCanvas.focus();
        if (!safetyGame.running || safetyGame.paused || safetyGame.route !== 'wide') return;
        const rect = gameCanvas.getBoundingClientRect();
        const scaleX = gameCanvas.width / rect.width;
        const scaleY = gameCanvas.height / rect.height;
        safetyGame.player.targetX = Math.max(20, Math.min(gameCanvas.width - 20, (e.clientX - rect.left) * scaleX));
        safetyGame.player.targetY = Math.max(20, Math.min(gameCanvas.height - 20, (e.clientY - rect.top) * scaleY));
        playSound("click");
      });

      document.querySelectorAll(".game-dpad-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          movePlayer(btn.getAttribute("data-dir"));
        });
      });
      window.addEventListener("keydown", e => {
        if (state.activeTab !== 'tab-safety' || document.activeElement !== gameCanvas || document.querySelector('[role="dialog"]:not(.hidden)')) return;
        if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); safetyGame.keys.add(e.key); }
      });
      window.addEventListener('keyup', e => safetyGame.keys.delete(e.key));
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
      document.getElementById('avatarSafetyReason').addEventListener('change',e=>{state.avatarReason=e.target.value;saveProgress();});
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
      document.getElementById('btnExportProgress').addEventListener('click',exportProgressJSON);
      document.getElementById('importProgressFile').addEventListener('change',event=>importProgressFiles([...event.target.files]));

      renderAllLearning();
    });
