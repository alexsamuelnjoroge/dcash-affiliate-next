'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof Avatar.Image>;

export default function AvatarImage({ className, ...props }: Props) {
  return (
    <Avatar.Image
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  );
}
