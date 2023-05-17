import { React } from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4" href="#top">
            COZ-Shopping
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class=" navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#top">
                  000님, 안녕하세요!
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#top">
                  🎁 상품리스트 페이지
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#top">
                  ⭐️ 북마크 페이지
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
export default Navbar;
