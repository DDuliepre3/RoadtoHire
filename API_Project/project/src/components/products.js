import React from 'react';
// import api from '../api';
// import Products from '../productList';


const Products = (props)=>{

    // products = this.props.products;
    // let products = api.getProducts();
    // console.log(products);
    
    return(

        <div>
            <h1 className="products--header">Products</h1>
            <div className="productsPage">
            
                <form className="productsPage--filter">
                    <div className="filter--consoles">
                        <h2>Sort By Consoles:</h2>

                        <label>PlayStation
                        <input onClick={()=>props.handleChange('playstation')} className="gameConsole" type="radio" name="playstation" value="playstation"/>
                        </label>

                        <label>Xbox
                        <input onClick={()=>props.handleChange('xbox')}className="gameConsole" type="radio" name="xbox" value="xbox"  />
                        </label>

                        <label>Nintendo
                        <input onClick={()=>props.handleChange('nintendo')} className="gameConsole" type="radio" name="nintendo" value="nintendo" />
                        </label>

                        <button onClick={()=>props.handleChange('reset')} type='button' >Reset</button>
                    </div>
                </form>

                <div className="productsCard--container">
                    {props.shownGameConsoles.map(p => {return (
                        <div className="productsCard">
                            <div>
                                <img src={p.url} alt={p.caption} />
                                <h2>{p.title}</h2>
                                <h3>${p.price}</h3>
                                <p className="product--category">{p.productCategory}</p>
                                <p className="product--creator">Created by: {p.creator}</p>
                                <div className="line"></div>
                                <p className="product--description">{p.description}</p>
                                <p className="product--availability">{p.availability}</p>
                            </div>
                        </div>
                    )}) }
                </div>
            </div>
        </div>
    );
}

export default Products;