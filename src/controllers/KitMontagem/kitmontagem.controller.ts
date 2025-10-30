import { kitmontagemListBacktree } from "@/mock/kitmontagemMock";
import { Request, Response } from "express";

export const kiAbertura = (req: Request, res: Response) => {
  return res.json(kitmontagemListBacktree);
};

export const kitporta = (req: Request, res: Response) => {
  return res.json({
    mensagem: "Sucesso!",
  });
};

export const kitstatusbalanca = (req: Request, res: Response) => {
  return res.json({
    mensagem: "Sucesso!",
  });
};

export const balancapeso = (req: Request, res: Response) => {
  console.log("Body fechar:", req.body);
  return res.json({
    peso: 0.123,
  });
};
