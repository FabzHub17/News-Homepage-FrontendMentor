import News from '../News/News';
import './_articleRank.scss';
import pcImg from './../../assets/images/image-retro-pcs.jpg';
import keyboardImg from './../../assets/images/image-top-laptops.jpg';
import gamingImg from './../../assets/images/image-gaming-growth.jpg';

function ArticleRank(){

    return(
        <>
        <section className="article-rank">
            <News img= {pcImg} index={'01'} title={'title'} body={'context'} />
            <News img= {keyboardImg} index={'02'} title={'title'} body={'context'} />
            <News img= {gamingImg} index={'03'} title={'title'} body={'context'} />
        </section>
        </>
    )
}

export default ArticleRank;