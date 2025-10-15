import { Router } from "express";
import { listarOperacoes, listarTurno, pesquisarResumoProd } from "@/controllers/ResumoProd/resumoProd.controller";

export const ResumoProdRoutes = Router();

ResumoProdRoutes.get("/pesquisar", pesquisarResumoProd);
ResumoProdRoutes.post("/operacoes", listarOperacoes);
ResumoProdRoutes.post("/turno", listarTurno);

