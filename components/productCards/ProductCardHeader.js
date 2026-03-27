

export default function ProductCardHeader({ category, title, cardSet }) {
    return (
        <div className="flex items-start justify-between gap-3">
            <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {title}
                </h3>
            </div>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                Set {cardSet}
            </span>
        </div>
    );
}
