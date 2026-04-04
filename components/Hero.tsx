"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPhone, FaArrowRight, FaVideo, FaTools } from "react-icons/fa";
import Button from "./Button";

export default function Hero() {
	return (
		<section className="relative h-screen min-h-[600px] flex items-center">
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/realisation-1.jpg"
					alt="Realisation SPC Plomberie Chauffage"
					fill
					priority
					className="object-cover"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-spc-navy/95 via-spc-navy/80 to-transparent" />
			</div>

			<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
				<div className="max-w-3xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" as const }}
					>
						<div className="inline-block mb-4 md:mb-6">
							<span className="bg-spc-red/20 text-spc-red px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-spc-red/30">
								25 ans d'expérience à transmettre
							</span>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
							Apprenez à faire
							<br />
							votre plomberie
							<br />
							<span className="text-spc-red">vous-même</span>
						</h1>

						<p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed">
							Avec l'aide d'un professionnel, en présentiel ou en visio.
							<br className="hidden sm:block" />
							Économisez et devenez autonome !
						</p>

						<div className="flex flex-col sm:flex-row gap-3 md:gap-4">
							<a href="tel:0759705716" className="w-full sm:w-auto">
								<Button variant="primary" size="lg" icon={<FaPhone />} fullWidth className="sm:w-auto">
									Me contacter
								</Button>
							</a>
							<a href="#services" className="w-full sm:w-auto">
								<Button variant="outline" size="lg" icon={<FaArrowRight />} fullWidth className="sm:w-auto">
									Découvrir mes formules
								</Button>
							</a>
						</div>

						<div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 text-white/80">
							<div className="flex items-center space-x-2">
								<FaVideo className="text-spc-red text-base md:text-lg flex-shrink-0" />
								<span className="text-xs sm:text-sm font-medium">Aide en distanciel</span>
							</div>
							<div className="flex items-center space-x-2">
								<FaTools className="text-spc-red text-base md:text-lg flex-shrink-0" />
								<span className="text-xs sm:text-sm font-medium">Accompagnement sur place</span>
							</div>
							<div className="flex items-center space-x-2">
								<span className="text-xl md:text-2xl flex-shrink-0">✓</span>
								<span className="text-xs sm:text-sm font-medium">Bordeaux & Gironde (33)</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
				<div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
					<div className="w-1 h-3 bg-white/50 rounded-full" />
				</div>
			</div>
		</section>
	);
}