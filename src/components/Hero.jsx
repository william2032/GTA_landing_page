import styles from "./style"
import { star, card } from "../assets"

const Hero = () => {
    return (
        <div className={`${styles.boxWidth} flex flex-row justify-center w-full h-[300px] md:h-[500px] lg:h-[600px]`}>
            <div className="space-x-5 px-8">
                <img src={card} alt="gtacard" className="h-80 w-full rounded-lg object-contain" />
                <div className=" flex flex-row items-center space-x-8  mt-2 justify-between ">
                    <button className="mt-4 bg-blue-500 text-white w-full px-10 py-2 items-center rounded hover:bg-blue-700">BUY GAME</button>
                    <img src={star} alt="star" className=" p-1  mt-3 rounded border-spacing-3 border-gray-300 hover:border-white text-gray-400 hover:text-white bg-gray-800"  />

                </div>
            </div>
            <div className={`${styles.paragraph} space-y-4 `} >
                <h2 className={`${styles.heading2}`}>Grand Theft Auto V</h2>
                <p className=" text-xl">Rockstar Games <br/>23rd Aug, 2025</p>
                <p>In the Grand Theft Auto series, gamers control criminals and attempt to increase their standing by completing missions in various virtual cities.
                    The first game of the series offered a simple birds-eye perspective of the landscape from which the gamer could view and engage in carjacking,
                    robberies, gun fights, and other forms of delinquency</p>
            </div>
        </div>
    )
}

export default Hero