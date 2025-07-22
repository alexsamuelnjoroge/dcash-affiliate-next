'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.CheckboxItem> & {
  children?: ReactNode;
};

export default function DropdownCheckboxItem({
  className,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.CheckboxItem
      className={cn(
        'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.CheckboxItem>
  );
}
