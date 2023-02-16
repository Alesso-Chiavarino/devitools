const ToolCard = ({ name, description, url, img }) => {
    return (
        <article className="border-2 border-violet-400 p-5 flex flex-col justify-between gap-5 rounded-md">
            <a href={url} target="_blank" rel="noreferrer" className="img-container overflow-hidden pb-5 border-b-2 border-violet-400">
                <img src={img} alt={name} className="object-cover hover:scale-110 opacity-90 hover:opacity-100 transition-all duration-300 rounded-md" />
            </a>
            <h3 className="text-xl font-bold">{name}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noreferrer" className="bg-violet-400 w-1/4 rounded-md text-center font-bold py-1 px-2 hover:bg-violet-500">Learn More</a>
        </article>
    );
};

export default ToolCard;