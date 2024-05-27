export function ProfessionalCard({ name, profession, license, description, organization }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6 md:mb-0 md:px-3">
      <div className="px-6 py-4">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-lg text-gray-700 mb-2">{profession}</p>
        <p className="text-gray-500 mb-2">Licença: {license}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600">ONG ou Abrigo: <span className="font-semibold">{organization}</span></p>
      </div>
      <div className="bg-gray-200 px-6 py-4">
        <button className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
          Agendar Consulta
        </button>
      </div>
    </div>
  );
}