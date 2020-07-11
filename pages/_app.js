// Pagina padrão para todas as páginas
// Essa pagina funciona como um repositório que recebe as demais paginas. 
// Ela recebe um componente e suas propriedades
// Como foi utilizado o ...props as propriedades passam diretamente para o componente. 

import React from 'react'
import Layout from '../componentes/Layout'
import '../css/style.css'

const MyApp =({Component, pageProps})=>{
    return(
            <Layout>
                 <Component {...pageProps}/> 
            </Layout>
    )
}
export default MyApp