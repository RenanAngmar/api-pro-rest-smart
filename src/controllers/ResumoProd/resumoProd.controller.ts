import { buscarResumoProdMock, montagemListMetaRealizado, montagemListMetaRealizadoOneEquip, operacoesResumoProd, turnoResumoProd } from '@/mock/mockValues';
import { logger } from '@/utils/logger';
import { Request, Response } from "express";


export const pesquisarResumoProd = (req: Request, res: Response) => {
  // logger.info("Req: ", req.query)
  console.log("Teste: ", req.query);
  
  return res.json(buscarResumoProdMock);
};

export const listarOperacoes = (req: Request, res: Response) => {
  
  return res.json(operacoesResumoProd);
};

export const listarTurno = (req: Request, res: Response) => {
  return res.json(turnoResumoProd);
};