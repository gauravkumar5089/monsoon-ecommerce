import styled from "styled-components";

import img1 from "../images/4.jpg";
import img2 from "../images/5.jpg";
import img3 from "../images/6.jpg";

const Img = styled.img`
  height: 75vh;
  width: 100%;
  object-fit: cover;
`;

export default function carousel() {
  return (
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Img src={img1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <Img src={img2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <Img src={img3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      ></button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      ></button>
    </div>
  );
}
