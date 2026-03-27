import { cookies } from "next/headers";
import {getDisplayMappings, getCatalogItems} from "../utils/catalog";
import Header from "../components/Header";

export default async function Home() {
    const cookieStore = await cookies();
    const userType = cookieStore.get("audience")?.value || "guest";

  return (
    <div>
     <Header userType={userType}/>
    </div>
  );
}
