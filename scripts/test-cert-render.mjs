// Quick font calibration test
// Run: node scripts/test-cert-render.mjs
import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const fontPath = join(projectRoot, 'public/fonts/AlexBrush-Regular.ttf');
const templatePath = join(projectRoot, 'public/events/gen-ai-to-z/certificate-template.png');

GlobalFonts.registerFromPath(fontPath, 'Alex Brush');

const template = await loadImage(templatePath);
const canvas = createCanvas(template.width, template.height);
const ctx = canvas.getContext('2d');

ctx.drawImage(template, 0, 0);

// Name position from pixel analysis:
// Center X: 1002, Center Y: 703 (on 2000x1414 image)
// Text color: white (#FFFFFF), font: Alex Brush, size: 60

const testNames = ['Alex Brush', 'Juan dela Cruz', 'María José Rodríguez-Vásquez'];
const testName = process.argv[2] || 'Alex Brush';

ctx.font = '120px "Alex Brush"';
ctx.fillStyle = '#FFFFFF';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Draw the name centered at (1002, 703)
ctx.fillText(testName, 1002, 703);

// Draw a crosshair for reference
ctx.strokeStyle = 'rgba(255,0,0,0.5)';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(1002 - 50, 703);
ctx.lineTo(1002 + 50, 703);
ctx.moveTo(1002, 703 - 30);
ctx.lineTo(1002, 703 + 30);
ctx.stroke();

const outPath = join(projectRoot, 'public/events/gen-ai-to-z/cert-test.png');
writeFileSync(outPath, canvas.toBuffer('image/png'));
console.log(`Test render saved to: ${outPath}`);
console.log(`Canvas size: ${canvas.width}x${canvas.height}`);

// Also measure text
const metrics = ctx.measureText(testName);
console.log(`Text "${testName}" metrics: width=${metrics.width.toFixed(1)}`);
