import Card from 'react-bootstrap/Card';
import {TbWritingSign} from 'react-icons/tb'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BiTimer} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';


function Courseitem({image , title , desc , readingTime , category , writer , id}){
    return(
        <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className='fs-5'>{category}</p>
        <p className='fs-5'> <TbWritingSign />  نویسنده: {writer}</p>
        <Card.Text>
          {desc}
          <p>  <BiTimer />  :مدت خواندن {readingTime} دقیقه</p>
        </Card.Text>
        <NavLink to={`/article/${id}`}>مشاهده مقاله <BsFillArrowLeftCircleFill/></NavLink>
      </Card.Body>
    </Card>
    )
}

export default Courseitem