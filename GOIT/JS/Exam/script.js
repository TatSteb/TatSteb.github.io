var youWin = undefined, CanWalc = 1, CanShoot = 1, Score = 0, Round = 1, EnemyHeight = 362, EnemyWidth = 189;

var Enemy = document.getElementById('enemy');
var ButtonsDiv = document.getElementById('buttons');
var ButtonPlay = document.getElementById('circle1');
var ButtonStop = document.getElementById('circle2');
var MessageDiv = document.getElementById('message');

function startRound() {
    var i = 1;
    var musicIntro = new Audio('./sfx/intro.m4a');
    musicIntro.play();
    var timerId = setTimeout(function go() {
        if (CanWalc === 1) {
        Enemy.style.backgroundPosition = -(EnemyWidth*(i%3)) + 'px -' + EnemyHeight*(Round-1) + 'px ';
        Enemy.style.marginLeft = (1000 - 50*i) + 'px'; }
        if (i < 9) setTimeout(go, 300);
        i++;
    }, 300);
    Enemy.onclick = function(e) {
        if (CanShoot) {
            youWin = 0;
            musicIntro.pause();
            CanShoot = 0;
            CanWalc = 0;
            clearTimeout(timerId);
            var musicFoul = new Audio('./sfx/foul.m4a');
            musicFoul.play();
            endRound(Enemy);
        }
    }
}

function shootingMoment() {
    if (youWin === undefined) {
        Enemy.style.backgroundPosition = -(EnemyWidth * 3) + 'px -' + EnemyHeight * (Round - 1) + 'px ';
        var musicFire = new Audio('./sfx/fire.m4a');
        musicFire.play();
        Enemy.onclick = function (e) {
            if (CanShoot) {
                CanShoot = 0;
                youWin = 1;
                var musicShot = new Audio('./sfx/shot.m4a');
                musicShot.play();
                var i = 1;
                setTimeout(function go() {
                    Enemy.style.backgroundPosition = -(EnemyWidth * (3 + i)) + 'px -' + EnemyHeight * (Round - 1) + 'px ';
                    if (i < 3) setTimeout(go, 100);
                    i++;
                }, 100);
                var musicWin = new Audio('./sfx/win.m4a');
                musicWin.play();
                Score += 10;
                document.getElementById('score').textContent = 'Score: ' + Score;
            }
        };
        youWin = 0;
        setTimeout(function go() {
            setTimeout(endRound(Enemy), 300);
        }, 3000 - 400 * Round);
    }
}

function endRound() {
    CanShoot = 0;
    if (youWin === 0) {
        var musicShotFall = new Audio('./sfx/shot-fall.m4a');
        musicShotFall.play();
        Enemy.style.backgroundPosition = -(EnemyWidth * 7) + 'px -' + EnemyHeight*(Round-1) + 'px ';
    }
    if (Round < 5 || youWin === 0) {
        ButtonsDiv.style.display = 'inline-block';
        ButtonsDiv.style.marginTop = '200px';
    }
    else
    {MessageDiv.style.display = 'inline-block';
    MessageDiv.style.marginTop = '200px';
    MessageDiv.textContent = 'You are beautiful! You won! Your total score is ' + Score + ' $';}
}

ButtonPlay.onclick = function(e) {
    ButtonsDiv.style.display = 'none';
    ButtonsDiv.style.marginTop = '-200px';
    if (youWin === 1) Round += 1;
    document.getElementById('round').textContent = 'Round: ' + Round;
    youWin = undefined;
    CanWalc = 1;
    CanShoot = 1;
    startRound();
    setTimeout(function go() {
        if (youWin === undefined) {
            setTimeout(shootingMoment(), 300);
        }
    }, 3500);
};

ButtonStop.onclick = function(e) {
    ButtonsDiv.style.display = 'none';
    ButtonsDiv.style.marginTop = '-200px';
    MessageDiv.style.display = 'inline-block';
    MessageDiv.style.marginTop = '200px';
    MessageDiv.textContent = 'Sorry that you are leaving! Your total score is ' + Score + ' $';
};

startRound();
setTimeout(function go() {if (youWin === undefined) {setTimeout(shootingMoment(), 300);} }, 3500);

