import {useGlobalContext } from "../../context/context"
const Stories = () => {
    const {isLoading, hits, romoveStory} = useGlobalContext();
    if(isLoading){
        return <div className="loading"></div>
    }
    return (
        <section className="stories">
            {hits.map((story) => {
                const {objectID, title, num_comments, url, points, author} = story;
                return(
                <article className="story">
                    <h4 className="title">{title}</h4>
                    <p className="info">{points} points by <span>{author} |</span> {num_comments}(' ')</p>
                    <div>
                        <a href={url} className="read-link" target="_blank">Read more</a>
                        <button>remove</button>
                        <button onClick={() => { romoveStory(objectID)}} className="romove-btn">romove</button>
                    </div>
                </article> 
                )
            })}
        </section>
    )
}

export default Stories