"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateComment } from "@/libs/updateComment";
import DeleteCommentBtn from "./DeleteCommentBtn";

export default function CommentContent({ comment, isAuthor }: any) {
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(comment.text);

  async function handleSave() {
    if (!value.trim()) return;

    await updateComment(comment.id, value);
    setEditing(false);
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-2">
      {editing ? (
        <textarea
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded p-2 text-sm"
        />
      ) : (
        <p className="text-sm">{value}</p>
      )}

      {isAuthor && (
        <div className="flex gap-3 text-sm">
          {editing ? (
            <button
              onClick={handleSave}
              className="text-green-600 hover:underline"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
          )}

          <DeleteCommentBtn id={comment.id} />
        </div>
      )}
    </div>
  );
}
