$(document).ready(function(){

	$("#titulo").click(function(){
		$(this).hide();
	})
	
	$("#boton").click(function(){
		console.log("funciona"); //Se imprime "funciona" en la consola
		
		$("#titulo").show(); //Reaparece el titulo

		$("#e1").fadeToggle();
		$("#e2").fadeToggle(500);
		$("#e3").fadeToggle(2000);
		
		


		//Comentarios para recordar dunciones, no es necesario leer

		//Aparece y desaparece cuando se manda la accion, en este caso cuando se presiona el boton
		//$("#e2").fadeToggle(2000);//Aparece y desaparece cuando se manda la accion, en este caso cuando se presiona el boton
		//$("#e3").fadeToggle();
		//$("#e3").fadeIn();

		//$("#e1").fadeTo("slow", 0.20);

		 //$("#e1").fadeOut(3000);
		 //$("#e2").fadeOut(8000);
		 //$("#e3").fadeOut(12000);
		 

	})

	$("#color").click(function(){
		var num1 = Math.floor(Math.random() * (254 - 1)) + 1;//De esta linea hasta el siguiente comentario, se crea numeros randoms ---->
		var num2 = Math.floor(Math.random() * 254) + 1;
		var num3 = Math.floor(Math.random() * 254) + 1;//	<-----
		console.log(num1);//De esta linea hasta el siguiente comentario se imprime en la consola los nueros ---->
		console.log(num2);
		console.log(num3);//	<----
		$("body").attr("style", "background-color: rgb("+num1+","+num2+","+num3+")"); //Aquí se cambia el atributo "style" del body y se cambia el color de fondo
	})


	$("#lista").click(function(){
		$("#contenido").slideToggle("slow");
	})

})