"use server";

import axios from "axios";

export async function getAdzunaCategoriesAction() {
    const { ADZUNA_BASE_URL = "", ADZUNA_APP_ID = "", ADZUNA_API_KEY = "" } = process.env;

    try {
        const response = await axios.get(ADZUNA_BASE_URL + '/categories', {
            params: {
                app_id: ADZUNA_APP_ID,
                app_key: ADZUNA_API_KEY,
            }
        });

        return { success: true, data: response.data.results };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Internal Server Error" };
    }
}

export async function getAdzunaJobStatisticsAction(category: string, months: number) {
    const { ADZUNA_BASE_URL = "", ADZUNA_APP_ID = "", ADZUNA_API_KEY = "" } = process.env;

    if (!ADZUNA_BASE_URL) {
        return { success: false, message: "ADZUNA_BASE_URL is not defined" };
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

        console.log(response.data);

        return { success: true, data: response.data.month };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Internal Server Error" };
    }
}