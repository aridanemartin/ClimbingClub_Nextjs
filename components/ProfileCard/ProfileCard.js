import styles from './ProfileCard.module.css';
import Image from 'next/image'; 
import Link from 'next/link';



const ProfileCard = (props) => {
    return (  
        <div className={styles.profileCardWrap}>  
            <div
            className={styles.imageWrap}
            style={{ 
                position: 'relative', 
                maxWidth: '100%', 
                maxHeight: '100%' }}
            >
                <Image 
                alt={props.alt}
                src={props.image}
                layout="fill" 
                objectFit="cover"
                
                />
            </div>
            <div className={styles.textWrap}>
                <h2 className={styles.cardTitle}>{props.title}</h2>
                <p className={styles.cardText}>{props.text}</p>
                <div className={styles.cardSocial}>
                    <Link href={props.socialLink} >
                        <a target="_blank">{props.social}</a>
                    </Link>
                </div>
            </div>




        </div>

    );
}
 
export default ProfileCard;