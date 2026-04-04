"use client";

import { useState, FormEvent } from "react";
import HeaderPremium from "@/components/Header";
import FooterPremium from "@/components/Footer";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaVideo } from "react-icons/fa";
import Button from "@/components/Button";

export default function ContactContent() {

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		const TEMPLATE_JOHANN_ID = "template_ztp7b4j";
		const TEMPLATE_CLIENT_ID = "template_ggo94cs";
		const SERVICE_ID = "service_cy38r38";
		const PUBLIC_KEY = "RiCh4FhPd_JrO6UOC";

		try {
			const responseJohann = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					service_id: SERVICE_ID,
					template_id: TEMPLATE_JOHANN_ID,
					user_id: PUBLIC_KEY,
					template_params: {
						name: formData.name,
						email: formData.email,
						phone: formData.phone,
						service: formData.service,
						message: formData.message,
					},
				}),
			});

			const responseClient = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					service_id: SERVICE_ID,
					template_id: TEMPLATE_CLIENT_ID,
					user_id: PUBLIC_KEY,
					template_params: {
						from_name: formData.name,
						from_email: formData.email,
						phone: formData.phone,
						service: formData.service,
						message: formData.message,
					},
				}),
			});

			if (responseJohann.ok && responseClient.ok) {
				setSubmitStatus("success");
				setFormData({ name: "", email: "", phone: "", service: "", message: "" });
			} else {
				setSubmitStatus("error");
			}
		} catch {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	return (
		<>
			<HeaderPremium />
			<main className="pt-20 md:pt-24">
				<section className="relative min-h-[500px] flex items-center py-20 md:py-32">
					<div className="absolute inset-0 z-0">
						<Image
							src="/images/realisation-3.jpg"
							alt="Realisation SPC Plomberie Chauffage"
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
									Discutons de votre projet
								</span>
							</div>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								Contactez-moi
							</h1>

							<p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
								Une question ? Un projet ? Je suis là pour vous accompagner
							</p>
						</div>
					</div>
				</section>

				<section className="py-12 bg-white border-b border-gray-200">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
							<div className="text-center">
								<FaPhone className="text-4xl text-spc-red mx-auto mb-4" />
								<h3 className="font-bold text-spc-navy mb-2">Téléphone</h3>
								<a href="tel:0759705716" className="text-spc-blue hover:text-spc-red transition-colors text-lg font-semibold">
									07 59 70 57 16
								</a>
								<p className="text-sm text-spc-gray-600 mt-2">Disponible 24/24</p>
							</div>

							<div className="text-center">
								<FaEnvelope className="text-4xl text-spc-red mx-auto mb-4" />
								<h3 className="font-bold text-spc-navy mb-2">Email</h3>
								<a
									href="mailto:spcplomberiechauffage33@gmail.com"
									className="text-spc-blue hover:text-spc-red transition-colors text-xs sm:text-sm font-semibold break-words"
								>
									spcplomberiechauffage33@gmail.com
								</a>
								<p className="text-sm text-spc-gray-600 mt-2">Réponse sous 24h</p>
							</div>

							<div className="text-center">
								<FaMapMarkerAlt className="text-4xl text-spc-red mx-auto mb-4" />
								<h3 className="font-bold text-spc-navy mb-2">Zone</h3>
								<p className="text-spc-gray-700 font-semibold">Gironde (33)</p>
								<p className="text-sm text-spc-gray-600 mt-2">Visio : France entière</p>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 md:py-32 bg-spc-gray-50">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-spc-navy mb-6">
									Envoyez-moi un message
								</h2>
								<p className="text-lg text-spc-gray-600 mb-8">
									Décrivez-moi votre projet ou votre problème, je vous recontacte rapidement
								</p>

								<form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
									<div>
										<label htmlFor="name" className="block text-sm font-semibold text-spc-navy mb-2">
											Nom complet *
										</label>
										<input
											type="text"
											id="name"
											required
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-spc-blue focus:outline-none transition-colors"
											placeholder="Jean Dupont"
										/>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-semibold text-spc-navy mb-2">
											Email *
										</label>
										<input
											type="email"
											id="email"
											required
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-spc-blue focus:outline-none transition-colors"
											placeholder="jean.dupont@exemple.fr"
										/>
									</div>

									<div>
										<label htmlFor="phone" className="block text-sm font-semibold text-spc-navy mb-2">
											Téléphone *
										</label>
										<input
											type="tel"
											id="phone"
											required
											value={formData.phone}
											onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-spc-blue focus:outline-none transition-colors"
											placeholder="06 12 34 56 78"
										/>
									</div>

									<div>
										<label htmlFor="service" className="block text-sm font-semibold text-spc-navy mb-2">
											Formule souhaitée *
										</label>
										<select
											id="service"
											required
											value={formData.service}
											onChange={(e) => setFormData({ ...formData, service: e.target.value })}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-spc-blue focus:outline-none transition-colors"
										>
											<option value="">Sélectionnez une formule</option>
											<option value="visio">Aide en visio (17€/h)</option>
											<option value="presentiel">Accompagnement sur place (27€/h)</option>
											<option value="complete">Intervention complète (sur devis)</option>
											<option value="question">Juste une question</option>
										</select>
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-semibold text-spc-navy mb-2">
											Votre message *
										</label>
										<textarea
											id="message"
											required
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
											rows={5}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-spc-blue focus:outline-none transition-colors resize-none"
											placeholder="Décrivez votre projet ou votre problème de plomberie..."
										/>
									</div>

									<Button
										type="submit"
										variant="primary"
										size="lg"
										fullWidth
										icon={<FaPaperPlane />}
										disabled={isSubmitting}
									>
										{isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
									</Button>

									{submitStatus === "success" && (
										<div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl">
											<p className="font-semibold">Message envoyé avec succès !</p>
											<p className="text-sm">Je vous recontacte rapidement.</p>
										</div>
									)}

									{submitStatus === "error" && (
										<div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl">
											<p className="font-semibold">Erreur lors de l'envoi</p>
											<p className="text-sm">Appelez-moi directement au 07 59 70 57 16</p>
										</div>
									)}
								</form>
							</div>

							<div className="space-y-8">
								<div>
									<h3 className="text-2xl font-bold text-spc-navy mb-6">
										Informations pratiques
									</h3>

									<div className="space-y-6">
										<div className="bg-white rounded-2xl p-6 shadow-premium">
											<div className="flex items-start space-x-4">
												<FaClock className="text-3xl text-spc-blue flex-shrink-0 mt-1" />
												<div>
													<h4 className="font-bold text-spc-navy mb-2">Disponibilité</h4>
													<p className="text-spc-gray-700 mb-1">Lundi - Samedi</p>
													<p className="font-semibold text-spc-navy">24h/24</p>
													<p className="text-sm text-spc-gray-600 mt-2">
														Appels vidéo possibles le soir et week-end
													</p>
												</div>
											</div>
										</div>

										<div className="bg-white rounded-2xl p-6 shadow-premium">
											<div className="flex items-start space-x-4">
												<FaVideo className="text-3xl text-spc-red flex-shrink-0 mt-1" />
												<div>
													<h4 className="font-bold text-spc-navy mb-2">Aide en Visio</h4>
													<p className="text-2xl font-bold text-spc-red mb-1">17€/h</p>
													<p className="text-sm text-spc-gray-600">
														Réponse rapide, souvent le jour même. Je vous guide
														par appel vidéo pour réparer vous-même.
													</p>
												</div>
											</div>
										</div>

										<div className="bg-white rounded-2xl p-6 shadow-premium">
											<h4 className="font-bold text-spc-navy mb-3">Délai de réponse</h4>
											<ul className="space-y-2 text-spc-gray-700">
												<li className="flex items-start space-x-2">
													<span className="text-spc-red mt-1">✓</span>
													<span>Formulaire : Réponse sous 24h</span>
												</li>
												<li className="flex items-start space-x-2">
													<span className="text-spc-red mt-1">✓</span>
													<span>Téléphone : Réponse immédiate</span>
												</li>
												<li className="flex items-start space-x-2">
													<span className="text-spc-red mt-1">✓</span>
													<span>Urgence : Disponible rapidement</span>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="bg-spc-red rounded-2xl p-8 text-white text-center">
									<h4 className="text-2xl font-bold mb-4">Besoin urgent ?</h4>
									<p className="mb-6">
										Appelez-moi maintenant, je peux vous aider rapidement en visio
									</p>
									<a href="tel:0759705716">
										<Button
											variant="outline"
											size="lg"
											fullWidth
											icon={<FaPhone />}
											className="border-white text-white hover:bg-white hover:text-red-500"
										>
											07 59 70 57 16
										</Button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<FooterPremium />
		</>
	);
}
