import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({ categories }) => {
    if(!categories.length) return <h3>Нету категорий</h3>
    return categories.map((data, index) => (
        <Link
          key={index}
          to={data === "All" ? "/" : "/category/" + data}
        >
          <div className="menu__box-aside__categories-item">{data}</div>
        </Link>
      ))
}

export default Categories
