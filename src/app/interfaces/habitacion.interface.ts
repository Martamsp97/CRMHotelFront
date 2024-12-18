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
    cocina: boolean
}

export interface Details {
    category: string;
    detail: string;
}

export interface Features {
    icon: string;
    label: string;
}