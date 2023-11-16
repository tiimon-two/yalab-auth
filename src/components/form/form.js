import Button from "../button/button";
import { mockDb } from "../mock/mock";
import { StyledForm, Input, Label, Title } from "./styled";

export default function Form() {

    const authHandler = (evt) =>{
        evt.preventDefault();       
        const formData = new FormData(evt.target);       
        const mock = mockDb.users;
        let findUser;
        mock.forEach((user) => {
            if(user.email === formData.get('email') && user.password === formData.get('password')) {
               alert('Авторизация по почте ' + user.email);
               findUser = true;
               evt.target.reset(); 
            }
        });
        if(!findUser) {
            alert('Проверьте почту/пароль!');
        }           
    };

    return(
        <>
            <StyledForm action="https://httpbin.org/post" method="post" onSubmit={authHandler}>
                <Title>Авторизация</Title>
                <Label>
                    <Input type="email" placeholder="Почта" name="email" id="email" required/>
                </Label>
                <Label>
                    <Input type="password" placeholder="Пароль" name="password" id="password" required/>
                </Label>
                <Button type="submit">Войти</Button>
            </StyledForm>
        </>
    );
}