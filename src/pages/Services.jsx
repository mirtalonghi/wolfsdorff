import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Palette, BookOpen } from 'lucide-react';
import bgTexture from '../assets/images/fe5dcb2f23c2452587c29f1e63c5fa81.jpeg';

const Services = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">Servicios</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">Adquisición y Preservación</h1>
          <p className="text-lg text-stone-600">
            Gestionamos el legado artístico de Faiwel Wolfsdorf con el compromiso de preservar su visión y difundir su obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Venta de Obra */}
          <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 card-hover">
            <div className="w-14 h-14 bg-stone-100 flex items-center justify-center rounded-full mb-6 text-stone-900">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-serif mb-4 text-stone-900">Venta de Obra y Coleccionismo</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Gestionamos la venta exclusiva de obras originales del maestro Wolfsdorf. Cada pieza se entrega con un <strong>Certificado de Autenticidad</strong> emitido por el archivo familiar/fundación, garantizando su procedencia y valor histórico.
            </p>
            <ul className="space-y-3 mb-8 text-stone-700">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 shrink-0"></span>
                Obras de gran formato para instituciones.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 shrink-0"></span>
                Piezas de colección privada.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 shrink-0"></span>
                Asesoría para nuevos coleccionistas.
              </li>
            </ul>
            <Link to="/contact" className="btn-primary inline-block">
              Solicitar Catálogo Privado
            </Link>
          </div>

          {/* Talleres */}
          <div className="bg-stone-50 p-8 md:p-12 border border-stone-200">
            <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full mb-6 text-stone-900 shadow-sm">
              <Palette size={28} />
            </div>
            <h2 className="text-2xl font-serif mb-4 text-stone-900">El Método Wolfsdorf</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Honrando sus 30 años de docencia, el Taller Wolfsdorf continúa su legado ofreciendo experiencias educativas basadas en su metodología única de automatismo y liberación creativa.
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-medium text-stone-900 mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-stone-900" /> Talleres de Creatividad
                </h4>
                <p className="text-sm text-stone-500">Para artistas que buscan desbloquear su potencial creativo mediante el automatismo.</p>
              </div>
              <div>
                <h4 className="font-medium text-stone-900 mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-stone-900" /> Arte como Transformación
                </h4>
                <p className="text-sm text-stone-500">Workshops enfocados en el arte como herramienta de desarrollo personal y social.</p>
              </div>
            </div>
            <Link to="/contact" className="btn-outline inline-block bg-white">
              Más Información
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-stone-900 text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <img 
                src={bgTexture}
                alt="Background" 
                className="w-full h-full object-cover"
              />
          </div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed max-w-3xl mx-auto">
              "De pirañas a delfines" — la transformación de los jóvenes a través del arte era su mayor obra maestra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;