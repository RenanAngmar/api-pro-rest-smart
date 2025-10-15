import { Router } from "express";
import { listarLinha, listarPeriodo, listarSegmento, pesquisarAtravessamento } from "@/controllers/AtravessamentoOp/atravessamentoOp.controller";

export const AtravessamentoRoutes = Router();

AtravessamentoRoutes.get("/pesquisar", pesquisarAtravessamento);
AtravessamentoRoutes.get("/segmento", listarSegmento);
AtravessamentoRoutes.get("/linha", listarLinha);
AtravessamentoRoutes.get("/periodo", listarPeriodo);

