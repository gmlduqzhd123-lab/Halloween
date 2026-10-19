import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const page = read('../src/page.html');
const game = read('../src/game.js');
const app = read('../src/app.js').replace('    // GAME_MODULE', () => game).replace('    // QUIZ_MODULE', () => read('../src/quiz.js')).replace('    // RESULTS_MODULE', () => read('../src/results.js'));
if (!app.includes('function gameLoop') || !app.includes('function renderQuiz')) throw new Error('Activity modules were not inserted');
const js = `${read('../node_modules/qrcode-generator/qrcode.js')}\n${read('../node_modules/qrcode-generator/qrcode_UTF8.js')}\n${read('../src/content.js')}\n${app}`;
const css = `${read('../src/tailwind-built.css')}\n${read('../src/custom.css')}`;
const cacheVersion=createHash('sha256').update(js).update(css).update(page).update(read('../manifest.json')).update(read('../404.html')).digest('hex').slice(0,16);
if (!page.includes('<!-- APP_STYLE -->') || !page.includes('<!-- APP_SCRIPT -->')) {
  throw new Error('Page placeholders are missing');
}
writeFileSync(new URL('../styles.css', import.meta.url), css);
writeFileSync(new URL('../app.js', import.meta.url), js);
writeFileSync(new URL('../sw.js', import.meta.url), read('../src/sw.js').replace('__VERSION__',cacheVersion));
writeFileSync(new URL('../index.html', import.meta.url), page
  .replace('<!-- APP_STYLE -->', () => '<link rel="stylesheet" href="./styles.css">')
  .replace('<!-- APP_SCRIPT -->', () => '<script src="./app.js" defer></script>'));
writeFileSync(new URL('../halloween_edu_app.html', import.meta.url), page
  .replace('<!-- APP_STYLE -->', () => `<style>${css}</style>`)
  .replace('<!-- APP_SCRIPT -->', () => `<script>${js}</script>`));
