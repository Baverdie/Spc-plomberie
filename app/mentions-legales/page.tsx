import { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
	title: "Mentions Légales | SPC Plomberie",
	description: "Mentions légales du site SPC Plomberie Chauffage - Johann Quilan, plombier en Gironde.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function MentionsLegalesPage() {
	return (
		<main className="pt-24 md:pt-28">
			<Section id="mentions-legales" background="white">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold text-spc-navy mb-8">
						Mentions Légales
					</h1>

					<div className="prose prose-lg max-w-none text-spc-gray-700">
						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							1. Éditeur du site
						</h2>
						<p className="mb-4">
							Le site <strong>spcplomberie33.fr</strong> est édité par :
						</p>
						<ul className="list-none space-y-2 mb-6">
							<li><strong>Nom :</strong> Johann Quilan</li>
							<li><strong>Activité :</strong> SPC Plomberie Chauffage</li>
							<li><strong>Adresse :</strong> Gironde (33), France</li>
							<li><strong>Téléphone :</strong> 07 59 70 57 16</li>
							<li><strong>Email :</strong> contact@spcplomberie33.fr</li>
						</ul>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							2. Hébergement
						</h2>
						<p className="mb-4">
							Le site est hébergé par :
						</p>
						<ul className="list-none space-y-2 mb-6">
							<li><strong>Hébergeur :</strong> Vercel Inc.</li>
							<li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
							<li><strong>Site web :</strong> vercel.com</li>
						</ul>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							3. Propriété intellectuelle
						</h2>
						<p className="mb-4">
							L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
							est la propriété exclusive de SPC Plomberie Chauffage, à l'exception des marques,
							logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
						</p>
						<p className="mb-4">
							Toute reproduction, distribution, modification, adaptation, retransmission ou
							publication, même partielle, de ces différents éléments est strictement interdite
							sans l'accord exprès par écrit de SPC Plomberie Chauffage.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							4. Limitation de responsabilité
						</h2>
						<p className="mb-4">
							SPC Plomberie Chauffage ne pourra être tenu responsable des dommages directs et
							indirects causés au matériel de l'utilisateur lors de l'accès au site.
						</p>
						<p className="mb-4">
							SPC Plomberie Chauffage décline toute responsabilité quant à l'utilisation qui
							pourrait être faite des informations et contenus présents sur le site.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							5. Données personnelles
						</h2>
						<p className="mb-4">
							Conformément au Règlement Général sur la Protection des Données (RGPD), vous
							disposez d'un droit d'accès, de rectification et de suppression des données
							vous concernant. Pour exercer ce droit, vous pouvez nous contacter à l'adresse
							email indiquée ci-dessus.
						</p>
						<p className="mb-4">
							Pour plus d'informations sur la gestion de vos données personnelles, veuillez
							consulter notre <a href="/politique-cookies" className="text-spc-red hover:underline">Politique de cookies</a>.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							6. Liens hypertextes
						</h2>
						<p className="mb-4">
							Le site peut contenir des liens hypertextes vers d'autres sites. SPC Plomberie
							Chauffage n'exerce aucun contrôle sur ces sites et décline toute responsabilité
							quant à leur contenu.
						</p>

						<h2 className="text-xl font-semibold text-spc-navy mt-8 mb-4">
							7. Droit applicable
						</h2>
						<p className="mb-4">
							Les présentes mentions légales sont régies par le droit français. En cas de
							litige, les tribunaux français seront seuls compétents.
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
