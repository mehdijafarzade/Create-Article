import { useEffect, useState } from "react"
import Navbarc from "../../components/navbar/navbar"
import { Form , Button  } from "react-bootstrap"
import axios from "axios"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"


function Editarticle(){
    const params3 = useParams().artid
    const[dataw , setDataw]= useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/articles/${params3}`)
        .then(res => setDataw(res.data))
    },[])

    const formHandler1 = (e)=>{
        setDataw({...dataw, [e.target.name]: e.target.value})
    }

    const clickHndler = ()=>{
        axios.patch(`http://localhost:8000/articles/${params3}` , dataw)
        Swal.fire({
            title: 'ادیت شد',
            timerProgressBar: true,
            timer: 2000
        })
    }
    return(
        <>
        <Navbarc />

        <div className="d-flex justify-content-center">
        <Form className="w-50" >
      <Form.Group className="mb-3">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control value={dataw.title} name="title" onChange={formHandler1} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control value={dataw.desc} name="desc" onChange={formHandler1} type="text" placeholder="یک توضیح کوتاه درمورد مقاله وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control value={dataw.writer} name="writer" onChange={formHandler1} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control value={dataw.category} name="category" onChange={formHandler1} type="text" placeholder="موضوع مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control value={dataw.image} name="image" onChange={formHandler1} type="text" placeholder="ادرس عکس مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>مدت زمان خواندن</Form.Label>
        <Form.Control value={dataw.readingTime} name="readingTime" onChange={formHandler1} type="number" placeholder="مدت زمان خواندن را وارد کنید" />
      </Form.Group>
      <Button onClick={clickHndler} variant="primary" type="button">
        ویرایش مقاله      </Button>
    </Form>
        </div>
        </>
    )
}

export default Editarticle