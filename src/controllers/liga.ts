import { Request, Response } from 'express';

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
      res.status(200).json({ ok: true, msg: 'Tu equipo obtenido por id' });
    } catch (error) {
      console.log(error);
    }
  },
  obtenerUnEquipoPorNombre: async (_: Request, res: Response) => {
    try {
      res.status(200).json({ ok: true, msg: 'Tu equipo obtenido por nombre' });
    } catch (error) {
      console.log(error);
    }
  },
};
