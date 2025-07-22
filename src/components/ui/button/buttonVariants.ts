import { cn } from '@/lib/utils';

export type Variant = 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'; // Add more variants as needed
export type Size = 'default' | 'sm' | 'lg' | 'icon';

type VariantOptions = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function buttonVariants({ variant, size, className }: VariantOptions) {
  // Simple example logic — replace with your actual variant logic
  const base = 'px-4 py-2 rounded';
  const variants = {
    default: 'bg-indigo-600 text-white hover:bg-indigo-500',
    secondary: 'bg-gray-200 text-black',
    outline: 'border border-gray-300 text-black bg-white hover:bg-gray-50', // Example style
    ghost: 'bg-transparent text-black hover:bg-gray-100', // Example style
    destructive: 'bg-red-600 text-white hover:bg-red-500', // Example style
  };

  const sizes = {
    default: 'text-base',
    sm: 'text-sm',
    lg: 'text-lg',
    icon: 'w-8 h-8 p-0', // Example icon size, adjust as needed
  };

  return cn(base, variants[variant || 'default'], sizes[size || 'default'], className);
}
