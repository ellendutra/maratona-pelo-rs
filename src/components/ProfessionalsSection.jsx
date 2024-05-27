'use client'

import { ProfessionalCard } from '@/components/ProfessionalCard'
import { professionals } from '../mocks/professionalsData'; 
import { useState } from 'react';

export function ProfessionalsSection() {
  const [filter, setFilter] = useState(null);
  const filteredProfessionals = filter ? professionals.filter(professional => professional.profession === filter) : professionals;

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Profissionais Disponíveis</h2>
        <p className="text-lg text-gray-700 mb-8">Conheça os profissionais disponíveis para ajudá-la</p>
        <div className="mb-6">
          <button className={`mr-4 px-4 py-2 rounded-lg ${filter === 'Psicóloga' ? 'bg-red-400 text-white' : 'bg-gray-300 text-gray-700'}`} onClick={() => setFilter('Psicóloga')}>Psicólogas</button>
          <button className={`px-4 py-2 rounded-lg ${filter === 'Advogada' ? 'bg-red-400 text-white' : 'bg-gray-300 text-gray-700'}`} onClick={() => setFilter('Advogada')}>Advogadas</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProfessionals.map((professional, index) => (
            <ProfessionalCard key={index} {...professional} />
          ))}
        </div>
      </div>
    </section>
  );
}
