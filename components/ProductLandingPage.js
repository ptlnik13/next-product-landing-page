"use client";

import {useMemo, useState} from "react";

import Header from "./Header";
import Filters from "./Filters";
import ViewSwitcher from "./ViewSwitcher";

export default function ProductLandingPage({initialProducts, mappings, userType}) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [mappingKey, setMappingKey] = useState("price_first"); // for presentation change.

    const categories = useMemo(() => {
        //somehow I am getting 2 Tools, so I am going to use SET method.
        return ["all", ...new Set(initialProducts.map(product => product.category))]
    }, [initialProducts]);

    const handleMappingChange = (key) => {
        setMappingKey(key);
        //saving into localstorage, so it won't change on refersh.....
        localStorage.setItem("catalog_mapping", key)
    }

    return (
        <div>
            <Header userType={userType}/>
            <ViewSwitcher mappings={mappings} activeKey={mappingKey} onChange={handleMappingChange}/>
            <Filters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                categories={categories}
            />

        </div>
    )
}
