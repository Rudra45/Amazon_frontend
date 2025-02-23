import React from 'react';
import './homeBanner.css';
import homeBannerItemProduct from '../../../homeProduct.json';
const Homebanner = () => {
    return (
        <div className='homeBanner'>
            <img className='homeBannerImg' src='https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg' />
            <div className='grayBackgroundHomeBanner'></div>

            <div className="homeBannerItemDiv" style={{ padding: '70px' }} >
                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div key={ind} className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, subInd) => {
                                            return (
                                                <div key={subInd} className="imgBannerHomeDiv">
                                                    <img className='imgBannerHomeDivImg' src={it.url} alt={it.name} />
                                                    <div className="imgBannerImgName">{it.name}</div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div className="seeMoreHomeBanner">See More</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Homebanner;
