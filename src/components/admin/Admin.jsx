import React, { useState, useEffect } from 'react';
import Header from '../Header';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('users'); 
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    name: '',
    short_description: '',
    description: '',
  });
if (data.isAdmin === true) {

  useEffect(() => {
    if (activeTab === 'users') {
      fetch('http://localhost:5000/api/users')
        .then(res => res.json())
        .then(data => setUsers(Array.isArray(data) ? data : []))
        .catch(err => console.error("Ошибка:", err));
    }
  }, [activeTab]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!file) return alert("Выберите изображение!");

    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', form.name);
    formData.append('short_description', form.short_description);
    formData.append('description', form.description);

    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        alert("Товар добавлен!");
        setFile(null);
        e.target.reset();
      }
    } catch (err) {
      alert("Ошибка связи с сервером");
    }
  };

  const toggleAdmin = async (id, currentStatus) => {
    try {
      await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_admin: !currentStatus })
      });
      setUsers(users.map(u => u.id === id ? { ...u, is_admin: !currentStatus } : u));
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div className="flex min-h-[calc(100vh-80px)] flex-row-reverse  bg-white font-sans text-gray-900">


      <div className="flex-1 p-10 bg-gray-50/30 ">
    <Header/>
        
        {activeTab === 'add' ? (
          <div className="max-w-xl bg-white p-8 rounded-2xl border border-gray-100 shadow-sm ">
            <h2 className="text-2xl font-black mb-8">Новый товар</h2>
            <form onSubmit={handleAddProduct} className="flex flex-col gap-5">
              

              <div className="relative h-32 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center hover:border-[#33c9db] transition-all overflow-hidden bg-gray-50">
                <input 
                  type="file" 
                  onChange={(e) => setFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <span className="text-gray-400 text-sm px-4 text-center">
                  {file ? ` ${file.name}` : "Нажмите, чтобы загрузить фото"}
                </span>
              </div>

              <input 
                placeholder="Название" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-[#33c9db] outline-none"
                onChange={e => setForm({...form, name: e.target.value})}
                required
              />

              <input 
                placeholder="Краткое описание" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-[#33c9db] outline-none"
                onChange={e => setForm({...form, short_description: e.target.value})}
                required
              />

              <textarea 
                placeholder="Полное описание" 
                className="w-full p-3 border border-gray-200 rounded-xl focus:border-[#33c9db] outline-none h-32 resize-none"
                onChange={e => setForm({...form, description: e.target.value})}
                required
              />

              <button className="bg-[#33c9db] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#2bb2c2] active:scale-95 transition-all">
                Добавить в базу
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-3xl">
            <h2 className="text-2xl font-black mb-8">Пользователи</h2>
            <div className="flex flex-col gap-3">

              <div className="flex px-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <div className="flex-1">Email пользователя</div>
                <div className="w-32">Роль</div>
                <div className="w-32 text-right">Действие</div>
              </div>
              

              {users.map(u => (
                <div key={u.id} className="flex items-center px-4 py-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <div className="flex-1 font-bold text-sm">{u.email}</div>
                  <div className="w-32">
                    <span className={`text-[10px] font-black px-2 py-1 rounded ${u.is_admin ? 'bg-cyan-100 text-cyan-600' : 'bg-gray-100 text-gray-400'}`}>
                      {u.is_admin ? 'ADMIN' : 'USER'}
                    </span>
                  </div>
                  <div className="w-32 text-right">
                    <button 
                      onClick={() => toggleAdmin(u.id, u.is_admin )} 
          
                      className="text-[12px] font-bold text-[#33c9db] hover:underline"
                    >
                      {u.is_admin ? 'Снять администратора' : 'Назначить администратором'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


      <div className="w-72 border-l border-gray-100 p-6 flex flex-col  gap-3 bg-white">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest px-2 mb-2">Навигация</p>
        
        <button 
          onClick={() => setActiveTab('add')}
          className={`text-left p-4 rounded-xl text-sm font-bold border-2 transition-all ${
            activeTab === 'add' 
            ? 'border-[#33c9db] text-[#33c9db] bg-cyan-50/50 shadow-sm' 
            : 'border-transparent text-gray-400 hover:bg-gray-50'
          }`}
        >
          Карточки товаров
        </button>

        <button 
          onClick={() => setActiveTab('users')}
          className={`text-left p-4 rounded-xl text-sm font-bold border-2 transition-all ${
            activeTab === 'users' 
            ? 'border-[#33c9db] text-[#33c9db] bg-cyan-50/50 shadow-sm' 
            : 'border-transparent text-gray-400 hover:bg-gray-50'
          }`}
        >
          Список юзеров
        </button>
      </div>
    </div>
)};
  
}
