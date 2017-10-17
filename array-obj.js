/*Crear un arreglo de objetos con productos de variados tipos,
cada objeto debe tener como propiedad un name y un tipo,
queremos recorrer el arreglo y pushear a un nuevo arreglo
solo los objetos de productos de tipo computador. */

//Creamos un array con obj, con la lista de productos
var productos=[
	{
		name: "madensa",
		tipo: "estufa"
	},
	{
		name: "huawei",
		tipo: "telefono"
	},
	{
		name: "acer",
		tipo: "computador"
	},
	{
		name: "samsung",
		tipo: "computador"
	},
	{
		name: "cocacola",
		tipo: "bebida"
	},
	{
		name: "lenovo",
		tipo: "computador"
	}]

  /*Creamos una funcion, que dentro contiene un arreglo vacio,
	un for que vaya iterando por todo el arreglo,
	un if que seleccione cada tipo computador,
	luego pusheamos a al array vacio*/

	function newArray (arr){
		var compu = [];
		for(i=0; i<arr.length; i++){
			if(arr[i].tipo === "computador"){
				compu.push(arr[i]);
			}
		} return compu;	 

	}