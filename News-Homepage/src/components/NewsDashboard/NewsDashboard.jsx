import Article from '../Article/Article';
import './_newsDashboard.scss';

function NewsDashboard() {
    return (
        <>
            <div className="news__container">
                <h1 className="news__heading heading heading--secondary">New</h1>
                <Article title="Hydrogen VS Electric Cars" body="Will hydrogen-fuelled cars ever catch up to EVs?" />
                <Article title="The Downsides of AI Artistry" body="What are the possible adverse effects of on-demand AI image generation?"/>
                <Article title="Is VC Funding Drying Up?" body="Private funding by VC firm is down 50% YOY.We take a look at what that means"/>
            </div>
        </>
    )
}

export default NewsDashboard;