import { Josefin_Sans } from "next/font/google";
import "./_styles/globals.css";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";
import { ReservationProvider } from "./_context/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Suite Booking",
    default: "Welcome | Suite Booking",
  },
  description: "Good Suite booking in world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} min-h-screen bg-primary-950 text-primary-100 flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
