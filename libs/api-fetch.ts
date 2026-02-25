import { Api, ApiResponse } from "@/types/apis";

export async function fetchApis(apiUrl: string): Promise<Api[] | null> {
  try {
    const res: Response = await fetch(apiUrl, {
      next: { revalidate: 300 },
    });

    if (res.status === 404) {
      return null;
    }

    if (!res.ok) {
      const errorData = await res.json();

      throw new Error("Failed to fetch news", errorData);
    }

    const data: ApiResponse = await res.json();
    return data.articles ?? [];
  } catch (error) {
    throw new Error("Failed to fetch news");
  }
}
