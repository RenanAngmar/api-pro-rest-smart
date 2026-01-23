import { Router } from "express";
import { horasPermitidasConfigProdController, metasBuscaByIdConfigProdController, metasConfigProdController } from "@/controllers/MetasConfigProd/metasConfigProd.controller";

export const metasConfigProdRoutes = Router();
metasConfigProdRoutes.get("/pesquisar", metasConfigProdController);
metasConfigProdRoutes.get("/pesquisarbyid", metasBuscaByIdConfigProdController);
metasConfigProdRoutes.get("/listahoraspermitidas", horasPermitidasConfigProdController);