// gurvaljin

// let a = 3;
// let b = 4;
// let c = 5;
// function gurvaljin(x, y, z) {
//   return x + z + y;
// }
// console.log(gurvaljin(a, b, c));

// cub

// let x = 5;
// let ezelhuun;
// function cub(a) {
//   ezelhuun = a * a * a;
//   return a * a * 6;
// }
// console.log(cub(x) + " " + ezelhuun);

// tegshontsogt

// let urt = 6;
// let orgon = 4;
// function talbai(a, b) {
//   return a * b;
// }
// function perimetr(a, b) {
//   return (a + b) * 2;
// }
// console.log(talbai(urt, orgon) + " " + perimetr(urt, orgon));

// function1

// let a = 1;
// function y(x) {
//   return 3 * x - 5;
// }
// console.log("y=" + y(a));

// function2

// let a = -2;
// function y(x) {
//   return 4 * x ** 2 - 3 * x + 5;
// }
// console.log(y(a));

// 2orontoi too

// let a = 27;
// let b = a % 10;
// let c = a / 10;
// let d = Math.floor(c);
// function tooni_urjver(x, y) {
//   return x * y;
// }
// console.log(tooni_urjver(b, d));

// suuliin tsifr

// let a = 476;
// function last(a) {
//   return a % 10;
// }
// console.log(last(a));

// 10tiin ornii tsifr

// let a = 243;
// let b;
// function x(a) {
//   a = a % 100;
//   b = a / 10;
//   return Math.floor(b);
// }
// console.log(x(a));

// 3 orontoi too

// let a = 423;
// let b;
// let x;
// let c;
// function sum(a, b, x) {
//   x = a / 100;
//   a = a % 100;
//   b = a % 10;
//   c = (a - b) / 10;
//   return Math.floor(x) + b + c;
// }
// console.log(sum(a, b, x));

// minut sec

// let sec = 200;
// let a;
// let b;
// function tsag(sec) {
//   a = sec / 60;
//   b = sec % 60;
//   console.log(Math.floor(a) + " " + "minut" + " " + b + " " + "sec bn ");
// }
// tsag(sec);

// tsag minut sec

// let sec = 4564;
// let tsag;
// let minut;
// function trans(sec, minut, tsag) {
//   minut = sec / 60;
//   sec = sec % 60;
//   tsag = minut / 60;
//   minut = minut % 60;
//   console.log(minut);
//   console.log(
//     Math.floor(tsag) +
//       "tsag" +
//       " " +
//       Math.floor(minut) +
//       "minut" +
//       " " +
//       sec +
//       " sec bn "
//   );
// }
// trans(sec, minut, tsag);

// minut sec -> sec

// let minut = 42;
// let sec = 23;
// function trans(minut, sec) {
//   sec = sec + minut * 60;
//   return sec;
// }
// console.log(trans(minut, sec));

// tsag minut sec to sec

// let tsag = 1;
// let minut = 2;
// let sec = 3;
// function x(tsag, minut, sec) {
//   minut = minut + tsag * 60;
//   sec = sec + minut * 60;
//   return sec;
// }
// console.log(x(tsag, minut, sec));

// honog tsag

// let tsag = 44;
// let honog;
// function x(tsag, honog) {
//   honog = tsag / 24;
//   tsag = tsag % 24;
//   console.log(Math.floor(honog) + "" + "honog " + " " + tsag + "tsag bn ");
// }
// x(tsag, honog);

// honog tsag -> tsag

// let honog = 2;
// let tsag = 5;
// function x(honog, tsag) {
//   tsag = tsag + honog * 24;
//   return tsag;
// }
// console.log(x(honog, tsag));

// let sar = 27;
// let jil;
// function x(sar, jil) {
//   jil = sar / 12;
//   sar = sar % 12;
//   console.log(Math.floor(jil) + " " + "jil" + " " + sar + " " + "sar bn ");
// }
// x(sar, jil);

// jil sar -> sar

// let jil = 2;
// let sar = 7;
// function x(jil, sar) {
//   sar = sar + jil * 12;
//   return sar;
// }
// console.log(x(jil, sar));

// 2 too nii ih

// let a = 16;
// let b = 14;
// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// 2 tooni baga

// let a = 9;
// let b = 6;
// if (a < b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// 3 tooni ih

// let a = 43;
// let b = 23;
// let c = 67;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// }

// let a = new Array(123, "asd", 213);
// console.log(a);
// let names = ["bat", "baldan ", "dulmaa ", "gonchig", "luubat", "manjin"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// let b = 0;
// let a = window.prompt("neg too oruul ");
// let i = 0
// while (i <= a ) {
//     b = b + i
//     i ++
// }
// console.log(b);

// let b = 100;
// let a = window.prompt("utga oruulna uu ");
// for (let i = 0; i <= a; i++) {
//   i = a;
// }
// console.log(i);
// let n = window.prompt("n utga iig oruulna uu");
// let a;
// if (n < 0) {
//   console.log(" 1000 hurtleh utga  butuu utga bn ");
// }
// for (let i = 0; i < 15; i++) {
//   a = n ** i;
//   if (1000 <= a) {
//     console.log(i + " " + "zereg bn");
//     break;
//   }
// }

// let i = 0;
// while (a > 1000) {
//   a = n ** i;
//   i++;
// }
// console.log(a);
// let n = window.prompt("n utga iig oruulna uu");
// let sum = 0;
// for (let i = 1; i < n; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// let n = window.prompt("n utga iig oruulna uu");
// let a = 5;
// for (let i = 0; i < a; i++) {
//   console.log(i);
//   for (let j = 0; j < i; j++) {
//     console.log((i += j));
//   }
// }
