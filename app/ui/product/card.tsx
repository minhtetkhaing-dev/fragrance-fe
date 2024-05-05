import Image from 'next/image';

interface ProductCardProps {
    name: string
    imageName: string
}

export default function ProductCard({ name, imageName }: ProductCardProps){
    const imageUrl = process.env.BACKEND_URL + '/images/' + imageName;
    return (
        <div className="max-w-sm m-5 bg-white border rounded border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <div className="w-full mb-3">
                    <Image src={imageUrl} alt={`Image of ${name}`}  width={300} height={150} />
                </div>
                <div className="flex flex-col items-center">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="
                                                py-2 
                                                px-4 
                                                text-sm 
                                                font-medium 
                                                text-gray-900 
                                                focus:outline-none 
                                                bg-white 
                                                rounded-lg 
                                                border 
                                                border-gray-200 
                                                hover:bg-gray-100 
                                                hover:text-blue-700 
                                                focus:z-10 
                                                focus:ring-4 
                                                focus:ring-gray-100 
                                                dark:focus:ring-gray-700 
                                                dark:bg-gray-800 
                                                dark:text-gray-400 
                                                dark:border-gray-600 
                                                dark:hover:text-white 
                                                dark:hover:bg-gray-700"
                        >
                            Detail
                        </a>
                        <a href="#" className="
                                                inline-flex 
                                                ms-2 
                                                items-center 
                                                px-4 py-2 
                                                text-sm 
                                                font-medium 
                                                text-center 
                                                text-white 
                                                bg-blue-700 
                                                rounded-lg 
                                                hover:bg-blue-800 
                                                focus:ring-4 
                                                focus:outline-none 
                                                focus:ring-blue-300 
                                                dark:bg-blue-600 
                                                dark:hover:bg-blue-700 
                                                dark:focus:ring-blue-800"
                            >
                                Add
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
