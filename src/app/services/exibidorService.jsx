import db from "@/database/db";
import { stringify } from "querystring";


export const getExibidores = async () => {
    console.log('Lendo Exibidores no banco')
    try {
        await db.connect(function () {
            console.log("Connected!");
            var sql = "SELECT * FROM exibidores";
            db.query(sql, function (err, result) {
                if (err) throw err;
                //const lista = JSON.parse(JSON.stringify(result))
                //console.log(lista)
                const lista = result;
                return lista
            });
        });
    } catch (error) {
        console.log(error)
    }
}

export const createExibidor = async (exibidor) => {
    console.log('Conectando ao Banco de Dados...')
    try {
        await db.connect(function () {
            console.log("Connected!");
            var sql = "INSERT INTO uf (nome) VALUES ('" + uf + "')";
            db.query(sql, function (err, result) {
                if (err) throw err;
            });
        });
        console.log('Uf Criado com sucesso !')
    } catch (error) {
        console.log(error)
    }
}
