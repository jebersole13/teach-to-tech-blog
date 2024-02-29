import {Link} from 'react-router-dom'
import { ExternalLink } from 'lucide-react';
function About() {
  return (
    <div >
      <h1 className='headline'>About</h1>
      <img src="snowpic.jpg" alt="chewbubblepeg" />
      <p> Jon Ebersole is a web developer and English teahcer. As the title of the blog implies, he is still learning a lot about web development, despite working in the industry, like everyone else. Unlike everyone else, he has been a full time language educator for the last ten years. </p>
     <p>Take a look at the links below for more on him. </p> 

      <br />
      <br />
      <br />

   
      <Link to='https://portfolio-site-bay-chi.vercel.app/'>   <ExternalLink />JCE Productions</Link>

      
    </div>
  )
}

export default About
