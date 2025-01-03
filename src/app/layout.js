import { ThemeProvider } from "next-themes"; // Import ThemeProvider from next-themes
import Footer from "./components/Footer";
import Header from "./components/Header"; // Assuming you have a Header component
import "./globals.css";
import SearchBar from "./components/SearchBar";

export const metadata = {
  title: "OneStream",
  description: "A modern movie streaming app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* This will reference the file in public/Logo.svg */}
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          {/* Ensure that "attribute='class'" is used to toggle the class on the root element */}
          <Header />
          <SearchBar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
