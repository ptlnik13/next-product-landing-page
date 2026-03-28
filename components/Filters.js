export default function Filters({search, setSearch, category, setCategory, categories}) {
    return (
        <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
            <div>
                <label htmlFor="catalog-search" className="mb-2 ml-1 block text-sm font-medium text-gray-700">
                    Search products
                </label>
                <input
                    type="text"
                    placeholder="Search by title, category, color, material"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
                />
            </div>

            <div>
                <label htmlFor="catalog-category" className="mb-2 ml-1 block text-sm font-medium text-gray-700">
                    Filter by category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat === "all" ? "All Categories" : cat}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
