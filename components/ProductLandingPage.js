"use client";

import {useMemo, useState} from "react";

import Header from "./Header";
import Filters from "./Filters";

export default function ProductLandingPage({ initialProducts, mappings, userType}) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    const categories = useMemo(() =>{
        //somehow I am getting 2 Tools, so I am going to use SET method.
        return ["all", ...new Set(initialProducts.map(product => product.category))]
    } , [initialProducts]);

    return (
        <div>
            <Header userType={userType}/>
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
