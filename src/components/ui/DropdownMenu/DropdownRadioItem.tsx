'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { Circle } from 'lucide-react';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.RadioItem> & {
  value: string;
  children?: ReactNode;
};

export default function DropdownRadioItem({
  value,
  className,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.RadioItem
      value={value}
      className={cn(
        'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.RadioItem>
  );
}
