import SearchBar from "../../Components/searchBar/SearchBar";
import "./home.scss";

export default function HomePage() {
  return (
    <>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus suscipit placeat, unde sit earum soluta voluptatum aut
            consequuntur! Velit, itaque hic consequuntur eveniet ipsum doloribus
            quis possimus molestias voluptatem.
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </>
  );
}
