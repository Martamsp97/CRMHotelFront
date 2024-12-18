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
    cocina: boolean,
    imagenes: Imagen[];
}

export interface Imagen {
    id: number;
    ruta: string;
    habitaciones_id: number;
}
export interface Details {
    category: string;
    detail: string;
}

export interface Features {
    icon: string;
    label: string;
}