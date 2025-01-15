import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addComment } from '../store/articleSlice';
import { ToastContainer, toast } from 'react-toastify';

function ArticleCard() {
  const articles = useSelector((state) => state.article.articles);
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState({});
  const [showComments, setShowComments] = useState({});

  const handleCommentChange = (id, value) => {
    setNewComment((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddComment = (id) => {
    if (newComment[id]?.trim()) {
      dispatch(addComment({ id, comment: newComment[id] }));
      setNewComment((prev) => ({ ...prev, [id]: '' }));
      toast.success('Comment qo‘shildi!');
    } else {
      toast.error('Comment maydoni bo‘sh bo‘lmasligi kerak.');
    }
  };

  const toggleComments = (id) => {
    setShowComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto p-6 space-y-10">
      <ToastContainer />
      {articles.length > 0 ? (
        articles.map((article) => (
          <div
            key={article.id}
            className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-shadow transform hover:scale-105 p-6"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold mb-2 tracking-wide">
                {article.title}
              </h3>
              <p className="text-lg text-gray-300">{article.summary}</p>
            </div>
            <Link
              to={`/details/${article.id}`}
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:bg-blue-500 transition"
            >
              Details
            </Link>
            <div className="mt-6">
              <input
                type="text"
                value={newComment[article.id] || ''}
                onChange={(e) => handleCommentChange(article.id, e.target.value)}
                placeholder="Yangi comment kiriting..."
                className="w-full px-4 py-3 bg-[#1e293b] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleAddComment(article.id)}
                  className="px-6 py-2 bg-green-600 text-white rounded-full font-medium shadow-lg hover:bg-green-500 hover:shadow-green-500/50 transition"
                >
                  Add Comment
                </button>
                <button
                  onClick={() => toggleComments(article.id)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-full font-medium shadow-lg hover:bg-gray-500 hover:shadow-gray-500/50 transition"
                >
                  {showComments[article.id] ? 'Hide Comments' : 'Show Comments'}
                </button>
              </div>
            </div>
            {showComments[article.id] && article.comments.length > 0 && (
              <div className="mt-6 bg-[#0f172a] p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">
                  Comments ({article.comments.length} ta)
                </h4>
                <ul className="space-y-3">
                  {article.comments.map((comment, idx) => (
                    <li key={idx} className="text-gray-300">
                      <span className="font-bold text-white">{idx + 1}.</span>{' '}
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-2xl text-gray-400">
          Hozircha maqolalar mavjud emas.
        </p>
      )}
    </div>
  );
}

export default ArticleCard;
