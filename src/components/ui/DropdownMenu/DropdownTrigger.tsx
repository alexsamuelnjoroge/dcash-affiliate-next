'use client';

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof RadixDropdownMenu.Trigger>;

export default function DropdownTrigger({ className, ...props }: Props) {
  return (
    <RadixDropdownMenu.Trigger className={cn('px-3 py-2 rounded border', className)} {...props} />
  );
}

