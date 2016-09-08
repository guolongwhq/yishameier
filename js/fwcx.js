$(function(){
	var btnr=$(".btnr")[0];
	var input=$("input",$(".tishi")[0]);
	btnr.onclick=function(){
		var val=input[0].value;
		console.log(val)
		if(val==0){
			alert("防伪码第一格不能为空");
		}		
	}
})