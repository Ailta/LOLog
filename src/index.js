export default function MyApp(){
    return(
        <div>
            <h1>LOLog</h1>
            <Add />
            {/* zde vypsat obsah databáze */}
        </div>
    );        
}
function Add() {
    const[message, setMessage] = useState(null);
    function OnClick() {
        setMessage(message);
        // uložit input text do databáze      
    }
    return(
        <div>
            <input type="text" id="message" placeholder="Zde zadejte novou poznámku"></input>
            <button OnClick={OnClick}>Přidat</button>
        </div>
    );
}