//hoy voy a gastar mi día tratando de aprender como funciona este método.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersAfterReduce = numbers.reduce( 
    (acc, index) => acc + index
)   //esta variable es = 55, que es la suma de todos los elementos del array 

let sesenta = numbers.reduce(
    (acc, index) => acc + index, 5
)   //el 5 final es un valor inicial, el nuevo valor es = 60

let oracionDesordenada = ["Juan.", "llamo ", "Me "];

let oracionOrdenada = oracionDesordenada.reduceRight(
    (acc, index) => acc.concat(index)
)   // Salida esperada: Me llamo Juan.
