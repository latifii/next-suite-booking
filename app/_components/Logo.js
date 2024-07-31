import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="70" width="70" alt="The Suite Booking logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Suite Booking
      </span>
    </Link>
  );
}

export default Logo;
