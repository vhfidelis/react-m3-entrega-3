import { z } from 'zod';
export const CreateTechSchema = z.object({
      title: z
            .string()
            .min(1, 'Nome é obrigatório!'),
      status: z.string().min(1, 'Selecione o Status'),
});
