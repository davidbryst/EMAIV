import Image from 'next/image'

import FeatImage01 from '@/public/realisation4.jpg'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import Link from 'next/link'

export default function Zigzag1() {
  return (
    <section>
      <div className="flex flex-wrap gap-10 justify-center items-center px-60 py-24 leading-8 text-gray-900 bg-slate-100 max-md:px-5 max-md:py-24">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/72a2b95066bf0b4445fc31172ff77e8738dc531475bdad13e67033d45eb783d3?placeholderIfAbsent=true&apiKey=251fd96100ce45329ecb200582fc8054"
        className="object-contain grow shrink self-stretch my-auto aspect-[1.06] min-w-[240px] w-[413px] max-md:max-w-full"
      />
      <div className="flex flex-col grow shrink justify-center self-stretch my-auto min-w-[240px] w-[406px] max-md:max-w-full">
        <div className="text-4xl font-extrabold tracking-tighter leading-none">
          Qui somme nous
        </div>
        <div className="mt-5 text-xl tracking-normal bg-blend-normal max-md:max-w-full">
          EMAIV-JC, votre partenaire de confiance dans votre parcours
          d'immigration.
          <br />
          Nous sommes une équipe dévouée d'experts en immigration, dédiée à vous
          accompagner à chaque étape de votre voyage vers une nouvelle vie. Que
          vous recherchiez des informations sur les visas, la citoyenneté, la
          résidence permanente ou d'autres aspects de l'immigration, nous sommes
          là pour vous fournir des conseils personnalisés et des ressources
          précieuses.
        </div>
        <div className="flex flex-wrap gap-5 items-start self-start mt-5 text-lg font-medium tracking-tight leading-8 text-white max-md:max-w-full">
          {/* <Link href="/#" className="flex gap-10 justify-between items-center px-5 py-3.5 bg-orange-600 hover:bg-orange-700 rounded-md  min-h-[59px] min-w-[240px] w-[241px]">
            <div className="self-stretch my-auto">Prendre rende vous</div>
            
          </Link>  */}
          <Link href="/#" className="flex gap-10 justify-between items-center px-5 py-3.5 text-slate-900 border-4 border-slate-900 hover:text-white hover:bg-slate-900 rounded-md  min-h-[59px] min-w-[240px] w-[241px]">
            
            <div className="self-stretch my-auto">Voir nos services</div>
          </Link> 
        </div>
      </div>
    </div>
    </section>
  )
}
