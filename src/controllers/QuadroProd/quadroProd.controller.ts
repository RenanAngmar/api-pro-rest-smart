import { quadroMock } from "@/mock/mockValues";
import { Request, Response } from "express";

export const quadroProd = (req: Request, res: Response) => {
  // Quadro de Produção
  return res.json(quadroMock);
};
