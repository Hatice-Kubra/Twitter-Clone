import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react';
import styles from "./login.module.css";
import { ErrorSharp } from '@material-ui/icons';

const Login = (props) => {
    const { register, errors, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register( "email" , { required: true });
        register( "password" , { required: true, minLength: 6 });
      }, []);
    
    const onSubmit = (data, e) => {
        console.log(data);
    };

    return(
        <div className={'page-container'}>
        <Grid textAlign="center"  verticalAlign="middle" className={styles.container}>
            <Grid.Column style = {{ maxWidth: 450} }>
                <h1 className={styles.formHeader}>Twitter Clone</h1>
                <Form size="large" className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <Segment>
                        <Form.Input 
                        fluid icon="mail" 
                        iconPosition="left" 
                        name="email"
                        onChange={(event, {name, value}) => {
                            setValue(name, value);
                        }} 
                        placeholder="Email Adresi" 
                        type="email" />

                        <Form.Input 
                        fluid icon="lock" 
                        iconPosition="left" 
                        name="password" 
                        onChange={(event, {name, value}) => {
                            setValue(name, value);
                        }} 
                        placeholder="Şifre" 
                        type="password"/>

                        <Button color="purple" fluid size="large">
                        Giriş Yap
                        </Button>
                    </Segment>

                </Form>

                <Message>
                    Yeni misin? <Link to="/signup"> Üye Ol </Link>
                </Message>
            </Grid.Column>

        </Grid>
        </div>
    );
};

export default Login;