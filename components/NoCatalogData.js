"use client";
export default function NoCatalogData() {
    return(
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-900">
                    No catalog data found
                </h1>
                <p className="mt-3 text-gray-600">
                    Please check your Contentful entries and make sure they are published.
                </p>
            </div>
        </main>
    )
}
