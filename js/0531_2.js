//localStorage
localStorage.setItem('name','이순신');
var name=localStorage.getItem('name');
// document.write(name);
localStorage.setItem('name','선덕여왕');
localStorage.setItem('name1','을지문덕');

localStorage.removeItem('name1'); //삭제
localStorage.setItem('name1','을지문덕');
localStorage.clear();//전체삭제
localStorage.setItem('name','선덕여왕');
localStorage.setItem('name1','을지문덕');

localStorage.removeItem('name1');
localStorage.setItem('name1','을지문덕');

sessionStorage.setItem('name1','이순신');
sessionStorage.setItem('name2','세종대왕');

//세션정보
//상태비저장(stateless)
//상태저장 -> 쿠키

//쿠키생성
document.cookie='color=red';
document.cookie='color1=blue';
document.cookie='color2=yellow';
document.cookie='color3=white';

//쿠키값 변경
document.cookie='color=black';

//쿠키구성요소
//expires,path,

//만료기간
var date=new Date()
date.setMinutes(date.getMinutes()+1); //1분 뒤에 만료
document.cookie=`color=black; expires=${date.toUTCString()}`

//쿠키값읽기
console.log(document.cookie.match(/color/));

//쿠키값 삭제
// document.cookie=`color=black;max-age=${'0'}`

console.log(document.cookie);
//쿠키문자열 -> 객체로변환 -> ; = 로 분리하고 => 객체에 저장

var value=document.cookie;
console.log(value);
var cookieItem=value.split(';');
console.log(cookieItem);
//trim 으로 각각의 객체 앞에 공백을 제거해줘야됨
var obj={}

cookieItem.forEach((item)=>{
    var elem=item.split('=')
    console.log(elem);
    var key=elem[0].trim();
    var val=elem[1];
    obj[key]=val;
})
console.log('분리된 쿠키')
console.log(obj);