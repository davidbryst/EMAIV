import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'
import logo from '@/public/logo.png'
import img from '@/public/7973050.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero1() {
  return (
    <section>
    <div className="flex flex-col justify-center py-1  bg-white">
      <div className="flex overflow-hidden flex-col justify-between pt-44 pb-10 mt-1.5 w-full min-h-[900px] max-md:max-w-full">
        <div className="flex flex-col justify-center items-center self-center px-16 w-full bg-orange-500 h-[200px]  max-md:max-w-full">
          <div className="flex flex-col max-w-full bg-white w-[500px]">
          <Image  src={img}  alt="logo"
              className="object-contain w-full aspect-[0.99] shadow-xl rounded-md z-20"
            />
          </div>
        </div>
        <div className="flex px-10 flex-col justify-center items-center mt-40 w-full text-4xl font-extrabold tracking-tighter leading-tight text-gray-900 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center max-w-[464px] md:max-w-[664px] lg:max-w-[864px] ">
            {/* <div className="max-md:max-w-full">Rejoignez-nous pour</div> */}
            <div className="mt-5 text-2xl md:text-5xl tracking-normal leading-none max-md:max-w-full max-md:text-4xl">
            Rejoignez-nous pour explorer de nouveaux horizons malgré les obstacles
            </div>
            {/* <div className="mt-5 max-md:max-w-full">malgré les obstacles</div> */}
            <div className="flex flex-wrap gap-5 items-start self-start mt-5 text-lg font-medium tracking-tight leading-8 text-white max-md:max-w-full">
              <Link href="/#" className="flex gap-10 justify-between items-center px-5 py-3.5 bg-orange-600 hover:bg-orange-700 rounded-md  min-h-[59px] min-w-[240px] w-[241px]">
                <div className="self-stretch my-auto">Prendre rende vous</div>
                
              </Link> 
              <Link href="/#" className="flex gap-10 justify-between items-center px-5 py-3.5 text-slate-900 hover:text-white hover:bg-slate-900 rounded-md  min-h-[59px] min-w-[240px] w-[241px]">
                
                <div className="self-stretch my-auto">Voir nos services</div>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
