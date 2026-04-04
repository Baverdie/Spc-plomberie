import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'SPC Plomberie Chauffage - Apprenez la plomberie',
		short_name: 'SPC Plomberie',
		description: 'Apprenez à faire votre plomberie vous-même avec un professionnel. Aide en visio 17€/h ou sur place en Gironde.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0F172A',
		theme_color: '#E30613',
		orientation: 'portrait-primary',
		categories: ['business', 'education', 'utilities'],
		lang: 'fr-FR',
		dir: 'ltr',
		scope: '/',
		icons: [
			{
				src: '/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any'
			},
			{
				src: '/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any'
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
				purpose: 'any'
			}
		],
		shortcuts: [
			{
				name: 'Services',
				short_name: 'Services',
				description: 'Voir nos formules d\'accompagnement',
				url: '/services',
				icons: [{ src: '/icon-192x192.png', sizes: '192x192' }]
			},
			{
				name: 'Contact',
				short_name: 'Contact',
				description: 'Nous contacter',
				url: '/contact',
				icons: [{ src: '/icon-192x192.png', sizes: '192x192' }]
			},
			{
				name: 'Appeler',
				short_name: 'Appeler',
				description: 'Appeler directement',
				url: 'tel:0759705716',
				icons: [{ src: '/icon-192x192.png', sizes: '192x192' }]
			}
		]
	}
}
