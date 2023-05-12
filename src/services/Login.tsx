
interface Log{
    email:string;
    senha:string;
}


export const Login = (props : Log)=>{


    const loginTela = ()=>{
        return alert("Seja Bem vindo"+props.email);

    }
   

}