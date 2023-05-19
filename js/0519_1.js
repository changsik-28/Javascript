console.log("fetch로 통신하기");

//비동기기때문에 나중에 실행됨

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(
    function (response){
        console.log(response);
    return response.json();
    })
.then(
    function(data){
        console.log(data);
        document.write(`<hr>사용자 아이디 : ${data.id} <br> 타이틀 : ${data.title}`);
        document.write("<hr>")
    }
)

console.log("fetch로 통신하기 끝");

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        for(var i in data){
            document.write("<h4>"+data[i].name+"</h4>" + ' : '+data[i].phone+' : '+data[i].email+"<br>");
        }
        
        console.log(data);
    
    })
    document.write("<hr>")
 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    document.write("<table border='1'>");
    document.write("<tr>");
    document.write("<th>이름</th><th>전화번호</th><th>이메일</th>");
    document.write("</tr>");
    for(var i in data){
        document.write("<tr>");
        document.write("<td>"+data[i].name+"</td><td>"+data[i].phone+"</td><td>"+data[i].email+"</td>");
        document.write("<tr>");
    }
    document.write("</table>");
    console.log(data);

})
//코드 줄이기
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    var output='';
    output += "<table border='1'>";
    output += "<tr>";
    output += "<th>이름</th><th>전화번호</th><th>이메일</th>";
    output += "</tr>";
    for(var i in data){
        output += "<tr>";
        output += "<td>"+data[i].name+"</td><td>"+data[i].phone+"</td><td>"+data[i].email+"</td>";
        output += "<tr>";
    }
    output+= "</table>";
    document.write(output);

    console.log(data);
})

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        var output='';
            output += "<table border='1'>";
            output += "<tr>";
            output += "<th>사용자 아이디</th><th>테이블</th><th>바디</th>";
            output += "</tr>";
            for(var i=0;i<10;i++){
                output += "<tr>";
                output += "<td>"+data[i].id+"</td><td>"+data[i].title+"</td><td>"+data[i].body+"</td>";
                output += "</tr>";
            }
            output+="</table>";
            document.write(output);
            console.log(data)
        

    })