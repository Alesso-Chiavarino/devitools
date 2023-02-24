import { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa'
import { IoChevronBack, IoSend } from 'react-icons/io5'

const ai = () => {

    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('Hola, bienvenido a devitools!, ¿en que te puedo ayudar? ')
    const [responses, setResponses] = useState([])

    const COHERE_API_KEY = 'kmnDO3nquzuMMNemFi6rvlya227mAeT4jXVJDhmj'
    const COHERE_API_URL = 'https://api.cohere.ai/generate'

    const fetchCohere = async (input) => {

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
        const response = await fetch(COHERE_API_URL, options)
        const dataFromResponse = await response.json()
        // console.log(dataFromResponse)
        const { text } = dataFromResponse.generations[0]
        const newText = text
            .replace('--', '')
            .replaceAll('"', '')
            .trim()
        if (newText === '') {
            return console.log('I dont understand you, please try again')
        }
        // console.log(input)
        // console.log(newText)
        setResponse(newText)
        setResponses([...responses, newText])
        setPrompt('')
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
        <div className='flex justify-center items-center mt-5 bg-black p-20'>
            <div className='bg-black w-1/4 rounded-md overflow-hidden h-fit border-2 border-white'>

                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className='bg-blue-400 flex items-center gap-5'>
                        <IoChevronBack className='text-white ml-1 text-xl cursor-pointer' />
                        <div className='flex items-center gap-2 py-2'>
                            <FaCircle className='text-green-400 bg-white rounded-full p-[1px]' />
                            <h3 className='text-white font-bold'>Bot- Devitools</h3>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between h-full'>

                        <ul className='text-white p-5 flex flex-col gap-2'>
                            {responses?.map((response, index) => (
                                <li key={index} className='flex items-center gap-2'>
                                    <div className='bg-white rounded-full w-10 p-1'>
                                        <img src="./img/chatbot-icon.svg" className='w-full h-full object-cover' alt="" />
                                    </div>
                                    <p className='bg-gray-800 rounded-md p-2'>{response}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t-[1px] border-gray-200 py-2 flex items-center">
                            <input defaultValue={prompt} value={prompt} type="text" onChange={(e) => handleChange(e)} id="rounded-email" className="text-white px-5 w-full bg-transparent outline-none" placeholder="Write a message" />
                            <IoSend className='text-white mx-2 cursor-pointer text-xl' onClick={() => {
                                fetchCohere(prompt)
                            }}></IoSend>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ai






//     prompt: `This is a spell checker generator.
            // --
            // Incorrect sample: "I are good!"
            // Correct sample: "I am good!"
            // --
            // Incorrect sample: "I have 22 years old."
            // Correct sample: "I am 22 years old."
            // --
            // Incorrect sample: "I don't can know"
            // Correct sample: "I don't know"
            // --
            // Incorrect sample: "${input}"
            // Correct sample:`,
            // prompt: `this is a pet name generator.
            // give me caracteristics of your pet and i will give you a name.
            // --
            // example: "my pet is a dog and is very cute"
            // response: "your pet name is: puppy"
            // --
            // example: "my pet is a cat and is very cute"
            // response: "your pet name is: kitty"
            // --
            // example: "my pet is a cat and is orange"
            // response: "your pet name is: garfield"
            // --
            // ${input}
            // response:`,
            // prompt: `This is a bot that will guide you to found the tool that you need.