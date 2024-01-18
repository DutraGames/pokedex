'use client';
import React, { useState, useEffect } from 'react';
import { pokemonSchema } from '@/schemas/pokeSchema';
import { api } from '@/utils/api';
import { IPokemon } from '@/@types/pokemon';
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

export default function PokeCard() {
    const [data, setData] = useState<IPokemon | null>(null);
    const [id, setId] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/${id}`);
                const parsedData = pokemonSchema.parse(response.data);
                setData(parsedData);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <Card
            className={cn(
                'w-96 h-96 flex items-center flex-col justify-center'
            )}
        >
            {data && (
                <>
                    <CardHeader className={cn('w-full flex flex-col gap-1')}>
                        <CardTitle className={cn('text-primary text-center')}>
                            {id} - {data.name}
                        </CardTitle>
                        <CardDescription
                            className={cn('gap-4 flex justify-center')}
                        >
                            {data.types.map((type) => (
                                <Badge variant="outline" key={type.type.name}>
                                    {type.type.name}{' '}
                                </Badge>
                            ))}
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        className={cn(
                            'w-full flex items-center justify-center h-full'
                        )}
                    >
                        <Avatar className={cn('w-48 h-48')}>
                            <AvatarImage src={data.sprites.front_default} />
                            <AvatarFallback>Picachu</AvatarFallback>
                        </Avatar>
                    </CardContent>
                    <CardFooter className={cn('gap-2')}>
                        <Button onClick={() => setId(id - 1)}>Prev</Button>
                        <Button onClick={() => setId(id + 1)}>Next</Button>
                    </CardFooter>
                </>
            )}
        </Card>
    );
}
