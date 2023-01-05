import './_heroContent.scss';
import heroImg from '../../assets/images/image-web-3-desktop.jpg';

function HeroContent() {
    return (
        <>
            <section className="hero__main">
                <div className="hero__img__container">
                    <img src={heroImg} alt="" className="hero__img" />
                </div>
                <h1 className="hero__heading heading heading--primary">The Bright Future of Web 3.0?</h1>
                <div className="hero__main__container">
                    <p className="hero__paragraph paragraph"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <a href="#" className="hero__btn btn btn--primary">Read more</a>
                </div>
            </section>
        </>
    )
}

export default HeroContent;