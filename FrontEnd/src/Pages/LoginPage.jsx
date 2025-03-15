// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md animate-scale-in-center">
//         <h1 className="text-xl font-bold text-center mb-4">Login to Mahan System</h1>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;



// import React, { useState } from 'react';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => setIsLogin(!isLogin);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
//         <h1 className="text-xl font-bold text-center mb-4">{isLogin ? 'Login to Mahan System' : 'Sign Up for Mahan System'}</h1>
//         <form>
//           {!isLogin && (
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//             </div>
//           )}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             {isLogin ? 'Log in' : 'Sign up'}
//           </button>
//           <p className="mt-4 text-center text-sm text-gray-600">
//             {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
//             <button type="button" onClick={toggleForm} className="text-blue-500 hover:text-blue-700 font-medium">
//               {isLogin ? 'Sign up' : 'Log in'}
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AuthPage;



// import React, { useState } from 'react';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => setIsLogin(!isLogin);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
//         <h1 className="text-xl font-bold text-center mb-4">{isLogin ? 'Login to Mahan System' : 'Sign Up for Mahan System'}</h1>
//         <form>
//           {isLogin ? (
//             <>
//               <div className="mb-4 flex items-center">
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                   <i className="fas fa-user mr-2 text-[#183b50]"></i>
//                 </label>
//                 <input type="text" id="username" placeholder="Username" className="flex-1 mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//               </div>
//               <div className="mb-6 flex items-center">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   <i className="fas fa-lock mr-2 text-[#183b50]"></i>
//                 </label>
//                 <input type="password" id="password" placeholder="Password" className="flex-1 mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input type="password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
//               </div>
//             </>
//           )}
//           <button type="submit" className="w-full bg-[#183b50] hover:bg-[#183b50] text-white font-bold py-2 px-4 rounded">
//             {isLogin ? 'Log in' : 'Sign up'}
//           </button>
//           <p className="mt-4 text-center text-sm text-gray-600">
//             {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
//             <button type="button" onClick={toggleForm} className="text-[#183b50] hover:text-[#183b50] font-medium">
//               {isLogin ? 'Sign up' : 'Log in'}
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AuthPage;



// import React from 'react';

// function LoginPage() {
//   return (
//     <div className="bg-white min-h-screen flex flex-col justify-center items-center mt-9">
//       <div className="max-w-md w-full">
        
//         <div className="bg-white p-8 border border-gray-100">
//         <h2 className="text-3xl font-extrabold text-center mb-4">Login Page</h2>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <div className="flex items-center justify-between mb-6">
//               <div className="text-sm">
//                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
//               </div>
//             </div>
//             <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl">Log in</button>
//             <div className="mt-4 flex items-center justify-between">
//               <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span><hr className="w-full" /> 
//             </div>
//             <div>
//               <button type="button" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"><i class="fa-brands fa-facebook"></i> Continue with Facebook</button>
//               <button type="button" className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-2xl"><i class="fa-brands fa-google"></i> Continue with Google</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;



// import React from 'react';

// function SignupPage() {
//   return (
//     <div className="bg-white  flex flex-col justify-center items-center w-full">
//       <div className="max-w-md w-full">
//         <h2 className="text-3xl font-extrabold text-center mb-4">Welcome to Pinterest</h2>
        
//         <div className="bg-white p-8 border border-gray-100">
//         <h3 className="text-4xl text-center font-semibold mb-4">SignUp Page</h3>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your full name" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Create a password" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
//               <input type="date" id="birthdate" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//             </div>
//             <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Continue</button>
//             <div className="mt-4 flex items-center justify-between">
//               <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span><hr className="w-full" />
//             </div>
//             <button type="button" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
//               <i className="fab fa-google mr-2"></i> Continue with Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;



// import React, { useState } from 'react';

// function AuthPage() {
//     const [isLogin, setIsLogin] = useState(true);

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//     };

//     return (
//         <div className="bg-white min-h-screen flex flex-col justify-center items-center">
//             <div className="max-w-md w-full">
//                 <div className="bg-white p-8 border border-gray-100">
//                     <h2 className="text-3xl font-extrabold text-center mt-5 mb-4">{isLogin ? 'Login Page' : '   .'}</h2>
//                     {isLogin ? (
//                         <>
//                             <form>
//                                 <div className="mb-4">
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                                     <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                                 </div>
//                                 <div className="mb-6">
//                                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                                     <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                                 </div>
//                                 <div className="flex items-center justify-between mb-6">
//                                     <div className="text-sm">
//                                         <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4  rounded-2xl">Log in</button>
//                                 <div className="mt-4 flex items-center justify-between">
//                                     <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span><hr className="w-full" /> 
//                                 </div>
//                                 <div>
//                                     <button type="button" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"><i className="fa-brands fa-facebook"></i> Continue with Facebook</button>
//                                     <button type="button" className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-2xl"><i className="fa-brands fa-google"></i> Continue with Google</button>
//                                 </div>
//                             </form>
//                         </>
//                     ) : (
//                         <>
//                             <h3 className="text-4xl text-center font-semibold mb-4">SignUp Page</h3>
//                             <form>
//                                 <div className="mb-4">
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                                     <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your full name" />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                                     <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                                     <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Create a password" />
//                                 </div>
//                                 <div className="mb-4">
//                                     <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
//                                     <input type="date" id="birthdate" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                                 </div>
//                                 <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Continue</button>
//                                 <div className="mt-4 flex items-center justify-between">
//                                     <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span><hr className="w-full" />
//                                 </div>
//                                 <button type="button" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
//                                     <i className="fab fa-google mr-2"></i> Continue with Google
//                                 </button>
//                             </form>
//                         </>
//                     )}
//                     <button onClick={toggleForm} className="mt-4 text-blue-600 hover:text-blue-700 font-bold">
//                         {isLogin ? 'Need an account? Sign Up' : 'Have an account? Log In'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AuthPage;


import React, { useState } from 'react';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-md w-full">
                <div className="bg-white p-8 border border-gray-100">
                    {isLogin ? (
                        <>
                            <h2 className="text-3xl font-extrabold text-center mt-6 mb-4">Login Page</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl">Log in</button>
                                <div className="mt-4 flex items-center justify-between">
                                    <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span><hr className="w-full" /> 
                                </div>
                                <div>
                                    <button type="button" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"><i className="fa-brands fa-facebook"></i> Continue with Facebook</button>
                                    <button type="button" className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-2xl"><i className="fa-brands fa-google"></i> Continue with Google</button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h2 className="text-3xl font-extrabold text-center mb-4">Welcome to Pinterest</h2>
                            <h3 className="text-4xl text-center font-semibold mb-4">SignUp Page</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your full name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Create a password" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
                                    <input type="date" id="birthdate" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Continue</button>
                                <div className="mt-4 flex items-center justify-between">
                                    <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span><hr className="w-full" />
                                </div>
                                <button type="button" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                                    <i className="fab fa-google mr-2"></i> Continue with Google
                                </button>
                            </form>
                        </>
                    )}
                    <button onClick={toggleForm} className="mt-4 text-blue-600 hover:text-blue-700 font-bold">
                        {isLogin ? 'Need an account? Sign Up' : 'Have an account? Log In'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
