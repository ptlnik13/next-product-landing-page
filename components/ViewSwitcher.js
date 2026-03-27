

export default function ViewSwitcher({mappings, activeKey, onChange}) {
    return (
        <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-3">
                <h2 className="text-sm font-semibold text-gray-900">Switch View</h2>
                <p className="text-sm text-gray-600">
                    Change which product details are emphasized first!!
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {mappings.map((mapping) => {
                    const active = mapping.key === activeKey;

                    return (
                        <button
                            key={mapping.id}
                            onClick={() => onChange(mapping.key)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                active ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {mapping.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
