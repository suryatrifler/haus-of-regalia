import "./globals.css";
import GlobalShell from "./components/GlobalShell";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalShell>{children}</GlobalShell>
      </body>
    </html>
  );
}
