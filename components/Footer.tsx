import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-spc-navy text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="text-center md:text-left">
						<div className="text-2xl font-bold mb-2">
							<span className="text-spc-red">SPC</span> Plomberie Chauffage
						</div>
						<p className="text-gray-400 text-sm">
							Votre plombier chauffagiste en Gironde depuis 25 ans
						</p>
					</div>
					<div className="flex flex-col space-y-2 text-center md:text-right">
						<a
							href="tel:0759705716"
							className="flex items-center space-x-2 hover:text-spc-red transition-colors justify-center md:justify-end"
						>
							<FaPhone />
							<span className="font-bold">07 59 70 57 16</span>
						</a>
						<a
							href="mailto:spcplomberiechauffage33@gmail.com"
							className="flex items-center space-x-2 hover:text-spc-red transition-colors text-sm justify-center md:justify-end"
						>
							<FaEnvelope />
							<span>spcplomberiechauffage33@gmail.com</span>
						</a>
					</div>
				</div>
				<div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
					<p>&copy; {new Date().getFullYear()} SPC - Service Plomberie Chauffage. Tous droits réservés.</p>
					<p className="mt-2">SIRET: 819 639 071 00013</p>
					<p className="mt-4 text-xs">
						Site réalisé par{" "}
						<a
							href="https://baverdie.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline font-medium"
						>
							Baverdie
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}