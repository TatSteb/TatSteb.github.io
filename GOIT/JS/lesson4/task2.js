/**  Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex. **/

function checkSpam (str) {
    var strl = ""
    for (var i = 0; i < str.length; i++) {
        strl = strl + str[i].toLowerCase()
    }
    if (strl.indexOf("spam") === -1 && strl.indexOf("sex") === -1) {
        console.log("false");
    }
    else {
        console.log("true");
    }
}

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false