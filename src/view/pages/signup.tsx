import { useForm } from "react-hook-form";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus, User, Mail, Lock, CircleX } from "lucide-react";
import { InputPassword } from "../../components/ui/input-password";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "../components/spinner/spinner";

const signupSchema = z.object({
  username: z.string().min(1, { message: 'Username is required'}),
  email: z.string().email({ message: 'Email is not valid' }),
  password: z.string().min(8, { message: 'Password too short' }).max(20, 'Password too long')
})

type SignupSchema = z.infer<typeof signupSchema>

export function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { 
    register, 
    handleSubmit,
    formState: { errors } 
  } = useForm<SignupSchema>({ resolver: zodResolver(signupSchema) });
  
  async function signinHandler({ username, email, password }: SignupSchema) {
    setIsLoading(true)
    await fetch('http://localhost:3000/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })
    setIsLoading(false)
  }
  return (
    <Card 
      className="w-full max-w-sm mx-auto translate-y-1/2 select-none"
    >      
    <form onSubmit={handleSubmit(signinHandler)} noValidate>
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide">Sign up</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label 
              htmlFor="username"
              className="tracking-wide"
            >
              Username
            </Label>
            <Input 
              id="username" 
              type="text" 
              autoComplete="off"
              placeholder="Enter your username" 
              iconStart={<User size={15} />}
              {...register("username")} 
            />
            {errors.username && (
              <p className="text-red-600 text-xs flex gap-1 items-center">
                <CircleX size={14} strokeWidth={1.5} />
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label 
              htmlFor="email"
              className="tracking-wide"
            >
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              autoComplete="off"
              iconStart={<Mail size={14} />}
              {...register("email")} 
              required 
            />
            {errors.email && (
              <p className="text-red-600 text-xs flex gap-1 items-center">
                <CircleX size={14} strokeWidth={1.5} />
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label 
              htmlFor="password"
              className="tracking-wide"
            >
              Password
            </Label>
            <InputPassword 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              iconStart={<Lock size={14} />}
              iconEnd
              required 
              {...register("password")} 
            />
            {errors.password && (
              <p className="text-red-600 text-xs flex gap-1 items-center">
                <CircleX size={14} strokeWidth={1.5} />
                {errors.password.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex items-center gap-2 mb-5 text-sm text-muted-foreground">
            <p>
              Already have an account
            </p>
            <Link 
              to="/signin"
              className="text-sm text-muted-foreground hover:text-black transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              Sign in
            </Link>
          </div>
          <Button 
            className="w-full flex gap-2 tracking-wide" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading 
              ? 
                <div className="flex items-center gap-1">
                  <Spinner className="size-4" />
                  <p>Loading...</p>
                </div>
              :
                <div className="flex items-center gap-2">
                  Sign up
                  <UserPlus size={18} strokeWidth={1.7} />
                </div>
            }
          </Button>
        </CardFooter>
    </form>
    </Card>
  )
}

