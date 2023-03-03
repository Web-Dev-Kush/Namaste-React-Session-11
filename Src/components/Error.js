import { useRouteError } from 'react-router-dom';
import oops from '../assets/img/Oops1.png';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!</h1>
            <h2>Some thing went wrong....</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
            <img src={oops} alt="Oops"/>

        </div>
    )
}

export default Error;