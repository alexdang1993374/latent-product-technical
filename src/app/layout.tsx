import Nav from "@/components/Nav";
import { Figtree } from "next/font/google";
import ModalProvider from "../../providers/ModalProvider";
import SupabaseProvider from "../../providers/SupabaseProvider";
import ToasterProvider from "../../providers/ToasterProvider";
import UserProvider from "../../providers/UserProvider";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Latent Medication Reports",
  description: "List of medications for different ailments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Nav />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-hero-pattern bg-cover bg-no-repeat bg-center">
              {children}
            </main>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
