
export default function Feedback({ feedbacks, totalFeedback }) {
    return (
        <>
                <>
                <p>Good: {feedbacks.good}</p>
                <p>Neutral: {feedbacks.neutral}</p>
                <p>Bad: {feedbacks.bad}</p>
                <p>Total: {totalFeedback}</p>
                <p>Positive: {Math.round((feedbacks.good / totalFeedback) * 100)}% </p>
                </>
        </>
     );
}


    


