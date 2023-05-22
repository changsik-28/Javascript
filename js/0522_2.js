//setAttribute('속성','값') 속성을 추가
//getAttribute('속성')  속성을 가져온거

var a=document.querySelectorAll('a');

console.log(a[0].getAttribute('value'));

for(var i=0;i<a.length;i++){
    a[i].style.backgroundColor=a[i].getAttribute('value');
}

for(var i=0;i<a.length;i++){
    a[i].setAttribute('index',i);
} // 태그에 속성을 추가

//data-     사용자 정의 속성
//a태그를 클릭하면 data-color 속성을 읽어들여서 글자색을 변경
for(var i=0;i<a.length;i++){
    a[i].addEventListener('click',function(){
        // this.style.color=this.getAttribute('data-color');
        this.style.color=this.dataset.color;
        this.innerHTML=this.dataset.coffeeName;
    });
}

//innerHTML, textContent
//h1.innerHTML="<span>hi</span>"
//h1.textContent="<span>hi</span>"

//버튼을 하나 만들어서 클릭했을때
//리스트 목록이 추가되는 예제

var btn=document.querySelector('button');
var str='';
str+="<ul>";
str+="<li>Javascript</li>";
str+="<li>jQuery</li>";
str+="<li>Ajax</li>";
str+="</ul>";

var box=document.getElementById('box');
btn.onclick=addList;


function addList(){
    box.innerHTML=str;
}

//리스트제거

function delList(){
    box.innerHTML='';
}
var btn=document.querySelectorAll('button');
btn[1].onclick=delList;

//토글
var i=0;
function toggleList(){
    i%2==0 ? addList() :delList();
    //삼항연산자
    i++;
}
btn[2].onclick=toggleList;