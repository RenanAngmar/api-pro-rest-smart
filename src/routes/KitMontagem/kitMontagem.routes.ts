import { balancapeso, kitporta, kitstatusbalanca } from "@/controllers/KitMontagem/kitmontagem.controller";
import { Router } from "express";

export const kitMontagemRoutes = Router();

kitMontagemRoutes.post("/mockportacommock", kitporta);
kitMontagemRoutes.post("/mockstatusbalanca", kitstatusbalanca);
kitMontagemRoutes.post("/mockbalancapeso", balancapeso);