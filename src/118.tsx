import {useTranslation} from 'react-i18next'
import i18next from 'i18next'

function Translation() {
    const {t} = useTranslation()
    return <div>{t('title')}<button onClick={() => i18next.changeLanguage('es')}>Espanol</button><button onClick={() => i18next.changeLanguage('en')}>English</button></div>
}

export default Translation