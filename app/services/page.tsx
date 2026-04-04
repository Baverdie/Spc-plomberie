import { Metadata } from "next";
import HeaderPremium from "@/components/Header";
import FooterPremium from "@/components/Footer";
import Image from "next/image";
import { FaVideo, FaUserTie, FaWrench, FaCheckCircle, FaPhone, FaEuroSign, FaTools, FaMapMarkerAlt } from "react-icons/fa";
import Button from "@/components/Button";

export const metadata: Metadata = {
	title: "Mes Formules d'Accompagnement",
	description: "Apprenez à faire votre plomberie vous-même avec l'aide d'un professionnel. Aide en visio 17€/h, accompagnement sur place ou intervention complète en Gironde.",
	alternates: {
		canonical: "https://spcplomberie33.fr/services",
	},
};

export default function ServicesPage() {
	const services = [
		{
			id: "visio",
			icon: <FaVideo className="text-5xl md:text-6xl text-spc-blue" />,
			title: "Aide en distanciel",
			price: "17€/h",
			tagline: "Où que vous soyez en France",
			description: "Je vous guide par appel vidéo (WhatsApp, FaceTime, etc.) pour réparer vous-même votre plomberie. Vous filmez, j'analyse et je vous explique étape par étape.",
			image: "/images/realisation-2.jpg",
			avantages: [
				"Appel vidéo sur WhatsApp, FaceTime ou autre",
				"Disponible rapidement",
				"Diagnostic à distance de votre problème",
				"Instructions claires étape par étape",
				"Liste précise du matériel à acheter",
				"Conseils pour éviter les pièges",
				"Vous apprenez pour la prochaine fois",
				"Économisez sur la main d'œuvre",
			],
			color: "blue",
		},
		{
			id: "presentiel",
			icon: <FaUserTie className="text-5xl md:text-6xl text-spc-red" />,
			title: "Accompagnement sur Place",
			price: "27€/h",
			tagline: "Déplacement en Gironde (33)",
			description: "Je me déplace chez vous avec mes outils. Vous faites les travaux, je vous explique, je supervise et je vous apprends. Vous gagnez en autonomie !",
			image: "/images/realisation-1.jpg",
			avantages: [
				"Je me déplace en Gironde et alentours",
				"Tarif déplacement : selon distance",
				"Vous faites, j'explique et je guide",
				"Formation pratique directement chez vous",
				"Aide à l'achat du bon matériel",
				"Prêt d'outillage si besoin",
				"Apprenez les bons gestes",
				"Réduisez vos coûts sur le long terme",
			],
			color: "red",
		},
		{
			id: "complete",
			icon: <FaWrench className="text-5xl md:text-6xl text-spc-navy" />,
			title: "Intervention Complète",
			price: "Sur devis",
			tagline: "Prestation classique de plombier",
			description: "Si vous n'avez pas le temps ou l'envie de le faire vous-même, je peux aussi intervenir en tant que plombier classique avec une prestation complète.",
			image: "/images/realisation-3.jpg",
			avantages: [
				"Prestation complète clé en main",
				"Main-d'œuvre incluse",
				"Fourniture de matériaux",
				"Devis gratuit avant intervention",
				"Travaux garantis",
				"Interventions d'urgence possibles",
				"Normes respectées",
				"Expérience de 25 ans",
			],
			color: "navy",
		},
	];

	return (
		<>
			<HeaderPremium />
			<main className="pt-20 md:pt-24">
				<section className="relative min-h-[500px] flex items-center py-20 md:py-32">
					<div className="absolute inset-0 z-0">
						<Image
							src="/images/realisation-3.jpg"
							alt="Realisation SPC Plomberie Chauffage"
							fill
							priority
							className="object-cover"
							sizes="100vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-spc-navy/95 via-spc-navy/80 to-spc-navy/60" />
					</div>

					<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
						<div className="max-w-3xl">
							<div className="inline-block mb-6">
								<span className="bg-spc-red/20 text-spc-red px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-spc-red/30">
									3 formules au choix
								</span>
							</div>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								Mes Formules
								<br />
								<span className="text-spc-red">d'Accompagnement</span>
							</h1>

							<p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
								Choisissez la formule qui vous convient pour apprendre et économiser
							</p>
						</div>
					</div>
				</section>

				<section className="py-16 md:py-24 lg:py-32 bg-white">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="space-y-24 md:space-y-32 lg:space-y-40">
							{services.map((service, index) => (
								<div
									key={service.id}
									id={service.id}
									className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
										}`}
								>
									<div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
										<div className="relative aspect-square rounded-3xl overflow-hidden shadow-premium-lg">
											<img
												src={service.image}
												alt={service.title}
												className="w-full h-full object-cover"
											/>
										</div>
									</div>

									<div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
										<div className="mb-6">
											<div className="mb-4">{service.icon}</div>
											<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-spc-navy mb-3">
												{service.title}
											</h2>
										</div>

										<div className="flex flex-wrap items-baseline gap-3 mb-6">
											<span className={`text-3xl md:text-4xl font-bold ${service.color === 'blue' ? 'text-spc-blue' :
													service.color === 'red' ? 'text-spc-red' :
														'text-spc-navy'
												}`}>
												{service.price}
											</span>
											<span className="text-base md:text-lg text-spc-gray-600">{service.tagline}</span>
										</div>

										<h3 className="text-lg md:text-xl font-bold text-spc-navy mb-4">Ce qui est inclus :</h3>
										<div className="space-y-3 mb-8">
											{service.avantages.map((avantage, idx) => (
												<div key={idx} className="flex items-start space-x-3">
													<FaCheckCircle
														className={`flex-shrink-0 mt-1 text-base md:text-lg ${service.color === 'blue' ? 'text-spc-blue' :
																service.color === 'red' ? 'text-spc-red' :
																	'text-spc-navy'
															}`}
													/>
													<span className="text-sm md:text-base text-spc-gray-700">{avantage}</span>
												</div>
											))}
										</div>

										<a href="tel:0759705716">
											<Button variant="primary" size="lg" icon={<FaPhone />}>
												Me contacter
											</Button>
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-16 md:py-20 bg-spc-gray-50">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-spc-navy mb-12 text-center">
								Informations Pratiques
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
								<div className="bg-white rounded-2xl p-6 shadow-premium text-center">
									<FaEuroSign className="text-3xl md:text-4xl text-spc-red mx-auto mb-4" />
									<h3 className="font-bold text-spc-navy mb-2 text-base md:text-lg">Paiement</h3>
									<p className="text-xs md:text-sm text-spc-gray-600">
										Espèces, chèque, virement
										<br />
										Pas de CB
									</p>
								</div>

								<div className="bg-white rounded-2xl p-6 shadow-premium text-center">
									<FaTools className="text-3xl md:text-4xl text-spc-red mx-auto mb-4" />
									<h3 className="font-bold text-spc-navy mb-2 text-base md:text-lg">Matériel</h3>
									<p className="text-xs md:text-sm text-spc-gray-600">
										Je peux vous aider à acheter
										<br />
										le bon matériel au bon prix
									</p>
								</div>

								<div className="bg-white rounded-2xl p-6 shadow-premium text-center">
									<FaMapMarkerAlt className="text-3xl md:text-4xl text-spc-red mx-auto mb-4" />
									<h3 className="font-bold text-spc-navy mb-2 text-base md:text-lg">Zone</h3>
									<p className="text-xs md:text-sm text-spc-gray-600">
										Visio : France entière
										<br />
										Présentiel : Gironde (33)
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-spc-navy text-white py-16 md:py-20 lg:py-32">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
								Prêt à apprendre ?
							</h2>
							<p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8">
								Contactez-moi pour discuter de votre projet et choisir la formule adaptée
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a href="tel:0759705716">
									<Button variant="primary" size="lg" icon={<FaPhone />}>
										07 59 70 57 16
									</Button>
								</a>
								<a href="/contact">
									<Button
										variant="outline"
										size="lg"
										className="border-white text-white hover:bg-white hover:text-spc-navy"
									>
										Formulaire de contact
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<FooterPremium />
		</>
	);
}