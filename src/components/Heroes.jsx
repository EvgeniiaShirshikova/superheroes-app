import heroes from '../data/heroes.json'

export default function Heroes() {
    return (
        <div className='container'>
            {
                heroes.map((item,index)=>(
                    <div className='superhero-card' key={index}>
                    <h2 className='superhero-card__name'>{item.name}</h2>
                    <div className='superhero-card__universe'>Вселенная: {item.universe}</div>
                    <div className='superhero-card__alterego'>Альтер эго: {item.alterego}</div>        
                    <div className='superhero-card__occupation'>Род деятельности: {item.occupation}</div>
                    <div className='superhero-card__friends'>Друзья: {item.friends}</div>
                    <div className='superhero-card__superpowers'>Суперсилы: {item.superpowers}</div>
                    <img className='superhero-card__img' src={item.url} alt={item.id}></img>
                    <div className='superhero-card__info hidden'>Описание: {item.info}</div>
                </div>
                ))
            }
        </div>
    )
}