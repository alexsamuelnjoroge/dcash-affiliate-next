'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof Avatar.Fallback> & {
  children?: ReactNode;
};

export default function AvatarFallback({ className, children, ...props }: Props) {
  return (
    <Avatar.Fallback
      className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
      {...props}
    >
      {children}
    </Avatar.Fallback>
  );
}

