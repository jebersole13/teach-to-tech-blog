import {Link} from 'react-router-dom'
import { ExternalLink } from 'lucide-react';
function About() {
  return (
    <div >
      <h1 className='headline'>About</h1>
      <img src="snowpic.jpg" alt="chewbubblepeg" />
      <p> Jon Ebersole is a teacher and web developer. As the title of the blog implies, he is still learning a lot about web development, despite working in the industry, like everyone else. Unlike everyone else, he has been a full time language educator for the last ten years. </p>
      Take a look at the links below for more on him. 

      <br />
      <br />
      <br />
      <ExternalLink><Link to='https://portfolio-site-bay-chi.vercel.app/'>JCE Productions</Link></ExternalLink>

      <p></p>
    </div>
  )
}

export default About
