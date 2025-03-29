export  const Buttons = ({name, onClick})=>{
    return (
    <button  className='bg-amber-400 h-15 hover:bg-blue-400 text-medium flex items-center justify-center w-40  rounded-3xl'>{name}</button>
    );
}
export const H1 = ({text})=>{
    retunr (
    <h1> {text }</h1>
    );

}
export const Input = ({name, placeholder, value, type})=>{
    return (
        <input type={type} name={name} placeholder={placeholder} value={value}/>
    );
    

}
export const P = ({text})=>{
    return (
        <p> {text}</p>
    );

}
export const H2 =({text})=>{
    return (
        <h2> {text}</h2>
    );
}
export const H3 = ({text})=>{
    return (
        <h3> {text}</h3>
    );
}
export const Image = ({src, alt})=>{
    return (
        <img src={src} alt={alt}/>
    )

}