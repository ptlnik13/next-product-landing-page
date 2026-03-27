import {contentfulClient} from "@/datalayer/contentful/contentful";


async function getEntries(content_type, order) {
    return contentfulClient.getEntries({content_type, order: [order]});
}

export async function getCatalogItems() {
    try {
        const response = await getEntries("catalogItem", "fields.title");
        // console.log("getCatalogItems response:", response);
        return response.items;
    } catch (e) {
        console.error("getCatalogItems fetch error:", e);
        return [];
    }
}

export async function getDisplayMappings() {
    try {
        const response = await getEntries("displayMapping", "fields.name");
        // console.log("getDisplayMappings response:", response);
        return response.items;
    } catch (e) {
        console.error("getDisplayMappings fetch error:", e);
        return [];
    }
}
