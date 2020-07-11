import React from 'react'
import Link from 'next/link'
// Importando o styles modules ele só será usado dentro do componente Porém ao ser usada a classe será necessário { } 
import styles from './styles.module.css'


const Header = () =>{
    return(
        <React.Fragment>
            <div className={ styles.wrapper }>
                <div className='container mx-auto '>
                <Link href='/'>
                     <a>
                        <img className='mx-auto'  src='/logo_palpitebox.png' alt='PalpiteBox' width="250" height="300"/>
                     </a>
                </Link>
                </div>
            </div> 
            <div className='@apply bg-blue-800 p-4 shadow-md text-center'>
            <Link href='/sobre'>
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className='px-2 hover:underline'>Contato</a>
                </Link>
                <Link href='/pesquisa'>
                    <a className='px-2 hover:underline'>Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>

    )
}

export default Header