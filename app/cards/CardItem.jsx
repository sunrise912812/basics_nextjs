import Image from "next/image"
import Link from "next/link"

const CardItem = ({card})=>{
    return(
        <div className="rounded-xl p-5 mb-5 text-white w-3/4 mx-auto" style={{backgroundColor : card.color}}>
            <Link href={`/card/${card._id}`}>
             
            <Image src='https://www.seekpng.com/png/full/794-7948448_mastercard-mastercard-logo-grayscale.png' 
            width={40}
            height={28} 
            alt=''/>
            <div className="opacity-50 mt-5 mb-1" style={{fontSize : '12px'}}>Current Balance</div>
            <div>{card.balance.toLocaleString('ru-Ru', {
                currency : 'RUB',
                style : 'currency'
            })}</div>

            <div className="mt-5 text-xs">{card.number}</div>
                
            </Link>
        </div>
    )
}

export default CardItem