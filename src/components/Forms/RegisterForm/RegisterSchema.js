import { z } from 'zod';
export const RegisterSchema = z
	.object({
		name: z.string().min(1, 'Nome é obrigatório!'),
		email: z
			.string()
			.min(1, 'Email é obrigatório!')
			.email('Forneça um email válido'),
		bio: z.string().min(1, 'Bio é obrigatório!'),
		contact: z.string().min(1, 'Contato é obrigatório!'),
		course_module: z.string().min(1, 'É necessario escolher um módulo'),
		password: z
			.string()
			.min(8, 'É necessário pelo menos oito caracteres.')
			.regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
			.regex(/(?=.*?[a-z])/, 'É necessário pelo menos uma letra minúscula')
			.regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número.'),
		confirmPassword: z.string().min(8, 'É necessário confirmar sua senha'),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'As senhas não correspodem.',
		path: ['confirmPassword'],
	});
