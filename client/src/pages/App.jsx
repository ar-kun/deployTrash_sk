import { Link } from 'react-router-dom';

export default function App() {
 return (
  <>
   <header className="mx-28">
    <nav className="flex gap-5 justify-between border-b-2 py-2">
     <ul className="px-5">
      <li className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-third to-[#f8e8d1] drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
       Trash Learn
      </li>
     </ul>
     <div className="flex gap-5 items-center px-5 ">
      <ul className="flex gap-5 text-xl font-semibold text-slate-800 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
       <li className="border-b-2 border-b-[#C89853]">About</li>
       <li>Learn</li>
       <li>Game</li>
       <li>Chat Bot</li>
       <li>Contact</li>
      </ul>
      <ul className="flex gap-5 items-center">
       <li>|</li>
       <img src="/image/user.png" alt="" />
      </ul>
     </div>
    </nav>
   </header>
   <img src="/image/bg-section.png" alt="" className="absolute z-0 top-1/4 w-full" />
   <main className="mx-28 my-10 ">
    <section className="flex justify-center flex-wrap">
     <div className="flex justify-center">
      <div className="backdrop-blur-sm bg-white/30 w-1/2 text-center p-5 rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]">
       Menyadarkan, Menginspirasi, dan Membentuk Generasi Peduli Lingkungan Melalui Pendidikan Sampah!
      </div>
     </div>
     <div className="relative">
      <img src="/image/heroSetion.png" alt="" />
      <div className="bg-[#E8F5F0] h-1/4 -mt-20 relative z-10 rounded-full shadow-[5px_5px_15px_0px_rgba(0,0,0,0.3)] p-5">
       <ul className="flex px-16 gap-10 text-2xl font-semibold justify-between items-center text-slate-700">
        <li>
         <i className="fa-solid fa-camera text-third text-5xl drop-shadow-[3px_3px_1px_rgba(0,0,0,0.4)] justify-center flex py-2"></i>
         <p>Object Detection</p>
        </li>
        <li>
         <i className="fa-solid fa-gamepad text-third text-5xl drop-shadow-[3px_3px_1px_rgba(0,0,0,0.4)] justify-center flex py-2"></i>
         <p>VR Game</p>
        </li>
        <li>
         <i className="fa-solid fa-comment-dots text-third text-5xl drop-shadow-[3px_3px_1px_rgba(0,0,0,0.4)] justify-center flex py-2"></i>
         <p>AI Consultation</p>
        </li>
       </ul>
      </div>
      <div className="backdrop-blur-sm bg-white/30 text-center px-10 py-3 rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] absolute top-1/4 right-[5%]">
       <p>3 Technology</p>
      </div>
      <div className="backdrop-blur-sm bg-white/30 text-center px-10 py-3 rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] absolute top-1/2">
       <p>Learning Fun</p>
      </div>
     </div>
    </section>
    <section className="my-20">
     <h1 className="text-4xl font-semibold italic text-center my-5">About</h1>
     <div className="flex gap-10 justify-center items-center">
      <div className="w-[40%]">
       <p className="backdrop-blur-sm bg-white/30 p-8 text-justify rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]">
        Meraih Masa Depan Bersih: Pendidikan Sampah sebagai Kunci Menuju Generasi Pemimpin Lingkungan. Temukan Pengetahuan, Temukan Inovasi, dan
        Temukan Perubahan melalui Perjalanan Pendidikan Kami untuk Menciptakan Lingkungan yang Berkelanjutan dan Berbudaya. Sama-sama Membangun
        Kesadaran, Menginspirasi Tindakan, dan Membentuk Karakter, Kita Adalah Garda Terdepan dalam Menyelamatkan Bumi Kita dari Krisis Sampah Global.
       </p>
      </div>
      <img src="/image/about.png" alt="" />
     </div>
    </section>
    <img src="/image/bg-section.png" alt="" className="absolute z-0 w-screen right-0" />
    <section className="my-20">
     <h1 className="text-4xl font-semibold italic text-center">Learn</h1>
     <p className="text-center italic">Learn types of waste with object detection</p>
     <div className="flex gap-10 justify-center items-center my-10">
      <img src="/image/learn.png" alt="" />
      <div className="w-[40%] backdrop-blur-sm bg-white/30 p-8 text-justify rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]">
       <p>
        Selamat datang di aplikasi pembelajaran inovatif kami! Temukan perbedaan antara sampah organik dan non-organik dengan mudah sambil menjelajahi
        konsep keberlanjutan secara menyenangkan. Antarmuka yang intuitif membuat pembelajaran lebih menyenangkan. Ayo, mari coba aplikasi sekarang
        untuk pengalaman belajar yang edukatif!
       </p>
       <div className="flex gap-5 justify-center pt-5 text-white font-semibold">
        <div className="bg-gradient-to-br from-third to-[#fcdeb2] hover:from-[#fcdeb2] hover:to-third px-8 py-2 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all duration-200 ease-out">
         <a href="" className="drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
          Download
         </a>
        </div>
        <div className="bg-gradient-to-br from-[#fcdeb2] to-third hover:from-third hover:to-[#fcdeb2] px-8 py-2 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all duration-200 ease-out">
         <Link to={'/learn'} className="drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
          Coba Sekarang
         </Link>
        </div>
       </div>
      </div>
     </div>
    </section>
    <section className="my-20">
     <h1 className="text-4xl font-semibold italic text-center">Game</h1>
     <p className="text-center italic">Learn the types of waste with a fun VR game</p>
     <div className="flex gap-10 justify-center items-center my-10">
      <div className="w-[40%] backdrop-blur-sm bg-white/30 p-8 text-justify rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]">
       <p>
        Selamat datang di game VR pembelajaran sampah kami! Temukan perbedaan antara sampah organik dan non-organik dengan keseruan dalam pengalaman
        virtual yang edukatif. Mari coba sekarang untuk pembelajaran yang menyenangkan!
       </p>
       <div className="flex gap-5 justify-center pt-5 text-white font-semibold">
        <div className="bg-gradient-to-br from-third to-[#fcdeb2] hover:from-[#fcdeb2] hover:to-third px-8 py-2 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all duration-200 ease-out">
         <a href="" className="drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
          Android
         </a>
        </div>
        <div className="bg-gradient-to-br from-[#fcdeb2] to-third hover:from-third hover:to-[#fcdeb2] px-8 py-2 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all duration-200 ease-out">
         <a href="" className="drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
          IOS
         </a>
        </div>
       </div>
      </div>
      <img src="/image/game.png" alt="" />
     </div>
    </section>
    <section className="my-20">
     <h1 className="text-4xl font-semibold italic text-center ">Chat Bot</h1>
     <p className="text-center italic">Let&apos;s recognize how to manage waste properly with the help of our chat bot</p>
     <div className="flex gap-10 justify-center items-center my-10">
      <img src="/image/chatbot.png" alt="" />
      <div className="w-[40%] backdrop-blur-sm bg-white/30 p-8 text-justify rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)]">
       <p>
        Ayo, temukan cara mengelola sampah yang lebih baik bersama bot chat kami! Dengan panduan interaktif, kami akan membimbing langkah-langkah
        praktis dari pemilahan hingga daur ulang. Bergabunglah sekarang untuk perjalanan pengelolaan sampah yang lebih efisien!
       </p>
       <div className="flex gap-5 justify-center pt-5 text-white font-semibold">
        <div className="bg-gradient-to-br from-[#fcdeb2] to-third hover:from-third hover:to-[#fcdeb2] px-8 py-2 rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all duration-200 ease-out">
         <a href="" className="drop-shadow-[2px_3px_0px_rgba(0,0,0,0.3)]">
          Coba Sekarang
         </a>
        </div>
       </div>
      </div>
     </div>
    </section>
    <img src="/image/bg-section.png" alt="" className="absolute z-0 w-screen right-0" />
    <section className="my-20">
     <h1 className="text-4xl font-semibold italic text-center ">Contact</h1>
     <p className="text-center italic">Drop us a message for suggestions, cooperation and anything else regarding this app</p>
     <div className="flex justify-center my-5">
      <div className="backdrop-blur-sm bg-white/30 p-8 text-justify rounded-3xl text-lg shadow-[5px_5px_10px_0px_rgba(0,0,0,0.3)] w-2/3">
       <form action="" className="flex flex-col gap-5">
        <input type="text" placeholder="Name" className="p-3 rounded-md ring-2 ring-third/50" />
        <input type="text" placeholder="Email" className="p-3 rounded-md ring-2 ring-third/50" />
        <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="p-3 rounded-md ring-2 ring-third/50"></textarea>
        <button
         type="submit"
         className=" text-white p-3 rounded-md bg-gradient-to-r from-third to-[#ffddaa] hover:from-[#ffddaa] hover:to-third shadow-[3px_4px_3px_0px_rgba(0,0,0,0.3)] hover:shadow-none transition-all duration-200 ease-out font-bold"
        >
         Send
        </button>
       </form>
      </div>
     </div>
    </section>
   </main>
   <footer className="border-t-4 border-t-white text-center py-5 mx-28">
    <p className="font-bold italic text-third text-lg">All content © arkun 2023. All rights reserved.</p>
   </footer>
   {/* <div className="w-full h-screen">
    <h1 className="text-3xl font-bold underline h-[5000px] ">Hello world!</h1>
    <img src="http://127.0.0.1:5000/yoloModel" alt="" />
   </div> */}
  </>
 );
}
