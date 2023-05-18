
// // DOM문서객체 선택하기
// // getElementByTagName()
// // getElementById()
// // var test=document.getElementsById()
// // var test=document.getElementsByTagName()
// // var test=document.getElementsByClassName()
// //중간에 s가 들어가는 것은 배열을 뜻한다.
// //진짜 주석
// var li=document.getElementsByTagName("li");

// console.log(li);
// li[0].style.backgroundColor='red';
// li[1].style.backgroundColor='orange';
// li[2].style.backgroundColor='green';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='gold';
//     li[i].style.border='2px solid black';
//     li[i].style.margin='5px';
// }

// for(var i of li){
//     i.style.padding="10px";
// }

// for(var i in li){
    
//     if(!isNaN(i)) //키값이 숫자면
//     li[i].style.borderRadius="10px";
// }

// var menu=document.getElementsByClassName('menu');
// console.log(menu);
// menu[0].style.border="3px solid red";

// //다른방식
// // var menu=document.getElementsByClassName('menu')[0];
// // console.log(menu);
// // menu.style.border="3px solid red";
// //진짜 주석
// var lia=document.querySelector('li>a');
// console.log(lia);

// lia.style.fontSize='25px';

// var lia=document.querySelectorAll('li>a');
// console.log(lia);

// for(var i=0;i<lia.length;i++){
//     lia[i].style.color='black';
//     lia[i].style.fontSize='25px';
// }

// Array.from(li).forEach((ele)=>{
//     ele.style.textAlign="center"
// });

// main_title.innerHTML="DOUCUMENT MODEL";

// html.innerHTML="<span>innerhtml</span>" //태그로 적용

// text.textContent="<span>textContent</span>" // text그냥 글자로 적용

var h1=document.getElementsByTagName('h1');
document.write(h1.length);
document.write("<hr>");
document.write(h1.item(0));
document.write("<hr>");
document.write(h1.item(0).nodeName);
document.write("<hr>");
document.write(h1.item(0).nodeValue);
document.write("<hr>");
document.write(h1.item(0).childNodes[0].nodeValue);
document.write("<hr>");
document.write(h1.item(2).childNodes[0].nodeValue);
document.write("<hr>");
// document.write(h1.item(1).childNodes[1].nodeValue);
var header=document.getElementById('header');
document.write(header.childNodes);
console.log(header.childNodes);
document.write("<hr>");
document.write(header.childNodes[0].nodeValue);
document.write("<hr>");
document.write(header.childNodes[1]);
document.write("<hr>");
document.write(header.childNodes[1].nodeName);
document.write("<hr>");

var span=document.querySelector('h2>span');
document.write(span.parentNode.nodeName);
document.write("<hr>");
document.write(span.parentElement.nodeName);
document.write("<hr>");
document.write(header.firstChild.nodeName);
document.write("<hr>");
document.write(header.firstChild.nodeValue);
document.write("<hr>");

var html=document.getElementById('html');
document.write(html.nextSibling.nodeName); //text
document.write("<hr>");
document.write(html.nextSibling.nextSibling.nodeName);
document.write("<hr>");
document.write(html.children);
document.write("<hr>");
console.log(html.children);
console.log(header.children);
document.write(header.children); //span
document.write("<hr>");
document.write(header.nodeType);//1
document.write("<hr>");
document.write(header.className); //header

// var ul =documennt.querySelector('ul');
// console.log(ul.children[1]);

header.classList.add("welcome");
header.classList.remove("welcome");
console.log(header.id);
console.log(header.title);
console.log(header.childElementCount);