
import React from 'react';

interface HeaderProps {
  step: 'welcome' | 'register' | 'questions' | 'result';
}

const Header = ({ step }: HeaderProps) => {
  return (
    <header className="py-6 px-4 w-full">
      <div className="container mx-auto flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            🧭 Diagnóstico Espiritual IDC
          </h1>
          {step !== 'welcome' && (
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Descubra qual dos <span className="font-semibold">33 perfis</span> está dominando sua caminhada espiritual e como se libertar dele.
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
