  
  
  const posts= [
    {
      id:'0', 
      title:'From one language to another ',
      image:'',
     date: '2024-2-7',
      content:' Teaching languages is fun. It is also exhausting. It is also, generally, underpaid.  I can say that with full confidence, as I have been struggling to make ends meet as a language teacher for the last ten year. Additionally, language teachers tend to be undervalued. '


    }

    
  ]
function Blog() {

const printPost = posts.map(posts => 
  <li key={posts.id}>
<div className="postSection">
<title>{posts.title}</title>
<img src="{projects.image}" alt="image" />
<h5>{posts.date} </h5>
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
