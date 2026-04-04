"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Section from "./Section";
import Button from "./Button";

export default function CTASection() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.3,
	});

	return (
		<Section background="navy">
			<div ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto text-center"
				>
					<div className="inline-block mb-4 md:mb-6">
						<span className="bg-spc-red/20 text-spc-red px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-spc-red/30">
							Urgence ou projet ?
						</span>
					</div>

					<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
						Prêt à démarrer
						<br />
						votre projet ?
					</h2>

					<p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
						Contactez moi pour un devis gratuit ou une intervention d'urgence.
						Je suis disponible 24h/24 et 7j/7.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
						<a href="tel:0759705716" className="w-full sm:w-auto">
							<Button variant="primary" size="lg" icon={<FaPhone />} fullWidth className="sm:w-auto">
								Appeler maintenant
							</Button>
						</a>
						<a href="/contact" className="w-full sm:w-auto">
							<Button
								variant="outline-white"
								size="lg"
								icon={<FaEnvelope />}
								fullWidth
							>
								Demander un devis
							</Button>
						</a>
					</div>

					<div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/10">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-white/80">
							<div>
								<p className="font-semibold text-white mb-1 text-sm md:text-base">📞 Téléphone</p>
								<a href="tel:0759705716" className="hover:text-spc-red transition-colors text-sm md:text-base">
									07 59 70 57 16
								</a>
							</div>
							<div>
								<p className="font-semibold text-white mb-1 text-sm md:text-base">📧 Email</p>
								<a href="mailto:spcplomberiechauffage33@gmail.com" className="hover:text-spc-red transition-colors text-xs sm:text-sm break-words">
									spcplomberiechauffage33@gmail.com
								</a>
							</div>
							<div>
								<p className="font-semibold text-white mb-1 text-sm md:text-base">📍 Zone</p>
								<p className="text-xs sm:text-sm">Gironde (33) et alentours</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</Section>
	);
}