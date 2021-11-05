import useTranslation from 'next-translate/useTranslation';    
import Nav from '../components/Nav/Nav';
import SocialBanner from '../components/SocialBanner/SocialBanner';
import HeroTemplate from '../components/HeroTemplate/HeroTemplate';
import SectionTemplate from '@components/SectionTemplate/SectionTemplate';
import SectionTemplateInverted from '../components/SectionTemplateInverted/SectionTemplateInverted';
import Footer from '@components/Footer/Footer';


const ClubDeEscalada = () => {
    let { t } = useTranslation();

    const escaladoras = require('../public/images/2escaladoras.jpg');
    const formacionTecnica = require('../public/images/formacionTecnica.jpg');
    const escuela = require('../public/images/escuela.webp');
    const guiaDeMontana = require('../public/images/guiaDeMontana.webp');
    const portada = require('../public/images/exito3.jpg');

    return ( 
        <>
            <Nav/>  
            <HeroTemplate
                image={portada}
                alt="Tagorock - Escuela Infantil de Escalada"
                title1={t('club-de-escalada:heroTitle1-a')}
                title2={t('club-de-escalada:heroTitle1-b')}
            />
            <SocialBanner/>
            <SectionTemplate
                id="escuela"
                image={escuela}
                title1={t('club-de-escalada:escuelaDeEscaladaTitle1')}
                title2={t('club-de-escalada:escuelaDeEscaladaTitle1')}
                text1={t('club-de-escalada:escuelaDeEscalada1')}
                text2={t('club-de-escalada:escuelaDeEscalada2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <SectionTemplateInverted
                image={formacionTecnica}
                title1={t('club-de-escalada:formacionTecnicaTitle1')}
                title2={t('club-de-escalada:formacionTecnicaTitle2')}
                text1={t('club-de-escalada:formacionTecnica1')}
                text2={t('club-de-escalada:formacionTecnica2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />    
            <SectionTemplate
                image={guiaDeMontana}
                title1={t('club-de-escalada:escuelaDeEscaladaTitle1')}
                title2={t('club-de-escalada:escuelaDeEscaladaTitle1')}
                text1={t('club-de-escalada:escuelaDeEscalada1')}
                text2={t('club-de-escalada:escuelaDeEscalada2')}
                url="http://www.google.es"
                buttonText="Tarifas"
            />
            <Footer/>
        </>
     );

}
 
export default ClubDeEscalada;