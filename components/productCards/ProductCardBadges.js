

export default function ProductCardBadges({ badges }) {
    return (
        <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
                <span
                    key={badge.key}
                    className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-700"
                >
                    {badge.key.charAt(0).toUpperCase() + badge.key.slice(1)}: {badge.value}
                </span>
            ))}
        </div>
    );
}
