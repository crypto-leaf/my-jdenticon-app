const fs = require('fs');
const jdenticon = require('jdenticon');
const { createCanvas } = require('canvas');

// アイコンのサイズを指定
const size = 200;

// キャンバスを作成
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Jdenticonの設定
const hash = "satosota"; // 任意の文字列

// Jdenticonでアイコンを描画
jdenticon.drawIcon(ctx, hash, size);

// PNGデータとして保存
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('icon.png', buffer);

console.log('アイコンがicon.pngとして保存されました');
