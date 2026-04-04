"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "@/components/Section";
import FAQAccordion from "@/components/FAQAccordion";
import { faqCategories } from "./faqData";

export default function FAQContent() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	return (
		<main className="pt-18 md:pt-24">
			<Section id="faq" background="gray">
				<div ref={ref}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
					>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-4 md:mb-6">
							Questions Fréquentes
						</h1>
						<p className="text-base md:text-lg lg:text-xl text-spc-gray-600">
							Tout ce que vous devez savoir sur mes services d'accompagnement plomberie
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="max-w-3xl mx-auto"
					>
						<FAQAccordion categories={faqCategories} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="text-center mt-12 md:mt-16 bg-white rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-premium"
					>
						<p className="text-spc-gray-700 mb-4">
							Vous ne trouvez pas la réponse à votre question ?
						</p>
						<a
							href="https://wa.me/33759705716?text=Bonjour%20Johann%2C%20j%27ai%20une%20question%20%3A%20"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
						>
							<span>Posez-moi votre question sur WhatsApp</span>
						</a>
					</motion.div>
				</div>
			</Section>
		</main>
	);
}
