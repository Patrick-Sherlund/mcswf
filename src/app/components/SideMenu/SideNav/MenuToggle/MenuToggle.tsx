import React, { FC } from 'react';
import { MenuPath, MenuButton } from "./MenuToggle.styles";

interface MenuToggleProps {
    toggleEventHandler: () => void
}

interface PathProps {
    variants: {
        closed: {},
        open: {},
    },
    d?: string,
    transition?: {}
}

const Path = (props: PathProps) => (
    <MenuPath
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 92%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle: FC<MenuToggleProps> = (menuToggleProps: MenuToggleProps) => {
    const toggleEventHandler: () => void = menuToggleProps.toggleEventHandler;

    return (
        <MenuButton onClick={() => toggleEventHandler()}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5", clipPath: `circle(${500}px at 35px 35px)`,
                            transition: {
                                delay: 0.3,
                                type: "spring",
                                stiffness: 20,
                                restDelta: 2
                            } },
                        open: {  clipPath: "circle(0px at 35px 35px)",
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 40
                            } }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: {  clipPath: `circle(${500}px at 35px 35px)`,
                            transition: {
                                delay: 0.3,
                                type: "spring",
                                stiffness: 20,
                                restDelta: 2
                            } },
                        open: {  clipPath: "circle(0px at 35px 35px)",
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 40
                            } }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346",  clipPath: `circle(${500}px at 35px 35px)`,
                            transition: {
                                delay: 0.3,
                                type: "spring",
                                stiffness: 20,
                                restDelta: 2
                            }  },
                        open: {  clipPath: "circle(0px at 35px 35px)",
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 40
                            } }
                    }}
                />
            </svg>
        </MenuButton>
    );
}

export default MenuToggle;
