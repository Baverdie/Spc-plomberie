import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
	title: "Plombier Gironde (33) - Apprenez la Plomberie DIY | SPC",
	description: "Plombier 25 ans d'experience en Gironde : apprenez a faire VOUS-MEME ! Aide en visio 17euro/h France entiere ou sur place Gironde 27euro/h. Economisez des centaines d'euros sur vos travaux de plomberie.",
	keywords: [
		"plombier Gironde",
		"plombier Bordeaux",
		"formation plomberie",
		"apprendre plomberie",
		"aide plomberie visio",
		"chauffagiste Gironde",
		"plomberie DIY",
		"cours plomberie particulier",
		"accompagnement plomberie",
		"plombier pas cher Bordeaux"
	],
	openGraph: {
		title: "Plombier Gironde - Apprenez a faire VOUS-MEME | 17euro/h",
		description: "Plombier 25 ans d'experience : je vous APPRENDS a reparer ! Visio 17euro/h France entiere ou sur place Gironde 27euro/h.",
		url: "https://spcplomberie33.fr",
		type: "website",
	},
	alternates: {
		canonical: "https://spcplomberie33.fr",
	},
};

export default function Home() {
	return <HomeContent />;
}
