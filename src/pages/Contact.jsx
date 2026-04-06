import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">Contacto</span>
            <h1 className="text-4xl font-serif mb-8 text-stone-900">Conversemos</h1>
            <p className="text-lg text-stone-600 mb-12 leading-relaxed">
              Estamos a disposición de galeristas, curadores, coleccionistas y amantes del arte que deseen conocer más sobre la vida y obra de Faiwel Wolfsdorf.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full text-stone-900 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1">Correo Electrónico</h4>
                  <p className="text-stone-500">contacto@legadowolfsdorf.com</p>
                  <p className="text-stone-500">adquisiciones@legadowolfsdorf.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full text-stone-900 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1">Ubicación</h4>
                  <p className="text-stone-500">Lima, Perú (Sede Principal)</p>
                  <p className="text-stone-500">Buenos Aires, Argentina (Archivo)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center rounded-full text-stone-900 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 mb-1">Teléfono</h4>
                  <p className="text-stone-500">+51 1 234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-stone-900">
            <h3 className="text-2xl font-serif mb-6 text-stone-900">Formulario de Contacto</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors"
                  placeholder="Su nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Asunto</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors"
                >
                  <option value="">Seleccione un motivo</option>
                  <option value="adquisicion">Adquisición de Obra</option>
                  <option value="prensa">Prensa / Exposiciones</option>
                  <option value="archivo">Consulta de Archivo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-stone-900 focus:ring-0 outline-none transition-colors resize-none"
                  placeholder="Escriba su mensaje aquí..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;