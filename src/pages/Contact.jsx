import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

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

const Contact = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400 block mb-6">{t('contact.subtitle')}</span>
            <h1 className="text-4xl font-serif mb-8 text-stone-900 dark:text-stone-100">{t('contact.title')}</h1>
            <p className="text-lg text-stone-600 dark:text-stone-300 mb-12 leading-relaxed">{t('contact.intro')}</p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 flex items-center justify-center rounded-full text-stone-900 dark:text-stone-100 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-1">{t('contact.emailLabel')}</h4>
                  <a
                    href="mailto:faiwelwolfsdorf@gmail.com"
                    className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
                  >
                    faiwelwolfsdorf@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 flex items-center justify-center rounded-full text-stone-900 dark:text-stone-100 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-1">{t('contact.locationLabel')}</h4>
                  <p className="text-stone-500 dark:text-stone-400">{t('contact.location')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 flex items-center justify-center rounded-full text-stone-900 dark:text-stone-100 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-100 mb-1">{t('contact.phoneLabel')}</h4>
                  <a
                    href="tel:+5491141760605"
                    className="text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors"
                  >
                    +54 9 11 4176 0605
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-stone-900 p-8 md:p-10 shadow-xl border-t-4 border-stone-900 dark:border-stone-100">
            <h3 className="text-2xl font-serif mb-6 text-stone-900 dark:text-stone-100">{t('contact.formTitle')}</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.nameLabel')}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.emailFieldLabel')}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.subjectLabel')}
                </label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors"
                >
                  <option value="">{t('contact.subjectPlaceholder')}</option>
                  <option value="adquisicion">{t('contact.subjectAdquisicion')}</option>
                  <option value="prensa">{t('contact.subjectPrensa')}</option>
                  <option value="archivo">{t('contact.subjectArchivo')}</option>
                  <option value="otro">{t('contact.subjectOtro')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.messageLabel')}
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;