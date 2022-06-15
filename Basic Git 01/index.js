var number = 5;  // Global Variable

function printNum1() {
    return number;
}

function printNum2(number) {
    number = 10;  // Local Variable
    return number;
}