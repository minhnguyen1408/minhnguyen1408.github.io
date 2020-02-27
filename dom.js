var enter= document.getElementById("enter");
var input=document.getElementById("enterinput");
var ul=	document.querySelector("ul");

function aftercondition(){
	var newdiv=document.createElement("li");
	newdiv.appendChild(document.createTextNode(input.value));
	ul.appendChild(newdiv);
	input.value="";
}

enter.addEventListener("click",function(){
	if (input.value.trim().length>0){aftercondition()
	}
});	

input.addEventListener("keypress",function(){
	if (input.value.trim().length>0 && event.keyCode===13){
	aftercondition()}
});