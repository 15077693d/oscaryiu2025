"use client";

import { getQueryKey } from "@trpc/react-query";
import { useForm } from "react-hook-form";
import { type CreateVisitorCommentInput } from "~/server/api/routers/visitorComment";
import { api, clientQueryClientSingleton } from "~/trpc/react";

export default function VisitorCommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<CreateVisitorCommentInput>();
  const utils = api.useUtils();

  const { mutate } = api.visitorComment.create.useMutation({
    onSuccess: async () => {
      //await utils.visitorComment.getAll.invalidate();
      const key = getQueryKey(api.visitorComment.getAll);
      void clientQueryClientSingleton?.invalidateQueries({ queryKey: key });
      reset();
    },
  });

  const onSubmit = (data: CreateVisitorCommentInput) => {
    mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 font-sans">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-sm"
      >
        <div className="mb-6">
          <input
            {...register("name")}
            placeholder="Your name"
            className="w-full p-3 border text-black border-gray-200 rounded-md text-base mb-2"
            disabled={isLoading}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-6">
          <textarea
            {...register("content")}
            placeholder="Your comment"
            className="w-full p-3 border text-black border-gray-200 rounded-md text-base mb-2 resize-y"
            disabled={isLoading}
            rows={4}
          />
          {errors.content && (
            <span className="text-red-500 text-sm">
              {errors.content.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-3 rounded-md cursor-pointer text-base transition-colors hover:bg-indigo-600 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}
