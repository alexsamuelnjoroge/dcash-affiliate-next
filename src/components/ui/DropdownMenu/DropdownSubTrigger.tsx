'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.SubTrigger> & {
  inset?: boolean;
  children?: ReactNode;
};

export default function DropdownSubTrigger({
  className,
  inset,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.SubTrigger
      className={cn(
        'data-[highlighted]:bg-accent data-[state=open]:bg-accent data-[highlighted]:text-accent-foreground data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenu.SubTrigger>
  );
}
