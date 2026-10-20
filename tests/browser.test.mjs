import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
import { chromium } from 'playwright';
import vm from 'node:vm';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.svg':'image/svg+xml' };

test('main browser flows and standalone file load without script errors', async t => {
  const server=createServer(async (req,res)=>{
    let relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/+/, '');
    if(relative.startsWith('Halloween/'))relative=relative.slice('Halloween/'.length);
    const path=resolve(root,relative || 'index.html');
    if(path!==root && !path.startsWith(root+sep)){res.writeHead(403).end();return;}
    try { const bytes=await readFile(path);res.writeHead(200,{'content-type':types[extname(path)]||'application/octet-stream'}).end(bytes); }
    catch {res.writeHead(404,{'content-type':'text/html; charset=utf-8'}).end(await readFile(resolve(root,'404.html')));}
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  t.after(()=>server.close());
  const windowsChrome='C:/Program Files/Google/Chrome/Application/chrome.exe';
  const executablePath=process.env.CHROME_PATH || (existsSync(windowsChrome) ? windowsChrome : undefined);
  const browser=await chromium.launch({...(executablePath?{executablePath}:{}),headless:true});
  t.after(()=>browser.close());
  const welcome=await browser.newPage({viewport:{width:390,height:844}});
  await welcome.goto(`http://127.0.0.1:${server.address().port}/`);
  assert.equal(await welcome.locator('#welcomeScreen').isVisible(),true);
  assert.equal(await welcome.locator('#tab-culture').isVisible(),false);
  await welcome.locator('[data-welcome-grade="1-2"]').click();
  assert.equal(await welcome.locator('[data-welcome-grade="1-2"]').getAttribute('aria-pressed'),'true');
  assert.equal(await welcome.locator('#toastContainer > *').count(),0);
  await welcome.locator('#btnStartLesson').click();
  assert.equal(await welcome.locator('#lessonStageTitle').innerText(),'문화 이야기');
  assert.equal(await welcome.locator('#tab-culture').isVisible(),true);
  assert.equal(await welcome.locator('.header-nav').isVisible(),false);
  await welcome.locator('#btnTapStoryEmoji').click();
  assert.match(await welcome.locator('#storyClueBox').innerText(),/숨은 단서/);
  await welcome.locator('#storyPollBox button').first().click();
  assert.equal(await welcome.locator('#storyPollFeedback').isVisible(),true);
  await welcome.locator('#storyStepPills button').last().click();
  await welcome.locator('#btnNextStory').click();
  assert.equal(await welcome.locator('[data-culture-stage="compare"]').isVisible(),true);
  await welcome.locator('#festivalQuizBox button').first().click();
  assert.match(await welcome.locator('#festivalQuizFeedback').innerText(),/도장 완료/);
  await welcome.locator('#btnOptionalCraft').click();
  assert.equal(await welcome.locator('[data-culture-stage="craft"]').isVisible(),true);
  assert.match(await welcome.locator('#pumpkinRecipeBox').innerText(),/호박 미션|레시피 완성/);
  await welcome.locator('#btnToCompare').click();
  await welcome.locator('#btnToSafety').click();
  assert.equal(await welcome.locator('#lessonStageTitle').innerText(),'안전한 선택');
  assert.equal(await welcome.locator('#btnStartCanvasGame').isVisible(),false);
  await welcome.locator('#safetyActionDrill button').click();
  assert.match(await welcome.locator('#safetyActionDrill').innerText(),/실습 완료/);
  for(let i=0;i<6;i++)await welcome.locator('#btnNextScenario').click();
  assert.equal(await welcome.locator('#lessonStageTitle').innerText(),'배려하는 옷차림');
  await welcome.locator('#btnToggleAvatar').click();
  await welcome.locator('#btnNightLightTest').click();
  assert.match(await welcome.locator('#avatarJudgeText').innerText(),/어두운 밤길/);
  assert.equal(await welcome.locator('#costumeCardsGrid > div').count(),4);
  await welcome.locator('#btnNextCostumePage').click();
  assert.equal(await welcome.locator('#costumePageLabel').innerText(),'2 / 3');
  await welcome.locator('#btnToQuiz').click();
  assert.equal(await welcome.locator('#lessonStageTitle').innerText(),'생각 정리');
  assert.equal(await welcome.locator('#quizTypeTag').isVisible(),true);
  assert.equal(await welcome.locator('#btnHomeLogo h1').innerText(),'할로윈 안전 놀이터');
  await welcome.locator('#btnHomeLogo').click();
  assert.equal(await welcome.locator('#welcomeScreen').isVisible(),true);
  assert.equal(await welcome.locator('#tab-quiz').isVisible(),false);
  assert.equal(await welcome.locator('#btnStartFresh').isVisible(),true);
  assert.match(await welcome.locator('#btnStartFresh').innerText(),/처음부터 시작하기/);
  assert.match(await welcome.locator('#btnStartLesson').innerText(),/이어서 시작하기/);
  assert.match(await welcome.locator('.welcome-copyright').innerText(),/엽쌤/);
  await welcome.locator('#btnWelcomeGuide').click();
  assert.equal(await welcome.locator('#teacherModal').isVisible(),true);
  await welcome.locator('#btnCopyNoticeText').click();
  await welcome.locator('#btnCopyNeisText').click();
  await welcome.keyboard.press('Escape');
  assert.equal(await welcome.locator('#teacherModal').isVisible(),false);
  await welcome.locator('#btnStartFresh').click();
  assert.equal(await welcome.locator('#lessonStageTitle').innerText(),'문화 이야기');
  await welcome.keyboard.press('ArrowRight');
  assert.match(await welcome.locator('#storySlideTag').innerText(),/카드 2/);
  await welcome.locator('#lessonStageInfo').click();
  assert.equal(await welcome.locator('.header-nav').isVisible(),true);
  await welcome.locator('[data-tab="tab-cert"]').click();
  await welcome.locator('#btnFillWholeClass').click();
  assert.match(await welcome.locator('#certNameInput').inputValue(),/어린이 일동/);
  await welcome.locator('[data-tab="tab-culture"]').click();
  assert.equal(await welcome.locator('#tab-culture').isVisible(),true);
  await welcome.close();
  const newPreparedPage=async options=>{
    const candidate=await browser.newPage(options);
    await candidate.addInitScript(()=>{
      try {sessionStorage.setItem('halloween-lesson-started','1');sessionStorage.setItem('halloween-tools-open','true');} catch (_) {}
    });
    return candidate;
  };
  const page=await newPreparedPage({viewport:{width:390,height:844}});
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await assert.doesNotReject(()=>page.locator('.grade-active').waitFor());
  assert.equal(await page.locator('.grade-active').count(),1);
  assert.equal(await page.locator('[data-culture-stage="story"]').isVisible(),true);
  assert.equal(await page.locator('[data-culture-stage="craft"]').isVisible(),false);
  await page.locator('[data-culture-step="craft"]').click();
  assert.equal(await page.locator('[data-culture-stage="craft"]').isVisible(),true);
  await page.locator('#btnToCompare').click();
  assert.equal(await page.locator('[data-culture-stage="compare"]').isVisible(),true);
  await page.locator('[data-festival="muertos"]').click();
  assert.match(await page.locator('#festivalCompareDesc').innerText(),/가족|기억/);
  assert.match(await page.locator('#festivalCompareQuestion').innerText(),/뜻/);
  await page.locator('[data-culture-step="story"]').click();
  assert.equal(await page.locator('[data-culture-stage="story"]').isVisible(),true);
  await page.locator('#btnBoardMode').click();
  for(const width of [320,390,768,1366]){
    await page.setViewportSize({width,height:800});
    const bounds=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,view:document.documentElement.clientWidth}));
    assert.ok(bounds.scroll<=bounds.view+1,`${width}px overflow`);
  }
  await page.locator('#btnBoardMode').click();
  await page.setViewportSize({width:320,height:700});
  for (const tab of ['culture','safety','costume','quiz','cert']) {
    await page.locator(`[data-tab="tab-${tab}"]`).first().click();
    const bounds=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,view:document.documentElement.clientWidth}));
    assert.ok(bounds.scroll<=bounds.view+1,`${tab} at 320px overflow`);
  }
  await page.locator('[data-tab="tab-culture"]').first().click();
  await page.getByRole('button',{name:/5~6학년/}).first().click();
  assert.match(await page.locator('.grade-active').innerText(),/5~6학년/);
  await page.locator('[data-tab="tab-safety"]').first().click();
  assert.match(await page.locator('#scenarioDesc').innerText(),/근거를 비교/);
  await page.getByRole('button',{name:/1~2학년/}).first().click();
  assert.match(await page.locator('#scenarioTitle').innerText(),/먼저 어디를 볼까요/);
  await page.getByRole('button',{name:/5~6학년/}).first().click();
  await page.locator('#btnTeacherGuide').click();
  assert.equal(await page.locator('#teacherModal').isVisible(),true);
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('#teacherModal').isVisible(),false);
  assert.equal(await page.evaluate(()=>document.activeElement?.id),'btnTeacherGuide');
  await page.locator('#btnResetProgress').click();
  await page.locator('#btnCancelReset').click();
  await page.locator('[data-tab="tab-cert"]').first().click();
  const download=page.waitForEvent('download');
  await page.locator('#btnExportProgress').click();
  const exported=await download;
  assert.match(exported.suggestedFilename(),/\.json$/);
  const exportedBytes=await readFile(await exported.path());
  const exportedId=JSON.parse(exportedBytes.toString()).sessionId;
  const previousProgress=JSON.parse(exportedBytes.toString());
  previousProgress.contentVersion='2026-10-20.1';
  previousProgress.grade='3-4';
  previousProgress.activeTab='tab-culture';
  Object.assign(previousProgress.gradeRecords['3-4'],{
    storyIndex:3,readStories:{0:true,1:true,2:true,3:true},quizIndex:2,
    quizFirst:{'3-4:q1':{correct:true}},
    safetyConfirmed:{route:{contentVersion:'2026-10-20.1',at:123}},
    stamps:{s1:true,s2:true,s3:false,s4:true}
  });
  const oldContent=await newPreparedPage();
  await oldContent.addInitScript(saved=>localStorage.setItem('halloween_edu_progress_v2',JSON.stringify(saved)),previousProgress);
  await oldContent.goto(`http://127.0.0.1:${server.address().port}/`);
  const upgraded=await oldContent.evaluate(()=>({
    current:JSON.parse(localStorage.getItem('halloween_edu_progress_v2')),
    backupKey:Object.keys(localStorage).find(key=>key.startsWith('halloween_edu_progress_v2_before_content_'))
  }));
  assert.ok(upgraded.backupKey);
  assert.equal(upgraded.current.contentVersion,'2026-10-20.2');
  assert.equal(upgraded.current.gradeRecords['3-4'].storyIndex,0);
  assert.deepEqual(upgraded.current.gradeRecords['3-4'].quizFirst,{});
  assert.equal(upgraded.current.gradeRecords['3-4'].safetyConfirmed.route.contentVersion,'2026-10-20.1');
  assert.equal(upgraded.current.gradeRecords['3-4'].stamps.s2,true);
  assert.equal(upgraded.current.gradeRecords['3-4'].stamps.s1,false);
  assert.equal(await oldContent.evaluate(key=>JSON.parse(localStorage.getItem(key)).gradeRecords['3-4'].storyIndex,upgraded.backupKey),3);
  await oldContent.locator('[data-tab="tab-cert"]').first().click();
  assert.doesNotMatch(await oldContent.locator('#learningResultSummary').innerText(),/다시 확인할 목표: 이동로와 출구 확인/);
  await oldContent.reload();
  assert.equal(await oldContent.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).gradeRecords['3-4'].storyIndex),0);
  await oldContent.close();
  await page.locator('#btnResetProgress').click();
  await page.locator('#btnConfirmReset').click();
  await page.locator('[data-tab="tab-cert"]').first().click();
  await page.locator('#importProgressFile').setInputFiles({name:'record.json',mimeType:'application/json',buffer:exportedBytes});
  await page.waitForFunction(()=>document.getElementById('importResults').textContent.includes('가져왔어요'));
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).sessionId),exportedId);
  await page.locator('#importProgressFile').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{bad')});
  await page.waitForFunction(()=>/JSON|기록을 읽을 수 없어요/.test(document.getElementById('importResults').textContent));
  assert.match(await page.locator('#importResults').innerText(),/기록을 읽을 수 없어요|JSON/);
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).sessionId),exportedId);
  const wrongSchema={...JSON.parse(exportedBytes.toString()),schemaVersion:99};
  await page.locator('#importProgressFile').setInputFiles({name:'old.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(wrongSchema))});
  await page.waitForFunction(()=>document.getElementById('importResults').textContent.includes('지원하지 않는 기록 형식'));
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).sessionId),exportedId);
  assert.deepEqual(errors,[]);
  await page.evaluate(async()=>{await navigator.serviceWorker.ready;});
  await page.reload();
  await page.context().setOffline(true);
  await page.reload();
  assert.equal(await page.locator('.grade-active').count(),1);
  await page.context().setOffline(false);
  await page.goto(new URL('../halloween_edu_app.html',import.meta.url).href);
  await page.locator('.grade-active').waitFor();
  await page.context().setOffline(true);
  await page.reload();
  await page.locator('[data-tab="tab-cert"]').first().click();
  await page.locator('#certSchoolInput').fill('가'.repeat(40));
  await page.locator('#certNameInput').fill('나'.repeat(40));
  await page.locator('#certPledgeInput').fill('친구와 함께 이동할 때 넓은 길을 찾고 서로 밀지 않으며 어른에게 알려요. '.repeat(4));
  const resultDownload=page.waitForEvent('download');
  await page.locator('#btnDownloadResult').click();
  const resultBytes=await readFile(await (await resultDownload).path());
  assert.equal(resultBytes.readUInt32BE(16),1100);
  assert.equal(resultBytes.readUInt32BE(20),1500);
  await page.evaluate(()=>{window.print=()=>{};});
  await page.locator('#btnPrintResult').click();
  assert.match(await page.locator('#printResultImage').getAttribute('src'),/^data:image\/png/);
  await page.context().setOffline(false);
  assert.deepEqual(errors,[]);

  const migration=await newPreparedPage();
  await migration.addInitScript(()=>localStorage.setItem('halloween_edu_progress_v1',JSON.stringify({grade:'5-6',stamps:{s1:true,s2:true},candyPoints:90})));
  await migration.goto(`http://127.0.0.1:${server.address().port}/`);
  const migrated=await migration.evaluate(()=>({old:localStorage.getItem('halloween_edu_progress_v1'),next:JSON.parse(localStorage.getItem('halloween_edu_progress_v2'))}));
  assert.ok(migrated.old);
  assert.equal(migrated.next.legacy.candyPoints,90);
  assert.equal(migrated.next.candyPoints,0);
  await migration.reload();
  assert.equal(await migration.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints),0);
  await migration.close();

  const damaged=await newPreparedPage();
  await damaged.addInitScript(()=>localStorage.setItem('halloween_edu_progress_v2','{bad json'));
  await damaged.goto(`http://127.0.0.1:${server.address().port}/`);
  assert.equal(await damaged.evaluate(()=>localStorage.getItem('halloween_edu_progress_v2')),'{bad json');
  await damaged.locator('#btnResetProgress').click();
  await damaged.locator('#btnConfirmReset').click();
  const recovered=await damaged.evaluate(()=>({current:JSON.parse(localStorage.getItem('halloween_edu_progress_v2')),old:Object.keys(localStorage).find(key=>key.startsWith('halloween_edu_progress_v2_preserved_'))}));
  assert.equal(recovered.current.schemaVersion,2);
  assert.ok(recovered.old);
  assert.equal(await damaged.evaluate(key=>localStorage.getItem(key),recovered.old),'{bad json');
  await damaged.close();

  const blocked=await newPreparedPage();
  const blockedErrors=[];blocked.on('pageerror',error=>blockedErrors.push(error.message));
  await blocked.addInitScript(()=>{Storage.prototype.setItem=()=>{throw new DOMException('Storage blocked','QuotaExceededError');};});
  await blocked.goto(`http://127.0.0.1:${server.address().port}/`);
  await blocked.locator('#btnNextStory').click();
  await blocked.locator('[data-tab="tab-cert"]').first().click();
  assert.match(await blocked.locator('#learningResultSummary').innerText(),/저장되지 않습니다/);
  assert.deepEqual(blockedErrors,[]);
  await blocked.close();

  const grades=await newPreparedPage();
  await grades.goto(`http://127.0.0.1:${server.address().port}/`);
  await grades.locator('#btnNextStory').click();
  assert.match(await grades.locator('#storySlideTag').innerText(),/카드 2/);
  const storyPoints=await grades.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints);
  await grades.locator('#gradeBtn56').click();
  await grades.locator('#gradeBtn34').click();
  await grades.locator('#gradeBtn34').click();
  await grades.reload();
  assert.match(await grades.locator('#storySlideTag').innerText(),/카드 2/);
  assert.equal(await grades.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints),storyPoints);
  await grades.close();

  const quiz=await newPreparedPage();
  await quiz.goto(`http://127.0.0.1:${server.address().port}/`);
  await quiz.locator('[data-tab="tab-quiz"]').first().click();
  for(let i=0;i<8;i++){
    const wrong=await quiz.evaluate(index=>{
      const answer=EDUCATION_DATA['3-4'].quizzes[index].answer;
      const record=JSON.parse(localStorage.getItem('halloween_edu_progress_v2'));
      return record.gradeRecords['3-4'].quizOrders[`3-4:q${index+1}`].findIndex(option=>option!==answer);
    },i);
    await quiz.locator('.quiz-opt-btn').nth(wrong).click();
    assert.equal(await quiz.locator('#btnSpeakQuizFeedback').isVisible(),true);
    await quiz.locator('#btnNextQuizQuestion').click();
  }
  assert.match(await quiz.locator('#quizFinalScoreTitle').innerText(),/처음 이해한 질문 0\/8/);
  assert.doesNotMatch(await quiz.locator('#quizFinalScoreDesc').innerText(),/모두 마스터/);
  await quiz.locator('#btnReviewQuiz').click();
  for(let i=0;i<8;i++){
    const right=await quiz.evaluate(index=>{
      const answer=EDUCATION_DATA['3-4'].quizzes[index].answer;
      const record=JSON.parse(localStorage.getItem('halloween_edu_progress_v2'));
      return record.gradeRecords['3-4'].quizOrders[`3-4:q${index+1}`].indexOf(answer);
    },i);
    await quiz.locator('.quiz-opt-btn').nth(right).click();
    await quiz.locator('#btnNextQuizQuestion').click();
  }
  assert.match(await quiz.locator('#quizFinalScoreTitle').innerText(),/처음 이해한 질문 0\/8/);
  const reviewedPoints=await quiz.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints);
  await quiz.locator('#btnReviewQuiz').click();
  for(let i=0;i<8;i++){
    const right=await quiz.evaluate(index=>{
      const answer=EDUCATION_DATA['3-4'].quizzes[index].answer;
      const record=JSON.parse(localStorage.getItem('halloween_edu_progress_v2'));
      return record.gradeRecords['3-4'].quizOrders[`3-4:q${index+1}`].indexOf(answer);
    },i);
    await quiz.locator('.quiz-opt-btn').nth(right).click();
    await quiz.locator('#btnNextQuizQuestion').click();
  }
  assert.equal(await quiz.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints),reviewedPoints);
  await quiz.locator('[data-tab="tab-cert"]').first().click();
  assert.equal(await quiz.locator('#btnDownloadCert').isDisabled(),true);
  await quiz.close();

  const chance=await newPreparedPage();
  await chance.goto(`http://127.0.0.1:${server.address().port}/`);
  await chance.locator('[data-tab="tab-quiz"]').first().click();
  const originalOptions=await chance.locator('.quiz-opt-btn').allTextContents();
  await chance.locator('#btnQuizHint').click();
  await chance.locator('#btnQuizFifty').click();
  const correctIndex=await chance.evaluate(()=>{
    const saved=JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).gradeRecords['3-4'];
    return saved.quizOrders['3-4:q1'].indexOf(EDUCATION_DATA['3-4'].quizzes[0].answer);
  });
  assert.equal(await chance.locator('.quiz-opt-btn').nth(correctIndex).isEnabled(),true);
  await chance.reload();
  await chance.locator('[data-tab="tab-quiz"]').first().click();
  assert.deepEqual(await chance.locator('.quiz-opt-btn').allTextContents(),originalOptions);
  assert.equal(await chance.locator('.quiz-opt-btn').nth(correctIndex).isEnabled(),true);
  await chance.locator('.quiz-opt-btn').nth(correctIndex).click();
  await chance.reload();
  await chance.locator('[data-tab="tab-quiz"]').first().click();
  assert.equal(await chance.locator('#btnNextQuizQuestion').isVisible(),true);
  const firstAnswer=await chance.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).gradeRecords['3-4'].quizFirst['3-4:q1']);
  assert.equal(firstAnswer.hintUsed,true);
  assert.equal(firstAnswer.fiftyUsed,true);
  await chance.close();

  const reward=await newPreparedPage();
  await reward.goto(`http://127.0.0.1:${server.address().port}/`);
  await reward.locator('[data-tab="tab-costume"]').first().click();
  const firstRule=reward.locator('#etiquetteChecklist button').first();
  await firstRule.click();await firstRule.click();await firstRule.click();
  let points=await reward.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints);
  assert.equal(points,10);
  await reward.locator('.costume-choice-btn[data-id="c2"][data-choice="unsafe"]').click();
  await reward.locator('.costume-choice-btn[data-id="c2"][data-choice="safe"]').click();
  await reward.locator('.costume-choice-btn[data-id="c2"][data-choice="unsafe"]').click();
  await reward.locator('.costume-choice-btn[data-id="c2"][data-choice="safe"]').click();
  points=await reward.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints);
  assert.equal(points,20);
  await reward.reload();
  await reward.locator('[data-tab="tab-costume"]').first().click();
  await reward.locator('#etiquetteChecklist button').first().click();
  await reward.locator('#etiquetteChecklist button').first().click();
  assert.equal(await reward.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).candyPoints),20);
  await reward.close();

  const culture=await newPreparedPage();
  await culture.goto(`http://127.0.0.1:${server.address().port}/`);
  await culture.locator('#btnTeacherGuide').click();
  for(const id of ['safety','costume','quiz'])await culture.locator(`.teacherRequired[value="${id}"]`).uncheck();
  await culture.locator('#btnApplyTeacher').click();
  for(let i=0;i<6;i++)await culture.locator('#storyStepPills button').nth(i).click();
  await culture.locator('[data-tab="tab-cert"]').first().click();
  assert.equal(await culture.locator('#btnDownloadParticipation').isEnabled(),true);
  assert.equal(await culture.locator('#btnDownloadCert').isDisabled(),true);
  const participation=culture.waitForEvent('download');
  await culture.locator('#btnDownloadParticipation').click();
  assert.match((await participation).suggestedFilename(),/\.png$/);
  await culture.close();

  const empty=await newPreparedPage();
  await empty.goto(`http://127.0.0.1:${server.address().port}/`);
  await empty.locator('#btnTeacherGuide').click();
  for(const id of ['culture','safety','costume','quiz'])await empty.locator(`.teacherRequired[value="${id}"]`).uncheck();
  await empty.locator('#btnApplyTeacher').click();
  await empty.locator('[data-tab="tab-cert"]').first().click();
  assert.equal(await empty.locator('#btnDownloadParticipation').isDisabled(),true);
  assert.match(await empty.locator('#learningResultSummary').innerText(),/필수 활동이 선택되지 않았어요/);
  await empty.close();

  const safety=await newPreparedPage();
  await safety.goto(`http://127.0.0.1:${server.address().port}/`);
  await safety.locator('[data-tab="tab-safety"]').first().click();
  for(let i=0;i<6;i++){
    if(i===0){
      await safety.locator('#scenarioChoices button').nth(1).click();
      assert.equal(await safety.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).gradeRecords['3-4'].safetyConfirmed).length),0);
    }
    await safety.locator('#scenarioChoices button').first().click();
    assert.equal(await safety.locator('#btnSpeakSafetyFeedback').isVisible(),true);
    const answer=await safety.evaluate(index=>SAFETY_GOALS[index].checks['3-4'][2],i);
    await safety.locator('#safetyFollowup button').nth(answer).click();
    if(i<5)await safety.locator('#btnNextScenario').click();
  }
  const safetyRecord=await safety.evaluate(()=>JSON.parse(localStorage.getItem('halloween_edu_progress_v2')).gradeRecords['3-4']);
  assert.equal(safetyRecord.safetyFirst.route.correct,false);
  assert.equal(Object.keys(safetyRecord.safetyConfirmed).length,6);
  await safety.locator('[data-tab="tab-cert"]').first().click();
  assert.equal(await safety.locator('#btnDownloadCert').isEnabled(),true);
  const certificate=safety.waitForEvent('download');
  await safety.locator('#btnDownloadCert').click();
  assert.match((await certificate).suggestedFilename(),/\.png$/);
  await safety.close();

  const game=await newPreparedPage({viewport:{width:390,height:844}});
  await game.goto(`http://127.0.0.1:${server.address().port}/`);
  await game.locator('[data-tab="tab-safety"]').first().click();
  await game.locator('#btnToggleSafetyGame').click();
  await game.locator('#btnStartCanvasGame').click();
  await game.locator('#gameRouteChoices button').nth(0).click();
  await game.locator('.game-dpad-btn[data-dir="right"]').click();
  await game.locator('#btnStartCanvasGame').click();
  const imageBefore=await game.locator('#safetyGameCanvas').evaluate(canvas=>canvas.toDataURL());
  await game.setViewportSize({width:844,height:390});
  const imageAfter=await game.locator('#safetyGameCanvas').evaluate(canvas=>canvas.toDataURL());
  assert.equal(imageAfter,imageBefore);
  await game.locator('#btnStartCanvasGame').click();
  await game.locator('#btnTeacherGuide').click();
  const modalImage=await game.locator('#safetyGameCanvas').evaluate(canvas=>canvas.toDataURL());
  await game.locator('#teacherGrade').focus();
  await game.keyboard.press('ArrowUp');
  assert.equal(await game.locator('#safetyGameCanvas').evaluate(canvas=>canvas.toDataURL()),modalImage);
  await game.keyboard.press('Escape');
  assert.match(await game.locator('#btnStartCanvasGame').innerText(),/이어하기/);
  await game.close();

  const scoped=await browser.newContext();
  await scoped.addInitScript(()=>{try{sessionStorage.setItem('halloween-lesson-started','1');sessionStorage.setItem('halloween-tools-open','true');}catch(_){}});
  const route=await scoped.newPage();
  const appUrl=`http://127.0.0.1:${server.address().port}/Halloween/`;
  await route.goto(appUrl);
  await route.evaluate(async()=>{
    const cache=await caches.open('another-application-cache');
    await cache.put('/other-app',new Response('keep'));
    await navigator.serviceWorker.ready;
  });
  await route.waitForFunction(()=>document.getElementById('offlineStatus').textContent.includes('준비 완료'));
  const names=await route.evaluate(()=>caches.keys());
  assert.ok(names.includes('another-application-cache'));
  assert.ok(names.some(name=>name.startsWith('halloween-edu:/Halloween/:')));
  await route.reload();
  await scoped.setOffline(true);
  await route.reload();
  assert.equal(await route.locator('.grade-active').count(),1);
  await route.locator('[data-tab="tab-quiz"]').first().click();
  await route.locator('.quiz-opt-btn').first().click();
  await route.locator('[data-tab="tab-cert"]').first().click();
  const offlineResult=route.waitForEvent('download');
  await route.locator('#btnDownloadResult').click();
  assert.match((await offlineResult).suggestedFilename(),/\.png$/);
  await scoped.setOffline(false);
  await route.goto(appUrl+'missing/deep/link');
  assert.match(route.url(),/\/Halloween\/index\.html$/);
  assert.ok((await route.evaluate(()=>caches.keys())).includes('another-application-cache'));
  for(const theme of ['school','field','trip','sports','local']){
    await route.locator('#btnTeacherGuide').click();
    await route.locator('#teacherTheme').selectOption(theme);
    await route.locator('#teacherStart').selectOption('tab-safety');
    await route.locator('#btnApplyTeacher').click();
    assert.equal(await route.locator('#themeSituations > section').count(),3,theme);
  }
  await route.locator('#btnTeacherGuide').click();
  for(const id of ['culture','costume','quiz'])await route.locator(`.teacherRequired[value="${id}"]`).uncheck();
  await route.locator('#btnApplyTeacher').click();
  for(let i=0;i<3;i++){
    const card=route.locator('#themeSituations > section').nth(i);
    await card.locator('button').first().click();
    await card.locator('input').fill('넓은 이동로를 살피고 친구에게 알려요');
    await card.locator('input').press('Tab');
  }
  await route.locator('[data-tab="tab-cert"]').first().click();
  assert.equal(await route.locator('#btnDownloadParticipation').isEnabled(),true);
  assert.equal(await route.locator('#btnDownloadCert').isDisabled(),true);
  await route.locator('#btnTeacherGuide').click();
  assert.equal(await route.locator('#shareQr svg').count(),1);
  const share=await route.locator('#shareUrlInput').inputValue();
  assert.match(share,/t=local/);
  assert.doesNotMatch(share,/name|schoolName|className/);
  await route.locator('#btnCloseTeacherModal').click();
  const shared=await scoped.newPage();
  await shared.goto(share);
  assert.match(await shared.locator('#themeSituationTitle').innerText(),/지역 행사/);
  await shared.close();
  await scoped.close();

  const noWorker=await browser.newContext({serviceWorkers:'block'});
  await noWorker.addInitScript(()=>{try{sessionStorage.setItem('halloween-lesson-started','1');sessionStorage.setItem('halloween-tools-open','true');}catch(_){}});
  const missing=await noWorker.newPage();
  await missing.goto(appUrl+'missing/nested/path');
  await missing.waitForURL(/\/Halloween\/index\.html$/);
  assert.equal(await missing.locator('.grade-active').count(),1);
  await noWorker.close();
});

test('game movement is based on elapsed seconds across refresh rates', async()=>{
  const source=await readFile(resolve(root,'src/game.js'),'utf8');
  const travel=hz=>vm.runInNewContext(`${source}\n safetyGame.running=true; safetyGame.route='wide'; safetyGame.keys.add('ArrowRight'); for(let i=0;i<${hz};i++)updateSafetyGame(1/${hz}); safetyGame.player.x;`,{});
  for(const hz of [30,60,120])assert.ok(Math.abs(travel(hz)-152)<0.001,`${hz}Hz`);
});
