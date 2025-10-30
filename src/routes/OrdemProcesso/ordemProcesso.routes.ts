import { Router } from "express";
import { listarLinhaController, pesquisarOrdemController } from "@/controllers/OrdemProcesso/ordemProcesso.controller";

export const ordemProcessoRoutes = Router();
ordemProcessoRoutes.get("/pesquisarordem", pesquisarOrdemController);
ordemProcessoRoutes.get("/listarlinha", listarLinhaController);
