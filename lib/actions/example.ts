'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';

const createUserSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
});

export async function createUser(formData: FormData) {
	const parsed = createUserSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
	});

	if (!parsed.success) {
		return { error: parsed.error.flatten().fieldErrors };
	}

	await db.insert(users).values(parsed.data);
	revalidatePath('/');
}
