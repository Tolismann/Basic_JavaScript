'use strict'

//1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; console.log(c);          // 2 - префексная форма оператора инкрементрирования, сразу увеличивает значение переменной "a" и после возвращаяет обновленное значение.
d = b++; console.log(d);         // 1 - постфиксная форма оператора инкрементрирования, сначала происходит возвращение старого значения переменной "b" и уже потом происходит увеличение значения.
c = (2 + ++a); console.log(c);   // 5 - внутри выражения оператор сразу увеличивает значение переменной "a"(2 + 1 = 3) и после возвращаяет обновленное значение 2 + 3 = 5.
d = (2 + b++); console.log(d);   // 4 - внутри выражения сначала происходит возвращение старого значения переменной "b"=2 и потом происходит увеличение значения 2 + 2 = 4.
console.log(a);                  // 3 - оператор увеличил значение переменной "a" на единицу 3 раза
console.log(b);                  // 3 - тут так же, оператор увеличил значение переменной "b" на единицу 3 раза



// 2. Чему будет равен x в примере ниже ?

var a = 2;
var x = 1 + (a *= 2);
console.log(x)          // x = 5. Внутри выражения в скобках, значение "а" равное 2-м сначала через оператор присваивания с умножением "*=" умножает на 2 и после прибавляет 1

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:

// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом
var a = 8;
var b = 7;
    if (a && b >= 0){
        console.log(a - b);
    }   else if (a && b < 0) {
        console.log(a * b);
    }   else if (a > 0 && b < 0 || a < 0 && b > 0) {
        console.log(a + b);
    }

 //4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = 5;

switch (a) {
    case 0:
        console.log ('0')
    case 1:
        console.log('1')
    case 2:
        console.log('2')
    case 3:
        console.log('3')
    case 4:
        console.log('4')
    case 5:
        console.log('5')
    case 6:
        console.log('6')
    case 7:
        console.log('7')
    case 8:
        console.log('8')
    case 9:
        console.log('9')
    case 10:
        console.log('10')
    case 11:
        console.log('11')
    case 12:
        console.log('12')
    case 13:
        console.log('13')
    case 14:
        console.log('14')
    case 15:
        console.log('15')
        break;
}

// 5.	Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function addition (a, b) {
    return a + b;
}
console.log(addition(9, 6))

function subtraction(a, b) {
    return a - b;
}
console.log(subtraction(9, 6))

function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(9, 6))

function division(a, b) {
    return a / b;
}
console.log(division(9, 6))

// 6.	Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, 
// operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            return 'неизветсная операция'
    }
}
console.log(mathOperation(9, 6, '+'))
console.log(mathOperation(9, 6, '-'))
console.log(mathOperation(9, 6, '*'))
console.log(mathOperation(9, 6, '/'))