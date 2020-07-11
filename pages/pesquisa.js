import React, { useState } from 'react'
import PageTitle from '../componentes/PageTitle'
const Pesquisa = () => {
    const [ form, setForm ] = useState({
        
            Nome: '',
            Email: '',
            Whatsapp: '',
            Nota: 0
        
    })

    const [ sucess, setSucess ] = useState(false)
    
    const [ retorno, setRetorno ] = useState({})

    const notas = [ 0, 1, 2, 3, 4, 5 ]

    const save = async () =>{
        
        try {
             const response = await fetch('api/save', {
                method:'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSucess(true)
            setRetorno(data)
        } catch (error) {
            
        }
       

    }

    const onChange = evt =>{
        const value = evt.target.value
        const key = evt.target.name 
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões  </h1>
            <p className='text-center mb-6'>
                Na busca por um melhor atendimento pedimos sua colaboração. <br/>
                Ajudenos a melhorar dando sua opinião sobre nosso atendimento ou envie sugestões.
            </p>
            {!sucess && <div className='w-1/5 mx-auto'>
                <label className='font-bold'> Seu Nome: </label>
                <input type='text' className='p-4 block shadow bg-blue-200 m-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>  
                <label className='font-bold'> E-mail: </label>
                <input type='text' className='p-4 block shadow bg-blue-200 m-2 rounded' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />  
                <label className='font-bold'> Whatsapp: </label>
                <input type='text' className='p-4 block shadow bg-blue-200 m-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />  

                <label className='font-bold'>Nota</label>
                <div className='flex py-6'>

                    { notas.map(nota => {
                        return(
                            <label className=' block inline w-1/6 text-center'>
                                { nota } 
                                <br/>
                                <input type='radio' name='Nota' value={ nota } onChange={ onChange }/>
                            </label>
                        )
                    })}
               </div>
               <div className='w-1/5 container'>
                 <button className='mb-10 mt-5  bg-blue-500 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow ' onClick={save}>Salvar</button>        
               </div>

            </div>}
            {sucess && <div className='w-1/5 mx-auto'> 
                <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por sua contribuição!!!</p>
            
                {
                    !retorno.showCoupom && <div className='text-center border p-4 mb-4'>
                            Seu Cupom:<br />
                            <span className='font-bold text-2xl'>{ retorno.Cupom }</span>
                        </div>}
                
                 {
                    retorno.showCoupom && <div className='text-center border p-4 mb-4'>
                            <span className='font-bold block mb-2'>{ retorno.Promo }</span>
                            <br />
                            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon.</span>
                        </div>

                }
               
                </div>
            }

        </div>
    )
}

export default Pesquisa