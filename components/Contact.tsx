import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
	return (
		<section id="contact" className="py-16 md:py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 text-spc-navy">
							Contactez-nous
						</h2>
						<p className="text-xl text-gray-600">
							Une urgence ? Un devis ? Nous sommes à votre écoute 24/7
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Bloc urgence */}
						<div className="bg-spc-red text-white p-8 rounded-xl shadow-lg">
							<div className="flex items-center space-x-3 mb-4">
								<FaClock className="text-3xl" />
								<h3 className="text-2xl font-bold">Urgence 24/7</h3>
							</div>
							<a
								href="tel:0759705716"
								className="flex items-center space-x-3 text-3xl font-bold hover:underline mb-4">
								<FaPhone />
								<span>07 59 70 57 16</span>
							</a>
							<p className="text-lg">
								Intervention rapide dans toute la Gironde
							</p>
						</div>
						{/* Infos contact */}
						<div className="space-y-6">
							<div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
								<FaEnvelope className="text-3xl text-spc-blue flex-shrink-0 mt-1" />
								<div>
									<h3 className="font-bold text-lg mb-1">Email</h3>
									<a
										href="mailto:spcplomberiechauffage33@gmail.com"
										className="text-gray-600 hover:text-spc-red break-all">
											pcplomberiechauffage33@gmail.com
									</a>
								</div>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
								<FaMapMarkerAlt className="text-3xl text-spc-red flex-shrink-0 mt-1" />
								<div>
									<h3 className="font-bold text-lg mb-1">Zone d'intervention</h3>
									<p className="text-gray-600">
										Gironde (33)<br />
										Région bordelaise et alentours
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 bg-white p-8 rounded-xl shadow-lg text-center">
						<h3 className="text-2xl font-bold mb-4 text-spc-navy">Devis gratuit</h3>
						<p className="text-gray-600 mb-6 text-lg">
							Pour toute demande de devis ou information, appelez-nous directement au<br />
							<a href="tel:0759705716" className="text-spc-red font-bold hover:underline text-xl">
								07 59 70 57 16
							</a>
						</p>
						<p className="text-sm text-gray-500">
							Lundi au samedi : 8h - 20h • Urgences : 24h/24 - 7j/7
						</p>
					</div>
				</div>
			</div >
		</section >
	);
}