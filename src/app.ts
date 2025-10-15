import express from "express";
import cors from "cors";
import { montagemRoutes } from "./routes/Montagem/montagem.routes";
import { embalagemRoutes } from "./routes/Embalagem/embalagem.routes";
import { ResumoProdRoutes } from "./routes/Produtividade/produtividade.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { kitMontagemRoutes } from "./routes/KitMontagem/kitMontagem.routes";
import { quadroProdRoutes } from "./routes/QuadroProd/quadroProd.routes";
import { metasProdRoutes } from "./routes/MetasProd/metasProd.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/montagem", montagemRoutes);
app.use("/api/embalagem", embalagemRoutes);
app.use("/api/resumoprod", ResumoProdRoutes);
app.use("/api", kitMontagemRoutes);
app.use("/api", quadroProdRoutes);
app.use("/api", quadroProdRoutes);
app.use("/api", metasProdRoutes);
app.use(errorHandler);

export { app };