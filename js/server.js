
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

app.post('/user', function(request, response) {
    // 변수를 선언합니다.
    var name = request.param('user_name');
    response.send(name);
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(52275, function() {
    console.log("server Running at http://127.0.0.1:52275");
});
//npm install espress@3.4.7