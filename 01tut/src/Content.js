
const Content = () => {
    const handleNameChange = () =>{
        const name =["Bob","David","Yatharth"];
        let int = Math.floor(Math.random() * 3);
        return name[int];
      }
    const handleClick = () =>{
        console.log('You clicked it!');
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was Clicked`);
    }
  return (
    <main>
        <p>
          Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={() =>{handleClick2('Yatharth')}}>Click me!</button>
    </main>
  )
}

export default Content