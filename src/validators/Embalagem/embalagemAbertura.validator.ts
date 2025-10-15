import { z } from "zod";

export const queryEmbalagemAberturaSchema = z.object({
  idPt: z.string().regex(/^\d+$/, "idPt deve ser numérico"),
  idUsr: z.string().regex(/^\d+$/, "idUsr deve ser numérico"),
  numeroSerie: z.string().min(1, "Número de série é obrigatório"),
});

export type AberturaQuery = z.infer<typeof queryEmbalagemAberturaSchema>;