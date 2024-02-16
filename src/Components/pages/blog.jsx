  
  
  const posts= [
    {
      id:'0', 
      title:'From one language to another ',
      image:'apple.jpg',
     date: '2024-2-7',
      content:' Teaching languages is fun. It is also exhausting. It is also, generally, underpaid.  I can say that with full confidence, as I have been struggling to make ends meet as a language teacher for the last ten year. Additionally, language teachers tend to be undervalued. But this is not a procolmation against becoming a teacher, or even a language teacher. I am mererly writing from my experience and the side of the profession I have found myself in, that being an English teacher in Japan. Around two years ago, admist the fear of the pandemic, the issues of being stuck, and other personal goings on, I found myself the victim of work harrassment and abuse. Not a fun time when you are a teacher trying to support others. At the time, I felt I was up against a wall and genuinely thought I had no choice but to continue to take the harassment. Without going into details, for the sake of my health in every possible way, I left the situation I was in for one that was slightly more favorable. Further, I decided I needed a new start in a different field. This did not mean leaving teaching altogether, but it did mean going in new direction. Though I am no fan of this digital transformation many things have taken, after a lot of searching and false starts, I decided to go into web development. What appealed to me as not only someone who is a life long learner, but also a language edcuator was the prospect of picking up new languages. This new, fresh way to look at your work, through a very familar lense excited me. Though I will admit, it was very daunting, and still to this day have a lot of things to learn, I am confident in my skills, and this very blog you are reading is evidence of that. So, stay tuned and watch this space. Things will change, and hopefully, we will all learn a thing or two.'


    },

    {

      id:'1',
      title: 'No time like the present',
      date:'2024-2-16',
      content:'Don\'t wait. Do it now '
    }

    
  ]
function Blog() {

const printPost = posts.map(posts => 
  <li key={posts.id}>
<div className="postSection">
<title>{posts.title}</title>
<img src={posts.image} alt="image" />
<h4>{posts.date} </h4>
<p>{posts.content} </p>
</div>

  </li>


  )
  return (
    <div >
      <h1>Blog</h1>
      <ul>{printPost} </ul>
    </div>
  )
}

export default Blog
