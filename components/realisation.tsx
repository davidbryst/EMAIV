import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import realisation from '@/public/realisation.jpg'
import realisation1 from '@/public/realisation1.jpg'
import realisation2 from '@/public/realisation2.jpg'
import realisation3 from '@/public/realisation3.jpg'
import realisation4 from '@/public/realisation4.jpg'
import Image from 'next/image'

export default function Realisation() {
  return (
    <section>
    <div className="flex relative flex-col items-center px-36 md:px-60 pt-24 pb-40 min-h-max max-md:px-5 max-md:pb-24 overflow-hidden">
      <Image alt='bg' loading="lazy"
        src={realisation}
        className="object-cover absolute inset-0 size-full" />
      
      <div className=" bg-slate-900 opacity-95 absolute inset-0" />
      
      <div className="flex overflow-hidden relative flex-col items-center max-w-full text-center text-white w-[769px]">
        <div className="text-4xl font-bold tracking-tighter leading-none max-md:max-w-full">
        Nos realisations.
        </div>
        <div className="mt-4 text-xl tracking-normal leading-8 bg-blend-normal w-[589px] max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      
      <div className="flex overflow-hidden relative flex-wrap gap-16 items-start mt-20 max-w-full w-[1077px] max-md:mt-10">
        {/* item 1 */}
        <div className="flex relative justify-start items-center overflow-hidden flex-wrap grow shrink gap-5 min-w-[240px] w-[367px] max-md:max-w-full">
          <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
            <Image alt='bg' loading="lazy"
              src={realisation1}
              className="object-cover absolute inset-0 size-full" />
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-w-[300px]">
            <div className="text-xl font-bold tracking-tight leading-loose text-white">
              Colonie Tour Europe
            </div>
            <div className=" text-lg tracking-normal leading-7 text-white bg-blend-normal">
                30 participants <br />
                07 mai 2023 <br />
                10 juillet 2023 <br />
            </div>
          </div>
        </div>
        {/* item 2 */}
        <div className="flex relative justify-start overflow-hidden flex-wrap grow shrink gap-5 items-start min-w-[240px] w-[367px] max-md:max-w-full">
          <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
            <Image alt='bg' loading="lazy"
              src={realisation2}
              className="object-cover absolute inset-0 size-full" />
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-w-[300px]">
            <div className="text-xl font-bold tracking-tight leading-loose text-white">
              Colonie Tour Europe
            </div>
            <div className=" text-lg tracking-normal leading-7 text-white bg-blend-normal">
                <p>30 participants</p>
                <p>07 mai 2023</p>
                <p>10 juillet 2023</p>
            </div>
          </div>
        </div>
        {/* item 3 */}
        <div className="flex relative justify-start overflow-hidden flex-wrap grow shrink gap-5 items-start min-w-[240px] w-[367px] max-md:max-w-full">
          <div className='relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]'>
            <Image alt='bg' loading="lazy"
              src={realisation3}
              className="object-cover absolute inset-0 size-full" />
          </div>
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-w-[300px]">
            <div className="text-xl font-bold tracking-tight leading-loose text-white">
              Colonie Tour Europe
            </div>
            <div className=" text-lg tracking-normal leading-7 text-white bg-blend-normal">
                <p>30 participants</p>
                <p>07 mai 2023</p>
                <p>10 juillet 2023</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </section>
  )
}
