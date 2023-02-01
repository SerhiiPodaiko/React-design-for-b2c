import "./About.scss"
import aboutBgImg from "../../assets/images/about/about-bg.png"

const About  = () => {
    return (
        <div className="about">
            <div className="container">
                <h2 className="title about__title">
                    Whatever work you do,
                    we're able to help
                </h2>
                <div className="about__inner">
                    <div className="about__left">
                        <img src={aboutBgImg} alt="about-img"/>
                    </div>
                    <div className="about__right">
                        <ul className="about__list">
                            <li className="about__list-item">
                                <svg className="icon" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="58" height="58" rx="4" fill="#B5F2E3"/>
                                    <g filter="url(#filter0_d_3_4682)">
                                        <path d="M34.7515 23.6687C37.6496 23.6687 40 21.2812 40 18.3375C40 15.3938 37.6496 13 34.7515 13H24.2485C21.3504 13 19 15.3875 19 18.3313C19 21.275 21.3504 23.6625 24.2485 23.6625C21.3504 23.6688 19 26.0563 19 29C19 31.9437 21.3504 34.3312 24.2485 34.3312C21.3504 34.3312 19 36.7188 19 39.6688C19 42.6188 21.3504 45 24.2485 45C27.1465 45 29.4969 42.6125 29.4969 39.6688V23.6687H34.7515ZM34.7515 23.6687C31.8535 23.6687 29.5031 26.0563 29.5031 29C29.5031 31.9437 31.8535 34.3312 34.7515 34.3312C37.6496 34.3312 40 31.9437 40 29C40 26.0563 37.6496 23.6687 34.7515 23.6687Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_3_4682" x="17" y="13" width="29" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dx="2" dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.270588 0 0 0 0 0.345098 0 0 0 0 0.501961 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_4682"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_4682" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <div className="text-wrapper">
                                    <h4 className="text-title">Design and Assets</h4>
                                    <p className='text-subtitle'>
                                        Make your brand stand out with pixel-perfect design crafted to perfection.
                                    </p>
                                </div>
                            </li>
                            <li className="about__list-item">
                                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="58" height="58" rx="4" fill="#FACFCA"/>
                                    <g clipPath="url(#clip0_3_4669)">
                                        <g filter="url(#filter0_d_3_4669)">
                                            <path d="M39 30H34C32.625 30 31.5 31.125 31.5 32.5V40C31.5 41.375 32.625 42.5 34 42.5H39C40.375 42.5 41.5 41.375 41.5 40V32.5C41.5 31.125 40.375 30 39 30Z" fill="white"/>
                                            <path d="M24 17.5H19C17.625 17.5 16.5 18.625 16.5 20V27.5C16.5 28.875 17.625 30 19 30H24C25.375 30 26.5 28.875 26.5 27.5V20C26.5 18.625 25.375 17.5 24 17.5Z" fill="white"/>
                                            <path d="M39 17.5H34C32.625 17.5 31.5 18.625 31.5 20V22.5C31.5 23.875 32.625 25 34 25H39C40.375 25 41.5 23.875 41.5 22.5V20C41.5 18.625 40.375 17.5 39 17.5Z" fill="white"/>
                                            <path d="M24 35H19C17.625 35 16.5 36.125 16.5 37.5V40C16.5 41.375 17.625 42.5 19 42.5H24C25.375 42.5 26.5 41.375 26.5 40V37.5C26.5 36.125 25.375 35 24 35Z" fill="white"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_3_4669" x="14.5" y="17.5" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dx="2" dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.270588 0 0 0 0 0.345098 0 0 0 0 0.501961 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_4669"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_4669" result="shape"/>
                                        </filter>
                                        <clipPath id="clip0_3_4669">
                                            <rect width="30" height="30" fill="white" transform="translate(14 15)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="text-wrapper">
                                    <h4 className="text-title">Easy Content</h4>
                                    <p className='text-subtitle'>
                                        Import your demos or build pages visually. Bonus: All images and illustrations included!
                                    </p>
                                </div>
                            </li>
                            <li className="about__list-item">
                                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="58" height="58" rx="4" fill="#F8AEC3"/>
                                    <g clipPath="url(#clip0_3_4660)">
                                        <g filter="url(#filter0_d_3_4660)">
                                            <path d="M42.7867 25.6667H35.16L40.4933 17.6667H23.76L17.36 33.6667H25.48L21.7867 44.7467L42.7867 25.6667Z" fill="white"/>
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_3_4660" x="15.36" y="17.6667" width="33.4267" height="35.08" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dx="2" dy="4"/>
                                            <feGaussianBlur stdDeviation="2"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.270588 0 0 0 0 0.345098 0 0 0 0 0.501961 0 0 0 0.2 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_4660"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_4660" result="shape"/>
                                        </filter>
                                        <clipPath id="clip0_3_4660">
                                            <rect width="32" height="32" fill="white" transform="translate(14 15)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div className="text-wrapper">
                                    <h4 className="text-title">Fast and Reliable</h4>
                                    <p className='text-subtitle'>
                                        No heavy-weight plugins. No builders. No unneccesary file loading. Pure WordPress.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
