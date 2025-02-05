"use client";
export default function Committee() {
  return (
    
    <div className="gap-10 flex flex-col justify-center items-center md:py-18 bg-gradient-to-r from-purple-100 to-pink-200">
      <hr className="border-1 border-indigo-400 w-[80%] md:w-[70%] mt-10" />

      <h1 className="text-3xl font-bold text-indigo-800 animate__animated animate__fadeIn">Organizing Committee</h1>

      <div className="inner gap-10 flex flex-col md:flex-row justify-center items-center">

        <Card name="Shri Vinai Kumar Saxena" role="Hon'ble chancellor, GGSIPU, Delhi" image="/images/LG_Sir.jpeg" />
      
        {/*  <Card name="Prof. (Dr.) Mahesh Verma" role="Vice Chancellor, GGSIPU" image="/images/Vc_sir.jpg" /> */}
      </div>

      <hr className="border-1 border-indigo-400 w-[80%] md:w-[70%] mb-10" />
    </div>
      );
}

function Card({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col hover:scale-[101%] transition  items-center bg-white p-10 rounded-lg shadow-lg border bottom-2 border-indigo-200">
      <img
        src={image}
        alt={name}
        className="h-40 w-40 rounded-full object-cover border-2 border-indigo-400"
      />
      <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-800 hover:text-indigo-600 transition-all">{name}</h3>
      <p className="text-gray-500 text-xs">
        <i>{role}</i>
      </p>
    </div>
  );
}
