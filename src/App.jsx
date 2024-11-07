import { useState } from "react"
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import Notifications from "./components/Notifications/Notifications"
import { useEffect } from "react"

function App() {

const [feedbacks, setFeedbacks] = useState(() => {

    const savedFeedbacks = window.localStorage.getItem("feedbacks");

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
})

const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

const updateFeedback = feedbackType => {
  setFeedbacks({
    ...feedbacks,
    [feedbackType]: feedbacks[feedbackType] + 1,

  })

}

const resetFeedback = () => {
  setFeedbacks({
    good: 0,
    neutral: 0,
    bad: 0,
  })
}

useEffect(() =>{
  window.localStorage.setItem("feedbacks",JSON.stringify(feedbacks))
},[feedbacks]) 


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback < 1 && <Notifications />}
      <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback}/>
    </>
  )
}

export default App




