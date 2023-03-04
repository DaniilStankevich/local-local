// ФУНКЦИОНАЛЬНЫЙ КОМПОНЕНТ:



const App = ({ initialButtonText, initialClassesList  }) => {    

   
   const [buttonText, setButtonText]  =  React.useState(initialButtonText)
   const [classesList, setClassesList]  =  React.useState(initialClassesList )



    const onButtonClick = () => {
        setButtonText('Hello from React')
        setClassesList('green-btn')
    }




    return   (                                                                                                      // - Возмвращение JSX-кода           
        <div className="app"> 
            <button className={classesList} onClick={onButtonClick}> {buttonText} </button>
        </div> 
    )

}



const conteiner = document.getElementById('app') 
const root = ReactDOM.createRoot(conteiner)


root.render(<App initialButtonText="Click me" initialClassesList=""/>)   




                                                                                             // Вызываем наш пользовательский компонент
 


        // <App buttonText="Click me"/>) - передача св-ва функциональному компоненту 
        // buttonText - свойство, которые мы передаём компоненту 
        // "Click me" - значение этого свойства 










// className - добоавляет свойство "class" в элемент
// ' '- когда мы пишем JS код, ""- для значния свойств, которые мы передаем в компонент

// () - оператор группирования
// {buttonText} любое выражение JS можно записать в JSX при помощи {}
// ..  setButtonText] - функция задаёт нвоое состоние 


