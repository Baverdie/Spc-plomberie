"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaHandHoldingUsd, FaLightbulb, FaArrowRight } from "react-icons/fa";
import Section from "./Section";
import Button from "./Button";

export default function AboutPreview() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const values = [
		{
			icon: <FaGraduationCap className="text-3xl md:text-4xl" />,
			title: "Transmission",
			description: "25 ans d'expérience que je partage pour vous rendre autonome sur vos réparations",
		},
		{
			icon: <FaHandHoldingUsd className="text-3xl md:text-4xl" />,
			title: "Économies",
			description: "Faites vous-même avec mes conseils et réduisez drastiquement vos coûts de plomberie",
		},
		{
			icon: <FaLightbulb className="text-3xl md:text-4xl" />,
			title: "Pédagogie",
			description: "J'explique, je montre, vous faites. Pas de jugement, juste de l'apprentissage pratique",
		},
	];

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<Section background="gray">
			<div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.8 }}
				>
					<div className="inline-block mb-4 md:mb-6">
						<span className="bg-spc-red/10 text-spc-red px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
							Une approche unique
						</span>
					</div>

					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-4 md:mb-6">
						Apprenez plutôt que
						<br />
						de subir vos pannes
					</h2>

					<p className="text-base md:text-lg text-spc-gray-600 mb-6 md:mb-8 leading-relaxed">
						Depuis 25 ans dans la plomberie, j'ai décidé de transmettre mon savoir-faire
						pour vous aider à devenir autonome. Pourquoi payer des fortunes quand vous
						pouvez apprendre à faire vous-même avec l'aide d'un pro ?
					</p>

					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<div className="flex items-center space-x-3">
							<span className="text-spc-red text-lg md:text-xl flex-shrink-0">✓</span>
							<span className="text-sm md:text-base text-spc-gray-700">Accompagnement patient et pédagogique</span>
						</div>
						<div className="flex items-center space-x-3">
							<span className="text-spc-red text-lg md:text-xl flex-shrink-0">✓</span>
							<span className="text-sm md:text-base text-spc-gray-700">Pas besoin d'être bricoleur pour apprendre</span>
						</div>
						<div className="flex items-center space-x-3">
							<span className="text-spc-red text-lg md:text-xl flex-shrink-0">✓</span>
							<span className="text-sm md:text-base text-spc-gray-700">En visio ou sur place en Gironde</span>
						</div>
					</div>

					<a href="/a-propos">
						<Button variant="primary" size="lg" icon={<FaArrowRight />}>
							En savoir plus
						</Button>
					</a>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="space-y-4 md:space-y-6"
				>
					{values.map((value, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							className="bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-x-2"
						>
							<div className="flex items-start space-x-3 md:space-x-4">
								<div className="text-spc-blue flex-shrink-0">
									{value.icon}
								</div>
								<div>
									<h3 className="text-lg md:text-xl font-bold text-spc-navy mb-1 md:mb-2">
										{value.title}
									</h3>
									<p className="text-sm md:text-base text-spc-gray-600 leading-relaxed">
										{value.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Section>
	);
}