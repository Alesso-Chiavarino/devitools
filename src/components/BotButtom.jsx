import { useState } from 'react'
import Bot from './Bot'
import { BsChatLeftTextFill } from 'react-icons/bs'

const BotButtom = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <Bot setIsShow={setIsShow} isShow={isShow} />

            <div className={isShow ? 'hidden justify-center items-center' : 'w-[55px] h-[55px] rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:bg-blue-500 transition-all duration-300 bg-gradient-to-r from-violet-400 to-blue-400 fixed z-50 text-white bottom-4 right-4 cursor-pointer flex justify-center items-center'} onClick={() => setIsShow(true)}>
                <BsChatLeftTextFill className='text-2xl' />
            </div>
        </>
    )
}

export default BotButtom