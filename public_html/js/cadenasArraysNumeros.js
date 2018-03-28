var semana = [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ], 
    meses = new Array( "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
    "Agosto", "Septiembre", "Octubre", "Noviemnbre", "Diciembre" ),
    nuevoArray,        
    convertirEnCadena,
    convertirEnArray;
    
console.log(semana, meses, meses.length, semana[3]); 

for( var i = 0; i < semana.length; i++ )
{
    document.write('<p>' + semana[i] + '</p>');
}

for( elemento in meses )
{
    document.write('<p>' + meses[elemento] + '</p>');
}

semana.pop(); //Elimina el último elemento de un array

console.log("Después de .pop() " + semana);

semana.push("Sábado"); //Añade un elemento al final de un array

console.log("Después de .push() " + semana);

semana.shift(); //Elimina el primer elemento de un array

console.log("Después de .shift() " + semana);

semana.unshift("Domingo"); //Añade un elemento al principio de un array

console.log("Después de .unshift() " + semana);

semana.reverse(); //Invierte un array

console.log("Después de .reverse() " + semana);

nuevoArray = semana.concat(meses); //Une dos arrays

console.log("Después de .concat() " + nuevoArray, nuevoArray.length);

convertirEnCadena = nuevoArray.join('-'); //Convierte un array es string separados por un separador

console.log("Después de .join() " + convertirEnCadena, typeof convertirEnCadena, convertirEnCadena.length);

convertirEnArray = convertirEnCadena.split('-');

console.log("Después de .split() " + convertirEnArray, typeof convertirEnArray, convertirEnArray.length);

