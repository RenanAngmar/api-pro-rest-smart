import { Router } from "express";
import { matrizesProcessoController } from "@/controllers/MatrizesEmProcesso/matrizesProcesso.controller";

export const matrizesProcessoRoutes = Router();
matrizesProcessoRoutes.get("/pesquisar", matrizesProcessoController);
