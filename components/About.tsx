import { FaAward, FaClock, FaMapMarkerAlt, FaUserCheck } from "react-icons/fa";

export default function About() {
	return (
		<section id="about" className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-spc-navy">
							À propos
						</h2>
						<p className="text-xl text-gray-600">
							Votre plombier chauffagiste de confiance depuis 25 ans
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
						<div className="flex items-start space-x-4">
							<FaAward className="text-4xl text-spc-red flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-spc-navy">25 ans d'expérience</h3>
								<p className="text-gray-600">
									Un savoir-faire reconnu et une expertise technique au service de votre confort
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<FaClock className="text-4xl text-spc-red flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-spc-navy">Disponibilité 24/7</h3>
								<p className="text-gray-600">
									Urgences et dépannages à toute heure, week-ends et jours fériés inclus
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<FaMapMarkerAlt className="text-4xl text-spc-red flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-spc-navy">Toute la Gironde</h3>
								<p className="text-gray-600">
									Intervention rapide dans toute la région bordelaise et le département 33
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<FaUserCheck className="text-4xl text-spc-red flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-spc-navy">Particuliers & Pros</h3>
								<p className="text-gray-600">
									Services adaptés aux particuliers et aux professionnels, devis gratuit
								</p>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-r from-spc-navy to-spc-blue text-white p-8 rounded-xl text-center">
						<h3 className="text-2xl font-bold mb-4">Service garanti • Prêt d'outillage possible</h3>
						<p className="text-lg">
							Avec ou sans RDV • Prestation appel vidéo 17€/h • Déplacement 27€/h
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}