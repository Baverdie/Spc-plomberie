"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Section from "./Section";
import Button from "./Button";

export default function GalleryPreview() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const photos = [
		{
			src: "/images/realisation-1.jpg",
			title: "Salle de bain PMR",
		},
		{
			src: "/images/wc-2.jpg",
			title: "Installation sanitaire",
		},
		{
			src: "/images/realisation-2.jpg",
			title: "Installation chaudière",
		}
	];

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<Section background="white">
			<div ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-4 md:mb-6">
						Mes Réalisations
					</h2>
					<p className="text-base md:text-lg lg:text-xl text-spc-gray-600">
						Découvrez quelques-unes de mes installations en Gironde
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12"
				>
					{photos.map((photo, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="relative group overflow-hidden rounded-3xl aspect-square md:h-80 md:aspect-auto"
						>
							<Image
								src={photo.src}
								alt={photo.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-spc-navy/80 via-spc-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<h3 className="text-white font-semibold text-base md:text-lg lg:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
									{photo.title}
								</h3>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center"
				>
					<a href="/galerie">
						<Button variant="primary" size="lg" icon={<FaArrowRight />}>
							Voir toute la galerie
						</Button>
					</a>
				</motion.div>
			</div>
		</Section>
	);
}