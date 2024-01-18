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

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-4 p-24 w-screen">
            <h1 className="text-5xl font-bold text-primary">Pokedex</h1>

            <Card
                className={cn(
                    'w-96 h-96 flex items-center flex-col justify-center'
                )}
            >
                <CardHeader className={cn('w-full flex flex-col gap-1')}>
                    <CardTitle className={cn('text-primary text-center')}>
                        25 - Pikachu
                    </CardTitle>
                    <CardDescription
                        className={cn('gap-4 flex justify-center')}
                    >
                        <Badge variant="outline">eletric</Badge>
                        <Badge variant="outline">poison</Badge>
                    </CardDescription>
                </CardHeader>
                <CardContent
                    className={cn(
                        'w-full flex items-center justify-center h-full'
                    )}
                >
                    <Avatar className={cn('w-48 h-48')}>
                        <AvatarImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
                        <AvatarFallback>Picachu</AvatarFallback>
                    </Avatar>
                </CardContent>
                <CardFooter className={cn('gap-2')}>
                    <Button>Prev</Button>
                    <Button>Next</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
