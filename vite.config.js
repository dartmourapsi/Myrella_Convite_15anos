import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: troque "NOME-DO-REPOSITORIO" pelo nome exato do seu repositório
// no GitHub antes de publicar. Se o repo se chamar "myrella-15-anos", fica:
// base: "/myrella-15-anos/"
export default defineConfig({
  plugins: [react()],
  base: "/Myrella_Convite_15anos/",
});
