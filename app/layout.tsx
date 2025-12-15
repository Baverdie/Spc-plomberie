import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "SPC Plomberie Chauffage | Plombier Chauffagiste Gironde (33)",
	description: "Plombier chauffagiste professionnel en Gironde. 25 ans d'expérience. Installation, dépannage, entretien. Intervention rapide 24/7. Devis gratuit.",
	keywords: "plombier, chauffagiste, gironde, bordeaux, 33, dépannage, urgence, chaudière, chauffe-eau, sanitaire, débouchage",
	authors: [{ name: "Johann Quilan - SPC" }],
	openGraph: {
		title: "SPC - Service Plomberie Chauffage",
		description: "Votre plombier chauffagiste de confiance en Gironde",
		type: "website",
		locale: "fr_FR",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	);
}