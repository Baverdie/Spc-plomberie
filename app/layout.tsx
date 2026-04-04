import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaOrg from "@/components/SchemaOrg";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL('https://spcplomberie33.fr'),
	title: {
		default: "Plombier Gironde (33) - Formation Plomberie DIY | SPC",
		template: "%s | SPC Plomberie Chauffage"
	},
	description: "👨‍🔧 Plombier 25 ans d'expérience : apprenez à faire VOUS-MÊME ! Aide en visio 17€/h France entière ou sur place Gironde 27€/h. Économisez des centaines d'euros.",

	keywords: [
		"plombier Gironde",
		"plombier Bordeaux",
		"formation plomberie",
		"apprendre plomberie",
		"aide plomberie visio",
		"chauffagiste Gironde",
		"dépannage plomberie 33",
		"plomberie DIY",
		"cours plomberie",
		"accompagnement plomberie",
		"plombier Villenave-d'Ornon",
		"plombier urgence Bordeaux",
		"économiser plomberie",
		"réparation fuite eau",
		"installation chauffe-eau"
	],

	authors: [{ name: "Johann Quilan", url: "https://spcplomberie33.fr" }],
	creator: "SPC Plomberie Chauffage",
	publisher: "SPC Plomberie Chauffage",

	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},

	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://spcplomberie33.fr",
		title: "Plombier Gironde - Apprenez à faire VOUS-MÊME | 17€/h",
		description: "👨‍🔧 Plombier 25 ans d'expérience : je vous APPRENDS à réparer ! Visio 17€/h France entière ou sur place Gironde 27€/h.",
		siteName: "SPC Plomberie Chauffage",
		images: [
			{
				url: "https://spcplomberie33.fr/images/realisation-1.jpg",
				width: 1200,
				height: 630,
				alt: "SPC Plomberie - Formation plomberie Gironde Bordeaux",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Plombier Gironde - Apprenez à faire VOUS-MÊME",
		description: "👨‍🔧 Formation plomberie visio 17€/h ou sur place Gironde 27€/h. 25 ans d'expérience.",
		images: ["https://spcplomberie33.fr/images/realisation-1.jpg"],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	alternates: {
		canonical: "https://spcplomberie33.fr",
	},

	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className="scroll-smooth">
			<head>
			</head>
			<body className="antialiased">
				<SchemaOrg />
				{children}
				<CookieBanner />
			</body>
		</html>
	);
}