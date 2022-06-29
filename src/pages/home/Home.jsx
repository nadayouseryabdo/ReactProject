import './home.css'
import pic from '../../assets/images/mypic.jpeg'
function Home() {

    return (
        <>
            <div className="homeComponent justify-content-between">
                <div className='col-7 py-5'>
                <p>My Name is:</p>
                <h3 className='text-success'>Nada Yosri Abdo</h3>
                <p>Front End and cross-platform Developer</p>
                <p>Junior front end developer having technical background in front-end and cross-platform mobile app development,graduated from iti 3 months diploma and this is my portfolio using React.</p>
                </div>
                <img src={pic} className='w-25' alt="" />
            </div>
        </>
    );
}
export default Home;