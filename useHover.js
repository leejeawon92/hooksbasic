import React, { useEffect, useRef, useState } from "react";
export const useHover = onHover => {
    if(typeof onHover !=='function'){
        return
    }

    const element = useRef();
    useEffect(() => {
        if (element.current){
            element.current.addEventListener('mouseenter', onHover)
        }
        return ()=> {
            if(element.current){
                element.current.addEventListener('mouseenter', onHover)
            }
        }
    }, [])
    return element
    
}