"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

export const schema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: "Please select atleast one adult",
    })
    .max(15, {
      message: "You can't book more than 15 adults.",
    }),
  childrens: z.string().min(0).max(12, {
    message: "You can't book more than 12 children.",
  }),
  rooms: z.string().min(1, {
    message: "Should select atleast one room",
  }),
});

export default function SearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      childrens: "0",
      rooms: "1",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    console.log(values);

    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const cheakin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL("https://www.booking.com/searchresults.html");
    url.searchParams.set("ss", values.location);
    url.searchParams.set("group_adults", values.adults);
    url.searchParams.set("group_children", values.childrens);
    url.searchParams.set("no_rooms", values.rooms);
    url.searchParams.set("checkin", cheakin);
    url.searchParams.set("checkout", checkout);

    router.push(`/search?url=${url.href}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-5xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white flex">
                  Location
                  <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    placeholder="India,Ap"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Dates</FormLabel>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "lg:w-[220px] w-full justify-start text-left font-normal bg-white",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LL-dd-y")}
                              {" to "}
                              {format(field.value?.to, "LL-dd-y")}
                            </>
                          ) : (
                            format(field.value?.from, "LL-dd-y")
                          )
                        ) : (
                          <span>Select your date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value.from}
                      selected={field.value}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full item-center space-x-2">
          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white">adults</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white"
                      placeholder="Adults.."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="childrens"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white">childrens</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white"
                      placeholder="childrens.."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="grid items-center flex-1">
            <FormField
              control={form.control}
              name="rooms"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white">rooms</FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white"
                      placeholder="rooms.."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-auto">
            <Button
              type="submit"
              className="hover:bg-[#588157] bg-[#3a5a40] text-base"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
