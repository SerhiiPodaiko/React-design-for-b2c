import './Logos.scss'
import NetflixImg from "../../assets/images/logos/netflix.png"
import DrawkitImg from "../../assets/images/logos/drawkit.png"
import FigmaImg from "../../assets/images/logos/figma.png"
import CinemaxImg from "../../assets/images/logos/cinemax.png"
import StripeImg from "../../assets/images/logos/stripe.png"
import GoogleImg from "../../assets/images/logos/google.png"
import DisnayImg from "../../assets/images/logos/disnay.png"

const Logos = () => {
    return (
        <div className="logos">
            <div className="container">
                <h6 className="logos__title">Trusted by forward-thinking software teams around the world</h6>
                <div className="logos__company">
                    <img src={NetflixImg} alt="netflix"/>
                    <img src={DrawkitImg} alt="drawkit"/>
                    <img src={FigmaImg} alt="figma"/>
                    <img src={CinemaxImg} alt="cinemax"/>
                    <img src={StripeImg} alt="stripe"/>
                    <img src={GoogleImg} alt="google"/>
                    <img src={DisnayImg} alt="disnay"/>
                </div>
            </div>
        </div>
    )
}

export default Logos
