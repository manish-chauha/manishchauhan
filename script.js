let tableof=document.getElementById('tableof'); //5
let upto=document.getElementById('upto'); //10
let btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
	for(i=1;i<=upto.value;i++){
		document.write(tableof.value  + "X"+i+"="+(tableof.value*i)+"<br>");
	}
})