import dotenv from "dotenv";
dotenv.config(); // ✅ Carrega as variáveis do .env
import { app } from "../app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});