import React from "react";

const SideMenu = () => {
  return (
    <div className="header_burger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li>
          <a class="menu__item" href="#">
            Главная
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Проекты
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Команда
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Блог
          </a>
        </li>
        <li>
          <a class="menu__item" href="#">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
