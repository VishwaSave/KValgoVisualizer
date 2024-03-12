import React from 'react'

export default function Text() {
  return (
    <div className="w-[100%] flex justify-end max-sm:hidden">
    <div className="w-[26.5rem] h-[5rem] absolute bottom-[15.7rem] justify-end flex max-h-textContainer lg:bottom-[15.5rem] max-md:bottom-[16.5rem]">
        <div className="w-[23rem] h-[100%] bg-orange-300 mr-[0.5rem] hidden p-[0.4rem] max-h-textContainer-text" id="textContainer">
        </div>
      <button className="w-[3rem] bg-orange-300 text-[3rem] h-[100%] flex flex-cols justify-center items-center text-center max-h-textContainer-btn" id="ttbtn" onClick={(e)=>{
            if(e.currentTarget.innerText==="<"){
                e.currentTarget.innerText=">"
                document.getElementById('textContainer').classList.remove('hidden')
            }
            else{
                e.currentTarget.innerText="<"
                document.getElementById('textContainer').classList.add('hidden')
            }
        }}>{"<"}</button>
    </div>
    </div>
  )
}
