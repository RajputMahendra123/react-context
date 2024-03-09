import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { CgEyeAlt } from "react-icons/cg";
import { TodoContext } from '../../context/ToDoContext';
import TextViewModal from './TextViewModal';
import { Link, useNavigate } from 'react-router-dom';
import img from './checklist.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import greetingTime from 'greeting-time'
import Todo from '../To-Do/Todo'

const Home = () => {
  const { todo, setTodo } = useContext(TodoContext)
  const { setUser, user } = useContext(UserContext)
  const navigate = useNavigate()

  const logout = () => {
    toast.success('Logout sucessfully', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/")
    }, 1000);
  }
  useEffect(()=>{

    if(JSON.parse(localStorage.getItem("user_cred")) && Object.keys(JSON.parse(localStorage.getItem("user_cred"))).length > 0){
      setUser(JSON.parse(localStorage.getItem("user_cred")))
    }
    
    if (JSON.parse(localStorage.getItem("todos")) && JSON.parse(localStorage.getItem("todos")).length > 0) {
      setTodo(JSON.parse(localStorage.getItem("todos")))
    }
   },[])

   useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todo))
  },[todo])

  return (
    <>
      <div className="flex justify-evenly items-center h-[100px] max-sm:h-[150px] max-sm:justify-between  max-sm:w-[100vw] bg-black/5 max-sm:p-4">
        <div>
          <span className='font-bold text-lg max-sm:text-sm'>{greetingTime(new Date())}{", "}{user.name}</span>
          <h1 className='font-bold font-mono max-sm:w-full text-4xl max-sm:text-sm max-sm:py-1 max-md:text-[30px]'>Keep Notes</h1>
        </div>
        <div className='sm:space-x-2 text-center  max-sm:w-full'>
          <Link to="/add-to-do">
            <button className='text-xl mx-5 px-5 py-3 max-sm:my-1 max-sm:py-2 max-sm:px-3 bg-blue-500 rounded-md text-white font-bold font-mono max-sm:text-sm'>Add Todo</button>
          </Link>
          <button className='text-xl px-5 mx-3 py-3 max-sm:my-1 max-sm:py-2 max-sm:px-[20px] bg-red-500 rounded-md text-white font-bold font-mono max-sm:text-sm' onClick={() => logout()}>Logout</button>
        </div>

      </div>

      {
        todo.length === 0 ?
          <div className='w-full h-[640px]'>
            <img src={img} alt="Image not found" className='h-auto w-auto m-auto' />
          </div>
          :

          <div className='h-screen w-full m-auto p-5 max-sm:p-0'>
            <div className='flex flex-row flex-wrap max-sm:justify-center items-center'>
              {
                todo.map((note) =>
                  <Todo key={note._id} note={note}/>
                )
              }

            </div>
          </div>
      }

      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Home