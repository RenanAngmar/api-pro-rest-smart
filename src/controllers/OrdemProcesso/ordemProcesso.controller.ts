import { listaLinhaMock } from "@/mock/atravessamentoOpMock";
import {
} from "@/mock/mockValues";
import { buscarOrdemProcessoMock } from "@/mock/ordemProcessoMock";
import { Request, Response } from "express";

export const pesquisarOrdemController = (req: Request, res: Response) => {
  console.log("Dados: ", req.query);
  return res.json(buscarOrdemProcessoMock);
};

export const listarLinhaController = (req: Request, res: Response) => {
  return res.json(listaLinhaMock);
};
