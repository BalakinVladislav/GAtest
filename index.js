$('#button1').on('click', function() {
	console.log('2 обработчик события click');
	ga('send', {
  hitType: 'event',
  eventCategory: 'Button1',
  eventAction: 'Нажатие',
  eventLabel: 'Ценность1'
}});

$('#button2').on('click', function() {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Button2',
  eventAction: 'Нажатие',
  eventLabel: 'Ценность2'
}});

$('#button3').on('click', function() {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Button3',
  eventAction: 'Нажатие',
  eventLabel: 'Ценность3'
}});
