import "./Portfolio.scss"
import {Button} from "../ui/Button"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h2 className="title portfolio__title">Simplicity meets innovative design</h2>
                <p className="portfolio__subtitle">
                    It"s really easy to start using Digits.
                    Install the theme, choose a demo and
                    start designing the future of your business!
                </p>
                <Button className="btn-blue portfolio__btn">
                    Buy Digits
                </Button>
            </div>
        </div>
    )
}

export default Portfolio
