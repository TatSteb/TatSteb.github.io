/**  Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex. **/

function checkSpam (str) {
    str = str.toLowerCase()
    if (str.indexOf("spam") === -1 && str.indexOf("sex") === -1) {
        console.log("false");
    }
    else {
        console.log("true");
    }
}

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false