
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/ui-elements/nav-bar/navbar';
import Checkbox from '../../components/inputs/checkbox';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoriesState } from '../../recoil/atoms/home';
import FilteredCategories from '../../components/catagories/filteredCategories';
import { filter } from 'lodash';


const Index = () => {
    const [checkedBrands, setCheckedBrands] = useState([]);
    const [brands, setBrands] = useState([]);
    const items = [
        { id: 1, brand: "apple", imgUrl: '/images/catagories/apple/mobile.png', price: "95,000", strikethroughPrice: "1,00,000", itemName: "Apple Iphone 13 pro max (Sierra Blue)" },
        { id: 2, brand: "apple", imgUrl: '/images/catagories/apple/apple1.png', price: "7,000", strikethroughPrice: "4,000", itemName: "Apple iPhone 7 (Black)" },
        { id: 3, brand: "apple", imgUrl: '/images/catagories/apple/apple2.png', price: "45,000", strikethroughPrice: "52,000", itemName: "Apple Iphone 11 pro max (Gold)" },
        { id: 4, brand: "apple", imgUrl: '/images/catagories/apple/apple3.png', price: "40,000", strikethroughPrice: "44,000", itemName: "Apple Iphone 11 pro (Black)" },
        { id: 5, brand: "apple", imgUrl: '/images/catagories/apple/apple4.png', price: "40,000", strikethroughPrice: "44,000", itemName: "Apple Iphone 11 pro (Silver)" },
        { id: 6, brand: "apple", imgUrl: '/images/catagories/apple/apple5.png', price: "37,000", strikethroughPrice: "40,000", itemName: "Apple Iphone 11 (Red)" },
        { id: 7, brand: "apple", imgUrl: '/images/catagories/apple/apple6.png', price: "50,000", strikethroughPrice: "55,000", itemName: "Apple Iphone 12 (Blue)" },
        { id: 8, brand: "apple", imgUrl: '/images/catagories/apple/apple7.png', price: "80,000", strikethroughPrice: "87,000", itemName: "Apple Iphone 12 pro max (Sierra Blue)" },
        { id: 9, brand: "apple", imgUrl: '/images/catagories/apple/apple8.png', price: "80,000", strikethroughPrice: "87,000", itemName: "Apple Iphone 12 pro max (White)" },
        { id: 10, brand: "apple", imgUrl: '/images/catagories/apple/apple9.png', price: "37,000", strikethroughPrice: "40,000", itemName: "Apple Iphone 11 (Light Red)" },

        { id: 11, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung1.jpg', price: "95,000", strikethroughPrice: "1,00,000", itemName: "Samsung Galaxy A10s" },
        { id: 12, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung2.jpg', price: "37,000", strikethroughPrice: "40,000", itemName: "Samsung Galaxy A50" },
        { id: 13, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung3.png', price: "45,000", strikethroughPrice: "52,000", itemName: "Samsung Galaxy J6" },
        { id: 14, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung4.png', price: "40,000", strikethroughPrice: "44,000", itemName: "Samsung Galaxy J7 Max" },
        { id: 15, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung5.png', price: "40,000", strikethroughPrice: "44,000", itemName: "Samsung Galaxy A50" },
        { id: 16, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung6.png', price: "37,000", strikethroughPrice: "40,000", itemName: "Samsung Galaxy J8" },
        { id: 17, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung7.png', price: "50,000", strikethroughPrice: "55,000", itemName: "Samsung Galaxy M30" },
        { id: 18, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung8.png', price: "80,000", strikethroughPrice: "87,000", itemName: "Samsung Galaxy J6" },
        { id: 19, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung9.jpg', price: "80,000", strikethroughPrice: "87,000", itemName: "Samsung Galaxy M30s" },
        { id: 20, brand: "samsung", imgUrl: '/images/catagories/samsung/samsung10.png', price: "37,000", strikethroughPrice: "40,000", itemName: " Samsung Galaxy A30" },

        { id: 21, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus1.png', price: "95,000", strikethroughPrice: "1,00,000", itemName: "OnePlus 6T" },
        { id: 22, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus2.png', price: "37,000", strikethroughPrice: "40,000", itemName: " OnePlus 5" },
        { id: 23, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus3.jpg', price: "45,000", strikethroughPrice: "52,000", itemName: "OnePlus 3T" },
        { id: 24, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus4.png', price: "40,000", strikethroughPrice: "44,000", itemName: "OnePlus 6" },
        { id: 25, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus5.png', price: "40,000", strikethroughPrice: "44,000", itemName: "OnePlus 5T" },
        { id: 26, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus6.jpg', price: "37,000", strikethroughPrice: "40,000", itemName: " OnePlus 9 Pro 5G" },
        { id: 27, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus7.jpg', price: "50,000", strikethroughPrice: "55,000", itemName: "OnePlus Nord CE 5G" },
        { id: 28, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus8.jpg', price: "80,000", strikethroughPrice: "87,000", itemName: "OnePlus 10 Pro 5G" },
        { id: 29, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus9.jpg', price: "80,000", strikethroughPrice: "87,000", itemName: "OnePlus Nord 2T 5G" },
        { id: 30, brand: "oneplus", imgUrl: '/images/catagories/oneplus/oneplus10.jpg', price: "37,000", strikethroughPrice: "40,000", itemName: "OnePlus 11R 5G" },
    ];

    const checkArray = (arr, item) => {
        return arr.some((it) => it === item);
    };

    useEffect(() => {
        const uniqueBrands = [...new Set(items.map((item) => item.brand))];
        setBrands(uniqueBrands);
    }, []);
    const handleBrandChange = (brandName) => {
        if (checkedBrands.includes(brandName)) {

            setCheckedBrands(checkedBrands.filter((brand) => brand !== brandName));
        } else {

            setCheckedBrands([brandName]);
        }
    };

    const filteredItems = items.filter((item) => {
        if (checkedBrands.length === 0 || checkedBrands.includes(item.brand)) {
            return true;
        }
        return false;
    });

    const categoryValue = useRecoilValue(categoriesState);

    return (
        <div className="catagory_page_wrapper">
            <Navbar />
            <div className="catagory_container">
                <div className="left_side">
                    <div className="heading bold_text">Mobile Phone Category</div>
                    <div className="big_check">
                        <span>Top Mobile Brands</span>
                    </div>
                    <div className="small_check">
                        {brands.length > 0 && brands.map((brand) => (<Checkbox key={brand} type="checkbox" label={brand} name={brand} handleChange={() => handleBrandChange(brand)} value={checkedBrands.includes(brand)} />))}
                    </div>
                </div>
                <div className="right_side">
                    {filteredItems.map((item) => (<FilteredCategories key={item.id} item={item} />))}
                </div>
            </div>
        </div>
    );
};

export default Index;
