import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push('/', '/', { locale });
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-50 text-black">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">{t('tab')}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage('en')}
            className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            FR
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-start text-center px-6 pt-20 sm:pt-28">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">{t('greeting')}</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">{t('name')}</p>
        <button className="mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          {t('button_start')}
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-4 mt-auto bg-white border-t">
        <p className="text-gray-600">{t('footer_text')}</p>
      </footer>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
