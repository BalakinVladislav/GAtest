$('#button1').on('click', function() {
  ga('send', 'event', 'Button1', 'Действия', 'Иллюстрация', 'Ценность1');
});

$('#button2').on('click', function() {
  ga('send', 'event', 'Button2', 'Действия', 'Иллюстрация', 'Ценность2');
});

$('#button3').on('click', function() {
  ga('send', 'event', 'Button3', 'Действия', 'Иллюстрация', 'Ценность3');
  _gaq.push(['_trackEvent', 'Категория', 'Действия', 'Ярлык', 'Ценность'];
});
