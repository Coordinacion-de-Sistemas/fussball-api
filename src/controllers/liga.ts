import { Request, Response } from 'express';
import { PORT } from '../app';

export const ligaController = {
  obtenerTodosLosEquipos: async (_: Request, res: Response) => {
    try {
      res.status(200).json({ ok: true, msg: 'Todos los equipos', status: 200 });
    } catch (error) {
      console.log(error);
    }
  },
  obtenerUnEquipoPorId: async (_: Request, res: Response) => {
    try {
      res
        .status(200)
        .json({ ok: true, msg: 'Tu equipo obtenido por id', status: 200 });
    } catch (error) {
      console.log(error);
    }
  },
  obtenerUnEquipoPorNombre: async (_: Request, res: Response) => {
    try {
      res
        .status(200)
        .json({ ok: true, msg: 'Tu equipo obtenido por nombre', status: PORT });
    } catch (error) {
      console.log(error);
    }
  },
};
