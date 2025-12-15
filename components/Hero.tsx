import { FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
	return (
		<section className="relative bg-gradient-to-br from-spc-navy via-spc-blue to-spc-navy text-white py-20 md:py-32">
			<div className="absolute inset-0 bg-black opacity-20"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						Votre plombier chauffagiste en Gironde
					</h1>
					<p className="text-xl md:text-2xl mb-4 text-gray-200">
						25 ans d'expérience • Intervention rapide 24/7
					</p>
					<p className="text-lg mb-8 text-gray-300">
						Installation • Dépannage • Entretien • Débouchage
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:0759705716"
							className="bg-spc-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg">
							<FaPhoneAlt className="text-2xl" />
							<span>07 59 70 57 16</span>
						</a>
						<a
							href="#contact"
							className="bg-white text-spc-navy hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
							Nous contacter
						</a>
					</div>
					<p className="mt-6 text-sm text-gray-300">
						📍 Intervention dans toute la Gironde (33)
					</p>
				</div>
			</div>
		</section>
	);
}