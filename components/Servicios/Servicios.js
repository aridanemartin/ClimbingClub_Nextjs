import styles from './Servicios.module.css';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Servicios = (props) => {

    let { t } = useTranslation();

    return ( 
        <div 
        className={styles.serviciosWrap}
        >
        
             
            <motion.div
                // animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={styles.serviciosContent}
            >
                <h2 className={styles.serviciosTitle}>{props.title}</h2>
                <p className={styles.serviciosLinks}>
                <Link href="/">
                    <a className={styles.serviciosLink}>TRAINING </a>
                </Link>
                |
                <Link href="/">
                    <a className={styles.serviciosLink}> KIDS </a>
                </Link>
                |
                <Link href="/">
                    <a className={styles.serviciosLink}> OUTDOOR </a>
                </Link>
                </p>
                
                <p className={styles.serviciosParrafo}>{props.text}</p>
                <Button 
                title="Saber Más"
                url="/club-de-escalada#escuela"
                />
            </motion.div>
        </div>



    );
}

export default Servicios;