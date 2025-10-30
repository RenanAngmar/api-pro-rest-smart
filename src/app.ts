import express, { Request, Response } from "express";
import cors from "cors";
import { montagemRoutes } from "./routes/Montagem/montagem.routes";
import { embalagemRoutes } from "./routes/Embalagem/embalagem.routes";
import { ResumoProdRoutes } from "./routes/Produtividade/produtividade.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { kitMontagemRoutes } from "./routes/KitMontagem/kitMontagem.routes";
import { quadroProdRoutes } from "./routes/QuadroProd/quadroProd.routes";
import { metasProdRoutes } from "./routes/MetasProd/metasProd.routes";
import { AtravessamentoRoutes } from "./routes/AtravessamentoOp/atravessamentoOp.routes";
import { metasConfigProdRoutes } from "./routes/MetasConfigProd/metasConfigProd.routes";
import { ordemProcessoRoutes } from "./routes/OrdemProcesso/ordemProcesso.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.set("etag", false);

// Rotas
app.use("/api/montagem", montagemRoutes);
app.use("/api/embalagem", embalagemRoutes);
app.use("/api/resumoprod", ResumoProdRoutes);
app.use("/api/kitmontagem", kitMontagemRoutes);
app.use("/api", quadroProdRoutes);
app.use("/api", metasProdRoutes);
app.use("/api/metasconfigprod", metasConfigProdRoutes);
app.use("/api/atravessamento", AtravessamentoRoutes);
app.use("/api/ordemprocesso", ordemProcessoRoutes);

app.use(errorHandler);

app.all("*", (req: Request, res: Response) => {
  res.status(405).json({
    success: false,
    message: `Método ${req.method} não permitido para a rota ${req.originalUrl}.`,
    hint: "Verifique se você está usando o método HTTP correto (GET, POST, PUT, DELETE)."
  });
});

export { app };