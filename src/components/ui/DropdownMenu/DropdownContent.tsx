'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.Content> & {
  children?: ReactNode;
};

export default function DropdownContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.Content
      sideOffset={sideOffset}
      className={cn(
        'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none',
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Content>
  );
}
