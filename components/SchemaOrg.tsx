export default function SchemaOrg() {
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://spcplomberie33.fr/#localbusiness",
		"name": "SPC Plomberie Chauffage",
		"image": "https://spcplomberie33.fr/logo-spc.png",
		"description": "Apprenez a faire votre plomberie vous-meme avec l'aide d'un professionnel. Aide en visio 17 euros/h ou accompagnement sur place en Gironde. 25 ans d'experience.",
		"telephone": "+33759705716",
		"email": "spcplomberiechauffage33@gmail.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Villenave-d'Ornon",
			"addressRegion": "Nouvelle-Aquitaine",
			"postalCode": "33140",
			"addressCountry": "FR"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 44.7833,
			"longitude": -0.5667
		},
		"url": "https://spcplomberie33.fr",
		"priceRange": "17-27 euros/h",
		"currenciesAccepted": "EUR",
		"paymentAccepted": "Cash, Credit Card, Bank Transfer",
		"openingHoursSpecification": [
			{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				"opens": "08:00",
				"closes": "20:00"
			}
		],
		"areaServed": [
			{ "@type": "City", "name": "Bordeaux" },
			{ "@type": "City", "name": "Villenave-d'Ornon" },
			{ "@type": "City", "name": "Talence" },
			{ "@type": "City", "name": "Pessac" },
			{ "@type": "City", "name": "Merignac" },
			{ "@type": "City", "name": "Begles" },
			{ "@type": "City", "name": "Gradignan" },
			{ "@type": "City", "name": "Cenon" },
			{ "@type": "City", "name": "Lormont" },
			{ "@type": "AdministrativeArea", "name": "Gironde" },
			{ "@type": "Country", "name": "France", "description": "Pour les services en visioconference" }
		],
		"knowsAbout": [
			"Plomberie",
			"Chauffage",
			"Formation plomberie",
			"Accompagnement travaux",
			"Depannage",
			"Installation chaudiere",
			"Salle de bain PMR",
			"Chauffe-eau"
		],
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "5",
			"reviewCount": "12"
		},
		"sameAs": []
	};

	const servicesSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"name": "Services SPC Plomberie Chauffage",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"item": {
					"@type": "Service",
					"@id": "https://spcplomberie33.fr/services#visio",
					"name": "Aide en Visioconference",
					"description": "Accompagnement a distance par appel video pour vous guider dans vos reparations de plomberie. Disponible partout en France.",
					"provider": { "@id": "https://spcplomberie33.fr/#localbusiness" },
					"areaServed": { "@type": "Country", "name": "France" },
					"offers": {
						"@type": "Offer",
						"price": "17",
						"priceCurrency": "EUR",
						"priceSpecification": {
							"@type": "UnitPriceSpecification",
							"price": "17",
							"priceCurrency": "EUR",
							"unitText": "heure"
						}
					}
				}
			},
			{
				"@type": "ListItem",
				"position": 2,
				"item": {
					"@type": "Service",
					"@id": "https://spcplomberie33.fr/services#presentiel",
					"name": "Accompagnement sur Place",
					"description": "Je viens chez vous en Gironde et vous accompagne pour realiser vos travaux de plomberie vous-meme. Vous faites, j'explique et je supervise.",
					"provider": { "@id": "https://spcplomberie33.fr/#localbusiness" },
					"areaServed": { "@type": "AdministrativeArea", "name": "Gironde" },
					"offers": {
						"@type": "Offer",
						"price": "27",
						"priceCurrency": "EUR",
						"priceSpecification": {
							"@type": "UnitPriceSpecification",
							"price": "27",
							"priceCurrency": "EUR",
							"unitText": "heure"
						}
					}
				}
			},
			{
				"@type": "ListItem",
				"position": 3,
				"item": {
					"@type": "Service",
					"@id": "https://spcplomberie33.fr/services#intervention",
					"name": "Intervention Complete",
					"description": "Pour les travaux complexes ou si vous preferez ne pas mettre la main a la pate, intervention complete par un professionnel avec 25 ans d'experience.",
					"provider": { "@id": "https://spcplomberie33.fr/#localbusiness" },
					"areaServed": { "@type": "AdministrativeArea", "name": "Gironde" },
					"offers": {
						"@type": "Offer",
						"priceSpecification": {
							"@type": "PriceSpecification",
							"priceCurrency": "EUR",
							"description": "Sur devis"
						}
					}
				}
			}
		]
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": "https://spcplomberie33.fr/#website",
		"url": "https://spcplomberie33.fr",
		"name": "SPC Plomberie Chauffage",
		"description": "Plombier en Gironde - Apprenez a faire vous-meme avec un professionnel",
		"publisher": { "@id": "https://spcplomberie33.fr/#localbusiness" },
		"inLanguage": "fr-FR"
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Accueil",
				"item": "https://spcplomberie33.fr"
			}
		]
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	);
}