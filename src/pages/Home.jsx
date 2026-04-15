import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/26ba1921c9f74b05bca34da23f9c2a7f.jpeg';
import featuredWork from '../assets/images/4b.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Surrealist Abstract Background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/50 via-stone-50/20 to-stone-50"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-px h-40 bg-stone-300/50 hidden lg:block" />
        <div className="absolute top-1/3 right-10 w-px h-60 bg-stone-300/50 hidden lg:block" />

        {/* Content */}
        <motion.div
          className="container-custom relative z-10 text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6"
          >
            Artista Surrealista
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-8 leading-tight"
          >
            "El inconsciente traza mapas que la razón desconoce."
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Un viaje cromático desde las raíces de Varsovia hasta la luz de América del Sur.
            Descubra el universo surrealista de Faiwel Wolfsdorf, donde lo onírico cobra vida.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-3 group">
              Explorar la Colección
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-px h-12 bg-stone-400 mx-auto"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </section>

      {/* Featured Work Preview - Asymmetrical Layout */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={featuredWork}
                  alt="Featured Work"
                  className="w-full h-auto shadow-2xl"
                />
              </motion.div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:pl-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-stone-500 block mb-4">Obra Destacada</span>
                <h2 className="text-3xl md:text-4xl font-serif mb-6 text-stone-900">Automatismo y Forma</h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  Discípulo del automatismo inconsciente y la psicología de la forma, Wolfsdorf no pintaba lo que veía,
                  sino lo que sentía latir bajo la superficie de la realidad. Su obra es un diálogo eterno entre
                  el color y la psique.
                </p>
                <Link to="/about" className="link-animated text-stone-900 uppercase tracking-widest text-sm font-medium">
                  Leer Biografía Completa
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-28 bg-stone-900 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-serif leading-relaxed"
          >
            "Crear es liberar. Mi obra busca capturar ese instante preciso donde el pensamiento lógico cede paso a la intuición pura."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <span className="text-sm uppercase tracking-widest text-stone-400">— Faiwel Wolfsdorf</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;