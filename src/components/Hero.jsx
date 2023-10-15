import  Container  from './Container'
import React from 'react'
import Title from './Title';
import Image from 'next/image';
import appstore from '../images/logos/playStore.png'
import {BsPlayCircle} from "react-icons/bs"
import Button from './Button';
const Hero = () => {
  return (
    <section
     id='Home' className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3">
<Container>
<div
 className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
    {/*Right side */} 
    <div 
    className="relative z-10 mx-auto max-w-2xl lg:col-span-7 
    lg:max-w-none lg:pt-6 xl:col-span-6">
    <Title title="Invest at the perfect time" className="text-4xl" />
    <p className="mt-6 text-lg text-gray-600">
              By leveraging insights from our network of industry insiders, you
              will know exactly when to buy to maximize profit, and exactly when
              to sell to avoid painful losses.
            </p>
     <div className="mt-8 flex flex-wrap items-center gap-x-6 fap-4">
        <Image src={appstore} className="w-32 h-auto"/>
        <Button variant="outline" href='#'>
            <BsPlayCircle className="text-xl"/>   <span className="ml-2.5"> Watch the video</span>
        </Button>
        </div>       
    </div>
    {/*Left side */}

</div>

</Container>
    </section>
  )
};

export default Hero