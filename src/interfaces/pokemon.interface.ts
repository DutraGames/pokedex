import { z } from 'zod';
import { pokemonSchema } from '@/schemas/pokeSchema';

export interface IPokemon extends z.infer<typeof pokemonSchema> {}
