import { Request, Response, NextFunction } from "express";

/**
 * Classe base para erros customizados.
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly details?: any;

  constructor(message: string, statusCode = 500, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

/**
 * Middleware global para capturar e tratar erros.
 */
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Caso o erro seja do tipo AppError (erro esperado)
  if (err instanceof AppError) {
    console.warn(`⚠️  Erro controlado [${err.statusCode}]: ${err.message}`);

    return res.status(err.statusCode).json({
      sucesso: false,
      mensagem: err.message,
      detalhes: err.details || null,
    });
  }

  // Caso seja um erro inesperado
  console.error("❌ Erro não tratado:", err.stack);

  return res.status(500).json({
    sucesso: false,
    mensagem: "Erro interno do servidor",
  });
};