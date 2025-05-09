import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ClientWrapper from "./components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adrian Neagu",
  description: "Your best option to develope anything.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
