import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { TodoContext } from '../../context/ToDoContext';
import toast, { Toaster } from 'react-hot-toast';

const TextViewModal = ({ title, description, flag, setTodoContent, todoContent, todoId }) => {
    const { todo, setTodo } = useContext(TodoContext)
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape') {
                setTodoContent({ ...todoContent, flag: false })
            }
        };

        // Adding the event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);

        // Cleaning up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const deleteTodo = () => {
        let updatedData = todo.filter((note) => note._id !== todoId)
        setTodo(updatedData)
        setTodoContent({ ...todoContent, flag: false })
        return toast.success('Note deleted successfully.');
    }

    const updateNotes = () => {
        return toast.success('feature is not implemented yet.');
    }

    return (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`${flag == true ? "" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white overflow-auto">
                            {title}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => setTodoContent({ ...todoContent, flag: false })}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 overflow-auto">
                            {description}
                        </p>

                    </div>
                    {/* <div className="flex items-center p-2 justify-end border-t border-gray-200 rounded-b dark:border-gray-600">
                        <TiEdit className='text-blue-600 text-3xl max-md:text-2xl max-sm:text-xl cursor-pointer' onClick={() => updateNotes()} />
                        <MdDelete className='text-red-600 text-3xl max-md:text-2xl max-sm:text-xl cursor-pointer' onClick={() => deleteTodo()} />
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default TextViewModal