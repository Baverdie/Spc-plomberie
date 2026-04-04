"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export interface FAQCategory {
	id: string;
	title: string;
	icon?: string;
	items: FAQItem[];
}

interface FAQAccordionProps {
	categories: FAQCategory[];
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
	const [openId, setOpenId] = useState<string | null>(null);

	const toggleItem = (id: string) => {
		setOpenId(openId === id ? null : id);
	};

	const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleItem(id);
		}
	};

	return (
		<div className="space-y-8 md:space-y-12">
			{categories.map((category) => (
				<div key={category.id}>
					<h3 className="text-xl md:text-2xl font-bold text-spc-navy mb-4 md:mb-6 flex items-center gap-3">
						{category.icon && <span>{category.icon}</span>}
						{category.title}
					</h3>

					<div className="space-y-3 md:space-y-4">
						{category.items.map((item) => {
							const isOpen = openId === item.id;
							const controlId = `faq-answer-${item.id}`;

							return (
								<div
									key={item.id}
									className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
								>
									<button
										onClick={() => toggleItem(item.id)}
										onKeyDown={(e) => handleKeyDown(e, item.id)}
										aria-expanded={isOpen}
										aria-controls={controlId}
										className="w-full flex rounded-2xl items-center justify-between p-4 md:p-6 text-left focus:outline-none border-2 border-transparent focus:border-spc-red/50"
									>
										<span className="text-base md:text-lg font-medium text-spc-navy pr-4">
											{item.question}
										</span>
										<motion.span
											animate={{ rotate: isOpen ? 180 : 0 }}
											transition={{ duration: 0.3 }}
											className="flex-shrink-0 text-spc-red"
										>
											<FaChevronDown className="w-4 h-4 md:w-5 md:h-5" />
										</motion.span>
									</button>
									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div
												id={controlId}
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3, ease: "easeInOut" }}
												role="region"
												aria-labelledby={`faq-question-${item.id}`}
											>
												<div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
													<div className="border-t border-spc-gray-100 pt-4">
														<p className="text-sm md:text-base text-spc-gray-700 leading-relaxed">
															{item.answer}
														</p>
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
}
