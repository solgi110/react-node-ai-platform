import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function textAnimation(refVideo) {
  gsap.from(refVideo.current, {
    transformPerspective: 1000,
    rotateX: 30,
    pin: true,

  },
    gsap.to(refVideo.current, {
      rotateX: 0,
      transition: 'all 1s ease',
      scrollTrigger: {
        trigger: refVideo.current,
        start: 'center top',
        // scrub: true,
        toggleActions: 'play reverse play reverse'
      }
    },
    )
  )
}

const scrolled = window.scroll > 0
export function headerAnimation(header) {

  gsap.registerPlugin(ScrollTrigger);
  const ST = ScrollTrigger.create({
    start: 1,
    onEnter: () => {
      gsap.to(header.current, {
        backgroundColor: '#0a0a37e0',
        color: 'white',
        duration: 1,
      })
    },
    onLeaveBack: () => {
      gsap.to(header.current, {
        backgroundColor: scrolled ? '#0a0a37e0' : 'transparent',
        duration: .5
      })
    }
  })

}


export function buildingSection(data) {

  const gs = gsap.context(() => {
    gsap.set(data.current, {
      scale: 0,
      opacity: 0,

    })

    gsap.to(data.current, {

      scale: 1,
      duration: 1,
      opacity: 1,
      scrollTrigger: {

        trigger: data.current,
        start: 'top 80%',
        // markers: true,
        // pin: true,
        toggleActions: 'play none none reverse'
      }
    })
  })


  return () => gs.revert()


}
