'use client';
import React, { useState, useEffect } from 'react';
import { pokemonSchema } from '@/schemas/pokeSchema';
import { api } from '@/services/api';
import { IPokemon } from '@/interfaces/pokemon.interface';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PokeCardHeader } from './PokeCardHeader';
import { PokeCardContent } from './PokeCardContent';
import PokeCardFooter from './PokeCardFooter';
export default function PokeCard() {
    const [data, setData] = useState<IPokemon | null>(null);
    const [id, setId] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/${id}`);
                const parsedData = pokemonSchema.parse(response.data);
                setData(parsedData);
                console.log(parsedData);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, [id]);

    const incrementId = () => {
        if (id < 1023) {
            setId(id + 1);
        }
    };

    const decrementId = () => {
        if (id > 1 && id) {
            setId(id - 1);
        }
    };

    return (
        <Card
            className={cn(
                'w-96 h-96 flex items-center flex-col justify-center  bg-primary-foreground dark:bg-foreground'
            )}
        >
            {data && (
                <>
                    <PokeCardHeader data={data} id={id} />
                    <PokeCardContent data={data} />
                    <PokeCardFooter
                        incrementId={incrementId}
                        decrementId={decrementId}
                    />
                </>
            )}
        </Card>
    );
}
