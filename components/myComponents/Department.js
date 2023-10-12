import React, { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import { useRecoilValue } from 'recoil';
import { productsState } from '../../recoil/atoms/home';
// function valuetext(value) {
//     return `${value}°C`;
// }
function Department() {

    const products = useRecoilValue(productsState)
    const [catagories, setCatagories] = useState([
        {
            id: 1,
            name: 'Electronics'
        },
        {
            id: 2,
            name: 'Clothes'
        },
        {
            id: 3,
            name: 'Furniture'
        },
    ])

    const [brands, setBrands] = useState([
        { id: 1, name: "BAJAJ" },
        { id: 2, name: "MAHINDRA" },
    ])


    const [value, setValue] = useState([0, 0]);

    const handleChange = (event, newValue) => {

        // console.log({ newValue })
        setValue(newValue);
    };


    useEffect(() => {

        let min = 0;
        let max = 0;

        products.forEach(product => {
            if (product.feedbackpoints > max) {
                max = product.feedbackpoints

            }
            if (product.feedbackpoints < min) {
                min = product.feedbackpoints
            }
            // console.log("min", max);
        })

        setValue([min, max])

        console.log({ value });
    }, [products])





    return (
        <div className='DepartmentLinks'>
            {/* <span className='title'>Department</span>
            <span><IoIosArrowDropleftCircle />Accessories & Supplies</span>
            <span><IoIosArrowDropleftCircle />Camera  & Phot </span><span><IoIosArrowDropleftCircle />Cell Phones & Accessories</span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span><span><IoIosArrowDropleftCircle />Accessories & </span>
            <div className='radio_text'>
                <span className='title'>Business Type</span>
                <input type='radio' name="radio" className='radiobtn'></input>
            </div> */}

            <div className='catagories_heading'>Catagories</div>
            <div className="catagoriesList">
                {catagories.map(c => <CatagoriesList catagorie={c} key={c.id} />)}
            </div>


            {/* <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            /> */}

            <div className="price_slider_wrapper">
                <div className='price_slider_heading'>Price</div>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={(val) => valuetext(val)}
                    // max={value}
                    max={1000}
                />
            </div>


            {/* //brands */}
            <div className="brands_wrapper">
                <div className='brands_heading'>Brand</div>
                {brands.map((brand, key) => <Brands brand={brand} key={key} />)}
            </div>

        </div>
    )
}

export default Department

const CatagoriesList = ({ catagorie, key }) => {
    return <div key={key}>
        <div className='catagories_checkbox'>
            <label htmlFor={key}>{catagorie.name}</label>
            <input type="checkbox" id={key} />
        </div>
    </div>
}


const Brands = ({ brand, key }) => {
    return <div className='brand_cont' key={key}>
        <label htmlFor={key}>{brand.name}</label>
        <input type="checkbox" id={key} />
    </div>
}