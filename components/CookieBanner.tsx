"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "refused" | null;

export default function CookieBanner() {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentValue;
		if (!consent) {
			const timer = setTimeout(() => setShowBanner(true), 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
		setShowBanner(false);
	};

	const handleRefuse = () => {
		localStorage.setItem(COOKIE_CONSENT_KEY, "refused");
		setShowBanner(false);
	};

	return (
		<AnimatePresence>
			{showBanner && (
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="fixed bottom-0 left-0 right-0 z-30 p-4 md:p-6"
					role="dialog"
					aria-label="Bannière de consentement aux cookies"
					aria-describedby="cookie-description"
				>
					<div className="container mx-auto max-w-4xl">
						<div className="bg-white rounded-2xl shadow-premium-xl p-4 md:p-6 border border-spc-gray-100">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
								<div className="flex-1">
									<p
										id="cookie-description"
										className="text-sm md:text-base text-spc-gray-700"
									>
										Ce site utilise des cookies pour améliorer votre expérience.{" "}
										<Link
											href="/politique-cookies"
											className="text-spc-red hover:underline font-medium"
										>
											En savoir plus
										</Link>
									</p>
								</div>

								<div className="flex items-center gap-3 flex-shrink-0">
									<button
										onClick={handleRefuse}
										className="px-4 py-2 text-sm font-medium text-spc-gray-700 hover:text-spc-navy border border-spc-gray-300 hover:border-spc-gray-400 rounded-lg transition-colors min-h-[44px]"
									>
										Refuser
									</button>
									<button
										onClick={handleAccept}
										className="px-4 py-2 text-sm font-medium text-white bg-spc-red hover:bg-spc-red/90 rounded-lg transition-colors min-h-[44px]"
									>
										Accepter
									</button>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
