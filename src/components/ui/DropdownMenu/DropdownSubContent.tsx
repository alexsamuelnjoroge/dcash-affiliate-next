'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.SubContent> & {
  children?: ReactNode;
};

export default function DropdownSubContent({
  className,
  sideOffset = 8,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.SubContent
      sideOffset={sideOffset}
      className={cn(
        'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-lg focus:outline-none',
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenu.SubContent>
  );
}
