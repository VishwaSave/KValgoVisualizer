import React from 'react'

export default function Text() {
  return (
    <div className="w-[26%] h-[9%] absolute bottom-[33%] right-[0px] flex justify-end max-h-textContainer">
        <div className="w-[83%] h-[100%] bg-orange-300 mr-2 hidden p-2 max-h-textContainer-text" id="textContainer">
        </div>
      <button className="w-[14.9%] bg-orange-300 text-[3rem] h-[100%] flex flex-cols justify-center items-center text-center max-h-textContainer-btn" id="ttbtn" onClick={(e)=>{
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
