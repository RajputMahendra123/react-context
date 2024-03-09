import React, { useContext, useEffect, useState } from 'react'
import TextViewModal from '../Home/TextViewModal'
import { CgEyeAlt } from 'react-icons/cg'
import { TiEdit } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'
import { TodoContext } from '../../context/ToDoContext'
import { UserContext } from '../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import { HiCreditCard } from "react-icons/hi2";
import cogoToast from 'cogo-toast';

const Todo = ({ note }) => {
  const { todo, setTodo } = useContext(TodoContext)
  const [todoContent, setTodoContent] = useState({ title: note.title, description: note.description, flag: false, _id: note._id })
  const [isEditable, setIsEditable] = useState(false)

  const updateNotes = () => {
    if (isEditable) {
      cogoToast.success('Updated todo successfully.', {
        position : 'top-right'
      });
    }
    
    setTodo(todo.map((todo) => todo._id == todoContent._id ? todoContent : todo))
    setIsEditable(!isEditable)
  }

  const deleteTodo = (noteId) => {
    cogoToast.success('deleted todo successfully.',{
      position : 'top-right'
    });
      let updatedData = todo.filter((note) => note._id !== noteId)
      setTodo(updatedData)

  }

  return (
    <>
      <TextViewModal title={todoContent.title} description={todoContent.description} todoId={todoContent._id} flag={todoContent.flag} setTodoContent={setTodoContent} todoContent={todoContent} />
      <div className='w-1/4 h-32 bg-black/5 max-sm:mx-3 my-4 mx-4 flex-wrap max-md:w-1/3 max-md:h-30 max-sm:my-5 max-sm:w-full flex justify-start items-center relative rounded-lg p-3 max-md:p-1 max-md:space-y-0 space-y-2 max-sm:1/2'>
        {
        isEditable ?

        <>
        <input type="text" className={`w-full px-2 font-bold text-sm h-1/5 max-sm:text-xl max-sm:my-2 max-sm:font-bold max-md:text-xs max-md:font-bold md:text-xl bg-[#f2f2f200] outline-none pt-4 pb-4 focus:border-2 ${isEditable ? "border border-black/50 rounded-md" : "border-none"}`} readOnly={!isEditable} value={`${todoContent.title}`} onChange={(e) => setTodoContent({ ...todoContent, title: e.target.value })} />
        
        <div className='w-full text-smmax-sm:h-0 max-sm:text-[10px] max-md:text-[11px] max-md:px-1 md:text-lg max-sm:text-lg max-sm:my-2 max-sm:1/2'>
          <input type="text" readOnly={!isEditable} className={`w-full focus:ring-black focus:border-black focus:border-2 px-2 bg-inherit outline-none ${isEditable ? "border border-black/50 rounded-md" : "border-none"}`} value={`${todoContent.description}`} onChange={(e) => setTodoContent({ ...todoContent, description: e.target.value })} />
        </div>
        </>

        :

        <>
          <p className='w-full px-2 font-bold text-sm h-1/5 max-sm:text-xl max-sm:my-2 max-sm:font-bold max-md:text-xs max-md:font-bold md:text-xl bg-[#f2f2f200] pt-4 pb-4'>
             {note.title.slice(0, 10)}...
          </p>

          <p className='w-full px-2 font-bold text-sm h-1/5 max-sm:text-xl max-sm:my-2 max-sm:font-bold max-md:text-xs max-md:font-bold md:text-xl bg-[#f2f2f200] pt-4 pb-4'>
             {note.description.slice(0, 15)}...
          </p>
        
        </>
        }

        <div className='w-full h-1/5 flex space-x-2 justify-end items-center max-sm:1/2'>
          <CgEyeAlt className='text-black text-[13px] md:text-2xl mt-0.5 cursor-pointer max-sm:text-xl' onClick={() => setTodoContent({ title: note.title, description: note.description, flag: true, id: note._id })} />
          {
            isEditable ?
              <HiCreditCard className='text-blue-600 cursor-pointer md:text-2xl max-sm:text-2xl' onClick={() => updateNotes()} />
              :
              <TiEdit className='text-blue-600 cursor-pointer md:text-2xl max-sm:text-2xl' onClick={() => updateNotes()} />
          }
          <MdDelete className='text-red-600 cursor-pointer md:text-2xl max-sm:text-2xl' onClick={() => deleteTodo(note._id)} />
        </div>
      </div>
    </>
  )
}

export default Todo