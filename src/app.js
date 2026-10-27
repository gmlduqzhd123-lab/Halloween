    // ==================== ENRICHED GRADE-LEVEL EDUCATIONAL DATASET ====================
    const FESTIVAL_DETAILS = {
      halloween: {
        title: "할로윈 · 10월 31일 (영미권 등 여러 지역)",
        desc: "옛 켈트 지역의 계절 풍습(서우인)과 만성절 전야 등 여러 역사적 요소가 전해져요. 오늘날에는 지역과 가족에 따라 분장, 호박 등불 꾸미기, 이웃과 인사 나누기, 자선 모금 등 서로 다른 방식으로 즐깁니다.",
        food: "🎃 호박 파이 · 🍎 달콤한 사과 사탕(캔디 애플)",
        symbol: "🕯️ 잭오랜턴 등불 (옛날 아일랜드 순무 등불에서 유래)",
        greeting: "💬 \"해피 할로윈! 안전하고 즐거운 가을밤 보내요!\"",
        secret: "🕵️ 문화 도감 비밀: 미국에서는 간식 대신 유니세프 구호 모금함을 들고 이웃을 돕는 어린이들도 많아요!",
        question: "모든 지역의 할로윈 모습이 같을까요?",
        sourceText: "미국 의회도서관", sourceUrl: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
      },
      muertos: {
        title: "죽은 자들의 날 · 멕시코 (11월 1~2일)",
        desc: "세상을 떠난 가족을 사랑으로 기억하고 맞이하는 멕시코의 고유한 전통입니다. 지역과 가정마다 제단(오프렌다)을 꾸미는 모습이 다르며, 할로윈과 날짜가 가깝더라도 같은 축제로 묶을 수 없어요.",
        food: "🍞 판 데 무에르토(영혼의 달콤한 빵) · 🍫 따뜻한 초콜릿",
        symbol: "🌼 주황색 금잔화(마리골드) 꽃길 · ✂️ 알록달록 종이 장식(파펠 피카도)",
        greeting: "💬 \"사랑하는 가족을 마음속에 따뜻하게 기억해요!\"",
        secret: "🕵️ 문화 도감 비밀: 해골 장식(칼라베라)은 무서운 공포가 아니라 가족과의 영원한 사랑과 반가움을 뜻해요!",
        question: "이 문화를 소개할 때 먼저 말해야 할 뜻은 무엇일까요?",
        sourceText: "유네스코", sourceUrl: "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
      },
      korea: {
        title: "추석(한가위) · 대한민국 (음력 8월 15일)",
        desc: "음력 8월 15일을 중심으로 가족이 모여 한 해의 수확을 돌아보고 음식을 나누는 한국의 고유한 명절입니다. 할로윈이나 죽은 자들의 날과 기원도 날짜도 다르므로 각각의 의미를 따로 배웁니다.",
        food: "🥮 솔잎 향 가득한 송편 · 🍐 달콤한 햇과일과 토란국",
        symbol: "🌕 둥근 보름달 소원 빌기 · 💃 손잡고 도는 강강술래",
        greeting: "💬 \"더도 말고 덜도 말고 늘 한가위만 같아라!\"",
        secret: "🕵️ 문화 도감 비밀: 반달 모양 송편에는 앞으로 보름달처럼 꿈과 행복이 가득 차오르길 바라는 마음이 담겨 있어요!",
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
            "caption": "호박 탐정 잭과의 첫 만남",
            "title": "할로윈은 어떤 날일까요?",
            "body": "🎃 호박 탐정 잭이 반짝이는 돋보기를 들고 나타났어요! \"안녕! 10월 31일 할로윈에는 호박을 꾸미거나 재미있는 옷을 입기도 해. 하지만 모든 나라와 가족이 똑같은 놀이를 하는 건 아니란다!\"",
            "keyPoint": "10월 31일, 지역과 가족마다 다양하게 즐기는 날이에요.",
            "question": "우리 반 친구들과 함께한다면 어떤 놀이를 해 보고 싶나요?",
            "sourceText": "미국 의회도서관",
            "sourceUrl": "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            "art": "lantern",
            "caption": "순무 등불의 깜짝 변신",
            "title": "호박에 얼굴을 그려요 (잭오랜턴)",
            "body": "🕯️ 잭이 옛날 사진첩을 펼쳤어요. \"옛날 아일랜드 사람들은 호박 대신 단단한 '순무'를 파서 등불을 만들었어! 그러다 미국으로 건너간 뒤, 크고 파기 쉬운 주황색 호박으로 등불(잭오랜턴)을 만들게 됐지!\"",
            "keyPoint": "순무 등불이 오늘날의 호박 등불(잭오랜턴)로 변했어요.",
            "question": "내가 호박 등불을 만든다면 어떤 표정을 그려 줄까요?",
            "sourceText": "스미스소니언",
            "sourceUrl": "https://www.smithsonianmag.com/smart-news/when-people-carved-turnips-instead-of-pumpkins-for-halloween-180978922/"
          },
          {
            "art": "neighbor",
            "caption": "뭉치의 급한 발걸음",
            "title": "간식을 나눌 때 지킬 약속",
            "body": "🏃 성격 급한 친구 뭉치가 사탕 바구니를 들고 혼자 달려가려 해요! 그때 안전 대원 별이가 외쳤어요. \"잠깐만, 뭉치야! 모르는 집에 혼자 찾아가면 위험해. 꼭 부모님이나 선생님과 먼저 약속하고 함께 가야 해!\"",
            "keyPoint": "간식보다 나를 지켜 주는 어른과 함께하는 약속이 먼저예요.",
            "question": "이웃과 인사 나누기 전에 누구와 먼저 약속해야 할까요?",
            "sourceText": "UNICEF USA",
            "sourceUrl": "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            "art": "path",
            "caption": "휘청휘청 긴 망토 사건",
            "title": "분장 옷도 안전하게 골라요",
            "body": "🧙 뭉치가 눈구멍이 작고 바닥에 길게 끌리는 망토를 입고 왔다가 그만 발이 걸려 기우뚱했어요! 별이가 반짝이는 야광 스티커를 붙여 주며 말했어요. \"눈이 시원하게 잘 보이고 걷기 편한 옷이 진짜 멋진 옷이야!\"",
            "keyPoint": "화려한 옷보다 앞이 잘 보이고 걷기 편한 옷이 최고예요.",
            "question": "바닥에 길게 끌리는 망토는 어떻게 고쳐 입으면 좋을까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          },
          {
            "art": "flower",
            "caption": "멕시코에서 온 편지",
            "title": "멕시코에는 다른 기념일이 있어요",
            "body": "🌼 멕시코 친구 소피아가 주황색 금잔화 꽃잎 사진을 보내왔어요. \"우리나라의 '죽은 자들의 날'은 무서운 귀신 놀이가 아니라, 하늘나라에 계신 할머니·할아버지를 사랑으로 기억하고 맞이하는 따뜻한 가족 명절이야!\"",
            "keyPoint": "날짜가 비슷해도 다른 문화의 고유한 이름과 뜻을 존중해요.",
            "question": "할로윈과 죽은 자들의 날이 다르다는 걸 친구에게 어떻게 알려줄까요?",
            "sourceText": "유네스코",
            "sourceUrl": "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            "art": "classroom",
            "caption": "모두가 웃는 교실 파티",
            "title": "안전하고 다정하게 마무리해요",
            "body": "🏫 교실 파티가 시작됐어요! 뭉치가 장난감 거미로 친구를 놀래키려 하자, 잭이 다정하게 말했어요. \"친구가 싫어하는 장난은 바로 멈추고, 사탕 껍질도 함께 주워 담으면 우리 반 모두가 행복한 축제가 돼!\"",
            "keyPoint": "친구의 마음을 배려하고 함께 정리할 때 즐거움이 두 배가 돼요.",
            "question": "우리 반 축제에서 꼭 지키고 싶은 다정한 약속은 무엇인가요?",
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
            "caption": "호박 탐정 잭의 시간 여행 수첩",
            "title": "할로윈의 이야기는 하나일까요?",
            "body": "🎃 호박 탐정 잭이 고대 지도를 펼쳤어요! \"많은 친구들이 할로윈이 단 하나의 사건에서 시작됐다고 생각하지만, 사실 옛 켈트족의 가을 끝 명절 '서우인(Samhain)'과 만성절 전야(All Hallows' Eve) 등 여러 시대의 풍습이 만나 오늘날처럼 다양한 문화가 되었단다!\"",
            "keyPoint": "여러 시대의 풍습이 만났으므로 한 가지 기원으로 단정하지 않아요.",
            "question": "오래된 옛 풍습이 오늘날 즐거운 놀이로 바뀐 예는 무엇이 있을까요?",
            "sourceText": "미국 의회도서관",
            "sourceUrl": "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            "art": "lantern",
            "caption": "순무 조각칼과 주황색 호박의 비밀",
            "title": "등불 재료가 순무에서 호박으로 바뀐 까닭",
            "body": "🕯️ \"아일랜드에서는 원래 단단한 '순무'나 감자 속을 파서 등불을 만들었어!\" 잭이 웃으며 말했어요. \"그런데 사람들이 대서양을 건너 미국으로 이주해 보니, 순무보다 훨씬 크고 속을 파기 쉬운 주황색 호박이 가득했던 거야!\"",
            "keyPoint": "사람들이 이동하고 환경이 달라지면 문화의 재료와 모습도 변해요.",
            "question": "순무에서 호박으로 재료가 달라져도 변하지 않고 이어진 것은 무엇일까요?",
            "sourceText": "스미스소니언",
            "sourceUrl": "https://www.smithsonianmag.com/smart-news/when-people-carved-turnips-instead-of-pumpkins-for-halloween-180978922/"
          },
          {
            "art": "neighbor",
            "caption": "사탕 바구니 vs 오렌지 모금 상자",
            "title": "간식을 나누는 방법도 지역마다 다양해요",
            "body": "🍬 뭉치가 \"할로윈엔 무조건 모르는 집 문을 두드리는 거지?\"라고 묻자, 안전 대원 별이가 고개를 저었어요. \"아니야! 학교·마을 회관 행사로 즐기는 곳도 많고, 간식 대신 유니세프 모금 상자를 들고 이웃을 돕기도 해. 어디든 어른과 장소·시간부터 약속해야 해!\"",
            "keyPoint": "낯선 곳에 혼자 가지 않고 보호자와 방문 장소·시간을 먼저 정해요.",
            "question": "행사나 모임에 참여하기 전에 어른과 꼭 약속할 두 가지는 무엇일까요?",
            "sourceText": "UNICEF USA",
            "sourceUrl": "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            "art": "path",
            "caption": "별이의 축제장 안전 레이더",
            "title": "길과 비상 출구를 먼저 살펴요",
            "body": "🗺️ 축제 거리 입구에 도착하자 뭉치는 포토존으로 달려가려 했지만, 별이는 멈춰 서서 초록색 비상구 표지판과 넓은 우회 통로부터 손가락으로 짚어 보았어요. \"사람이 갑자기 몰릴 땐 사진보다 빠져나갈 넓은 길을 미리 알아 두는 게 진짜 탐정의 비결이야!\"",
            "keyPoint": "행사장에 들어가기 전 주변 이동로와 비상 출구부터 확인해요.",
            "question": "입구는 넓어 보이지만 안쪽 골목길이 좁다면 어떻게 행동해야 할까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          },
          {
            "art": "flower",
            "caption": "금잔화 꽃길과 가족의 기억",
            "title": "멕시코의 죽은 자들의 날과 비교해요",
            "body": "🌼 \"해골 장식이 있으니까 할로윈이랑 똑같은 축제지?\" 뭉치의 말에 잭이 멕시코 금잔화 꽃잎을 보여 주었어요. \"천만에! 멕시코의 '죽은 자들의 날'은 세상을 떠난 가족을 사랑으로 기억하고 맞이하는 유네스코 인류무형문화유산이야. 날짜가 가깝다고 같은 축제라고 부르면 안 돼!\"",
            "keyPoint": "비슷한 시기에 열려도 각 문화의 고유한 이름과 뜻을 따로 존중해요.",
            "question": "서로 다른 두 문화를 비교할 때 가장 먼저 확인해야 할 것은 무엇일까요?",
            "sourceText": "유네스코",
            "sourceUrl": "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            "art": "classroom",
            "caption": "우리 반 안전 탐정단의 약속",
            "title": "우리 반의 안전하고 다정한 계획을 세워요",
            "body": "🏫 교실에서도 호박등 꾸미기와 퀴즈로 멋진 가을 축제를 열 수 있어요! 별이가 칠판에 세 가지 황금 규칙을 적었어요. \"첫째, 책상 사이 이동 통로 비워 두기! 둘째, 친구가 싫어하는 무서운 장난 멈추기! 셋째, 끝난 뒤 내 자리 함께 정리하기!\"",
            "keyPoint": "안전한 동선과 친구 배려가 더해질 때 즐거운 축제가 돼요.",
            "question": "우리 반 축제를 모두가 기분 좋게 즐기기 위한 규칙을 골라 볼까요?",
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
            "caption": "역사 탐정 잭의 사료 검증",
            "title": "할로윈은 어떻게 형성됐을까요?",
            "body": "🎃 역사 탐정 잭이 미국 의회도서관 자료를 펼쳤습니다. \"고대 켈트 지역의 수확·계절 풍습(서우인)과 중세 만성절 전야(All Hallows' Eve) 등 여러 역사적 층위가 겹쳐 오늘날의 할로윈이 형성되었어. 따라서 단 하나의 기원으로 단순화하지 않고 여러 사료를 교차 확인하는 태도가 필요해!\"",
            "keyPoint": "문화의 역사는 복합적이므로 출처가 분명한 여러 자료를 읽습니다.",
            "question": "기원에 관한 설명이 자료마다 서로 다를 때 무엇을 확인해야 할까요?",
            "sourceText": "미국 의회도서관",
            "sourceUrl": "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/"
          },
          {
            "art": "lantern",
            "caption": "대서양을 건넌 등불의 문화사",
            "title": "순무 등불이 호박 등불이 되다",
            "body": "🕯️ 19세기 아일랜드와 스코틀랜드에서는 순무나 사탕무를 파서 등불을 만들었습니다. 이후 북미 대륙으로 이주한 사람들이 현지의 풍부하고 조각하기 쉬운 원산 작물인 '호박'을 활용하면서 오늘날의 잭오랜턴이 자리 잡았습니다.",
            "keyPoint": "문화는 사람들의 이주와 자연환경에 맞추어 끊임없이 변화합니다.",
            "question": "재료의 변화가 문화의 전파·적응 과정과 어떻게 연결될까요?",
            "sourceText": "스미스소니언",
            "sourceUrl": "https://www.smithsonianmag.com/smart-news/when-people-carved-turnips-instead-of-pumpkins-for-halloween-180978922/"
          },
          {
            "art": "neighbor",
            "caption": "자율성과 공동체 배려",
            "title": "축제 방식은 누가 정할까요?",
            "body": "🤝 지역과 공동체에 따라 이웃 방문, 학교 문화 행사, 구호 모금(Trick-or-Treat for UNICEF), 혹은 조용한 가족 모임 등 선택지가 다양합니다. 안전 대원 별이는 강조합니다. \"즐기는 방식의 다양성만큼이나 '참여하지 않을 자유'도 온전히 존중받아야 해!\"",
            "keyPoint": "참여 방식의 다양성과 참여하지 않을 선택권을 모두 존중합니다.",
            "question": "친구가 분장이나 행사 참여를 원하지 않는다면 어떻게 배려할까요?",
            "sourceText": "UNICEF USA",
            "sourceUrl": "https://www.unicefusa.org/trick-or-treat/groups"
          },
          {
            "art": "path",
            "caption": "병목 구간과 군중 유체 역학",
            "title": "좁은 길에서 걸음이 느려진다면",
            "body": "↗️ 넓은 광장에서 좁은 골목으로 인파가 몰리는 '병목 구간'에서는 보행 속도가 급격히 줄고 어깨 접촉이 잦아집니다. 이때 정면으로 역행하려 힘을 쓰면 위험하므로, 초기 신호를 읽고 흐름에 맞춰 대각선 가장자리나 대체 출구로 빠져나와야 합니다.",
            "keyPoint": "밀집 초기 신호(속도 저하·접촉)를 읽고 우회 동선을 선택합니다.",
            "question": "주 출구로 가는 길이 더 붐빈다면 어떤 경로를 선택해야 할까요?",
            "sourceText": "국민재난안전포털",
            "sourceUrl": "https://old.safekorea.go.kr/idsiSFK/neo/main_m/sot/massCrowd.html"
          },
          {
            "art": "flower",
            "caption": "문화 상대주의와 고유한 맥락",
            "title": "날짜가 비슷해도 같은 축제일까요?",
            "body": "🌼 멕시코의 '죽은 자들의 날(Día de los Muertos)'은 세상을 떠난 가족을 기리고 공동체의 유대를 확인하는 유네스코 인류무형문화유산입니다. 할로윈이나 한국의 추석과 시기·모습 일부가 닮아 보여도 각 문화가 형성된 역사적 맥락과 고유한 의미를 먼저 존중해야 합니다.",
            "keyPoint": "겉모습으로 단정하지 않고 각 문화의 고유한 맥락을 존중합니다.",
            "question": "다른 나라의 문화를 소개할 때 반드시 피해야 할 단정은 무엇일까요?",
            "sourceText": "유네스코",
            "sourceUrl": "https://ich.unesco.org/en/RL/dia-de-muertos-the-indigenous-festivity-dedicated-to-the-dead-00054"
          },
          {
            "art": "classroom",
            "caption": "모두를 위한 안전 설계자",
            "title": "우리 반 축제를 다시 설계한다면",
            "body": "🏫 진정한 축제는 '얼마나 화려한가'보다 '누구도 다치거나 소외되지 않는가'로 완성됩니다. 병목 없는 교실 이동 통로 확보, 참여 선택권 보장, 싫은 장난 즉시 멈추기, 공동 정리 약속을 사전 설계할 때 모두가 안전한 행사가 됩니다.",
            "keyPoint": "즐거움과 안전, 배려는 행사 기획 단계에서 함께 설계할 수 있습니다.",
            "question": "우리 반 행사 안내문에 최우선으로 넣을 핵심 규칙 두 가지는 무엇일까요?",
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
        title: "축제장 도착! 제일 먼저 무엇을 확인할까요?",
        desc: "입구에 도착하자 친구 뭉치가 손을 잡아끌어요! \"저기 좁은 골목 안쪽에서 선착순 50명에게 반짝이 호박 풍선을 준대! 출구는 이따 보고 지금 바로 뛰어가자!\"",
        scienceTip: "🔬 안전 과학 노트: 입구는 넓어도 안쪽이 좁아지는 '병목 구간'은 단 몇 분 만에 빠져나오기 힘들어지므로 들어가기 전에 비상구와 우회 통로, 집결 장소를 먼저 확인해야 해요.",
        choices: [
          {
            text: "풍선보다 먼저 넓은 이동로와 비상 출구·집결 장소를 눈으로 확인해요.",
            correct: true,
            feedback: "딩동댕! 도착하자마자 비상 이동로와 넓은 출구를 미리 확인해 두면 위급할 때 당황하지 않고 대피할 수 있어요.",
            aftermath: "🎬 [1분 뒤 웹툰 후일담] 별이와 함께 초록색 비상구 표지판과 넓은 공원 출구를 먼저 확인했어요! 잠시 뒤 좁은 골목이 꽉 막혔지만 우리는 여유 있는 옆길로 안전하게 구경을 시작했답니다!"
          },
          {
            text: "선착순 풍선이 떨어지기 전에 사람이 몰린 좁은 골목으로 먼저 달려가요.",
            correct: false,
            feedback: "아찔해요! 출구도 모른 채 좁은 골목이나 비탈길 인파 속으로 달려들어가면 오도 가도 못 하는 위험에 빠질 수 있어요.",
            aftermath: "🎬 [1분 뒤 아찔 상황] 풍선을 받으려 좁은 골목 끝까지 뛰어갔다가 뒤에서 밀려드는 사람들에 막혀 20분 동안 옴짝달싹 못 하고 진땀을 뺐어요!"
          }
        ]
      },
      {
        stage: "약속 2 · 길을 걸을 때",
        emoji: "🚶‍♂️",
        title: "양방향으로 걷는 길에서는 어떻게 이동할까요?",
        desc: "앞뒤에서 많은 사람들이 걸어오는데 멋진 퍼레이드 행렬이 지나가요! 뭉치가 외쳤어요. \"우와, 지금 바로 길 한가운데 멈춰 서서 단체 셀카 찍자!\"",
        scienceTip: "🔬 안전 과학 노트: 많은 사람이 걷는 길에서 한 사람이 갑자기 멈추면 뒤따라오던 사람들의 시야가 가려져 3초 만에 연쇄 추돌(도미노 현상)이 일어날 수 있어요.",
        choices: [
          {
            text: "오른쪽(우측통행) 흐름에 맞춰 걷고, 사진은 길가 안전한 곳에서 찍어요.",
            correct: true,
            feedback: "맞아요! 양방향 통행 시 오른쪽으로 걷고, 멈춰야 할 때는 먼저 통로 가장자리 안전한 곳으로 이동해야 해요.",
            aftermath: "🎬 [1분 뒤 웹툰 후일담] 오른쪽 흐름을 따라 걸어 넓은 벤치 쉼터로 나온 뒤 사진을 찍었어요! 지나가던 사람들과 부딪히지 않고 훨씬 멋진 인생 사진을 건졌답니다!"
          },
          {
            text: "멋진 장면을 놓칠 수 없으니 걷는 사람들 한가운데 멈춰 서서 찍어요.",
            correct: false,
            feedback: "위험해요! 보행 흐름 한가운데서 갑자기 멈추거나 반대 방향으로 비집고 들어가면 뒤따라오던 사람들이 연달아 넘어질 수 있어요.",
            aftermath: "🎬 [1분 뒤 아찔 상황] 길 한가운데서 갑자기 멈추는 바람에 바로 뒤에서 걷던 친구들이 부딪혀 넘어질 뻔하고 휴대폰도 떨어뜨릴 뻔했어요!"
          }
        ]
      },
      {
        stage: "약속 3 · 위험 신호 감지",
        emoji: "↗️",
        title: "옆 사람과 어깨가 자꾸 닿고 걸음이 느려졌어요!",
        desc: "인기 부스 앞을 지나는데 점점 사람이 불어나 옆 사람과 어깨가 계속 부딪혀요. 뭉치는 \"기다린 시간이 아까운데 조금만 더 안쪽으로 비집고 들어가자!\"고 해요.",
        scienceTip: "🔬 안전 과학 노트: 1㎡(가로·세로 1m) 안에 5명 이상 모이면 내 힘으로 방향을 바꾸기 어려워져요. 어깨가 자꾸 닿고 속도가 느려지는 순간이 바로 탈출 골든타임이에요!",
        choices: [
          {
            text: "혼잡 위험 신호이므로 흐름에 맞춰 대각선 가장자리 넓은 곳으로 벗어나요.",
            correct: true,
            feedback: "정확해요! 신체 접촉이 시작되면 흐름을 정면으로 거스르지 말고 대각선 방향 가장자리 넓은 곳으로 바로 벗어나야 해요.",
            aftermath: "🎬 [1분 뒤 웹툰 후일담] 물결을 타듯 대각선 방향(↗️)으로 한 걸음씩 움직여 1분 만에 넓은 광장 가장자리로 빠져나왔어요! 뭉치도 \"휴, 빠져나오길 정말 잘했다!\"며 가슴을 쓸어내렸어요."
          },
          {
            text: "기다린 시간이 아까우니 더 좁은 안쪽으로 파고들거나 역행하며 나가요.",
            correct: false,
            feedback: "위험해요! 인파의 흐름을 정면으로 거슬러 역행하거나 더 좁은 곳으로 들어가면 큰 압력을 받아 넘어지기 쉬워요.",
            aftermath: "🎬 [1분 뒤 아찔 상황] 반대 방향으로 억지로 몸을 돌려 밀치려다 양쪽에서 밀려오는 힘에 균형을 잃어 더 위험한 상황에 놓일 뻔했어요!"
          }
        ]
      },
      {
        stage: "약속 4 · 숨 쉴 공간 확보",
        emoji: "🛡️",
        title: "사람들에게 떠밀릴 때 숨 쉴 공간을 지키는 자세는?",
        desc: "갑자기 뒤쪽에서 관람객이 몰려 내 의지와 상관없이 몸이 떠밀리기 시작했어요! 답답하지 않게 내 폐가 숨 쉴 공간을 어떻게 지켜야 할까요?",
        scienceTip: "🔬 안전 과학 노트: 우리가 숨을 쉴 때는 갈비뼈(흉강)가 앞으로 약 3~5cm 부풀어 올라야 해요. 팔짱을 끼거나 가방을 가슴 앞에 안으면 소중한 호흡 공간이 지켜져요!",
        choices: [
          {
            text: "무리하게 밀치지 않고 두 손·가방을 가슴 앞에 모아 숨 쉴 공간을 확보해요.",
            correct: true,
            feedback: "최고예요! 두 손을 가슴 앞에 모으거나 가방을 가슴 앞에 안으면 압박 속에서도 폐가 숨을 쉴 수 있는 공간(흉강)을 지킬 수 있어요.",
            aftermath: "🎬 [1분 뒤 웹툰 후일담] 가방을 가슴 앞에 든든하게 안고 두 발을 어깨너비로 벌려 중심을 잡았어요! 숨 쉴 공간을 지킨 채 흐름을 따라 무사히 넓은 곳으로 이동했답니다!"
          },
          {
            text: "양팔을 차렷 자세로 옆구리에 붙이거나 앞사람의 등을 세게 밀어내요.",
            correct: false,
            feedback: "위험해요! 팔을 내려놓으면 가슴이 바로 압박되어 숨쉬기 힘들어지고, 앞사람을 밀치면 연쇄 넘어짐이 일어날 수 있어요.",
            aftermath: "🎬 [1분 뒤 아찔 상황] 양팔을 내린 채 앞사람을 밀치려다 가슴 앞 공간이 좁아져 숨이 가빠지고 발까지 엉킬 뻔했어요!"
          }
        ]
      },
      {
        stage: "약속 5 · 떨어진 물건 대처",
        emoji: "🙅",
        title: "인파 속에서 걷다가 아끼는 물건이 바닥에 떨어졌어요!",
        desc: "사람들이 빽빽하게 걸어오고 있는데, 뭉치가 가장 아끼는 한정판 호박 키링과 신발 한 짝이 벗겨졌어요! \"내 보물이야! 1초만 숙여서 얼른 주워 줘!\"",
        scienceTip: "🔬 안전 과학 노트: 빽빽한 인파 속에서 한 사람이 허리를 숙이면 시야에서 사라져 뒷사람이 걸려 넘어지고, 순식간에 여러 사람이 겹쳐 넘어지는 큰 사고로 이어져요.",
        choices: [
          {
            text: "아깝더라도 인파 속에선 절대 숙이지 않고 안전한 가장자리로 먼저 나와요.",
            correct: true,
            feedback: "맞아요! 국민재난안전포털에서도 '소지품이나 신발이 떨어졌다고 주우려고 허리를 숙이면 매우 위험하다'고 가장 강조하고 있어요.",
            aftermath: "🎬 [1분 뒤 웹툰 후일담] 뭉치의 손을 꼭 잡고 먼저 안전 펜스 밖으로 빠져나왔어요! 인파가 지나간 뒤 안전요원 선생님께 말씀드려 키링도 안전하게 되찾았답니다!"
          },
          {
            text: "1초면 되니까 걸어오는 사람들 발 사이로 즉시 허리를 숙여 주워요.",
            correct: false,
            feedback: "절대 안 돼요! 인파 속에서 허리를 숙이는 단 1~2초가 가장 위험해요. 어떤 비싼 물건보다 내 몸과 생명이 먼저예요!",
            aftermath: "🎬 [1분 뒤 아찔 상황] 허리를 숙이는 순간 바로 뒤에서 걷던 사람들이 미처 보지 못해 부딪히면서 손등을 밟히고 넘어질 뻔했어요!"
          }
        ]
      },
      {
        stage: "약속 6 · 넘어졌을 때 & 신고",
        emoji: "🚑",
        title: "위급하거나 넘어져서 바로 일어날 수 없을 때는?",
        desc: "주변에서 위험 신호가 커지거나, 만약 인파 속에서 넘어졌는데 바로 일어나기 어려운 위급한 순간에는 어떻게 몸을 보호해야 할까요?",
        scienceTip: "🔬 안전 과학 노트: 넘어졌을 때 무릎을 당겨 공처럼 몸을 둥글게 말면(태아 자세), 가장 중요한 머리·목·심장·폐가 팔과 다리 보호막 안쪽에 들어가 압박을 줄일 수 있어요.",
        choices: [
          {
            text: "112·119에 알리고, 두 팔로 머리를 감싼 채 무릎을 당겨 둥글게 말아요.",
            correct: true,
            feedback: "정확한 위기 대처 행동이에요! 머리와 가슴(장기)을 보호하는 자세를 기억하고 다른 상황도 새 질문으로 확인해 보세요.",
            aftermath: "🎬 [1분 뒤 웹툰 후일담] 침착하게 몸을 보호하고 주변 어른과 119 안전요원에게 도움을 요청해 모두가 무사히 안전 구역으로 대피했어요!"
          },
          {
            text: "넘어진 자리에서 떨어진 가방부터 찾으려고 팔다리를 길게 뻗어 더듬어요.",
            correct: false,
            feedback: "위험해요! 팔다리를 길게 뻗거나 물건을 찾으려 하면 머리와 가슴이 보호되지 않아 크게 다칠 수 있어요!",
            aftermath: "🎬 [1분 뒤 아찔 상황] 가방을 찾으려고 팔을 뻗는 동안 머리와 가슴이 그대로 노출되어 주변 사람들의 발에 부딪힐 뻔했어요!"
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
        story: "💬 민수의 고민: \"진짜 경찰관 아저씨랑 똑같은 제복에 수갑까지 차고 축제 거리에 나가면 다들 깜짝 놀라겠지?\"",
        afterLook: "🕵️✨ 변신 완료: 체크무늬 동화 속 명탐정 망토 & 돋보기",
        reason: "실제 경찰관과 혼동될 수 있는 제복·장비는 피하고, 법률의 조건과 예외는 선생님과 확인해요.",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 경찰 제복 대신 동화 속 명탐정 망토나 별빛 보안관 모자로 꾸며요!"
      },
      {
        id: "c2",
        emoji: "🎃",
        name: "주황색 호박 망토",
        checkPoint: "👟 보행·움직임 안전",
        safe: true,
        story: "💬 지우의 코디: \"무릎 위로 오는 가벼운 주황색 호박 망토에 운동화를 신었더니 계단 오르내리기도 정말 편해!\"",
        afterLook: "🎃🌟 안전 패스: 야광 별 배지를 단 무릎 길이 호박 망토",
        reason: "걷기도 편하고 친구들과 기분 좋게 즐길 수 있는 안전한 할로윈 옷이에요!",
        reform: "✨ 이렇게 입으면 더 안전해요: 망토 길이를 무릎 위로 맞추고 똑딱단추로 고정하면 계단에서도 걸리지 않아요!"
      },
      {
        id: "c3",
        emoji: "🧑‍🚒",
        name: "소방관 출동복과 헬멧",
        checkPoint: "🚨 구조대 혼동 방지",
        safe: false,
        story: "💬 현우의 고민: \"실제 119 대원님들이 입는 방화복이랑 똑같은 옷을 입으면 영웅처럼 보이지 않을까?\"",
        afterLook: "🦸🧡 변신 완료: 주황빛 호박 슈퍼히어로 조끼",
        reason: "실제 소방관과 혼동될 수 있는 출동복은 행사 분장으로 피하는 것이 좋아요. 경찰제복장비법이나 군복단속법이 똑같이 적용되는 것은 아니에요.",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 출동복은 소방관님께 양보하고 주황색 호박 영웅 조끼로 바꿔 입어요!"
      },
      {
        id: "c4",
        emoji: "🧙‍♀️",
        name: "별 무늬 마법사 옷",
        checkPoint: "👀 시야 확보",
        safe: true,
        story: "💬 서연이의 코디: \"반짝이는 별 무늬 마법사 옷에 챙이 짧은 고깔모자를 썼더니 앞도 시원하게 잘 보여!\"",
        afterLook: "🧙‍♀️⭐ 안전 패스: 반짝이는 별빛 마법사 로브",
        reason: "동화 속 주인공처럼 재미있고 안전하게 즐길 수 있는 멋진 분장이에요!",
        reform: "✨ 이렇게 입으면 더 안전해요: 모자 챙이 눈을 가리지 않게 살짝 올려 쓰고 가벼운 천 소재를 골라요!"
      },
      {
        id: "c5",
        emoji: "🗡️",
        name: "뾰족한 장난감 칼·총",
        checkPoint: "🛡️ 소품 부상 방지",
        safe: false,
        story: "💬 도윤이의 고민: \"멋진 기사가 되려고 길고 딱딱한 플라스틱 칼을 휘두르며 복도를 걸어가 볼까 해!\"",
        afterLook: "🪄🎃 변신 완료: 폭신한 솜방울 별 요술봉 & 호박 바구니",
        reason: "사람이 많은 곳에서 뾰족하고 딱딱한 소품을 들면 옆 친구가 다칠 수 있어요!",
        reform: "✂️ 이렇게 바꿔 입어요: 딱딱한 무기 소품 대신 폭신한 솜방울 요술봉이나 둥근 호박 바구니를 들어요!"
      },
      {
        id: "c6",
        emoji: "🪖",
        name: "실제 군인 전투복",
        checkPoint: "🚨 제복 규정 확인",
        safe: false,
        story: "💬 태오의 고민: \"삼촌 옷장에 있던 진짜 군인 전투복과 장구를 그대로 착용하고 행사장에 가도 될까?\"",
        afterLook: "🧑‍🚀🌌 변신 완료: 은하계 우주 탐험가 점프슈트",
        reason: "실제 군복·군용장구는 별도 규정이 있어요. 단순한 무늬 옷까지 똑같이 판단하지 말고 선생님과 확인해요.",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 전투복 대신 우주 탐험가 복장이나 숲속 요정 망토로 멋지게 변신해요!"
      },
      {
        id: "c7",
        emoji: "🩸",
        name: "피 묻은 무서운 분장",
        checkPoint: "🤝 친구 배려·응급 구분",
        safe: false,
        story: "💬 수아의 고민: \"진짜 다친 것처럼 빨간 물감과 무서운 상처 스티커를 잔뜩 붙여서 친구들을 깜짝 놀래킬래!\"",
        afterLook: "🎨🌙 변신 완료: 야광 달빛·호박 페이스 페인팅 스티커",
        reason: "친구가 놀라고, 실제 다친 응급 환자가 생겼을 때 분장으로 오해받을 수 있어요!",
        reform: "✂️ 이렇게 바꿔 입어요: 무서운 상처 분장 대신 반짝이는 별·달·호박 페이스 스티커를 붙여요!"
      },
      {
        id: "c8",
        emoji: "🧚",
        name: "야광 스티커 붙인 옷",
        checkPoint: "🌙 야간 시인성 확보",
        safe: true,
        story: "💬 하은이의 코디: \"어두운 저녁 길에서도 멀리서 나를 한눈에 볼 수 있게 소매와 가방에 야광 별 스티커를 붙였어!\"",
        afterLook: "🧚✨ 안전 패스: 360도 반짝이는 야광 별빛 요정 코디",
        reason: "눈에 잘 띄는 꾸미기는 좋지만, 밤길에서는 어른의 안내와 주변 이동로를 계속 살펴요.",
        reform: "✨ 이렇게 입으면 더 안전해요: 가방·소매·운동화 뒤쪽에 야광 반사띠를 붙이면 어두운 곳에서도 잘 보여요!"
      },
      {
        id: "c9",
        emoji: "🎭",
        name: "앞이 안 보이는 가면",
        checkPoint: "👀 시야 가림 주의",
        safe: false,
        story: "💬 준호의 고민: \"얼굴 전체를 다 덮는 유령 가면을 썼더니 눈구멍이 작아서 발밑 계단이 잘 안 보여!\"",
        afterLook: "👑🐱 변신 완료: 시야가 활짝 트인 야광 호박 왕관 머리띠",
        reason: "눈구멍이 좁아 앞이 잘 안 보이는 가면을 쓰면 계단이나 길에서 넘어지기 쉬워요!",
        reform: "✂️ 이렇게 바꿔 입어요: 얼굴 전체를 덮는 가면 대신 시야가 활짝 트인 귀여운 머리띠나 모자를 써요!"
      },
      {
        id: "c10",
        emoji: "🧣",
        name: "바닥에 끌리는 긴 망토",
        checkPoint: "👟 걸림·넘어짐 주의",
        safe: false,
        story: "💬 시우의 고민: \"발목 밑으로 길게 끌리는 드라큘라 망토를 입었더니 걸을 때마다 뒷사람 발에 자꾸 밟혀!\"",
        afterLook: "🦇✨ 변신 완료: 활동하기 편한 무릎 위 숏 망토 & 날개 배지",
        reason: "옷자락이 너무 길어 발에 걸리면 다른 사람과 엉켜 넘어질 위험이 커요!",
        reform: "✂️ 이렇게 바꿔 입어요: 발목에 걸리지 않게 허리·무릎 길이의 짧은 망토나 날개 장식으로 바꿔 입어요!"
      },
      {
        id: "c11",
        emoji: "🚑",
        name: "119 구급대원 조끼",
        checkPoint: "🚨 응급 구조 보호",
        safe: false,
        story: "💬 예린이의 고민: \"진짜 119 구급대원 조끼와 응급 가방을 메고 가면 사람들이 진짜 구급대원인 줄 알겠지?\"",
        afterLook: "🧚‍♀️🌈 변신 완료: 무지개 마음 치유 요정 망토",
        reason: "응급 현장에서 진짜 구급대원과 혼동을 주어 구조 활동을 방해할 수 있어요!",
        reform: "✂️ 이렇게 바꿔 입어요: 실제 구급 조끼 대신 동화 속 마음 치유 요정이나 무지개 마법사로 꾸며요!"
      },
      {
        id: "c12",
        emoji: "🦸",
        name: "활동하기 편한 동화 옷",
        checkPoint: "👟 활동성·안전 최고",
        safe: true,
        story: "💬 유진이의 코디: \"시야도 활짝 트여 있고 두 손이 자유로운 동화 속 주인공 옷에 편한 운동화를 신었어!\"",
        afterLook: "🦸🌟 안전 패스: 두 손이 자유로운 슈퍼 탐험가 코디",
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
      if (typeof bgmOn === 'boolean' && (!bgmOn || bgmVolume <= 0)) {
        url.searchParams.set('bgm', '0');
      }
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
    function updatePairBatonBanner() {
      const banner = document.getElementById('pairBatonBanner');
      if (!banner) return;
      const isPairs = state.teacher && state.teacher.mode === 'pairs' && state.activeTab !== 'tab-cert';
      banner.classList.toggle('hidden', !isPairs);
      if (isPairs) {
        let idx = 0;
        if (state.activeTab === 'tab-culture') idx = storyProgress().storyIndex || 0;
        else if (state.activeTab === 'tab-safety') idx = state.scenarioIndex || 0;
        else if (state.activeTab === 'tab-costume') idx = typeof costumePage === 'number' ? costumePage : 0;
        else if (state.activeTab === 'tab-quiz') idx = state.quizIndex || 0;
        const turnName = idx % 2 === 0 ? '🐥 짝꿍 1(A)' : '🐣 짝꿍 2(B)';
        banner.textContent = `🤝 릴레이 바통 터치! 이번 순서는 [${turnName}] 차례예요 · 화면을 터치하고 짝꿍에게 이유를 말해 주세요!`;
      }
    }
    const HIGHLIGHT_KEYWORDS = ['무형문화유산', '가슴 앞 공간', '비상 출구', '집결 장소', '우측통행', '넓은 길', '비상구', '행사장', '오른쪽', '대각선', '출구', '병목', '배려', '존중'];
    function renderHighlightedText(el, rawText) {
      if (!el) return;
      const text = String(rawText || '');
      el.replaceChildren();
      const pattern = new RegExp(`(${HIGHLIGHT_KEYWORDS.join('|')})`, 'g');
      const parts = text.split(pattern);
      parts.forEach(part => {
        if (!part) return;
        if (HIGHLIGHT_KEYWORDS.includes(part)) {
          const mark = document.createElement('span');
          mark.className = 'kw-highlight';
          mark.textContent = part;
          el.appendChild(mark);
        } else {
          el.appendChild(document.createTextNode(part));
        }
      });
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
        } else if (type === "magic") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(587.33, now);
          osc.frequency.setValueAtTime(783.99, now + 0.07);
          osc.frequency.setValueAtTime(987.77, now + 0.14);
          osc.frequency.setValueAtTime(1174.66, now + 0.21);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
          osc.start(now);
          osc.stop(now + 0.42);
        } else if (type === "whistle") {
          osc.type = "sine";
          osc.frequency.setValueAtTime(880, now);
          osc.frequency.setValueAtTime(1046.5, now + 0.08);
          osc.frequency.setValueAtTime(880, now + 0.16);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.start(now);
          osc.stop(now + 0.28);
        } else if (type === "passport") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(330, now);
          osc.frequency.setValueAtTime(659.25, now + 0.06);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
          osc.start(now);
          osc.stop(now + 0.22);
        } else if (type === "fanfare") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.08);
          osc.frequency.setValueAtTime(783.99, now + 0.16);
          osc.frequency.setValueAtTime(1046.5, now + 0.24);
          osc.frequency.setValueAtTime(1318.5, now + 0.34);
          gain.gain.setValueAtTime(0.22, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.62);
          osc.start(now);
          osc.stop(now + 0.62);
        } else if (type === "clue1") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.08);
          gain.gain.setValueAtTime(0.16, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
          osc.start(now);
          osc.stop(now + 0.24);
        } else if (type === "clue2") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(659.25, now);
          osc.frequency.setValueAtTime(783.99, now + 0.08);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.start(now);
          osc.stop(now + 0.28);
        } else if (type === "clue3") {
          osc.type = "triangle";
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.06);
          osc.frequency.setValueAtTime(783.99, now + 0.12);
          osc.frequency.setValueAtTime(1046.5, now + 0.18);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
          osc.start(now);
          osc.stop(now + 0.42);
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
    function isAllStampsMaster() {
      return ["s1", "s2", "s3", "s4"].every(k => !!state.stamps[k]);
    }
    function unlockStamp(key, label) {
      if (!state.stamps[key]) {
        state.stamps[key] = true;
        awardOnce(`stamp:${key}`, 'completion', 50, `${label} 활동 완료`);
        saveProgress();
        const allDone = isAllStampsMaster();
        playSound(allDone ? "fanfare" : "stamp");
        burstCandyConfetti(allDone ? 36 : 22);
        showToast(allDone ? `👑 4대 활동 스탬프 올클리어! 히든 마스터 보상이 해금되었어요!` : `[${label}] 활동 완료를 기록했어요.`, allDone ? "👑" : "🏅");
        renderStamps();
        renderCandyHeader();
        renderLanternWorkshop();
        renderCertificateCanvas();
        if (typeof renderLearningSummary === 'function') renderLearningSummary();
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
      const stageJourneyEl = document.getElementById("stageJourneyBadge");
      if (stageJourneyEl) stageJourneyEl.textContent = `나의 배움 ${count} / 4`;
      if (count >= 4) {
        document.body.dataset.masterTheme = "gold";
      } else {
        delete document.body.dataset.masterTheme;
      }
      const masterBanner = document.getElementById("masterFinaleBanner");
      if (masterBanner) {
        masterBanner.classList.toggle("hidden", count < 4);
        if (count >= 4) {
          masterBanner.textContent = "👑 축하합니다! 4대 활동 스탬프 올클리어 달성! 호박 공방의 [🌟 전설의 마스터 후광]과 임명장 [로열 마스터 인장]이 해금되었어요!";
        }
      }
      const masterHatBtn = document.getElementById("btnMasterLanternHat");
      if (masterHatBtn) {
        masterHatBtn.classList.toggle("hidden", count < 4);
      }
    }

    // ==================== BACKGROUND MUSIC (BGM) & VOLUME CONTROLLER ====================
    const BGM_PREF_KEY = "halloween_edu_bgm_v1";
    let bgmOn = true;
    let bgmVolume = 35;
    let lastNonZeroBgmVolume = 35;
    let isTtsSpeaking = false;

    function loadBgmPrefs() {
      try {
        const raw = localStorage.getItem(BGM_PREF_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === "object") {
            if (typeof parsed.bgmOn === "boolean") bgmOn = parsed.bgmOn;
            if (Number.isFinite(parsed.bgmVolume)) {
              bgmVolume = Math.max(0, Math.min(100, Math.round(parsed.bgmVolume)));
              if (bgmVolume > 0) lastNonZeroBgmVolume = bgmVolume;
            }
            if (Number.isFinite(parsed.lastNonZeroBgmVolume) && parsed.lastNonZeroBgmVolume > 0) {
              lastNonZeroBgmVolume = Math.max(5, Math.min(100, Math.round(parsed.lastNonZeroBgmVolume)));
            }
          }
        }
      } catch (_) {}
      try {
        if (new URLSearchParams(location.search).get("bgm") === "0") {
          bgmOn = false;
        }
      } catch (_) {}
    }

    function saveBgmPrefs() {
      try {
        localStorage.setItem(BGM_PREF_KEY, JSON.stringify({ bgmOn, bgmVolume, lastNonZeroBgmVolume }));
      } catch (_) {}
    }

    function applyBgmVolume() {
      const audio = document.getElementById("bgmAudio");
      if (!audio) return;
      const baseVol = bgmOn ? Math.max(0, Math.min(1, bgmVolume / 100)) : 0;
      const isFullMood = document.body.classList.contains("lesson-not-started") ||
        state.activeTab === "tab-cert" ||
        (typeof safetyGame !== "undefined" && safetyGame.running && !safetyGame.paused);
      const tabScale = isFullMood ? 1 : 0.72;
      audio.volume = isTtsSpeaking ? baseVol * 0.25 : baseVol * tabScale;
      audio.muted = !bgmOn || bgmVolume <= 0;
    }

    function syncBgmUI() {
      const btn = document.getElementById("btnBgmToggle");
      const icon = document.getElementById("bgmIcon");
      const label = document.getElementById("bgmLabel");
      const slider = document.getElementById("bgmVolumeSlider");
      const volText = document.getElementById("bgmVolumeText");
      const active = bgmOn && bgmVolume > 0;
      if (btn) {
        btn.setAttribute("aria-pressed", String(active));
        btn.classList.toggle("is-off", !active);
        btn.title = active ? "배경음악 끄기 (클릭)" : "배경음악 켜기 (클릭)";
      }
      if (icon) icon.textContent = active ? "🎵" : "🔇";
      if (label) label.textContent = active ? "BGM ON" : "BGM OFF";
      if (slider) slider.value = String(active ? bgmVolume : 0);
      if (volText) volText.textContent = `${active ? bgmVolume : 0}%`;
      applyBgmVolume();
    }

    function syncBgmPlayback() {
      const audio = document.getElementById("bgmAudio");
      if (!audio) return;
      applyBgmVolume();
      const exitScreen = document.getElementById("exitScreen");
      const isExited = exitScreen && !exitScreen.classList.contains("hidden");
      if (bgmOn && bgmVolume > 0 && !isExited && document.visibilityState !== "hidden") {
        if (audio.paused) {
          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        }
      } else if (!audio.paused) {
        audio.pause();
      }
    }

    function pauseBgmAudio() {
      const audio = document.getElementById("bgmAudio");
      if (audio && !audio.paused) {
        try { audio.pause(); } catch (_) {}
      }
    }

    // ==================== SPEECH SYNTHESIS CLEANUP ====================
    function stopSpeaking() {
      try {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
      } catch (e) {}
      isTtsSpeaking = false;
      applyBgmVolume();
      const lbl = document.getElementById("speakBtnLabel");
      if (lbl) lbl.textContent = "소리 듣기";
      document.querySelectorAll(".tts-reading-active").forEach(el => el.classList.remove("tts-reading-active"));
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
      isTtsSpeaking = true;
      applyBgmVolume();
      utterance.onend = () => { isTtsSpeaking = false; applyBgmVolume(); };
      utterance.onerror = () => { isTtsSpeaking = false; applyBgmVolume(); };
      try { window.speechSynthesis.speak(utterance); } catch (e) { isTtsSpeaking = false; applyBgmVolume(); showToast('음성을 사용할 수 없어 화면의 글로 진행해요.', '🔈'); }
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
    function storyArtwork(kind, clueLevel = 0) {
      const scene = STORY_SCENES[kind] || STORY_SCENES.pumpkin;
      const fx1 = clueLevel >= 1 ? '<g class="svg-clue-sparkle"><circle cx="26" cy="24" r="5" fill="#f59e0b"/><circle cx="194" cy="28" r="6" fill="#f59e0b"/><circle cx="24" cy="130" r="4" fill="#10b981"/></g>' : '';
      const fx2 = clueLevel >= 2 ? '<circle cx="110" cy="92" r="64" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 5" class="svg-clue-sparkle"/>' : '';
      const fx3 = clueLevel >= 3 ? '<g><rect x="134" y="10" width="76" height="22" rx="11" fill="#d97706"/><text x="172" y="25" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#fff">🕵️ 단서완성</text></g>' : '';
      return `<svg viewBox="0 0 220 170" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="170" rx="25" fill="#fff1da"/><circle cx="35" cy="37" r="6" fill="#ffe0a0"/><circle cx="181" cy="35" r="4" fill="#ffe0a0"/><path d="M0 146q110-28 220 0v24H0z" fill="#e3e9d6"/>${scene}${fx1}${fx2}${fx3}</svg>`;
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
    const STORY_EXTRA_CLUES = [
      [
        "🕵️ 그림 속 비밀(2/3): 호박 꼭지가 초록색인 이유는 방금 밭에서 수확한 신선한 가을 작물이라는 뜻이에요!",
        "🌟 탐정 특급 상식(3/3): 옛 켈트족 달력에서는 10월 31일이 한 해의 마지막 날이었고 11월 1일이 새해 첫날이었대요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 호박 주변의 노란 원은 밤길을 안전하게 밝혀 주는 따뜻한 등불 빛을 뜻해요!",
        "🌟 탐정 특급 상식(3/3): 아일랜드 박물관에는 지금도 100년 전에 만든 진짜 ‘순무 잭오랜턴’ 유물이 보관되어 있어요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 두 집 사이에 그려진 하트 모양은 이웃끼리 서로 배려하고 안전을 지키는 마음을 나타내요!",
        "🌟 탐정 특급 상식(3/3): 미국에서는 1950년부터 어린이들이 작은 주황색 모금함을 들고 전 세계 친구들을 돕는 나눔 활동도 이어오고 있어요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 그림 오른쪽 초록색 화살표 표지판은 어느 건물에서나 출구를 뜻하는 국제 공통 비상구 기호예요!",
        "🌟 탐정 특급 상식(3/3): 우리 눈은 어두운 곳에서 초록색 빛을 가장 잘 구별할 수 있어서 전 세계 비상구 표지판이 초록색이 되었어요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 주황색 금잔화 꽃잎은 향기가 아주 진해서 가족들이 집을 잘 찾아오도록 꽃길을 만드는 데 쓰여요!",
        "🌟 탐정 특급 상식(3/3): 유네스코는 2008년 멕시코의 ‘죽은 자들의 날’을 인류 전체가 소중히 보전할 무형문화유산으로 등재했어요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 교실 칠판 옆이 넓게 비어 있는 이유는 친구들이 부딪히지 않고 안전하게 걸어 다니는 통로이기 때문이에요!",
        "🌟 탐정 특급 상식(3/3): 우리 반 모두가 웃는 최고의 축제는 ‘재미있는 놀이 + 안전한 통로 + 다정한 배려’ 세 가지가 만날 때 완성돼요!"
      ]
    ];
    const EVENT_STORY_EXTRA_CLUES = [
      [
        "🕵️ 그림 속 비밀(2/3): 여러 사람이 한꺼번에 움직이는 행사 날에는 시작 직전과 끝난 직후가 가장 붐벼요!",
        "🌟 탐정 특급 상식(3/3): 도착하자마자 모둠 인원과 이동 순서를 먼저 확인하면 혼잡 속에서도 흩어지지 않아요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 초록색 비상구 표지판은 어두운 곳이나 연기 속에서도 눈에 가장 잘 띄는 색이에요!",
        "🌟 탐정 특급 상식(3/3): 들어왔던 입구 하나만 기억하지 말고 다른 방향의 비상 출구도 함께 알아 두면 훨씬 안전해요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 양방향 통로에서 오른쪽으로 걸으면 마주 오는 사람과 어깨가 부딪히지 않아요!",
        "🌟 탐정 특급 상식(3/3): 사진을 찍거나 친구를 기다릴 때는 길 한가운데가 아니라 가장자리 안전한 곳으로 먼저 비켜서요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 계단이나 좁은 문 앞처럼 길이 갑자기 좁아지는 곳을 ‘병목 구간’이라고 불러요!",
        "🌟 탐정 특급 상식(3/3): 걸음이 느려지고 옆 사람과 어깨가 자꾸 닿기 시작하면 즉시 덜 붐비는 넓은 곳으로 이동해요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 붐비는 길에서 허리를 숙이면 뒤따라오던 사람들의 시야가 가려져 연쇄 넘어짐이 일어날 수 있어요!",
        "🌟 탐정 특급 상식(3/3): 물건은 사람이 줄어든 뒤에 어른과 함께 찾고, 인파 속에서는 언제나 내 몸과 호흡 공간을 먼저 지켜요!"
      ],
      [
        "🕵️ 그림 속 비밀(2/3): 높은 깃발이나 안내 데스크처럼 멀리서도 한눈에 보이는 곳을 집결 장소로 정하면 찾기 쉬워요!",
        "🌟 탐정 특급 상식(3/3): 친구나 선생님을 놓쳤을 때는 혼자 돌아다니지 말고 약속한 장소에서 기다리거나 112·119에 도움을 요청해요!"
      ]
    ];
    function formatStoryClueText(storyIndex, level) {
      const base = getStoryClues()[storyIndex] || "";
      const cluePool = isHalloweenTheme() ? STORY_EXTRA_CLUES : EVENT_STORY_EXTRA_CLUES;
      const extra = cluePool[storyIndex % cluePool.length] || [];
      if (level <= 1) {
        return `${base} (👆 그림을 한 번 더 누르면 숨은 단서 2/3단계가 열려요!)`;
      }
      if (level === 2) {
        return `${base}\n${extra[0]} (👆 한 번 더 누르면 마지막 3/3단계 특급 상식이 열려요!)`;
      }
      return `${base}\n${extra[0]}\n${extra[1]}`;
    }
    const festivalStamps = {};
    let currentFestivalKey = 'halloween';

    function syncCultureStepBadges() {
      const doneMap = {
        story: !!state.stamps?.s1,
        craft: !!state.lantern?.lit,
        compare: Object.keys(festivalStamps).length > 0
      };
      document.querySelectorAll('[data-culture-step]').forEach(btn => {
        btn.classList.toggle('step-complete-bridge', !!doneMap[btn.dataset.cultureStep]);
      });
    }
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
      syncCultureStepBadges();
      if (stage === 'compare') renderFestivalQuiz(currentFestivalKey);
      if (focus) {
        const heading = document.querySelector(`[data-culture-stage="${stage}"] h2, [data-culture-stage="${stage}"] h3`);
        if (heading) { heading.tabIndex = -1; heading.focus(); }
      }
    }
    function renderFestivalQuiz(key) {
      currentFestivalKey = key;
      const detail = FESTIVAL_DETAILS[key];
      const descEl = document.getElementById('festivalCompareDesc');
      if (detail) {
        document.querySelectorAll('.festival-card').forEach(c => {
          const isMatch = c.getAttribute('data-festival') === key;
          c.classList.toggle('ring-2', isMatch);
          c.classList.toggle('ring-amber-400', isMatch);
        });
        const titleEl = document.getElementById('festivalCompareTitle');
        if (titleEl) titleEl.textContent = detail.title;
        if (descEl) descEl.textContent = detail.desc;
        const qEl = document.getElementById('festivalCompareQuestion');
        if (qEl) qEl.textContent = detail.question;
        const link = document.getElementById('festivalSourceLink');
        if (link) {
          link.href = detail.sourceUrl;
          link.textContent = `자료: ${detail.sourceText} ↗`;
        }
      }
      if (detail && descEl && descEl.parentElement) {
        let timelineEl = document.getElementById('festivalTimelineBar');
        if (!timelineEl) {
          timelineEl = document.createElement('div');
          timelineEl.id = 'festivalTimelineBar';
          timelineEl.className = 'flex flex-wrap items-center justify-between gap-1.5 rounded-xl bg-indigo-950/90 border border-indigo-700/80 p-2 text-xs';
          descEl.insertAdjacentElement('beforebegin', timelineEl);
        }
        timelineEl.replaceChildren();
        const tlWrap = document.createElement('div');
        tlWrap.className = 'flex flex-wrap items-center gap-1';
        [
          ['korea', '🌕 9~10월 한국 추석'],
          ['halloween', '🎃 10월 31일 할로윈'],
          ['muertos', '🌼 11월 1~2일 멕시코 죽은 자들의 날']
        ].forEach(([fKey, fLabel]) => {
          const pill = document.createElement('button');
          pill.type = 'button';
          pill.dataset.timelineFestival = fKey;
          pill.className = `mini-chip text-[11px] ${fKey === key ? 'is-picked' : ''}`;
          pill.textContent = fLabel;
          pill.addEventListener('click', () => {
            const tabBtn = document.querySelector(`.festival-card[data-festival="${fKey}"]`);
            if (tabBtn) tabBtn.click();
            else renderFestivalQuiz(fKey);
          });
          tlWrap.appendChild(pill);
        });
        const speakGreetBtn = document.createElement('button');
        speakGreetBtn.type = 'button';
        speakGreetBtn.id = 'btnSpeakFestivalGreeting';
        speakGreetBtn.className = 'mini-chip text-[11px]';
        speakGreetBtn.textContent = '🗣️ 인사말·의미 듣기';
        speakGreetBtn.addEventListener('click', () => {
          speakText(`${detail.title}. 나누는 인사: ${detail.greeting}. 대표 상징물: ${detail.symbol}. ${detail.desc}`);
        });
        timelineEl.appendChild(tlWrap);
        timelineEl.appendChild(speakGreetBtn);

        let passportEl = document.getElementById('festivalPassportGrid');
        if (!passportEl) {
          passportEl = document.createElement('div');
          passportEl.id = 'festivalPassportGrid';
          passportEl.className = 'grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs';
          descEl.insertAdjacentElement('afterend', passportEl);
        }
        passportEl.replaceChildren();
        [
          ['🍽️ 전통 음식', detail.food],
          ['🕯️ 대표 상징물', detail.symbol],
          ['🗣️ 나누는 인사', detail.greeting],
          ['💡 문화 도감 비밀', detail.secret]
        ].forEach(([label, text]) => {
          if (!text) return;
          const item = document.createElement('div');
          item.className = 'rounded-lg bg-indigo-900/60 border border-indigo-700/70 px-2.5 py-1.5 leading-snug';
          item.innerHTML = `<div class="font-extrabold text-amber-300 text-[11px]">${label}</div><div class="text-indigo-100 font-bold mt-0.5">${text}</div>`;
          passportEl.appendChild(item);
        });
      }
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
          if (idx === quiz.correct) {
            awardOnce(`festival:${key}`, 'stamp', 10, `${detail?.title || key} 문화 도감 확인`);
          }
          playSound(idx === quiz.correct ? 'passport' : 'wrong');
          renderFestivalQuiz(key);
          renderCertificateCanvas();
        });
        qBox.appendChild(btn);
      });
      if (festivalStamps[key] !== undefined) {
        const isRight = festivalStamps[key] === quiz.correct;
        fBox.className = `text-xs font-bold mt-1 ${isRight ? 'text-emerald-300' : 'text-rose-300'}`;
        const stampTotal = Object.keys(FESTIVAL_QUIZZES).filter(k => festivalStamps[k] === FESTIVAL_QUIZZES[k].correct).length;
        fBox.textContent = isRight
          ? `${quiz.feedback} (문화 여권 스탬프 ${stampTotal}/3)`
          : '❌ 문화 도감 설명을 다시 읽고 그 문화의 고유한 뜻을 골라 보세요!';
      } else {
        fBox.className = 'hidden text-xs font-bold';
        fBox.textContent = '';
      }
      syncCultureStepBadges();
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
    const glossaryBoxExpanded = {};
    function renderGlossaryBox(boxId, keys) {
      const box = document.getElementById(boxId);
      if (!box) return;
      box.replaceChildren();
      const toolsOpen = document.body.classList.contains("tools-open");
      const activeTerm = openedGlossaryByBox[boxId];
      if (!toolsOpen && !glossaryBoxExpanded[boxId] && !activeTerm) {
        const openBtn = document.createElement("button");
        openBtn.type = "button";
        openBtn.className = "mini-chip text-xs";
        openBtn.textContent = "💡 어려운 낱말 뜻 보기";
        openBtn.addEventListener("click", () => {
          glossaryBoxExpanded[boxId] = true;
          playSound("click");
          renderGlossaryBox(boxId, keys);
        });
        box.appendChild(openBtn);
        return;
      }
      const row = document.createElement("div");
      row.className = "flex flex-wrap items-center gap-1.5";
      const label = document.createElement("span");
      label.className = "font-extrabold text-amber-300 text-[11px]";
      label.textContent = "📚 쉬운 말 사전:";
      row.appendChild(label);
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
      if (!toolsOpen && glossaryBoxExpanded[boxId]) {
        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.className = "mini-chip text-[11px]";
        closeBtn.textContent = "접기 ▲";
        closeBtn.addEventListener("click", () => {
          glossaryBoxExpanded[boxId] = false;
          openedGlossaryByBox[boxId] = null;
          playSound("click");
          renderGlossaryBox(boxId, keys);
        });
        row.appendChild(closeBtn);
      }
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
      const clueKey = storyKey(progress.storyIndex);
      const clueLevel = Number(storyClueOpened[clueKey] || 0);
      const picture = document.getElementById("storyEmojiGraphic");
      picture.dataset.clueLevel = String(clueLevel);
      picture.innerHTML = storyArtwork(current.art, clueLevel);
      picture.setAttribute('aria-label', current.caption);
      document.getElementById("storyVisualCaption").textContent = current.caption;
      const clueBox = document.getElementById("storyClueBox");
      if (clueBox) {
        clueBox.classList.toggle("hidden", clueLevel === 0);
        clueBox.textContent = clueLevel > 0
          ? formatStoryClueText(progress.storyIndex, clueLevel)
          : "👆 그림을 눌러 숨은 이야기 단서를 찾아보세요!";
      }
      const isStoryCore10 = Number(state.teacher?.minutes) === 10 && [0, 3, 4].includes(progress.storyIndex);
      document.getElementById("storySlideTag").textContent = `카드 ${progress.storyIndex + 1} / ${stories.length}${pairTurnSuffix(progress.storyIndex)}${isStoryCore10 ? ' · ⚡10분 핵심' : ''}`;
      document.getElementById("storySlideTitle").textContent = current.title;
      renderHighlightedText(document.getElementById("storySlideBody"), current.body);
      renderHighlightedText(document.getElementById("storySlideKeyPoint"), current.keyPoint);
      document.getElementById("storyThinkingQuestion").textContent = current.question;
      document.getElementById("storySourceLink").innerHTML = `<a href="${current.sourceUrl}" target="_blank" rel="noopener noreferrer" class="underline hover:text-amber-300">${current.sourceText} ↗</a>`;
      updatePairBatonBanner(progress.storyIndex);

      const pollKey = storyKey(progress.storyIndex);
      const pollBox = document.getElementById("storyPollBox");
      const pollFeedback = document.getElementById("storyPollFeedback");
      const pairTalkBox = document.getElementById("storyPairTalkBox");
      const poll = getStoryPolls()[progress.storyIndex];
      const showPairTalk = state.teacher?.mode === "pairs" || document.body.classList.contains("tools-open");
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
            pairTalkBox.classList.toggle("hidden", !showPairTalk);
            pairTalkBox.replaceChildren();
            if (showPairTalk) {
              const otherIdx = pickedIdx === 0 ? 1 : 0;
              const otherOpt = poll.options[otherIdx] || poll.options[0];
              const rowEl = document.createElement("div");
              rowEl.className = "flex flex-wrap items-center justify-between gap-2";
              const promptEl = document.createElement("span");
              promptEl.className = "font-bold text-amber-200 leading-snug";
              promptEl.textContent = `🤝 짝꿍 나눔: 내가 고른 이유와 [${otherOpt}] 생각도 나눠 봐요!`;
              const doneBtn = document.createElement("button");
              doneBtn.type = "button";
              doneBtn.id = "btnPairTalkDone";
              const isTalkDone = !!storyPollPicked[`${pollKey}:talk`];
              doneBtn.className = `mini-chip text-[11px] shrink-0 ${isTalkDone ? "is-picked" : ""}`;
              doneBtn.textContent = isTalkDone ? "🌟 나눔 완료!" : "🗣️ 이야기 나눴어요!";
              doneBtn.addEventListener("click", () => {
                storyPollPicked[`${pollKey}:talk`] = true;
                playSound("correct");
                awardOnce(storyRewardId(progress.storyIndex), 'pairtalk', 10, "짝꿍 생각 나누기");
                renderStorySlide();
              });
              rowEl.appendChild(promptEl);
              rowEl.appendChild(doneBtn);
              pairTalkBox.appendChild(rowEl);
            }
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
      const hasPickedStoryPoll = storyPollPicked[pollKey] !== undefined;
      nextBtn.classList.toggle("next-step-ready", hasPickedStoryPoll);
      nextBtn.classList.toggle("next-step-calm", !hasPickedStoryPoll);
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
      syncCultureStepBadges();
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

      if (state.lantern.hat === "🌟" && !isAllStampsMaster()) {
        state.lantern.hat = "🎩";
      }
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

      const LANTERN_SPELLS = {
        "🎩": { role: "별빛 마법사 잭", spell: "✨ 안전 주문: \"초록 비상구 먼저 찾고, 좁은 길은 대각선으로!\"" },
        "👑": { role: "꼬마 안전 국왕", spell: "👑 왕실 칙령: \"걸을 때는 오른쪽, 떨어진 물건보다 내 몸이 먼저!\"" },
        "🎀": { role: "다정한 배려 요정", spell: "🎀 배려 주문: \"친구가 싫다는 장난은 멈추고, 함께 웃으며 정리해요!\"" },
        "🌱": { role: "싱그러운 호박 탐정", spell: "🕵️ 탐정 암호: \"어깨가 닿으면 위험 신호! 팔짱 끼고 숨 쉴 공간 수호!\"" },
        "🌟": { role: "전설의 안전 그랜드 마스터", spell: "👑 마스터 주문: \"4대 안전·문화 비법을 모두 깨우친 우리 반 최고 수호자!\"" }
      };
      const persona = LANTERN_SPELLS[state.lantern.hat] || LANTERN_SPELLS["🎩"];
      if (state.lantern.lit) {
        bodyEl.classList.add("lantern-lit");
        boxEl.classList.add("border-amber-400");
        btnEl.textContent = cfg.btnOff;
        capEl.textContent = isHalloweenTheme()
          ? `🕯️ [${persona.role}] ${persona.spell}`
          : `🕯️ ${cfg.litCaption} (${persona.spell})`;
      } else {
        bodyEl.classList.remove("lantern-lit");
        boxEl.classList.remove("border-amber-400");
        btnEl.textContent = cfg.btnOn;
        capEl.textContent = `${cfg.unlitCaption} (현재 캐릭터: ${persona.role})`;
      }
      if (recipeEl) {
        const recipe = PUMPKIN_RECIPES[currentRecipeIdx % PUMPKIN_RECIPES.length];
        const matched = state.lantern.eye === recipe.eye && state.lantern.mouth === recipe.mouth && state.lantern.hat === recipe.hat;
        recipeEl.replaceChildren();
        const span = document.createElement("span");
        span.textContent = matched
          ? `🎉 [${recipe.name}] 레시피 완성! (${persona.role}) `
          : `🎯 호박 미션: [${recipe.name}] (${recipe.eye} + ${recipe.mouth} + ${recipe.hat}) `;
        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "mini-chip whitespace-nowrap shrink-0 ml-1";
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
      syncCultureStepBadges();
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
      const bodyEl = document.getElementById("storySlideBody");
      const keyBoxEl = document.getElementById("storyKeyPointBox");
      if (bodyEl) bodyEl.classList.add("tts-reading-active");
      if (keyBoxEl) keyBoxEl.classList.add("tts-reading-active");
      isTtsSpeaking = true;
      applyBgmVolume();
      utter.onend = () => {
        isTtsSpeaking = false;
        applyBgmVolume();
        document.getElementById("speakBtnLabel").textContent = "소리 듣기";
        if (bodyEl) bodyEl.classList.remove("tts-reading-active");
        if (keyBoxEl) keyBoxEl.classList.remove("tts-reading-active");
      };
      utter.onerror = () => {
        isTtsSpeaking = false;
        applyBgmVolume();
        document.getElementById("speakBtnLabel").textContent = "소리 듣기";
        if (bodyEl) bodyEl.classList.remove("tts-reading-active");
        if (keyBoxEl) keyBoxEl.classList.remove("tts-reading-active");
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
    const scenarioSpotPicked = {};
    const emergencyCallState = { q1Done: false, q2Done: false, wrongMsg: "" };
    const SCENARIO_HAZARD_SPOTS = [
      {
        prompt: "👀 안전 레이더: 도착 직후 눈으로 가장 먼저 찾아야 할 안전 표식은?",
        spots: [
          { label: "🟩 초록색 비상구(EXIT) 표지판", target: true, tip: "딩동댕! 비상구와 대피 동선을 가장 먼저 스캔해요." },
          { label: "🎈 화려한 포토존 풍선 장식", target: false, tip: "풍선보다 초록색 비상구(EXIT) 표지판을 먼저 찾아봐요!" }
        ]
      },
      {
        prompt: "👀 안전 레이더: 양방향 통로에서 부딪힘을 막아 주는 안전 기준은?",
        spots: [
          { label: "➡️ 오른쪽 통행 화살표 차선", target: true, tip: "정답! 서로 오른쪽으로 걸으면 정면충돌을 예방해요." },
          { label: "📸 길 한가운데 멈춰 선 모둠", target: false, tip: "길 한가운데 멈추면 병목이 생겨요. 오른쪽 차선을 찾아봐요!" }
        ]
      },
      {
        prompt: "👀 안전 레이더: 인파가 갑자기 빽빽해지는 위험 신호 지점은?",
        spots: [
          { label: "⚠️ 어깨가 닿는 좁은 병목 입구", target: true, tip: "정답! 어깨가 닿기 시작하면 대각선 가장자리로 빠져나가요." },
          { label: "🌳 한산하고 넓은 공원 벤치", target: false, tip: "좁아지는 병목 입구가 위험 신호예요!" }
        ]
      },
      {
        prompt: "👀 안전 레이더: 사람이 밀릴 때 가장 먼저 확보해야 할 내 몸 공간은?",
        spots: [
          { label: "👐 가슴 앞 숨 쉴 공간(흉강)", target: true, tip: "정답! 팔짱을 끼듯 가슴 앞 공간을 확보해 호흡을 지켜요." },
          { label: "🎒 등 뒤에 멘 무거운 가방", target: false, tip: "숨을 쉬려면 가슴 앞 공간(흉강)을 먼저 지켜야 해요!" }
        ]
      },
      {
        prompt: "👀 안전 레이더: 복잡한 인파 속에서 절대 숙이면 안 되는 위험 요소는?",
        spots: [
          { label: "🍬 발밑에 떨어진 사탕·소품", target: true, tip: "정답! 인파 속에서 바닥 물건을 주우려 숙이는 것이 가장 위험해요." },
          { label: "👟 앞사람과의 안전한 걸음 간격", target: false, tip: "발밑에 떨어진 물건을 주우려 숙이는 행동을 조심해야 해요!" }
        ]
      },
      {
        prompt: "👀 안전 레이더: 일행과 헤어졌을 때 찾아가야 할 안전 약속 지점은?",
        spots: [
          { label: "🚩 미리 약속한 큰 나무·안내소 집결지", target: true, tip: "정답! 혼자 돌아다니지 않고 약속한 집결지에서 만나요." },
          { label: "🏃 사람 많은 골목 안쪽 깊은 곳", target: false, tip: "미리 정해 둔 눈에 잘 띄는 집결 장소를 찾아봐요!" }
        ]
      }
    ];
    let densityLabLevel = 1;
    const DENSITY_LAB_STEPS = {
      1: { btn: "🟢⭕ 1~2명/㎡", visual: "🧍      🧍", desc: "🟢⭕ [안전·실선] 1㎡당 1~2명: 팔을 뻗어도 닿지 않아 내 걸음 속도로 편안하게 이동해요." },
      3: { btn: "🟡⚠️ 3~4명/㎡", visual: "🧍 🧍 🧍 🧍", desc: "🟡⚠️ [주의·점선] 1㎡당 3~4명: 옷깃과 어깨가 스치기 시작해요! 지금 대각선 가장자리로 빠져나가요." },
      5: { btn: "🔴✖ 5명+/㎡", visual: "🧍🧍🧍🧍🧍⚠️", desc: "🔴✖ [위험·빗금] 1㎡당 5명 이상: 물결처럼 떠밀려 내 뜻대로 멈추기 어려워요! 가슴 앞 호흡 공간을 지켜요." }
    };
    function renderScenarioHazardSpot() {
      const box = document.getElementById("scenarioHazardSpotBox");
      if (!box) return;
      box.replaceChildren();
      const idx = state.scenarioIndex;
      const cfg = SCENARIO_HAZARD_SPOTS[idx];
      if (!cfg) return;
      const pickedIdx = scenarioSpotPicked[idx];
      const header = document.createElement("div");
      header.className = "font-extrabold text-amber-300";
      header.textContent = cfg.prompt;
      box.appendChild(header);
      const btnRow = document.createElement("div");
      btnRow.className = "flex flex-wrap gap-1.5";
      cfg.spots.forEach((spot, sIdx) => {
        const chip = document.createElement("button");
        chip.type = "button";
        const isPicked = pickedIdx === sIdx;
        chip.className = `mini-chip scenario-spot-chip ${isPicked ? "is-picked" : ""}`;
        chip.textContent = spot.label;
        chip.addEventListener("click", () => {
          scenarioSpotPicked[idx] = sIdx;
          playSound(spot.target ? "whistle" : "wrong");
          renderScenarioHazardSpot();
        });
        btnRow.appendChild(chip);
      });
      box.appendChild(btnRow);
      if (pickedIdx !== undefined && cfg.spots[pickedIdx]) {
        const chosenSpot = cfg.spots[pickedIdx];
        const fb = document.createElement("p");
        fb.className = `text-xs font-bold ${chosenSpot.target ? "text-emerald-300" : "text-rose-300"}`;
        fb.textContent = `${chosenSpot.target ? "🎯" : "💡"} ${chosenSpot.tip}`;
        box.appendChild(fb);
      }

      // Strategy 4: 1㎡ Crowd Density Science Lab
      const labWrap = document.createElement("div");
      labWrap.id = "densityLabBox";
      labWrap.className = "pt-1.5 mt-1.5 border-t border-indigo-800/80 space-y-1";
      const labTop = document.createElement("div");
      labTop.className = "flex flex-wrap items-center justify-between gap-1";
      const labTitle = document.createElement("span");
      labTitle.className = "text-[11px] font-extrabold text-amber-200";
      labTitle.textContent = "🧪 1㎡ 밀집도 실험실:";
      labTop.appendChild(labTitle);
      const labBtns = document.createElement("div");
      labBtns.className = "flex flex-wrap gap-1";
      [1, 3, 5].forEach(lv => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = `mini-chip density-lab-btn text-[11px] ${densityLabLevel === lv ? "is-picked" : ""}`;
        b.dataset.density = String(lv);
        b.textContent = DENSITY_LAB_STEPS[lv].btn;
        b.addEventListener("click", () => {
          densityLabLevel = lv;
          playSound("click");
          renderScenarioHazardSpot();
        });
        labBtns.appendChild(b);
      });
      labTop.appendChild(labBtns);
      labWrap.appendChild(labTop);
      const curLab = DENSITY_LAB_STEPS[densityLabLevel] || DENSITY_LAB_STEPS[1];
      const labDesc = document.createElement("p");
      labDesc.className = "text-[11px] font-bold text-indigo-100 leading-snug";
      labDesc.textContent = `[${curLab.visual}] ${curLab.desc}`;
      labWrap.appendChild(labDesc);
      box.appendChild(labWrap);
    }
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

      const row = document.createElement("div");
      row.className = "flex flex-wrap items-center justify-between gap-2";

      const titleEl = document.createElement("div");
      titleEl.className = "font-extrabold text-amber-300";
      titleEl.textContent = drill.title;
      row.appendChild(titleEl);

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
      row.appendChild(btn);
      box.appendChild(row);

      if (isDone) {
        const descEl = document.createElement("p");
        descEl.className = "text-xs font-bold text-emerald-300 mt-1";
        descEl.textContent = countdown > 0
          ? `${drill.doneText} · 🙌 지금 자리에서 3초 동안 몸동작을 따라 해 봐요! (${countdown}초)`
          : countdown === 0
          ? `${drill.doneText} · 👏 3초 몸동작 따라 하기 성공!`
          : drill.doneText;
        box.appendChild(descEl);
      }

      if (idx === 5) {
        const simBox = document.createElement("div");
        simBox.id = "emergencyCallSimBox";
        simBox.className = "mt-2 pt-2 border-t border-indigo-700/80 space-y-1.5";
        const simHeader = document.createElement("div");
        simHeader.className = "font-extrabold text-amber-200 text-xs";
        simHeader.textContent = "🚨 112·119 침착 신고 시뮬레이터 (2단계 대화 체험)";
        simBox.appendChild(simHeader);

        if (!emergencyCallState.q1Done) {
          const q1 = document.createElement("p");
          q1.className = "text-xs text-indigo-100 font-bold";
          q1.textContent = "👩🏻‍🚒 119 상황실(1/2): \"119입니다! 지금 어디이고 무슨 일이 생겼나요?\"";
          simBox.appendChild(q1);
          const optRow = document.createElement("div");
          optRow.className = "flex flex-wrap gap-1.5";
          [
            { text: "⭕ \"광장 시계탑 앞 계단인데 사람이 밀려 넘어졌어요!\"", ok: true },
            { text: "❌ \"사람이 너무 많아요! 빨리 와 주세요!\" (장소 누락)", ok: false }
          ].forEach((opt, oIdx) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "mini-chip emergency-sim-btn text-left";
            b.dataset.simStep = `1-${oIdx}`;
            b.textContent = opt.text;
            b.addEventListener("click", () => {
              if (opt.ok) {
                emergencyCallState.q1Done = true;
                emergencyCallState.wrongMsg = "";
                playSound("whistle");
              } else {
                emergencyCallState.wrongMsg = "💡 출동 대원이 바로 찾을 수 있도록 '정확한 건물·지형지물 위치'를 먼저 말해 주세요!";
                playSound("wrong");
              }
              renderSafetyActionDrill();
            });
            optRow.appendChild(b);
          });
          simBox.appendChild(optRow);
        } else if (!emergencyCallState.q2Done) {
          const q2 = document.createElement("p");
          q2.className = "text-xs text-indigo-100 font-bold";
          q2.textContent = "👩🏻‍🚒 119 상황실(2/2): \"시계탑 앞으로 출동 중입니다! 도착 전까지 어떻게 계실 건가요?\"";
          simBox.appendChild(q2);
          const optRow = document.createElement("div");
          optRow.className = "flex flex-wrap gap-1.5";
          [
            { text: "⭕ \"머리와 가슴을 보호하고 안전한 가장자리에서 기다릴게요!\"", ok: true },
            { text: "❌ \"사람들 사이를 비집고 혼자 뛰어다닐게요!\"", ok: false }
          ].forEach((opt, oIdx) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "mini-chip emergency-sim-btn text-left";
            b.dataset.simStep = `2-${oIdx}`;
            b.textContent = opt.text;
            b.addEventListener("click", () => {
              if (opt.ok) {
                emergencyCallState.q2Done = true;
                emergencyCallState.wrongMsg = "";
                playSound("correct");
              } else {
                emergencyCallState.wrongMsg = "💡 구급대원이 올 때까지 머리와 가슴을 보호하며 안전한 가장자리에서 기다려요!";
                playSound("wrong");
              }
              renderSafetyActionDrill();
            });
            optRow.appendChild(b);
          });
          simBox.appendChild(optRow);
        } else {
          const doneMsg = document.createElement("div");
          doneMsg.className = "flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-emerald-300";
          const span = document.createElement("span");
          span.textContent = "📞 119 침착 신고 완료! [정확한 장소 + 현재 상황 + 내 몸 보호] 3박자 완벽해요!";
          const resetBtn = document.createElement("button");
          resetBtn.type = "button";
          resetBtn.className = "mini-chip text-[11px]";
          resetBtn.textContent = "🔄 다시 연습";
          resetBtn.addEventListener("click", () => {
            emergencyCallState.q1Done = false;
            emergencyCallState.q2Done = false;
            emergencyCallState.wrongMsg = "";
            playSound("click");
            renderSafetyActionDrill();
          });
          doneMsg.appendChild(span);
          doneMsg.appendChild(resetBtn);
          simBox.appendChild(doneMsg);
        }
        if (emergencyCallState.wrongMsg) {
          const wEl = document.createElement("p");
          wEl.className = "text-xs font-bold text-rose-300";
          wEl.textContent = emergencyCallState.wrongMsg;
          simBox.appendChild(wEl);
        }
        box.appendChild(simBox);
      }
    }

    function renderScenario() {
      if (safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      const item = SAFETY_SCENARIOS[state.scenarioIndex];
      const goal = SAFETY_GOALS[state.scenarioIndex];
      const low = state.grade === '1-2' ? SAFETY_SCENARIO_LOW[state.scenarioIndex] : null;
      const isScenarioCore10 = Number(state.teacher?.minutes) === 10 && [0, 2, 3].includes(state.scenarioIndex);
      document.getElementById("scenarioStepBadge").textContent = `약속 ${state.scenarioIndex + 1} / ${SAFETY_SCENARIOS.length}${pairTurnSuffix(state.scenarioIndex)}`;
      document.getElementById("scenarioEmoji").textContent = item.emoji;
      document.getElementById("scenarioStageTag").textContent = `${item.stage}${isScenarioCore10 ? ' · ⚡10분 핵심' : ''}`;
      document.getElementById("scenarioTitle").textContent = low?.title || item.title;
      renderHighlightedText(document.getElementById("scenarioDesc"), low?.desc || (state.grade === '5-6' ? `${item.desc} 두 행동의 위험과 근거를 비교해 보세요.` : item.desc));
      updatePairBatonBanner(state.scenarioIndex);
      const signalBar = document.getElementById("scenarioSignalBar");
      if (signalBar) {
        signalBar.textContent = state.completedScenarios[state.scenarioIndex]
          ? "🟢⭕ [안전·실선] 안전 신호등 · 올바른 행동을 찾았어요!"
          : "🟡⚠️ [주의·점선] 상황 살피기 · 어떤 행동이 안전할까요?";
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
        btn.className = "w-full text-left p-3 rounded-xl bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-700 hover:border-amber-400 transition flex items-center gap-2.5 min-h-[48px]";
        btn.innerHTML = `
          <span class="nowrap badge-nowrap shrink-0 whitespace-nowrap px-2.5 py-0.5 rounded-lg bg-indigo-800 text-amber-300 font-black text-xs">선택 ${idx + 1}</span>
          <span class="text-xs sm:text-sm font-bold text-white leading-snug">${low?.choices[idx] || choice.text}</span>
        `;
        btn.addEventListener("click", () => {
          if (!state.safetyFirst[goal.id]) state.safetyFirst[goal.id] = {correct: !!choice.correct, at: Date.now()};
          const aftermathHtml = choice.aftermath
            ? `<div class="pt-1.5 mt-1 border-t border-white/15 font-bold text-amber-200">${choice.aftermath}</div>`
            : "";
          const scienceHtml = item.scienceTip
            ? `<div class="pt-1 text-[11px] font-bold text-sky-200">${item.scienceTip}</div>`
            : "";
          if (choice.correct) {
            playSound("correct");
            if (!state.completedScenarios[state.scenarioIndex]) {
              state.completedScenarios[state.scenarioIndex] = true;
              awardOnce(`scenario:${goal.id}`, 'first-correct', 15, "안전 상황 판단");
            }
            if (signalBar) signalBar.textContent = "🟢⭕ [안전·실선] 안전 확보 · 올바른 판단이에요!";
            feedbackBox.className = "rounded-xl p-3 border bg-emerald-950/80 border-emerald-400/60 text-emerald-100 text-xs sm:text-sm space-y-1";
            feedbackBox.innerHTML = `<div class="font-black text-emerald-300">⭕ 적절한 선택이에요. 이유를 한 번 더 확인해요.</div><p>${choice.feedback}</p>${aftermathHtml}${scienceHtml}`;
          } else {
            playSound("wrong");
            if (signalBar) {
              signalBar.textContent = "🔴✖ [위험·빗금] 위험 주의 · 다시 안전한 길을 골라 봐요!";
              signalBar.classList.remove("scenario-alert-pulse");
              void signalBar.offsetWidth;
              signalBar.classList.add("scenario-alert-pulse");
            }
            const emEl = document.getElementById("scenarioEmoji");
            if (emEl) {
              emEl.classList.remove("scenario-alert-pulse");
              void emEl.offsetWidth;
              emEl.classList.add("scenario-alert-pulse");
            }
            feedbackBox.className = "rounded-xl p-3 border bg-rose-950/80 border-rose-400/60 text-rose-100 text-xs sm:text-sm space-y-1";
            feedbackBox.innerHTML = `<div class="font-black text-rose-300">❌ 다시 골라 볼까요?</div><p>${choice.feedback}</p>${aftermathHtml}${scienceHtml}`;
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
      renderScenarioHazardSpot();
      renderSafetyActionDrill();
      renderGlossaryBox("safetyGlossaryBox", ["다중밀집", "우측통행", "대각선 이동", "가슴 앞 공간(흉강)", "병목 현상", "집결 장소"]);
    }

    function renderSafetyFollowup() {
      const goal = SAFETY_GOALS[state.scenarioIndex];
      const box = document.getElementById('safetyFollowup');
      box.replaceChildren();
      const isScenarioDone = !!state.completedScenarios[state.scenarioIndex];
      const nextBtn = document.getElementById("btnNextScenario");
      if (nextBtn) {
        nextBtn.classList.toggle("next-step-ready", isScenarioDone);
        nextBtn.classList.toggle("next-step-calm", !isScenarioDone);
      }
      if (!isScenarioDone) {
        box.classList.add('hidden');
        return;
      }
      box.classList.remove('hidden');
      const heading = document.createElement('strong');
      heading.textContent = `${state.safetyConfirmed[goal.id] ? '✅ 확인 완료' : '🔎 다시 판단하기'} · ${goal.title}`;
      box.appendChild(heading);
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

    // GAME_MODULE

    // ==================== TAB 3: AVATAR DRESS-UP & COSTUME SORTING ====================
    const AVATAR_MISSIONS = [
      { id: 'night', title: '🌙 저녁 축제에서도 눈에 잘 띄고 두 손이 자유로운 코디', tip: '밝은 의상이나 야광 소품을 고르고 밤길 반사 테스트를 켜 보세요!' },
      { id: 'stairs', title: '🪜 계단과 복도를 걸을 때 발에 걸리지 않는 활동 코디', tip: '끌리지 않는 단정한 옷과 앞이 잘 보이는 모자·머리띠를 골라 보세요!' },
      { id: 'respect', title: '🤝 친구를 놀라게 하지 않고 경찰·소방관과 헷갈리지 않는 코디', tip: '실제 제복이나 날카로운 장난감 대신 친근한 축제 소품을 골라 보세요!' }
    ];
    let avatarMissionIndex = 0;
    const COSTUME_WORLDCUP_CANDIDATES = [
      { id: 'wc1', name: '🌟 별빛 반사 마법사', char: '🧒', costume: '🧙', prop: '✨', desc: '어두운 밤에도 반짝이는 야광 팔찌와 앞이 잘 보이는 마법 모자' },
      { id: 'wc2', name: '🎃 호박 등불 요정', char: '👧', costume: '🧚', prop: '🕯️', desc: '발에 걸리지 않는 활동복과 밤길을 밝히는 호박 등불' },
      { id: 'wc3', name: '🪄 꼬마 영웅 탐험가', char: '🐱', costume: '🦸', prop: '🪄', desc: '짧고 단정한 영웅 망토와 끝이 둥근 안전 요술봉' },
      { id: 'wc4', name: '🍬 달콤 호박 수호자', char: '🐶', costume: '🎃', prop: '🪣', desc: '푹신하고 따뜻한 호박 망토와 친구와 나누는 사탕 바구니' }
    ];
    let costumeWorldCupState = { stage: 'semi1', semi1Winner: null, semi2Winner: null, champion: null };

    function renderCostumeWorldCup() {
      const box = document.getElementById("costumeWorldCupBox");
      if (!box) return;
      box.replaceChildren();
      const titleRow = document.createElement("div");
      titleRow.className = "flex flex-wrap items-center justify-between gap-1";
      const title = document.createElement("span");
      title.className = "font-extrabold text-amber-300";
      const stageLabel = costumeWorldCupState.stage === 'semi1'
        ? '4강 1경기'
        : costumeWorldCupState.stage === 'semi2'
        ? '4강 2경기'
        : costumeWorldCupState.stage === 'final'
        ? '결승전'
        : '우승 코디 확정!';
      title.textContent = `🆚 베스트 안전 코디 월드컵 (${stageLabel})`;
      titleRow.appendChild(title);
      box.appendChild(titleRow);

      if (costumeWorldCupState.stage === 'done' && costumeWorldCupState.champion) {
        const champ = costumeWorldCupState.champion;
        const winRow = document.createElement("div");
        winRow.className = "flex flex-wrap items-center justify-between gap-2 text-emerald-300 font-bold";
        const span = document.createElement("span");
        span.textContent = `🏆 우승 코디: ${champ.name} (${champ.char}${champ.costume}${champ.prop}) — 아바타에 자동 적용되었어요!`;
        const resetBtn = document.createElement("button");
        resetBtn.type = "button";
        resetBtn.id = "btnResetCostumeWorldCup";
        resetBtn.className = "mini-chip text-[11px]";
        resetBtn.textContent = "🔄 다시 투표";
        resetBtn.addEventListener("click", () => {
          costumeWorldCupState = { stage: 'semi1', semi1Winner: null, semi2Winner: null, champion: null };
          playSound("click");
          renderCostumeWorldCup();
        });
        winRow.appendChild(span);
        winRow.appendChild(resetBtn);
        box.appendChild(winRow);
        return;
      }

      const pair = costumeWorldCupState.stage === 'semi1'
        ? [COSTUME_WORLDCUP_CANDIDATES[0], COSTUME_WORLDCUP_CANDIDATES[1]]
        : costumeWorldCupState.stage === 'semi2'
        ? [COSTUME_WORLDCUP_CANDIDATES[2], COSTUME_WORLDCUP_CANDIDATES[3]]
        : [costumeWorldCupState.semi1Winner || COSTUME_WORLDCUP_CANDIDATES[0], costumeWorldCupState.semi2Winner || COSTUME_WORLDCUP_CANDIDATES[2]];

      const grid = document.createElement("div");
      grid.className = "grid grid-cols-1 sm:grid-cols-2 gap-1.5";
      pair.forEach((cand, cIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "worldcup-cand-btn text-left rounded-lg bg-indigo-900/80 hover:bg-indigo-800 border border-indigo-600 hover:border-amber-400 p-2 transition";
        btn.dataset.wcId = cand.id;
        btn.innerHTML = `<div class="font-extrabold text-amber-200">${cIdx === 0 ? '🅰️' : '🅱️'} ${cand.name} (${cand.char}${cand.costume}${cand.prop})</div><div class="text-[11px] text-indigo-100 mt-0.5">${cand.desc}</div>`;
        btn.addEventListener("click", () => {
          if (costumeWorldCupState.stage === 'semi1') {
            costumeWorldCupState.semi1Winner = cand;
            costumeWorldCupState.stage = 'semi2';
            playSound("click");
          } else if (costumeWorldCupState.stage === 'semi2') {
            costumeWorldCupState.semi2Winner = cand;
            costumeWorldCupState.stage = 'final';
            playSound("click");
          } else {
            costumeWorldCupState.champion = cand;
            costumeWorldCupState.stage = 'done';
            state.avatar.char = cand.char;
            state.avatar.costume = cand.costume;
            state.avatar.prop = cand.prop;
            state.certSticker = cand.costume;
            playSound("fanfare");
            saveProgress();
            renderAvatarDressup();
            renderCertificateCanvas();
            return;
          }
          renderCostumeWorldCup();
        });
        grid.appendChild(btn);
      });
      box.appendChild(grid);
    }

    const PLEDGE_KEYWORDS = {
      where: ['복도와 계단에서', '축제를 즐길 때', '사람이 많은 곳에서'],
      action: ['오른쪽으로 차근차근 걷고', '비상구와 안전 거리를 먼저 살피고', '절대 밀거나 뛰지 않고'],
      heart: ['친구의 마음을 다정하게 배려하겠습니다!', '모두가 웃는 안전 약속을 꼭 지키겠습니다!', '내 몸과 친구의 안전을 먼저 생각하겠습니다!']
    };
    let pledgeBuilderPick = { where: null, action: null, heart: null };

    function renderPledgeBuilder() {
      const box = document.getElementById("pledgeBuilderBox");
      if (!box) return;
      box.replaceChildren();
      const header = document.createElement("div");
      header.className = "font-extrabold text-amber-300";
      header.textContent = "💬 키워드 3개 톡톡! 나만의 안전 약속 문장 조합기";
      box.appendChild(header);

      const groups = [
        { key: 'where', label: '① 어디서' },
        { key: 'action', label: '② 어떻게' },
        { key: 'heart', label: '③ 마음 다짐' }
      ];
      groups.forEach(g => {
        const row = document.createElement("div");
        row.className = "flex flex-wrap items-center gap-1";
        const tag = document.createElement("span");
        tag.className = "text-[11px] font-bold text-indigo-200 mr-1";
        tag.textContent = `${g.label}:`;
        row.appendChild(tag);
        PLEDGE_KEYWORDS[g.key].forEach((word, wIdx) => {
          const chip = document.createElement("button");
          chip.type = "button";
          const isPicked = pledgeBuilderPick[g.key] === wIdx;
          chip.className = `mini-chip pledge-kw-chip text-[11px] ${isPicked ? "is-picked" : ""}`;
          chip.dataset.kwGroup = g.key;
          chip.dataset.kwIdx = String(wIdx);
          chip.textContent = word;
          chip.addEventListener("click", () => {
            if (pledgeBuilderPick.where === null) pledgeBuilderPick.where = 0;
            if (pledgeBuilderPick.action === null) pledgeBuilderPick.action = 0;
            if (pledgeBuilderPick.heart === null) pledgeBuilderPick.heart = 0;
            pledgeBuilderPick[g.key] = wIdx;
            const composed = `${PLEDGE_KEYWORDS.where[pledgeBuilderPick.where]} ${PLEDGE_KEYWORDS.action[pledgeBuilderPick.action]} ${PLEDGE_KEYWORDS.heart[pledgeBuilderPick.heart]}`.slice(0, 160);
            const input = document.getElementById("certPledgeInput");
            if (input) {
              input.value = composed;
              state.profile.pledge = composed;
              saveProgress();
              renderCertificateCanvas();
              renderLearningSummary();
            }
            playSound("click");
            renderPledgeBuilder();
          });
          row.appendChild(chip);
        });
        box.appendChild(row);
      });
    }

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
          { label: "👀 시야 확보 (눈 안 가림)", ok: true },
          { label: "👟 보행 편리 (끌리지 않음)", ok: true },
          { label: "✨ 야간 식별 (야광·밝은색)", ok: Boolean(isNightTested || ["🎃", "🕯️", "⭐", "✨", "🪄"].includes(state.avatar.prop) || ["🧙", "🧚"].includes(state.avatar.costume)) },
          { label: "🚫 제복·위험 소품 제외", ok: true }
        ];
        checklistBox.innerHTML = checks.map(c => `
          <div class="rounded-lg px-2 py-1.5 border ${c.ok ? "bg-emerald-950/70 border-emerald-500/60 text-emerald-200" : "bg-amber-950/60 border-amber-400/60 text-amber-200"} font-bold flex items-center gap-1 whitespace-nowrap">
            <span>${c.ok ? "✅" : "💡"}</span><span>${c.label}</span>
          </div>
        `).join("");
      }
      renderCostumeWorldCup();
    }

    function formatCostumeStoryForContext(item) {
      if (!item || !item.story) return "";
      const themeKey = state.teacher?.theme || "halloween";
      const themeLabel = THEMES[themeKey]?.label || "할로윈";
      let text = item.story;
      if (themeKey !== "halloween") {
        text = text.replace(/축제/g, themeLabel).replace(/할로윈/g, themeLabel);
      }
      if (state.grade === "1-2") {
        return `${text} (🌱 1~2학년 핵심: ${item.checkPoint || "안전 확인"})`;
      }
      return text;
    }
    let costumePage = 0;
    let costumeFocusMode = true;
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
        togetherBanner.classList.remove("hidden");
        togetherBanner.innerHTML = state.teacher?.mode === "together"
          ? '🙆‍♂️ <strong class="text-amber-300">다 함께 O/X:</strong> 시야·반사·걸림을 살피고, 실제 제복·장난감 무기는 피하기로 골라요!'
          : '💡 <strong class="text-amber-300">옷 고르기 핵심:</strong> 시야·야광 반사·걸림을 먼저 살피고, 실제 제복·장난감 무기는 피하기로 골라요!';
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
            ${item.story ? `<p class="text-[11px] text-indigo-100 font-bold leading-snug pt-1 px-1">${formatCostumeStoryForContext(item)}</p>` : ""}
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
                    ${item.afterLook ? `<div class="pt-1 font-extrabold text-emerald-300">${item.afterLook}</div>` : ""}
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
      updatePairBatonBanner(costumePage);
      document.getElementById('btnPrevCostumePage').disabled = costumePage === 0;
      const nextCostumeBtn = document.getElementById('btnNextCostumePage');
      nextCostumeBtn.disabled = costumePage === totalPages - 1;
      const pageItems = COSTUME_ITEMS.filter((_, idx) => Math.floor(idx / perPage) === costumePage);
      const isPageDone = pageItems.length > 0 && pageItems.every(it => state.costumeChoices[it.id] !== undefined);
      nextCostumeBtn.classList.toggle("next-step-ready", isPageDone && costumePage < totalPages - 1);
      nextCostumeBtn.classList.toggle("next-step-calm", !isPageDone || costumePage === totalPages - 1);
      const toQuizBtn = document.getElementById('btnToQuiz');
      if (toQuizBtn) {
        const readyForQuiz = correctCount === COSTUME_ITEMS.length || (isPageDone && costumePage === totalPages - 1);
        toQuizBtn.classList.toggle("next-step-ready", readyForQuiz);
        toQuizBtn.classList.toggle("next-step-calm", !readyForQuiz);
      }
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
      document.body.dataset.courseMinutes = String(mins);
      const map = LESSON_PACEMAKER[mins] || LESSON_PACEMAKER[20];
      badge.textContent = map[tabId] || `⏱️ ${mins}분 수업`;
    }
    function lessonStep(tabId) {
      if (tabId === 'tab-culture' && !isHalloweenTheme()) return ['1 / 4', `${THEMES[state.teacher.theme].label} 이야기`, '그림 이야기를 읽고 안전한 행동을 생각해요.'];
      return lessonSteps[tabId] || lessonSteps['tab-culture'];
    }
    function syncLessonStage() {
      const step = lessonStep(state.activeTab);
      const numEl = document.getElementById('lessonStageNumber');
      if (numEl) numEl.textContent = step[0];
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
    let classTimerInterval = null;
    let classTimerHideTimeout = null;
    let pickedPresenterNumbers = [];
    let classVoteTally = { one: 0, two: 0 };
    function clearClassVoteWinnerHighlight() {
      document.querySelectorAll('.class-vote-winner').forEach(el => el.classList.remove('class-vote-winner'));
    }
    function stopClassTimerBanner(resetTally = false) {
      if (classTimerInterval) { clearInterval(classTimerInterval); classTimerInterval = null; }
      if (classTimerHideTimeout) { clearTimeout(classTimerHideTimeout); classTimerHideTimeout = null; }
      if (resetTally) {
        pickedPresenterNumbers = [];
        classVoteTally = { one: 0, two: 0 };
      }
      clearClassVoteWinnerHighlight();
      const btn = document.getElementById('btnClassTimer');
      if (btn) btn.textContent = '⏱️ 5초 투표';
      const banner = document.getElementById('classTimerBanner');
      if (banner) banner.classList.add('hidden');
    }
    function clearTransientInteractionState(keepClassPoster = false) {
      if (safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      if (echoReadTimer) { clearInterval(echoReadTimer); echoReadTimer = null; }
      stopClassTimerBanner(true);
      if (typeof resetSpeedOxState === 'function') resetSpeedOxState();
      else if (typeof stopSpeedOxTimer === 'function') stopSpeedOxTimer();
      [storyPollPicked, storyClueOpened, festivalStamps, safetyDrillCounts, safetyDrillRemaining, scenarioSpotPicked, openedGlossaryByBox, glossaryBoxExpanded].forEach(mapObj => {
        if (mapObj && typeof mapObj === 'object') {
          Object.keys(mapObj).forEach(k => { delete mapObj[k]; });
        }
      });
      emergencyCallState.q1Done = false;
      emergencyCallState.q2Done = false;
      emergencyCallState.wrongMsg = "";
      costumeWorldCupState = { stage: 'semi1', semi1Winner: null, semi2Winner: null, champion: null };
      pledgeBuilderPick = { where: null, action: null, heart: null };
      densityLabLevel = 1;
      currentFestivalKey = 'halloween';
      currentRecipeIdx = 0;
      avatarMissionIndex = 0;
      safetyGame.visionMask = false;
      const nvBtn = document.getElementById("btnToggleNightVision");
      if (nvBtn) {
        nvBtn.setAttribute("aria-pressed", "false");
        nvBtn.classList.remove("is-picked");
        nvBtn.textContent = "🕶️ 시야 제한 OFF";
      }
      document.body.classList.remove("spotlight-mode");
      const spotBtn = document.getElementById("btnSpotlightMode");
      if (spotBtn) {
        spotBtn.setAttribute("aria-pressed", "false");
        spotBtn.textContent = "🔭 칠판 집중";
      }
      const stageEl = document.getElementById("avatarRunwayStage");
      const nightBtn = document.getElementById("btnNightLightTest");
      const judgeEl = document.getElementById("avatarJudgeText");
      if (stageEl) stageEl.classList.remove("night-stage-active");
      if (nightBtn) nightBtn.textContent = "🌙 밤길 야광 반사 테스트";
      if (judgeEl) judgeEl.textContent = "시야 확보 OK! 밤길 안전 반사 OK!";
      if (!keepClassPoster) {
        if (typeof classPosterActive !== 'undefined') classPosterActive = false;
        if (typeof classPosterRecords !== 'undefined' && Array.isArray(classPosterRecords)) classPosterRecords.length = 0;
        const importStatus = document.getElementById("importResults");
        if (importStatus) importStatus.textContent = "";
      }
    }
    function startFromBeginning() {
      stopSpeaking();
      stopSafetyGameLoop();
      clearTransientInteractionState(false);
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
      safetyGame.bonusCollected = false;
      safetyGame.friendRescued = false;
      safetyGame.companion = null;
      safetyGame.items = [];
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
      applyBgmVolume();
      document.getElementById('lessonStageTitle').focus();
    }
    function returnToMainScreen() {
      stopSpeaking();
      pauseSafetyGame();
      stopClassTimerBanner(false);
      if (safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      if (echoReadTimer) { clearInterval(echoReadTimer); echoReadTimer = null; }
      if (typeof resetSpeedOxState === 'function') resetSpeedOxState();
      else if (typeof stopSpeedOxTimer === 'function') stopSpeedOxTimer();
      document.body.classList.add('lesson-not-started');
      document.body.classList.remove('tools-open');
      document.getElementById('btnMoreTools').setAttribute('aria-expanded', 'false');
      try {
        sessionStorage.removeItem('halloween-lesson-started');
        sessionStorage.setItem('halloween-tools-open', 'false');
      } catch (_) {}
      applyBgmVolume();
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
      renderPledgeBuilder();
      document.getElementById('avatarSafetyReason').value=state.avatarReason||'';
      document.getElementById('avatarReasonText').value=state.avatarReasonText||'';
      renderCertificateCanvas();renderLearningSummary();
      setCultureStage('story');
      switchTab(state.activeTab);
      syncStageButtons();
      resizeSafetyCanvas();renderGameChoices();
    }
    function startNewSession(kind) {
      stopSpeaking();stopSafetyGameLoop();
      clearTransientInteractionState(kind === 'student');
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
      safetyGame.bonusCollected=false;safetyGame.friendRescued=false;safetyGame.companion=null;safetyGame.items=[];
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
      if (tabId !== 'tab-safety' && safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      if (tabId !== 'tab-culture' && echoReadTimer) { clearInterval(echoReadTimer); echoReadTimer = null; }
      if (tabId !== 'tab-quiz') {
        if (typeof resetSpeedOxState === 'function') resetSpeedOxState();
        else if (typeof stopSpeedOxTimer === 'function') stopSpeedOxTimer();
      }
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
      updatePairBatonBanner();
      clearClassVoteWinnerHighlight();
      applyBgmVolume();
      saveProgress();
    }

    function switchGrade(gradeKey) {
      if (!EDUCATION_DATA[gradeKey]) return;
      if (gradeKey === state.grade) return;
      stopSpeaking();
      stopSafetyGameLoop();
      stopClassTimerBanner(false);
      if (safetyDrillInterval) { clearInterval(safetyDrillInterval); safetyDrillInterval = null; }
      if (echoReadTimer) { clearInterval(echoReadTimer); echoReadTimer = null; }
      if (typeof resetSpeedOxState === 'function') resetSpeedOxState();
      else if (typeof stopSpeedOxTimer === 'function') stopSpeedOxTimer();
      rememberGrade();
      state.grade = gradeKey;
      syncWelcomeGrade();
      state.teacher.grade = gradeKey;
      restoreGrade(gradeKey);
      safetyGame.running = false; safetyGame.won = false; safetyGame.paused = false; safetyGame.route = null;
      safetyGame.bonusCollected = false; safetyGame.friendRescued = false; safetyGame.companion = null; safetyGame.items = [];
      safetyGame.player = { x: 42, y: 210, r: 13, targetX: null, targetY: null };
      safetyGame.hazards = [];
      saveProgress();

      document.querySelectorAll(".grade-btn").forEach(btn => {
        const isMatch = btn.getAttribute("data-grade") === gradeKey;
        btn.classList.toggle("grade-active", isMatch);
        btn.setAttribute("aria-pressed", String(isMatch));
      });

      document.getElementById("certClassInput").value = state.profile.className || EDUCATION_DATA[gradeKey].classDefault;
      document.getElementById("avatarSafetyReason").value = state.avatarReason || "";
      document.getElementById("avatarReasonText").value = state.avatarReasonText || "";
      setCultureStage('story');
      syncStageButtons();
      renderStamps();
      renderStorySlide();
      renderLanternWorkshop();
      renderScenario();
      renderAvatarDressup();
      renderCostumeCards();
      renderEtiquetteChecklist();
      renderThemeSituations();
      renderQuiz();
      renderTeacherSettings();
      renderPledgeBuilder();
      renderCertificateCanvas();
      renderLearningSummary();
      renderGameChoices();
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

      // Fun Story Emoji tap reaction + 3-stage Hidden Clue discovery
      document.getElementById("btnTapStoryEmoji").addEventListener("click", () => {
        const storyIndex = storyProgress().storyIndex;
        const current = getStories()[storyIndex];
        const cKey = storyKey(storyIndex);
        const prevLevel = Number(storyClueOpened[cKey] || 0);
        const nextLevel = Math.min(3, prevLevel + 1);
        storyClueOpened[cKey] = nextLevel;
        playSound(`clue${nextLevel}`);
        burstCandyConfetti(8);
        const artEl = document.getElementById("storyEmojiGraphic");
        if (artEl) {
          artEl.dataset.clueLevel = String(nextLevel);
          if (current) artEl.innerHTML = storyArtwork(current.art, nextLevel);
          artEl.classList.remove("story-art-pop");
          void artEl.offsetWidth;
          artEl.classList.add("story-art-pop");
        }
        const clueBox = document.getElementById("storyClueBox");
        if (clueBox) {
          clueBox.classList.remove("hidden");
          clueBox.textContent = formatStoryClueText(storyIndex, nextLevel);
        }
        if (nextLevel === 3 && prevLevel < 3) {
          showToast("3단계 숨은 이야기 단서를 모두 찾아냈어요! 명탐정 등극!", "🕵️");
        }
        renderCertificateCanvas();
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
          playSound("magic");
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
        pauseBgmAudio();
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
        syncBgmPlayback();
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
      const btnClassTimer = document.getElementById('btnClassTimer');
      const classTimerBanner = document.getElementById('classTimerBanner');
      function getActiveVoteOptionElements() {
        if (state.activeTab === 'tab-culture') {
          return [...document.querySelectorAll(cultureStage === 'compare' ? '#festivalQuizBox button' : '#storyPollBox button')];
        }
        if (state.activeTab === 'tab-safety') {
          return [...document.querySelectorAll('#scenarioChoices button')];
        }
        if (state.activeTab === 'tab-costume') {
          const wc = [...document.querySelectorAll('#costumeWorldCupBox .worldcup-cand-btn')];
          if (wc.length >= 2) return wc;
          return [...document.querySelectorAll('#costumeCardsGrid .costume-choice-btn')].slice(0, 2);
        }
        if (state.activeTab === 'tab-quiz') {
          return [...document.querySelectorAll('#quizOptionsContainer .quiz-opt-btn')];
        }
        return [];
      }
      function shortVoteOptionLabel(el) {
        if (!el) return '';
        const cleaned = (el.textContent || '')
          .replace(/^[0-9]+[.)번\s-]*/u, '')
          .replace(/^[^\p{L}\p{N}]+/gu, '')
          .replace(/\s+/g, ' ')
          .trim();
        if (!cleaned) return '';
        return cleaned.length > 7 ? `${cleaned.slice(0, 6)}…` : cleaned;
      }
      function syncClassVoteWinnerHighlight() {
        clearClassVoteWinnerHighlight();
        const total = classVoteTally.one + classVoteTally.two;
        if (total <= 0 || classVoteTally.one === classVoteTally.two) return;
        const opts = getActiveVoteOptionElements();
        const winnerEl = classVoteTally.one > classVoteTally.two ? opts[0] : opts[1];
        if (winnerEl) winnerEl.classList.add('class-vote-winner');
      }
      function renderClassTimerBannerContent(messageText, buttonText = '🎲 발표 번호 뽑기') {
        if (!classTimerBanner) return;
        classTimerBanner.replaceChildren();
        const opts = getActiveVoteOptionElements();
        const lbl1 = shortVoteOptionLabel(opts[0]);
        const lbl2 = shortVoteOptionLabel(opts[1]);
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
            clearClassVoteWinnerHighlight();
            classTimerBanner.classList.add('hidden');
          }, 8000);
        });
        const tally1Btn = document.createElement('button');
        tally1Btn.type = 'button';
        tally1Btn.id = 'btnVoteTally1';
        tally1Btn.className = 'mini-chip text-xs';
        tally1Btn.textContent = `👆 1번${lbl1 ? `[${lbl1}]` : ''} (${classVoteTally.one}명)`;
        tally1Btn.addEventListener('click', () => {
          if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
          classVoteTally.one++;
          playSound('click');
          renderClassTimerBannerContent(messageText, buttonText);
        });
        const tally2Btn = document.createElement('button');
        tally2Btn.type = 'button';
        tally2Btn.id = 'btnVoteTally2';
        tally2Btn.className = 'mini-chip text-xs';
        tally2Btn.textContent = `✌️ 2번${lbl2 ? `[${lbl2}]` : ''} (${classVoteTally.two}명)`;
        tally2Btn.addEventListener('click', () => {
          if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
          classVoteTally.two++;
          playSound('click');
          renderClassTimerBannerContent(messageText, buttonText);
        });
        wrap.appendChild(span);
        wrap.appendChild(tally1Btn);
        wrap.appendChild(tally2Btn);
        const totalVotes = classVoteTally.one + classVoteTally.two;
        if (totalVotes > 0) {
          const pct1 = Math.round((classVoteTally.one / totalVotes) * 100);
          const pct2 = 100 - pct1;
          const ratioSpan = document.createElement('span');
          ratioSpan.id = 'voteTallyRatioText';
          ratioSpan.className = 'text-xs font-extrabold text-emerald-300';
          ratioSpan.textContent = `📊 집계: 1번 ${pct1}% vs 2번 ${pct2}%`;
          wrap.appendChild(ratioSpan);
        }
        syncClassVoteWinnerHighlight();
        wrap.appendChild(pickBtn);
        classTimerBanner.appendChild(wrap);
      }
      if (btnClassTimer && classTimerBanner) {
        btnClassTimer.addEventListener('click', () => {
          if (classTimerInterval) {
            clearInterval(classTimerInterval);
            classTimerInterval = null;
            if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
            clearClassVoteWinnerHighlight();
            classTimerBanner.classList.add('hidden');
            btnClassTimer.textContent = '⏱️ 5초 투표';
            playSound('click');
            return;
          }
          if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
          classVoteTally = { one: 0, two: 0 };
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
                clearClassVoteWinnerHighlight();
                classTimerBanner.classList.add('hidden');
              }, 6000);
            }
          }, 1000);
        });
      }
      const btnRandomMission = document.getElementById('btnRandomMission');
      const CLASSROOM_RANDOM_MISSIONS = [
        "🎰 랜덤 미션: 짝꿍과 눈 마주치며 '오늘도 안전하게 놀자!' 인사하기 🤝",
        "🎰 랜덤 미션: 지금 우리 교실에서 초록색 비상구(출구) 방향 손가락으로 가리키기 🟩",
        "🎰 랜덤 미션: 권투 선수처럼 가슴 앞 숨 쉴 공간(흉강) 지키는 팔짱 자세 3초 취하기 👐",
        "🎰 랜덤 미션: 복도에서 만났을 때 어느 쪽으로 걸어야 하는지 다 함께 외치기! (오른쪽!) ➡️",
        "🎰 랜덤 미션: 친구가 싫어하는 장난 대신 기분 좋아지는 칭찬 한마디 건네기 💬",
        "🎰 랜덤 미션: 112·119에 신고할 때 가장 먼저 말해야 하는 것 외치기! (정확한 장소!) 🚨"
      ];
      let randomMissionCursor = 0;
      if (btnRandomMission && classTimerBanner) {
        btnRandomMission.addEventListener('click', () => {
          if (classTimerInterval) {
            clearInterval(classTimerInterval);
            classTimerInterval = null;
            if (btnClassTimer) btnClassTimer.textContent = '⏱️ 5초 투표';
          }
          if (classTimerHideTimeout) clearTimeout(classTimerHideTimeout);
          classVoteTally = { one: 0, two: 0 };
          const missionText = CLASSROOM_RANDOM_MISSIONS[randomMissionCursor % CLASSROOM_RANDOM_MISSIONS.length];
          randomMissionCursor = (randomMissionCursor + 1) % CLASSROOM_RANDOM_MISSIONS.length;
          classTimerBanner.classList.remove('hidden');
          playSound('whistle');
          burstCandyConfetti(8);
          renderClassTimerBannerContent(missionText, '🎲 발표 번호 뽑기');
          classTimerHideTimeout = setTimeout(() => {
            clearClassVoteWinnerHighlight();
            classTimerBanner.classList.add('hidden');
          }, 8000);
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
          btnSpotlightMode.textContent = active ? '🔭 기본 화면' : '🔭 칠판 집중';
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
        renderStorySlide();
        renderScenario();
      });
      try {
        if (sessionStorage.getItem('halloween-tools-open') === 'true') {
          document.body.classList.add('tools-open');
          document.getElementById('btnMoreTools').setAttribute('aria-expanded', 'true');
        }
      } catch (_) {}
      [['btnToggleSafetyGame','optionalSafetyGame'],['btnToggleAvatar','avatarDressupCard'],['btnToggleEtiquette','optionalEtiquetteCard'],['btnToggleTeacherSummary','optionalTeacherSummaryCard']].forEach(([buttonId,cardId]) => {
        const button=document.getElementById(buttonId);
        const card=document.getElementById(cardId);
        if(!button || !card) return;
        button.addEventListener('click', () => {
          const open=card.classList.toggle('is-open');
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

      loadBgmPrefs();
      syncBgmUI();
      syncBgmPlayback();

      const btnBgmToggle = document.getElementById("btnBgmToggle");
      if (btnBgmToggle) {
        btnBgmToggle.addEventListener("click", () => {
          if (bgmOn && bgmVolume > 0) {
            bgmOn = false;
            saveBgmPrefs();
            syncBgmUI();
            pauseBgmAudio();
            playSound("click");
            showToast("배경음악을 껐어요.", "🔇");
          } else {
            bgmOn = true;
            if (bgmVolume <= 0) bgmVolume = lastNonZeroBgmVolume || 35;
            saveBgmPrefs();
            syncBgmUI();
            syncBgmPlayback();
            playSound("click");
            showToast(`배경음악을 켰어요! (볼륨 ${bgmVolume}%)`, "🎵");
          }
        });
      }

      const bgmVolumeSlider = document.getElementById("bgmVolumeSlider");
      if (bgmVolumeSlider) {
        bgmVolumeSlider.addEventListener("input", e => {
          const val = Math.max(0, Math.min(100, Number(e.target.value) || 0));
          bgmVolume = val;
          if (val > 0) {
            lastNonZeroBgmVolume = val;
            bgmOn = true;
            syncBgmUI();
            syncBgmPlayback();
          } else {
            bgmOn = false;
            syncBgmUI();
            pauseBgmAudio();
          }
          saveBgmPrefs();
        });
      }

      const unlockBgmOnGesture = () => {
        if (bgmOn && bgmVolume > 0) {
          syncBgmPlayback();
        }
      };
      ["pointerdown", "keydown", "touchstart"].forEach(evt => {
        window.addEventListener(evt, unlockBgmOnGesture, { passive: true });
      });
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          pauseBgmAudio();
        } else {
          syncBgmPlayback();
        }
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
          const key = card.getAttribute("data-festival");
          if (FESTIVAL_DETAILS[key]) {
            renderFestivalQuiz(key);
          }
        });
      });

      // Enhancement 4: Scenario Emoji direct touch micro-interaction
      const scenarioEmojiEl = document.getElementById("scenarioEmoji");
      if (scenarioEmojiEl) {
        scenarioEmojiEl.style.cursor = "pointer";
        scenarioEmojiEl.title = "눌러서 안전 레이더 핵심 팁 보기";
        scenarioEmojiEl.addEventListener("click", () => {
          playSound("magic");
          scenarioEmojiEl.classList.remove("story-art-pop");
          void scenarioEmojiEl.offsetWidth;
          scenarioEmojiEl.classList.add("story-art-pop");
          const spotTip = SCENARIO_HAZARD_SPOTS[state.scenarioIndex]?.spots?.[0]?.tip || SAFETY_GOALS[state.scenarioIndex]?.title || "주변 이동로와 안전 거리를 먼저 살펴요!";
          showToast(`🔎 안전 레이더: ${spotTip}`, "🛡️");
        });
      }

      // Enhancement 5: Touch & Pointer horizontal swipe gestures for smartboards/tablets
      function bindHorizontalSwipe(el, onPrev, onNext) {
        if (!el) return;
        let startX = null;
        let startY = null;
        el.addEventListener("touchstart", e => {
          if (!e.touches || e.touches.length !== 1) return;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        }, { passive: true });
        el.addEventListener("touchend", e => {
          if (startX === null || !e.changedTouches || !e.changedTouches.length) return;
          const dx = e.changedTouches[0].clientX - startX;
          const dy = e.changedTouches[0].clientY - startY;
          startX = null;
          startY = null;
          if (Math.abs(dx) > 64 && Math.abs(dx) > Math.abs(dy) * 1.8) {
            if (dx < 0 && onNext) onNext();
            else if (dx > 0 && onPrev) onPrev();
          }
        }, { passive: true });
      }
      bindHorizontalSwipe(
        document.getElementById("storyChapter"),
        () => { const b = document.getElementById("btnPrevStory"); if (b && !b.disabled) b.click(); },
        () => { const b = document.getElementById("btnNextStory"); if (b && !b.disabled) b.click(); }
      );
      bindHorizontalSwipe(
        document.querySelector("#tab-safety > .glass-card:first-of-type"),
        () => { const b = document.getElementById("btnPrevScenario"); if (b && !b.disabled) b.click(); },
        () => { const b = document.getElementById("btnNextScenario"); if (b && !b.disabled) b.click(); }
      );
      bindHorizontalSwipe(
        document.getElementById("costumeCardsGrid"),
        () => { const b = document.getElementById("btnPrevCostumePage"); if (b && !b.disabled) b.click(); },
        () => { const b = document.getElementById("btnNextCostumePage"); if (b && !b.disabled) b.click(); }
      );
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
      const btnToggleNightVision = document.getElementById("btnToggleNightVision");
      if (btnToggleNightVision) {
        btnToggleNightVision.addEventListener("click", () => {
          safetyGame.visionMask = !safetyGame.visionMask;
          btnToggleNightVision.setAttribute("aria-pressed", String(safetyGame.visionMask));
          btnToggleNightVision.classList.toggle("is-picked", safetyGame.visionMask);
          btnToggleNightVision.textContent = safetyGame.visionMask ? "🕶️ 시야 제한 ON" : "🕶️ 시야 제한 OFF";
          playSound("click");
          drawSafetyGame();
        });
      }
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
          } else if (state.activeTab === "tab-costume") {
            const costumeBtns = document.querySelectorAll("#costumeCardsGrid .costume-choice-btn");
            if (costumeBtns[idx]) { e.preventDefault(); costumeBtns[idx].click(); }
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
        } else if (e.key === "m" || e.key === "M") {
          e.preventDefault();
          document.getElementById("btnBgmToggle")?.click();
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
      const AVATAR_REASON_TEMPLATES = {
        vision: '가면 대신 앞이 잘 보이는 모자와 야광 소품을 골라 어두운 밤길에서도 시야를 넓게 확보했어요.',
        movement: '길게 끌리지 않는 활동하기 편한 옷차림을 골라 계단과 복도에서 넘어지지 않게 준비했어요.',
        props: '뾰족하거나 딱딱한 장난감 대신 부드럽고 안전한 소품을 골라 친구와 부딪혀도 다치지 않아요.',
        friends: '친구를 놀라게 하거나 길을 막지 않는 따뜻한 복장으로 모두가 즐거운 축제를 만들어요.'
      };
      document.getElementById('avatarSafetyReason').addEventListener('change', e => {
        state.avatarReason = e.target.value;
        const reasonInput = document.getElementById('avatarReasonText');
        const currentText = (state.avatarReasonText || '').trim();
        const isTemplate = Object.values(AVATAR_REASON_TEMPLATES).includes(currentText);
        if (state.avatarReason && AVATAR_REASON_TEMPLATES[state.avatarReason] && (!currentText || isTemplate)) {
          state.avatarReasonText = AVATAR_REASON_TEMPLATES[state.avatarReason];
          if (reasonInput) reasonInput.value = state.avatarReasonText;
        }
        saveProgress();
        renderAvatarDressup();
      });
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
          if (key === 'pledge') {
            pledgeBuilderPick = { where: null, action: null, heart: null };
            renderPledgeBuilder();
          }
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
            pledgeBuilderPick = { where: null, action: null, heart: null };
            renderPledgeBuilder();
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
          pledgeBuilderPick = { where: null, action: null, heart: null };
          renderPledgeBuilder();
          saveProgress();
          playSound("click");
          renderCertificateCanvas();
          renderLearningSummary();
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
      document.getElementById('importProgressFile').addEventListener('change',async event=>{
        await importProgressFiles([...event.target.files]);
        event.target.value='';
      });
      document.querySelectorAll('[data-ys-install], [data-qr]').forEach(btn => {
        btn.addEventListener('click', () => {
          pauseSafetyGame();
          stopSpeaking();
        });
      });

      renderAllLearning();
    });
