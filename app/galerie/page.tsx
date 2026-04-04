import { Metadata } from "next";
import GalerieContent from "@/components/GalerieContent";

export const metadata: Metadata = {
	title: "Galerie de Realisations Plomberie | SPC Plomberie Chauffage",
	description: "Decouvrez mes realisations en plomberie et chauffage : salles de bain PMR, douches italiennes, chaudieres, chauffe-eau. 25 ans d'experience en Gironde. Je vous accompagne pour realiser ces travaux vous-meme.",
	keywords: [
		"galerie plomberie",
		"realisations plombier",
		"salle de bain PMR",
		"douche italienne Bordeaux",
		"installation chaudiere",
		"chauffe-eau Gironde",
		"travaux plomberie Bordeaux",
		"renovation salle de bain 33"
	],
	openGraph: {
		title: "Galerie de Realisations - SPC Plomberie Chauffage",
		description: "25 ans d'experience en plomberie et chauffage. Decouvrez mes realisations : salles de bain, chaudieres, installations techniques.",
		url: "https://spcplomberie33.fr/galerie",
		type: "website",
		images: [
			{
				url: "https://spcplomberie33.fr/images/sdb-pmr-finie.jpg",
				width: 1200,
				height: 630,
				alt: "Salle de bain PMR realisee par SPC Plomberie",
			},
		],
	},
	alternates: {
		canonical: "https://spcplomberie33.fr/galerie",
	},
};

export default function GaleriePage() {
	return <GalerieContent />;
}
