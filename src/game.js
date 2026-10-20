    // Canvas coordinates stay at 600×250. CSS scales only the display.
    let gameAnimId = null;
    const STAGE_MISSIONS = {
      1: '1단계 미션: 🟩 비상구 표지판을 확인하며 넓은 출구로 이동해요!',
      2: '2단계 미션: ➡️ 우측통행 화살표를 따라가고 🍬 떨어진 사탕은 줍지 말아요!',
      3: '3단계 미션: 👧 길가의 친구와 함께 대각선 넓은 출구로 빠져나와요!'
    };
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
      const speed = 28 + (state.gameStage-1)*8; // logical pixels per second
      safetyGame.hazards = [
        {x:220,y:113,r:28,dx:speed,dy:0},
        {x:355,y:165,r:26,dx:-speed*0.7,dy:0}
      ];
      if (state.gameStage === 3) {
        safetyGame.hazards.push({x:290,y:140,r:22,dx:speed*0.5,dy:0});
      }
      if (state.gameStage === 1) {
        safetyGame.items = [{x:240,y:76,r:16,kind:'sign',icon:'🟩',label:'비상구 확인',done:false}];
      } else if (state.gameStage === 2) {
        safetyGame.items = [
          {x:280,y:72,r:16,kind:'lane',icon:'➡️',label:'우측통행 유지',done:false},
          {x:270,y:165,r:18,kind:'candyTrap',icon:'🍬',label:'떨어진 사탕 주의',done:false}
        ];
      } else {
        safetyGame.items = [{x:175,y:86,r:16,kind:'friend',icon:'👧',label:'친구와 동행',done:false}];
      }
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
      ctx.fillStyle='#fecaca';ctx.font='bold 12px "Gowun Dodum", sans-serif';ctx.fillText('🔴 혼잡한 좁은 길',220,208);
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
