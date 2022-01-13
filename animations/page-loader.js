import gsap from 'gsap'

export default {
  initial () {
    gsap.from('.scene1', {
      opacity: 0,
      scale: 2,
      ease: 'back.out',
      duration: 1,
      delay: 0.5
    })
    gsap.from('.scene2', {
      opacity: 0,
      ease: 'back.out',
      delay: 1.2
    })
    gsap.to('.scene4', {
      opacity: 0.5,
      delay: 1.2,
      ease: 'power1.out'
    })
    gsap.from('.scene5', {
      opacity: 0,
      delay: 1.25,
      ease: 'power1.out'
    })
  },
  out (payload) {
    gsap.to('.scene4', {
      opacity: 0,
      ease: 'power1.out',
      duration: 1.25
    })
    gsap.to('.scene5', {
      opacity: 0,
      ease: 'power1.out',
      duration: 1.25,
      onComplete: () => {
        payload()
      }
    })
  }
}
