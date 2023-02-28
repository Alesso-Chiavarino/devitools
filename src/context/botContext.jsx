import { createContext, useContext, useState } from 'react'

const BotContext = createContext()

export const useBot = () => {
    return useContext(BotContext)
}

const BotProvider = ({ children }) => {

    const [prompt, setPrompt] = useState({
        prompt: '',
        date: ''
    })
    const [response, setResponse] = useState({
        text: 'Hola, bienvenido a devitools!, ¿en que te puedo ayudar?',
        date: ''
    })
    const [responses, setResponses] = useState([])

    const handlePromptState = (value) => {
        setPrompt(value)
    }

    const handleResponseState = (value) => {
        setResponse(value)
    }

    const handleResponsesState = (value) => {
        setResponses(value)
    }

    return (
        <BotContext.Provider value={{ prompt, response, responses, handlePromptState, handleResponseState, handleResponsesState }}>
            {children}
        </BotContext.Provider>
    )
}

export default BotProvider