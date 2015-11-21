/**
 * � ������� ���� �������� className, ������� ������ ������ css ������ � ����, ����������� ���������:

 var obj = {
  className: 'open menu'
};

 �������� ������� removeClass(obj, cls), ������� ������� ����� cls, ���� �� ����:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // ��� ���������

 P.S. �������������� ����������. ������� ������ ��������� ������������ ������������ ������ � ������:

 obj = {
  className: 'my menu menu'
};

 removeClass(obj, 'menu');

 console.log( obj.className ); // 'my'

 ������ �������� ����� ������� �������������� �� ������.
 */

obj = {
    className: 'my menu menu'
};

function removeClass(obj, word) {
    var arr = obj["className"].split(" ");
    for (var i = arr.length; i >= 0; i--) {
        if (arr[i] === word) {arr.splice(i, 1)}
    }
    obj["className"] = arr.join(" ")
}

removeClass(obj, 'menu'); // 'my'
removeClass(obj, 'blabla'); // ��� ���������
console.log(obj);