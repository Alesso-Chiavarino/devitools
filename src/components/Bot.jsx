import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa'
import { IoChevronBack, IoSend } from 'react-icons/io5'

const Bot = ({ setIsShow, isShow }) => {

    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('Hola, bienvenido a devitools!, ¿en que te puedo ayudar? ')
    const [responses, setResponses] = useState([])
    const [loader, setLoader] = useState(false)

    const COHERE_API_KEY = 'kmnDO3nquzuMMNemFi6rvlya227mAeT4jXVJDhmj'
    const COHERE_API_URL = 'https://api.cohere.ai/generate'

    const fetchCohere = async (input) => {
        try {
            setLoader(true)
            setResponses([...responses, input])
            setPrompt('')

            const data = {

                model: 'xlarge',
                // FORMATO => ¿donde puedo encontrar fuentes?
                prompt: `Esto es un bot que te guiará para encontrar la herramienta que necesitas.
            --
            Pregunta: ¿Dónde puedo encontrar fondos de pantalla para mi sitio web?
            Respuesta: Puedes encontrar fondos de pantalla en la sección Backgrounds de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar fuentes para mi sitio web?
            Respuesta: Puedes encontrar fuentes en la sección Fonts de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar animaciones para mi sitio web?
            Respuesta: Puedes encontrar animaciones en la sección Animations de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar extensiones para el navegador?
            Respuesta: Puedes encontrar extensiones en la sección Extensions de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar componentes para mi sitio web?
            Respuesta: Puedes encontrar componentes en la sección Components de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar frameworks de css para mi sitio web?
            Respuesta: Puedes encontrar frameworks de css en la sección Css Frameworks de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar optimizadores de imágenes para mi sitio web?
            Respuesta: Puedes encontrar optimizadores de imágenes en la sección Image Optimizers de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar paletas de colores para mi sitio web?
            Respuesta: Puedes encontrar paletas de colores en la sección Colors de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar íconos para mi sitio web?
            Respuesta: Puedes encontrar íconos en la sección Icons de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar imágenes para mi sitio web?
            Respuesta: Puedes encontrar imágenes en la sección Image Optimizer de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar diseños?
            Respuesta: Puedes encontrar diseños en la sección Designs de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar componentes?
            Respuesta: Puedes encontrar componentes en la sección Components de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar componentes de tailwind o css?
            Respuesta: Puedes encontrar componentes de tailwind o css en la sección Components de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar juegos para practicar?
            Respuesta: Puedes encontrar juegos en la sección Games de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar ilustraciones para mi sitio web?
            Respuesta: Puedes encontrar ilustraciones en la sección Svg Illustrations de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar sombras para mi sitio web?
            Respuesta: Puedes encontrar sombras en la sección Shadows de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar apis para mi sitio web?
            Respuesta: Puedes encontrar apis en la sección APIs de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar modulos para mi sitio web?
            Respuesta: Puedes encontrar modulos en la sección Modules de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar frameworks de node o backend para mi sitio web?
            Respuesta: Puedes encontrar frameworks de node o backend en la sección Backend Frameworks de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar modulos para el backend de mi sitio web?
            Respuesta: Puedes encontrar modulos en el apartado Backend seccion Modules de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar bases de datos para mi sitio web?
            Respuesta: Puedes encontrar bases de datos en la sección Databases de nuestra página web.
            --
            Prengunta: ¿Dónde puedo encontrar apis para el backend de mi sitio web?
            Respuesta: Puedes encontrar apis en el apartado de Backend, sección APIs de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar herramientas para el front end?
            Respuesta: Puedes encontrar herramientas en la sección Front End de nuestra página web.
            --
            Pregunta: ¿Dónde puedo encontrar herramientas para el back end?
            Respuesta: Puedes encontrar herramientas en la sección Back End de nuestra página web.
            --
            Pregunta: ¿Que podes hacer?
            Respuesta: Puedo ayudarte a encontrar la herramienta ideal que necesitas.
            --
            Pregunta: ${input}
            Respuesta:`,
                truncate: 'END',
                temperature: 0.3,
                k: 0,
                p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
                stop_sequences: ['--'],
                return_likelihoods: 'NONE'
            }

            const options = {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${COHERE_API_KEY}`,
                    "Cohere-Version": '2022-12-06',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(data)
            }
            const responsee = await fetch(COHERE_API_URL, options)
            const dataFromResponse = await responsee.json()
            const { text } = dataFromResponse.generations[0]
            const newText = text
                .replace('--', '')
                .replaceAll('"', '')
                .trim()
            if (newText === '') {
                return console.log('No te entendí, por favor, intenta de nuevo.')
            }
            setResponse(newText)

            setResponses([...responses, input, newText])
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoader(false)
        }
    }
    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    useEffect(() => {
        setResponses([response])
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchCohere(prompt)
    }

    return (
        <div style={{ animationDuration: '.3s' }} className={isShow ? 'bg-[rgba(0,0,0,.97)] animate__animated animate__fadeInUp w-1/4 rounded-md overflow-hidden h-fit fixed border-2 border-white bottom-4 z-50 right-4' : 'bg-black animate__animated animate__fadeOutDown w-1/4 rounded-md overflow-hidden h-fit fixed border-2 border-white bottom-0 z-50 right-4'}>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className='bg-gradient-to-r from-violet-400 to-blue-400 flex items-center gap-5'>
                    <IoChevronBack className='text-white ml-1 text-xl cursor-pointer' onClick={() => setIsShow(false)} />
                    <div className='flex items-center gap-2 py-2'>
                        <div className='w-10 rounded-full relative p-1 bg-white border-[2px] border-black'>
                            <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1677344246/Things/chatbot-icon_dfy22m.svg" alt="" />
                            <FaCircle className='text-green-400 absolute text-xs -right-0 -bottom-1 bg-black rounded-full p-[1px]' />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-white font-extrabold'>Bot- Devitools</h3>
                            <span className='text-gray-50 text-sm -mt-1'>Online</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-fit'>

                    <ul className='text-white p-5 flex flex-col gap-2 h-[400px] overflow-y-auto'>
                        {responses?.map((response, index) => (
                            <li key={index} className={index % 2 === 0 ? 'flex gap-2 relative' : 'relative flex items-center gap-2 justify-end'}>
                                <div className={index % 2 === 0 && 'bg-white rounded-full self-end h-8 w-8 p-1'}>
                                    {index % 2 === 0 && <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1677344246/Things/chatbot-icon_dfy22m.svg" className='w-full h-full object-cover' alt="" />}
                                </div>
                                {index % 2 === 0 ? (
                                    <div className='bg-gray-800 rounded-t-md rounded-br-md p-2 w-fit max-w-[75%]'>
                                        <p className='text-white'>{response}</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className='bg-gray-600  rounded-t-md rounded-bl-md p-2 max-w-2/4 w-fit'>
                                            <p className='text-white'>{response}</p>
                                        </div>
                                        {(loader && index == responses.length - 1) &&

                                            <div className='flex gap-2 absolute left-0 top-[60px] min-w-2/4'>
                                                <div className='bg-white rounded-full self-end p-1 h-8 w-8'>
                                                    <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1677344246/Things/chatbot-icon_dfy22m.svg" className='w-full h-full object-cover' alt="" />
                                                </div>
                                                <div className='bg-gray-800 rounded-t-md rounded-br-md p-2 '>
                                                    <span className='text-white'>...</span>
                                                </div>
                                            </div>
                                        }
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="border-t-[1px] border-gray-200 py-2 flex items-center">
                        <input defaultValue={prompt} value={prompt} type="text" onChange={(e) => handleChange(e)} id="rounded-email" className="text-white placeholder:text-gray-300 px-5 w-full bg-transparent outline-none" placeholder="Write a message" />
                        <IoSend className='hover:text-white mx-2 text-gray-300 cursor-pointer text-xl' onClick={() => {
                            fetchCohere(prompt)
                        }}></IoSend>
                    </div>
                </div>

            </form>
        </div >
    )
}

export default Bot