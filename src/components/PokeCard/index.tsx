'use client';
import React, { useState, useEffect } from 'react';
import { pokemonSchema } from '@/schemas/pokeSchema';
import { api } from '@/utils/api';
import { IPokemon } from '@/@types/pokemon';
export default function PokeCard() {
    const [data, setData] = useState<IPokemon | null>(null);
    const [id, setId] = useState<number>(25);

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
        <div>
            {data && (
                <div>
                    <h1>{data.name}</h1>
                    <p>
                        Types:{' '}
                        {data.types.map((type) => type.type.name).join(', ')}
                    </p>
                    <img
                        src={data.sprites.front_default}
                        alt={`${data.name} sprite`}
                    />
                </div>
            )}
        </div>
    );
}
