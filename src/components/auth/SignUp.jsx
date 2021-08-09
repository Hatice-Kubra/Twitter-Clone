import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { useForm } from "react-hook-form";
import { Form, Segment, Button, Grid, Message } from 'semantic-ui-react';
import styles from "./signup.module.css";

const SignUp = (props) => {
    const firebase = useFirebase();
    const { register, errors, handleSubmit, setValue } = useForm();

    const [ fbErrors, setFbErrors ] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        register("username", { required: true });
        register("bday", { required: true });
        register("email", { required: true });
        register("password", { required: true, minLength: 6 });

      }, []);

    const onSubmit = ({username, bday, email, password}, e) => {
        setSubmitting(true);
        setFbErrors([]);

        const [first, last] = username.split(" ");


        firebase
        .createUser(
          { username, bday, email, password},
          { name: username, avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`}
        )
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
            console.error(error);
            setSubmitting(false);
        });

    };
    
    return(
        <Grid textAlign="center"  verticalAlign="middle" className={styles.container}>
            <Grid.Column style = {{ maxWidth: 450} }>
                <h1 className={styles.formHeader}>Twitter Clone</h1>
                <Form 
                size="large"
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}>

                    <Segment>
                        <Form.Input 
                        fluid icon="user" 
                        iconPosition="left" 
                        name="username"                         
                        onChange={(event, {name, value}) => {
                            setValue(name, value);
                        }} 
                         placeholder="Kullanıcı Adı" 
                         type="text"/>


                        <Form.Input 
                        fluid icon="calendar" 
                        iconPosition="left" 
                        name="bday"                         
                        onChange={(event, {name, value}) => {
                            setValue(name, value);
                        }} 
                        placeholder="Doğum Tarihi" 
                        type="date"/>

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


                        <Button color="purple" fluid size="large" disabled={submitting}>
                        Kayıt Ol
                        </Button>
                    </Segment>

                </Form>

                <Message>
                    Zaten bir hesabın var mı? <Link to="/login"> Giriş Yap </Link>
                </Message>
            </Grid.Column>

        </Grid>
    );
};

export default SignUp;