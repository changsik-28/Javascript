//window.onload=function(){}
//load 이벤트 이름, 이벤트 타입
//onload 이벤트 속성
//할당된함수 : 이벤트리스너, 이벤트 핸들러
//window.onload=function(){} 자체를 이벤트 연결한다라고 한다.

//이벤트관련속성
//click, mouseover,mouseenter, focus 등등

//이벤트모델
//DOM Level 0
//인라인이벤트모델 , 기본이벤트모델(고전이벤트) 이 DOM Level 0 
//한 객체에 두번이상 적용할 수 없다.

//DOM Level 2
//표준이벤트모델, 익스플로러이벤트모델
//addEventListener(type,listener,false)
//attachEvent

//익스플로러면 attachEvent 를 사용하고
//그 외에는 addEventListener 를 사용해라
//크로스브라우징위한 코드 구현하자

//이벤트 제거
header.onclick=function(e){
    console.log(this);
    console.log(e); //e->event, window.event(고전)
    var event=e||window.event;

    header.onclick=null; // 이벤트 제거
    for(var key in e){
        box.innerHTML += `<p>${key} : ${e[key]} </p>`
    }
    console.log(e.target) // 최종목적지 자식
    console.log(e.currentTarget) // 현재타겟 부모
}

//이벤트강제실행

a.onclick=function(){
    ca.innerHTML = Number(ca.innerHTML)+1
}
b.onclick=function(){
    cb.innerHTML= parseInt(cb.innerHTML)+1
    a.onclick();// b를 눌렀을때 a를 강제실행
}

//자동실행
//stop 이라는변수값을 줘야지 다시실행했다가 다시 정지할때 먹는다ㅏ.
var stop=setInterval(b.onclick,1000);
//자동실행 중지
c.onclick=function(){
    clearInterval(stop);
}
d.onclick=function(){
    stop=setInterval(b.onclick,1000);
}

// 기본이벤트제거
// 이벤트전달제거
// preventDefault()
// stopPropagation()

// 기본이벤트-> a태그클릭
//form -> submit
// naver.onclick=function(e){
//     this.style.background='pink';
//     // e.preventDefault();
//     return false;
// }
// href="javascript:void(0)"
naver.addEventListener('click',function(){
    this.style.background='pink';
})

function daum(){
    daum2.style.background='red'
    return false;
}
