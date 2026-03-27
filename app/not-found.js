import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
                <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
                <p className="mt-3 text-gray-600">
                    The page you are looking for does not exist or may have been moved.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
                >
                    Back to catalog
                </Link>
            </div>
        </main>
    );
}
