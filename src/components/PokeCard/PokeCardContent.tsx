import { IPokemon } from '@/interfaces/pokemon.interface';
import { CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function PokeCardContent({ data }: { data: IPokemon }) {
    return (
        <CardContent
            className={cn('w-full flex items-center justify-center h-full')}
        >
            <Avatar className={cn('w-48 h-48')}>
                <AvatarImage src={data.sprites.front_default} />
                <AvatarFallback>{data.name}</AvatarFallback>
            </Avatar>
        </CardContent>
    );
}
