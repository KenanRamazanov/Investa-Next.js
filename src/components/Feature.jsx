import React from 'react'
import Container from './Container'
import Title from './Title'
import DesktopView from './DesktopView'

const Feature = () => {
  return (
<section
   id="features"
   aria-label="Features for investing all your money"
   className="bg-gray-900 py-20 sm:py-32"
>
<Container>
    <div>
        <Title
         title="Every feature you need to win. Try it for yourself."
         className="text-white text-2xl"
         />

<p className="mt-2 text-lg text-gray-400">
            Investa was built for investors like you who play by their own rules
            and are not going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Investa has
            it.
          </p>
    </div>
</Container>
{/*Desktop view*/}
<div className="hidden md:mt-20 md:block maw-w-screen-xl mx-auto">
<DesktopView/>
</div>
{/*Mobile view*/}

</section>  
)
}

export default Feature