const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }

    const handle = (event) => {
        const {cllientY} = event;
        if(cllientY <=0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};