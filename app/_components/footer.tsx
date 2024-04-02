import Link from "next/link";

const Footer = () => {
    return ( 
        <div className="mt-5 w-full bg-secondary py-6 px-5 text-gray-400 text-xs flex flex-col justify-center items-center">
            <p> 2024 - Fine Cut</p>
            <p> Desenvolvido por <a className="text-primary hover:text-purple-500" href="https://www.linkedin.com/in/mateus-garcia/">{'<mat-garcia/>'}</a></p>
            <p> MIT Licence</p>
        </div>
     );
}
 
export default Footer;