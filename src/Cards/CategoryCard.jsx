import React from 'react' 
import {Routes,Route,Link} from 'react-router-dom'    
import '../css/CategoryCard.css'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

const CategoryCard = ({imgSrc,categoryName,catInfo,path}) => {
  return (

        <Link className='category-card-container' id='cat-link' to={path}>
        <div className="cat-img-container">
            <img className='cat-img' src={imgSrc} alt={categoryName} />
        </div>

        <div className="cat-info-container">
            <h3 className='cat-name'>{categoryName}</h3>
            <h4 className='cat-info'>{catInfo}</h4>
        </div>
        </Link>
        

  )
}

export default CategoryCard