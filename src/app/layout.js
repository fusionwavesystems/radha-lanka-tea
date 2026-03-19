import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://radhalankatea.com"),
  title: {
    default: "Radha Lanka | Premium Handmade Ceylon Tea from Sri Lanka",
    template: "%s | Radha Lanka - Premium Ceylon Tea",
  },
  description: "Experience the authentic taste of Sri Lanka with Radha Lanka's premium handmade tea. Hand-picked and 100% natural Ceylon tea for locals and foreign tourists.",
  keywords: [
    "Ceylon Tea", 
    "Handmade Tea Sri Lanka", 
    "Handcrafted Tea Sri Lanka", 
    "Handmade Tea", 
    "Hand-picked Tea", 
    "Pure Ceylon Tea", 
    "Green Tea Sri Lanka", 
    "Black Tea Sri Lanka", 
    "Sri Lankan Tea Culture", 
    "Tea Plantation Visit Sri Lanka", 
    "Tea Exports Sri Lanka", 
    "Golden Tips Tea", 
    "Silver Tips Tea", 
    "Tea for Tourists Sri Lanka", 
    "Artisan Tea", 
    "Natural Tea", 
    "Healthy Tea", 
    "Gift Tea Sri Lanka",
    "Radha Lanka Tea"
  ],
  authors: [{ name: "Radha Lanka" }],
  creator: "Radha Lanka",
  publisher: "Radha Lanka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/radhalogo.png",
    shortcut: "/radhalogo.png",
    apple: "/radhalogo.png",
  },
  openGraph: {
    title: "Radha Lanka | Premium Handmade Ceylon Tea from Sri Lanka",
    description: "Discover the finest 100% handmade tea from the highlands of Sri Lanka. Perfect for tea lovers and tourists seeking authentic Ceylon tea gift sets.",
    url: "https://radhalankatea.com",
    siteName: "Radha Lanka",
    images: [
      {
        url: "/radhalogo.png",
        width: 1200,
        height: 630,
        alt: "Radha Lanka Premium Ceylon Tea Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radha Lanka | Premium Handmade Ceylon Tea from Sri Lanka",
    description: "Experience pure handmade Ceylon tea from Sri Lanka's highlands.",
    images: ["/radhalogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

