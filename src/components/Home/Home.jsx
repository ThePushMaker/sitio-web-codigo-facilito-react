import './Home.css'
import TheOffice from '../../assets/the-office.jpg'

const Home = () => {

  return(
    <>
    <h1>- The Office -</h1>
    <img className='poster' src={TheOffice} alt="the office"/>
    <div className='info-serie'>
      <h2>The office es una serie de televisión estadounidense</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, modi obcaecati. Rerum cum esse, distinctio possimus maxime nesciunt voluptate ipsam cumque tenetur itaque labore eos sunt quis voluptatum vel illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora cum illum? Corporis explicabo numquam corrupti aliquid, iusto sed modi ullam harum rerum, ab reprehenderit sint. Harum assumenda repellat alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sit commodi amet maxime enim, recusandae, voluptates iure dignissimos expedita officia blanditiis sequi ex illum asperiores rem placeat saepe omnis qui?</p>
    </div>
    </>
  );
}

export default Home;