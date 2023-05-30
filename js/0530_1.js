//한글입력시에 전송한다.
// var form2=document.getElementById('form2')
// form2.onsubmit=function(e){
//     var val=name2.value;
//     if(val==''){
//         return false;
//     }
//     else if(val.replace(/[가-힝]/g,"").length==0){
//         // 한글이 있으면 공백으로 대체하고
//         // 그럼 길이가 0이된다.
//         // 결국 한글이 있으면 길이가 0이다.
//         return true; // 다음단계로실행
//     }else{
//         // return false; 를 주거나
//         alert('한글이름을 입력하세요');
//         e.preventDefault();
//     }
// }
// form2.addEventListener('submit',function(e){
//     var val=name2.value;
//     if(val.replace(/[가-힝]/g,"").length==0){
//         // 한글이 있으면 공백으로 대체하고
//         // 그럼 길이가 0이된다.
//         // 결국 한글이 있으면 길이가 0이다.
//         return true; // 다음단계로실행
//     }else{
//         // return false; 를 주거나
//         alert('한글이름을 입력하세요');
//         e.preventDefault();
//     }
// })

//이벤트 버블링 : 자식에서 부모
//이벤트 켑쳐링 : 부모에서 자식
//eventPhase


// btn.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },false)
// field.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },false)
// html.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },true)
// // 1-> 캡쳐링 2-> target 3-> 버블링
// body.addEventListener('click',function(e){
//     console.log(e.eventPhase)
// },true)
//알기쉽게 다시 코딩

function handler(e){
    var phase=['캡처링','타겟','버블링'];
    console.log(e.target.nodeName,this.nodeName,phase[e.eventPhase-1])
}

//캡처링을 볼려면
// btn.addEventListener('click',handler,true);
// field.addEventListener('click',handler,true);
// body.addEventListener('click',handler,true);
// html.addEventListener('click',handler,true);

//e.target.nodeName -> e.target 최종 자식 엘리먼트
//this.nodeName -> e.currentTarget 이벤트가 호출된 엘리먼트(부모)

//버블링을 볼려면
btn.addEventListener('click',handler,false);
field.addEventListener('click',handler,false);
body.addEventListener('click',function(e){
    e.stopPropagation();
},false);
html.addEventListener('click',handler,false);
// 이벤트전달방지
// event.stopPropagation();
//이벤트 버블링 제거
//익스플로러 => event.cancelBubble=true

a.onclick=function(e){
    this.style.background='gold';
    e.stopPropagation();
}
p.onclick=function(e){
    this.style.background='cyan';
    e.stopImmediatePropagation();
}
div.onclick=function(){
    this.style.background='pink';
}