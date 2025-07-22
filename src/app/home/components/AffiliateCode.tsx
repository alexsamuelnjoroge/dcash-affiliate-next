'use client';

import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

type Props = {
  code: string;
};

export default function AffiliateCode({ code }: Props) {
  const [copied, setCopied] = useState(false);
  const [scale, setScale] = useState(1);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setScale(1.2);
      toast.success('Affiliate code copied to clipboard!');

      setTimeout(() => setScale(1), 200);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy affiliate code');
      console.error('Failed to copy!', err);
    }
  };

  return (
    <>
      {/* Mobile Version */}
      <div className="flex lg:hidden">
        <Button
          onClick={copyToClipboard}
          variant="secondary"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 transition-all duration-200 hover:bg-gray-100 ${
            copied ? 'bg-green-50 text-green-600' : ''
          }`}
        >
          <motion.div
            className="flex items-center gap-2"
            animate={{ scale }}
            transition={{ duration: 0.2 }}
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-600" />
                <span className="font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Clipboard size={16} />
                <span className="font-medium">Copy Affiliate Code</span>
              </>
            )}
          </motion.div>
        </Button>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex">
        <div className="relative flex w-full max-w-md items-center">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">Code:</span>
            </div>
            <input
              type="text"
              value={code}
              readOnly
              className="block w-full rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 py-2.5 pl-14 pr-3 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <Button
            onClick={copyToClipboard}
            className={`flex items-center gap-2 rounded-l-none rounded-r-lg border border-l-0 border-indigo-600 bg-indigo-600 px-4 py-2.5 text-white transition-all duration-200 hover:bg-indigo-700 ${
              copied ? 'border-green-600 bg-green-600 hover:bg-green-700' : ''
            }`}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale }}
              transition={{ duration: 0.2 }}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Clipboard size={16} />
                  <span>Copy</span>
                </>
              )}
            </motion.div>
          </Button>
        </div>
      </div>
    </>
  );
}
