//$(selecetor).on(eventName,Listener);
//$(selecetor).on({object});

$('h3').on('click',function(){
    // $(this).html('환영합니다.');
    $(this).html(function(i,html){
        i++;
        return html+i+'별';
        
    })
})

$('h3').on({
    mouseenter:function(){
        $(this).addClass('bg');
    },
    mouseleave:function(){
        $(this).removeClass('bg');
    }
})

$('img').css('width',400).css('height',500);

var i=0;
$('img').on({
    mouseenter:function(){
        $(this).attr('src','img/강태리8.png');
    },
    mouseleave:function(){
        $(this).attr('src','img/강태리9.png');
    },
    click:function(){
        i++;
        (i%2==0) ? $(this).attr('src','img/강태리7.png')
                    :$(this).attr('src','img/강태리6.png')
                    //삼항연산자
    },
    dblclick:function(){$(this).off()}
})

//이벤트 제거 - off();
//name : value 쌍 ,

//매개변수 context
//두개를 입력할 수 있다

//click(function(){},mouseover())

$('li').click(function(){
    $(this).find('span').css('background','red');
    $('span', this).html('Monday');
})

//event객체
$(document).mousemove(function(e){
    var x=e.pageX;
    var y=e.pageY;
    $('#info').html(`x : ${x} y : ${y}`)
})

//event 강제실행
//$().click(), $().trigger('click')

// $('li').click();//li를 강제 클릭

//2초마다 강제 이미지 클릭
setInterval(()=>{
    $('img').click();
},2000)

//h3을 2초마다 강제 enter
setInterval(()=>{
    $('h3').trigger('mouseenter');
},2000)
//h3을 4초마다 강제 leave
setInterval(()=>{
    $('h3').trigger('mouseleave');
},4000)

//기본이벤트 제거와 이벤트전달제거
$('section,div,p').css({
    border:'1px solid',
    margin:'10px',
    padding:'10px'
})
// $('section').on('click',function(){
//     $(this).css('background',"pink")
// })
// $('div').on('click',function(){
//     $(this).css('background',"red")
//     e.preventDefault();
//     e.stopPropagation();
// })
// $('p').on('click',function(e){
//     $(this).css('background',"yellow")
//     // e.preventDefault();
//     // e.stopPropagation();
//     return false;
// })

//동적인요소도 이벤트를 연결할때 - 이벤트위임
$('section').on('click','p',function(){
    $('p').css('background','steelblue')
})

//textarea 글자를 입력했을떄
//입력한 글자를 표시하고
//남은글자수를 구하고, 넘치면
//입력을 막고, 빨간색으로 표시한다.

//keydown-> keypress-> keyup
$('textarea').keyup(function(){
    var 입력글자=$(this).val().length;
    $('h5').html(입력글자).css('color','black');
    if(입력글자<30){
        $(this).css('color','blue')
    }else if(입력글자>30){
        // $(this).attr('disabled',true)
        $('h5').css('color','red').html('<h3>글자수가 초과되었습니다</h3>')
        $(this).val('');
    }
})

//윈도우 이벤트
//ready, load, unload, resize, scroll, error
//scroll

//무한 스크롤 구현
//width(), height()
//쇼핑몰 스크롤을 내리면밑에 계속해서 상품이 추가되는 형태
$(window).scroll(function(){
    var scrollTop=$(window).scrollTop();
    var windowHeight= $(window).height();
    var 문서높이=$(document).height();
    var 스크롤높이=scrollTop+windowHeight;

    //스크롤높이와 문서높이가 같을때 객체를 추가하거나 
    //데이터를 가져와서 추가한다.
    if(스크롤높이>=문서높이-100){
        
        for(var i=1;i<11;i++){
            $("<h1>무한스크롤 : "+i+"</h1>").appendTo('body');    
            $("<img src='img/강태리"+i+".png'>").css('width',500).css('height',600).appendTo('body');    
        }
    }

})