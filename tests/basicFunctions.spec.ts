import { describe, expect, test } from "vitest";
import { Collectable, Printable } from "../src/interfaces";
import { PrintableCollection, NumericPrintableCollection, Numeros } from "../src/basicFunctions";
import { NumericPrintableCollection } from "../src/coleccionNumero";
import { StringPrintableCollection } from "../src/coleccionString";

describe("Colección de numeros", () => {
  let coleccion = new NumericPrintableCollection;
  test("Agregar e imprimir", () => {
    coleccion.addItem(1);
    coleccion.addItem(2);
    coleccion.addItem(3);    
    expect(coleccion.print()).toStrictEqual("La coleccion de numeros basicos es: 1 2 3")
  });


  test("Eliminar e imprimir", () => {
    coleccion.addItem(1);
    coleccion.addItem(2);
    coleccion.addItem(3);
    coleccion.removeItem(3);
    expect(coleccion.print()).toStrictEqual("La coleccion de numeros basicos es: 1 2 1 2")
  });


  test("Numero de elementos e imprimir", () => {
    coleccion.addItem(1);
    coleccion.addItem(2);
    coleccion.addItem(3);
    let solucion = coleccion.getNumberOfItems();
    expect(solucion).toBe(7);
  });
  
  test("Posicion e imprimir", () => {
    coleccion.addItem(1);
    coleccion.addItem(2);
    let solucion = coleccion.getItem(0);
    expect(solucion).toBe(1);
  });


});


describe('StringPrintableCollection', () => {
  test('Agregar e imprimir', () => {
    const collection = new StringPrintableCollection();
    collection.addItem("hola");
    collection.addItem("mundo");
    collection.addItem("!");
    expect(collection.print()).toStrictEqual("La coleccion de cadenas es: hola mundo !");
  });

  test('Eliminar e imprimir', () => {
    const collection = new StringPrintableCollection();
    collection.addItem("uno");
    collection.addItem("dos");
    collection.addItem("tres");
    collection.removeItem("dos");
    expect(collection.print()).toStrictEqual("La coleccion de cadenas es: uno tres");
  });

  test('Obtener número de elementos', () => {
    const collection = new StringPrintableCollection();
    collection.addItem("a");
    collection.addItem("b");
    collection.addItem("c");
    expect(collection.getNumberOfItems()).toBe(3);
  });

  test('Obtener item por índice', () => {
    const collection = new StringPrintableCollection();
    collection.addItem("primero");
    collection.addItem("segundo");
    collection.addItem("tercero");
    expect(collection.getItem(1)).toBe("segundo");
    expect(collection.getItem(3)).toBeUndefined();
  });

  test('Remover item no existente no afecta la colección', () => {
    const collection = new StringPrintableCollection();
    collection.addItem("a");
    collection.addItem("b");
    collection.removeItem("c");
    expect(collection.getNumberOfItems()).toBe(2);
    expect(collection.print()).toStrictEqual("La coleccion de cadenas es: a b");
  });
});



