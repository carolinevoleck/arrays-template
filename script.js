const first = ["carol","caroline","carolzinha"];
const second = [1,2,3];
const third = ["julia", 7, true];
const room = [9];
const copy = first.push("carolinezinha");
const next = first.splice(2,3)
console.log(first.length);
console.log(first[2]);
console.log(third);
console.log(room);
console.log(copy);
console.log(first)


const newArray = [3,6,7,9,11];
const newArray2 = newArray.slice();
newArray2.splice(-1);
newArray2.push(6);
newArray2.splice(2);
console.log(newArray);
console.log(newArray2);

//Exercício 1 Exercício 2

const listOne = [7,5,3];
const listTwo = ["rosa", "rosa do deserto", "cacto"];
const listThree = [9, "mustang", false];
console.log(listOne.length)
console.log(listTwo.length)
console.log(listThree.length)
console.log(listOne[0])
console.log(listTwo[1])
console.log(listThree[2])
console.log(listOne.includes(7))
console.log(listThree.includes(true))

//Exercício 3

const arrayFilms = ["o invsivel", "titanic", "corridas clandestinas"];
const arrayFilmsCopia = arrayFilms.slice() //copia do elemento array
arrayFilms.unshift(2) //Adicione um item
console.log(arrayFilms)
console.log(arrayFilmsCopia)

const arraySerie = ["Prison break", "sintonia", "elite"];
const arraySerieCopia = arraySerie.slice()
arraySerie.pop() // Remove o último item
console.log(arraySerie)
console.log(arraySerieCopia)

const arrayComida = ["strogas", "lanche", "pizza"];
const arrayComidaCopia = arrayComida.slice()
//arrayComida.shift() Remover o primeiro elemento do array
arrayComida.splice(1,1) // O método splice recebe dois parâmetros, o primeiro é a posição no array e o segundo é a quantidade de elementos a remover.
console.log(arrayComida)
console.log(arrayComidaCopia)