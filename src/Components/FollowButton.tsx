import React, {useState} from 'react'

function FollowButton() {
    const [isFollowing, setIsFollowing] = useState(false)
    const buttonText = isFollowing ? 'Following' : 'Follow'
    const buttonColor = isFollowing ? 'bg-pink-500' : 'bg-pink-100'
    const textColor = isFollowing ? 'text-white' : 'text-pink-500'

    const handleClick = () => {
        setIsFollowing((prevFollowing) => !prevFollowing)
    }

  return (
    <button className={`px-4 py-2 rounded-full ${buttonColor} ${textColor}`} onClick={handleClick}>
        {buttonText}
    </button>
  )
}

export default FollowButton