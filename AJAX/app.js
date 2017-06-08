var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var nada = document.getElementById("nada");
btn1.onclick=function () {
	requisitarArquivo("html.html",nada);	
};
btn2.onclick=function () {
	requisitarArquivo("html1.html",nada);
};
btn3.onclick=function () {
	requisitarArquivo("html3.html",nada);
};
btn4.onclick=function () {
	requisitarArquivo(nada);
};
