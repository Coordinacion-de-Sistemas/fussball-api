import { Request, Response } from 'express';

export const ligaController = {
  obtenerTodosLosEquipos: async (_: Request, res: Response) => {
    try {
      res.status(200).json({ ok: true, msg: 'Todos los equipos', status: 200 });
    } catch (error) {
      console.log(error);
    }
  },
};
