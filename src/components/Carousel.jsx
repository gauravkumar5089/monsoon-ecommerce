export default function carousel() {
  return (
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item bg-success active">
          Hello World
          {/* <img src="././images/DSC00243.jpg" class="d-block w-100" alt="..." /> */}
        </div>
        <div class="carousel-item bg-warning d-block w-100">
          Hello World
          {/* <img src="..." class="d-block w-100" alt="..." /> */}
        </div>
        <div class="carousel-item bg-danger d-block w-100">
          Hello World
          {/* <img src="..." class="d-block w-100" alt="..." /> */}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}
