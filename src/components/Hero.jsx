

import Navbar from './Navbar';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      {/* Include the Navbar component */}
      <Navbar />

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;


// Path: src\components\Demo.jsx
// Compare this snippet from src\App.jsx:
// import { logo } from "../assets";

// const Hero = () => {
//   return (
//     <header className='w-full flex justify-center items-center flex-col'>
//       <nav className='flex justify-between items-center w-full mb-10 pt-3'>
//         <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

//         <button
//           type='button'
//           onClick={() =>
//             window.open("https://github.com/rubelmehmed", "_blank")
//           }
//           className='black_btn'
//         >
//           GitHub
//         </button>
//         <button
//           type='button'
//           onClick={() =>
//             window.open("https://facebook.com/rubelmehmed.pro", "_blank")
//           }
//           className='black_btn'
//         >
//           Facebook
//         </button>
        
//       </nav>
          
//       <h1 className='head_text'>
//         Summarize Articles with <br className='max-md:hidden' />
//         <span className='orange_gradient '>OpenAI GPT-4</span>
//       </h1>
//       <h2 className='desc'>
//         Simplify your reading with Summize, an open-source article summarizer
//         that transforms lengthy articles into clear and concise summaries
//       </h2>
//     </header>
//   );
// };

// export default Hero;