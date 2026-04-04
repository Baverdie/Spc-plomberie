"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "./Section";

export default function Stats() {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.3,
	});

	const stats = [
		{
			number: "25",
			suffix: "ans",
			label: "D'expérience",
			color: "red",
		},
		{
			number: "1000",
			suffix: "+",
			label: "Interventions",
			color: "blue",
		},
		{
			number: "100",
			suffix: "%",
			label: "Satisfaction client",
			color: "red",
		},
		{
			number: "24",
			suffix: "/7",
			label: "Disponibilité",
			color: "blue",
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

	const statVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<Section background="navy">
			<div ref={ref}>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12"
				>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							variants={statVariants}
							className="text-center"
						>
							<div className="mb-2 md:mb-3">
								<span className={stat.color === "red" ? "text-spc-red" : "text-spc-blue"}>
									<span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
										{stat.number}
									</span>
									<span className="text-2xl md:text-3xl lg:text-4xl font-bold">
										{stat.suffix}
									</span>
								</span>
							</div>
							<p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Section>
	);
}