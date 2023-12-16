import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInGithub from "../components/SignInGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignUpForm from "../components/SignUpForm";

export default async function AuthRoute() {
    const session = await getServerSession(authOptions);

    if(session){
        return redirect("/")
    }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">Sign up for more privilages</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col">
                <SignUpForm/>
                <SignInGithub />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
