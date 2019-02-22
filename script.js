document.getElementById("demo").innerHTML = "Hello JavaScript";
var count = 1;
function changecontent(){
	var text = "value of the tesxt";
	document.getElementById("demo").innerHTML = "content changed from function";	
	console.log("Thkis is a asmple debiug satementn: "+text);
	alert("radha");
}

function mouseover(){
	console.log("mouse over "+count+ " times");
	count = count + 1;
}