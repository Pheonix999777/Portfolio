import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/Theme-provider/Theme-provider.tsx";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Developer Portfolio",
  description:
    "Portfolio website showcasing my projects and skills as a frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
