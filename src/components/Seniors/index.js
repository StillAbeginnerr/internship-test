import React from 'react'
import "./junior.css"
import star from './star.png'
import activity_icon from "./activities.svg";
import games_icon from "./games.svg";
import ribbon from "./ribbon.svg"
import ribbon_2 from "./ribbon-2.svg"
import star_white from "./white_star.png"
import certificate_icon from "./certificate.svg"
import discount_percentage from "./discount.svg"
import discount_percentage_white from "./white-discount.svg"

function Senior() {
  const name = ["Public Speaking - learn","Public Speaking - Discover","Public Speaking - Expert"];
  const description = "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities";
  const original_price = "10000";
  const discounted_price = "8000";
  const Session_value = 20;
  const activities = 3;
  const games = 3;
  const certificate = 2;
  const curriculum_points =[
    {
     description:"Understand the debate format of communications and it's structure"
    },
    {
      description:"Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal"
     },
     {
      description:"Learn to research and prepare for a debate"
     },
     {
      description:"Perform and compete with other students!"
     }
  ]
  return (
    <>
    <div className='container'>
    <div className='card'>
      <div className='card_body'>
        <div className='head-1'>
          <div className='discount'>
            <img className='discount_per' src={discount_percentage} alt='discount%'></img>
            <p className='per_off'>20%<br></br>&nbsp;off</p>
          </div>
          <div className='ribbon'>
          <div className='sessions'><img src={ribbon} className='img-ribbon' alt=""></img><p className='ribbon-txt'>{Session_value} Sessions</p></div>
          </div>
          <div className='sub-head'>
        <div className='title'>{name[0]}</div>
        <div className='rating'>
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star_white} alt="star"/>
          <p className='review-txt'><p>(50</p>&nbsp;<p>Reviews)</p></p>
          </div>
          </div>
      </div>
      <div className='head-2'>
        <div className='pitch-description'>{description}</div>
        <div className='Heading'>Students will Achieve</div>
        <div className='curriculum-outcome'> 
        <ul>
        {curriculum_points.map((list)=>(
           
<li>
  {list.description}
</li>
            
          ))}
          </ul>
        </div>
        <div className='link-to-fullplan'><a href='/fullplan'>View Full detailed Plan</a></div>
      </div>
      <hr></hr>
      <div className='head-3'>
      <div className='sub-head-1'>
        <div className='total-price'>₹{discounted_price}</div>
        <div className='price-per-class'>₹200</div>
        <div className='per-class'>per class</div>
        </div>
        <div className='sub-head-2'>
          <div className='discount'>₹{original_price-discounted_price}</div>
        <div className='note'>We'll schedule the slots as per your convenience</div>
        </div>
        <div className='sub-head-3'>
          <div className='activities'><img src={activity_icon} alt=''></img>{activities} Activities</div>
          <div className='games'><img src={games_icon} alt=''></img>{games} Games</div>
          <div className='certificate'><img src={certificate_icon} alt=''></img>{certificate} Certificate</div>
        </div>
        <button className='buy-course-btn'>Buy Course</button>
      </div>

      </div>
    </div>
    <div className='card-2'>
      <div className='card_body'>
        <div className='head-1' style={{backgroundColor:"#003F5C"}}>
        <div className='discount'>
            <img className='discount_per' src={discount_percentage_white} alt='discount%'></img>
            <p className='per_off'>20%<br></br>&nbsp;off</p>
          </div>
          <div className='ribbon'>
          <div className='sessions'><img src={ribbon_2} className='img-ribbon' alt=""></img><p className='ribbon-txt' style={{color:"black"}}>{Session_value} Sessions</p></div>
          </div>
          <div className='sub-head'>
        <div className='title' style={{color:"#FFFFFF"}}>{name[1]}</div>
        <div className='rating'>
        <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star_white} alt="star"/>
          <p className='review-txt' style={{color:'white'}}><p>(50</p>&nbsp;<p>Reviews)</p></p>
          </div>
          </div>
      </div>
      <div className='head-2'>
        <div className='pitch-description'>{description}</div>
        <div className='Heading'>Students will Achieve</div>
        <div className='curriculum-outcome'>
        <ul>
        {curriculum_points.map((list)=>(
           
<li>
  {list.description}
</li>
            
          ))}
          </ul>
        </div>
        <div className='link-to-fullplan'><a href='/fullplan'>View Full detailed Plan</a></div>
      </div>
      <hr></hr>
      <div className='head-3'>
      <div className='sub-head-1'>
        <div className='total-price'>₹{discounted_price}</div>
        <div className='price-per-class'>₹200</div>
        <div className='per-class'>per class</div>
        </div>
        <div className='sub-head-2'>
          <div className='discount'>₹{original_price-discounted_price}</div>
        <div className='note'>We'll schedule the slots as per your convenience</div>
        </div>
        <div className='sub-head-3'>
        <div className='activities'><img src={activity_icon} alt=''></img>{activities} Activities</div>
          <div className='games'><img src={games_icon} alt=''></img>{games} Games</div>
          <div className='certificate'><img src={certificate_icon} alt=''></img>{certificate} Certificate</div>
        </div>
        <button className='buy-course-btn'>Buy Course</button>
      </div>

      </div>
    </div>
    <div className='card-3'>
      <div className='card_body'>
        <div className='head-1'>
        <div className='discount'>
            <img className='discount_per' src={discount_percentage} alt='discount%'></img>
            <p className='per_off'>20%<br></br>&nbsp;off</p>
          </div>
          <div className='ribbon'>
          <div className='sessions'><img src={ribbon} className='img-ribbon' alt=""></img><p className='ribbon-txt'>{Session_value} Sessions</p></div>
          </div>
          <div className='sub-head'>
        <div className='title'>{name[2]}</div>
        <div className='rating'>
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star} alt="star"/>
          &nbsp;
          <img src={star_white} alt="star"/>
          <p className='review-txt' style={{color:'#006292'}}><p>(50</p>&nbsp;<p>Reviews)</p></p>
          </div>
          </div>
      </div>
      <div className='head-2'>
        <div className='pitch-description'>{description}</div>
        <div className='Heading'>Students will Achieve</div>
        <div className='curriculum-outcome'>
        <ul>
        {curriculum_points.map((list)=>(
           
<li>
  {list.description}
</li>
            
          ))}
          </ul>
        </div>
        <div className='link-to-fullplan'><a href='/fullplan'>View Full detailed Plan</a></div>
      </div>
      <hr></hr>
      <div className='head-3'>
      <div className='sub-head-1'>
        <div className='total-price'>₹{discounted_price}</div>
        <div className='price-per-class'>₹200</div>
        <div className='per-class'>per class</div>
        </div>
        <div className='sub-head-2'>
          <div className='discount'>₹{original_price-discounted_price}</div>
        <div className='note'>We'll schedule the slots as per your convenience</div>
        </div>
        <div className='sub-head-3'>
        <div className='activities'><img src={activity_icon} alt=''></img>{activities}<p className='line-pos'>Activities</p></div>
          <div className='games'><img src={games_icon} alt=''></img>{games}<p className='line-pos'>Games</p></div>
          <div className='certificate'><img src={certificate_icon} alt=''></img>{certificate}<p className='line-pos'>Certificate</p></div>
        </div>
        <div className='Buy-btn'>
          <button className='buy-course-btn'>Buy Course</button>
        </div>
      </div>

      </div>
    </div>
    </div>
</>
    
  )
}

export default Senior