import { Router } from "express";
import { quadroProd } from "@/controllers/QuadroProd/quadroProd.controller";

export const quadroProdRoutes = Router();
quadroProdRoutes.post("/quadroprod", quadroProd);