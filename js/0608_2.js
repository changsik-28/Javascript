//클레스추가
//addClass()
//removeClass()
//toggleClass()
//hasClass()
var li=$('#wrapper>li')
// li.addClass(function(i){
//     return 'color'+i;
// })
$('button').eq(0).click(function(){
    li.addClass(function(i){
        return 'color'+i;
    })
})
$('button').eq(1).click(function(){
    li.removeClass(function(i){
        return 'color'+i;
    })
})
$('button').eq(2).click(function(){
    li.toggleClass(function(i){
        return 'color'+i;
    })
})

//속성추가
//attr()
//attr(name,value)
//attr(name,function(index){ })
//attr({object})

$('img').attr('width',200);
$('img').attr('width',function(i){
    return 100*(i+1);
})
$('img').attr({
    'width':function(i){
    return 100*(i+1);
},
'height':250
})
//removeAttr()
$('input').attr('value','이름을 입력하세요');
$('input').focus(function(){
    $(this).removeAttr('value');
})

//css(name,value)
//css(name,function(index){})
//css(object)

console.log(color);
$('p').css('background',function(i){
    return color[i]
})
$('p').css({'background':function(i){
    return color[i]
},
'color':'white'
})

//문서객체 내용을 조작
//html() text()
$('h1').first().html('<span>span추가</span>')
$('h1').last().text('<span>span추가</span>')

//html(function(index,html){ })
//text(function(index,html){ })
$('li').html(function(i){
    return $(this).html()+'-'+i+'★';
})
$('#wrapper').css('border','2px solid');
$('li').text(function(i){
    return $(this).text()+'-'+i+'<br>';
})

//remove()  문서객체 제거
//empty()   문서객체 내부 비움
// $('#wrapper').remove();
$('#wrapper').empty().css('padding','10px');

//문서 객체를 조작 끝

//문서객체 생성
//createElement(tag)
//creatTextNode(tex)
//appendChild(node) 자바스크립트버전

$('<h1>welcome</h1>').appendTo('#wrapper')
$('<h1></h1>').html('안녕하세요').appendTo('#wrapper')

//(추가할 객체).appendTo(body)로 외운다 $(body).append(추가할 객체)
$('<img>').attr('src','img/강태리9.png').appendTo('#wrapper')
.css('width','200').css('height','200')
$('<img>',{
    src:'img/강태리8.png',
    width:200,
    height:200
}).appendTo('#wrapper');

//문서객체 삽입
//append = appendTo 
//prepend = prependTo
//after = insertAfter
//before = insertBefore
$('#wrapper').append('<p>append</p>')
$('<p>appendTo</p>').appendTo('#wrapper')
$('#wrapper').prepend('<p>prepend</p>')
$('<p>prependTo</p>').prependTo('#wrapper')
$('#wrapper').after('<p>after</p>')
$('<p>insertAfter</p>').insertAfter('#wrapper')
$('#wrapper').before('<p>before</p>')
$('<p>insertBefore</p>').insertBefore('#wrapper')