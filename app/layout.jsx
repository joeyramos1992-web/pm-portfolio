import "./globals.css";

export const metadata = {
  title: "Property Management Portfolio",
  description: "Select Class A multifamily assets managed across major U.S. markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
