import React from 'react'
import { useRouter } from 'next/dist/client/router';
import Watches from './Watches';
import { useRecoilValue } from 'recoil';
import { productsState } from '../../recoil/atoms/home';

function Categories() {


    const products = useRecoilValue(productsState)
    const router = useRouter();

    const handleRouteCart = () => {
        router.push("/cart");
    }
    const Item = ({ item }) => {
        return (
            <div className='electronic_wrapper'>
                <div className='electronicitem_img' onClick={handleRouteCart}>
                    <img src={item.image} alt='' />
                    <div className='overlapText'>
                        {item.overlap}
                    </div>

                </div>
                <div className='blog_footer'>


                    <div className='desc'>
                        {item.desc}
                    </div>
                    <div className='feedback'>
                        <img src={item.feedback} alt='' />
                        <span>{item.feedbackpoints}</span>
                    </div></div>

            </div>
        )
    }
    return (
        <div>
            <div className='heading'>
                <span className='title'>Electronics</span>
                <span>Shop home entertainment,TVs,home audio,headphones,cameras,accessories and more</span>
                <div className='results'>
                    1-12 of over 70,000 results for Electronics
                </div>
            </div>

            <div className='electronic_items'>
                {products?.map((item) => <Item item={item} />)}
            </div>
        </div>
    )
}

export default Categories
