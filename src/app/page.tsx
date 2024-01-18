import PokeCard from '@/components/PokeCard';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24 w-screen">
            <h1 className="text-5xl font-bold text-primary">Pokedex</h1>
            <PokeCard />
        </main>
    );
}
