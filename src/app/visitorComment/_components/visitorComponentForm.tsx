"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { type CreateVisitorCommentInput } from "~/server/api/routers/visitorComment";
import { api } from "~/trpc/react";
const visitorCommentValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  content: z.string().min(1, "Comment cannot be empty"),
});

export default function VisitorCommentForm() {
  const form = useForm<CreateVisitorCommentInput>({
    defaultValues: {
      name: "",
      content: "",
    },
    resolver: zodResolver(visitorCommentValidationSchema),
  });
  const keysSchema = visitorCommentValidationSchema.keyof();
  const {
    formState: { isLoading, isSubmitting },
    reset,
    handleSubmit,
  } = form;
  const keys = keysSchema.options[0];
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
    <Form {...form}>
      <DevTool control={form.control} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  id={keys[0]}
                  placeholder="Your Name"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Comment</FormLabel>
              <FormControl>
                <Textarea
                  id="content"
                  placeholder="Your Comment"
                  {...field}
                  disabled={isLoading}
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"secondary"} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </Button>
        <Button asChild className="ml-4">
          <Link href={"/"}>Back</Link>
        </Button>
      </form>
    </Form>
  );
}
