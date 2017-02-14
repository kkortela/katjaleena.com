import strings from './strings'
const {amma, instashop, wedding, dignity}  = strings.heroImages

const images = [
  {
    img: require(`../public/images/amma.jpg`),
    title: amma.title,
    text: amma.text,
  },
  {
    img: require(`../public/images/instashop.jpg`),
    title: instashop.title,
    text: instashop.text,
  },
  {
    img: require(`../public/images/wedding.jpg`),
    title: wedding.title,
    text: wedding.text,
  },
  {
    img: require(`../public/images/dignity-meals.jpg`),
    title: dignity.title,
    text: dignity.text,
  },
]

export default images
