'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

type Props = React.ComponentProps<typeof DropdownMenu.RadioGroup> & {
  value?: string;
  children?: ReactNode;
};

export default function DropdownRadioGroup({
  value,
  children,
  ...props
}: Props) {
  return (
    <DropdownMenu.RadioGroup value={value} {...props}>
      {children}
    </DropdownMenu.RadioGroup>
  );
}
