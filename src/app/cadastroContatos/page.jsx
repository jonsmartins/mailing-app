'use client'
import Layout from "@/components/Layout"
import { useState, useEffect } from "react"
import styles from "@/styles/Cadastroexibidor.module.css"

//Esta pagina ficara dentro da tela dos exibidores
//incluir rotina para vincular o codigo do exibidor ao contato
export default function cadastroContatos() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [setor, setSetor] = useState('');
    const [telefone, setTelefone] = useState(0);
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
        console.log(email)
        console.log(setor)
        console.log(telefone)
        console.log(uf)
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
                        placeholder="Digite o email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        required />
                    <input
                        type="text"
                        placeholder="Digite o setor"
                        onChange={(e)=>{ setSetor(e.target.value) }}
                        />
                    <input
                        type="text"
                        placeholder="Digite o telefone"
                        onChange={(e) => { normalizeTelNumber(e.target.value) }}
                        value={telefone != 0 ? telefone : ""}
                        maxLength={15}
                        required />
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