"use client";
import {useState, useEffect} from "react";
import { ChevronUpIcon} from "@heroicons/react/24/solid";

export default function BackToTop(){
  const[visible, setVisible] = useState(false);

  useEffect(()=>{
    const toggleVisibility=()=>{
      if(window.scrollY > 300){
        setVisible(true);
      }else{
        setVisible(false);
      }
    };
    window.addEventListener("scroll",toggleVisibility);
    return ()=>window.removeEventListener("scroll", toggleVisibility);
  },[]);
  const scrollToTop =() =>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  };
  return(visible &&(
    <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:yellow-red-500 transition z-50"
    aria-label="BackToTop"
    >
      <ChevronUpIcon className="h-5 w-5" />

    </button>
    )
  );
}