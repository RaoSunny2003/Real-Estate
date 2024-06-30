import React from "react";
import "./Filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            name="city"
            placeholder="City Location"
            id="city"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="but">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min. Price</label>
          <input
            type="number"
            name="minPrice"
            placeholder="any"
            id="minPrice"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max. Price</label>
          <input
            type="number"
            name="maxPrice"
            placeholder="any"
            id="maxPrice"
          />
        </div>
        <div className="item">
          <label htmlFor="bedRoom">Bedroom</label>
          <input type="number" name="bedRoom" placeholder="any" id="bedRoom" />
        </div>

        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
