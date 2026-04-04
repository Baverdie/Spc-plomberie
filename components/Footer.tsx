import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
	const navigation = {
		services: [
			{ name: "Plomberie", href: "/services#plomberie" },
			{ name: "Chauffage", href: "/services#chauffage" },
			{ name: "Dépannage", href: "/services#depannage" },
			{ name: "Entretien", href: "/services#entretien" },
		],
		company: [
			{ name: "À propos", href: "/a-propos" },
			{ name: "Galerie", href: "/galerie" },
			{ name: "FAQ", href: "/faq" },
			{ name: "Contact", href: "/contact" },
		],
		legal: [
			{ name: "Mentions légales", href: "/mentions-legales" },
			{ name: "Politique de cookies", href: "/politique-cookies" },
		],
	};

	return (
		<footer className="bg-spc-navy text-white border-t border-white/10">
			<div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
					<div className="lg:col-span-1 md:flex md:flex-col md:justify-center">
						<div className="flex items-center space-x-3 mb-4 md:mb-6">
							<Image
								src="/logo-spc.png"
								alt="Logo SPC Plomberie Chauffage"
								width={50}
								height={50}
								className="w-10 h-10 md:w-12 md:h-12"
							/>
							<div>
								<div className="text-lg md:text-xl font-bold">SPC</div>
								<div className="text-xs text-gray-400">Plomberie Chauffage</div>
							</div>
						</div>
						<p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
							Votre expert en plomberie et chauffage en Gironde depuis 25 ans.
						</p>
						<div className="space-y-3 text-xs md:text-sm">
							<div className="flex items-center space-x-2 text-gray-400">
								<FaPhone className="text-spc-red flex-shrink-0 text-sm" />
								<a href="tel:0759705716" className="hover:text-spc-red transition-colors">
									07 59 70 57 16
								</a>
							</div>
							<div className="flex items-start space-x-2 text-gray-400">
								<FaEnvelope className="text-spc-red flex-shrink-0 mt-0.5 text-sm" />
								<a
									href="mailto:spcplomberiechauffage33@gmail.com"
									className="hover:text-spc-red transition-colors text-xs sm:text-sm break-words"
									>
									spcplomberiechauffage33@gmail.com
								</a>
							</div>
							<div className="flex items-center space-x-2 text-gray-400">
								<FaMapMarkerAlt className="text-spc-red flex-shrink-0 text-sm" />
								<span>Gironde (33)</span>
							</div>
						</div>
					</div>

					<div className="md:flex md:flex-col md:justify-center md:items-center">
						<div>
							<h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Services</h3>
							<ul className="space-y-2 md:space-y-3">
								{navigation.services.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-gray-400 hover:text-spc-red transition-colors text-xs md:text-sm"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="md:flex md:flex-col md:justify-center md:items-center">
						<div>
							<h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Entreprise</h3>
							<ul className="space-y-2 md:space-y-3">
								{navigation.company.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-gray-400 hover:text-spc-red transition-colors text-xs md:text-sm"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="md:flex md:flex-col md:justify-center md:items-center">
						<div>
							<h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">Horaires</h3>
							<div className="space-y-2 text-xs md:text-sm text-gray-400">
								<p>Lundi - Samedi</p>
								<p className="font-semibold text-white">8h00 - 20h00</p>
								<p className="mt-3 md:mt-4">Urgences</p>
								<p className="font-semibold text-spc-red">24h/24 - 7j/7</p>
								<p className="font-semibold text-spc-red">Lundi - Dimanche</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
					<div className="flex flex-col space-y-4 md:space-y-3">
						<div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-400">
							{navigation.legal.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="hover:text-spc-red transition-colors"
								>
									{item.name}
								</Link>
							))}
						</div>

						<div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-xs md:text-sm text-gray-400">
							<div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-left space-y-2 md:space-y-0">
								<p>&copy; 2026 SPC Plomberie Chauffage – Tous droits réservés</p>
								<span className="hidden md:inline">•</span>
								<p>SIRET: 819 639 071</p>
							</div>
							<div className="flex items-center space-x-1 text-xs">
								<span>Site réalisé par</span>
								<a
									href="https://baverdie.dev"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline font-medium transition-colors"
								>
									Baverdie
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer >
	);
}