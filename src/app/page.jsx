import Navegador from '@/components/Navegador'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.Content}>
        <div>
          <Navegador texto='Cadastro de Exibidores' destino="/cadastroExibidor" />
          <Navegador texto='Cadastro de Contatos' destino="/cadastroContatos" />
          <Navegador texto='Cadastro de Cinemas' destino="/cadastroCinemas" />
          <Navegador texto='Lista de Exibidores' destino="/listaExibidor" />
        </div>
      </div>
    </main>
  )
}


