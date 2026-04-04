import { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
	title: "Politique de Cookies | SPC Plomberie",
	description: "Politique de cookies et gestion des données personnelles sur le site SPC Plomberie Chauffage.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function PolitiqueCookiesPage() {
	return (
		<main className="pt-24 md:pt-28">
			<Section id="politique-cookies" background="white">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold text-spc-navy mb-8">
						Politique de Cookies
					</h1>

					<div className="prose prose-lg max-w-none text-spc-gray-700">
						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							1. Qu'est-ce qu'un cookie ?
						</h2>
						<p className="mb-4">
							Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
							tablette, smartphone) lors de votre visite sur un site web. Il permet au site
							de mémoriser des informations sur votre visite, comme votre langue préférée
							et d'autres paramètres.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							2. Cookies utilisés sur ce site
						</h2>
						<p className="mb-4">
							Le site SPC Plomberie utilise uniquement les cookies suivants :
						</p>

						<h3 className="text-lg font-medium text-spc-navy mt-6 mb-3">
							Cookies strictement nécessaires
						</h3>
						<ul className="list-disc pl-6 mb-4 space-y-2">
							<li>
								<strong>cookie-consent</strong> : Mémorise votre choix concernant
								l'acceptation ou le refus des cookies. Ce cookie est stocké dans le
								localStorage de votre navigateur et n'est pas transmis à des tiers.
							</li>
						</ul>

						<h3 className="text-lg font-medium text-spc-navy mt-6 mb-3">
							Cookies analytiques (optionnels)
						</h3>
						<p className="mb-4">
							Si vous acceptez les cookies, nous pouvons utiliser des outils d'analyse
							pour mieux comprendre comment les visiteurs utilisent notre site. Ces données
							sont anonymisées et servent uniquement à améliorer votre expérience.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							3. Gestion de vos préférences
						</h2>
						<p className="mb-4">
							Lors de votre première visite, une bannière vous permet d'accepter ou de
							refuser les cookies. Votre choix est mémorisé pour vos prochaines visites.
						</p>
						<p className="mb-4">
							Vous pouvez à tout moment modifier vos préférences en supprimant les données
							de navigation de votre navigateur (historique, cookies, localStorage).
						</p>

						<h3 className="text-lg font-medium text-spc-navy mt-6 mb-3">
							Comment supprimer les cookies ?
						</h3>
						<ul className="list-disc pl-6 mb-4 space-y-2">
							<li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Effacer les données de navigation</li>
							<li><strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies et données de sites → Effacer les données</li>
							<li><strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de sites web</li>
							<li><strong>Edge :</strong> Paramètres → Confidentialité → Effacer les données de navigation</li>
						</ul>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							4. Données collectées
						</h2>
						<p className="mb-4">
							Ce site ne collecte aucune donnée personnelle sans votre consentement explicite.
							Lorsque vous nous contactez via WhatsApp ou par téléphone, les informations que
							vous partagez sont utilisées uniquement pour répondre à votre demande.
						</p>
						<p className="mb-4">
							Nous ne vendons ni ne partageons vos données personnelles avec des tiers à des
							fins commerciales.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							5. Vos droits
						</h2>
						<p className="mb-4">
							Conformément au RGPD, vous disposez des droits suivants :
						</p>
						<ul className="list-disc pl-6 mb-4 space-y-2">
							<li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées</li>
							<li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
							<li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
							<li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
							<li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
						</ul>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							6. Contact
						</h2>
						<p className="mb-4">
							Pour toute question concernant cette politique ou pour exercer vos droits,
							vous pouvez nous contacter :
						</p>
						<ul className="list-none space-y-2 mb-6">
							<li><strong>Email :</strong> contact@spcplomberie33.fr</li>
							<li><strong>Téléphone :</strong> 07 59 70 57 16</li>
						</ul>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							7. Modifications
						</h2>
						<p className="mb-4">
							Nous nous réservons le droit de modifier cette politique de cookies à tout
							moment. Les modifications entrent en vigueur dès leur publication sur le site.
						</p>

						<p className="text-sm text-spc-gray-500 mt-12">
							Dernière mise à jour : Janvier 2026
						</p>
					</div>
				</div>
			</Section>
		</main>
	);
}
