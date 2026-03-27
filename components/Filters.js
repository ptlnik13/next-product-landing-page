export default function Filters({search, setSearch, category, setCategory, categories}) {
    return (
        <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
            <input
                type="text"
                placeholder="Search by title, category, color, material"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"
            />

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
    );
}
