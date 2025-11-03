
import SEO from './../../components/SEO.tsx';
import { useTranslation } from 'react-i18next';
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";

export default function Home() {
    const { t } = useTranslation();
    const seo = {
        title: t('pages.home.title'),
        description: t('pages.home.description'),
        keywords: t('pages.home.keywords'),
    };


    return (
        <>
            <SEO {...seo} />
            <Navbar />
           home
            <Footer disclaimer={true} />
        </>
    );
}
