'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className?: string;
	staggerDelay?: number;
};

export function AnimatedGroup({ children, className, staggerDelay = 0.08 }: Props) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: staggerDelay } },
			}}
		>
			{children}
		</motion.div>
	);
}
