import  App  from "./App";
import  ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { meraStore } from "./store/store";
// import {meraStore} from './store/store'

function Some(){
    return <div>some code in here</div>
}

ReactDOM.render(<div>
    <Provider store={meraStore}>
        <App />
    </Provider>
</div>, document.getElementById('root') );

// ReactDOM.render(<h1>yeh 2nd wala</h1>, document.getElementById('root2') );



