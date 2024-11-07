
export default function Feedback({ feedbacks, totalFeedback }) {
    return (
        <>
            {totalFeedback > 0 && (
                <>
                <p>Good: {feedbacks.good}</p>
                <p>Neutral: {feedbacks.neutral}</p>
                <p>Bad: {feedbacks.bad}</p>
                <p>Total: {feedbacks.bad + feedbacks.good + feedbacks.neutral}</p>
                <p>Positive: {Math.round((feedbacks.good / totalFeedback) * 100)}% </p>
                </>
            )}
        </>
     );
}


    


