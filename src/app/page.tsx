import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import PokeCard from '@/components/PokeCard';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24 w-screen">
            <h1 className="text-5xl font-bold text-primary">Pokedex</h1>
            <PokeCard />
        </main>
    );
}
