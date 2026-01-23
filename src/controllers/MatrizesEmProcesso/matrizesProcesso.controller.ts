import { buscarMatrizesMock } from "@/mock/matrizesProcessoMock";
import { } from "@/mock/montagemMock";
import { Request, Response } from "express";

export const matrizesProcessoController = (req: Request, res: Response) => {
  return res.json(buscarMatrizesMock);
};
