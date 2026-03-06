import { readComments } from "@/libs/storage";

export async function getComments(postId: string) {
  const comments = await readComments();

  return comments
    .filter((c: any) => c.postId === postId)
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}
