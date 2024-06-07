
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.id] : e.target.value,
      });
  };
  // console.log(formData);

  const handleSubmit= async(e) =>{
    e.preventDefault();
    setLoading(true);

    try{
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data =await res.json();
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      // console.log(data);
      navigate('/sign-in');
    }
    catch(error){
       setLoading(false);
       setError(error.message);
    }

    
  };
  console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-5'>
        <input 
          type='text' 
          placeholder='username'
          id='username'
          className='broder p-3 rounded-lg'
          onChange={handleChange}
        />
        <input 
          type='email' 
          placeholder='email'
          id='email'
          className='broder p-3 rounded-lg'
          onChange={handleChange}
        />
        <input 
          type='password' 
          placeholder='password'
          id='password'
          className='broder p-3 rounded-lg'
          onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3
          rounded-lg uppercase hover:opacity-90'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
           <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error &&  <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
