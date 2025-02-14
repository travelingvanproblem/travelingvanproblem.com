import * as React from 'react'

import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaReddit } from '@react-icons/all-files/fa/FaReddit'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

import { footerLinks } from '@/lib/config'
import cs from 'classnames'
import { useNotionContext } from 'react-notion-x'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const { components, mapPageUrl } = useNotionContext()

  return (
    <footer className={styles.footer}>
        <div className={styles.footerSocial}>
          <div className={styles.settings}>
            <a className={styles.link} href={config.host} rel="home" title="Logo">
              <svg className={styles.logo}>
                <use xlinkHref="/favicon.svg#logo"/>
              </svg>
              <span>{config.author}</span>
            </a>
          </div>
          <div className={styles.settings}>
            {hasMounted && (
              <a
                className={styles.toggleDarkMode}
                href='#'
                role='button'
                onClick={onToggleDarkMode}
                title='Toggle dark mode'
              >
                {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
              </a>
            )}
          </div>
          <div className="site-social-links-menu">
            <div className={styles.social}>
              {config.twitter && (
                <a
                  className={styles.twitter}
                  href={`https://twitter.com/${config.twitter}`}
                  title={`Twitter @${config.twitter}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </a>
              )}

              {config.mastodon && (
                <a
                  className={styles.mastodon}
                  href={config.mastodon}
                  title={`Mastodon ${config.getMastodonHandle()}`}
                  rel='me'
                >
                  <FaMastodon />
                </a>
              )}

              {config.zhihu && (
                <a
                  className={styles.zhihu}
                  href={`https://zhihu.com/people/${config.zhihu}`}
                  title={`Zhihu @${config.zhihu}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaZhihu />
                </a>
              )}

              {config.github && (
                <a
                  className={styles.github}
                  href={`https://github.com/${config.github}`}
                  title={`GitHub @${config.github}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                </a>
              )}

              {config.linkedin && (
                <a
                  className={styles.linkedin}
                  href={`https://www.linkedin.com/in/${config.linkedin}`}
                  title={`LinkedIn ${config.author}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin />
                </a>
              )}

              {config.newsletter && (
                <a
                  className={styles.newsletter}
                  href={`${config.newsletter}`}
                  title={`Newsletter ${config.author}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaEnvelopeOpenText />
                </a>
              )}

              {config.instagram && (
                <a
                  className={styles.instagram}
                  href={`https://www.reddit.com/u/${config.instagram}`}
                  title={`Instagram ${config.author}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram />
                </a>
              )}

              {config.youtube && (
                <a
                  className={styles.youtube}
                  href={`https://www.youtube.com/${config.youtube}`}
                  title={`YouTube ${config.author}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaYoutube />
                </a>
              )}

              {config.reddit && (
                <a
                  className={styles.reddit}
                  href={`https://www.reddit.com/u/${config.reddit}`}
                  title={`Reddit ${config.author}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaReddit />
                </a>
              )}
          </div>
        </div>
      </div>
      <div className="SiteInfo">
        <div className={styles.siteInfoLinks}>
          {footerLinks
          ?.map((link, index) => {
            if (!link.pageId && !link.url) {
              return null
            }

            if (link.pageId) {
              return (
                <components.PageLink
                  href={mapPageUrl(link.pageId)}
                  key={index}
                  className={cs(styles.navLink, 'breadcrumb', 'button')}
                >
                  {link.title}
                </components.PageLink>
              )
            } else {
              return (
                <components.Link
                  href={link.url}
                  key={index}
                  className={cs(styles.navLink, 'breadcrumb', 'button')}
                >
                  {link.title}
                </components.Link>
              )
            }
          })
          .filter(Boolean)}
        </div>
        <div className={styles.copyright}>© Copyright {currentYear}. All rights reserved.</div>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
