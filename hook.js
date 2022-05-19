Java.perform(function(){
   var Clazz = Java.use("com.example.exampleapp.MainActivity");
   
   Clazz.metodoSimples.implementation = function(parametro1){
	console.log("Parametro1: " + parametro1);
	
	 var retorno_original = this.metodoSimples(parametro1);

	 console.log("O retorno original do metodoSimples e: " + retorno_original);

	return 2;
   };
});
