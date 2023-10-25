'use client'
import Layout from "@/components/Layout"
import { useState, useEffect } from "react"
import styles from "@/styles/Cadastroexibidor.module.css"

//Esta pagina ficara dentro da tela dos exibidores
//incluir rotina para vincular o codigo do exibidor ao cinema
export default function cadastroCinemas() {
    const [nome, setNome] = useState('');
    const [municipio, setMunicipio] = useState('');

    function submitForm() {
        const createUf = async () => {
            //const ufBr = uf;
            //const requestOptions = {
            //    method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //    body: JSON.stringify(ufBr)
            //};
            //const res = await fetch('/api/exibidores', requestOptions);
            //if (res.status == 201) {
            //    alert('Uf criado com sucesso')
            //} else {
            //    alert('Erro ao criar Uf')
            //}
        }
        //createUf();
        console.log(nome)
        console.log(municipio)
    }

    const normalizeTelNumber = (tel) => {
        if (!tel) return ''
        const x = tel.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2");
        return setTelefone(x)
    }

    return (
        <div>
            <Layout titulo='Cadastro de Contatos'>
                <div className={styles.FormInput}>
                    <input
                        type="text"
                        placeholder="Digite o nome"
                        onChange={(e) => { setNome(e.target.value) }}
                        required />
                    <input
                        type="text"
                        placeholder="Digite o Municipio"
                        onChange={(e) => { setMunicipio(e.target.value) }}
                        required />                
                    <button onClick={submitForm}>POST</button>
                </div>
            </Layout>
        </div>
    )
}