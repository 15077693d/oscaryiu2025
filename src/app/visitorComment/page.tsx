"use client";

import { api } from "~/trpc/react";
import VisitorCommentForm from "../_components/visitorComponentForm";

export default function Page() {
  const { data: comments, isLoading } = api.visitorComment.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="text-center p-8 text-lg text-gray-600">
        Loading comments...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 font-sans">
      <h1 className="text-4xl mb-8 text-gray-800">Visitor Comments</h1>

      <div className="mb-12">
        {comments?.map((comment) => (
          <div
            key={comment.id}
            className="bg-gray-50 rounded-lg p-6 mb-4 shadow-sm"
          >
            <h3 className="m-0 mb-2 text-gray-700 text-lg">{comment.name}</h3>
            <p className="m-0 mb-2 text-gray-700 leading-relaxed">
              {comment.content}
            </p>
            <time className="text-sm text-gray-500">
              {new Date(comment.timestamp * 1000).toLocaleDateString()}
            </time>
          </div>
        ))}
      </div>
      <VisitorCommentForm />
    </div>
  );
}
