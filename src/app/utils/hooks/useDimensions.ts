import {MutableRefObject, useEffect, useRef} from "react";

export interface ScreenDimensions {
    width: number;
    height: number;
    offsetWidth?: number;
    offsetHeight?: number;
}

export const useDimensions = (screenRef: MutableRefObject<ScreenDimensions | null>) => {
    const dimensions: MutableRefObject<ScreenDimensions> = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if(!screenRef.current)
            return;
        dimensions.current.width = screenRef.current.offsetWidth ?? dimensions.current.width;
        dimensions.current.height = screenRef.current.offsetHeight ?? dimensions.current.height;
    }, []);

    return dimensions.current;
};
