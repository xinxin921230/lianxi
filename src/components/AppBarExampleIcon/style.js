import factory from 'react-inlinestyle/factory'

const globalFonts = {
  ss: '黑体, sans-serif'
}

export const style1 = factory({
  default: {

  }
})
export const styleTitle = factory({
  default: {
    color: '#fff',
    fontFamily: globalFonts.ss,
    textDecoration:'none',
  }
})