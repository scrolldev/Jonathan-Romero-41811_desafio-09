import './css/style.css'

/* 1. */
/* --------------------------------------------------------------- */

/* const frutas = ["banana", "naranja", "pomelo", "mandarina", "uva"]

const ultimaFruta = frutas.pop();
console.log("Se elimino la ultima fruta:");
console.log(ultimaFruta);

frutas.push("mango");
console.log(frutas);
 */

/* 2. */
/* --------------------------------------------------------------- */

/* const listaDeTareas = ["ir al super", "Sacar a pasear al perro", "Darle de comer a los peces"];

const tareaCompletada = listaDeTareas.shift();
console.log(`Tarea completada: ${tareaCompletada}`);

listaDeTareas.unshift("ir a cenar");
console.log(listaDeTareas);
 */

/* 3. */
/* --------------------------------------------------------------- */

/* const clientes = ["Jonathan","Javier","Nadia",];
console.log(clientes);

clientes.push("Mia", "Maya");

console.log("Fila actualizada:", clientes);

const clienteAtendido = clientes.shift()
console.log(`Primer cliente atendido: ${clienteAtendido}`); */

/* 4. */
/* --------------------------------------------------------------- */

/* const numeros = [10, 20, 30, 40, 50];
console.log(`Array original: ${numeros}`);

console.log(`------------------------------------------`);


for (let i = 0; i < 3; i++) {
  
  let ultimoNumero = numeros.pop();
  
  numeros.unshift(ultimoNumero);
  
  console.log(`Array después de la rotación ${i + 1}:`, numeros);
} */

/* 5. */
/* --------------------------------------------------------------- */

/* const carrito = [];

for (let i = 0; i < 3; i++) {
  
  const productos = prompt(`Introdusca el producto Nº ${i + 1}`);

  carrito.push(productos);
  console.log(carrito);
}

console.log("Carrito completo:", carrito);
console.log(`------------------------------------------`);

const eliminar = confirm("¿Deseas eliminar el último producto agregado?");

if (eliminar) {
  let productoEliminado = carrito.pop();
  console.log(`Producto eliminado: ${productoEliminado}`);
}

console.log("Carrito completo:", carrito); */


/* Resolver según corresponda y según lo indicado. */

/* 6. */
/* --------------------------------------------------------------- */

/* const valores = [1, 2, 3, 4, 5];

const dobles = valores.map(valor => valor * 2);

console.log(dobles); */

/* 7. */
/* --------------------------------------------------------------- */

/* const nombres = ["jonathan", "javier", "pedro"];

const todoMayuscula = nombres.map(nombre => nombre.toUpperCase());

console.log(todoMayuscula); */

/* 8. */
/* --------------------------------------------------------------- */

/* const precios = [100, 200, 300];

const preciosConIva = precios.map(precio => (precio * 1.21));

console.log(preciosConIva); */

/* 9. */
/* --------------------------------------------------------------- */

/* const numeros = [1,2,3,4,5,6,7,8,9,10];

const cuadrado = numeros.map(numero => numero * numero);

console.log(cuadrado);
 */

/* 10. */
/* --------------------------------------------------------------- */

/* const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const pares = numeros.filter(numero => numero %2 == 0);

console.log(pares); */

/* 11. */
/* --------------------------------------------------------------- */

/* const palabras = ["manzana", "pera", "banana", "melon", "mandarina", "sandia", "uva"];

const masDeCinco = palabras.filter(palabra => palabra.length > 5);

console.log(masDeCinco);
*/

/* 12. */
/* --------------------------------------------------------------- */

/* const productos = [
    { nombre: 'TV', precio: 800 },
    { nombre: 'Celular', precio: 300 },
    { nombre: 'Notebook', precio: 1200 },
    { nombre: 'Teclado', precio: 150 },
    { nombre: 'Mouse', precio: 100}
];

const enOferta = productos.filter(producto => producto.precio < 500);

console.log(enOferta);
 */

/* 13. */
/* --------------------------------------------------------------- */

/* const estudiantes = [
  { nombre: 'Jonathan', nota: 6 },
  { nombre: 'Nadia', nota: 8 },
  { nombre: 'Maya', nota: 5 },
  { nombre: 'Mia', nota: 9 },
  { nombre: 'Amalia', nota: 7 }
];

const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 7);

console.log(aprobados); */

/* 14. */
/* --------------------------------------------------------------- */

/* const tareas = [
  {description: "Comer", completada: true},
  {description: "Saltar", completada: false},
  {description: "Correr", completada: true},
  {description: "Caminar", completada: false},
  {description: "Jugar", completada: true}
];

const completadas = tareas.filter(tarea => tarea.completada == true);

console.log(completadas);
 */

/* 15. */
/* --------------------------------------------------------------- */

/* const nombres = ['Jona', 'Carla', 'Jose', 'Roberto', 'Jorge'];

nombres.forEach(nombre => console.log(nombre));
 */

/* 16. */
/* --------------------------------------------------------------- */

/* let sumaEdades = 0;

const edades = [18, 20, 24, 30, 39, 43, 50];

edades.forEach(edad => { sumaEdades += edad });

console.log(sumaEdades); */

/* 17. */
/* --------------------------------------------------------------- */

/* const productos = [
  {nombre: "Notebook", precio: 950},
  {nombre: "Mouse", precio: 80},
  {nombre: "Teclado", precio: 120},
  {nombre: "Monitor", precio: 700},
  {nombre: "Parlantes", precio: 50}
];

productos.forEach(producto => producto.precio = producto.precio * 0.90);

console.log(productos); */

/* 18. */
/* --------------------------------------------------------------- */

/* const invitados = ['Jonathan', 'Carla', 'Jose', 'Roberto', 'Jorge'];

invitados.forEach(invitado => console.log(`La invitacion fue enviada a ${invitado}`)); */

/* FIN */








