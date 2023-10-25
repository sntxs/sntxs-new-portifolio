<script setup>
import styles from "../css/Contact.css";
</script>

<template>
    <div className="contact_cont">
        <br />
        <section id="Contact">
            <div className="bg">


                <h1>CONTATO</h1>

                <!--

                <form action="https://api.staticforms.xyz/submit" method="post" data-form="">
                    <label for="name">Nome</label> Formulario para o Nome 
                <input type="text" name="name" placeholder="Digite seu nome" required />

                <label for="email">Email</label> Formulario para o Email 
                <input type="text" name="email" placeholder="Digite seu email" />

                <label for="message">Mensagem</label> Formulario para o envio de mensagem 
                <textarea name="message" cols="30" placeholder="Digite sua mensagem" required></textarea>

                <button type="submit" data-button>Enviar</button> Botao de envio 
                <input type="hidden" name="accessKey" value="c2324439-cae1-4c22-b696-54802975256c" />
                <input type="hidden" name="redirectTo" value="http://localhost:5173/" />
                </form>

                -->

                <form action="https://formsubmit.co/ajax/natanrodrigues649@gmail.com" method="POST" data-form>
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="nome" required />

                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" required />

                    <label for="mensagem">Mensagem</label>
                    <textarea name="mensagem" id="mensagem" required></textarea>
                    
                    <button type="submit" data-button>Enviar</button>
                </form>



            </div>
        </section>
    </div>
</template>
