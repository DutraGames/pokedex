export interface IPokemon {
    name: string;
    types: { type: { name: string } }[];
    sprites: { front_default: string };
}
