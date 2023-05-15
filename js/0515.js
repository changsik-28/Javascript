//javascript basic

//변수->메모리공간에 하나의 저장공간이 생긴다.
var name="양창식";
var age;
age=28;

//변수는 선언을 해야하고,
//그 변수에 값을 할당해야한다.
//할당하지 않으면 undefined;
document.write("<h2>name</h2>");
document.write("<h2>"+name+"</h2>");
document.write("<h2>"+age+"살</h2>");

document.write(`<h2>${name}은 ${age}살입니다.</h2>`);
//` ->빽틱 Esc밑에
//문자는 따옴표, 쌍따옴표, 홋따옴표로 감싼다.
var age=30;

var 이름; //undefined
document.write(이름);//undefined 정의가 안되있다.
이름="유민정";        //문장 statement
document.write(이름);
이름="임성혁";
document.write(이름);
console.log("우리형의 이름은 "+이름+"입니다.")

var 이름="양창식";

document.write(`<h2>내후년이면 ${이름}은 ${age}가 된다.</h2>`);

//let 과 const

let name1="Mike";
console.log(name1);
name1="Tomson";
console.log(name1);
let name2="마이클";
//let으로 선언된 변수명은 중복사용할수 없다.
//let이 오류를 줄일수있다.
//let과 var는 스코프 scope - 렉시컬 환경 , 영역

//const 상수: 절대로 바뀌지 않는 상수
const 생일 = "1996-07-10";
console.log(생일);
//생일="2020-10-10"
console.log(생일);
//변수 이름 정의하기

//var 05name="홍길동";
var let="let me";
console.log(let);
//var if="welcome";
//let var="hi"

//자바 -> final

//변수선언할때 변하지 않는 값은 const
//변할수 있는 값은 var 와 let
//let은 이름이 중복되면 에러발생
//var는 중복되도 그래도 사용가는
//변수이름은 첫글자는 숫자가 될 수 없다.
//변수이름은 예약어로 사용할 수 없다.
//가급적 상수는 대문자로 사용한다.
//변수명은 읽기 쉽고 이해할수 있게 선언한다.
//문자와숫자, $와 _ 만 사용가능한다.

var BIRTHDAY=new Date();
console.log(BIRTHDAY.toLocaleTimeString());

let $aaa_=300;
//let $aa-a_=300; -는 안된다.

let msg="I'm a boy";
console.log(msg);
let msg2="I\'m a boy";
console.log(msg2);
let msg3=`My name is${name}`;
console.log(msg3);
let msg4=`나는 ${27+1}살 입니다.`;
console.log(msg4);

//숫자 Number, 문자String
//더하기 빼기 곱하기 나누기 나머지
// +    -    *      /     %

console.log(name/2);//Nan, Not a Number
console.log(이름*2);

console.log(이름+10);// + 문자와 연결기능
console.log(이름-10);//Nan

// + 더하기 기능, 문자와 연결연산자 기능

//Boolean 불리언- 참, 거짓 true, false
//불대수 - 논리학

let a=true;
let b=false;
console.log(a==b);
// == 같다, 등가연산자. ===동치연산자(일치연산자)
console.log(10>5); //true
console.log(name =="양창식");

//프로그래머 아내
//남편 프로그래머
//만약에 가게에 가서 여자가 있거나 이쁜면 가지마.
// if(여자 || 이쁘다){
    //실행
// }

// typeof 연산자
console.log(typeof 3);
//string,number,undefined,Nan,boolean,
//null 존재하지 않는 값
//undefined는 초기화(정의)하지 않는 자료형

var age=null;
//typeof null -> object 객체

function add(){ } //함수
console.log(typeof add);

var 고양이={ } //객체
console.log(typeof 고양이);

//숫자+문자 = 문자
console.log(100+"hi");

//문장과 표현식
//statement과 expression
//var a=10; statement
//4+10; expression
//var a=10 했을때 undefined 가 나오는 건 어쩌라는거다 
// 4+10은 답을 말해주기 바로 말해줄수있는데 변수는 그다움어떻게 하는가

//대화상자(UI)
//alert 경고창, 알려주는창
//prompt 입력받는 창
//confirm 확인받는 창

var 별명=prompt("별명을 입력하세요","한글로");
console.log("환영합니다"+별명+"님");
document.write(`환영합니다${별명}님`);

var 성인=confirm("당신은 성인입니까?");
//isAdult 변수명을 이렇게 저정하는게 좋다
//확인->true , 취소-> false
//조건문 
if(성인==true){
    console.log("당신은 성인이군요");
}else{
    console.log("당신은 아직 미성년자이군요")
}

//prompt 에서 취소를 누르면 null값이 출력된다.

// = 대입연산자
//a = 3; a라는 변수에 3을 대입해라.
