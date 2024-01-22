import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
export default function PokeCardFooter({
    incrementId,
    decrementId
}: {
    incrementId: () => void;
    decrementId: () => void;
}) {
    return (
        <CardFooter className={cn('gap-2')}>
            <Button onClick={() => decrementId()}>Prev</Button>
            <Button onClick={() => incrementId()}>Next</Button>
        </CardFooter>
    );
}
