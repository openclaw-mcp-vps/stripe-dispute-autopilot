import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Dispute Autopilot – Automated Chargeback Defense",
  description: "Automatically detect chargebacks, analyze transaction data, and generate comprehensive evidence packages for Stripe dispute responses using AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0713b90e-e3d2-46ae-a6bd-8ac0d7280a08"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
