import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Palette, BookOpen } from 'lucide-react';
import bgTexture from '../assets/images/fe5dcb2f23c2452587c29f1e63c5fa81.jpeg';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="pt-12 pb-24"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-500 block mb-6">{t('services.subtitle')}</span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">{t('services.title')}</h1>
          <p className="text-lg text-stone-600">{t('services.intro')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Venta de Obra */}
          <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 card-hover">
            <div className="w-14 h-14 bg-stone-100 flex items-center justify-center rounded-full mb-6 text-stone-900">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-serif mb-4 text-stone-900">{t('services.saleTitle')}</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              <Trans
                i18nKey="services.saleBody"
                components={{ cert: <strong className="text-stone-900" /> }}
              />
            </p>
            <ul className="space-y-3 mb-8 text-stone-700">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 shrink-0"></span>
                {t('services.saleLi1')}
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 shrink-0"></span>
                {t('services.saleLi2')}
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-stone-900 rounded-full mt-2 shrink-0"></span>
                {t('services.saleLi3')}
              </li>
            </ul>
            <Link to="/contact" className="btn-primary inline-block">
              {t('services.saleCta')}
            </Link>
          </div>

          {/* Talleres */}
          <div className="bg-stone-50 p-8 md:p-12 border border-stone-200">
            <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full mb-6 text-stone-900 shadow-sm">
              <Palette size={28} />
            </div>
            <h2 className="text-2xl font-serif mb-4 text-stone-900">{t('services.methodTitle')}</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">{t('services.methodBody')}</p>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-medium text-stone-900 mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-stone-900" /> {t('services.workshop1Title')}
                </h4>
                <p className="text-sm text-stone-500">{t('services.workshop1Desc')}</p>
              </div>
              <div>
                <h4 className="font-medium text-stone-900 mb-2 flex items-center gap-2">
                  <BookOpen size={16} className="text-stone-900" /> {t('services.workshop2Title')}
                </h4>
                <p className="text-sm text-stone-500">{t('services.workshop2Desc')}</p>
              </div>
            </div>
            <Link to="/contact" className="btn-outline inline-block bg-white">
              {t('services.methodCta')}
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-stone-900 text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <img 
                src={bgTexture}
                alt={t('services.bgAlt')} 
                className="w-full h-full object-cover"
              />
          </div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed max-w-3xl mx-auto">
              {t('services.quote')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;