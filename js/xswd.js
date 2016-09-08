$(function(){

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