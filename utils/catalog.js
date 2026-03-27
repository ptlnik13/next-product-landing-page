import {contentfulClient} from "@/datalayer/contentful/contentful";


async function getEntries(content_type, order) {
    return contentfulClient.getEntries({content_type, order: [order]});
}

export async function getCatalogItems() {
    try {
        const response = await getEntries("catalogItem", "fields.title");

        return response?.items?.map(item => {
            const {fields = {}} = item;
            // console.log(fields);

            return {
                id            : item.sys?.id,
                title         : fields?.title || "",
                slug          : fields?.slug || "",
                imageUrl      : fields?.image?.fields?.file?.url ? `https:${fields.image.fields.file.url}` : "",
                priceLoggedOut: fields?.priceLoggedOut ?? 0,
                priceLoggedIn : fields?.priceLoggedIn ?? 0,
                category      : fields?.category || "",
                cardSet       : fields?.cardSet || "A",
                attributes    : {
                    rating  : fields?.rating ?? 0,
                    color   : fields?.color || "",
                    size    : fields?.size || "",
                    material: fields?.material || "",
                },
            }
        })
    } catch (e) {
        console.error("getCatalogItems fetch error:", e);
        return [];
    }
}

export async function getDisplayMappings() {
    try {
        const response = await getEntries("displayMapping", "fields.name");

        return response?.items?.map((item) => {
            const {fields = {}} = item;

            return {
                id                 : item.sys?.id,
                name               : fields?.name || "",
                key                : fields?.key || "",
                showPriceFirst     : fields?.showPriceFirst ?? true,
                showBadges         : fields?.showBadges ?? true,
                highlightAttributes: fields?.highlightAttributes || [],
            };
        });
    } catch (e) {
        console.error("getDisplayMappings fetch error:", e);
        return [];
    }
}
