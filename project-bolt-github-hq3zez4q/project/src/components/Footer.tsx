import React, { useState } from 'react';
import { Coffee, Coins, Check, Heart, Copy } from 'lucide-react';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const solanaAddress = 'BfF5cipu6QtKtabCGMfJRyq6r3tpy1zRHKhfTHJ6ovPv';

  const handleCopyAddress = async () => {
    await navigator.clipboard.writeText(solanaAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-auto py-6 px-4 border-t border-galaxy-700/50 bg-galaxy-950/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-galaxy-100 text-sm font-medium">
            Enjoying Gotchi Stats? Consider supporting the project
          </p>
          
          <div className="flex items-center gap-3">
            <a
              href="https://buymeacoffee.com/flowz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FFDD00] text-[#000000] rounded-lg hover:bg-[#FFDD00]/90 transition-all shadow-neon"
            >
              <Coffee className="w-4 h-4" />
              <span className="text-sm font-medium">Buy me a coffee</span>
              <Heart className="w-3 h-3 text-pink-500" />
            </a>
            
            <button
              onClick={handleCopyAddress}
              className="flex items-center gap-2 px-4 py-2 bg-galaxy-800 hover:bg-galaxy-700 text-galaxy-100 rounded-lg transition-all shadow-neon group relative"
              title="Click to copy Solana address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Coins className="w-4 h-4" />
                  <span className="text-sm font-medium">Solana Tip</span>
                  <Copy className="w-3 h-3 ml-1 opacity-75" />
                </>
              )}
              
              <div className="absolute bottom-full right-0 mb-2 w-64 p-2 bg-galaxy-800 text-galaxy-100 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-neon border border-galaxy-600">
                Click to copy: {solanaAddress}
              </div>
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-galaxy-300">
          Brought to you with <span className="text-purple-400">💜</span> by{' '}
          <span className="text-galaxy-100">Flowz</span> and the kind support of{' '}
          <span className="text-galaxy-100">Vamonospest</span>
        </div>
      </div>
    </footer>
  );
}