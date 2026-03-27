"use client";

import {useState} from "react";

import Header from "./Header";
import Filters from "./Filters";

export default function ProductLandingPage({ userType}) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    const categories = ["all", "shoes", "jewelry", "watches", "accessories"];

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
