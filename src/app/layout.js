import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/layouts/Header";
import { Box } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { UserProvider } from "@/context/UserContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <UserProvider>
            <Header />
            <main style={{ marginTop: `var(--header-height)` }}>
              <Box maxW="1200px" minH="1200px" mx="auto" px={1}>
                {children}
              </Box>
            </main>
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
