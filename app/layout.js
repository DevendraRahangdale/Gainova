
import "./globals.css";
import Footer from "@/components/Footer"; 

export const metadata = {
  title: "Gainova",
  description: "Innovating the Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
