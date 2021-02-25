import React, { useEffect, useRef, useState } from "react";
export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerHTML = title;
    };
    useEffect(updateTitle, [title]);

    return setTitle;
};
