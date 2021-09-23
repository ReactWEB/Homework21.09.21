/* Домашка на четверг 23-09-2021* :

1) задан массив ['a', 'b', 'c', 'd']
   без дополнительных переменных получить массив ['d', 'a', 'd', 'a']
2) задан массив ['a', 'b', 'c', 'd']
   получить массив ['d', 'c', 'b', 'a']
3) задан массив ['a', 'b', 'a', 'b']
   без дополнительных переменных и дополнительных массивов изменить заданный массив так, чтобы он был ['b', 'a', 'b', 'a'] **
4) задан массив ['a', 'b', 'c', 'd']
   получить массив ['a1', 'b2', 'c3', 'd4']
5) задан массив ['a', 'b', 'c', 'd']
   получить массив ['ab', 'bc', 'cd', 'da']

* код должен работать с массивом любой длины
** делать console.log исходного массива*/


/*Exersize__1*/
/*1) задан массив ['a', 'b', 'c', 'd']
   без дополнительных переменных получить массив ['d', 'a', 'd', 'a']*/

const arrStr1 = ['a', 'b', 'c', 'd'];

const arrStr2 = [];

for(let i = 0; i < arrStr1.length; i++){    
   if(i % 2 == 0){
      arrStr2[i] = arrStr1[arrStr1.length - 1];
   }else {
      arrStr2[i] = arrStr1[0];
   }
}
console.log(arrStr2);

/*Exersize__2*/
/*2) задан массив ['a', 'b', 'c', 'd']
   получить массив ['d', 'c', 'b', 'a']*/

const arrFirst = ['a', 'b', 'c', 'd']; 
const arrSecond = [];

 for(let i = arrFirst.length - 1; i >= 0; i--){      
   
      console.log(arrFirst[i]);
   
}


 /*Exersize__3*/
 /*3) задан массив ['a', 'b', 'a', 'b']
   без дополнительных переменных и дополнительных массивов изменить заданный массив так, чтобы он был ['b', 'a', 'b', 'a'] **/
   /*** делать console.log исходного массива*/

const arrOne = ['a', 'b', 'a', 'b'];
console.log(arrOne);

for(let i = 0; i < arrOne.length; i++){
   if(i % 2 == 0){
      arrOne[i] = arrOne[arrOne.length - 1];   
   }else {
      arrOne[i] = arrOne[arrOne.length - 2]; 
   }
}
console.log(arrOne);

/*Exersize__4*/
/*4) задан массив ['a', 'b', 'c', 'd']
   получить массив ['a1', 'b2', 'c3', 'd4']*/

const arrNull = ['a', 'b', 'c', 'd'];

for(let i = 0; i < arrNull.length; i++){
   if(arrNull[i]){
      arrNull[i] = `${arrNull[i]}${[i + 1]}`;
   }   
}
console.log(arrNull);

/*Exersize__5*/
/*5) задан массив ['a', 'b', 'c', 'd']
   получить массив ['ab', 'bc', 'cd', 'da']*/

const arrZen = ['a', 'b', 'c', 'd'];

for(let i = 0; i <= arrZen.length; i++){
   if(arrZen[i]){
      arrZen[i] = arrZen[i] + arrZen[i + 1];
   }   
}

console.log(arrZen);
