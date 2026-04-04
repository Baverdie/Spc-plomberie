"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function GalerieContent() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);
	const [isFilterVisible, setIsFilterVisible] = useState(true);
	const filterRef = useRef<HTMLElement>(null);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth >= 768) {
				setIsFilterVisible(true);
				return;
			}

			const currentScrollY = window.scrollY;
			const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

			if (currentScrollY < 900) {
				setIsFilterVisible(true);
				lastScrollY.current = currentScrollY;
				return;
			}

			if (scrollDifference < 50)
				return;

			if (currentScrollY > lastScrollY.current) {
				setIsFilterVisible(false);
			} else {
				if (scrollDifference < 100)
					return;
				setIsFilterVisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const categories = [
		{ id: "all", name: "Toutes" },
		{ id: "sanitaire", name: "Sanitaire & Salle de Bain" },
		{ id: "chauffage", name: "Chauffage & Eau Chaude" },
		{ id: "technique", name: "Installations Techniques" },
	];

	const photos = [
		{
			src: "/images/sdb-travaux.jpg",
			title: "Salle de bain PMR - En cours de rénovation",
			category: "sanitaire",
		},
		{
			src: "/images/sdb-pmr-finie.jpg",
			title: "Salle de bain PMR adaptée - Résultat final",
			category: "sanitaire",
		},
		{
			src: "/images/douche-moderne.jpg",
			title: "Installation douche italienne avec colonne",
			category: "sanitaire",
		},
		{
			src: "/images/wc-1.jpg",
			title: "Installation WC avec robinet d'arrêt",
			category: "sanitaire",
		},
		{
			src: "/images/wc-2.jpg",
			title: "WC suspendu moderne",
			category: "sanitaire",
		},
		{
			src: "/images/radiateur.jpg",
			title: "Installation radiateur mural",
			category: "sanitaire",
		},
		{
			src: "/images/chaudiere-1.jpg",
			title: "Chaudière Saunier Duval - Installation murale",
			category: "chauffage",
		},
		{
			src: "/images/chaudiere-2.jpg",
			title: "Chaudière Saunier Duval avec collecteurs",
			category: "chauffage",
		},
		{
			src: "/images/chaudiere-3.jpg",
			title: "Chaudière Saunier Duval Themafast",
			category: "chauffage",
		},
		{
			src: "/images/chauffe-eau-1.jpg",
			title: "Chauffe-eau électrique mural",
			category: "chauffage",
		},
		{
			src: "/images/chauffe-eau-2.jpg",
			title: "Ballon d'eau chaude sur socle",
			category: "chauffage",
		},
		{
			src: "/images/realisation-2.jpg",
			title: "Installation chaudière complète - Vue d'ensemble",
			category: "technique",
		},
		{
			src: "/images/collecteur.jpg",
			title: "Collecteur de chauffage - Distribution",
			category: "technique",
		},
		{
			src: "/images/tuyauterie-1.jpg",
			title: "Raccordement tuyauterie cuivre",
			category: "technique",
		},
		{
			src: "/images/tuyauterie-2.jpg",
			title: "Détail raccordement technique",
			category: "technique",
		},
	];

	const filteredPhotos = selectedCategory === "all"
		? photos
		: photos.filter(photo => photo.category === selectedCategory);

	return (
		<>
			<Header />
			<main className="pt-20 md:pt-24">
				<section className="relative min-h-[500px] flex items-center py-20 md:py-32">
					<div className="absolute inset-0 z-0">
						<Image
							src="/images/sdb-pmr-finie.jpg"
							alt="Salle de bain PMR adaptée - Résultat final"
							fill
							priority
							className="object-cover"
							sizes="100vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-spc-navy/95 via-spc-navy/80 to-spc-navy/60" />
					</div>

					<div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
						<div className="max-w-3xl">
							<div className="inline-block mb-6">
								<span className="bg-spc-red/20 text-spc-red px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-spc-red/30">
									Mon savoir-faire
								</span>
							</div>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								Galerie de
								<br />
								<span className="text-spc-red">Réalisations</span>
							</h1>

							<p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
								Exemples de travaux que je peux vous accompagner à réaliser
							</p>
						</div>
					</div>
				</section>

				<section className="bg-spc-blue/10 border-y-2 border-spc-blue/20 py-8">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-4xl mx-auto text-center">
							<p className="text-spc-gray-700 text-sm md:text-base lg:text-lg">
								<strong>Ces travaux ont été réalisés par mes soins</strong> avant le lancement de mon activité d'accompagnement.
								Ils témoignent de mon expertise technique de 25 ans que <strong>je transmets maintenant à mes clients</strong> pour qu'ils puissent réaliser eux-mêmes ce type d'installations et économiser sur la main-d'oeuvre.
							</p>
						</div>
					</div>
				</section>

				<section
					ref={filterRef}
					className={`bg-white py-8 sticky top-20 md:top-24 z-40 border-b border-gray-200 shadow-sm transition-transform duration-300 ${isFilterVisible ? "translate-y-0" : "-translate-y-full"} md:translate-y-0`}
				>
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="flex flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setSelectedCategory(category.id)}
									className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category.id
										? 'bg-spc-red text-white shadow-premium'
										: 'bg-gray-100 text-spc-gray-700 hover:bg-gray-200'
										}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</section>

				<section className="py-20 bg-spc-gray-50">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredPhotos.map((photo, index) => (
								<div
									key={index}
									onClick={() => setLightboxImage({ src: photo.src, title: photo.title })}
									className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-premium hover:shadow-premium-xl transition-all duration-500"
								>
									<Image
										src={photo.src}
										alt={photo.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110"
										sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-spc-navy/90 via-spc-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
										<h3 className="text-white font-semibold text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
											{photo.title}
										</h3>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-spc-navy text-white py-20">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Vous aussi, apprenez à faire !
							</h2>
							<p className="text-xl text-gray-300 mb-8">
								Ces installations peuvent être réalisées avec mon accompagnement.
								Je vous guide pour que vous fassiez vous-même et économisiez.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a href="tel:0759705716">
									<button className="bg-spc-red text-white px-8 py-4 rounded-2xl font-semibold hover:bg-red-700 transition-all">
										Me contacter
									</button>
								</a>
								<a href="/services">
									<button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-spc-navy transition-all">
										Voir mes formules
									</button>
								</a>
							</div>
						</div>
					</div>
				</section>

				{lightboxImage && (
					<div
						onClick={() => setLightboxImage(null)}
						className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
					>
						<button
							onClick={() => setLightboxImage(null)}
							className="absolute top-4 right-4 text-white text-3xl hover:text-spc-red transition-colors"
							aria-label="Fermer"
						>
							<FaTimes />
						</button>
						<div className="relative max-w-5xl w-full aspect-square">
							<Image
								src={lightboxImage.src}
								alt={lightboxImage.title}
								fill
								className="object-contain"
								sizes="100vw"
							/>
						</div>
					</div>
				)}
			</main>
			<Footer />
		</>
	);
}
