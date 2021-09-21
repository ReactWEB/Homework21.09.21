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

const arrStr2 = [arrStr1[3], arrStr1[0], arrStr1[3], arrStr1[0]];

console.log(arrStr2);

/*Exersize__2*/
/*2) задан массив ['a', 'b', 'c', 'd']
   получить массив ['d', 'c', 'b', 'a']*/

const arrFirst = ['a', 'b', 'c', 'd'];

const arrSecond = [];

 let limit = arrFirst.length;

 for(let i = 0; i < limit; i++){
   arrSecond.length = limit;
   arrSecond[0] = arrFirst[3],
   arrSecond[1] = arrFirst[2],
   arrSecond[2] = arrFirst[1],
   arrSecond[3] = arrFirst[0];
 }
 console.log(arrSecond);

 /*Exersize__3*/
 /*3) задан массив ['a', 'b', 'a', 'b']
   без дополнительных переменных и дополнительных массивов изменить заданный массив так, чтобы он был ['b', 'a', 'b', 'a'] **/
   /*** делать console.log исходного массива*/

const arrOne = ['a', 'b', 'a', 'b'];
console.log(arrOne);

for(let i = 0; i < arrOne.length; i++){
   if(arrOne[i] == 'a'){
      arrOne[i] = 'b';
   }else if(arrOne[i] == 'b'){
      arrOne[i] = 'a';
   }   
}
console.log(arrOne);

/*Exersize__4*/
/*4) задан массив ['a', 'b', 'c', 'd']
   получить массив ['a1', 'b2', 'c3', 'd4']*/

const arrNull = ['a', 'b', 'c', 'd'];

for(let i = 0; i < arrNull.length; i++){
   if(arrNull[i]){
      arrNull[i] = arrNull[i] + [i + 1];
   }   
}
console.log(arrNull);

/*Exersize__5*/
/*5) задан массив ['a', 'b', 'c', 'd']
   получить массив ['ab', 'bc', 'cd', 'da']*/

const arrZen = ['a', 'b', 'c', 'd'];

for(let i = 0; i < arrZen.length; i++){
   if(arrZen[i]){
      arrZen[i] = arrZen[i] + arrZen[i + 1];
   }   
}
console.log(arrZen);
