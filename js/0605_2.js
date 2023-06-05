//jQuery each()
//jQuery.each(array,callback)
//jQuery.each(object,callback)
//.each(function(i,el){}))

$('#menu>li').each(function(i,el){
    $(this).text("리스트" + i);
    $(this).css('border','2px solid');
    //this는 #menu>li 를 뜻한다.
});

//innerHTML->html()
//textContent -> text()
//forEach -> each()
//length() -> size()

var LI=$('ul>li');//제이쿼리 객체
var color=['red','blue','lime','snow','pink'];
for(var i=0;i<LI.size(); i++){
    // LI.eq(i).css('background',color[i]);
}
LI.each(function(i,el){
    $(this).css('color',color[i])
    $(this).css('border','3px solid '+color[i])
})//3px solid red 식으로 되야되서 
//여기서도 '3px solid ' 띄어쓰기를 해야된다.

var 학생=[
    {name:'이순신',age:20},
    {name:'강감찬',age:30},
    {name:'원빈',age:40},
    {name:'장희빈',age:50}
]
$.each(학생,function(index,item){
    var out='';
    out += `<p>${index} - ${item.name} : ${item.age} </p>`;
    $('body').append(out);
})
$('p').each(function(index,item){
    $(this).addClass('color'+index);
})
//classList.add() -> addClass()
//classList.remove() -> removeClass()

//index() 
//handler, callback
$('dl>dt').click(function(e){
    e.stopPropagation();//이벤트 전달제거
    //형제들간의 순번(절대번호)
    var index1=$(this).index();//클릭한 객체의 인덱스값
    console.log(index1);
    var index2=$('dl>dt').index(this);
    //dt 에서 클릭한 순번
    console.log(index2);
})

//객체 확장 , $.extend()
var hero={};
hero.name='아이언맨',
hero.gender='남성',
hero.skill='super suit'

console.log(hero);
$.each(hero,function(i,item){
    out='';
    out+=`<p>${i} : ${item} </p>`
    $('body').append(out);
})
$('body').append('<h1>-------------------</h1>');
//객체 확장
$.extend(hero,{
    skill2 : '나노슈트',
    age :'40'
})
$.each(hero,function(i,item){
    out='';
    out+=`<p>${i} : ${item} </p>`
    $('body').append(out);
})

//$(body).append() 
//appendTo(body)
// $('h1') -> h1태그를 선택
//createElement, createTextNode
//<h1> welcome </h1>
//appendChild
//동적으로 태그를 추가
$('<h1> welcome </h1>').appendTo('body');