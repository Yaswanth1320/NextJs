import * as z from "zod";

export const Threadvalidation = z.object({
  thread: z.string().nonempty().min(3, {
    message: "minimum three charaters"
  }),
  accountId: z.string()
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3, {
    message: "minimum 3 charaters"
  }),

});
