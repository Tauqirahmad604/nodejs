export default defineNuxtPlugin((nuxtApp) => {
  const { $i18n } = nuxtApp.vueApp.config.globalProperties;
  const updateDirection = (locale) => {
    const newDir = locale === 'ar' ? 'rtl' : 'ltr';
    if (process.client) {
      document.documentElement.setAttribute('dir', newDir);
    }
  };

  const getSavedLocale = (req) => {
    const lang = useCookie('i18n_redirected').value;
    return lang;
  };

  const savedLocale = getSavedLocale();
  $i18n.locale = savedLocale;
  if (process.client) {
    updateDirection(savedLocale);

    watch(
      () => $i18n.locale,
      (newLocale) => {
        updateDirection(newLocale);
        const lang = useCookie('i18n_redirected');
        lang.value = newLocale;
      }
    );
  }
});
