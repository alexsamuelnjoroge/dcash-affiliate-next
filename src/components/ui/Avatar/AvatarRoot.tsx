'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof Avatar.Root> & {
  delayMs?: number;
  children?: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function AvatarRoot({ className, children, delayMs, ...props }: Props) {
  return (
    <Avatar.Root
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    >
      {children}
    </Avatar.Root>
  );
}
