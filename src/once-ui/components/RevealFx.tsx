"use client";

import React, { forwardRef } from 'react';
import { SpacingToken } from '../types';
import styles from './RevealFx.module.scss';

interface RevealFxProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    // Removed speed, delay, translateY, trigger props to simplify
    style?: React.CSSProperties;
    className?: string;
}

const RevealFx = forwardRef<HTMLSpanElement, RevealFxProps>(({
    children,
    // speed = 'medium',
    // delay = 0,
    // translateY,
    // trigger,
    style,
    className,
    ...rest
}, ref) => {
    // Removed state management for animation
    // const [isRevealed, setIsRevealed] = useState(false);

    // Removed useEffect hooks for animation
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsRevealed(true);
    //     }, delay * 1000);
    //     return () => clearTimeout(timer);
    // }, [delay]);

    // useEffect(() => {
    //     if (trigger !== undefined) {
    //         setIsRevealed(trigger);
    //     }
    // }, [trigger]);

    // Removed speed duration and translate value logic
    // const getSpeedDuration = () => {
    //     switch (speed) {
    //         case 'fast':
    //             return '1.5s';
    //         case 'medium':
    //             return '2s';
    //         case 'slow':
    //             return '3s';
    //         default:
    //             return '2s';
    //     }
    // };

    // const getTranslateYValue = () => {
    //     if (typeof translateY === 'number') {
    //         return `${translateY}rem`;
    //     } else if (typeof translateY === 'string') {
    //         return `var(--static-space-${translateY})`;
    //     }
    //     return undefined;
    // };

    // const translateValue = getTranslateYValue();

    // Removed combined class name logic for animation
    // const combinedClassName = `${styles.revealFx} ${isRevealed ? styles.revealed : styles.hidden} ${className || ''}`;

    // Simplified style without animation
    const combinedClassName = `${styles.revealFx} ${className || ''}`;
    const revealStyle: React.CSSProperties = {
        // Removed transition duration and transform properties
        ...style,
    };

    return (
        <span
            ref={ref}
            aria-hidden="true"
            style={revealStyle}
            className={combinedClassName}
            {...rest}>
            {children}
        </span>
    );
});

RevealFx.displayName = "RevealFx";
export { RevealFx };