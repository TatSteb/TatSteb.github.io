/**
 You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.
 Rules/Note:
 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-?,100]
 */

function pattern(n){
    var output = "", str = "", gap = "";
    if (n > 0) {
        for (var i = 1; i <= n; i++) {
            str = str + (i % 10);
            gap = gap + " ";
        }
        var line = gap + str;
        for (var i = 1; i <= n; i++) {
            output = output + line.substring( i ) + line.substring( 0, i - 1 ) + "\n";
        }
        output = output.substring(0, output.length - 1)
    }
    return output;
}


console.log(pattern(5));



