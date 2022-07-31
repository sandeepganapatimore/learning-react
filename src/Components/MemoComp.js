import React from 'react'

function MemoComp({data}) {
  console.log("Rendring Memo component")
    return (
        <div>
        {data}
        </div>
    )
}

export default React.memo(MemoComp)