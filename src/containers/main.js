import React, { useState, useEffect} from "react";
import StoryList from "../components/storyList";
import Form from "../components/form";


const Main = () => {

    const [stories, setStories] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect( () => {
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 20)
        const storyPromises = sliceData.map((storyId) => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json `)
          .then(res => res.json());
        });
        Promise.all(storyPromises)
        .then((results) => {
          setStories(results)
          setFilteredList(results);
        })
      }
        
        )}, [] )

        const updateFilterList = (text) => {
            console.log(text)
            const lowerText = text.toLowerCase();
            const filteredStories = stories.filter((story) => {
                return story.title.toLowerCase().includes(lowerText);
                })
            setFilteredList(filteredStories);
        }

    

  return(
    <>
        <h1>Hackernews!</h1>
        <Form updateFilterList={updateFilterList}/>

        <StoryList stories={filteredList}/>
    </>
  )
}

export default Main;