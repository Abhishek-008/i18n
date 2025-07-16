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
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 text-black px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold">{t('greeting')}</h1>
        <h2 className="text-3xl font-bold">{t('name')}</h2>
        <h2 className="text-3xl font-bold">{t('tab')}</h2>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => changeLanguage('en')}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('fr')}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Français
          </button>
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
});
