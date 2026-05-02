import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/26ba1921c9f74b05bca34da23f9c2a7f.jpeg';
import featuredWork from '../assets/images/4b.jpeg';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Home = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-full"
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt={t('home.heroAlt')}
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
            {t('home.label')}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-8 leading-tight"
          >
            {t('home.quote')}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl md:mb-11"
          >
            {t('home.intro')}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-3 group">
              {t('home.cta')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work — densidad editorial: más lienzo, texto en columna fija */}
      <section className="bg-white py-14 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-8 lg:gap-10 xl:gap-12">
            <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="pointer-events-none absolute -inset-3 -z-10 bg-gradient-to-br from-stone-200/40 via-transparent to-stone-300/20 blur-2xl md:-inset-4" />
                <img
                  src={featuredWork}
                  alt={t('home.featuredAlt')}
                  className="h-auto w-full rounded-md shadow-[0_24px_60px_-20px_rgba(28,25,23,0.35)] ring-1 ring-stone-900/5"
                />
              </motion.div>
            </div>
            <div className="order-1 flex md:order-2 md:col-span-5 md:max-lg:pl-2 lg:col-span-4 lg:min-h-0 lg:justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full max-w-md flex-col md:mx-0 md:max-w-none lg:sticky lg:top-28 lg:max-w-[22rem] xl:max-w-[24rem]"
              >
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.28em] text-stone-500">
                  {t('home.featuredLabel')}
                </span>
                <h2 className="mb-4 font-serif text-3xl leading-tight text-stone-900 md:text-[2.1rem] lg:text-4xl">
                  {t('home.featuredTitle')}
                </h2>
                <p className="mb-6 text-[0.98rem] leading-[1.7] text-stone-600 md:text-base">
                  {t('home.featuredBody')}
                </p>
                <Link
                  to="/about"
                  className="link-animated mt-auto inline-flex w-fit text-sm font-medium uppercase tracking-[0.2em] text-stone-900"
                >
                  {t('home.featuredLink')}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-stone-900 pb-16 pt-20 text-white md:pb-20 md:pt-24">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-serif leading-relaxed mb-0"
          >
            {t('home.quoteBlock')}
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <span className="text-sm uppercase tracking-widest text-stone-400">{t('home.quoteAuthor')}</span>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;