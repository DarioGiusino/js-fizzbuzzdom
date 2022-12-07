/* Steps
1- get element from dom(bonus 1)
2- creare ciclo che generi numeri da 1 a 100
3a- implementare, se numero multiplo di 3, scritta "Fizz" al posto del numero
3b- implementare, se numero multiplo di 5, scritta "Buzz" al posto del numero
3c- implementare, se numero multiplo di 3 *E* 5, scritta "FizzBuzz" al posto del numero
----
*/

// // get element from dom

// 2- ciclo 1-100
for (let i = 1; i <= 100; i++){
    let number = '';
    number += i;

    if ((i % 3 === 0) && (i % 5 === 0)){
        number = 'FizzBuzz';
    } else if (i % 5 === 0){
        number = 'Buzz';
    } else if (i % 3 === 0){
        number = 'Fizz';
    }

    console.log(number);
}