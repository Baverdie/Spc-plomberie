"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<nav className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<Image
							src="/logo-spc.png"
							alt="SPC Plomberie Chauffage"
							width={60}
							height={60}
							className="w-12 h-12"
							priority
						/>
						<div>
							<div className="text-xl font-bold">
								<span className="text-spc-red">SPC</span>
							</div>
							<div className="text-xs text-gray-600">Plomberie Chauffage</div>
						</div>
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center space-x-6">
						<a href="#services" className="text-gray-700 hover:text-spc-red transition-colors font-medium">
							Services
						</a>
						<a href="#about" className="text-gray-700 hover:text-spc-red transition-colors font-medium">
							À propos
						</a>
						<a href="#contact" className="text-gray-700 hover:text-spc-red transition-colors font-medium">
							Contact
						</a>

						<a
							href="tel:0759705716"
							className="bg-spc-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 font-bold">
							<FaPhone />
							<span>07 59 70 57 16</span>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-2xl text-spc-red"
					>
						{isOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden mt-4 pb-4 space-y-4">
						<a
							href="#services"
							onClick={() => setIsOpen(false)}
							className="block text-gray-700 hover:text-spc-red transition-colors font-medium">
							Services
						</a>
						<a
							href="#about"
							onClick={() => setIsOpen(false)}
							className="block text-gray-700 hover:text-spc-red transition-colors font-medium"
						>
							À propos
						</a>
						<a
							href="#contact"
							onClick={() => setIsOpen(false)}
							className="block text-gray-700 hover:text-spc-red transition-colors font-medium"
						>
							Contact
						</a>
						<a
							href="tel:0759705716"
							className="block bg-spc-red text-white px-6 py-3 rounded-lg text-center font-bold"
						>
							<FaPhone className="inline mr-2" />
							07 59 70 57 16
						</a>
					</div>
				)}
			</nav>
		</header>
	);
}