import axios from "axios"
import { useEffect , useState  } from "react"
import { Col, Container, Row ,Card , Button } from "react-bootstrap"
import { NavLink, useParams } from "react-router-dom" 
import {TbWritingSign} from 'react-icons/tb'
import {BiTimer} from 'react-icons/bi'
import {MdAutoDelete} from 'react-icons/md'
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"



function Articlee(){
    const param2 = useParams().articleid
    const[datas , setDatas]= useState({})
    const usenavig = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/articles/${param2}`)
        .then(res => setDatas(res.data))
    },[])

    const Handlert = ()=>{
        Swal.fire({
            title: 'ایا مطمئنی که میخوای حذف کنی؟',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'اره حذف کن',
            canselButtonText: 'نه ولش کن'
          }).then((res)=>{
            if(res.sConfirmed){
                Swal.fire(
                    'حذف شد!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
            axios.delete(`http://localhost:8000/articles/${param2}`)
            usenavig("/")
          })
        
    }
    return(
        <Container className="d-flex justify-content-between">
         <Row  md={2}>
                    <Col>
                    <Card className="position-fixed w-25 mt-3" >
            <Card.Img variant="top" src={datas.image} />
            <Card.Body>
            <Card.Title>{datas.title}</Card.Title>
            <p className='fs-5'>{datas.category}</p>
            <p className='fs-5'> <TbWritingSign />  نویسنده: {datas.writer}</p>
            <Card.Text>
                {datas.desc}
                <p>  <BiTimer />  :مدت خواندن {datas.readingTime} دقیقه</p>
            </Card.Text>
            
            <div style={{display: 'flex' , flexDirection: 'column'}}>
                <Button onClick={Handlert} className="bg-warning">حذف مقاله <MdAutoDelete /></Button>
                <NavLink to={`/editart/${param2}`}> <Button variant="outline-info w-100">ویرایش مقاله</Button> </NavLink>
            </div>
            
            
            </Card.Body>
        </Card>
        </Col>

        <Col>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti aut nostrum necessitatibus voluptate, mollitia sed qui iste dolor praesentium enim repellat, nesciunt accusamus quis quam tempora nam? Impedit, incidunt.</p>
        </Col>
    </Row>
</Container>
)
}
export default Articlee