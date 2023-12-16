"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState<null | string>(null)

  async function signInWithEmail() {
    const signinResult = await signIn("email",{
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false
    });

    if(!signinResult){
        return toast({
          title : 'Oops',
          description : 'Something went wrong try any later!',
          variant: "destructive"
        })
    }

    return toast({
      title : 'Success',
      description :"A link has been send to your email"
      
    })
  }
  return (
    <form action={signInWithEmail}>
      <div className="flex flex-col gap-y-2 text-gray-400">
        <Label className="mx-2 text-[12px]">email</Label>
        <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="enter your email" />
      </div>
      <Button type="submit" className="mt-6 w-full">Login with email</Button>
    </form>
  );
}

export default SignUpForm