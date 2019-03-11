import en from './en';
import cn from './cn';

export default{
  init(lang) {
    let currentLang = en;
    switch (true) {
      case lang === 'en':
        currentLang = en;
        break;
      case lang === 'cn':
        currentLang = cn;
        break;
      default :
        currentLang = en;
    }
    return currentLang;
  },
};
