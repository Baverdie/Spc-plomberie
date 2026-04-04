"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaVideo, FaUserTie, FaWrench, FaWhatsapp } from "react-icons/fa";
import Section from "./Section";
import Button from "./Button";

export default function ServicesPremium() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const WHATSAPP_NUMBER = "33759705716";
	const getWhatsAppUrl = (message: string) =>
		`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

	const services = [
		{
			icon: <FaVideo className="text-4xl md:text-5xl" />,
			title: "Aide en Visio",
			price: "17€/h",
			description: "Je vous guide par appel vidéo pour réparer vous-même votre plomberie, où que vous soyez en France.",
			items: [
				"Appel vidéo WhatsApp ou autre",
				"Diagnostic à distance",
				"Instructions étape par étape",
				"Liste de matériel à acheter",
				"Conseils personnalisés",
				"Disponible rapidement",
			],
			color: "spc-blue",
			cta: "Réserver un appel",
			whatsappMessage: "Bonjour Johann, je suis intéressé(e) par l'aide en visio pour un problème de plomberie.",
		},
		{
			icon: <FaUserTie className="text-4xl md:text-5xl" />,
			title: "Accompagnement sur Place",
			price: "27€/h",
			description: "Je me déplace chez vous en Gironde. Vous faites, j'explique et je supervise pour que vous appreniez.",
			items: [
				"Déplacement en Gironde (33)",
				"Vous faites, je guide",
				"Formation pratique",
				"Aide à l'achat de matériel",
				"Prêt d'outillage possible",
				"Apprenez en faisant",
			],
			color: "spc-red",
			cta: "Me contacter",
			whatsappMessage: "Bonjour Johann, je souhaite un accompagnement sur place en Gironde pour apprendre à réparer.",
		},
		{
			icon: <FaWrench className="text-4xl md:text-5xl" />,
			title: "Intervention Complète",
			price: "Sur devis",
			description: "Si vous préférez que je fasse tout, je peux aussi intervenir en tant que plombier classique.",
			items: [
				"Prestation complète",
				"Main-d'œuvre incluse",
				"Matériaux fournis",
				"Devis gratuit",
				"Travaux garantis",
				"Urgences possibles",
			],
			color: "spc-navy",
			cta: "Demander un devis",
			whatsappMessage: "Bonjour Johann, j'aurais besoin d'un devis pour une intervention complète.",
		},
	];

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<Section id="services" background="gray">
			<div ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-4 md:mb-6">
						Mes Formules d'Accompagnement
					</h2>
					<p className="text-base md:text-lg lg:text-xl text-spc-gray-600">
						Choisissez la formule qui vous convient pour apprendre et économiser
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							className="group"
						>
							<div className="flex flex-col bg-white rounded-3xl p-6 md:p-8 lg:p-10 h-full shadow-premium hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-2">
								<div className={`mb-4 md:mb-6 transition-transform duration-300 md:group-hover:scale-110 ${service.color === 'spc-blue' ? 'text-spc-blue' :
										service.color === 'spc-red' ? 'text-spc-red' :
											'text-spc-navy'
									}`}>
									{service.icon}
								</div>

								<h3 className="text-xl md:text-2xl font-bold text-spc-navy mb-2">
									{service.title}
								</h3>
								<div className={`text-2xl md:text-3xl font-bold mb-4 ${service.color === 'spc-blue' ? 'text-spc-blue' :
										service.color === 'spc-red' ? 'text-spc-red' :
											'text-spc-navy'
									}`}>
									{service.price}
								</div>

								<p className="text-sm md:text-base text-spc-gray-600 mb-4 md:mb-6 leading-relaxed">
									{service.description}
								</p>

								<ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
									{service.items.map((item, idx) => (
										<li key={idx} className="flex items-start space-x-2 md:space-x-3">
											<span className={`mt-0.5 flex-shrink-0 text-sm md:text-base ${service.color === 'spc-blue' ? 'text-spc-blue' :
													service.color === 'spc-red' ? 'text-spc-red' :
														'text-spc-navy'
												}`}>✓</span>
											<span className="text-sm md:text-base text-spc-gray-700">{item}</span>
										</li>
									))}
								</ul>

								<div className="mt-auto">
									<a
										href={getWhatsAppUrl(service.whatsappMessage)}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${service.cta} via WhatsApp`}
									>
										<Button
											variant={index === 1 ? "primary" : "outline"}
											size="md"
											fullWidth
											icon={<FaWhatsapp />}
											className={index === 1 ? "!bg-[#25D366] hover:!bg-[#20BD5A] !border-[#1d9d4c] hover:!border-[#20BD5A]" : ""}
										>
											{service.cta}
										</Button>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center mt-8 md:mt-12 bg-spc-blue/10 border-2 border-spc-blue/20 rounded-2xl p-4 md:p-6 max-w-3xl mx-auto"
				>
					<p className="text-sm md:text-base text-spc-gray-700">
						<strong>💡 Mon objectif :</strong> Vous rendre autonome sur vos réparations
						de plomberie pour économiser et apprendre un savoir-faire utile au quotidien.
					</p>
				</motion.div>
			</div>
		</Section>
	);
}