import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const WEB3FORMS_ACTION = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '850c7d13-546d-460f-bdf8-4817abad70e9';

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
  const [formStatus, setFormStatus] = useState('idle');

  const subjectText = (value) => {
    const keys = {
      adquisicion: 'contact.subjectAdquisicion',
      prensa: 'contact.subjectPrensa',
      archivo: 'contact.subjectArchivo',
      otro: 'contact.subjectOtro',
    };
    return value && keys[value] ? t(keys[value]) : '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subjectValue = data.get('subject');
    const subjectLine = subjectText(subjectValue) || t('contact.formTitle');

    setFormStatus('loading');
    try {
      const res = await fetch(WEB3FORMS_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: data.get('name'),
          email: data.get('email'),
          subject: subjectLine,
          message: data.get('message'),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

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
            <form
              action={WEB3FORMS_ACTION}
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors disabled:opacity-60"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.emailFieldLabel')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors disabled:opacity-60"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                  {t('contact.subjectLabel')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors disabled:opacity-60"
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
                  name="message"
                  id="message"
                  rows={5}
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full px-4 py-3 bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:border-stone-900 dark:focus:border-stone-300 focus:ring-0 outline-none transition-colors resize-none disabled:opacity-60"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {formStatus === 'success' && (
                <p className="text-sm text-green-800 dark:text-green-300" role="status">
                  {t('contact.formSuccess')}
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-sm text-red-800 dark:text-red-300" role="alert">
                  {t('contact.formError')}
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="btn-primary w-full disabled:opacity-60 disabled:pointer-events-none"
              >
                {formStatus === 'loading' ? t('contact.formSending') : t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;