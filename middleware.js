import { auth } from "@/app/_core/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
