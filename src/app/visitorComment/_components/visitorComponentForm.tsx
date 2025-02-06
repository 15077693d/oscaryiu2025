"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { type CreateVisitorCommentInput } from "~/server/api/routers/visitorComment";
import { api } from "~/trpc/react";

const visitorCommentValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  content: z.string().min(1, "Comment cannot be empty"),
});

export default function VisitorCommentForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading, isSubmitting },
    reset,
  } = useForm<CreateVisitorCommentInput>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(visitorCommentValidationSchema),
  });
  const utils = api.useUtils();
  const { mutateAsync } = api.visitorComment.create.useMutation({
    onSuccess: async () => {
      await utils.visitorComment.getAll.invalidate();
      reset();
    },
  });

  const onSubmit = async (data: CreateVisitorCommentInput) => {
    await mutateAsync(data);
  };

  return (
    <div className="max-w-3xl mx-auto font-sans">
      <DevTool control={control} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" border-white border p-4"
      >
        <div className="mb-6">
          <input
            {...register("name")}
            placeholder="Your name"
            className="w-full p-3 border border-white bg-transparent   text-base mb-2"
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
            className="w-full p-3 border border-white bg-transparent  text-base mb-2 resize-y"
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
          className=" bg-white disabled:cursor-not-allowed  disabled:text-white disabled:bg-black text-black p-4 cursor-pointer text-base transition-colors hover:bg-black hover:text-white disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </button>
        <Link
          href={"/"}
          type="submit"
          className=" bg-white ml-4 text-black p-4 cursor-pointer text-base transition-colors hover:bg-black hover:text-white "
        >
          Back
        </Link>
      </form>
    </div>
  );
}
