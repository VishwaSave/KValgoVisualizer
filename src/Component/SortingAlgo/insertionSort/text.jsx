import React from 'react'

export default function Text() {
  return (
    <div className="w-[26%] h-[12%] absolute bottom-[36%] right-[0px] flex justify-end">
        <div className="w-[83%] h-[100%] bg-orange-300 mr-2 hidden p-2" id="textContainer">
        </div>
      <button className="w-[59px] bg-orange-300 text-[3rem] h-[100%] flex flex-cols justify-center items-center text-center" id="ttbtn" onClick={(e)=>{
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
  )
}
