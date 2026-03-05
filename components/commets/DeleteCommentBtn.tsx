"use client";

import { deleteComment } from "@/libs/deleteComment";
import { useRouter } from "next/navigation";

export default function DeleteCommentBtn({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    await deleteComment(id);
    router.refresh();
  }

  return (
    <button onClick={handleDelete} className="text-red-600 hover:underline">
      Delete
    </button>
  );
}
