//함수(function)
//함수 작성, 함수선언
//매개변수가 있고, 리턴이없다.
function sayHello(name){
    console.log(`Hello,${name}`);
}
//함수 호출
var tel=sayHello("welcome");
console.log(tel); // undefined
//함수는 리턴문이 없으면 undefined를 반환한다.

//매개변수가 있고, 리턴이있다.
function add(num1,num2){
    return num1+num2;
}
var result=add(10,20);
console.log(result);

//함수는 한작업(일련의 작업)을 정의해놓은 코드의 집합체
//함수나 객체들이 모이면 모듈
//모듈이 모이면 라이브러리->프레임워크->플랫폼

function showFunc(){
    console.log("함수가 실행된다.");
    return; // retyrn문을 만나면 함수가 종료
            //그 함수가 값을 반환하는 용도
    console.log("함수가 여기도 실행되나?");
}
showFunc();

//자바스크립트에서는 함수를 1급 객체로 취급한다.

//전역변수와 지역변수
function localFunc(){
    var msg="welcome"; //지역변수
    console.log("함수내에서 "+msg);
}
localFunc();
// console.log("함수밖에서 "+msg);
//지역변수는 함수내에서만 사용할 수 있다.

var msg="hi Everyone"//전역변수
function localFunc(){
    var msg="welcome";
    console.log("함수내에서 "+msg);
}
localFunc();
console.log("함수밖에서 "+msg);

//함수 바깥에서는 함수내부의 지역변수에 접근할 수 없다.


function welcome(name){
    var msg="welcome";
    var name=name || "Friend";

    msg +=` to my ${name}`;
    console.log(msg);
}
welcome();
welcome("유민정");

function come(name="양창식"){
    var msg="welcome";
    if(name){
        msg += name;
    }
    
    console.log(msg);
}
come();
come("유민정");

//함수선언문 과 함수표현식
//선언함수(일반함수) 과 익명함수
//둘 사이의 차이점은 호출할 수 있는 타이밍이있다.

myFuc();
function myFuc(){
    document.write("<h1>HI HELLO</h1>");
}//미리호출하고 나중에 선언해도된다.
var myVar="대한민국";
document.write(myVar);

//자바스크립트는 위에서 아래로 순차적으로 실행되는
// 인터프리터 언어라고 한다.
//일반함수는 선언과 동시에 호이스팅된다.(문서상단으로 이동)

var myFunc1=function(){
    console.log("나는 익명 함수입니다.");
}
myFunc1();
//함수선언하면 초기 모든 함수들을 콜스택여역이라는 곳에 모아서 생성한다.

//Stack Overflow발생
//재귀함수
//자기가 자기호툴하면 stack overflow발생

// function overflow(){
//     console.log("내가 날 호툴한다.");
//     overflow();
// }
// overflow();

//화살표 함수
//() => {}
function showError(){
    console.log("error1.....")
}
showError();

var showError=function(){
    console.log("error2.....")
}
showError();

var showError=()=>{
    console.log("error3.....")
}
showError();

var showName=function(name){
    var msg=`Hello,${name}`
    console.log(msg);
}
showName("임성혁");

var showName=(name)=>{
    var msg=`Hello,${name}`
    console.log(msg);
}
showName("임성혁");

var add=function(num1,num2){
    const result=num1+num2;
    return result;
}
console.log(add(5,3));

var add=(num1,num2)=>{
    const result=num1+num2;
    return result;
}
console.log(add(15,76));

var add=function(num1,num2){
    return num1+num2;
}
console.log(add(5,18));

var add=(num1,num2)=>{
    return num1+num2;
}
console.log(add(5,18));

var add=(num1,num2)=>num1+num2;
console.log(add(15,3));

var sayHello=function(name){
    return name;
}
console.log(sayHello("김건호"));

var sayHello=name=>name;
console.log(sayHello("최경식"));
// var 함수명=인수=>리턴값;