import styles from '../styles/BotMessage.module.scss'

const BotMessage = ({ response, index, loader, responses }) => {
    return (
        <li className={index % 2 === 0 ? 'flex gap-2 relative' : 'relative flex items-center gap-2 justify-end'}>
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
                            <div className='bg-gray-800 rounded-t-md rounded-br-md flex justify-center items-center p-2 w-[80px] pl-8'>
                                <span class={styles.loader}></span>
                            </div>
                        </div>
                    }
                </>
            )}
        </li>
    )
}

export default BotMessage