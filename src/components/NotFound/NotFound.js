import { useNavigate } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='page'>
            <div className='notfound-page'>
                <div>
                <h1>404</h1>
                <h3 style={{color:'#294F75'}}>PAGE NOT FOUND!</h3>
                <p>Sorry, but the page you are looking for has not been found on our server.</p>
                </div>
                <button className='btn404' onClick={()=>navigate('/')}>Return Home</button>
            </div>
        </div>
    );
};

export default NotFound;