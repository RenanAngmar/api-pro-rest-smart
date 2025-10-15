import { Router } from "express";
import { listarOperacoes, listarTurno, pesquisarResumoProd } from "@/controllers/ResumoProd/resumoProd.controller";

export const ResumoProdRoutes = Router();

ResumoProdRoutes.get("/pesquisar", pesquisarResumoProd);
ResumoProdRoutes.get("/operacoes", listarOperacoes);
ResumoProdRoutes.get("/turno", listarTurno);

