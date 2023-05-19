window.onload=function(){
//html body에 문서를 자유롭게 읽을 수 있다.
//js/0519.js 뒤에다가 defer 를 넣어도 같다
}

//객체와 배열을 사용한 데이터 관리
//학생 데이터 생성
var 학생0={이름:'kim1',국어:96,영어:60,수학:93,과학:60}
var 학생1={이름:'장동권',국어:56,영어:51,수학:55,과학:100}
var 학생2={이름:'강호동',국어:86,영어:32,수학:67,과학:74}
var 학생3={이름:'유재석',국어:14,영어:48,수학:59,과학:75}
var 학생4={이름:'김종국',국어:83,영어:60,수학:43,과학:46}
var 학생5={이름:'오병민',국어:46,영어:81,수학:57,과학:62}

var 학생0총점=학생0.국어+학생0.과학+학생0.수학+학생0.영어;
document.write(`<h2> 학생0 총점 : ${학생0총점} </h2>`);

var 학생5총점=0;

for(var key in 학생5){
    // 학생5총점 = 학생5총점 + 학생5[key];
    if(key != '이름') // 이름 key 는 제외하고 계산한다
    학생5총점 += 학생5[key]; // 한줄실행은 {}필요없음
}
document.write(`<h2> 학생5 총점 : ${학생5총점} </h2>`);

//배열에 데이터를 추가하기
var students=[];
students.push({이름:'원빈',국어:96,영어:60,수학:93,과학:60});
students.push(학생1);
students.push(학생2);
students.push(학생3);
students.push(학생4);
students.push(학생5); 
console.log(students);
//앞에 정의가 되있기 때문에 가능

//모든 학생배열내의 객체에 메소드를 추가하기
for(var i in students){
    students[i].getSum=function(){
        return this.과학+this.수학+this.영어+this.국어;
    }
    students[i].getAvg=function(){
        // return (this.과학+this.수학+this.영어+this.국어)/4;
        return this.getSum()/4;
    }
}
document.write(`학생3의 총점 : ${students[2].getSum()}`);
document.write("<br>")
document.write(`학생3의 평균 : ${students[2].getAvg()}`);
document.write("<hr>")

// 전체학생 성적 출력하기 - 이름,총점,평균
document.write("이름 총점 평균 <hr>");
for(var i in students){
    document.write(students[i].이름+' '+students[i].getSum()+' '+students[i].getAvg());
    document.write("<br>")
}

//하나의 변수에 저장하기
var output="<hr>이름,총점,평균<hr>";
for(var i in students){
    output += students[i].이름+' '+students[i].getSum()+' '+students[i].getAvg() + "<br>";
}
//output 변수에 문자열로 학생데이터 값이 하나씩 추가된다.
document.write(output);

//코드 줄이기 - with 키워드
var output="<hr>이름,총점,평균<hr>";
for(var i in students){
    with(students[i]){
    output += 이름+' '+getSum()+' '+getAvg() + "<br>";
    }
}
//output 변수에 문자열로 학생데이터 값이 하나씩 추가된다.
document.write(output);

console.log(students.pop());
console.log(students.pop());
//지금까지 객체를 사용한 데이터 생성이였습니다.

//함수를 사용한 객체 데이터 생성
function 학생성적표(name,korean,math,english,science){
    var 성적출력={
        이름 :name,
        국어 :korean,
        수학:math,
        영어:english,
        과학:science,
        getSum:function(){
            return this.과학+this.수학+this.국어+this.영어;
        },
        getAvg:function(){
            return this.getSum()/4;
        },
        //toString 메소드 재정의 -> 오버라이드 override
        toString:function(){
            return this.이름 + " " + this.getSum() +" " + this.getAvg();
        }
    }
    return 성적출력;
}

var 학생들=[];
학생들.push(학생성적표('윤아',86,42,85,81));
학생들.push(학생성적표('제시카',85,91,54,76));
학생들.push(학생성적표('윈터',53,85,77,34));
학생들.push(학생성적표('카리나',53,46,85,77));
학생들.push(학생성적표('아이유',88,77,99,69));

//성적출력
var 결과='<hr>이름 총점 평균<hr>';
for(var i in 학생들){
    결과 += 학생들[i].toString() + '<br>';
}
document.write(결과);

//생성자 함수
//new 키워드, instance 인스턴스
function Student(name,korean,math,english,science){
        this.이름 =name;
        this.국어=korean;
        this.수학=math;
        this.영어=english;
        this.과학=science;
        this.getSum=function(){
            return this.과학+this.수학+this.국어+this.영어;
        },
        this.getAvg=function(){
            return this.getSum()/4;
        },
        this.toString=function(){
            return this.이름 + " " + this.getSum() +" " + this.getAvg();
        }
}
document.write("<hr>");
var 학생1=new Student('에일리',80,49,79,25);
document.write(학생1.toString());
//new를 사용하면 this->학생1 이 된다.   학생1 ->인스턴스(instance)
//new를 빼면 this -> window가 된다.

var students=[];
students.push(new Student('리메르',80,49,79,25));
students.push(new Student('라온',80,49,79,25));
students.push(new Student('실비아',80,49,79,25));
students.push(new Student('라스',80,49,79,25));
students.push(new Student('글랜',80,49,79,25));
students.push(new Student('로엔',80,49,79,25));

var 결과='<hr>이름 총점 평균<hr>';
for(var i in students){
    결과 += students[i].toString() + '<br>';
}
document.write(결과);

var str="WELCOME";
str.toString();
document.write(str);

//instanceof
//해당객체가 어떤 생성자 함수로 생성되었는가? 확인하기

var 학생10= new Student("강호동",10,20,30,40);
console.log(학생10 instanceof Student);
