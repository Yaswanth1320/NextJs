import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { features } from "@/types";
import Image from "next/image";


export default function Features({feature}: {feature: features}) {
  return (
    <Card className="w-full">
      <CardHeader className="ml-2 mb-4">
        {feature.icon}
      </CardHeader>
      <CardContent>
        <p className="text-2xl">{feature.title}</p>
      </CardContent>
      <CardFooter>
        <p>{feature.desc}</p>
      </CardFooter>
    </Card>
  );
}
