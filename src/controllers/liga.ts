import { Request, Response } from 'express';

export const ligaController = {
  obtenerUnEquipoPorId: async (_: Request, res: Response) => {
    try {
      res.status(200).json({ ok: true, msg: 'Tu equipo obtenido por id' });
    } catch (error) {
      console.log(error);
    }
  },
};
