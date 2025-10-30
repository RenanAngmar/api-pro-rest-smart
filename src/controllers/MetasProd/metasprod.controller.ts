import { metasProducao } from "@/mock/metasProd";
import {  } from "@/mock/mockValues";
import { } from "@/mock/montagemMock";
import { Request, Response } from "express";

export const metasProdController = (req: Request, res: Response) => {
  return res.json(metasProducao);
};
