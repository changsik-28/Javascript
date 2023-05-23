//수학객체,숫자객체
//Number,Math

var num=15; //10진수
num.toString();
console.log(num);
console.log(num.toString());
console.log(num.toString(2));//2진수
console.log(num.toString(16));//16진수

console.log(Math.PI);
Math.ceil()//올림
console.log(Math.ceil(Math.PI));
Math.round()//반올림
console.log(Math.round(Math.PI));
// toFixed() 소수점 자릿수
var num2=30.12345;
console.log(num2.toFixed(2)); //30.12
console.log(num2.toFixed(0)); //30

//inNaN()
var a='100';
var b=100;
console.log(isNaN(a)); //isNaN은 숫자가 아니냐고 
console.log(isNaN(b));//물어보는거임 숫자니깐 false
console.log(isNaN("wel"));
console.log(typeof a);
console.log(typeof b);

//Number(), parseInt() 정수
//Number()는 숫자로 변경은 가능하지만 안의 영어는 그대로 가져와서 NaN을 출력하고
//parseInt()는 문자가 들어갔어도 숫자만 뽑아내서 출력한다.
//그럼 Number()는 언제 사용하냐 "300" 이럴때 사용한다.

console.log(typeof Number(a));
var margin="10px";
var margin1=Number(margin);
var margin2=parseInt(margin);

console.log(margin1); //NaN
console.log(margin2); //10

//parseFloat() 부동소수점 변환
var padding='18.5%'
console.log(parseInt(padding));  
console.log(parseFloat(padding));

//Math.random() 0~1사이의 무작위 숫자
console.log(Math.random());
console.log(Math.random()*45);//0~45사이의 숫자
console.log(Math.floor(Math.random()*45)+1);
//floor 버림 ceil 올림

//로또 번호 생성기
var 로또=[];

for(var i=1;i<=45;i++){
    로또.push(i);
}
document.write(로또);
document.write('<br>');

document.write("이번주 당첨번호<br>");


for(var i=0;i<6;i++){
    document.write(Math.floor(로또.length*Math.random())+1 +' , ');
}

 
Array.prototype.random=function(){
    var index=Math.floor(this.length*(Math.random())); //0~44
    return this[index];
}
document.write('<br>');
document.write('다음주 당첨번호<br>');
for(var i=0;i<6;i++){
    document.write(로또.random()+' , ');
}

// Math.max() , Math.min
var max=Math.max(1,2,3,4,35,23,15);
var min=Math.min(1,2,3,4,35,-23,15);
console.log(max,min);
//Math.abs() 절대값 Math.pow(n,m) 제곱 Math.sqrt() 제곱근
console.log(Math.abs(-10));
console.log(Math.pow(2,10));
console.log(Math.sqrt(16));

//String 객체
var str='welcome to my world';
var str1='안녕하세요';
console.log(str.length); // 문자열의 길이
console.log(str1[2]); // 0 1 2 번째 하
// str1[4]='용'; // xxxx
//toUpperCase()  toLowerCase();
console.log(str.toUpperCase()); // 대문자 변환
console.log(str.toLowerCase());// 소문자 변환
//str.indexOf(text)
console.log(str.indexOf('wel')); // 0
console.log(str.indexOf('to')); // 8

if(str1.indexOf('하')>-1){
    console.log('하 가 있습니다');
}
if(str1.indexOf('핵')>-1){
    console.log('핵 이 있습니다');
}
else{
    console.log('글자가 없습니다.')
}

//slice()   substring(n,m)  substr(n,m)
//welcome to my world
console.log(str.slice(2,5)); //lco
console.log(str); // 원본은 변함이없다.
var slice=str.slice(3,8);
console.log(slice);
console.log(str.substring(2,5));
console.log(str);
console.log(str.substr(2,5)); // 2개부터 5개를 가져온다.
console.log(str);

//str.trim() 앞뒤 공백 제거
//str.repeat(n) n번 반복
var hello='hello';
console.log(hello.repeat(3));

//문자열을 비교
console.log('a'<'c');
console.log('a'.codePointAt()); //97
console.log('A'.codePointAt()); //65 ASCII 아스키코드
console.log(String.fromCodePoint(65));

//금칙어를 조회
if(str.indexOf('성인') > -1){
    console.log('금칙어가 있다');
    console.log(str.indexOf('성인')); 
    // indexOf 는 -1을 반환하기 때문에 조건문에  >-1 라는 식을줘야함
    //0 이나 null false NaN undefined 가 나와야 거짓이다
}

//Array 객체
//push      pop     unshift     shift   splice
//concat    forEach
//indexOf   lastIndexOf   includes
//find  findIndex
//sort  reverse
//map   filter
//join  split

//push() 뒤에 삽입  pop() 뒤에 삭제
var 과일=['사과','배','귤','딸기','바나나'];
var fruit=['apple','straberry','banana'];

console.log(과일);
console.log(과일.push('수박'));
console.log(과일);
console.log(fruit.pop());
console.log(fruit);

//unshift 앞에 삽입 shift 앞에삭제
console.log(과일.unshift('수박'));
console.log(과일);
console.log(fruit.shift());
console.log(fruit);

//splice(n,m) 특정요소 지움 n은 시작 m 은 개수
var 과일=['사과','배','귤','딸기','바나나'];
var fruit=['apple','straberry','banana','cherry'];
console.log(과일);
console.log(과일.splice(2,2));
console.log(과일);
console.log(과일.splice(1,0,"방울토마토"));
//방울토마토를 중간에 삽입하기 위해 삽입 위치를 정하고 지우지는 않는다.
console.log(과일);

var 쓰레기= fruit.splice(1,2); // 삭제된 요소를 반환한다
console.log(쓰레기);
console.log(fruit); // splice 는 원본이 손상이 간다. 

//slice(n,m) 시작, 끝 -1 까지
var 과일=['사과','배','귤','딸기','바나나'];
var fruit=['apple','straberry','banana','cherry'];
console.log(과일.slice(1,4));
console.log(과일); // 원본에 손상을 주지않는다.
//그렇기 때문에 var slice = 과일.slice(n,m) 이라는 변수를 만들어 저장해야된다.

//concat 합쳐서 새배열을 반환
console.log(과일.concat(fruit));
console.log(과일);
console.log(fruit);
var 장바구니=과일.concat(fruit);
console.log(장바구니);

//forEach 배열 반복
장바구니.forEach((item,index)=>{
    console.log(`${index} : ${item}`);
})

//indexOf   lastIndexOf
//앞에서부터 검색   뒤에서부터 검색
var 과일=['사과','배','바나나','귤','딸기','바나나'];
var fruit=['apple','straberry','banana','cherry'];
console.log(과일.indexOf('바나나'));
console.log(과일.lastIndexOf('바나나'));

//includes() 포함하는지 확인
console.log(과일.includes('귤'));
console.log(과일.includes('토마토'));

//find()    findIndex()
//찾으면 true 없으면 undefind
var result=과일.find(function(){

})
var result=과일.find((item)=>{
    return item=='귤';
})
console.log('=='+result);

var arr=[1,2,3,4,5,6,7,8,9];
var result=arr.find((item)=>{
    return item%2 == 0;
})
console.log('=='+result);

var user=[
    {name: '원빈1',age:30},
    {name: '원빈2',age:10},
    {name: '원빈3',age:40},
    {name: '원빈4',age:13}
]
var result=user.find((a)=>{
    if(a.age<15){
        return true
    }
    return false
})
console.log(result);

var result=user.findIndex((a)=>{
    if(a.age<15){
        return true
    }
    return false
})
console.log(result);

//filter 만족하는 모든 요소를 배열로 반환한다.
var result=user.filter((a)=>{
    if(a.age<15){
        return true
    }
    return false
})
console.log(result);
//찾는 값이 있으면 true를 반환하고 result에 저장한다.
//없으면 false를 반환하고 그다음 요소를 찾는다.

var fruit=['apple','straberry','banana','cherry','coconut','blueberry'];
//fruit 에서 글자가 7개 이상인 과일명만 추출하시오

var result=fruit.filter((item)=>{
    if(item.length>=7){
        return true
    }
    return false
})
console.log(result);
//줄인식
//var result=fruit.filter((item)=>item.length <=5)
//console.lof(result);

//forEach 함수를 이용해서 fruit 의 데이터를
//<ul> 태그에 <li> 태그 리스트로 삽입해보자
//document.write()로 출력
//<li>0 : apple</li>

// 내가 한 방법
// fruit.forEach((item,index)=>{
//     document.write('<ul>');
//     document.write(`<li>${index} : ${item} </li>`);
//     document.write('</ul>');
// })

//원래 방법
var output="<ul>";
    fruit.forEach((item,index)=>{
        output+=`<li>${index+1}번째 : ${item} </li>`
    })
output +="</ul>";

document.write(output);

//map 
//함수를 받아 특정기능을 수행하고 새로운 배열을 반환한다.
var user=[
    {name: '원빈1',age:30},
    {name: '원빈2',age:10},
    {name: '원빈3',age:40},
    {name: '원빈4',age:13}
]
var user2=user.map((a,i)=>{
    return a.age>20
})
console.log(user2);

var user2=user.map((a,i)=>{
    return a.name+"님"+(a.age-1) + "살"
})
console.log(user2);
console.log(user);

//join, split
var join=과일.join('-');
document.write(join);
document.write('<br>');
document.write(과일);
//배열안의 인덱스 사이의 끼워 넣는것

var str='welcome,to,my,world'
var split=str.split(',');
document.write('<br>');
document.write(split);

var split=str.split('');
document.write('<br>');
document.write(split);

//isArray()
console.log(Array.isArray(과일));

//sort()    reduce()
var arr=[1,4,6,3,7,2];
arr.sort();
document.write("<br>");         //오름차순
document.write(arr);

arr.sort(function(a,b){
    return b-a
})                              //내림차순
document.write('<br>');
document.write(arr);

var user=[
    {name: '원빈',age:30},
    {name: '장동권',age:10},
    {name: '손흥민',age:40},
    {name: '유재석',age:13},
    {name: '김유나',age:23}
]

user.sort()
document.write("<br>");
console.log(user);

user.sort(function(a,b){
    if(a.name<b.name){
        return -1;
    }
    if(a.name>b.name){
        return 1;
    }
    return 0;
})
console.log(user);
