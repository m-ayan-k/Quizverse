"use client"
import { Button } from './ui/button';
import { signIn } from "next-auth/react";

type Props = {
    text:string;
}

const SignIn = ({text}: Props) => {
  return (
    <Button onClick={()=>{
        signIn("google").catch(console.error);
    }}
    >
        {text}
    </Button>
  )
}

export default SignIn