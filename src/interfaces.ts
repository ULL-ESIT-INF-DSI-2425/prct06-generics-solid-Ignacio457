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

