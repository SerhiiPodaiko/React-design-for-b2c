import "./Hero.scss"
import {Button} from "../ui/Button"
import { ReactComponent as HeroSvg } from "../../assets/images/hero.svg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero__title">
                    Good design meets great user experience
                </h1>
                <p className="hero__subtitle">
                    For everyone, from beginners to experts
                </p>
                <div className="hero__btns">
                    <Button type="button" className="btn-blue">
                        Buy Digits
                    </Button>
                    <Button type="button" className="btn-light">
                        See the Features
                    </Button>
                </div>
            </div>
            <div className="container">
                <div className="hero__wrap">
                    <HeroSvg className="hero__image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
