import { Router } from "express";
import { metasProdController } from "@/controllers/MetasProd/metasprod.controller";

export const metasProdRoutes = Router();
metasProdRoutes.post("/metasprod", metasProdController);