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
}

export interface Features {
    detail: string;
    icon: string;
    label: string
}