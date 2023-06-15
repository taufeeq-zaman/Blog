import Image from 'next/image'
 
const Card = ()=> {
  return (
        <div>
                <Image
                src="/profile.png"
                width={500}
                height={500}
                alt="Banner"
                />
                <h1>Title</h1>
                <p>description</p>
        </div>
  )
}

export default Card;