import { createUf } from "../../services/exibidorService"

//endpoint q lista usuarios
export const GET = async (req, res) => {
    const uf = await getUsers()
    return new Response(JSON.stringify(users), { status: 200 })
}

//endpoint q cria uf
export const POST = async (req, res) => {
    const uf = await req.json();
    console.log(uf)
    try {
        // logica para inserir no banco de dados
        console.log('Criando UF: '+uf)
        await createUf(uf);
        return new Response(JSON.stringify(uf), {status: 201});
    } catch(e) {
        return new Response( JSON.stringify({error: e.message}) , {status: 400})
    }
}

//endpoint que atualiza usuario
export const PUT =(req, res) => {
    return new Response( 'Ainda nao implementado' , {status: 404})
}

export const DELETE = async (req, res) => {
    const idUser = await req.json();
    try {
        //await deleteUser(idUser);
        return new Response('Usuario deletado com sucesso', { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({error: e.message}) , {status: 400})   
    }
}