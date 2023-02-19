import { HiArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const ToolCard = ({ name, description, url, img, recommended }) => {

    return (
        <article className="border-2 border-violet-400 p-5 flex flex-col justify-between gap-5 rounded-md">
            <a href={url} target="_blank" rel="noreferrer" className="img-container overflow-hidden pb-5 border-b-2 border-violet-400">
                <Image width={700} height={500} src={img} alt={name} className="object-cover hover:scale-110 opacity-90 hover:opacity-100 transition-all duration-300 rounded-md" />
            </a>
            <h3 className="text-xl font-bold">{name}</h3>
            <p>{description}</p>
            <div className='flex justify-between'>
                <a href={url} target="_blank" rel="noreferrer" className="bg-violet-400 gap-1 w-fit items-center rounded-md text-center font-bold py-1 px-2 flex hover:bg-violet-500">Learn More <HiArrowNarrowRight /></a>
                {recommended && <span className='text-yellow-300 flex items-center gap-1 font-bold text-sm'><AiFillStar /> RECOMMENDED</span>}
            </div>
        </article>
    );
};

export default ToolCard;