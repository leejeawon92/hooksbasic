import React, { useEffect, useRef, useState } from "react";
const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
        return;
    }

    const confirmAction = () => {
        if (confirm(message)) {
            callback();
        } else {
            rejection();
        }
    };
    return confirmAction;
};