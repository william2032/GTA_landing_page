import styles from './style'
import { footerLinks, socialMedia } from '../constants'

const FooterSocials = () => {
    return (
        <div className="font-poppins ">
            <div className=' flex flex-row justify-between max-w-screen-xl mx-auto text-left  buttonDiv'>
                <div className='flex flex-col justify-center align-middle'>
                    <h5 className={`${styles.heading4}`}>Ready to get your ultimate gaming profile?</h5>
                    <p className='uppercase text-sm'>join over thousand players today.for free.</p>
                </div>
                <button className=' mx-2 mt-10  bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 '>CLAIM MY PROFILE</button>
            </div>


            <div className=' bg-gray-900 flex flex-row items-center  px-10   social'>
                <p className=" font-normal  text-[18px] leading-[27px] text-white ">
                    Copyright Ⓒ 2025 NevanGame.
                </p>
                <div className="flex flex-row items-center space-x-4  copyright">
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-5 object-contain  space-x-2  cursor-pointer ${index !== socialMedia.length - 1 ? "mx-1" : ""
                                }`}
                            onClick={() => window.open(social.link)}
                        />

                    ))}
                </div>
            </div>


        </div>

    )
}

export default FooterSocials