# 🎃 신나는 할로윈 안전 놀이터 (전국 초등학생 할로윈데이 계기교육 웹앱)

별도의 서버나 데이터베이스 없이 **GitHub Pages**와 **Google Antigravity** 환경에서 100% 클라이언트 사이드로 즉시 동작하는 초등학생 맞춤형 할로윈데이 안전·문화 계기교육 웹앱입니다.

---

## 📁 폴더 구성 (`halloween-safety-edu`)

| 파일명 | 설명 |
| :--- | :--- |
| `index.html` | **GitHub Pages 메인 실행 파일** (주소 접속 시 자동 실행되는 메인 웹앱) |
| `halloween_edu_app.html` | `index.html`과 동일한 단독 실행용 백업 파일 |
| `manifest.json` | 태블릿·스마트폰 홈 화면 추가 시 전체화면(Fullscreen) 웹앱 실행 설정 파일 |
| `icon.svg` | 브라우저 탭 파비콘 및 모바일 앱 아이콘 (잭오랜턴 안전 배지) |
| `404.html` | 잘못된 경로 접속 시 메인 화면(`index.html`)으로 자동 연결하는 안내 페이지 |
| `.nojekyll` | GitHub Pages에서 정적 파일을 즉시 빠르게 배포하기 위한 설정 파일 |
| `README.md` | GitHub Pages 배포 가이드 및 수업 활용 안내서 |

---

## 🚀 GitHub Pages 1분 바로 배포하기

### 방법 1. 깃허브 웹사이트에서 마우스 드래그로 바로 올리기 (가장 쉬운 방법)
1. [GitHub](https://github.com/)에 로그인한 뒤 우측 상단 **`+` → `New repository`**를 클릭합니다.
2. Repository name에 원하는 이름(예: `halloween-safety-edu`)을 입력하고 **Public** 선택 후 **`Create repository`**를 누릅니다.
3. 생성된 저장소 화면에서 **`uploading an existing file`** 링크(또는 `Add file` → `Upload files`)를 클릭합니다.
4. 압축을 푼 **`halloween-safety-edu` 폴더 안의 파일들(`index.html`, `manifest.json`, `icon.svg`, `404.html`, `.nojekyll`, `README.md`)**을 모두 드래그하여 업로드하고 하단의 **`Commit changes`**를 누릅니다.
5. 상단 메뉴의 **`Settings` → 왼쪽 메뉴 `Pages`**로 이동합니다.
6. **Build and deployment**의 **Branch**를 `main` (또는 `master`) / `/(root)`로 선택하고 **`Save`**를 누릅니다.
7. 약 1분 뒤 생성되는 `https://<내아이디>.github.io/halloween-safety-edu/` 주소를 학생들에게 공유하거나 QR코드로 안내하면 바로 수업에 활용할 수 있습니다!

### 방법 2. Google Antigravity / Git 터미널에서 배포하기
```bash
git init
git add .
git commit -m "Deploy Halloween Safety Education Web App"
git branch -M main
git remote add origin https://github.com/<내아이디>/<저장소이름>.git
git push -u origin main
```

---

## 🌟 주요 교육 콘텐츠 및 기능
1. **🌱 1~2학년 / 🍀 3~4학년 / 🌟 5~6학년 눈높이 자동 맞춤**: 학년군 버튼 클릭 시 어휘와 퀴즈 난이도가 즉시 전환됩니다.
2. **🎃 1단계 (이야기 + 등불 공방)**: 6장 할로윈 백과사전(TTS 음성 지원) + **나만의 잭오랜턴 등불 만들기** + 세계 3국(미국·멕시코·한국) 가을 명절 비교
3. **🚶 2단계 (길안전 + 3단계 미니게임)**: 행정안전부 다중밀집 인파사고 예방 6단계 상황극 + **화면 터치 이동 & 가슴방어 무적 부스터 미니게임**
4. **🧙 3단계 (옷장 + 아바타 런웨이)**: **안전 아바타 코디 & 패션쇼 런웨이** + 경찰·소방·군복 등 법적 착용 금지 복장 및 위험 소품 12종 O/X 분류 + 간식·배려 예절 체크리스트
5. **⭕ 4단계 (골든벨 퀴즈)**: 보기 순서 자동 셔플, 연속 정답 콤보(`🔥`), **[💡 힌트 보기]**, **[🔀 50:50 찬스]** 지원 (총 24문항)
6. **🎖️ 5단계 (임명장 발급)**: 개인정보 서버 전송 없이 기기 내 HTML5 Canvas로 즉시 그려서 저장하는 **『할로윈 안전 대장 임명장』 PNG 다운로드**
