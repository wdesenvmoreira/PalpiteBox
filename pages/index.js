import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../componentes/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())


const Index = () => {
    const { data, error} = useSWR('/api/get-promo', fetcher)

    return (
        <div>
            <PageTitle title='Seja bem vindo' />
            <p className='mt-12 text-center'>
                Descrição do estabelecimento. 
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa' >
                    <a className='bg-blue-500 px-6 py-4 font-bold rounded-lg shadow-md'>
                        Dar opinião ou sugestão      
                    </a>
                </Link>
            </div>
            { !data && <p>Carregando ... </p>}
            { !error && data && data.showCoupon && 
                <p className='mt-12 text-center'>
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index