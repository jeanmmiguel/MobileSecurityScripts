Java.perform(function(){
   var Clazz = Java.use("com.example.exampleapp.MainActivity");
   
   Clazz.['getValorSecreto'].overload('int','java.lang.String').implementation = function(param1,param2){
	console.log(param1);
	console.log(param2);

	return this.getValorSecreto(param1, param2);

   };
});
//referencia o metodo dentro de colchetes, caso queira hookar o metodo q tem caracteres especiais
