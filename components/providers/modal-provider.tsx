"use client";


import { useEffect, useState } from "react";
import { SettingsModal } from "@/components/models/setting-model";
import { CoverImageModal } from "@/components/models/cover-image-modal";


export const ModalProvider =() =>{
    const [isMunted , setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
    },[]);

    if (!isMunted) {
        return null;
    }

    return (
        <>
        <SettingsModal />
        <CoverImageModal />
        </>
    );
};