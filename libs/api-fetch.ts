import { Api, ApiResponse } from "@/types/apis";

export async function fetchApis(apiUrl: string): Promise<Api[]> {
  try {
    const res: Response = await fetch(apiUrl, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status}`);
    }

    const data: ApiResponse = await res.json();

    return data.articles ?? [];
  } catch (error) {
    console.error("Fetch API Error:", error);
    return [];
  }
}
