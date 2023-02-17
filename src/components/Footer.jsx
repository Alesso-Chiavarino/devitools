import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pt-1">
                <div className='bg-black opacity-95 p-5 text-center'>
                    <h1 className='text-white font-bold'>© 2022 Alessandro Chiavarino, All rights reserved.</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer;