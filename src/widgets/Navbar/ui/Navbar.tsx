import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { FC } from 'react'
import Logo from 'shared/assets/icons/Logo.svg'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Logo />
            <div className={cls.links}>
                <AppLink
                  className={cls.item}
                  theme={AppLinkTheme.SECONDARY}
                  to={'/'}
                  >
                    {t('main')}
                </AppLink>
                <AppLink
                  className={cls.item}
                  theme={AppLinkTheme.RED}
                  to={'/about'}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
  )
}
