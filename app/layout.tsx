import { AnimatePresence } from "framer-motion";
import "../app/globals.css"; // Ensure Tailwind is applied

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
