/**
 * Interfaz genérica para coleccionar
 * @template T Tipo genérico que especifica el tipo de los operandos y el resultado.
 */

export interface Collectable<T> {
    
    /**
    * @method addItem añade un elemento.
    * @param item - Elemento a añadir.
    */
     addItem(item: T): void;

    /**
    * @method getItem devuelve un elemento de la posicion indice.
    * @param indice - Posicion del elemento a devolver.
    * @returns devuelve el elemento de tipo T o undefined si no lo encuentra
    */
    getItem(indice: number): T | undefined;
    
     /**
    * @method removeItem remueve un elemento.
    * @param item - Elemento a eliminar.
    */
     removeItem(item: T): void;
    
     /**
    * @method getNumberOfItems ??? un elemento.
    * @param item - Elemento a ???.
    */
     getNumberOfItems(item: T): number;
}


/**
 * Interfaz genérica para imprimir
 * @template T Tipo genérico que especifica el tipo de los operandos y el resultado.
 */
export interface Printable {
    /**
   * @method print imprime una cadena de elementos.
   * @retun devuelve la cadena de caracteres.
   */
   print(): string;

}


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
        return this.items[indice]
    }

   /**
    * @method getNumberOfItems devuelve el numero de elementos.
    * @return el numero de elemntos
    */
    getNumberOfItems(): number {
      let iteraccion = 0;
      let auxiliar = this.items ;
      this.items.forEach((items) => {
        iteraccion++;
      });
      return iteraccion;
    }

  /**
   * @method print imprime una cadena de elementos.
   * @retun devuelve la cadena de caracteres.
   */
    abstract print(): string;
}


export class Numeros {
  constructor(public numero: number) {}
}


export class NumericPrintableCollection extends PrintableCollection<Numeros> {

  print(): string {
    let iteraccion = 0;
    let solucion = "La coleccion de numeros basicos es:";
    this.items.forEach((items) => {
      solucion = solucion + " " + this.items[iteraccion].numero;
      iteraccion++;
    });
    return solucion;
  }
}
