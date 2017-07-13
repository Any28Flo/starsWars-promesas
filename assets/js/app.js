function getJson(url){
	return new Promise (function(resolve,error){
		var ajax = new XMLHttpRequest();
		ajax.open("GET", url);
		ajax.send();
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				var response = JSON.parse(ajax.responseText);
				resolve(response);
				console.log(response);

			}
		}
	})
}
getJson("https://swapi.co/api/people/1/")
	.then(function(resultado){return resultado.name})
	.then(function(nombre){console.log(nombre)})