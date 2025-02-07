import { z } from "zod";

import { createInsertSchema } from "drizzle-zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { visitorComments } from "~/server/db/schema";

// Export the input type
const createVisitorCommentsSchema = createInsertSchema(visitorComments);
export type CreateVisitorCommentInput = z.infer<
  typeof createVisitorCommentsSchema
>;

export const visitorCommentRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(createVisitorCommentsSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(visitorComments).values({
        name: input.name,
        content: input.content,
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const comments = await ctx.db.query.visitorComments.findMany({
      orderBy: (visitorComments, { desc }) => [desc(visitorComments.timestamp)],
    });

    return comments ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
