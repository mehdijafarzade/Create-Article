import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Swal from "sweetalert2";
import Navbarc from "../../components/navbar/navbar";

function AddArticle(){
    const[data , setData]=useState({})

    const formHandler = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const resetInput = ()=>{
      setData({
        title: "",
        desc: "",
        writer: "",
        category: "",
        image:"",
        readingTime: ""
      })
    }
    const clickHndler = ()=>{
        axios.post('http://localhost:8000articles' , {data})
        .then((res)=>{
          if(res.status === 201){
            Swal.fire({
              title: 'درخواست با موفقیت انجام شد',
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false
            })
          }
        })
        .catch(error => {
          Swal.fire({
                title: 'درخواست نشد',
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
                icon: 'error'
          })
        }
        )
        resetInput()
    }
  
    return(
        <>
        <Navbarc />
        <div className="d-flex justify-content-center">
        <Form className="w-50" >
      <Form.Group className="mb-3">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control value={data.title} name="title" onChange={formHandler} type="text" placeholder="عنوان مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control value={data.desc} name="desc" onChange={formHandler} type="text" placeholder="یک توضیح کوتاه درمورد مقاله وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control value={data.writer} name="writer" onChange={formHandler} type="text" placeholder="نام نویسنده مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control value={data.category} name="category" onChange={formHandler} type="text" placeholder="موضوع مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control value={data.image} name="image" onChange={formHandler} type="text" placeholder="ادرس عکس مقاله را وارد کنید" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>مدت زمان خواندن</Form.Label>
        <Form.Control value={data.readingTime} name="readingTime" onChange={formHandler} type="number" placeholder="مدت زمان خواندن را وارد کنید" />
      </Form.Group>
      <Button onClick={clickHndler} variant="primary" type="button">
        ساخت مقاله
      </Button>
    </Form>
        </div>
        </>
    )
}
export default AddArticle
