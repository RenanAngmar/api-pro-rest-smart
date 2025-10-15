import { metasProducao } from "@/mock/mockValues";
import { Request, Response } from "express";

export const metasProdController = (req: Request, res: Response) => {
  return res.json(metasProducao);
};
