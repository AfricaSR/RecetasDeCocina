import { Review } from './review';

export class Receta {
    $key: string;
    titulo: string;
    preparacion: string;
    ingredientes: string;
    imagen: string;
    comentarios: Array<Review>;

}
