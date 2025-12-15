import { FaTint, FaFire, FaWrench, FaShower, FaTools, FaCog } from "react-icons/fa";

export default function Services() {
	const services = [
		{
			icon: <FaTint className="text-5xl text-spc-blue" />,
			title: "Plomberie",
			items: ["Sanitaire", "Installation", "Fuite", "Débouchage"],
		},
		{
			icon: <FaFire className="text-5xl text-spc-orange" />,
			title: "Chauffage",
			items: ["Chaudière", "Chauffe-eau", "Entretien", "Dépannage"],
		},
		{
			icon: <FaWrench className="text-5xl text-spc-gray" />,
			title: "Dépannage",
			items: ["Urgences 24/7", "Intervention rapide", "Devis gratuit", "Garantie"],
		},
	];

	return (
		<section id="services" className="py-16 md:py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-spc-navy">
						Nos services
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Particuliers et professionnels, nous intervenons pour tous vos besoins en plomberie et chauffage
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
						>
							<div className="mb-6 flex justify-center">{service.icon}</div>
							<h3 className="text-2xl font-bold mb-4 text-center text-spc-navy">
								{service.title}
							</h3>
							<ul className="space-y-2">
								{service.items.map((item, idx) => (
									<li key={idx} className="flex items-center text-gray-700">
										<span className="text-spc-red mr-2">✓</span>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<div className="inline-block bg-spc-blue bg-opacity-10 border-2 border-spc-blue rounded-lg p-6 max-w-2xl">
						<p className="text-lg font-semibold text-spc-navy mb-2">
							💡 Apprendre à faire soi-même avec l'aide d'un professionnel
						</p>
						<p className="text-gray-600">
							Prestations d'accompagnement disponibles • Aide à l'achat de fournitures • Économisez sur la main-d'œuvre
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}