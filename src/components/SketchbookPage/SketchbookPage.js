import React from 'react';
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import styles from './SketchbookPage.module.css';

import img1 from "../../assets/sketches/candle.jpeg"
import img2 from "../../assets/sketches/coco.jpeg"
import img3 from "../../assets/sketches/indura.jpeg"
import img4 from "../../assets/sketches/merendon.jpeg"
import img5 from "../../assets/sketches/window.jpeg"
import img6 from "../../assets/sketches/niagara.jpeg"
import img7 from "../../assets/sketches/egg.jpeg"
import img8 from "../../assets/sketches/blueberry.jpeg"
import img9 from "../../assets/sketches/ring.jpeg"
import img10 from "../../assets/sketches/ball.jpeg"
import img11 from "../../assets/sketches/stairs.JPG"
import img12 from "../../assets/sketches/georgia.JPG"
import img13 from "../../assets/sketches/trees.JPG"
import img14 from "../../assets/sketches/dandelions.JPG"
import img15 from "../../assets/sketches/avocados.JPG"
import img16 from "../../assets/sketches/groceries.JPG"


const photos = [
  { src: img16, alt: "groceries", width: 2048, height: 2048 },
  { src: img1, alt: "candle", width: 1586, height: 1982 },
  { src: img2, alt: "coco", width: 768, height: 966 },
  { src: img3, alt: "indura", width: 360, height: 480 },
  { src: img4, alt: "merendon", width: 360, height: 450 },
  { src: img5, alt: "window", width: 1586, height: 1982 },
  { src: img6, alt: "niagara", width: 1054, height: 745 },
  { src: img7, alt: "egg", width: 1535, height: 2048 },
  // { src: img8, alt: "blueberry", width: 1535, height: 2048 },
  { src: img9, alt: "ring", width: 1535, height: 2048 },
  { src: img10, alt: "ball", width: 1535, height: 2048 },
  { src: img11, alt: "stairs", width: 2048, height: 2732 }, 
  // { src: img12, alt: "georgia", width: 2048, height: 2732 }, 
  { src: img13, alt: "trees", width: 2048, height: 2732 }, 
  //{ src: img14, alt: "dandelions", width: 2048, height: 2732 }, 
  { src: img15, alt: "avocados", width: 2048, height: 2732 }
]

function SketchbookPage() {
  return (
    <div className={styles.sketchbookPage}>
      <p>Here are some drawings that I made on my iPad ever since I started learning more about color theory. The majority of these are made on Autodesk Sketchbook with the Pastel Chalk brush. </p>
      <ColumnsPhotoAlbum photos={photos} columns={3}
       />;
    </div>
  );
}

export default SketchbookPage;