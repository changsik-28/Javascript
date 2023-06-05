//script 에서 defer 를 지울경우에 
//$(document).ready(function(){})을사용해 그안에만 작성해야된다.
$(document).ready(function(){
    $('h3').css({
        background:'black',
        color:'white'
        
    });
    //index 가 짝수인 객체만 선택
    $('h3').filter(':even').css({
        border:'3px solid red'
    })
    //index 가 3의 배수인경우??
    $('h3').filter(function(index){
        return index % 3==0;
    }).css('font-size','40px')
    $('h3').filter(function(index){
        return index % 3 !== 0;
    }).css('color','red')





})//end

//filter , end, eq, first, last, add
//is, find()
//문서객체선택과 탐색
//filter(selector) filter(function)