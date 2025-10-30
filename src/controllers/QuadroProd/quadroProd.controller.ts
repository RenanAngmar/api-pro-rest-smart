import {  } from "@/mock/mockValues";
import { quadroMock } from "@/mock/quadroProducaoMock";
import { Request, Response } from "express";

export const quadroProd = (req: Request, res: Response) => {
  // Quadro de Produção
  return res.json(quadroMock);
};
