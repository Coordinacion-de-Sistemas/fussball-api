import { Equipo } from './equipo.interface';

export interface Liga {
  nombre: string;
  logo: string;
  pais: string;
  equipos: Array<Equipo>;
}
