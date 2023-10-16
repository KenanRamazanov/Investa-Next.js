"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import { useDebouncedCallback } from "use-debounce";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { features } from "./FrameView";
import CircleBackground from "./CircleBackground";

const usePrevious = (value) =>{
    let ref = useRef()
    useEffect(()=>{
ref.current = value 
    },[value])
}

const DesktopView = () => {
    let [changeCount, setChangeCount] = useState(0);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let prevIndex = usePrevious(selectedIndex);
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;
  
    let onChange = useDebouncedCallback(
      (selectedIndex) => {
        setSelectedIndex(selectedIndex);
        setChangeCount((changeCount) => changeCount + 1);
      },
      100,
      { leading: true }
    );
  return (
   <Tab.Group 
   as="div"
   className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6"
   selectedIndex={selectedIndex}
   onChange={onChange}
   vertical>
    <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
{
    features.map((feature,featureIndex) =>(
   <div  key={feature.name}
   className="relative rounded-2xl transition-colors hover:bg-gray-800/30">

    {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
/>
)}
<div className="relative z-10 p-8">
    <feature.icon className="h-8 w-8"/>
    <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                  </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
</div>
   </div>
  ))
}
    </Tab.List>
    <div className="relative col-span-6">
    <div>
        <CircleBackground color="#2563eb"  className="animate-spin-slow" />
    </div>
    </div>
   </Tab.Group>
  )
}

export default DesktopView