'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.Label> & {
  inset?: boolean;
  children?: ReactNode;
};

export default function DropdownLabel({
  className,
  inset,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.Label
      className={cn(
        'px-2 py-1.5 text-sm font-semibold',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Label>
  );
}
