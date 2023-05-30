// div.addEventListener('click',function(){
//     console.log('div Click');
// })
// span.addEventListener('click',function(){
//     console.log('span Click');
// })
// btn.addEventListener('click',function(){
//     console.log('btn Click');
// })

//이벤트 위임 구현
// div.addEventListener('click',function(e){
//     var id=e.target.id;
//     console.log(e.currentTarget)
//     console.log(e.target)
//     if(id=='div'){
//         console.log('div Click');
//     }else if(id=='span'){
//         console.log('span Click');
//     }else if(id=='btn'){
//         console.log('btn Click');
//     }

//     // var tagName=e.target.tagName;
//     // if(tagName=='div'){
//     //     console.log('div Click');
//     // }else if(tagName=='span'){
//     //     console.log('span Click');
//     // }else if(tagName=='btn'){
//     //     console.log('btn Click');
//     // } 위에와 같은 내용
// })

document.addEventListener('click',function(e){
    console.log(e.srcElement)
    var target=e.target || e.srcElement;

    if(e.target.tagName=='DIV'){
        console.log('div Click');
    }else if(e.target.tagName=='SPAN'){
        console.log('span Click');
    }else if(e.target.tagName=='BUTTON'){
        console.log('button Click');
    }
})

//키보드관련 이벤트
//event.keyCode
//String.fromCharCode()
window.onkeydown=function(e){
    console.log(e.keyCode);//ASCII
    console.log(String.fromCharCode(e.keyCode));
    if(e.keyCode==65){
        document.querySelector('body').style.background='red';
    }
    if(e.keyCode==66){
        document.querySelector('body').style.background='blue';
    }
    if(e.keyCode==67){
        document.querySelector('body').style.background='lime';
    }
    if(e.keyCode==68){
        document.querySelector('body').style.background='pink';
    }
}

// window.onload=function(){
//     var count=0;
//     var image=document.getElementById('image');
//     var frames=[
//         'img/강태리10.png','img/강태리1.png',
//         'img/강태리2.png','img/강태리3.png',
//         'img/강태리4.png','img/강태리5.png',
//         'img/강태리6.png','img/강태리7.png',
//         'img/강태리8.png','img/강태리9.png'
//     ]
//     setInterval(function(){
//         image.src=frames[count%frames.length]
//         count=count+1;
//     },1000);
// }

image.src='./img/강태리10.png'
var count=0;
setInterval(function(){
    count=(count % 10)+1;
    image.src='./img/강태리'+count+'.png';
},1000)

//css파일에서 이미지 폴더는 ../상위폴더로 이동하지만
//js파일에서 이미지폴더는 html 에서./ 현재폴더로 이동된다.

var outer=document.querySelector('.outer');
var inner=document.querySelector('.inner');

outer.onmouseover=function(){
    document.body.append('<h1>mouseover</h1>');
}
outer.onmouseout=function(){
    document.body.append('<h1>mouseout</h1>');
}
outer.onmouseenter=function(){
    document.body.append('<h1>mouseenter</h1>');
}
outer.onmouseleave=function(){
    document.body.append('<h1>mouseleave</h1>');
}
//over 는 이벤트 버블링이 적용
//enter 는 안에 있는 지 여부만 따짐

//주민번호입력창만들기
//이벤트를 연결합니다.
window.onload=function(){
    //문서객체를 선택한다.
    var input_1=document.querySelectorAll('input')[0];
    var input_2=document.querySelectorAll('input')[1];
    //input_1
    input_1.onkeydown = function(){
        //글자 개수가 여섯 개 이상일경우
        if(6<=input_1.value.length){
            //input_2문서 객체로 초점을 이동합니다.
            input_2.focus();
        }
    }
    //input_2
    input_2.onkeydown=function(event){
        //이벤트객체를 추출합니다.
        var event=event || window.event;
        //사용자의 입력이 '백스페이스' 이고 입력된 글자가 없는경우
        if(event.keyCode == 8 && input_2.value.length ==0){
            input_1.focus()
        }
    }
}
//마우스 이벤트 객체 속성
window.onload=function(){
    var form1=document.f1;
    var form2=document.f2;
    var eventObj;
    document.onmousemove=function(e){
        eventObj=e?e:window.event;
        var cx=eventObj.clientX;
        var cy=eventObj.clientY;
        form1.client_x.value=cx;
        form1.client_y.value=cy;

        var px=eventObj.pageX;
        var py=eventObj.pageY;
        form1.pg_x.value=px;
        form1.pg_y.value=py;
    }
}