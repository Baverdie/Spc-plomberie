import { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
	noPadding?: boolean;
	background?: 'white' | 'gray' | 'navy';
	id?: string;
}

export default function Section({
	children,
	className = '',
	fullWidth = false,
	noPadding = false,
	background = 'white',
	id,
	...rest
}: SectionProps) {
	const backgrounds = {
		white: 'bg-white',
		gray: 'bg-spc-gray-50',
		navy: 'bg-spc-navy',
	};

	const padding = noPadding ? '' : 'py-20 md:py-32';
	const container = fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6 lg:px-8';

	return (
		<section id={id} className={`${backgrounds[background]} ${padding} ${className}`} {...rest}>
			<div className={container}>
				{children}
			</div>
		</section>
	);
}