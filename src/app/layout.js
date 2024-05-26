import { Inter, Montserrat } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Boutique Online . es",
  description: "e-commerce para influencers y tiendas de ropa a precio economico",
};

export default function RootLayout( { children, modals} ) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} ${montserrat.className}   antialiased 	 `}>
        <div className="flex w-full mx-auto max-w-[1400px]">
          {children}
        </div>
          {modals}
      </body>
    </html>
  );
}
