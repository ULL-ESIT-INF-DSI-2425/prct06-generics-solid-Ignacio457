import { describe, expect, test } from "vitest";
import { Collectable, Printable, PrintableCollection, NumericPrintableCollection, Numeros } from "../src/basicFunctions";


describe("Colección de numeros", () => {
  let coleccion = new NumericPrintableCollection;
  test("Agregar e imprimir", () => {
    coleccion.addItem(new Numeros(1));
    coleccion.addItem(new Numeros(2));
    coleccion.addItem(new Numeros(3));    
    expect(coleccion.print()).toStrictEqual("La coleccion de numeros basicos es: 1 2 3")
  });


  test("Eliminar e imprimir", () => {
    coleccion.addItem(new Numeros(1));
    coleccion.addItem(new Numeros(2));
    coleccion.addItem(new Numeros(3));
    coleccion.removeItem(new Numeros(3));
    expect(coleccion.print()).toStrictEqual("La coleccion de numeros basicos es: 1 2 3 1 2 3")
  });


  test("Numero de elementos e imprimir", () => {
    coleccion.addItem(new Numeros(1));
    coleccion.addItem(new Numeros(2));
    coleccion.addItem(new Numeros(3));
    let solucion = coleccion.getNumberOfItems();
    expect(solucion.numero).toBe(undefined);
  });
  
  test("Posicion e imprimir", () => {
    coleccion.addItem(new Numeros(1));
    coleccion.addItem(new Numeros(2));
    let solucion = coleccion.getItem(1);
    expect(solucion.numero).toBe(2);
  });


});


