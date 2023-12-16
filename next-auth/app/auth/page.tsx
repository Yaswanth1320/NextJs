import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function AuthRoute() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">Sign up for more privilages</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col">
                <div className="flex flex-col gap-y-2 text-gray-400">
                    <Label className="mx-2 text-[12px]">email</Label>
                    <Input name="email" type="email" placeholder="enter your email"/>
                </div>
                <Button className="mt-6">Login with email</Button>
                <Button className="mt-4">Login with Github <Github className="w-4 h-4 mx-2" /></Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
