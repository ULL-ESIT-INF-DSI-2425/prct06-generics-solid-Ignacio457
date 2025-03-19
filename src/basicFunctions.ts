import { Collectable, Printable } from "../src/interfaces";



export abstract class PrintableCollection<T> implements Collectable<T>, Printable {

    protected items: T[];

   /**
   * @param items - Array que almacena los elementos de la colección.
   */
    constructor() {
      this.items = [];
    }

    /**
    * @method addItem añade un elemento.
    * @param item - Elemento a añadir.
    */
    addItem(item: T): void {
        this.items.push(item);
    }

    /**
    * @method getItem devuelve un elemento de la posicion indice.
    * @param indice - Posicion del elemento a devolver.
    * @returns devuelve el elemento de tipo T o undefined si no lo encuentra
    */
    removeItem(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

   /**
    * @method removeItem remueve un elemento.
    * @param item - Elemento a eliminar.
    */
    getItem(indice: number): T | undefined {
        return this.items[indice];
    }

   /**
    * @method getNumberOfItems devuelve el numero de elementos.
    * @return el numero de elemntos
    */
    getNumberOfItems(): number {
      return this.items.length;
    }

  /**
   * @method print imprime una cadena de elementos.
   * @retun devuelve la cadena de caracteres.
   */
    abstract print(): string;
}



