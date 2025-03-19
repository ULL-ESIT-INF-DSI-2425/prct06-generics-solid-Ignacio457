import { Collectable, Printable } from "../src/interfaces";
import { PrintableCollection, NumericPrintableCollection, Numeros } from "../src/basicFunctions";


export class StringPrintableCollection extends PrintableCollection<string> {
  print(): string {
    let resultado = "La coleccion de cadenas es:";
    this.items.forEach(item => {
      resultado += " " + item;
    });
    return resultado;
  }
}


