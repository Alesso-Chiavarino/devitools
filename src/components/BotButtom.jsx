import { useState } from 'react'
import Bot from './Bot'
import { BsChatLeftTextFill } from 'react-icons/bs'

const BotButtom = () => {

    const [isShow, setIsShow] = useState(false)

    const loadMain = () => {
        if (isShow) {
            return (
                <Bot setIsShow={setIsShow} />
            )
        } else {
            return (
                <div className='w-[50px] h-[50px] rounded-full hover:bg-blue-500 transition-all duration-300 bg-blue-400 fixed z-50 text-white bottom-4 right-4 cursor-pointer flex justify-center items-center' onClick={() => setIsShow(true)}>
                    <BsChatLeftTextFill className='text-2xl' />
                </div>
            )
        }
    }

    return (
        loadMain()
    )
}

export default BotButtom