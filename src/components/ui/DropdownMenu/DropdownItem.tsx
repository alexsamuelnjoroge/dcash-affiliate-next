'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.Item> & {
  inset?: boolean;
  children?: ReactNode;
};

export default function DropdownItem({
  className,
  inset,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.Item
      className={cn(
        'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Item>
  );
}
