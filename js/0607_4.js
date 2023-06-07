//css초기화
$('*').css({margin:0, padding:0});
$('a').css({
    'color':'black',
    'text-decoration':'none',
    'padding':'10px',
    'display':'block'
})
$('li').css('list-style','none');

//메뉴 배치하기 -flex사용
$('ul').css('display','flex');
$('ul>li').css({
    'flex':1 ,
    textAlign:'center',
    'background':'orange'
})
$('ol').css({
    'background':'cyan',
    'display':'none'
})

//hover효과 이벤트 주기
//.hover(mouseenter, mouseleave)
$('ul>li').hover(function(){
    $(this).css('background','steelblue');
    $(this).find('ol').show();
},function(){
    $(this).find('ol').hide();
    $(this).css('background','orange');
});
$('ul>li').css('position','relative');
$('ol').css('position','absolute')
.css('width','100%');

$('ol>li').hover(function(){
    $(this).css('background','steelblue');
},function(){
    $(this).css('background','cyan');
})
//css() //attr() -> html 속성 변환
$('ul>li').attr('title','마우스를 올려보세요')

//텝메뉴 만들기
$('div span').css('display','inline-block')
.css('padding','10px')
.css('cursor','pointer')
$('div>span').first().click(function(){
    $('#img img').attr('src','img/강태리6.png')
    .attr('width','500px')
    .attr('height','600px')
})
$('div>span').last().click(function(){
    $('#img img').attr('src','img/강태리5.png')
    .attr('width','500px')
    .attr('height','600px')
})
$('div>span').eq(1).click(function(){
    $('#img img').attr('src','img/강태리9.png')
    .attr('width','500px')
    .attr('height','600px')
})
$('div>span').eq(2).click(function(){
    $('#img img').attr('src','img/강태리8.png')
    .attr('width','500px')
    .attr('height','600px')
})