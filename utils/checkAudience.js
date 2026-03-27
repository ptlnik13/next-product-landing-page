export async function switchAudience(audience) {

    try{
        await fetch("/api/audience", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ audience: audience }),
            cache: "no-store",
        });
    }catch (e) {
        console.error("Error switching audience:", e);
    }
}
