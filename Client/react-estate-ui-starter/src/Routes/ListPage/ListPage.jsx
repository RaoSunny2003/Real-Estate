import React from "react";
import "./ListPage.scss";
import { listData } from "../../Lib/dummyData";
import Filter from "../../Components/Filter/Filter";
import Card from "../../Components/Card/Card";

export default function ListPage() {
  const data = listData;
  return (
    <>
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mapContainer">Map</div>
      </div>
    </>
  );
}
