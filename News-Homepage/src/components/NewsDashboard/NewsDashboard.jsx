import Article from '../Article/Article';
import './_newsDashboard.scss';

function NewsDashboard(){
    return(
        <>
         <div className="news__container">
            <h1 className="news__heading heading heading--secondary">New</h1>
            <Article />
            <Article />
            <Article />
         </div>
        </>
    )
}

export default NewsDashboard;