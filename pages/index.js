import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Meta from '@/app/utils/Meta'
import CardItem from '@/app/cards/CardItem'

const inter = Inter({ subsets: ['latin'] })

export default function Home({cards}) { // Получаем карточки переданные нам с сервера
  return (
    <>
      <Meta title='Главная' description='Описание страницы'/>
      <main className='w-1/4 mx-auto mt-10'>
      {
        cards.map(card=><CardItem key={card._id} card={card}/>)
      }
      </main>
    </>
  )
}

export const getStaticProps = async ()=>{
  const response = await fetch('http:localhost:3000/api/cards') //Делаем запрос на сервер
  const cards = await response.json()
  return(
    {
      props : {
        cards
      },
      revalidate : 10
    }
  )
}
