import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category,setCategory}) => {
  return (
    <div className='menu' id='menu'>
        <h1>Browse through our menu options.</h1>
        <p className='menuText'>Make a choice from our menu featuring very palatable line-up of dishes</p>
        <div className="menuList">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menuListItem">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Menu