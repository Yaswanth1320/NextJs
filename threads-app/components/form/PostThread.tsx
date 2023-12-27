"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Threadvalidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.action";
import { useOrganization } from "@clerk/nextjs";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
  

function PostThread({ userId }:{ userId: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const { organization } = useOrganization();

    const form = useForm({
      resolver: zodResolver(Threadvalidation),
      defaultValues: {
        thread: '',
        accountId: userId,
      },
    });


const onSubmit = async (values: z.infer<typeof Threadvalidation>) => {
  await createThread({
    text: values.thread,
    author: userId,
    communityId: organization ? organization.id : null,
    path: pathname,
  });

  router.push('/');
};

  return (
    <Form {...form}>
      <form
        className="font-kanit flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="ml-1 mt-5 text-base-semibold text-light-2">
                Content
              </FormLabel>
              <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
                <Textarea
                  rows={15}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-slate-600">Post thread</Button>
      </form>
    </Form>
  );
}

export default PostThread
