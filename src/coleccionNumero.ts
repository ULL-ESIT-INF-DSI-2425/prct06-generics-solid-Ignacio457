import { Collectable, Printable } from "../src/interfaces";
import { PrintableCollection, Numeros } from "../src/basicFunctions";



export class NumericPrintableCollection extends PrintableCollection<number> {

  print(): string {
    let iteraccion = 0;
    let solucion = "La coleccion de numeros basicos es:";
    this.items.forEach((items) => {
      solucion = solucion + " " + this.items[iteraccion];
      iteraccion++;
    });
    return solucion;
  }
}

