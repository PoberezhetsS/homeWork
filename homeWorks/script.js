
//задача1
//З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова


function callAlert()
{
    
let child1 = prompt('введіть імя дитини1',"");
let candyСhild1= parseInt(prompt ('введіть кількість цукерок дитини 1',''))
let child2 = prompt ('введіть імя дитини2','');
let candyСhild2=parseInt( prompt ('введіть кількість цукерок дитини 2',''));
 if (candyСhild1>candyСhild2)
alert (child1);
else if (candyСhild1<candyСhild2)
alert (child2);
else 
alert('кількість однакова');
}

//задача 2
//З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

function callPrompt ()
{
    let priceShop= parseInt(prompt('вартість товару  в грн.',''));
    let  money= parseInt(prompt('кількість грошей в грн.',''));
    if (priceShop<money)
    alert('купіть лотерею за 4 грн');
    else (priceShop>money)
    alert('скасування у покупці');

   
}

// задача 3
//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.


// задача 4
//З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

 function calltask4 (){
    const maxChildAge = 6
    const maxStudentAge =17
    const maxWorcerAge =23
    const maxRetaredAge= 65
    const userAge= parseInt(prompt('введіть вік користувача'))
    let userStatus
    if(userAge<maxChildAge)
    userStatus = 'дітина'
    else if(userAge<maxStudentAge)
    userStatus= 'школяр'
    else if(userAge<maxWorcerAge)
    userStatus= 'студент'
    else if(userAge<maxRetaredAge)
    userStatus = 'робочий'
    else userStatus = 'пенсионер'

    document.write (userStatus )

     }
// задача 5
//З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
function calltask5(){
   
    
   const CATEGORY_A= 'A'
   const CATEGIRI_B= 'B'
    const CATEGIRI_C= 'C'
    const CATEGORI_STATUS= prompt('введіть вашу категорію водіння A, B або C');
let machineType
if(CATEGORY_A)
 machineType='мотоцикл'
 else if(CATEGIRI_B)
 machineType='легковий автомобіль'
 else (CATEGIRI_C) = 'C'
 machineType='вантажний автомобіль'
document.write(machineType)
}

//задача 6
//З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
 function calltask6(){
let DAY_OF_THE_WEEK = parseInt( prompt('введиться номер дня тижня'));
console.log(DAY_OF_THE_WEEK);

switch (DAY_OF_THE_WEEK){
    case 1: 
    alert ('понеділок');
    break;
    case 2: 
    alert ('вівторок');
    break;
    case 3: 
    alert ('середа');
    break;
    case  4: 
    alert ('четвер');
    break;
    case 5: 
    alert ('пятниця');
    break;
    case 6: 
    alert ('субота');
    break;
     default:
    alert( "Неділя" );

}


 }
   //задача 7
   
//З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

 function calltask7(){
    let monthNumber = parseInt (prompt('введить номер місяца'));
console.log(monthNumber);
    switch (monthNumber) {
        case 12:
            case 1:
                case 2:
                    alert('зима');
break;
case 3:
    case 4:
        case 5:
            alert('весна');
            case 6:
                case 7:
                    case 8:
                        alert( 'літо');
                        case 9:
                            case 10:
                                case 11:
                                    alert('осінь');


    
        default: 
        alert('дание не вірни')
            break;
    }
}

//Додаткові_завдання
// 1 додаткове завдання
//На екран виводиться меню: 
       // 1. Веселий
        //2. Сумний
        //3. Обурений
//Користувач вводить номер пункту меню і на екрані з’являється відповідне зображення смайла.
function calltask8(){
let mood = parseInt (prompt('введить номер пункту'));
switch(mood){
    case 1:
   window.open('https://amiel.club/uploads/posts/2022-03/1647724826_2-amiel-club-p-super-smailiki-kartinki-2.png')
        document.write(funny.foto1);
        break;

        case 2:
             window.open ('https://damion.club/uploads/posts/2022-03/1646969614_2-damion-club-p-grustnie-smaili-krasivie-foto-2.jpg')
            break;
             case 3:
               window.open('https://phonoteka.org/uploads/posts/2021-05/1620275464_16-phonoteka_org-p-zlie-smailiki-fon-16.jpg')
             break;
default:
    document.write('немає такого смайлу')
}
}
//Задача 2. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.



function calltask9(){










}





  










