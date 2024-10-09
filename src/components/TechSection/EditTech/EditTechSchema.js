import { z } from 'zod';
export const EditTechSchema = z.object({
      status: z.string().min(1, 'Selecione o Status para alterar'),
});
