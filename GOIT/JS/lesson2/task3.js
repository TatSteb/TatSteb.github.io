var Login, Pass;
Login = prompt('Enter yor login, please');
if (Login === null) {
    alert ("Canceled");
}
else {
    if (Login === 'admin') {
        Pass = prompt('Enter yor password, please');
        if (Pass === null) {
            alert ("Canceled");
        }
        else {
            if (Pass === 'passw0rd') {
                alert("Welcome home!");
            } else {
                alert("Wrong password");
            }
        }
    }
    else {
        alert('Access denied!');
    }
}