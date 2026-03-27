

export default function ProductCardSkeleton() {
    return (
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="aspect-[4/3] w-full animate-pulse bg-gray-200"/>

            <div className="space-y-3 p-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                        <div className="h-3 w-20 animate-pulse rounded bg-gray-200"/>
                        <div className="h-5 w-36 animate-pulse rounded bg-gray-200"/>
                    </div>

                    <div className="h-6 w-14 animate-pulse rounded-full bg-gray-200"/>
                </div>

                <div className="h-7 w-24 animate-pulse rounded bg-gray-200"/>

                <div className="flex flex-wrap gap-2">
                    <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200"/>
                    <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200"/>
                    <div className="h-6 w-14 animate-pulse rounded-full bg-gray-200"/>
                </div>
            </div>
        </article>
    );
}
