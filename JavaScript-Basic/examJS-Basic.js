/*7. Световен рекорд по плуване
Иван решава да подобри Световния рекорд по плуване на дълги разстояния. Функцията получава: рекордът
в секунди, който Иван трябва да подобри, разстоянието в метри, което трябва да преплува и времето в
секунди, за което плува разстояние от 1 м. Да се напише функция, която изчислява дали се е справил със
задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди.
Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът
трябва да се закръгли надолу до най-близкото цяло число.
Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо
Световния рекорд.
Вход
Функцията получава 3 аргумента:
1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
Изход
Отпечатването на конзолата зависи от резултата:
 Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
o &quot; Yes, he succeeded! The new world record is {времето на Иван} seconds.&quot;
 Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
o &quot;No, he failed! He was {недостигащите секунди} seconds slower.&quot;

Резултатът трябва да се форматира до втория знак след десетичната запетая. */

function swiming(inputSeconds, inputMeters, inputSecPerMet) {
    let seconds = +inputSeconds;
    let meters = +inputMeters;
    let secPerMet = +inputSecPerMet;
    let waterStrength = 12.5;
    let result = (meters * secPerMet) + ((meters / 15) * waterStrength);
    let fail = result - seconds;

    if (result < 30000) {
        console.log("Yes, he succeeded! The new world record is " + result.toFixed(2) + " seconds.")
    } else {
        console.log("No, he failed! He was " + fail.toFixed(2) + " seconds slower.")
    }
}
swiming("10464", "1500", "20"); //exepct: No, he failed! He was 20786.00 secondsslower.

/*8. Навреме за изпит
Студент трябва да отиде на изпит в определен час (например в 9:30 часа). Той идва в изпитната зала в даден
час на пристигане (например 9:40). Счита се, че студентът е дошъл навреме, ако е пристигнал в часа на
изпита или до половин час преди това. Ако е пристигнал по-рано повече от 30 минути, той е подранил. Ако е
дошъл след часа на изпита, той е закъснял. Напишете функция, която получава време на изпит и време на
пристигане и отпечатва дали студентът е дошъл навреме, дали е подранил или е закъснял и с колко часа или
минути е подранил или закъснял.
Вход
Приемат се 4 аргумента:
 Първият съдържа час на изпита – цяло число от 0 до 23.
 Вторият съдържа минута на изпита – цяло число от 0 до 59.
 Третият съдържа час на пристигане – цяло число от 0 до 23.
 Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.
Изход
На първият ред отпечатайте:
 &quot;Late&quot;, ако студентът пристига по-късно от часа на изпита.
 &quot;On time&quot;, ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
 &quot;Early&quot;, ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
 &quot;mm minutes before the start&quot; за идване по-рано с по-малко от 1.
 &quot;hh:mm hours before the start&quot; за подраняване с 1 час или повече. Минутите винаги печатайте с 2
цифри, например &quot;1:05&quot;.
 &quot;mm minutes after the start&quot; за закъснение под час.
 &quot;hh:mm hours after the start&quot; за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри,
например &quot;1:03&quot;.
*/
function onTime(inputExamStartHour, inputExamStartMinute, inputHourArrival, inputMinuteArrival) {

    let examStartHour = +inputExamStartHour;
    let examStartMinute = +inputExamStartMinute;
    let hourArrival = +inputHourArrival;
    let minuteArrival = +inputMinuteArrival;

    let hour = "60";
    let resultStartTime = examStartHour + ":" + examStartMinute;
    let resultArriveTime = hourArrival + ":" + minuteArrival;
    let resultMinutes = ((hourArrival - examStartHour) * hour) + Math.abs(minuteArrival - examStartMinute);
    let resultHours = (hourArrival - examStartHour);



    if (examStartHour < hourArrival || examStartHour == hourArrival && examStartMinute < minuteArrival) {
        console.log("Late");
        if (resultMinutes < hour) {
            console.log(resultMinutes + " minutes after the start");
        } else {
            console.log(resultHours + ":" + resultMinutes + "hours after the start");
        }
    } else if (resultStartTime == resultArriveTime) {
        console.log("On time");
    } else if (examStartHour >= hourArrival && examStartMinute > minuteArrival) {
        console.log("Early");
        if (Math.abs(resultMinutes) < hour) {
            console.log(Math.abs(resultMinutes) + " minutes before the start");
        }
        else {
            console.log(Math.abs(resultHours) + ":" + (resultMinutes - (resultHours * hour)) + " hours before the start");
        }
    }
}
onTime("9", "30", "9", "50"); //expected Late20 minutes after the start

/* 9. Най-малко число*
Напишете програма, която получава n-на брой числа (n &gt; 0) и намира най-малкото измежду тях. Първо се
получава число n, а след това самите n числа. */

function minNumber(inputNumber) {
    let numberCount = Number(inputNumber[0]);
    let temp = Infinity;
    let currentNumber;

    for (let i = 0; i < numberCount; i++) {
        currentNumber = Number(inputNumber[i + 1]);

        if (currentNumber > temp) {
            temp = currentNumber;
        }
    }
    console.log(currentNumber);
}
minNumber(["2", "100", "99"]); // expect 99

/*6. Торта
Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. Той обаче не знае колко
парчета могат да си вземат гостите от нея. Вашата задача е да напишете функция, която изчислява броя на
парчетата, които гостите са взели, преди тя да свърши. Ще получите размерите на тортата (широчина и
дължина – цели числа в интервала [1...1000]) и след това на всеки ред, до получаване на командата &quot;STOP&quot;
или докато не свърши тортата, броят на парчетата, които гостите вземат от нея.
Бележка: Едно парче торта е с размер 1х1 см.
Да се отпечата на конзолата един от следните редове:
 &quot;{брой парчета} pieces are left.&quot; - ако стигнете до STOP и не са свършили парчетата торта
 &quot;No more cake left! You need {брой недостигащи парчета} pieces more.&quot; */

function cake(input) {
    let pieceX = Number(input.shift());
    let pieceY = Number(input.shift());
    let piecesTaken = 0;
    let fullCake = pieceX * pieceY;
    let takePiece = input.shift();

    while (takePiece !== 'STOP') {
        piecesTaken += Number(takePiece);

        if (piecesTaken > fullCake) {
            break;
        }

        takePiece = input.shift();
    }

    if (piecesTaken > fullCake) {
        console.log("No more cake left! You need " + (piecesTaken - fullCake) + " pieces more.");
    } else {
        console.log((fullCake - piecesTaken) + " pieces are left.")
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"]); // No more cake left! You need 1 pieces more.


