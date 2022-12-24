import HeroContent from '../HeroContent/HeroContent';
import NewsDashboard from '../NewsDashboard/NewsDashboard';
import './_hero.scss';

function Hero (){
    return(
        <>
        <section className="hero">
            <HeroContent />
            <NewsDashboard />
        </section>
        </>
    )
}

export default Hero;