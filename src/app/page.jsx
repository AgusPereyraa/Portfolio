import Navbar from "@/Components/Navbar/Navbar"
import Writer from "@/Components/Writer/Writer"



function Index() {
  return (

      <body>
        <Navbar />
        <div className="flex flex-col min-h-[85vh] justify-end ml-14 ">
          <h1 className="text-8xl font-normal mb-10 tracking-[1rem]">I'm <span className='text-[#de6a12]'>A</span>gustin <span className='text-[#de6a12]'>P</span>ereyra</h1>
          {/* <h1 className="text-8xl font-normal mb-10 tracking-[1rem]">I'm Agustin Pereyra</h1> */}
          <h3 className="text-7xl font-light mb-10 tracking-[1rem]">Full Stack Developer</h3>
            <div className='text-5xl font-light tracking-[1rem] text-[#de6a12]'>
              <Writer/>
            </div>
        </div>

      </body>
      
  )
}

export default Index