Java.perform(function(){
   var Clazz = Java.use("com.example.exampleapp.MainActivity");
   
   Clazz.getValorSecreto.overload('int','java.lang.String').implementation = function(param1,param2){
	console.log(param1);
	console.log(param2);

	return this.getValorSecreto(param1, param2);

   };
});
//overload de funcao quando tem duas funcoes com o mesmo nome .overload'',''(.implementations)
