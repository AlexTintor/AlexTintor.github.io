
function change() {
    document.getElementById("div1").style.color = "chartreuse";
    $("body").attr("style", "background-color: rgb("+num1+","+num2+","+num3+")"); 
}
function comeback() {
	var num1 = Math.floor(Math.random() * (254 - 1)) + 1;
	var num2 = Math.floor(Math.random() * 254) + 1;
	var num3 = Math.floor(Math.random() * 254) + 1;
    document.getElementById("div1").style.color = "rgb("+num3+","+num1+","+num2+")";
}
function refreshall(precio) {
    var total  =  document.getElementById("total").value;

    var num = parseInt(total);
    num += parseInt(precio);

    document.getElementById("total").value = num.toString();

}
