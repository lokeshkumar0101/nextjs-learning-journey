

const reviewId = ({params}:{params:{reviewId: String, productId: String}}) => {
  return (
    <div>
        <h3>this is review: {params.reviewId}, for product: {params.productId}</h3>
    </div>
  )
}

export default reviewId