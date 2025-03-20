


export type Acciones = [string, TipoAcciones, Date];


export enum TipoAcciones {CERRAR, INICIO, ROMPER};


export class Logger {
    
    private loger: Acciones[];
    private static loggeado: Logger;

    private constructor( ) {
        this.loger = [];
    }


    public static getLogger(): Logger {
        if (!Logger.loggeado) {
            Logger.loggeado = new Logger();
        }
        return Logger.loggeado;
    }

    addItem(item: Acciones) {
        Logger.loggeado.loger.push(item);
    }

    buscarPorNombre(nombre: string): Acciones[] {
        return this.loger.filter(loger => loger[0] === nombre);
    }
 
    buscarPorAccion(accion: TipoAcciones): Acciones[] {
        return this.loger.filter(loger => loger[1] === accion);
    }

    buscarPorTiempo(fecha1: Date, fecha2: Date): Acciones[] {
        return this.loger.filter(loger => loger[2] >= fecha1 || loger[2] <= fecha2);
    }

    print(): string {
        let solucion = "Las acciones guardadas:";
        this.loger.forEach((loger) => { 
            solucion = solucion + " " + this.loger[0] + " " + this.loger[1] + " " + this.loger[2];
        });
        return solucion;
    }
}



// Haga que la clase Logger sea iterable.
