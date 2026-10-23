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
      "풍습·전통": "옛날부터 그 지역 사람들이 해마다 이어 온 생활 모습이나 기념 방식이에요.",
      "인류무형문화유산": "오래전부터 전해 내려와 세계가 함께 소중히 지키기로 약속한 전통문화예요.",
      "비상구(출구)": "위급할 때 안전하게 밖으로 대피할 수 있는 초록색 표지판 문이에요.",
      "다중밀집": "좁은 공간에 아주 많은 사람이 빽빽하게 모인 상태예요.",
      "우측통행": "서로 마주 보고 걸을 때 부딪히지 않도록 오른쪽 길로 걷는 약속이에요.",
      "대각선 이동": "사람들 흐름을 거스르지 않고 비스듬히 가장자리 넓은 곳으로 빠져나가는 방법이에요.",
      "가슴 앞 공간(흉강)": "양팔로 가슴 앞을 감싸 폐가 숨을 편하게 쉴 수 있게 지키는 공간이에요."
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
        } else {
          pollFeedback.className = "hidden text-xs mt-1.5 font-bold";
          pollFeedback.textContent = "";
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
      renderGlossaryBox("storyGlossaryBox", halloween ? ["풍습·전통", "인류무형문화유산", "비상구(출구)"] : ["다중밀집", "우측통행", "비상구(출구)"]);
      syncAutoReadButtons();
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
      renderGlossaryBox("safetyGlossaryBox", ["다중밀집", "우측통행", "대각선 이동", "가슴 앞 공간(흉강)"]);
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

    // QUIZ_MODULE

    // RESULTS_MODULE

    // ==================== NAVIGATION & GRADE SWITCHING ====================
    function syncWelcomeGrade() {
      document.querySelectorAll('[data-welcome-grade]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.welcomeGrade === state.grade)));
      const currentTheme = (state.teacher && state.teacher.theme) || 'halloween';
      document.querySelectorAll('[data-welcome-theme]').forEach(button => {
        const picked = button.dataset.welcomeTheme === currentTheme;
        button.setAttribute('aria-pressed', String(picked));
        button.classList.toggle('is-picked', picked);
      });
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
    function lessonStep(tabId) {
      if (tabId === 'tab-culture' && !isHalloweenTheme()) return ['1 / 4', `${THEMES[state.teacher.theme].label} 이야기`, '그림 이야기를 읽고 안전한 행동을 생각해요.'];
      return lessonSteps[tabId] || lessonSteps['tab-culture'];
    }
    function syncLessonStage() {
      const step = lessonStep(state.activeTab);
      document.getElementById('lessonStageTitle').textContent = step[1];
      document.getElementById('lessonStageHint').textContent = step[2];
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
        navigator.serviceWorker.register('./sw.js', {scope:'./'}).then(async reg=>{
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
          renderThemeSituations();
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
      document.getElementById('btnExportProgress').addEventListener('click',exportProgressJSON);
      document.getElementById('importProgressFile').addEventListener('change',event=>importProgressFiles([...event.target.files]));

      renderAllLearning();
    });
