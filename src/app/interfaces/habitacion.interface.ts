import { Images } from "./images.interface";
import { Reserva } from "./reserva";

export default interface Habitacion {

    id: number;
    piso: number;
    puerta: number;
    mascotas: number;
    num_camas: string;
    categoria: string;
    precio: number;
    tamanho: string;
    vista: string;
    cocina: number;
    reserva_habitaciones: Reserva[];
    imagenes: Images[];
}

export interface Details {
    category: string;
    detail: string;
}

export interface Features {
    icon: string;
    label: string;
}