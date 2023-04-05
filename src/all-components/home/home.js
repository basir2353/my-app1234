import { useSelector } from "react-redux";
import Card from './../card/card';
export default ()=>{

    let mereAds = useSelector(function(store){
        return store.productSection.products
    })

    return <div className="flex">
        {
            mereAds.reverse().map(function(ad){
                return <Card myAd={ad} />
            })
        }
    </div>
        

}