import Article from '../Article/Article';
import './_news.scss';

function News({img,index,title,body}) {
    return (
        <>

            <div className="news">
                <div className="news__img__container">
                    <img src={img} alt="news article" className="news__img" />
                </div>
                <div className="news__index">{index}</div>

                <Article title={title} body={body}/>
            </div>
        </>

    )

}

export default News;