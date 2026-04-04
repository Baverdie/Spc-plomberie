import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
	title: "Contact Plombier Gironde | SPC Plomberie Chauffage",
	description: "Contactez votre plombier en Gironde (33). Aide en visio 17euro/h France entiere ou accompagnement sur place 27euro/h. Reponse rapide, disponible 24/24. Tel: 07 59 70 57 16",
	keywords: [
		"contact plombier Gironde",
		"plombier Bordeaux telephone",
		"devis plomberie gratuit",
		"urgence plombier 33",
		"plombier disponible Bordeaux",
		"aide plomberie visio",
		"plombier pas cher Gironde"
	],
	openGraph: {
		title: "Contactez SPC Plomberie Chauffage - Gironde (33)",
		description: "Besoin d'aide en plomberie ? Visio 17euro/h ou sur place 27euro/h. Reponse rapide garantie. 25 ans d'experience.",
		url: "https://spcplomberie33.fr/contact",
		type: "website",
	},
	alternates: {
		canonical: "https://spcplomberie33.fr/contact",
	},
};

export default function ContactPage() {
	return <ContactContent />;
}
