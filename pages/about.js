import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.Container}>
      <h1>Sobre o Projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit commodi veritatis esse! Nostrum omnis vero architecto a repellat? Debitis perspiciatis minima cumque modi harum corrupti laudantium repellendus fuga mollitia.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
