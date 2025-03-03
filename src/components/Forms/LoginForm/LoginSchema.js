import { z } from 'zod';
export const LoginSchema = z.object({
	email: z
		.string()
		.min(1, 'Email é obrigatório!')
		.email('Forneça um email válido'),
	password: z.string().min(1, 'Senha é obrigatório!'),
});
