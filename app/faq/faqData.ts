import { FAQCategory } from "@/components/FAQAccordion";

export const faqCategories: FAQCategory[] = [
	{
		id: "urgences",
		title: "Urgences",
		icon: "🚨",
		items: [
			{
				id: "urgence-1",
				question: "Comment couper l'eau en urgence ?",
				answer: "En cas de fuite importante, coupez immédiatement l'arrivée d'eau générale. Le robinet se trouve généralement près du compteur d'eau, souvent dans un placard technique, au sous-sol, ou à l'extérieur près du trottoir. Tournez dans le sens des aiguilles d'une montre pour fermer. Si vous ne trouvez pas le robinet, contactez-moi en urgence par WhatsApp.",
			},
			{
				id: "urgence-2",
				question: "Que faire en cas de fuite d'eau ?",
				answer: "1) Coupez l'eau au robinet d'arrêt général. 2) Coupez l'électricité si l'eau est proche de prises ou appareils électriques. 3) Épongez l'eau stagnante pour éviter les dégâts. 4) Prenez des photos pour votre assurance. 5) Contactez-moi via WhatsApp pour une aide en visio rapide - je peux souvent vous guider pour une réparation temporaire en attendant.",
			},
			{
				id: "urgence-3",
				question: "Mes toilettes sont bouchées, que faire ?",
				answer: "Avant d'appeler un plombier : essayez la ventouse en faisant des mouvements de va-et-vient vigoureux. Vous pouvez aussi verser de l'eau très chaude (pas bouillante) avec du liquide vaisselle et attendre 30 minutes. Si ça persiste, je peux vous guider en visio pour utiliser un furet ou identifier le problème. Ne versez jamais de produits chimiques puissants qui peuvent endommager vos canalisations.",
			},
		],
	},
	{
		id: "tarifs",
		title: "Tarifs et Paiement",
		icon: "💰",
		items: [
			{
				id: "tarif-1",
				question: "Combien coûte une séance d'aide en visio ?",
				answer: "L'aide en visio est à 17€ de l'heure. La plupart des problèmes courants se règlent en 30 minutes à 1 heure. Vous ne payez que le temps réel passé ensemble. C'est beaucoup moins cher qu'un déplacement de plombier classique qui commence souvent à 80-150€.",
			},
			{
				id: "tarif-2",
				question: "Combien coûte l'accompagnement sur place ?",
				answer: "L'accompagnement sur place en Gironde est à 27€ de l'heure. Je me déplace chez vous, je vous guide pas à pas, et vous faites vous-même les réparations. Vous apprenez vraiment et vous économisez sur la main-d'œuvre. Le déplacement est inclus dans le tarif horaire pour les communes proches de Bordeaux.",
			},
			{
				id: "tarif-3",
				question: "Comment se passe le paiement ?",
				answer: "Pour l'aide en visio, le paiement se fait après la séance par virement, PayPal ou Lydia. Pour l'accompagnement sur place, vous pouvez payer en espèces, par virement ou par chèque. Je vous envoie toujours un récapitulatif du temps passé et du montant.",
			},
		],
	},
	{
		id: "services",
		title: "Services",
		icon: "🔧",
		items: [
			{
				id: "service-1",
				question: "Comment fonctionne l'aide en visio ?",
				answer: "C'est simple : vous me contactez via WhatsApp, on convient d'un créneau, et je vous appelle en vidéo. Vous me montrez le problème avec votre téléphone, et je vous guide étape par étape pour le réparer vous-même. Je vous dis aussi quel matériel acheter si nécessaire. Ça marche pour la plupart des problèmes de plomberie courante.",
			},
			{
				id: "service-2",
				question: "Quels problèmes puis-je réparer avec l'aide en visio ?",
				answer: "La plupart des problèmes courants : fuites de robinet, chasse d'eau qui coule, siphon bouché, joint à changer, petit dégorgement, remplacement de flexible, installation de robinet... Si le problème nécessite une intervention physique complexe, je vous le dirai honnêtement et vous orienterai vers la bonne solution.",
			},
			{
				id: "service-3",
				question: "Intervenez-vous en dehors de la Gironde ?",
				answer: "Pour l'accompagnement sur place, je me déplace uniquement en Gironde (33). Mais l'aide en visio fonctionne partout en France ! Où que vous soyez, je peux vous guider par appel vidéo pour résoudre votre problème de plomberie.",
			},
			{
				id: "service-4",
				question: "Puis-je vous demander une intervention classique ?",
				answer: "Oui, si vous préférez que je fasse tout moi-même, je propose aussi des interventions complètes en tant que plombier classique. Dans ce cas, je vous fais un devis gratuit au préalable. C'est idéal pour les travaux complexes ou si vous n'avez vraiment pas le temps de faire vous-même.",
			},
		],
	},
	{
		id: "pratique",
		title: "Informations pratiques",
		icon: "📋",
		items: [
			{
				id: "pratique-1",
				question: "Ai-je besoin d'outils pour l'aide en visio ?",
				answer: "Pour les réparations simples, vous avez souvent déjà le nécessaire : tournevis, pince, seau, serpillière. Si des outils spécifiques sont nécessaires, je vous le dirai avant qu'on commence et vous indiquerai où les trouver. Pour l'accompagnement sur place, je peux prêter mon outillage.",
			},
			{
				id: "pratique-2",
				question: "Êtes-vous disponible le week-end ?",
				answer: "Oui, je suis disponible du lundi au samedi. Pour les urgences, contactez-moi via WhatsApp même le dimanche - je fais mon possible pour vous répondre rapidement ou vous guider vers une solution temporaire en attendant.",
			},
			{
				id: "pratique-3",
				question: "Comment prendre rendez-vous ?",
				answer: "Le plus simple est de me contacter via WhatsApp (bouton en bas de page sur mobile ou dans le menu). Décrivez-moi votre problème avec une photo si possible, et on convient ensemble d'un créneau. Je réponds généralement dans l'heure.",
			},
		],
	},
];
