import React from 'react'
import './LandPage.css'
function LandPage() {
    // <script type='text/javascript'>
    //             window.addEventListner("scroll",function () {
    //                 var header = document.querySelector("header");
    //                 header.classList.toggle("sticky", window.scrollY > 0);
    //             })
    //         </script>
    return (
        <div className='landPagevideo mt-0'>
            <video  src='finalcrypto.mp4' loop muted autoPlay/>
            
            <div className='landPageText'>
                <p className=''>
                An Easy to Use
Coinstake For Everyone
                </p>
                <span className='text-white'>Coinstake is a Crypto Staking and Farming Decentralized Platform. Coinstake is a very strong & Secure. Trading, Staking,Farming Mining all Working only CoinStake.</span>
            </div>
        </div>
    )
}

export default LandPage
