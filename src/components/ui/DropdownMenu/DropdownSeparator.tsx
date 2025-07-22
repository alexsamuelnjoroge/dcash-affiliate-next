'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof DropdownMenu.Separator>;

export default function DropdownSeparator({ className, ...props }: Props) {
  return (
    <DropdownMenu.Separator
      className={cn('bg-muted -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}
