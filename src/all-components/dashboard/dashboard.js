import { useSelector } from "react-redux"
import './dashboard.css';

export default ()=>{

    let products = useSelector(function(store){

        let userID = store.userSection.currentUser.id;

        return store.productSection.products.filter(product=>product.userKiId == userID);
    });

    



    return <div>
        <table>
            {
                products.map(function(product){
                    return <tr>
                        <td><img className="product-thumb" src={product.picture} /></td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                    </tr>
                })
            }
        </table>
        <h1>yeh dashboard h </h1>
    </div>

}