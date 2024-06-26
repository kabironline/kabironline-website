import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Kabir Maniar",
  description: "Kabir Maniar's personal website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetbrains.variable}>
        <div className="fixed inset-0 -z-10 top-0 bottom-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <Header className="xl:h-[10vh]" />
        <StairTransition />
        <PageTransition>
          <div className="xl:h-[90vh] xl:flex block items-center justify-center">
            {children}
          </div>
        </PageTransition>
      </body>
    </html>
  );
};

export default RootLayout;
