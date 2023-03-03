import { useBot } from '@/context/botContext'
import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa'
import { IoChevronBack, IoSend } from 'react-icons/io5'
import BotMessage from './BotMessage'

const Bot = ({ setIsShow, isShow }) => {

    const [loader, setLoader] = useState(false)

    const { prompt, response, responses, handlePromptState, handleResponseState, handleResponsesState } = useBot()


    const COHERE_API_KEY = 'kmnDO3nquzuMMNemFi6rvlya227mAeT4jXVJDhmj'
    const COHERE_API_URL = 'https://api.cohere.ai/generate'

    const fetchCohere = async (input) => {
        try {
            setLoader(true)
            handleResponsesState([...responses, input])
            handlePromptState({
                prompt: '',
                date: ''
            })

            const data = {

                model: 'xlarge',
                prompt: `Esto es un bot que te guiará para encontrar la herramienta que necesitas.
            --
            Pregunta: ¿Que es este sitio web?
            Respuesta: Devitools te permitirá ayudarte en el desarrollo de tu sitio web, ofreciendote las mejores herramientas del mercado.
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
            Respuesta: Puedes encontrar apis en la sección Apis de nuestra página web.
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
            Respuesta: Puedes encontrar apis en el apartado de Backend, sección Apis de nuestra página web.
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
            Pregunta: ${input.prompt}
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

            let date = new Date().toLocaleTimeString().slice(0, 5)

            if (date.length === 5) {
                date = '0'.concat(date).slice(0, 5)
            }

            const finalText = {
                text: newText,
                time: date
            }

            handleResponseState(finalText)

            handleResponsesState([...responses, input, finalText])
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoader(false)
        }
    }
    const handleChange = (e) => {

        let date = new Date().toLocaleTimeString().slice(0, 5)

        if (date.length === 5) {
            const newDate = '0'.concat(date).slice(0, 5)

            handlePromptState({
                prompt: e.target.value,
                date: newDate
            })
            return;
        }

        handlePromptState({
            prompt: e.target.value,
            date: date
        })
    }

    useEffect(() => {
        if (responses.length === 0) {
            handleResponsesState([response])
        }
    }, [])

    useEffect(() => {
        ul.scrollTo(0, ul.scrollHeight)
    }, [responses])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchCohere(prompt)
    }

    return (
        <div style={{ animationDuration: '.2s' }} className={isShow ? 'bg-[rgba(0,0,0,.97)] animate__animated animate__fadeInUp max-[800px]:w-3/4 max-[1200px]:w-2/4 lg:w-1/4 rounded-3xl overflow-hidden h-fit fixed border-2 border-white bottom-20 z-50 right-4' : 'bg-black animate__animated animate__fadeOutDown w-1/4 rounded-3xl overflow-hidden h-fit fixed border-2 border-white bottom-0 z-50 right-4'}>

            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className='bg-gradient-to-r from-violet-400 to-blue-400 flex items-center gap-5'>
                    <IoChevronBack className='text-white ml-1 text-xl cursor-pointer' onClick={() => setIsShow(false)} />
                    <div className='flex items-center gap-2 py-2'>
                        <div className='w-10 rounded-full relative p-1 bg-white border-[2px] border-black'>
                            <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1677344246/Things/chatbot-icon_dfy22m.svg" alt="chatbot-image" title='chatbot-image' />
                            <FaCircle className='text-green-400 absolute text-xs -right-0 -bottom-1 bg-black rounded-full p-[1px]' />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-white font-extrabold'>Bot- Devitools</h3>
                            <span className='text-gray-50 text-sm -mt-1'>Online</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-fit'>

                    <ul id='ul' className='text-white p-5 flex flex-col gap-2 h-[400px] overflow-y-auto'>
                        {responses?.map((response, index) => (
                            <BotMessage loader={loader} responses={responses} key={index} index={index} response={response} />
                        ))}
                    </ul>

                    <div className="border-t-[1px] border-gray-200 py-2 flex items-center">
                        <input value={prompt.prompt} type="text" onChange={(e) => handleChange(e)} id="rounded-email" className="text-white placeholder:text-gray-300 px-5 w-full bg-transparent outline-none" placeholder="Write a message" />
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