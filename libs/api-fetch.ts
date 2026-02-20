import { Api, ApiResponse } from "@/types/apis";

export async function fetchApis(apiUrl: string): Promise<Api[]> {
  try {
    const res: Response = await fetch(apiUrl, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Status:", res.status);
      console.error("Error Data:", errorData);
      throw new Error("Failed to fetch news");
    }

    const data: ApiResponse = await res.json();
    // throw new Error("Failed to fetch news");
    return data.articles ?? [];
  } catch (error) {
    console.error("News API Error:", error);
    return [];
  }
}
