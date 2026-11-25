// Fridge Roast: One Line, Biggest Laugh
const { writeFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const LINE = "Samsung charges $4.99/month for 'SmartThings Energy AI' to hold temperature — cancel and your milk becomes a biology experiment, the only subscription where quitting spoils dinner.";

if (!(1 <= LINE.length && LINE.length <= 200 && LINE.trim().length > 0 && !LINE.includes('\n'))) {
  throw new Error('Invalid line');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf-8');
console.log(join(outputDir, 'entry.txt'), LINE.length);