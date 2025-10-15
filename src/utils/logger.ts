import chalk from "chalk";

const now = () =>
  new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

// Função auxiliar que formata objetos automaticamente
const format = (data: any): string => {
  if (typeof data === "object") {
    try {
      return "\n" + JSON.stringify(data, null, 2); // exibe objeto bonito
    } catch {
      return String(data);
    }
  }
  return String(data);
};

export const logger = {
  info: (...args: any[]) =>
    console.log(
      chalk.gray(`[${now()}]`),
      chalk.cyan.bold("[INFO]"),
      ...args.map(format)
    ),

  success: (...args: any[]) =>
    console.log(
      chalk.gray(`[${now()}]`),
      chalk.green.bold("[SUCCESS]"),
      ...args.map(format)
    ),

  warn: (...args: any[]) =>
    console.warn(
      chalk.gray(`[${now()}]`),
      chalk.yellow.bold("[WARN]"),
      ...args.map(format)
    ),

  error: (...args: any[]) =>
    console.error(
      chalk.gray(`[${now()}]`),
      chalk.red.bold("[ERROR]"),
      ...args.map(format)
    ),

  debug: (...args: any[]) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(
        chalk.gray(`[${now()}]`),
        chalk.magenta.bold("[DEBUG]"),
        ...args.map(format)
      );
    }
  },
};