import { auth } from "../_core/auth";

export const metadata = {
  title: "acount",
};

export default async function Page() {
  const { user } = await auth();
  const firstName = user?.name.split(" ").at(0);
  return <div>Welcome {firstName}</div>;
}
