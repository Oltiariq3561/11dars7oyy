import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addArticles } from '../store/articleSlice';
import { ToastContainer, toast } from 'react-toastify';

function CreateArticle() {
  const tasksRef = useRef();
  const dispatch = useDispatch();

  function handleAdd() {
    const newArticleTitle = tasksRef.current.value.trim();
    if (newArticleTitle) {
      dispatch(addArticles(newArticleTitle));
      tasksRef.current.value = '';
      toast.success('Maʼlumot qo‘shildi!');
    } else {
      toast.error('Maydon bo‘sh bo‘lmasligi kerak!');
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 mt-12">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
        Add New Article
      </h2>
      <input
        ref={tasksRef}
        type="text"
        placeholder="Enter article title..."
        className="w-96 px-4 py-3 text-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg shadow-lg focus:ring-4 focus:ring-blue-400 focus:outline-none placeholder-gray-400 transition"
      />
      <button
        onClick={handleAdd}
        className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:shadow-lg hover:from-blue-400 hover:to-purple-400 transition duration-300 transform hover:scale-105"
      >
        Add Article
      </button>
    </div>
  );
}

export default CreateArticle;
