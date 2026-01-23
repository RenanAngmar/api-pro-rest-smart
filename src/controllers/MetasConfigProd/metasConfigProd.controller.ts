import { horasPermitidasTurno1, horasPermitidasTurno2, horasPermitidasTurno3, metasBuscaByConfigProd, metasConfigProd } from "@/mock/metasConfigProd";
import { Request, Response } from "express";

export const metasConfigProdController = (req: Request, res: Response) => {
  return res.json(metasConfigProd);
};
export const metasBuscaByIdConfigProdController = (req: Request, res: Response) => {
  return res.json(metasBuscaByConfigProd);
};

export const horasPermitidasConfigProdController = (req: Request, res: Response) => {
  console.log("req: ", req.query);
  let retornoListahoras: string[] = [];

  const {idMapa, idTurno} = req.query

  if (idMapa === '1' && idTurno ==='1') {
    retornoListahoras = horasPermitidasTurno1
  } else if (idMapa ==='1' && idTurno ==='2') {
    retornoListahoras = horasPermitidasTurno2
  } else if (idMapa ==='1' && idTurno ==='3') {
    retornoListahoras = horasPermitidasTurno3
  }

  return res.json(retornoListahoras);
};
