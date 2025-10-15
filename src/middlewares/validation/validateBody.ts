import { Request, Response, NextFunction } from "express";
import { ZodType, infer as zInfer } from "zod";

export const validateBody =
  <T extends ZodType>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map(i => ({
        field: i.path.join("."),
        message: i.message,
      }));
      return res.status(400).json({
        success: false,
        message: "Erro de validação no corpo da requisição.",
        errors,
      });
    }
    req.validated ??= {};
    req.validated.body = parsed.data as zInfer<T>;
    next();
  };