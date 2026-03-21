'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className?: string;
};

export function AnimatedItem({ children, className }: Props) {
	return (
		<motion.div
			className={className}
			variants={{
				hidden: { opacity: 0, y: 12 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { type: 'spring', damping: 25, stiffness: 200 },
				},
			}}
		>
			{children}
		</motion.div>
	);
}
