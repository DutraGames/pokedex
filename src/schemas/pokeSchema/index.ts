import { z } from 'zod';

export const pokemonSchema = z.object({
    name: z.string(),
    types: z.array(z.object({ type: z.object({ name: z.string() }) })),
    sprites: z.object({ front_default: z.string().url() })
});
