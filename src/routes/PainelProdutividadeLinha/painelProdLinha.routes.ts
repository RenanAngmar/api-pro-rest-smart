import { Router } from "express";
import { pesquisarPainelResumoProd } from "@/controllers/PainelResumoProd/painelResumoProd.controller";

export const PainelResumoProdRoutes = Router();

PainelResumoProdRoutes.get("/pesquisar", pesquisarPainelResumoProd);

