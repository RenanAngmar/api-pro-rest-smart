import { metasBuscaByConfigProd, metasConfigProd } from "@/mock/metasConfigProd";
import { } from "@/mock/mockValues";
import { Request, Response } from "express";

export const metasConfigProdController = (req: Request, res: Response) => {
  return res.json(metasConfigProd);
};
export const metasBuscaByIdConfigProdController = (req: Request, res: Response) => {
  return res.json(metasBuscaByConfigProd);
};
