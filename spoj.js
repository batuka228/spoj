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

// let a = 18;
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

// 4 toonii baga
// let a = 3;
// let b = 2;
// let c = 1;
// let d = 4;
// if (a < b && a < c && a < d) {
//   console.log(a);
// } else if (b < a && b < c && b < d) {
//   console.log(b);
// } else if (c < a && c < b && c < d) {
//   console.log(c);
// } else if (d < a && d < b && d < c) {
//   console.log(d);
// }

// let num1 = 85;
// let num2 = 75;
// let num3 = 96;
// let num4 = 69;
// let sum = 0;
// if (num1 > 80) {
//   sum = sum + num1;
// }
// if (num2 > 80) {
//   sum = sum + num2;
// }
// if (num3 > 80) {
//   sum = sum + num3;
// }
// if (num4 > 80) {
//   sum = sum + num4;
// }
// console.log(sum);

// urjver 5

// let a = 3;
// let b = 6;
// let c = 2;
// let d = 4;
// let urvjver = 1;
// if (a < 5) {
//   urvjver = urvjver * a;
// }
// if (b < 5) {
//   urvjver = urvjver * b;
// }
// if (c < 5) {
//   urvjver = urvjver * c;
// }
// if (d < 5) {
//   urvjver = urvjver * d;
// }
// console.log(urvjver);

// tegsh toonii niilber

// let num1 = 10;
// let num2 = 3;
// let num3 = 5;
// let sum = 0;
// if (num1 % 2 == 0) {
//   sum = sum + num1;
// }
// if (num2 % 2 == 0) {
//   sum = sum + num2;
// }
// if (num3 % 2 == 0) {
//   sum = sum + num3;
// }
// console.log(sum);

// sondgoi toonuudin urjver
// let a = 5;
// let b = 2;
// let c = 3;
// let urvjver = 1;
// if (a % 2 !== 0) {
//   urvjver = urvjver * a;
// }
// if (b % 2 !== 0) {
//   urvjver = urvjver * b;
// }
// if (c % 2 !== 0) {
//   urvjver = urvjver * c;
// }
// console.log(urvjver);

// tentsuu 5
// const arr = [2, 4, 5, 5];
// const str = "2 4 5 5";
// let too = 0;
// let x = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 5) {
//     too = too + 1;
//   }
// }
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == 5) {
//     x = x + 1;
//   }
// }
// console.log(too);
// console.log(x);

// 3 d huvaagdah too

// let a = [3, 12, 8, 9];
// let sum = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 3 == 0) {
//     sum = sum + 1;
//   }
// }
// console.log(sum);

// 11d huvaagdahgui too

// let a = [7, 22, 13, 30];
// let sum = 0;

// function x(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 11 !== 0) {
//       sum = sum + a[i];
//     }
//   }
//   return sum;
// }
// console.log(x(a));

// 10aas ih

// let a = 9;

// if (a > 10) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 5aas baga

// let a = 4;

// function x(a) {
//   if (a < 5) {
//     return "Yes";
//   } else {
//     return "NO";
//   }
// }
// console.log(x(a));

// tegsh toonuud YES

// let a = [3, 4, 5];

// function x(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       console.log("YES");
//     } else {
//       console.log("NO");
//     }
//   }
// }

// let a = "baldan dorj ";
// let b = a.split(" ");
// console.log(a[0].toUpperCase() + "." + b[1].toUpperCase(6));
// console.log(b);

// let person = {
//   name: "dashka",
//   age: 123,
// };
// let person2 = person;
// person.name = "bat";
// console.log(Object.keys(person));

// let names = [
//   {
//     name: "baterdene",
//     age: 2003,
//   },
//   {
//     name: "bat",
//     age: 2005,
//   },
//   {
//     name: "erdene",
//     age: 1998,
//   },
//   {
//     name: "213",
//     age: 1999,
//   },
//   {
//     name: "123",
//     age: 2003,
//   },
//   {
//     name: "345",
//     age: 2003,
//   },
//   {
//     name: "134",
//     age: 2003,
//   },
// ];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].name);
// }

// let a = ["pineapple", "apple", "orange", "mango"];
// console.log(a.indexOf("orange"));
// function findindex(x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) {
//       return i;
//     } else {
//       return -1;
//     }
//   }
// }
// console.log(findindex("bi"));

// let a = ["pineapple", "apple", "orange", "mango"];
// let b = "";
// function join() {
//   for (let i = 0; i < a.length; i++) {
//     if (i == a.length - 1) {
//       b = b + " " + a[i];
//     } else {
//       b = b + " " + a[i] + " " + "or";
//     }
//   }
//   return b;
// }
// console.log(join());

// let a = ["pineapple", "apple", "orange", "mango"];
// let b = "";
// function tostring() {
//   for (let i = 0; i < a.length; i++) {
//     b = b + " " + a[i] + ",";
//   }
//   return b;
// }
// console.log(tostring());

// let a = ["pineapple", "apple", "orange", "mango"];
// function findindex(x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(findindex("bi"));

// let a = [1, 3, 5, 22, 89, 46, 17, 31];
// let b;
// function x() {
//   b = Math.min(...a) + " " + Math.max(...a);
//   return b;
// }
// console.log(x());

// let a = "baldorj baterdene ";

// function x(a) {
//   a = a.split(" ");
//   return a;
// }
// let name = x(a);
// let firstname = name[0];
// let lastname = name[1];
// let toUpperCase = (b) => {
//   return b[0].toUpperCase();
// };
// let firstup = toUpperCase(firstname);
// let n2up = toUpperCase(lastname);
// console.log(firstup + "." + n2up + lastname.slice(1, lastname.lenght));
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

// let a = [1, 2, 3, 4];
// let num = 5;
// // function x() {
// //   a = a + "," + num;
// //   return a;
// // }
// // console.log(x());

// function b() {
//   a = a[a.length] - a[a.length - 1];
//   return a;
// }
// console.log(b());

// let a = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i];
// }
// sum = sum / (a.length - 1);
// console.log(sum);

// let numberObject = {
//   a: 5,
//   b: 10,
//   c: 3,
// };
// let objectKeys = Object.keys(numberObject);
// function sum(keys, Object) {
//   let sum = 0;
//   for (let i = 0; i < keys.length; i++) {
//     sum += Object[keys[i]];
//   }
//   return sum;
// }
// console.log(objectKeys);
// console.log(sum(objectKeys, numberObject));

// const stringObject = { name: "john", age: 25, city: "example" };
// let objectKeys = Object.keys(stringObject);

// const firstLetterToUpperCase = (keys) => {
//   return keys.slice(0, 1).toUpperCase();
// };
// for (let i = 0; i < objectKeys.length; i++) {
//   console.log(
//     firstLetterToUpperCase(stringObject[objectKeys[i]]) +
//       stringObject[objectKeys[i]]
//   );
// }

// const fullName = "Dulam Jantsan";
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];
// const firstLetterToUpperCase = (str) => {
//   return str.slice(0, 1).toUpperCase();
// };
// const firstNameToUpperCase = (str) => {
//   const firstStr = firstLetterToUpperCase(str);
//   const lastStr = str.slice(1, str.length);
//   return firstStr + lastStr;
// };
// const lastNameStr = firstLetterToUpperCase(lastName);
// console.log(
//   lastNameStr + "." + " " + firstNameToUpperCase(firstName, lastName)
// );

// const mockObject = {
//   key1: "value1",
//   key2: 42,
//   key3: ["item1", "item2"],
//   key4: { nestedKey: "nestedValue" },
//   key5: true,
//   key6: null,
// };
// mockObject.key1 = null;
// mockObject.key2 = "value1";
// mockObject.key3 = 42;
// (mockObject.key4 = ["item1", "item2"]),
//   (mockObject.key5 = { nestedKey: "nestedValue" }),
//   (mockObject.key6 = true);

// console.log(mockObject);
