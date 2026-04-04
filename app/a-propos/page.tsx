import { Metadata } from "next";
import HeaderPremium from "@/components/Header";
import FooterPremium from "@/components/Footer";
import Image from "next/image";
import { FaGraduationCap, FaHandHoldingUsd, FaLightbulb, FaHeart, FaPhone } from "react-icons/fa";
import Button from "@/components/Button";

export const metadata: Metadata = {
	title: "À Propos",
	description: "Découvrez SPC Plomberie : 25 ans d'expérience au service de votre autonomie. Apprenez à faire votre plomberie vous-même avec l'aide d'un professionnel.",
};

export default function AProposPage() {
	const values = [
		{
			icon: <FaGraduationCap className="text-5xl text-spc-blue" />,
			title: "Transmission de Savoir",
			description: "Après 25 ans dans le métier, j'ai décidé de partager mon expérience pour vous rendre autonome. Mon objectif : que vous n'ayez plus peur de vos réparations de plomberie.",
		},
		{
			icon: <FaHandHoldingUsd className="text-5xl text-spc-red" />,
			title: "Économies Durables",
			description: "En apprenant à faire vous-même, vous économisez sur la main-d'œuvre et vous êtes capable d'intervenir rapidement sans attendre (et payer) un plombier.",
		},
		{
			icon: <FaLightbulb className="text-5xl text-spc-blue" />,
			title: "Pédagogie Adaptée",
			description: "Pas besoin d'être bricoleur ! J'adapte mes explications à votre niveau. Je prends le temps, j'explique simplement, sans jugement. Vous apprenez à votre rythme.",
		},
		{
			icon: <FaHeart className="text-5xl text-spc-red" />,
			title: "Passion du Métier",
			description: "La plomberie, c'est ma passion depuis toujours. Et voir mes clients devenir autonomes et fiers d'avoir réparé eux-mêmes, c'est ma plus grande satisfaction.",
		},
	];

	const zones = [
		"Bordeaux", "Villenave-d'Ornon", "Talence", "Pessac", "Mérignac",
		"Bègles", "Cenon", "Floirac", "Lormont", "Le Bouscat",
		"Eysines", "Saint-Médard-en-Jalles", "Gradignan", "Cestas",
		"Et toute la Gironde (33)"
	];

	return (
		<>
			<HeaderPremium />
			<main className="pt-20 md:pt-24">
				<section className="relative min-h-[500px] flex items-center py-20 md:py-32">
					<div className="absolute inset-0 z-0">
						<Image
							src="/images/realisation-2.jpg"
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
									Depuis 1999
								</span>
							</div>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								25 ans d'expérience
								<br />
								<span className="text-spc-red">à transmettre</span>
							</h1>

							<p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
								Votre accompagnateur en plomberie pour devenir autonome
							</p>
						</div>
					</div>
				</section>

				<section className="py-20 md:py-32 bg-white">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-8 text-center">
								Ma Philosophie
							</h2>
							<div className="space-y-6 text-lg text-spc-gray-700 leading-relaxed">
								<p>
									Je m'appelle <strong>Johann</strong>, et je suis plombier depuis 1999.
									Après 25 ans à intervenir chez des particuliers, j'ai constaté une chose :
									<strong> beaucoup de réparations sont simples</strong> et peuvent être faites
									par n'importe qui... à condition d'avoir les bons conseils.
								</p>
								<p>
									C'est pour ça que j'ai créé <strong>SPC Plomberie Chauffage</strong> avec une
									approche unique : <strong>vous apprendre à faire vous-même</strong> plutôt que
									de juste faire à votre place. Mon rôle, c'est de vous transmettre mon savoir-faire
									pour que vous deveniez autonome.
								</p>
								<p>
									Que ce soit en <strong>distanciel</strong> ou <strong>directement chez vous</strong> en Gironde, je vous guide pas à pas. Vous économisez, vous apprenez, et surtout,
									vous gagnez en confiance. La prochaine fois qu'un robinet fuit ou qu'une chasse
									d'eau tombe en panne, vous saurez quoi faire !
								</p>
								<p>
									Et si vraiment vous n'avez pas le temps ou l'envie, je peux aussi intervenir
									en tant que plombier classique. Mais mon vrai plaisir, c'est de voir mes clients
									<strong> fiers d'avoir réparé eux-mêmes</strong>. 💪
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 md:py-32 bg-spc-gray-50">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-6">
								Mes Valeurs
							</h2>
							<p className="text-lg md:text-xl text-spc-gray-600 max-w-3xl mx-auto">
								Ce qui guide mon travail au quotidien
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
							{values.map((value, index) => (
								<div
									key={index}
									className="bg-white rounded-3xl p-8 md:p-10 shadow-premium hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-2"
								>
									<div className="mb-6">{value.icon}</div>
									<h3 className="text-2xl font-bold text-spc-navy mb-4">
										{value.title}
									</h3>
									<p className="text-spc-gray-600 leading-relaxed">
										{value.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-20 md:py-32 bg-white">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-16">
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-6">
									Zone d'Intervention
								</h2>
								<p className="text-lg md:text-xl text-spc-gray-600">
									En visio partout en France, en présentiel en Gironde
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
								<div className="bg-spc-blue/10 border-2 border-spc-blue/20 rounded-2xl p-8 text-center">
									<h3 className="text-2xl font-bold text-spc-navy mb-4">🎥 Aide en Visio</h3>
									<p className="text-lg text-spc-gray-700 mb-2">Partout en France</p>
									<p className="text-sm text-spc-gray-600">
										Où que vous soyez, je peux vous aider par appel vidéo
									</p>
								</div>

								<div className="bg-spc-red/10 border-2 border-spc-red/20 rounded-2xl p-8 text-center">
									<h3 className="text-2xl font-bold text-spc-navy mb-4">🚗 Sur Place</h3>
									<p className="text-lg text-spc-gray-700 mb-2">Gironde (33)</p>
									<p className="text-sm text-spc-gray-600">
										Je me déplace chez vous pour vous accompagner
									</p>
								</div>
							</div>

							<div className="bg-spc-gray-50 rounded-3xl p-8 md:p-12">
								<h3 className="text-xl font-bold text-spc-navy mb-6 text-center">
									Villes principales en Gironde
								</h3>
								<div className="flex flex-wrap gap-3 justify-center">
									{zones.map((zone, index) => (
										<span
											key={index}
											className="bg-white px-3 py-2 rounded-xl text-sm md:text-base text-spc-gray-700 font-medium shadow-sm hover:shadow-md hover:text-spc-red transition-all duration-300"
										>
											{zone}
										</span>
									))}
								</div>

								<div className="mt-12 text-center">
									<p className="text-spc-gray-600 mb-6">
										Vous ne trouvez pas votre ville ? Pas de problème, contactez-moi
										et on trouve une solution !
									</p>
									<a href="tel:0759705716">
										<Button variant="primary" size="lg" icon={<FaPhone />}>
											Me contacter
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-spc-navy text-white py-20 md:py-32">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
								Envie d'apprendre ?
							</h2>
							<p className="text-xl text-gray-300 mb-8">
								Contactez-moi et je vous aide à devenir autonome sur vos réparations de plomberie
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