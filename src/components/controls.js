import { lenis } from '../utils/lenis.js'

/**
 *
 * @param {HTMLElement} component
 */
export default function (component) {
  const startButton = component.querySelector('[data-start]')
  const stopButton = component.querySelector('[data-stop]')

  startButton.addEventListener('click', () => {
    console.log('start')
    lenis.start()
  })
  stopButton.addEventListener('click', () => {
    console.log('stop')
    lenis.stop()
  })
}
