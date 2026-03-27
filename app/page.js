import {cookies} from "next/headers";

import {getDisplayMappings, getCatalogItems} from "../utils/catalog";

import ProductLandingPage from "../components/ProductLandingPage";
import NoCatalogData from "../components/NoCatalogData";

export default async function Home() {
    const cookieStore = await cookies();
    const userType = cookieStore.get("audience")?.value || "guest";

    const allItems = await getCatalogItems();
    const displayMappings = await getDisplayMappings();

    if (!allItems.length || !displayMappings.length) return <NoCatalogData/>;


    // visible Card logic.
    const visibleItems = userType === 'member' ? allItems : allItems.filter(item => item.cardSet === 'A');

    // Price logic.
    const itemsWithAudiencePrice = visibleItems.map(item => ({
        ...item,
        price: userType === 'member' ? item.priceLoggedIn : item.priceLoggedOut,
    }))


    return (
        <div>
            <ProductLandingPage
                initialProducts={itemsWithAudiencePrice}
                userType={userType}
                mappings={displayMappings}
            />
        </div>
    );
}
