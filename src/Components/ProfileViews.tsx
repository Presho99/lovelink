import React, {useEffect, useState} from 'react'

function ProfileViews() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(count < 24){
                setCount(count + 1)
            }else {
                clearInterval(interval)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [count])
  return (
    <div className='w-full p-2'>
        <h3>Profile Views</h3>
        <div>{count}</div>
    </div>
  )
}

export default ProfileViews