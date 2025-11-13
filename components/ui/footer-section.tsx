'use client';

import { useState, useEffect } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';

export function Footer(): React.JSX.Element {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-8 md:py-10">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
			<div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
			{/* Left side - Logo and Copyright */}
			<AnimatedContainer delay={0} className="flex flex-col items-start gap-3">
				<Image 
					src="/icon-transparent.png" 
					alt="Lumina Trading Logo" 
					width={68} 
					height={68}
					className="size-12"
				/>
				<p className="text-muted-foreground text-xs md:text-sm">
					© {new Date().getFullYear()} Lumina Trading LLC.<br className="md:hidden" /> All rights reserved.
				</p>
			</AnimatedContainer>

				{/* Right side - Contact Information */}
				<AnimatedContainer delay={0.1} className="flex flex-col gap-3 text-sm md:text-right">
					<div className="flex items-start gap-2 md:justify-end">
						<MapPinIcon className="size-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
						<div className="text-muted-foreground">
							<p>1308 E Colorado Blvd #2244</p>
							<p>Pasadena, CA 91106</p>
						</div>
					</div>
					<a 
						href="tel:+13232864541" 
						className="flex items-center gap-2 md:justify-end text-muted-foreground hover:text-foreground transition-colors"
					>
						<PhoneIcon className="size-4 flex-shrink-0" />
						<span>+1 323 286 4541</span>
					</a>
					<a 
						href="mailto:csuite@luminatradingllc.com" 
						className="flex items-center gap-2 md:justify-end text-muted-foreground hover:text-foreground transition-colors"
					>
						<MailIcon className="size-4 flex-shrink-0" />
						<span>csuite@luminatradingllc.com</span>
					</a>
				</AnimatedContainer>
			</div>
		</footer>
	);
};

interface ViewAnimationProps {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps): ReactNode {
	const shouldReduceMotion = useReducedMotion();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Check if device is mobile (width < 768px)
		const checkMobile = (): void => {
			setIsMobile(window.innerWidth < 768);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => { window.removeEventListener('resize', checkMobile); };
	}, []);

	// No animation on mobile or if reduced motion is preferred
	if (shouldReduceMotion || isMobile) {
		return <div className={className}>{children}</div>;
	}

	// Full animation on desktop/laptop
	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
			transition={{ delay, duration: 0.5, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
};

