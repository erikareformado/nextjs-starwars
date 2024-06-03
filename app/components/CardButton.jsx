import { useRouter } from 'next/navigation';
const CardButton = ({name, image}) => {
    const { push } = useRouter();
    return (
        <div className="rounded-md shadow-lg border-[0.1px] border-yellow-400 p-5 text-white w-[220px] max-h-[320px] hover:drop-shadow-xl hover:shadow-yellow-300 group">
            <div onClick={() => push(`/people/${name.split(' ').join('_')}`)} role="button">
                <img src={image}
                className="flex max-w-52 max-h-48 w-full  h-full justify-content-center "
                alt={name}
                />
                <a 
                className="w-full"
                onClick={() => push(`/people/${name.split(' ').join('_')}`)}
                >
                    <h3 className="text-xl text-center capitalize text-yellow-300 group-hover:text-white font-bold mt-8">
                        {name}
                    </h3>  
                </a> 
            </div>

        </div>
    )
}

export default CardButton