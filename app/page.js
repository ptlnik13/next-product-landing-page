import {getDisplayMappings, getCatalogItems} from "../utils/catalog";

export default async function Home() {

  const items = await getCatalogItems();
  const mappings = await getDisplayMappings();

  return (
    <div>
      <h1>Contentful Test</h1>

      <h2>Catalog Items</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>

      <h2>Display Mappings</h2>
      <pre>{JSON.stringify(mappings, null, 2)}</pre>
    </div>
  );
}
