import { Router } from "express";
import {
  listarOperacoes,
  listarTurno,
  pesquisarResumoProd,
  resumoProdDetalhesController,
  resumoProdDetalhesEficienciaController,
} from "@/controllers/ResumoProd/resumoProd.controller";

export const ResumoProdRoutes = Router();

ResumoProdRoutes.get("/pesquisar", pesquisarResumoProd);
ResumoProdRoutes.get("/operacoes", listarOperacoes);
ResumoProdRoutes.get("/turno", listarTurno);
ResumoProdRoutes.get("/listarproddetalhes", resumoProdDetalhesController);
ResumoProdRoutes.get(
  "/listarproddetalheseficiencia",
  resumoProdDetalhesEficienciaController
);
