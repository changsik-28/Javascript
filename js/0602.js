//Array 객체
// isArray()
// indexOf()
// lastIndexOf()
var arr=[1,2,3,4,5,6,7,8,9,10,11];
console.log(Array.isArray(arr)) //arr 가 배열인가
console.log(arr.indexOf(4));    //4의 인댁스가 몇인가
console.log(arr.lastIndexOf(4));  

//forEach() - for in 반복문과 유사
//map -> 배열에 규칙을 적용해서 새로운 배열을 생성
var out=arr.map((ele)=>{
    return ele*ele;
});
//var out=arr.map(ele=> ele*ele); 위에와 같다
console.log(out);
//자바에서는 이것을 람다식이라고 한다.

var sum=0;
var out='';
arr.forEach((ele,i)=>{
    sum+=ele;
    out+=`${i} : ${ele}  -> ${sum}\n`;
})
console.log(out);   //등차수열 구현
//게시판 페이지 번호 구현 할때 사용된다.

//filter()  조건에 만족하는 요소를 추출
//some()    조건에 적어도 하나 만족하는지 확인 
//every()   조건에 모두 만족

arr2=arr.filter((a)=>{
    return a<=5;
})
console.log(arr2);
arr2=arr.filter((a)=>{
    return a != 3;//요소가 3이 아닌요소만 추출해라
                //  == 3인요소만 삭제해라
})
console.log(arr2);
//특정 리스트 항목을 삭제할때 사용한다.

var result=arr.some(num=>num>5);
console.log(result);    //5초과가 하나라도 있으니 true
var result=arr.every(num=>num>5);
console.log(result);    //arr가 전부 5초과가 아니니 false

//확인메소드 -isArray()
//탐색메소드 -indexOf() lastindexof()
//반복메소드 - forEach() map()
//조건메소드 - filter() evert() some()
//연산메서드 - reduce() reduceRight()
//reduce() 하나가 될때까지 왼쪽에서 두개씩 묶는 함수
//reduceRight() 하나가 될때까지 오른쪽에서 두개씩 묶는 함수
console.log('-------------------------------')
var arr=[1,2,3,4,5,6,7,8,9,10,11];
var out2='';
arr.reduce((pre,cur,i,arr)=>{
    out += `${i} => ${pre} ${cur} \n`;
    return pre+cur;
})
console.log(out);

//ES5 JSON 객체
//JSON.stringify()  객체를JSON 문자열로 변환
//JSON.parse()      JSON 문자열을 자바스크립트 객체로 변환

var 고양이={
    이름 :'야옹이',
    나이 : '2살'
}
console.log(고양이);
console.log(JSON.stringify(고양이));
console.log(JSON.parse(JSON.stringify(고양이)));

//객체를 배열로 변환하기
//고전적인 방법
var str={
    name1 : '양창식',
    name2 : '유민정',
    name3 : '김건호'
}
var strArr=[];
for (var key in str){
    if(str.hasOwnProperty(key)){ // key 값이 존재하는 채크
        strArr.push(key);
    }
}
console.log(strArr);    //key 를 배열로

var strArr=[];
for (var key in str){
    if(str.hasOwnProperty(key)){ // key 값이 존재하는 채크
        strArr.push(str[key]);
    }
}
console.log(strArr);    //value를 배열로

//ES5 => Object.keys() Object.values()
var 이름=Object.keys(str);
console.log(이름);
var 값 = Object.values(str);
console.log(값);

var 배열=Object.keys(str).map(item=>str[item]);
console.log(배열);

//Object.entries()  Object.fromEntries()
var entry=Object.entries(str);  // 배열로
console.log(entry);
var entry=Object.fromEntries(entry);    //객체로
console.log(entry);

var JSON1=JSON.stringify(entry);    //json 문자열로
console.log(JSON1);
var JSON2=JSON.parse(JSON1);    //json 문자열을 자바스크립트 객체로
console.log(JSON2);

//ES5 string 객체
//trim() 공백제거

//Object 객체들
//Object.defineProperty()   속성 추가
//Object.defineProperties() 속성들 추가
//Object.create()   객체생성
//Object.preventExtensions()    속성 추가 제한    
//Object.isExtensible()     속성추가 가능여부
//Object.seal()     속성삭제제한
//Object.isSealed() 속성제거 가능여부
//Object.freeze()   속성삭제한
//Object.isFrozen() 속성제거가능여부
//Object.keys() 속성을 배열로
//Object.values() 속성값을 배열로
//Object.getOwnPropertyName()   모든속성을 배열로
//Object.getOwnPropertyDescriptor()  속성의 옵션 객체로

//객체속성옵션
//value, 값
//weitable, 변경가능여부
//get, set, 
//configurable, 설정변경여부
//enumearble   반복문검사여부

var heros={}
Object.defineProperty(heros,'name',{
    value:'슈퍼맨',
    weitable:false,
    enumerable:true,
    configurable: true//속성설정 변경

})
console.log(heros);//슈퍼맨
heros.name='아이언맨';//weitable:false변경가능여부를 false로해놔서
console.log(heros);//변경이 안된다.

for(var i in heros){
    console.log(heros[i])
}

var value='아이언맨'
Object.defineProperty(heros,'name',{
    get:function(){ //가져오는거
        return value;
    },
    set:function(newValue){ //설정하는거
        value=newValue
    }
})
console.log(heros.name)
value='스파이더맨'
console.log(heros.name);
//자동으로 게터와 세터를 실행한다. 캡슐화,은닉화

Object.defineProperties(heros,{
    name:{value:'토르'},
    region : { value :'아스가르드'}
})
console.log(heros)

var hero2=Object.create({},{
    name:{value: '배트맨'},
    skill : { value : '마스크'}
})
console.log(hero2);
hero2.age='40'
console.log(hero2)
Object.preventExtensions(hero2);
console.log(Object.isExtensible(hero2));
hero2.skill2='날아간다'
// console.log(hero2)

// Object.defineProperty(hero2,'slill2',{
//     value:' fly ...'
// })
//seal()봉인,   freeze()
var hero3={}
var hero3=Object.assign({},hero2);
Object.defineProperty(hero3,'skill2',{
    value : 'fly'
})
console.log(hero3)

// Object.seal(hero2);
console.log(Object.isSealed(hero2))
delete hero2.name;
console.log(hero3)
Object.seal(hero3);
delete hero3.age;
console.log(hero3);

//Object.keys() Object.values()
//Object.getOwnPropertyNames()  속성을 배열로
//Object.getOwnPropertyDescriptor() 옵션 값 추출

console.log(Object.getOwnPropertyNames(hero2));
console.log(Object.getOwnPropertyDescriptor(hero2,'name'));
