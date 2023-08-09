import { useContext } from "react";
import {ThemeContext} from '../context/theme';
import Head from 'next/head';


const ToogleTheme =()=> {
    const [theme, setTheme] = useContext(ThemeContext);
   
    return (
    <>
    <Head>
<link rel="stylesheet" href={`/css/${theme}.css`} />
    </Head>
    {theme === 'light' ? (
          <span
           onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}
            style={{cursor:'pointer', fontSize:'24px'}}>🌓</span>
    ): (
        <span
         onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}} 
         style={{ cursor:'pointer',fontSize:'24px'}}>🌞</span>
    )}
   
   
    </>)
}
export default ToogleTheme;