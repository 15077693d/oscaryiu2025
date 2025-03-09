"use client";

import { api } from "~/trpc/react";
import VisitorCommentForm from "./_components/visitorComponentForm";

export default function Page() {
  const { data: comments, isLoading } = api.visitorComment.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="text-center p-8 text-lg  c">
        Loading comments... (I&apos;m using neon and vercel free tier, so ...)
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto p-8 font-sans space-y-3 max-h-[100vh]">
      <h1 className="text-4xl ">Visitor Comments</h1>
      <div className="space-y-1 overflow-y-auto max-h-[calc(100vh_-_500px)]">
        {comments?.map((comment) => (
          <div key={comment.id} className="flex items-center">
            <div className="mr-5 w-[100px]">
              <h3 className="text-lg">{comment.name}</h3>
              <time className="text-sm text-gray-500">
                {new Date(comment.timestamp * 1000).toLocaleDateString()}
              </time>
            </div>
            <p className="leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>
      <VisitorCommentForm />
    </div>
  );
}
