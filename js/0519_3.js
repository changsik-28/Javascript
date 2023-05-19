img.style.height = "500px";
img.style.width = "400px";


var i = 0; //전역변수
function change(){
    if(i % 2==0)
    img.src="img/강태리1.png";
    else{
        img.src="img/강태리.png";
    }
    i++;
}

//클로져, 내부함수호출

function hide(){
    img.style.visibility='hidden';
}
function show(){
    img.style.visibility='visible';
}
var changeStyle= () =>{
    var h2=document.querySelector('h2');
    h2.style.background='pink';
    h2.style.fontStyle='italic';
    h2.style.color='red';
    h2.style.fontSize='30px';
}