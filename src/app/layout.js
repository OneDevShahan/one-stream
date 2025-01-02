import { ThemeProvider } from "next-themes"; // Import ThemeProvider from next-themes
import Header from "./components/Header"; // Assuming you have a Header component
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "OneStream",
  description: "A modern movie streaming app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          {/* Ensure that "attribute='class'" is used to toggle the class on the root element */}
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
