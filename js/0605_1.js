var LI=document.querySelectorAll('ul>li')
var LEFT=document.querySelector('p button:first-child')
var RIGHT=document.querySelector('p button:last-child')

var prev=0;
var current=0;
var next=0;

LEFT.onclick=function(){
    Linit();
    var prev=LI[current];
    prev.style.left='-100%';
    current++;
    if(current % 5==0){
        current=0;Linit();
    } 

    var next=LI[current];
    next.style.left='0';
}
//Right
RIGHT.onclick=function(){
    Rinit();
    var prev=LI[current];
    prev.style.left='100%';
    current++;
    if(current % 5==0){
        current=0;Rinit();
    } 

    var next=LI[current];
    next.style.left='0';
}

//이미지를 왼쪽으로 모두 배치하기
function Linit(){
    for(var i=0; i<LI.length;i++){
        LI[i].style.left='-100%'
    }
}
//이미지를 오른쪽으로 모두 배치하기
function Rinit(){
    for(var i=0; i<LI.length;i++){
        LI[i].style.left='100%'
    }
}