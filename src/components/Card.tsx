import { Button, TextField } from "@mui/material"
import { Layout } from "./Layout"
import { FormEvent } from "react";

export  const Card = ()=>{

    const login =(e: FormEvent)=>{
        e.preventDefault();
         const inputEmail =  document.getElementById("emailLogin") as HTMLInputElement;
        const email:string = inputEmail.value;
           alert("ola seja bem Vindo\n"+email);
         }


    return(
        <div className='fundoLogin'>


        <Layout >
        <div className='telaLogin'>
          <div>
          <h1>Faça o Login</h1>
          </div>
       
         <form onSubmit={login}>
          <div className='divInput' >
          <TextField  size='small' id="emailLogin" 
          label="Email"
          type='email'
          required
          InputLabelProps={{shrink : true}}
           />
  
  <TextField size='small' id="senhaLogin" 
          label="Senha"
          type='password'
          InputLabelProps={{shrink : true}}
           />
  
          </div>
          <Button color='primary' variant='contained' type='submit'>
            Entrar
          </Button>
          </form>
  
          </div>
  
  
        </Layout>
  
        </div>
    )

}