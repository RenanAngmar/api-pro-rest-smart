import { validateQuery } from "./../../middlewares/validation/validateQuery";
import { Router } from "express";
import { iniciarEmbalagem } from "@/controllers/Embalagem/embalagem.controller";
import { queryEmbalagemAberturaSchema } from "@/validators/Embalagem/embalagemAbertura.validator";

export const embalagemRoutes = Router();

embalagemRoutes.get("/embalagemabertura",validateQuery(queryEmbalagemAberturaSchema),iniciarEmbalagem);
