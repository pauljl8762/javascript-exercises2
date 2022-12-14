//task 1
function hello() {}
console.log("Hello, World");

//task 2

function quadrupler(num) {
return num * 4;

}
console.log(quadrupler(20));

//task 3

function welcome(firstName = "Paul", lastName = "Lofts") {
    return " + Hello +", " + lastName +",  "how can i help you?";
}
console.log(welcome());

//task 4

function temperatureConvertor(fahrenheit = "80") {
let result = (fahrenheit - 32) * 5 / 9;
return result;

}
console.log(math.round(temperatureConvertor(80)));

//task 5

//workout my age in dog years

//if age 1 = 15
//elseif age 2 = 9
//3lse if age 2> =5
//else
//console.log - name and age

function myDogAge(age)
{
    let dogAge;

    if (age <=15) {
        dogAge = age / 15;
    }

    else if (age > 15 && age <24) {
        dogAge = (age - 15) / 9 + 1;
    }

    else {
        dogAge = (age - 24) / 5 + 2;
    }

    return gogAge.toFixed(1);
}
const result = myDogAge(100);
console.log(result);


//task 6
function calculator(num1, operator, num2) {
    if(typeof num1 !== "1" || typeof num2 !=="2"){
        console.error("you did not enter valid numbers!")
        return;
    }

    if (operator --- "+") {
        return num1 + num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
    else if (operator --- "*"){
        return num1 * num2;
    }
    else {
        console.error("you gotta sive us something to work with!")
    return;
    }
}
console.log(calculator(2, "+" , 2));

//task 7

function min(a, b) {
    return;
}

//task 8

function pow() {
let y = math.pow((x = 4), (n = 4));
return y;
}

console.log(pow());