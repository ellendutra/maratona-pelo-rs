import Image from 'next/image';

export function About(){
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-4 py-8">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
        <p className="text-lg md:text-xl text-gray-800 p-4 md:mb-0 md:mr-4">Somos uma plataforma que oferece facilidade para que você possa se conectar com profissionais que estão dispostos a acolhê-la e orientá-la de forma gratuita. Através do agendamento de videochamadas, você poderá ter acesso a consultas com advogadas e psicólogas voluntárias de todo o país. Uma rede de acolhimento para pessoas gestantes, puérperas e mães solo que estão em situação de vulnerabilidade nos abrigos do RS, precisando urgentemente de suporte emocional e orientação jurídica.</p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image alt="Logo da Amiga do RS" className="mx-auto" src="/images/logo.svg" width="170" height="300" />
      </div>
    </div>
  )
}

