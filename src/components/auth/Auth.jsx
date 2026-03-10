import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    
    try {
      const res = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
          localStorage.setItem('user', JSON.stringify(data));
          // window.location.reload();
        if (isLogin) {
          if (data.isAdmin) {
            navigate('/');
          } 
        } else {
          setIsLogin(true);
          alert('Регистрация прошла успешно! Теперь войдите.');
        }
      } else {
        alert(data.error || 'Произошла ошибка');
      }
    } catch (err) {
      alert('Нет связи с сервером',err);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-[#333] mb-6 text-center">
          {isLogin ? 'Вход' : 'Регистрация'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full p-2.5 border border-gray-200 rounded-md focus:outline-[#33c9db]" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-400 mb-1">Пароль</label>
            <input 
              type="password" 
              required
              className="w-full p-2.5 border border-gray-200 rounded-md focus:outline-[#33c9db]" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="w-full bg-[#33c9db] text-white py-2.5 rounded-md font-bold mt-4">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[13px] text-gray-400 hover:text-[#00838f]"
          >
            {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
          </button>
        </div>
      </div>
    </div>
  );
}