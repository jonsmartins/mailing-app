import Link from "next/link";
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
  return (
    <div className={styles.Nav}>
      <Link href={props.destino}>
        <span className={styles.navegador}>
          {props.texto}
        </span>
      </Link>
    </div>
  )
}