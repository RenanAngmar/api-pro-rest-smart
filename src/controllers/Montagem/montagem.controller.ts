import { montagemListMetaRealizado, montagemListMetaRealizadoOneEquip } from '@/mock/mockValues';
import { Request, Response } from "express";


export const iniciarMontagem = (req: Request, res: Response) => {
  console.log("Body iniciar:", req.body);
  return res.json(montagemListMetaRealizadoOneEquip);
};

export const validarNs = (req: Request, res: Response) => {
  console.log("Body validarNs:", req.body);
  return res.json({ mensagem: "Sucesso!" });
};

export const fecharMontagem = (req: Request, res: Response) => {
  console.log("Body fechar:", req.body);
  return res.json(montagemListMetaRealizado);
};

