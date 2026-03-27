"use client";

import {useEffect, useMemo, useState} from "react";

import Header from "./Header";
import Filters from "./Filters";
import ViewSwitcher from "./ViewSwitcher";
import ProductCard from "./productCards/ProductCard";

export default function ProductLandingPage({initialProducts, mappings, userType}) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [mappingKey, setMappingKey] = useState("price_first"); // for presentation change.

    useEffect(() => {
        const savedMapping = localStorage.getItem("catalog_mapping");
        if (savedMapping) {
            setMappingKey(savedMapping);
        }
    }, []);

    const activeMapping = mappings.find(mapping => mapping.key === mappingKey) || mappings[0];

    const categories = useMemo(() => {
        //somehow I am getting 2 Tools, so I am going to use SET method.
        return ["all", ...new Set(initialProducts.map(product => product.category))]
    }, [initialProducts]);

    const filteredItems = useMemo(() => {
        return initialProducts.filter(product => {
            const matchCategory = category === 'all' || product.category === category;
            const searchQuery = search.trim().toLowerCase();

            // title, category, or any attributes matches?????
            const matchesSearch =
                product.title.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery) ||
                !searchQuery ||
                Object.values(product.attributes).some(attr => {
                    // console.log(typeof attr); // Getting ratings as number, we need to convert to String....
                    return String(attr).toLowerCase().includes(searchQuery)
                });

            return matchCategory && matchesSearch;

        });
    }, [initialProducts, category, search])

    const handleMappingChange = (key) => {
        setMappingKey(key);
        //saving into localstorage, so it won't change on refersh...
        localStorage.setItem("catalog_mapping", key)
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
                <Header userType={userType}/>
                <div className="mt-6 space-y-4">
                    <ViewSwitcher mappings={mappings} activeKey={mappingKey} onChange={handleMappingChange}/>
                    <Filters
                        search={search}
                        setSearch={setSearch}
                        category={category}
                        setCategory={setCategory}
                        categories={categories}
                    />
                </div>
                {
                    filteredItems.length === 0 ? (
                            <div className="mt-10 rounded-2xl bg-white p-8 text-center text-gray-600 shadow-sm">
                                No products found.
                            </div>
                        ) :
                        (
                            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {filteredItems.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        mapping={activeMapping}
                                    />
                                ))}
                            </div>
                        )
                }
            </div>
        </main>
    )
}
