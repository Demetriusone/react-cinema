import React from "react";
// Styles

import { Image } from "./Thumbs.style";

const Thumbs = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumbs;
