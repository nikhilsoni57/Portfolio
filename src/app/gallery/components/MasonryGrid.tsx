"use client";

import Masonry from 'react-masonry-css';
import { SmartImage } from "@/once-ui/components";
import styles from "@/app/gallery/Gallery.module.scss";

// Define the type for the images in the gallery
type Image = {
    src: string;
    alt: string;
    orientation: "horizontal" | "vertical";
};

// Example of a static image array (replace this with your dynamic content or remove if not needed)
const images: Image[] = [
    { src: '/images/sample1.jpg', alt: 'Sample Image 1', orientation: 'horizontal' },
    { src: '/images/sample2.jpg', alt: 'Sample Image 2', orientation: 'vertical' },
    // Add more images as needed
];

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}>
            {images.map((image: Image, index: number) => (
                <SmartImage
                    key={index}
                    radius="m"
                    aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
                    src={image.src}
                    alt={image.alt}
                    className={styles.gridItem}
                />
            ))}
        </Masonry>
    );
}
