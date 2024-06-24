import  { useState } from 'react';

const QATable = () => {
  const [qas, setQAs] = useState([
    { id: 1, question: 'This is Question 1', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. N!' },
    { id: 2, question: 'This is Question 2', answer: 'Lorem ipsum dolor sit amet consectetur' },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddQA = () => {
    const newQA = { id: qas.length + 1, question: newQuestion, answer: newAnswer };
    setQAs([...qas, newQA]);
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleEditQA = (id, updatedQuestion, updatedAnswer) => {
    const updatedQAs = qas.map((qa) =>
      qa.id === id ? { ...qa, question: updatedQuestion, answer: updatedAnswer } : qa
    );
    setQAs(updatedQAs);
  };

  const handleDeleteQA = (id) => {
    setQAs(qas.filter((qa) => qa.id !== id));
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Q & A</h1>
       
      </div>
      <table className="min-w-full bg-white border overflow-x-auto">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Question</th>
            <th className="py-2 px-4 border-b">Answer</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {qas.map((qa) => (
            <tr key={qa.id}>
              <td className="py-6 px-4 border-b text-nowrap">{qa.question}</td>
              <td className="py-6 px-4 border-b leading-6">{qa.answer}</td>
              <td className="py-6 px-4 border-b">
                <button
                  onClick={() => handleEditQA(qa.id, prompt('Edit question', qa.question), prompt('Edit answer', qa.answer))}
                  className="text-orange-500 font-bold hover:underline mr-4 my-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteQA(qa.id)}
                  className="text-red-600 font-bold hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QATable;
