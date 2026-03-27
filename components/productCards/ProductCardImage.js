import Image from "next/image";

export default function ProductCardImage({imageUrl, title}) {
    return (
        <div className="relative aspect-[1/1] sm:aspect-[4/3] w-full bg-gray-100 min-h-72">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                />
            ) : null}
        </div>
    );
}
