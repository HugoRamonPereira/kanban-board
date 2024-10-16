import { toast } from "sonner";
import Cookies from "js-cookie"

interface SigninProps {
  email: string;
  password: string;
}

interface SigninResponse {
  access_token: string;
}

export const signIn = async (credentials: SigninProps): Promise<SigninResponse> => {
  try {
    const response = await fetch("http://localhost:3000/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.status === 200) {
      toast.success("You have successfully logged in", {
        position: "top-right",
      });
    } 

    const data: SigninResponse = await response.json();

    Cookies.set("access_token", data.access_token, {
      expires: 7,
      secure: true,
      sameSite: "Strict"
    })

    return data;
  } catch {
    toast.error("There was an error with your login", {
      position: "top-right",
    });
    throw new Error("Login failed");
  }
}
