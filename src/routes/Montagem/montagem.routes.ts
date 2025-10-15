import { Router } from "express";
import { fecharMontagem, iniciarMontagem, validarNs } from "@/controllers/Montagem/montagem.controller";


export const montagemRoutes = Router();

montagemRoutes.post("/iniciar", iniciarMontagem);
montagemRoutes.post("/fechar", fecharMontagem);
montagemRoutes.post("/validarns", validarNs);