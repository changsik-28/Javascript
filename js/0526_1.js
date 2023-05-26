
//setInterval(function(){ },1000)
// button.addEvantListener('click',function(){

// })
function add(a,b,callback){
    var result=a+b;
    callback(result);
}

add(10,5,function(result){
    document.write('파라미터로 콜백함수 호출됨')
    document.write("<br>")
    document.write('더하기 결과 : '+result)
    console.log('결과: %d',result)
})

//함수를 리턴하는 경우(내부함수)
function mul(a,b){
    var result=a*b;
    var output=function(){
        return `${a}*${b}=${result}`
    }
    return output;
}
var out=mul(5,6); //외부함수 호출
document.write("<hr>");
document.write(out);
var out=mul(5,6)();//내부함수를 호출
document.write("<hr>");
document.write(out);
var out=mul(5,6)
document.write("<hr>")
document.write(out())//내부함수 호출


//클로져를 사용하지 않은 예
function fucCount(){
    var count=0;
    count++;
    return count;
}
var counter=fucCount();
console.log(counter)
console.log(counter)
console.log(counter)
//전역 변수가 있는것은 모듈화 ,은닉화 위배된다.

// debugger
//클로져를 사용한 예
function fucCount2(){
    var count=0;    //은닉화,모듈화
    function addCount(){
        count++;
        return count;
    }
    return addCount;
}
var counter=fucCount2();
console.log(counter())  //1
console.log(counter())  //2
console.log(counter())  //3

//외부에서 내부변수에 접근가능하다.
//자바에서 getter,setter 활용된다

var color=['red','gold','silver','blue','brown'];
var body=document.querySelector('body')

// var i=0; //전역변수
// function bgchange(){
//     body.style.background=color[i];
//     i++;    //내부에서 전역변수 변경
// }// 모듈화가 안되있고 change를 쓸려면 전역변수를 계속 밟아야된다.
// //예를 들어 핸드폰을쓰는데 베터리를 들고 다녀야된다.

var button=document.querySelector('button');

function bgchange(){
    var i=0;    //은닉화 , 캡슐화
    function inner(){
        body.style.background=color[i];
        i++;  
        i = i % color.length
    }
    return inner;
}
var bgC=bgchange();
