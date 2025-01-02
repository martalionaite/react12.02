import { useGlobalContext } from "../../context/context";

const Stories = () => {
    const { isLoading, hits, removeStory } = useGlobalContext(); // Pataisyta funkcijos pavadinimo rašyba

    if (isLoading) {
        return <div className="loading"></div>;
    }

    return (
        <section className="stories">
            {hits.map((story) => {
                const { objectID, title, num_comments, url, points, author } = story;
                return (
                    <article key={objectID} className="story">
                        <h4 className="title">{title}</h4>
                        <p className="info">
                            {points} points by <span>{author}</span> | {num_comments} comments
                        </p>
                        <div>
                            <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                            <button onClick={() => removeStory(objectID)} className="remove-btn">
                                Remove
                            </button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Stories;
