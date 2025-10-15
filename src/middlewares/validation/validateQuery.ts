import { Request, Response, NextFunction } from "express";
import { ZodType, infer as zInfer } from "zod";

export const validateQuery =
  <T extends ZodType>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.query);
    if (!parsed.success) {
      const errors = parsed.error.issues.map(i => ({
        field: i.path.join("."),
        message: i.message,
      }));
      return res.status(400).json({
        success: false,
        message: "Erro de validação nos parâmetros da query string.",
        errors,
      });
    }
    req.validated ??= {};
    req.validated.query = parsed.data as zInfer<T>;
    next();
  };