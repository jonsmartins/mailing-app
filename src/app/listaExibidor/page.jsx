'use client'
import Layout from "@/components/Layout"
import { useEffect, useState } from "react"
import styles from '@/styles/ListaExibidor.module.css'

export default function listaExibidores() {
    const [exibidores, setExibidores] = useState([])

    // useEffect(() => {
    //     const listaExibidores = async () => {
    //         const res = await fetch('/api/exibidores')
    //         const x = await JSON.parse(res)
    //         console.log(x)
    //         setExibidores(x)
    //     }
    //     listaExibidores()
    //     console.log(exibidores)
    // }, [])

    return (
        <Layout titulo='Listagem de Exibidores'>
            <div className={styles.conteudoExibidores}>
                <div className={styles.buscaExibidores}>
                    <input type="text" />
                    <div>
                        TeladebuscadosexibidoresTeladebuscadosexibidoresTeladebuscadosexibidoresTeladebuscadosexibidores
                    </div>
                </div>
                <div className={styles.Exibidores}>
                    tela de descrição do exibidor
                </div>
            </div>
        </Layout>
    )
}