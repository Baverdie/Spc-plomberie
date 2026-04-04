import Link from "next/link";
import Image from "next/image";
import { FaHome, FaPhone } from "react-icons/fa";
import Button from "@/components/Button";

export default function NotFound() {
	return (
		<>
			<div className="min-h-screen bg-spc-gray-50 flex items-center justify-center px-4 pt-32 md:pt-40 pb-12 md:pb-16">
				<div className="max-w-2xl mx-auto text-center">
					<div className="mb-6 md:mb-8 flex justify-center">
						<Image
							src="/logo-spc.png"
							alt="Logo SPC Plomberie Chauffage"
							width={100}
							height={100}
							className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
						/>
					</div>

					<div className="mb-6 md:mb-8">
						<h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-spc-red mb-3 md:mb-4">
							404
						</h1>
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-spc-navy mb-3 md:mb-4">
							Oups ! Page introuvable
						</h2>
						<p className="text-base md:text-lg lg:text-xl text-spc-gray-600 mb-6 md:mb-8 leading-relaxed px-4">
							On dirait qu'il y a une fuite... dans notre site ! 💧
							<br className="hidden sm:block" />
							<span className="block sm:inline mt-2 sm:mt-0">Cette page n'existe pas ou a été déplacée.</span>
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
						<Link href="/" className="w-full sm:w-auto">
							<Button variant="primary" size="lg" icon={<FaHome />} fullWidth className="sm:w-auto">
								Retour à l'accueil
							</Button>
						</Link>
						<a href="tel:0759705716" className="w-full sm:w-auto">
							<Button
								variant="outline"
								size="lg"
								icon={<FaPhone />}
								fullWidth
								className="sm:w-auto"
							>
								Nous contacter
							</Button>
						</a>
					</div>

					<div className="border-t border-gray-200 pt-6 md:pt-8 px-4">
						<p className="text-sm md:text-base text-spc-gray-600 mb-3 md:mb-4">Pages populaires :</p>
						<div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
							<Link href="/services" className="text-spc-gray-700 hover:text-spc-red transition-colors">
								Services
							</Link>
							<span className="text-gray-400">•</span>
							<Link href="/galerie" className="text-spc-gray-700 hover:text-spc-red transition-colors">
								Galerie
							</Link>
							<span className="text-gray-400">•</span>
							<Link href="/a-propos" className="text-spc-gray-700 hover:text-spc-red transition-colors">
								À propos
							</Link>
							<span className="text-gray-400">•</span>
							<Link href="/contact" className="text-spc-gray-700 hover:text-spc-red transition-colors">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}