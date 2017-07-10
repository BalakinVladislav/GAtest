$(function(){
$('#button1').on('click', function() {
	ga('send', {
  hitType: 'event',
  eventCategory: 'Button1',
  eventAction: 'Нажатие',
  eventLabel: 'Ценность1'
})
});
});
$(function(){
$('#button2').on('click', function() {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Button2',
  eventAction: 'Нажатие',
  eventLabel: 'Ценность2'
})
});
});
$(function(){
$('#button3').on('click', function() {
  ga('send', {
  hitType: 'event',
  eventCategory: 'Button3',
  eventAction: 'Нажатие',
  eventLabel: 'Ценность3'
})
});
});

$(function(){
	$('.city-list > li[data-region="Волгоградская"]').on('click', function() {
		ga('send', {
  hitType: 'event',
  eventCategory: 'Выбор города',
  eventAction: 'Выбор города из списка предложенных',
  eventLabel: 'Волгоград'
        })
	});
});