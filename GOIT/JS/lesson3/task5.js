function makeChessBoard (size) {
    var line = "";
    for (var i = 0; i < size; i++){
        for (var j = 0; j < size/2; j++){
            line = line + "#";
            if(j !== size/2 - 1){line = line + " ";}
        }
        if(i % 2 !== 0) {line = line + "\n";} else {line = line + "\n"  + " ";}
     }
    console.log(line);
}

makeChessBoard(8);
