import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardWithForm() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[350px] text-center">
        <CardHeader>
          <div className="flex items-center font-abc">
            <Image src="/icon.png" width={100} height={100} />
            <CardTitle className="text-3xl">Welcome to facebook</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-blue-500 text-white p-2 rounded-xl">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
