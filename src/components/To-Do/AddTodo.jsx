import React, { useContext, useState, useId, useEffect } from 'react'
import backgroundImage from './todoBg.jpg'
import { Link } from 'react-router-dom';
import { TodoContext } from '../../context/ToDoContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = () => {
  const _id = useId();
  const { todo, setTodo } = useContext(TodoContext)
  const history = useNavigate();
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };
  
  const [notes, setNotes] = useState({title : "", description : ""})

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        history("/home")
      }
    };

    // Add event listener when component mounts
    document.addEventListener('keydown', handleEsc);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);


  const handleSubmit = (e)=> {
    e.preventDefault()
    if (notes.title.length <= 3) {
      return toast.info('Atleast 3 characters are required in title', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (notes.description.length <= 3) {
      return toast.info('Atleast 3 characters are required in description', {
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

    todo.push({title:notes.title, description:notes.description,_id})
    setTodo(todo)

    toast.success('Note Created sucessfully', {
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
      history("/home")
    }, 1000);

  }


  return (
    <div style={containerStyle} className='flex justify-center items-center'>
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
      <div className='h-[60%] w-[60%] max-sm:h-screen max-sm:w-full bg-white/60 max-sm:bg-white/20 max-md:h-[90%] max-md:w-[90%] sm:rounded-2xl p-20 max-sm:p-0'>

        <form className="max-w-xl mx-auto my-4">
          <div className="mb-5 space-y-4 mx-2">
            <div className='flex justify-between items-center'>
            <label className="text-2xl font-bold">Title</label>
            <Link to="/home">
              <div className='font-bold text-2xl bg-black/50 hover:bg-black/60 p-1 rounded-xl text-white cursor-pointer w-[50px] ml-auto text-center'>X</div>
            </Link>
            </div>
            <input type="text" value={notes.title} onChange={(e)=> setNotes({...notes, title:e.target.value})} className="font-bold text-lg rounded-lg block w-full placeholder-white/70 placeholder:font-bold placeholder:text-lg p-2.5 dark:bg-gray-700/50 border-none dark:text-white dark:outline-none dark:py-3" placeholder="Add title" required />
          </div>
          <div className="mb-5 space-y-4 mx-2">
            <label className="text-2xl font-bold">Description</label>
            <input type="text" value={notes.description} onChange={(e)=> setNotes({...notes, description:e.target.value})} className="font-bold text-lg rounded-lg block w-full placeholder-white/70 placeholder:font-bold placeholder:text-lg p-2.5 dark:bg-gray-700/50 border-none dark:text-white dark:outline-none dark:py-3" placeholder="Description" required />
          </div>

          <div className='w-full text-center'>
            <button  onClick={(e)=>handleSubmit(e)}  className="text-white bg-blue-700/85 hover:bg-blue-700 font-bold rounded-lg text-lg w-1/3 m-auto  px-8 py-3">Add</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default AddTodo