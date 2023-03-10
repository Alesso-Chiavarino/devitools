import Link from 'next/link'
import styles from '../styles/BotMessage.module.scss'
import { FiExternalLink } from 'react-icons/fi'

const BotMessage = ({ response, index, loader, responses }) => {

    return (
        <li className={index % 2 === 0 ? 'flex gap-2 relative' : 'relative flex items-center gap-2 justify-end'}>
            <div className={index % 2 === 0 ? 'bg-white rounded-full self-end h-8 w-8 p-1' : null}>
                {index % 2 === 0 && <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1677344246/Things/chatbot-icon_dfy22m.svg" alt="chatbot-image" title='chatbot-image' className='w-full h-full object-cover' />}
            </div>
            {index % 2 === 0 ? (
                <div className='bg-gray-800 rounded-t-md rounded-br-md p-2 w-fit max-w-[75%] flex flex-col gap-2'>
                    <p className='text-white'>{response.text}</p>
                    {response.text?.includes('sección Colors') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/colors'><FiExternalLink />Ir a la seccion Colors</Link>}
                    {response.text?.includes('sección Css Frameworks') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/css-frameworks'><FiExternalLink />Ir a la seccion Css Frameworks</Link>}
                    {response.text?.includes('sección Backgrounds') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/backgrounds'><FiExternalLink />Ir a la seccion Backgrounds</Link>}
                    {response.text?.includes('sección Fonts') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/fonts'><FiExternalLink />Ir a la seccion Fonts</Link>}
                    {response.text?.includes('sección Animations') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/animations'><FiExternalLink />Ir a la seccion Animations</Link>}
                    {response.text?.includes('sección Extensions') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/extensions'><FiExternalLink />Ir a la seccion Extensions</Link>}
                    {response.text?.includes('sección Components') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/components'><FiExternalLink />Ir a la seccion Components</Link>}
                    {response.text?.includes('sección Icons') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/icons'><FiExternalLink />Ir a la seccion Icons</Link>}
                    {response.text?.includes('sección Image Optimizers') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/image-optimizers'><FiExternalLink />Ir a la seccion Image Optimizers</Link>}
                    {response.text?.includes('sección Designs') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/designs'><FiExternalLink />Ir a la seccion Designs</Link>}
                    {response.text?.includes('sección Games') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/games'><FiExternalLink />Ir a la seccion Games</Link>}
                    {response.text?.includes('sección Svg Illustrations') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/svg-illustrations'><FiExternalLink />Ir a la seccion Svg Illustrations</Link>}
                    {response.text?.includes('sección Shadows') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/shadows'><FiExternalLink />Ir a la seccion Shadow</Link>}
                    {response.text?.includes('sección Apis') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/apis'><FiExternalLink />Ir a la seccion Apis</Link>}
                    {response.text?.includes('sección Modules') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/frontend/modules'><FiExternalLink />Ir a la seccion Modules</Link>}
                    {response.text?.includes('sección Backend Frameworks') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/backend/backend-frameworks'><FiExternalLink />Ir a la seccion Backend Frameworks</Link>}
                    {response.text?.includes('apartado Backend seccion Modules') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/backend/modules'><FiExternalLink />Ir a la seccion Modules</Link>}
                    {response.text?.includes('sección Databases') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/backend/databases'><FiExternalLink />Ir a la seccion Databases</Link>}
                    {response.text?.includes('apartado de Backend, sección Apis') && <Link className='bg-gray-600 font-semibold flex items-center gap-2 rounded-md px-2 py-[2px] w-fit hover:bg-gray-700' href='/toolkit/backend/apis'><FiExternalLink />Ir a la seccion Apis</Link>}
                    <span className='text-gray-300 block text-right text-xs'>{response.time}</span>
                </div>
            ) : (
                <>
                    <div className='bg-gray-600  rounded-t-md rounded-bl-md p-2 max-w-xs w-fit'>
                        <p className='text-white'>{response.prompt}</p>
                        <span className='text-gray-300 block text-right text-xs'>{response.date}</span>
                    </div>
                    {(loader && index == responses.length - 1) &&

                        <div className='flex gap-2 absolute left-0 top-[60px] min-w-2/4 pb-5'>
                            <div className='bg-white rounded-full self-end p-1 h-8 w-8'>
                                <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1677344246/Things/chatbot-icon_dfy22m.svg" alt="chatbot-image" title='chatbot-image' className='w-full h-full object-cover' />
                            </div>
                            <div className='bg-gray-800 rounded-t-md rounded-br-md flex justify-center items-center p-2 w-[80px] pl-8'>
                                <span className={styles.loader}></span>
                            </div>
                        </div>
                    }
                </>
            )}
        </li>
    )
}

export default BotMessage