import { Router } from 'express';
import { ligaController } from '../controllers/liga';

const router = Router();

// http://localhost:4001/api/liga/equipos [GET]
router.get('/equipos', ligaController.obtenerTodosLosEquipos);

// http://localhost:4001/api/liga/equipo/:id [GET]
router.get('/equipo/:id', ligaController.obtenerUnEquipoPorId);

// http://localhost:4001/api/liga/equipo/nombre/:nombre [GET]
router.get('/equipo/nombre/:nombre', ligaController.obtenerUnEquipoPorNombre);

export default router;
