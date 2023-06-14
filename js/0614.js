//$.ajax(url,{options});
$.ajax('/data.xml',{
    success:function(data){
        console.log(data);
    }
});

$.ajax('/welcome.txt',{
    success:function(data){
        $('body').append(data);
    }
});

$.ajax('/data.json',{
    success:function(data){
        console.log(data);
    }
});

$.ajax({
    url:'/parameter',
    type:'GET',
    data:{
        name:'admin',
        region:'seoul'
    },
    success:function(data){
        $('data').appendTo('body');
    }
})

//load
$('#one').load('/0614_1data.html')
$('#two').load('/parameter?name=이순신&region=seoul')
$('#sam').load('/data.xml')