import React from "react";
import Story from "./story";

const StoryList = ({stories}) => {

    const StoryItems = stories.map((story, index) => {
      return <Story key={index} story={story}/>
    })

  return(
    <>
        <ul>
            {StoryItems}
        </ul>
    </>
  )
}

export default StoryList;