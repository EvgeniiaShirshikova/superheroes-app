### Вопросы 💎

1. Что такое props и можно ли использовать props в функциональных компонентах?

Это свойства компонента. Да, можно.

2. Нужно ли выделять в отдельный компонент статью в блоге?

Можно выделить, а можно сделать составной компонент-контейнер со всеми статьями. Или сделать компонент, который обрабатывает json файл со статьями, как массив.

3. Можно ли использовать React без JSX?

Можно, но код будет очень длинным. JSX его сокращает.

4. Чем отличается JSX от HTML?

По большей части синтаксис и структура JSX и HTML совпадают, но есть некоторые важные различия:

- так как это похожий на XML синтаксис, одиночные теги в JSX должны быть закрыты: `<hr />`;
- вместо атрибута `class` в JSX используется имя свойства в DOM: `className`;

5. Для чего нам нужны свойства (props) компонентов?

Чтобы переиспользовать компонет, а не писать новый под каждый item, можно брать свойства item и подставлять их в существующий компонент.

6. В примере с `CardList` чем можно было бы заменить `<React.Fragment>`?

пустыми скобками <></>

7. Можно ли сказать, что классовые и функциональные компоненты равнозначны по функциональности?

В целом да, но есть различия

8. Можно ли полностью описать приложение, используя только функциональные компоненты?

да

9. Какой командой мы делаем экспорт компонента для возможности его использования в других местах приложения?

export default name-component

10. Изучите структуру компонент в проекте https://github.com/alisa-tsvetkova/EthereumUI и напишите, какой именно компонент является самым верхним, а какой самым «глубоким»?

Самый верхний App, самый глубокий BlockTranTable

11. Какой командой можно сгенерировать разметку/компоненты на основе заранее заданного массива элементов? Приведите пример.

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
