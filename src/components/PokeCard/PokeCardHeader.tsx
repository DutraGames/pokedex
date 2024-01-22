import { cn } from '@/lib/utils';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IPokemon } from '@/interfaces/pokemon.interface';

export function PokeCardHeader({ data, id }: { data: IPokemon; id: number }) {
    return (
        <CardHeader className={cn('w-full flex flex-col gap-1')}>
            <CardTitle className={cn('text-primary text-center')}>
                {id} - {data.name}
            </CardTitle>
            <CardDescription className={cn('gap-4 flex justify-center')}>
                {data.types.map((type) => (
                    <Badge variant="default" key={type.type.name}>
                        {type.type.name}{' '}
                    </Badge>
                ))}
            </CardDescription>
        </CardHeader>
    );
}
