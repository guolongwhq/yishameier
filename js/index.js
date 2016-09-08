$(function(){

	//一楼动效
	var one=$(".one")[0];
	var onea=$("a",$(".one")[0]);
	// console.log(oneas)
	onea[0].style.display="block";
	one.onmouseover=function(){
		onea[0].style.display="block";
		onea[1].style.display="none";
	}
	one.onmouseout=function(){
		onea[1].style.display="block";
		onea[0].style.display="none";
	}

	//二楼动效
	var two=$(".two")[0];
	var twoa=$("a",$(".two")[0]);
	// console.log(oneas)
	twoa[0].style.display="block";
	two.onmouseover=function(){
		twoa[0].style.display="block";
		twoa[1].style.display="none";
	}
	two.onmouseout=function(){
		twoa[1].style.display="block";
		twoa[0].style.display="none";
	}

	//三楼动效
	var three=$(".three")[0];
	var threea=$("a",$(".three")[0]);
	// console.log(oneas)
	threea[0].style.display="block";
	three.onmouseover=function(){
		threea[0].style.display="block";
		threea[1].style.display="none";
	}
	three.onmouseout=function(){
		threea[1].style.display="block";
		threea[0].style.display="none";
	}

	//四楼动效
	var hour=$(".hour")[0];
	var houra=$("a",$(".hour")[0]);
	// console.log(oneas)
	houra[0].style.display="block";
	hour.onmouseover=function(){
		houra[0].style.display="block";
		houra[1].style.display="none";
	}
	hour.onmouseout=function(){
		houra[1].style.display="block";
		houra[0].style.display="none";
	}

	//五楼动效
	var five=$(".five")[0];
	var fivea=$("a",$(".five")[0]);
	// console.log(oneas)
	fivea[0].style.display="block";
	five.onmouseover=function(){
		fivea[0].style.display="block";
		fivea[1].style.display="none";
	}
	five.onmouseout=function(){
		fivea[1].style.display="block";
		fivea[0].style.display="none";
	}

	//六楼动效
	var six=$(".six")[0];
	var sixa=$("a",$(".six")[0]);
	// console.log(oneas)
	sixa[0].style.display="block";
	six.onmouseover=function(){
		sixa[0].style.display="block";
		sixa[1].style.display="none";
	}
	six.onmouseout=function(){
		sixa[1].style.display="block";
		sixa[0].style.display="none";
	}

	//七楼动效
	var seven=$(".seven")[0];
	var sevena=$("a",$(".seven")[0]);
	// console.log(oneas)
	sevena[0].style.display="block";
	seven.onmouseover=function(){
		sevena[0].style.display="block";
		sevena[1].style.display="none";
	}
	seven.onmouseout=function(){
		sevena[1].style.display="block";
		sevena[0].style.display="none";
	}

	//八楼动效
	var eight=$(".eight")[0];
	var eighta=$("a",$(".eight")[0]);
	// console.log(oneas)
	eighta[0].style.display="block";
	eight.onmouseover=function(){
		eighta[0].style.display="block";
		eighta[1].style.display="none";
	}
	eight.onmouseout=function(){
		eighta[1].style.display="block";
		eighta[0].style.display="none";
	}

	 
	 //按需加载
	 var ch=document.documentElement.clientHeight;
	 var floor=$(".floor");
	 // console.log(floor)
	 var arr=[];
	 for(var i=0;i<floor.length;i++){
	 	arr.push(floor[i].offsetTop);
	 }
	 var jumpli=$("li",$(".jump")[0]);
	 var jumplizi2=$(".jumplizi2",$(".jump")[0]);
	 // console.log(jumpli)

	 var flag=true;

	 jumplizi2[0].style.display="block";

	 //楼层按钮选项卡
	 for(var i=0;i<jumpli.length;i++){
	 	jumpli[i].index=i;
	 	jumpli[i].onclick=function(){	 		
	 		flag=false;
	 		for(var i=0;i<jumplizi2.length;i++){
	 			jumplizi2[i].style.display="none";
	 		}
	 		jumplizi2[this.index].style.display="block";

	 		animate(document.body,{scrollTop:arr[this.index]},function(){
	 			flag=true;
	 		})
	 		animate(document.documentElement,{scrollTop:arr[this.index]},function(){
	 			flag=true;
	 		})
	 	}	 	
	 }


	 window.onscroll=function(){
	 	var obj=document.body.scrollTop?document.body:document.documentElement;
	 	var scrolltop=obj.scrollTop;
	 	if(!flag) return;
	 	for(var i=0;i<floor.length;i++){
	 		if(ch+scrolltop>=arr[i]+200){
	 			for(var j=0;j<jumplizi2.length;j++){
	 				jumplizi2[j].style.display="none";
		 		}
		 		jumplizi2[i].style.display="block";
	 		}
	 	}
	 }



	 //导航选项卡
	 var swpza=$(".swpza");
	 var swpzs=$(".swpzs");
	 // console.log(swpzs)
	 for(var i=0;i<swpza.length;i++){
	 	swpza[i].index=i;
	 	swpza[i].onmouseover=function(){
	 		for(var i=0;i<swpzs.length;i++){
	 			swpzs[i].style.display="none";
	 		}
	 		swpzs[this.index].style.display="block";
	 	}
	 	swpza[i].onmouseout=function(){
	 		for(var i=0;i<swpzs.length;i++){
	 			swpzs[i].style.display="none";
	 		}
	 		swpzs[this.index].style.display="none";
	 	}
	 }


})