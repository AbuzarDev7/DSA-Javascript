// console.log('hello dsa');

// let age = Number(prompt('Enter your age'));

// if(isNaN(age) === true){ // idr kya horha hai agr mau na string dak rha ho input mai to wos mai na
// neecah wala condition mai ja rah hai jis ki waja sa ya bed prictice hai q k agr stirng b dala ga to ham to mang rha hai age jo ka ak number hai an
// to wos ka liya ham is nan use kra ga   isNaN(age) abi idr agr age number nhi hoga jo ka strong hoga to wosko true mai lye ga
// and wos ko chala daga is mai to javascript asi tra kam krta hai
//      console.log('wrong  input')
// }else if(age >= 18){
//    console.log('Vote is valied')

// }else{
// console.log('vote is not valied');
// }

// user discount

// let amount = Number(prompt('Enter your Amount'));
// if(amount > 0 && amount <=5000){
//    console.log(amount)
// } else if(amount > 5001&& amount <= 7000){
//  console.log(amount - Math.floor((5*amount)/100))
// }else if(amount > 7001 && amount<= 9000){
//    console.log(amount - Math.floor((10*amount)/100))
// } else if(amount > 9000){
//    console.log(amount - Math.floor((20*amount)/100))
// }else{
//     console.log('Wrong Input')
// }

// let amount = Number(prompt('Enter your Amount'));
// let discount = 0;
// if(amount > 0 && amount <=5000){
//    discount = 0
// } else if(amount > 5001&& amount <= 7000){
//  discount = 5;
// }else if(amount > 7001 && amount<= 9000){
//    discount = 10;
// } else if(amount > 9000){
//    discount = 20;
// }else{
//     console.log('Wrong Input')
// }

// ider dako zara is mai na ya horha hai ka jo discount mai na oper wos ko intailsze decale krli zero value dadi wosko pr
// necha aka mai na wosko jo discount agr amount 6000 pali codintion match kra gi is mai jo 6000 * 5
// hoga pr is mai na nacha mai na bhir rak di jo sab codition check krka consule ko defined krda ga is mai na
// pr wo persesnt la hisab sa bata daga
// console.log(amount - Math.floor(discount*amount)/100);

// let unit = Number(prompt('enter your Unit')); //700
// let amount = 0

// if(unit > 400){
//      amount += (unit - 400) * 13;
//      unit = 400;
// }
// // 200
// if(unit>=200 && unit>=400){
//    amount  +=  (unit-200) * 8;
//    unit = 200
// }
// // 100
// if(unit>=100){
//    amount += (unit-100) * 6
//    unit = 100
// }

// amount += unit*4
// console.log(amount)

// const  amount = parseInt(prompt("enter your amount"));
// let dis = 0;
// // console.log(amount)
// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5001 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7001 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else {
//   console.log('Wrong Input')
// }

// console.log(amount - Math.floor(dis*amount)/100)

// let unit = Number(prompt("Enter your Unit"));

// let amount = 0;

// if (amount > 400) {
//   amount += (unit - 400) * 13;   
//   unit = 400;
// }
// if (amount <= 200 && amount <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (amount >= 100) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }

// amount += unit * 4;

// console.log(amount);



// let unit = Number(prompt('enter your Unit')); //700
// let amount = 0

// if(unit > 400){
//      amount += (unit - 400) * 13;
//      unit = 400;
// } 
// // 200
// if(unit>=200 && unit>=400){
//    amount  +=  (unit-200) * 8;
//    unit = 200
// }
// // 100
// if(unit>=100){
//    amount += (unit-100) * 6
//    unit = 100
// }

// amount += unit*4
// console.log(amount)




// let amount = Number(prompt('Enter your cash'))

// if(amount >= 5000){
//   console.log("5000 Notes " + Math.floor(amount / 5000));
//     amount = amount%5000
// }if(amount>=1000){
//    console.log("1000 Notes " + Math.floor(amount/1000));
//    amount = amount %1000
// }if(amount >= 500){
//   console.log("500 Notes " + Math.floor(amount/500))
//  amount = amount % 500
// }if(amount>=100){
//    console.log("100 Notes " +  Math.floor(amount/100));
//    amount = amount % 100
// }if(amount>=50){
//  console.log("50 Notes "  + Math.floor(amount/50));
//    amount = amount % 50
// }
// if(amount>=20){
//  console.log("20 Notes " + Math.floor(amount/20));
//    amount = amount % 20
// }if(amount>=10){
//  console.log("10 Notes " + Math.floor(amount/10));
//    amount = amount % 10
// }
// if(amount>=5){
//  console.log("5 Notes " + Math.floor(amount/5));
//    amount = amount % 5
// }

// let num = -6;

// console.log(num > 0 ?"Possitive" : num < 0 ? "Negitive" : "Zero")



// let addNums = 0.1 + 0.3;


// let fixedNum = Math.round(addNums * 100) / 100;

// switch(fixedNum){
//     case 0.5:
//         console.log('hello world')
//         break;
// case 0.4:
//     console.log('hello')
//     break;
//     default:
//         console.log('kasa ho bahi')
        
// }



// user Discount 

// let amount = Number(prompt("Enter your Amount"));
// let dis = 0

// if(amount > 0 && amount <= 5000 ){
//  dis = 0
// }else if(amount > 5001 && amount <= 7000){
//  dis = 5
// }else if(amount > 7001 && amount <= 9000){
//    dis = 10
// }else if(amount > 9000){
//     dis = 20
// }else {
//     console.log('Wrong Input')
// }

// console.log(amount - Math.floor(dis * amount)/100);

// let  unit = Number(prompt('Enter your Units'));
// let amount = 0;

// if(unit > 400){
//     amount += (unit - 400) * 13;
//     unit = 400;

// }if(unit >= 200 && unit >= 400){
//  amount += (unit-200) * 8;
//  unit = 200;
// }if(unit >= 100){
//  amount += (unit-100) * 6;
//  unit = 100;
// }
// amount += unit * 4
// console.log(amount)







// let amount = Number(prompt('Enter your Amount'));
// if(amount > 0 && amount <=5000){
//    console.log(amount)
// } else if(amount > 5001&& amount <= 7000){
//  console.log(amount - Math.floor((5*amount)/100))
// }else if(amount > 7001 && amount<= 9000){
//    console.log(amount - Math.floor((10*amount)/100))
// } else if(amount > 9000){
//    console.log(amount - Math.floor((20*amount)/100))
// }else{
//     console.log('Wrong Input')
// }


// let amount = Number(prompt('Enter your Amount'));

// if(amount  > 0 && amount <=5000){
//       console.log(amount)
// }else if(amount > 5001 && amount <= 7000){
          
// }





