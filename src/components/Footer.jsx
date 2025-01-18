import { footerLinks, socialMedia } from '../constants'
import FooterSocials from './FooterSocials'
import styles from './style'

const Footer = () => {
  return (
    <div className='container overflow-hidden footer'>
      <div className='flex flex-row justify-evenly  max-w-screen-xl mx-auto'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className={`${styles.marginX} ${styles.marginY}`}>
            <h4 className={`${styles.paddingX}  text-2xl  font-poppins md:text-2xl`}>{footerLink.title}</h4>
            <ul className={`${styles.paddingX} `}>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className='my-4  leading-relaxed'>
                  {link.name && <span>{link.name} </span>}
                  {link.p && <span id='footerp'>{link.p} </span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <FooterSocials />
    </div>
  )
}

export default Footer