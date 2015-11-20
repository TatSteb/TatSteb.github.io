/** Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
 Если длинна больше 20, то обрезает строку и добавляет в конец строки '...' **/

function trimStr (str, length) {
    if (str.length > length - 1) {
        console.log(str.substring(0,length)+"...");
    }
    else {
        console.log(str);
    }

}

trimStr ("How to earn fast money?", 20);
trimStr ("How to earn fast money?", 10);
trimStr ("How to earn fast money?", 50);