function Article({title,body}){
    return(
        <>
        <article className="article">
            <h3 className="article__heading heading heading--tertiary" name='title'>{title}</h3>
            <p className="article__paragraph paragraph" name='body'>{body}</p>
        </article>
        </>
    )
}

export default Article;