import { buscarResumoProd, montagemListMetaRealizado, montagemListMetaRealizadoOneEquip, operacoesResumoProd, turnoResumoProd } from '@/mock/mockValues';
import { Request, Response } from "express";


export const pesquisarResumoProd = (req: Request, res: Response) => {
  return res.json(buscarResumoProd);
};

export const listarOperacoes = (req: Request, res: Response) => {
  
  return res.json(operacoesResumoProd);
};

export const listarTurno = (req: Request, res: Response) => {
  return res.json(turnoResumoProd);
};