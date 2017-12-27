
//查询cookie
function getCookie(name){
	var str = document.cookie;
	//因为获取的是以； 分格的
	var arr = str.split("; ");
	for(var i=0; i<arr.length; i++){
		var arr1 = arr[i].split("=");
		if(arr1[0] == name){
			return arr1[1];
		}
	}
}

//修改cookie

function setCookie(name,value,date){
	var oDate = new Date();
	oDate.setDate( oDate.getDate()+date);
	
	document.cookie = name + "=" + value + ";expires=" + oDate;
	
}

//删除cooki 

function removeCookie(name){
	setCookie(name,1,-1);
	
}
