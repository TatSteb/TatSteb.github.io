/**
 �������� � ����������� Article:
 ������� ������ ���������� ��������� ��������.
 ����������� ���� ���������� ���������� �������.
 ����������� ��� ����� ����������� ��������.
 ����� ����� Article.showStats() ������� �� � ������.
 �������������:
 function Article() {
  this.created = new Date();
  // ... ��� ��� ...
}
 new Article();
 new Article();
 Article.showStats(); // �����: 2, ���������: (����)
 new Article();
 Article.showStats(); // �����: 3, ���������: (����)
 */
var count = 0, lastDate;
function Article() {
    this.created = new Date();
    count++;
    lastDate = this.created;
}
Article.showStats = function () {
    console.log( "�����: " + count + ", ���������: " + lastDate );
};

new Article();
new Article();
Article.showStats(); // �����: 2, ���������: (����)
new Article();
Article.showStats(); // �����: 3, ���������: (����)