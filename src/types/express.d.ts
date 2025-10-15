import "express";

declare module "express-serve-static-core" {
  interface Request {
    validated?: {
      query?: unknown;
      body?: unknown;
      params?: unknown;
    };
  }
}