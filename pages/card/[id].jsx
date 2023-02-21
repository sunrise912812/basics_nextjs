import CardItem from "@/app/cards/CardItem"
import Meta from "@/app/utils/Meta"
import Link from "next/link"

const Card = ({card})=>{
    return(
      <div>
        <Meta title='Страница карточки' description=''/>
        <main className='w-1/4 mx-auto mt-10'>
          <CardItem card={card}/>
          <Link href={'/'}>Back to Home</Link>
        </main>
      </div>
    )
}

export const getStaticPaths = async ()=>{
    const response = await fetch('http:localhost:3000/api/cards') //Делаем запрос на сервер
    const cards = await response.json()

    const paths = cards.map(c=> ({params : {id : c._id}}))

    return {paths , fallback : 'blocking'}
}

export const getStaticProps = async ({params})=>{
    const response = await fetch(`http:localhost:3000/api/cards/${params.id}`) //Делаем запрос на сервер
    const card = await response.json()
    return(
      {
        props : {
          card
        },
        revalidate : 10
      }
    )
  }

export default Card