import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "Henry Mba - Software Engineer and AI Engineer | Professional Portfolio",
        template: "%s | Henry Mba Portfolio",
    },
    description:
        "Professional portfolio of Henry Mba - Software Engineer and AI Engineer based in Abuja, Nigeria. Building AI-powered solutions, automation tools, full-stack web apps, and more. Passionate about Python, machine learning, and innovative tech. Open to internships, freelance opportunities, and collaborations.",
    keywords: [
        "Henry Mba",
        "Software Engineer",
        "AI Engineer",
        "Portfolio",
        "Python",
        "Machine Learning",
        "Web Development",
        "Full Stack",
        "Automation",
        "Abuja",
        "Nigeria",
        "Developer Portfolio",
        "Tech Portfolio",
        "Internship",
        "Freelance",
    ],
    authors: [
        {
            name: "Henry Mba",
            url: "https://portfolio-apo8yec91-henry-mbas-projects.vercel.app/",
        },
    ],
    creator: "Henry Mba",
    publisher: "Henry Mba",
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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://portfolio-apo8yec91-henry-mbas-projects.vercel.app/",
        title: "Henry Mba - Software Engineer and AI Engineer | Professional Portfolio",
        description:
            "Professional portfolio of Henry Mba - Software Engineer and AI Engineer based in Abuja, Nigeria. Building AI-powered solutions, automation tools, full-stack web apps, and more. Passionate about Python, machine learning, and innovative tech. Open to opportunities.",
        siteName: "Henry Mba Portfolio",
        images: [
            {
                url: "/portfolio.png",
                width: 1200,
                height: 630,
                alt: "Henry Mba - Software Engineer and AI Engineer Portfolio",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Henry Mba - Software Engineer and AI Engineer",
        description:
            "Professional portfolio of Henry Mba - Software Engineer and AI Engineer based in Abuja, Nigeria. Building AI-powered solutions, automation tools, full-stack web apps, and more. Open to internships & freelance.",
        creator: "@hmba370",
        site: "@hmba370",
        images: [
            {
                url: "/portfolio.png",
                alt: "Henry Mba Professional Portfolio",
            },
        ],
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                sizes: "any",
            },
        ],
        shortcut: "/favicon.ico?v=2",
        apple: "/apple-touch-icon.svg?v=2",
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "https://portfolio-apo8yec91-henry-mbas-projects.vercel.app/",
    },
    category: "technology",
    classification: "Portfolio Website",
    other: {
        "google-site-verification": "your-google-verification-code-here", // Replace if you have one
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
                rel="canonical"
                href="https://portfolio-apo8yec91-henry-mbas-projects.vercel.app/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Henry Mba",
                        jobTitle: "Software Engineer and AI Engineer",
                        url: "https://portfolio-apo8yec91-henry-mbas-projects.vercel.app/",
                        image:
                            "https://pbs.twimg.com/profile_images/2010670368365662208/uoO8_bgz.jpg",
                        sameAs: [
                            "https://github.com/henry-255",
                            "https://www.linkedin.com/in/henry-mba-8368613b0",
                            "https://x.com/hmba370",
                        ],
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Abuja",
                            addressRegion: "Federal Capital Territory",
                            addressCountry: "NG",
                        },
                        worksFor: {
                            "@type": "Organization",
                            name: "Freelance / Independent",
                        },
                        knowsAbout: [
                            "Software Engineering",
                            "AI Engineering",
                            "Python",
                            "Machine Learning",
                            "Web Development",
                            "Automation",
                            "Full Stack Development",
                        ],
                        description:
                            "Software Engineer and AI Engineer based in Abuja, Nigeria. Passionate about building intelligent systems, automation tools, full-stack applications, and innovative tech solutions. Open to internships, freelance work, and collaborations.",
                    }),
                }}
            />
        </head>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                inter.variable,
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
        >
            <main className="flex min-h-screen flex-col">{children}</main>
            <Toaster />
        </ThemeProvider>
        <Analytics />
        </body>
        </html>
    );
}