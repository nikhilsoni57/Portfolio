"use client";

import React, { useState, useCallback } from 'react';
import { Slider } from './Slider';

const ParentComponent: React.FC = () => {
    const [value, setValue] = useState(50);

    // Wrap onChange in useCallback to ensure stable reference
    const handleChange = useCallback((newValue: number) => {
        setValue(newValue);
    }, []);

    return (
        <div>
            <Slider
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default ParentComponent;