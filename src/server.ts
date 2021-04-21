import express, { request, response } from "express";

const app = express();


/**
 * GET = buscar.
 * POSTS = Criar.
 * PUT = Alterar.
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá Mundo!! Hello World!! e também olá NLW 05",
    });
});

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário Dentro da Bagaça."
    });
});





app.listen(3333, () => console.log("Server is Running on port 3333"));
