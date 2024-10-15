export default function productId({params}:{
    params:{
        productId: String
    }
}){
   return <h2>product no:{params.productId}</h2>
}