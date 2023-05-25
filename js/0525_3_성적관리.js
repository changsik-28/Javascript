//1. 생성자 함수선언
//2. 학생배열제작
//3. 전체 학생출력

function Student(name,html,css,js,java){
    this.name=name;
    this.html=html;
    this.css=css;
    this.js=js;
    this.java=java;

    this.getSum=function(){
        return this.html+this.css+this.js+this.java
    }
    this.getAvg=function(){
        return this.getSum()/4
    }
    //toString override
    this.toString=function(){
        return this.name+ ' '+this.getSum()+' '+this.getAvg()
    }
}

//학생 정보 데이터
var Students=[];
Students.push(new Student('원빈',10,20,30,40))
Students.push(new Student('아이유',40,80,30,40))
Students.push(new Student('이정재',50,90,40,100))
Students.push(new Student('장원영',80,20,30,50))
Students.push(new Student('카리나',40,50,10,40))
Students.push(new Student('제시카',20,0,90,80))
Students.push(new Student('윤아',40,50,60,70))
Students.push(new Student('윈터',70,70,80,80))
Students.push(new Student('박민정',100,80,90,80))
Students.push(new Student('쌈디',10,30,30,20))

console.log(Students)

function allStudents(){
    var output='이름 총점 평균 <br> <hr>'
    for(var i in Students){
        output += (Number(i)+1)+' : '+ Students[i].toString()+'<br>'
    }
    output +='<hr>'
    list.innerHTML=output;
}

//장학금 1등~3등
//sort().slice(0,3) 메소드 체이닝 정렬하고 위에서3명까지만 짜른다.
function good(){
    var output='이름 총점 평균 <br> <hr>'
    var Students2=Students.sort(function(a,b){
        return b.getSum() - a.getSum();
    }).slice(0,3);

    for(var i in Students2){
        output += (Number(i)+1)+' : '+ Students2[i].toString()+'<br>'
    }
    output +='<hr>'
    list.innerHTML=output;
}

function jang(){
    var output='이름 총점 평균 <br> <hr>'
    var Students2=Students.sort(function(a,b){
        return b.getSum() - a.getSum();
    }).slice(3,6);

    for(var i in Students2){
        output += (Number(i)+4)+' : '+ Students2[i].toString()+'<br>'
    }
    output +='<hr>'
    list.innerHTML=output;
}

function bad(){
    var output='이름 총점 평균 <br> <hr>'
    var Students3=Students.sort(function(a,b){
        return a.getSum() - b.getSum();
    }).slice(0,3);

    for(var i in Students3){
        output += (Number(Students.length)-i)+' : '+ Students3[i].toString()+'<br>'
    }
    output +='<hr>'
    list.innerHTML=output;
}

function del(){
    console.log(Students)
    Students.splice(0,1)// 리스트를 하나씩만 제거

    var output= '이름 총점 평균 <br> <hr>'
    for(var i in Students){
        output += (i)+' : ' +Students[i].toString()+'<br>'
    }
    output += '<br>'
    list.innerHTML = output;
}

function reload(){
    location.reload();
}