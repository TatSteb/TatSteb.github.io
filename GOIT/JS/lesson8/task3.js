/**
 � ��� ���� ������ User, ������� ������ ��� � ������� � �������� this.fullName:
 function User(fullName) {
  this.fullName = fullName;
}
 var vasya = new User('��������� ������');
 ��� � ������� ������ ����������� ��������.
 ��������, ����� ���� �������� �������� firstName � lastName, ������ �� ������ �� ������, �� � �� ������, ��� ���:
 var vasya = new User('��������� ������');
 // ������ firstName/lastName
 console.log( vasya.firstName ); // ���������
 console.log( vasya.lastName ); // ������
 // ������ � lastName
 vasya.lastName = '�������';
 console.log( vasya.fullName ); // ��������� �������
 �����: � ���� ������ fullName ������ �������� ���������, � firstName/lastName � ����������� ����� get/set.
 ������ ������������ ����� �� � ����.
 */

function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },
            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function() {
                return this.fullName.split(' ')[1];
            },
            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }
    });
}

var vasya = new User('��������� ������');
// ������ firstName/lastName
console.log( vasya.firstName ); // ���������
console.log( vasya.lastName ); // ������
// ������ � lastName
vasya.lastName = '�������';
console.log( vasya.fullName ); // ��������� �������