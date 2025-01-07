import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method !== "POST") {
        return new Response(
            JSON.stringify({ message: "Only POST requests allowed" }),
            { status: 405 },
        );
    }

    const data = await req.json();
    const { category, months } = data;


    const { ADZUNA_BASE_URL = "", ADZUNA_APP_ID = "", ADZUNA_API_KEY = "" } = process.env;

    if (!ADZUNA_BASE_URL) {
        return new NextResponse(JSON.stringify({ message: "ADZUNA_BASE_URL is not defined" }), {
            status: 500,
        });
    }

    try {
        const response = await axios.get(ADZUNA_BASE_URL + '/history', {
            params: {
                app_id: ADZUNA_APP_ID,
                app_key: ADZUNA_API_KEY,
                category,
                months,
            }
        });

        console.log(response.data.month);

        return new NextResponse(JSON.stringify(response.data.month), {
            status: 200,
        });
    } catch (error) {
        const errorMessage = (error as Error).message;
        return new NextResponse(JSON.stringify({ message: "Internal Server Error", error: errorMessage }), {
            status: 500,
        });
    }
}