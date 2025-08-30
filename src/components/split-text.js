import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

/**
 *
 * @param {NodeListOf<HTMLElement>} textsElements
 */
export default function (textsElements) {
  Array.from(textsElements).forEach((textElement) => {
    const split = SplitText.create(textElement, {
      autoSplit: true,
      type: 'lines',
      mask: 'lines',
      onSplit: (self) => {
        return gsap.from(self.lines, {
          scrollTrigger: {
            trigger: textElement,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'play none none reset',
          },
          yPercent: 100,
          stagger: 0.05,
        })
      },
    })
  })
}
