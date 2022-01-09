var canvas = document.createElement("canvas");  
//var cover = document.body;  
//canvas.id = "canvasLaLa2016";  
//document.body.appendChild(canvas);
//cover.insertBefore(canvas);  

var button = document.createElement("div");  
button.id = "snow-button";  
document.body.appendChild(button);
var image=document.createElement('img');

image.src=chrome.runtime.getURL("images/KevinDragon.png");

button.appendChild(image);

/*setTimeout(()=>{
	document.body.removeChild(button);
},5000);*/

$(document).on('click','#snow-button',function(){
	goTop();
	
	
});


function goTop(){
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$body.animate({
		scrollTop: 0
	}, 200);
}
