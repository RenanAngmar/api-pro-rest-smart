import { painelDadosResumoProd, painelReal } from "@/mock/painelResumoProdMock";
import { logger } from "@/utils/logger";
import { Request, Response } from "express";

export const pesquisarPainelResumoProd = (req: Request, res: Response) => {
  // return res.json(painelDadosResumoProd);
  return res.json(painelReal);
};
