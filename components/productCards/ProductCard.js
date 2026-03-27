import ProductCardImage from "./ProductCardImage";
import ProductCardHeader from "./ProductCardHeader";
import ProductCardBadges from "./ProductCardBadges";
import ProductCardAttributes from "./ProductCardAttributes";

export default function ProductCard({product, mapping}) {
    const attributes = product.attributes;
    const highlightAttributes = mapping.highlightAttributes;

    const badges = highlightAttributes.map(key => ({
        // key like color, size, material, rating and value like black, 4.5,
        key,
        value: attributes[key],
    })).filter(badge => badge.value !== undefined && badge.value !== null && badge.value !== "");
    // console.log(badges);

    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md hover:scale-[1.02]">
            <ProductCardImage imageUrl={product.imageUrl} title={product.title}/>

            <div className="space-y-3 p-4">
                <ProductCardHeader category={product.category} title={product.title} cardSet={product.cardSet}/>
                {mapping?.showPriceFirst ? (
                    <div className="text-2xl font-bold text-gray-900">
                        ${Number(product.price).toFixed(2)}
                    </div>
                ) : null}

                {mapping?.showBadges ? (<ProductCardBadges badges={badges}/>) : null}

                {!mapping?.showPriceFirst ? (<ProductCardAttributes attributes={attributes} price={product.price}/>) : null}
            </div>
        </div>
    );
}
