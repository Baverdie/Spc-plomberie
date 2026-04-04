"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	const navLinks = [
		{ name: 'Accueil', href: '/' },
		{ name: 'Services', href: '/services' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Galerie', href: '/galerie' },
		{ name: 'À propos', href: '/a-propos' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-premium`}
		>
			<nav className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20 md:h-24">
					<Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
						<Image
							src="/logo-spc.png"
							alt="Logo SPC Plomberie Chauffage"
							width={60}
							height={60}
							priority
							className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105"
						/>
						<div className="hidden sm:block">
							<div className="text-base md:text-lg lg:text-xl font-bold text-spc-navy">
								SPC
							</div>
							<div className="text-xs text-spc-gray-600">
								Plomberie Chauffage
							</div>
						</div>
					</Link>

					<div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-sm xl:text-base text-spc-gray-700 hover:text-spc-red font-medium transition-colors relative group"
							>
								{link.name}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spc-red transition-all duration-300 group-hover:w-full" />
							</Link>
						))}
					</div>

					<div className="hidden md:flex items-center space-x-3">
						<a href="tel:0759705716">
							<Button variant="outline-red" size="md" icon={<FaPhone />}>
								<span className="hidden lg:inline">06 12 34 56 78</span>
								<span className="lg:hidden">Appeler</span>
							</Button>
						</a>
					</div>

					<div className="flex md:hidden items-center space-x-2">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-spc-navy text-2xl p-2 hover:bg-spc-gray-100 rounded-lg transition-colors"
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
						</button>
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="lg:hidden pb-6 animate-slide-down border-t border-gray-100 mt-2">
						<div className="flex flex-col space-y-1 pt-4">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="text-spc-gray-700 hover:text-spc-red hover:bg-spc-gray-50 font-medium py-3 px-4 rounded-lg transition-all"
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}