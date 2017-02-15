import strings from './strings'
const {amma, instashop, wedding, dignity}  = strings.heroImages

const images = [
  {
    img: require(`../public/images/amma.png`),
    title: amma.title,
    text: amma.text,
  },
  {
    img: require(`../public/images/dignity-meals.png`),
    title: dignity.title,
    text: dignity.text,
  },
  {
    img: require(`../public/images/instashop.png`),
    title: instashop.title,
    text: instashop.text,
  },
  {
    img: require(`../public/images/wedding.png`),
    title: wedding.title,
    text: wedding.text,
  },
]

export default images
