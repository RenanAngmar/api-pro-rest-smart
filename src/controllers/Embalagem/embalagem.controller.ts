import { embalagemAberturaMock } from '@/mock/embalagemMock';
import { logger } from '@/utils/logger';
import { AberturaQuery } from '@/validators/Embalagem/embalagemAbertura.validator';
import { Request, Response } from "express";


export const iniciarEmbalagem = (req: Request, res: Response) => {
  const { idPt, idUsr, numeroSerie } = (req.validated?.query as AberturaQuery);

  logger.info(`Embalagem iniciada | idPt=${idPt} | idUsr=${idUsr} | Serie=${numeroSerie}`);
  
  return res.json(embalagemAberturaMock);
};