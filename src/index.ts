import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar('Ingresá una palabra:');
let claveTexto: string = preguntar('Ingresá la clave');
let accion: string = preguntar('¿Qué querés hacer? (cifrar/descifrar):');

let clave: number = Number(claveTexto)

let resultado: string = ''; {
    if (accion === "cifrar") {
    resultado = cifrar(palabra, clave);
    }
 else {
    resultado = descifrar(palabra, clave);
}
}

console.log(resultado);
