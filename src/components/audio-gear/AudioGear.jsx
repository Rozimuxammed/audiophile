import obj from "../audio-gear/AudioGear.module.css"
import bitmap from "../../assets/Bitmap.svg"
import bitTablet from "../../assets/Bittablet.png"
import bitMobile from "../../assets/bitMobile.png"
export default function AudioGear() {
    return (
        <div className="container">
            <div className={obj.audioGear}>
                <div>
                    <h1>Bringing you the <span>best</span> audio gear</h1>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <picture>
                    <source srcSet={bitMobile} media="(max-width:576px)" />
                    <source srcSet={bitTablet} media="(max-width:768px)" />
                    <img className={obj.responsive_img} src={bitmap} alt="" />
                </picture>
            </div>
        </div>
    )
}
