"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { Input } from "../ui/input";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.action";

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

function Comment({ threadId, currentUserImg, currentUserId }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
     await addCommentToThread(threadId,values.thread,JSON.parse(currentUserId),pathname);
     form.reset();
  };

  return (
    <Form {...form}>
      <form
        className="font-kanit comment-form"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3">
              <FormLabel>
                <div className="relative h-14 w-14 object-cover">
                  <Image
                    src={currentUserImg}
                    alt="comment-profile"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                  />
                </div>
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  placeholder="Comment"
                  className="no-focus text-light-1 outline-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-slate-600 rounded-3xl px-8 py-2 !text-small-regular text-light-2 max-xs:w-full !important"
        >
          Reply
        </Button>
      </form>
    </Form>
  );
}

export default Comment;
