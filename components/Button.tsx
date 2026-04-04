import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary' | 'outline' | 'outline-red' | 'outline-white';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	icon?: ReactNode;
}

export default function Button({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	icon,
	className = '',
	...props
}: ButtonProps) {
	const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed';

	const variants = {
		primary: 'bg-spc-red border-2 border-spc-red text-white shadow-premium hover:shadow-premium-lg hover:bg-red-700 hover:border-red-700',
		secondary: 'bg-spc-blue border-2 border-spc-blue text-white shadow-premium hover:shadow-premium-lg hover:bg-blue-600 hover:border-blue-600',
		outline: 'border-2 border-spc-blue text-spc-blue hover:bg-spc-blue hover:text-white',
		'outline-red': 'border-2 border-spc-red text-spc-red hover:bg-spc-red hover:text-white',
		'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-spc-navy',
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	};

	const widthClass = fullWidth ? 'w-full' : '';

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
			{...props}
		>
			{icon && <span className="mr-2">{icon}</span>}
			{children}
		</button>
	);
}