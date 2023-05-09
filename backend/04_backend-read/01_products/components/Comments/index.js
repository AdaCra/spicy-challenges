export default function Comments({ reviews }) {
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>
              {review.title}
              <br />
              {review.rating}/5: {review.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
