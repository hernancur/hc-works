import Theming from "@/Theme/Theming";
import "./globals.css";
import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";

export const metadata = {
  title: "hernancur",
  description: "Personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Header />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
