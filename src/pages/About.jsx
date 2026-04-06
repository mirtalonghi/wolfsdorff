import React from 'react';
import { motion } from 'framer-motion';
import portrait from '../assets/images/ca3f801e7d2947d1924eb7d804a7412b.png';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const About = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6"
          >
            Biografía
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-8 text-stone-900"
          >
            El Arquitecto de los Sueños
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-px bg-stone-900 mx-auto"
          />
        </div>

        {/* Biography Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-28">
          <div className="md:col-span-5">
            <motion.div 
              className="sticky top-32"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={portrait}
                  alt="Faiwel Wolfsdorf Abstract Portrait" 
                  className="w-full h-auto shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-stone-900/20 to-transparent" />
              </div>
              <p className="text-xs text-stone-500 mt-4 text-center italic">Interpretación visual del legado</p>
            </motion.div>
          </div>
          
          <div className="md:col-span-7 space-y-8 text-lg text-stone-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-stone-900">N</span>
              acido en Varsovia en 1921 y renacido bajo el cielo del sur, <strong className="text-stone-900">Faiwel Wolfsdorf (1921–2011)</strong> trazó un puente invisible entre la vieja Europa y la vibrante energía de América Latina. Su travesía vital, que lo llevó desde Polonia a Buenos Aires y finalmente a echar raíces en el Perú, forjó una sensibilidad única ante el desarraigo y la pertenencia.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discípulo del automatismo inconsciente y la psicología de la forma —influenciado profundamente por el maestro <strong className="text-stone-900">Juan Batlle Planas</strong>—, Wolfsdorf no pintaba lo que veía, sino lo que sentía latir bajo la superficie de la realidad.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Su legado trasciende el lienzo: dedicó décadas a transformar vidas a través del arte, guiando a niños y jóvenes ("De pirañas a delfines") a encontrar su propia voz a través del color.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-stone-100 p-10 border-l-4 border-stone-900 my-12"
            >
              <h3 className="font-serif text-xl mb-4 text-stone-900">Filosofía Artística</h3>
              <p className="italic text-stone-600">
                "Crear es liberar. Mi obra busca capturar ese instante preciso donde el pensamiento lógico cede paso a la intuición pura. Utilizo el color —azules profundos, rojos que vibran, violetas que susurran— como vehículo para explorar los laberintos de la psique humana."
              </p>
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl font-serif text-stone-900 mt-12 mb-4"
            >
              Técnicas y Materiales
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Maestro del óleo y la técnica mixta, su trabajo se caracteriza por el uso del <strong className="text-stone-900">automatismo</strong>, permitiendo que la mano fluya libremente antes de que la mente imponga estructura. Sus texturas son ricas y orgánicas, construidas capa sobre capa para revelar la historia oculta en cada cuadro.
            </motion.p>
          </div>
        </div>

        {/* Exhibitions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border-t border-stone-200 pt-16"
        >
          <h2 className="text-3xl font-serif text-center mb-12 text-stone-900">Exposiciones Destacadas</h2>
          <div className="space-y-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-50 p-6 transition-colors border-b border-stone-100"
            >
              <div>
                <h4 className="text-xl font-serif text-stone-900">Retrospectiva "El Lenguaje del Inconsciente"</h4>
                <p className="text-stone-500">Museo de la Nación, Lima</p>
              </div>
              <span className="text-stone-900 font-serif mt-2 md:mt-0 text-sm">Colección Permanente</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-50 p-6 transition-colors border-b border-stone-100"
            >
              <div>
                <h4 className="text-xl font-serif text-stone-900">Salón de Arte Moderno</h4>
                <p className="text-stone-500">Buenos Aires, Argentina</p>
              </div>
              <span className="text-stone-400 font-serif mt-2 md:mt-0 text-sm">Archivo Histórico</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row md:items-center justify-between group hover:bg-stone-50 p-6 transition-colors border-b border-stone-100"
            >
              <div>
                <h4 className="text-xl font-serif text-stone-900">Colección Instituto Peruano de Seguridad Social</h4>
                <p className="text-stone-500">Patronato Cultural</p>
              </div>
              <span className="text-stone-400 font-serif mt-2 md:mt-0 text-sm">Adquisición Institucional</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;