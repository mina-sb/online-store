import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import { useLocation } from "react-router-dom";
import Products from "../Products/Products";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import {
  FaRegHeart,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
} from "react-icons/fa";

import "./Detail.scss";

const Detail = () => {
  const { navColor } = useContext(AppContext);
  const [navBg, setNavBg] = navColor;
  const [tab, setTab] = useState(0);

  const location = useLocation();
  if (location.pathname === "/detail") {
    setNavBg(false);
  }

  return (
    <div className="detail">
      <div className="bread-crumb">
        <span>Home</span>
        <span>></span>
        <span>Tall Vase in Midnight</span>
        <span> ></span>
        <span> 254</span>
      </div>
      <div className="product-container">
        <div className="product-img">
          <img src="https://cdn.lorem.space/images/furniture/.cache/640x480/paul-hanaoka-JUJ5osLgXpQ-unsplash.jpg" />
        </div>
        <div className="product-info">
          <h2>Tall Vase In Midnight</h2>
          <h3>$225.00 USD</h3>
          <hr className="hr" />
          <p>
            Made up of a small team of potters and glazers, the Clay Studio
            forms and creates anew, continuously, and together. Designing and
            making is fluid and open, leaving room for creativity, changing our
            mind, introducing new techniques, and limited, one-of-a-kind pieces.
          </p>
          <div className="add-to-cart">
            <a className="add-button">ADD TO CART</a>
            <div className="counter">
              2
              <div className="add-remove">
                <VscTriangleUp />
                <VscTriangleDown />
              </div>
            </div>
          </div>
          <div className="add-to-wish">
            <FaRegHeart className="heart" />
            <span>ADD TO WISHLIST</span>
          </div>
          <div className="categories">
            <span className="cat-title">Categories :</span>
            <span className="cat-links">Hot Deal,</span>
            <span className="cat-links"> New,</span>
            <span className="cat-links"> New Arrivals</span>
          </div>
          <div className="share">
            <span className="share-title">SHARE :</span>
            <FaTwitter className="share-btns" />
            <FaFacebookF className="share-btns" />
            <FaPinterestP className="share-btns" />
          </div>
        </div>
      </div>
      <div className="more-info">
        <hr className="hr" />
        <div className="tabs">
          <ul>
            <li className={tab == 0 ? "active" : ""} onClick={() => setTab(0)}>
              <a>DESCRIPTION</a>
            </li>
            <li className={tab == 1 ? "active" : ""} onClick={() => setTab(1)}>
              <a>ADDITIONAL INFORMATION</a>
            </li>
            <li className={tab == 2 ? "active" : ""} onClick={() => setTab(2)}>
              <a>REVIEW</a>
            </li>
          </ul>
          <div className="tab-container">
            <div className={`discription ${tab == 0 ? "show" : "hide"}`}>
              <p>
                Originally designed by Edith Heath in the 1980s for our Plaza
                line. Simple, modern, and with an ergonomic flare — this
                inviting, handless cup is great for coffee and tea. Pair it with
                our Large Teapot for a one-of-a-kind gift that’s guaranteed to
                win over tea lovers everywhere. Expect lovely variation in our
                Redwood glaze.
              </p>
              <div className="product-container">
                <div className="product-img">
                  <img src="https://cdn.lorem.space/images/furniture/.cache/640x480/paul-hanaoka-JUJ5osLgXpQ-unsplash.jpg" />
                </div>
                <div className="product-info margin-top">
                  <h3 className="discription-title">
                    Beautiful Stoneware Tall Vase In Midnight
                  </h3>
                  <p>
                    Originally designed by Edith Heath in the 1980s for our
                    Plaza line. Simple, modern, and with an ergonomic flare —
                    this inviting, handless cup is great for coffee and tea.
                    Pair it with our Large Teapot for a one-of-a-kind gift
                    that’s guaranteed to win over tea lovers everywhere. Expect
                    lovely variation in our Redwood glaze.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="additional-info"
              className={`additional-info ${tab == 1 ? "show" : "hide"}`}
            >
              <p>
                Plants has no restrictions on the length of manuscripts,
                provided that the text is concise and comprehensive. Full
                experimental details must be provided so that the results can be
                reproduced. Plants requires that authors publish all
                experimental controls and make full datasets available where
                possible (see the guidelines on Supplementary Materials and
                references to unpublished data).
              </p>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
      <div className="latest-products">
        <h2 className="latest-products-title">LATEST PRODUCTS</h2>
        <Products limit={4} />
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Detail;
