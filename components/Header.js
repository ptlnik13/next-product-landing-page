"use client";

import {useRouter} from 'next/navigation';

import {switchAudience} from "../utils/checkAudience";

export default function Header({userType}) {
    const router = useRouter();
    const isMember = userType === "member";

    const onSwitchAudience = async () => {
        await switchAudience(isMember ? "guest" : "member");
        router.refresh(); // refreshing for new cookie value.
    }

    return(
        <header className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Product Catalog</h1>
                <p className="mt-1 text-sm text-gray-600">
                    Best shop for your favorite products
                </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          Audience: {isMember ? "Logged in" : "Logged out"}
        </span>

                <button
                    onClick={onSwitchAudience}
                    className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
                >
                    Switch to {isMember ? "Guest" : "Member"}
                </button>
            </div>
        </header>
    )

}
