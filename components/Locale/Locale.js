import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Locale() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}