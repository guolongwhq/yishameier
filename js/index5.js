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

	 //抗衰传承选项卡
	 var kszcli=$("li",$(".kszcxx")[0]);
	 var kszc3=$(".kszc3");
	 // console.log(kszc3)
	 kszc3[0].style.display="block";
	 for(var i=0;i<kszcli.length;i++){
	 	kszcli[i].index=i;
	 	kszcli[i].onmouseover=function(){
	 		for(var i=0;i<kszc3.length;i++){
	 			kszc3[i].style.display="none";
	 		}
	 		kszc3[this.index].style.display="block";
	 	}
	 }


})