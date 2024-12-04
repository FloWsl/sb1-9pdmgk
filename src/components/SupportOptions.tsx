import React, { useState } from 'react';
import { Coffee, Coins, Copy, Check } from 'lucide-react';

export function SupportOptions() {
  const [copied, setCopied] = useState(false);
  const solanaAddress = 'BfF5cipu6QtKtabCGMfJRyq6r3tpy1zRHKhfTHJ6ovPv';

  const handleCopyAddress = async () => {
    await navigator.clipboard.writeText(solanaAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-2">
        <a
          href="https://buymeacoffee.com/flowz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-[#000000] rounded-lg hover:bg-[#FFDD00]/90 transition-all shadow-lg"
        >
          <Coffee className="w-5 h-5" />
          <span className="font-medium">Buy me a coffee</span>
        </a>
        
        <button
          onClick={handleCopyAddress}
          className="flex items-center gap-2 px-4 py-2 bg-[#9945FF] text-white rounded-lg hover:bg-[#9945FF]/90 transition-all shadow-lg group relative"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              <span className="font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Coins className="w-5 h-5" />
              <span className="font-medium">Copy Solana Address</span>
            </>
          )}
          
          <div className="absolute bottom-full right-0 mb-2 w-64 p-2 bg-galaxy-900 text-xs text-galaxy-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {solanaAddress}
          </div>
        </button>
      </div>
    </div>
  );
}