"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const schema = z.object({
    location: z.string().min(2).max(50),
    dates: z.object({
        from: z.date(),
        to: z.date()
    }),
    adults: z.string().min(1, {
        message: "Please select atleast one adult"
    }).max(15, {
        message: "You can't book more than 15 adults."
    }),
    childrens: z.string().min(0).max(12, {
        message: "You can't book more than 12 children."
    }),
    rooms: z.string().min(1,{
        message: "Should select atleast one room"
    }),
})

export default function SearchForm() {
    const router = useRouter();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues:{
            location:"",
            dates: {
                from: undefined,
                to: undefined,
            },
            adults: "1",
            childrens: "0",
            rooms: "1",
            
        }
    })
  return <></>;
}
