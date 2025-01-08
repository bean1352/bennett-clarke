import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    const { ADZUNA_BASE_URL = "", ADZUNA_APP_ID = "", ADZUNA_API_KEY = "" } = process.env;

    try {
        const response = await axios.get(ADZUNA_BASE_URL + '/categories', {
            params: {
                app_id: ADZUNA_APP_ID,
                app_key: ADZUNA_API_KEY,
            }
        });

        return new NextResponse(JSON.stringify(response.data.results), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        const errorMessage = (error as Error).message;
        return new NextResponse(JSON.stringify({ message: "Internal Server Error", error: errorMessage }), {
            status: 500,
        });
    }
}