import News from '../News/News';
import './_articleRank.scss';
import pcImg from './../../assets/images/image-retro-pcs.jpg';
import keyboardImg from './../../assets/images/image-top-laptops.jpg';
import gamingImg from './../../assets/images/image-gaming-growth.jpg';

function ArticleRank(){

    return(
        <>
        <section className="article-rank">
            <News img= {pcImg} index={'01'} title={'Reviving Retro PCs'} body={'What happens when old PCs are given modern upgrades?'} />
            <News img= {keyboardImg} index={'02'} title={'Top 10 Laptops of 2022'} body={'Our best picks for for various needs and budjets.'} />
            <News img= {gamingImg} index={'03'} title={'The Growth of Gaming'} body={'How the pandemic has sparked fresh opportunities.'} />
        </section>
        </>
    )
}

export default ArticleRank;