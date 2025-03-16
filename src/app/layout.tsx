import { Poppins, Afacad } from "next/font/google";
import "./globals.css";
import { SessionContext } from "./context/session-context";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins"
});

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--afacad"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <SessionContext>
        <body
          className={`${poppins.variable} ${afacad.variable} bg-slate-100 font-poppins`}
        >
          {children}
        </body>
      </SessionContext>
    </html>
  );
}
