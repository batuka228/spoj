// let ehnii_too = Number(window.prompt("toogoo oruulna uu "));
// let daraagin_too = Number(window.prompt("2dahi too "));
// let uildel = window.prompt("ymar uildel (+ - * / %)");
// // if (ehnii_too  || daraagin_too !== Number) {
// //   console.log("buruu utga");
// // }
// if (ehnii_too === undefined || daraagin_too === undefined) {
//   console.log("tanii oruulsan utga buruu bn ");
// }
// function cal(a, b, c) {
//   if (uildel === "*") {
//     return a * b;
//   }
//   if (uildel === "-") {
//     return a - b;
//   }
//   if (uildel === "+") {
//     return a + b;
//   }
//   if (uildel === "/") {
//     return a / b;
//   }
//   if (uildel === "%") {
//     return (a * 100) / b;
//   }
// }

// console.log(cal(ehnii_too, daraagin_too, uildel));
// if (ehnii_too === ) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(typeof ehnii_too);
// let a = "hell
let a = window.prompt("катетыг оруулна уу ");
let b = window.prompt("катетыг оруулна уу ");
let c = window.prompt("гипотенузийг оруулна уу");
function gurvaljin(a, b, c) {
  if (a ** 2 + b ** 2 == c ** 2) {
    console.log("tegsh ontsogt gurvaljin mon ");
    console.log("gurvaljinii talbai");
    return (a * b) / 2;
  } else {
    console.log("tegsh ontsogt gurvaljin bish");
  }
}
console.log(gurvaljin(a, b, c));

// let a = window.prompt("tegsh ontsogtiin taliig oruulna uu ");
// let b = window.prompt("tegsh ontsogtiin taliig oruulna uu");
// function talbai(a, b) {
//   return a * b;
// }
// console.log(talbai(a, b));
// let a = window.prompt("x d onoogdoh utgaa oruulna uu ");
// function x_ol(x) {
//   return x ** 2 + 5 * x + 6;
// }
// console.log(x_ol(a));
