import "./Testimonials.scss"
import userImgOne from "../../assets/images/testimonials/user1.png"
import userImgTwo from "../../assets/images/testimonials/user2.png"
import userImgThree from "../../assets/images/testimonials/user3.png"

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <h2 className="title testimonials__title">
                    What others are saying
                </h2>
                <div className="testimonials__users">
                    <div className="testimonials__users-item">
                        <p className="testimonials__text">
                            Completely beautiful website and amazing support!
                            This is my second website from this author and I
                            love both of the sites so much and she has helped me so well when I needed it!
                        </p>
                        <img src={userImgOne} alt="user"/>
                        <h5 className="testimonials__name">Happy User</h5>
                        <p className="testimonials__link">tempy.club</p>
                    </div>
                    <div className="testimonials__users-item">
                        <p className="testimonials__text">
                            Really easy to use and customize. easy to understand.
                            Darinka helped me with my site! She answers very quickly, a good service!
                            Thank you very much!
                        </p>
                        <img src={userImgTwo} alt="user"/>
                        <h5 className="testimonials__name">Happy User</h5>
                        <p className="testimonials__link">tempy.club</p>
                    </div>
                    <div className="testimonials__users-item">
                        <p className="testimonials__text">
                            Really pleasing to look at! Documentation (including installation instructions)
                            are clear and that is coming from a relatively new WordPress user.
                        </p>
                        <img src={userImgThree} alt="user"/>
                        <h5 className="testimonials__name">Happy User</h5>
                        <p className="testimonials__link">tempy.club</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
