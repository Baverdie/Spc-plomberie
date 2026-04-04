import { Metadata } from "next";
import FAQContent from "./FAQContent";
import { faqCategories } from "./faqData";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "FAQ - Questions Fréquentes | SPC Plomberie",
	description: "Trouvez les réponses à vos questions sur l'aide en visio, l'accompagnement sur place, les tarifs et les urgences plomberie. Johann vous guide.",
	openGraph: {
		title: "FAQ - Questions Fréquentes | SPC Plomberie",
		description: "Trouvez les réponses à vos questions sur l'aide en visio, l'accompagnement sur place, les tarifs et les urgences plomberie.",
	},
};

function generateFAQSchema() {
	const questions = faqCategories.flatMap((category) =>
		category.items.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.answer,
			},
		}))
	);

	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions,
	};
}

export default function FAQPage() {
	const faqSchema = generateFAQSchema();

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
			<Header />
			<FAQContent />
		</>
	);
}
