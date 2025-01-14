import { card } from "../assets";
import styles from "./style";


const Hero = () => {
    return (
        <section className={`max-w-7  my-4 w-fit `}>
            <div className={`  inset-0    py-4 " `} style={{
                backgroundImage: `url(${card})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                top: "46%",
                left: "-49%",
                position: "absolute",
                height: "53vh",
            }}
            >
                <div>
                    <button className="bg-orange-50">
                        Buy now
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Hero