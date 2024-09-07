export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Realisation from '@/components/realisation'
import Zigzag1 from '@/components/zigzag1'
import Hero1 from '@/components/hero1'

export default function Home() {
  return (
    <>
      <Hero1 />
      <Zigzag1 />
      <Features />
      <Realisation />
      <Testimonials />
      <Newsletter />
    </>
  )
}
