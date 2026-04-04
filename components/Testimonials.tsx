"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "./Section";

interface Testimonial {
	id: number;
	name: string;
	context: string;
	quote: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Marie",
		context: "Fuite sous évier",
		quote: "Johann m'a guidée par visio pour réparer ma fuite. En 30 minutes, c'était réglé ! J'ai économisé le déplacement d'un plombier et j'ai appris à le faire moi-même.",
	},
	{
		id: 2,
		name: "Thomas",
		context: "Chasse d'eau défectueuse",
		quote: "Je n'y connaissais rien en plomberie. Grâce à l'accompagnement sur place de Johann, j'ai remplacé le mécanisme de ma chasse d'eau. Patient et pédagogue !",
	},
	{
		id: 3,
		name: "Sophie",
		context: "Robinet qui goutte",
		quote: "Super expérience ! Johann m'a expliqué comment changer les joints de mon robinet. C'est tellement satisfaisant de savoir faire soi-même.",
	},
	{
		id: 4,
		name: "Pierre",
		context: "Siphon bouché",
		quote: "Intervention rapide et efficace. Johann a pris le temps de m'expliquer comment éviter que ça se reproduise. Je recommande à 100% !",
	}
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
		const swipeThreshold = 50;
		if (info.offset.x < -swipeThreshold) {
			nextSlide();
		} else if (info.offset.x > swipeThreshold) {
			prevSlide();
		}
	};

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut" as const,
			},
		},
	};

	const TestimonialCard = ({ testimonial, className = "" }: { testimonial: Testimonial; className?: string }) => (
		<div
			className={`bg-white rounded-3xl p-6 md:p-8 shadow-none md:shadow-premium hover:shadow-premium-xl transition-all duration-300 h-full flex flex-col ${className}`}
		>
			<span className="inline-block bg-spc-red/10 text-spc-red text-sm font-medium px-3 py-1 rounded-full mb-4 self-start">
				{testimonial.context}
			</span>

			<blockquote className="text-spc-gray-700 text-base md:text-lg leading-relaxed flex-grow mb-4">
				"{testimonial.quote}"
			</blockquote>

			<p className="text-spc-navy font-semibold text-lg">
				— {testimonial.name}
			</p>
		</div>
	);

	return (
		<Section
			id="testimonials"
			background="gray"
			role="region"
			aria-label="Témoignages de clients satisfaits"
		>
			<div ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-spc-navy mb-4 md:mb-6">
						Ils m'ont fait confiance
					</h2>
					<p className="text-base md:text-lg lg:text-xl text-spc-gray-600">
						Découvrez les retours de ceux qui ont appris à réparer avec moi
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{testimonials.map((testimonial) => (
						<motion.div key={testimonial.id} variants={cardVariants}>
							<TestimonialCard testimonial={testimonial} />
						</motion.div>
					))}
				</motion.div>

				<div className="md:hidden">
					<div className="relative overflow-hidden">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.2}
								onDragEnd={handleDragEnd}
								className="cursor-grab active:cursor-grabbing"
								style={{ touchAction: "pan-y" }}
							>
								<TestimonialCard testimonial={testimonials[currentIndex]} />
							</motion.div>
						</AnimatePresence>
					</div>

					<div
						className="flex justify-center gap-3 mt-6"
						role="tablist"
						aria-label="Navigation des témoignages"
					>
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
									index === currentIndex
										? "bg-spc-red"
										: "bg-spc-gray-300 hover:bg-spc-gray-400"
								}`}
								role="tab"
								aria-selected={index === currentIndex}
								aria-label={`Voir le témoignage ${index + 1} de ${testimonials.length}`}
							>
								<span
									className={`w-3 h-3 rounded-full ${
										index === currentIndex ? "bg-spc-red" : "bg-spc-gray-300"
									}`}
								/>
							</button>
						))}
					</div>

					<p className="sr-only">
						Utilisez les gestes de balayage ou les boutons de navigation pour parcourir les témoignages
					</p>
				</div>
			</div>
		</Section>
	);
}
