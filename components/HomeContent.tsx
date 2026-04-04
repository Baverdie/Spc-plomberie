"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GalleryPreview from "@/components/GalleryPreview";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomeContent() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<GalleryPreview />
				<Stats />
				<AboutPreview />
				<CTASection />
			</main>
			<Footer />
		</>
	);
}
