var test=document.getElementById('test');
try{
    console.log('welcome');
    // throw '무슨에러인가'
}catch(err){
    test.innerHTML=err.message;
}
test.style.color='red';
//throw 사용자지정 오류를 만든다.


//1~10 까지의 숫자를 입력 받는 공식


var numBox= document.getElementById('numBox');
var btn= document.getElementById('btn');
var errText=document.getElementById('errText');
//HTML에 있는것들을 먼저 호출한다.

var show=false;
btn.addEventListener('click',function(){
    errText.innerHTML=''
    var val=numBox.value;

    try{ 
        if(val=='')throw " 비어있음 "
        if(isNaN(val)) throw ' 숫자가 아닙니다.'
        if(val<1)throw '숫자가 1이하입니다.'
        if(val>10)throw '숫자가 10이상입니다.'
        show=false;
    }
    catch(err){
        errText.innerHTML='에러메시지 : '+err
        show=true;//에러가 발생했을때 트루로 바꾼다
    }finally{
        if(show)numBox.value=''; 
        //입력했을때 input타입안에 입력값을 초기화시켜준다
        //show라는 거짓이라는 변수를 만들어서
        //에러가 발생했을때만 박스 초기화시키고 정상이면 작동시킨다.
    }
    errText.style.color='red';
})

var num=123.123455
try{
    console.log(num.toFixed(3))
    console.log(num.toPrecision(100))//RangeError toPrecision(101)
    num=num+1;//ReferencError num=num+num2
    // eval("alert('hellow')")//SyntaxError
    // num.toUpperCase();//TypeError 
    // 숫자를 대문자로 바꿀려고 하니깐 Type 이 아니다라는 에러
    // console.log(decodeURI('http://www.daum.net/aaa%%%'))
    // console.log(encodeURI('http://www.daum.net/$$$'))
    //URIError
    
}catch(err){
    errText2.innerHTML=err.name + ' : '+err.message
    //에러텍스트2의 이너HTML 에 에러.네임을 주겠다
}
//toPrecision 수의 길이를 제한
//toFixed 는 소수점의 길이를 제한
errText2.style.color='red';