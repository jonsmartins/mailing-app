'use client'
import Layout from "@/components/Layout"
import { useState, useEffect } from "react"
import styles from "@/styles/cadastroExibidor.module.css"

export default function cadastroExibidor() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cep, setCep] = useState(0);
    const [municipio, setMunicipio] = useState('');
    const [uf, setUf] = useState(0);

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
        console.log(endereco)
        console.log(cep)
        console.log(municipio)
        console.log(uf)
    }

    const normalizeCepNumber = (cep) => {
        if (!cep) return ''
        const x = cep.replace(/\D/g, "")
            .replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
            .replace(/(-\d{3})(\d+?)/, '$1')
        return setCep(x)
    }

    return (
        <div>
            <Layout titulo='Cadastro de Exibidores'>
                <div className={styles.FormInput}>
                    <input
                        type="text"
                        placeholder="Digite o nome do Exibidor"
                        onChange={(e) => { setNome(e.target.value) }}
                        required />
                    <input
                        type="text"
                        placeholder="Digite o endereço"
                        onChange={(e) => { setEndereco(e.target.value) }}
                        />
                    <input
                        type="text"
                        placeholder="Digite o CEP"
                        onChange={(e) => { normalizeCepNumber(e.target.value) }}
                        value={cep != 0 ? cep : ""}
                        id="cep"
                        maxLength={9}
                        />
                    <input
                        type="text"
                        placeholder="Digite o Município"
                        onChange={(e) => { setMunicipio(e.target.value) }}
                        />
                    <select name="Uf" id="Uf" onChange={(e) => setUf(e.target.value)} required>
                        <option value="0">--</option>
                        <option value="1">RJ</option>
                        <option value="2">SP</option>
                        <option value="3">AC</option>
                        <option value="4">AL</option>
                        <option value="5">AP</option>
                        <option value="6">AM</option>
                        <option value="7">BA</option>
                        <option value="8">CE</option>
                        <option value="9">DF</option>
                        <option value="10">ES</option>
                        <option value="11">GO</option>
                        <option value="12">MA</option>
                        <option value="13">MT</option>
                        <option value="14">MS</option>
                        <option value="15">MG</option>
                        <option value="16">PA</option>
                        <option value="17">PB</option>
                        <option value="18">PR</option>
                        <option value="19">PE</option>
                        <option value="20">PI</option>
                        <option value="21">RN</option>
                        <option value="22">RS</option>
                        <option value="23">RO</option>
                        <option value="24">RR</option>
                        <option value="25">SC</option>
                        <option value="26">SE</option>
                        <option value="27">TO</option>
                    </select>
                    <button onClick={submitForm}>POST</button>
                </div>
            </Layout>
        </div>
    )
}