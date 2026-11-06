// Testet die Rechnung direkt aus index.html
const fs=require('fs'),assert=require('assert'),H=3.6e6;
const src=fs.readFileSync(__dirname+'/index.html','utf8').match(/<script id="engine">([\s\S]*?)<\/script>/)[1];
const m={exports:{}};new Function('module',src)(m);const E=m.exports;
const l5=E.level([{t:0,mg:100}],5*H,5);assert(Math.abs(l5-51.4)<0.5,l5);
const tm=E.tmax(5)*60;assert(tm>40&&tm<50,tm);
const c=E.clearTime([{t:0,mg:107}],0,5,30)/H;assert(c>9&&c<9.6,c);
assert(E.clearTime([],123,5,30)===123);
const latest=E.latestDrink([],107,0,22*H,5,30)/H;assert(latest>12&&latest<13,latest);
assert(E.latestDrink([{t:21*H,mg:300}],70,21.5*H,22*H,5,30)===null);
console.log('ok');
