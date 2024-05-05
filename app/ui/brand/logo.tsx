import Image from 'next/image';

interface ProductCardProps {
    name: string;
    imageName: string;
}

export default function BrandLogo({ name, imageName }: ProductCardProps){
    const imageUrl = process.env.BACKEND_URL + '/images/' + imageName;
    return (
        <div className="max-w-sm m-5 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-5">
                <div className="w-full mb-3">
                    <Image 
                        src={imageUrl} 
                        alt={`Image of ${name}`}
                        width={300} height={300}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                </div>
            </div>
        </div>
    )
}