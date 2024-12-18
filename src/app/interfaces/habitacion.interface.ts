import { Images } from "./images.interface";
import { Reserva } from "./reserva";

export default interface Habitacion {

    id: number;
    piso: number;
    puerta: number;
    mascotas: boolean;
    num_camas: string;
    categoria: string;
    precio: number;
    tamanho: string;
    vista: string;
<<<<<<< HEAD
    cocina: number;
    reserva_habitaciones: Reserva[];
    imagenes: Images[];
=======
    cocina: boolean
>>>>>>> feature_jc
}

export interface Details {
    category: string;
    detail: string;
}

export interface Features {
    icon: string;
    label: string;
}