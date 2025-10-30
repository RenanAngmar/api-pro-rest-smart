import { buscarAtravessamentoMock, listaLinhaMock, listaPeriodoMock, listaSegmentoMock } from "@/mock/atravessamentoOpMock";
import {
} from "@/mock/mockValues";
import { Request, Response } from "express";

export const pesquisarAtravessamento = (req: Request, res: Response) => {
  console.log("Dados: ", req.query);
  return res.json(buscarAtravessamentoMock);
};

export const listarSegmento = (req: Request, res: Response) => {
  return res.json(listaSegmentoMock);
};

export const listarLinha = (req: Request, res: Response) => {
  return res.json(listaLinhaMock);
};

export const listarPeriodo = (req: Request, res: Response) => {
  return res.json(listaPeriodoMock);
};
