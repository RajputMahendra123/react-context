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

const Home = () => {
  const { todo, setTodo } = useContext(TodoContext)
  const { setUser, user } = useContext(UserContext)
  const navigate = useNavigate()
  const [todoContent, setTodoContent] = useState({ title: "", description: "", flag: false, id: "" })

  const deleteTodo = (noteId) => {
    let updatedData = todo.filter((note) => note._id !== noteId)
    setTodo(updatedData)
    return toast.success('Note deleted successfully.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const updateNotes = () => {
    return toast.info('feature is not implemented yet.', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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

  return (
    <>
      <TextViewModal title={todoContent.title} description={todoContent.description} todoId={todoContent.id} flag={todoContent.flag} setTodoContent={setTodoContent} todoContent={todoContent} />
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

                  <div key={note._id} className='w-1/4 h-32 bg-black/5 max-sm:mx-3 my-4 mx-4 flex-wrap max-md:w-1/3 max-md:h-30 max-sm:my-5 max-sm:w-full flex justify-start items-center relative rounded-lg p-3 max-md:p-1 max-md:space-y-0 space-y-2 max-sm:1/2'>
                    <div className='w-full font-bold text-sm px-2 h-1/5 max-sm:text-xl max-sm:my-2 max-sm:font-bold max-md:text-xs max-md:font-bold max-md:px-1 md:text-xl'> {note.title.slice(0, 10)}...</div>
                    <div className='w-full text-sm px-2 h-1/2 max-sm:h-0 max-sm:text-[10px] max-md:text-[11px] max-md:px-1 md:text-lg max-sm:text-lg max-sm:my-2 max-sm:1/2'>{note.description}</div>
                    <div className='w-full h-1/5 flex space-x-2 justify-end items-center max-sm:1/2'>
                      <CgEyeAlt className='text-black text-[13px] md:text-2xl mt-0.5 cursor-pointer max-sm:text-xl' onClick={() => setTodoContent({ title: note.title, description: note.description, flag: true, id: note._id })} />
                      <TiEdit className='text-blue-600 cursor-pointer md:text-2xl max-sm:text-2xl' onClick={() => updateNotes()} />
                      <MdDelete className='text-red-600 cursor-pointer md:text-2xl max-sm:text-2xl' onClick={() => deleteTodo(note._id)} />
                    </div>
                  </div>

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