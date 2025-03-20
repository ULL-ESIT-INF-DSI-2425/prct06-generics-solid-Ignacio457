import { describe, expect, test } from "vitest";
import {Acciones, TipoAcciones, Logger} from "../src/basicFunctions";



describe("Loggeados ", () => {
    let logger = Logger.getLogger();
    let accion1: Acciones;
    let accion2: Acciones;
    let solucion: Acciones[];


    test("Agregar y buscar por nombre", () => {
        accion1 = ["Pepe", TipoAcciones.INICIO, new Date(100000000000)];
        logger.addItem(accion1);
	let solucion = logger.print();
        expect(solucion).toBe("Las acciones guardadas: Pepe,1,Sat Mar 03 1973 09:46:40 GMT+0000 (tiempo universal coordinado) undefined undefined");

    });



    test("Buscar por nombre", () => {
        logger.buscarPorNombre("Pepe");

        let solucion = logger.print();
        expect(solucion).toBe("Las acciones guardadas: Pepe,1,Sat Mar 03 1973 09:46:40 GMT+0000 (tiempo universal coordinado) undefined undefined");
    });

    test("Buscar por accion", () => {
       logger.buscarPorAccion(TipoAcciones.INICIO);

        let solucion = logger.print();
        expect(solucion).toBe("Las acciones guardadas: Pepe,1,Sat Mar 03 1973 09:46:40 GMT+0000 (tiempo universal coordinado) undefined undefined");

    });

    test("Buscar por accion", () => {
       logger.buscarPorTiempo(new Date(50000000000), new Date(150000000000));

        let solucion = logger.print();
        expect(solucion).toBe("Las acciones guardadas: Pepe,1,Sat Mar 03 1973 09:46:40 GMT+0000 (tiempo universal coordinado) undefined undefined");

    });

});
