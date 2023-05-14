import { Col, Container , Row } from "react-bootstrap"
import Navbarc from "../../components/navbar/navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Courseitem from "../../components/courseitem/courseitem"

function Home(){
    const[data1 , setData1] = useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:8000/articles')
        .then(res => setData1(res.data))
    } , [])
    return(
        <>
        <Navbarc />
        <Container>
            <Row md={3} >
                {
                   data1.map((item) => <Col className="gy-3" key={item.id}><Courseitem {...item} /></Col> )

                  
                }
            </Row>
        </Container>
        </>
    )
}
export default Home