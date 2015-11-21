/**
 * �������� ������� unique(arr), ������� ���������� ������, ���������� ������ ���������� �������� arr (arr � ������ �����).
 var strings = ['������', '������', '����', '����', '����', '����', '������', '������', '8-()' ];
 console.log( unique(strings) ); // ������, ����, 8-()
 */
var strings = ['������', '������', '����', '����', '����', '����', '������', '������', '8-()' ];

function unique(arr) {
    var result = [];
    NextItem:
        for (var i = 0; i < arr.length; i++) {
            var string = arr[i];
            for (var j = 0; j < arr.length; j++) {
                if (result[j] === string) {continue NextItem;}
            }
            result.push(string);
        }
    return result;
}

console.log( unique(strings) ); // ������, ����, 8-()
