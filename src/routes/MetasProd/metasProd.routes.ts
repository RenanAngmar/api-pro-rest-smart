import { Router } from "express";
import { metasProdController } from "@/controllers/MetasProd/metasprod.controller";

export const metasProdRoutes = Router();
metasProdRoutes.get("/metasprod", metasProdController);
