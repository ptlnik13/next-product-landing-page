
export default function ProductCardAttributes({ attributes, price }) {
    return (
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                {Object.entries(attributes).map(([key, value]) => (
                    <div key={key} className="rounded-lg bg-gray-50 px-3 py-2">
                        <span className="font-medium text-gray-800">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>:{" "}
                        {String(value)}
                    </div>
                ))}
            </div>
            <div className="text-lg font-semibold text-gray-900">
                ${Number(price).toFixed(2)}
            </div>
        </div>
    );
}
