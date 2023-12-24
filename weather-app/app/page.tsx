import { Toggler } from "@/components/Toggler";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlacePicker from "@/components/PlacePicker";


export default function Home() {
  return (
      <main className="font-cabin min-h-screen bg-[#dee2e6] dark:bg-[#212529] p-10 flex flex-col justify-center items-center">
        <Card className="w-[400px] lg:w-[600px]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-2">
              Weather<span>GPT</span>
            </CardTitle>
            <CardDescription className="text-[1rem] text-center">
              Find the weather condition with ChatGPT-3.5,Nextjs-14,Taliwind
            </CardDescription>
          </CardHeader>
          <hr className="mb-4" />
          <CardContent>
            <PlacePicker />
          </CardContent>
        </Card>
      </main>
  );
}
