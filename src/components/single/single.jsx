import { Link } from "react-router-dom";
import singleImg from "../../assets/images/main/single.jpg";
export default function Single() {
  return (
    <div className="single">
      <div className="container">
        <div className="single__wrapper">
          <p className="single__subtitle">Релизы</p>
          <h1 className="single__title">
            Последние опубликованные треки артистов
          </h1>
          <div className="single__btn">
            <button className="single__btn-active">Синглы</button>
            <Link to="/album">
              <button className="single__btn-inactive">Альбомы</button>
            </Link>
          </div>
          <ul className="single__list">
            <li className="single__list-item">
              <div className="single__list-img">
                <img src={singleImg} alt="singleImg" />
              </div>
              <Link to="#" className="single__list-title">
                Сингл
              </Link>
              <Link to="#" className="single__list-name">
                Название трека афывоалф двоыалд фоыва лфвоыа дфлвоыа
              </Link>
              <Link to="#" className="single__list-singer">
                Nickname
              </Link>
            </li>
            <li className="single__list-item">
              <div className="single__list-img">
                <img src={singleImg} alt="singleImg" />
              </div>
              <Link to="#" className="single__list-title">
                Сингл
              </Link>
              <Link to="#" className="single__list-name">
                Название трека афывоалф двоыалд фоыва лфвоыа дфлвоыа
              </Link>
              <Link to="#" className="single__list-singer">
                Nickname
              </Link>
            </li>
            <li className="single__list-item">
              <div className="single__list-img">
                <img src={singleImg} alt="singleImg" />
              </div>
              <Link to="#" className="single__list-title">
                Сингл
              </Link>
              <Link to="#" className="single__list-name">
                Название трека афывоалф двоыалд фоыва лфвоыа дфлвоыа
              </Link>
              <Link to="#" className="single__list-singer">
                Nickname
              </Link>
            </li>
            <li className="single__list-item">
              <div className="single__list-img">
                <img src={singleImg} alt="singleImg" />
              </div>
              <Link to="#" className="single__list-title">
                Сингл
              </Link>
              <Link to="#" className="single__list-name">
                Название трека афывоалф двоыалд фоыва лфвоыа дфлвоыа
              </Link>
              <Link to="#" className="single__list-singer">
                Nickname
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
