import { Request, Response } from "express";

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
