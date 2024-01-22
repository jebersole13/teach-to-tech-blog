  import Header from './Components/Header';
  
  const posts= [
    {
      id:'0', 
      title:'Hello ',
     date: 'first',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ex laudantium exercitationem assumenda repellendus sunt soluta, eligendi ipsam possimus blanditiis reiciendis reprehenderit nihil consequatur odio aliquam explicabo asperiores. Molestiae, fuga! '


    },
     {
      id:'1', 
      title:'Seven',
      date: 'nothing',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus veritatis quis quae cumque excepturi! Maxime eveniet sit explicabo! Sequi eius sunt nisi maiores non blanditiis modi ea inventore voluptatum? '

      


    }, {
      id:'2', 
      title:'',
      date: '',
      content:''


    }
    ,
     {
      id:'3', 
      title:'',
      date: '',
      content:''


    }


    
  ]
function Blog() {

const printPost = posts.map(posts => 
  <li key={posts.id}>
<div className="postSection">
<title>{posts.title}</title>
<h5>{posts.date} </h5>
<p>{posts.content} </p>
</div>

  </li>


  )
  return (
    <div >
      <Header/>
      <h1>Blog</h1>
      <ul>{printPost} </ul>
    </div>
  )
}

export default Blog
