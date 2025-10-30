import {
} from "@/mock/mockValues";
import { buscarResumoProdMock, listaDetalhesProdEficienciaMock, listaDetalhesProdMock, operacoesResumoProd, turnoResumoProd } from "@/mock/resumoProdMock";
import { logger } from "@/utils/logger";
import { Request, Response } from "express";

export const pesquisarResumoProd = (req: Request, res: Response) => {
  return res.json(buscarResumoProdMock);
};

export const listarOperacoes = (req: Request, res: Response) => {
  return res.json(operacoesResumoProd);
};

export const listarTurno = (req: Request, res: Response) => {
  return res.json(turnoResumoProd);
};

export const resumoProdDetalhesController = (req: Request, res: Response) => {
  return res.json(listaDetalhesProdMock);
};

export const resumoProdDetalhesEficienciaController = (
  req: Request,
  res: Response
) => {
  return res.json(listaDetalhesProdEficienciaMock);
};
