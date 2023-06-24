import ModalProvider from "../../providers/ModalProvider";
import SupabaseProvider from "../../providers/SupabaseProvider";
import UserProvider from "../../providers/UserProvider";
import "./globals.css";
import { Figtree } from "next/font/google";

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
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            {children}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
