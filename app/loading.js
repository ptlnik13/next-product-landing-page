import ProductCardSkeleton from "../components/productCards/ProductCardSkeleton";

export default function Loading() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
                    <div className="space-y-3">
                        <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />
                        <div className="h-4 w-72 animate-pulse rounded bg-gray-200" />
                    </div>

                    <div className="h-10 w-36 animate-pulse rounded-xl bg-gray-200" />
                </div>

                <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="mb-3 h-5 w-40 animate-pulse rounded bg-gray-200" />
                        <div className="flex gap-2">
                            <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200" />
                            <div className="h-10 w-28 animate-pulse rounded-full bg-gray-200" />
                        </div>
                    </div>

                    <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
                        <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
                        <div className="h-12 animate-pulse rounded-xl bg-gray-200" />
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
