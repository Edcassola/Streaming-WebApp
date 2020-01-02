<template>



<div class="container">
    <img src="@/assets/img/more_music.svg" class="wave">
    <div class="login-content">
        <form @submit.prevent="doLogin()">

            <img src="../assets/img/avatar.svg">
            <h2 class="title">BEM-VINDO ao <p class="cor">gargus</p></h2>

            <div class="input-div one">
                <div class="i">
                    <i class="fas fa-user"></i>
                </div>
                <div class="div">
                    <h5></h5>
                    <input required type="email" 
					v-model="email" class="input" placeholder="E-mail">
                </div>
            </div>

            <div class="input-div pass">
                <div class="i">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                    <h5></h5>
                    <input required type="password" 
					v-model="password" class="input" placeholder="Palavra passe">
                </div>
            </div>

            <a href="#">*Esqueci a palavra passe</a>
            <input type="submit" 
			 class="btn" value="Login">
			<i class="fas fa-spinner"></i>

        </form>
    </div>
</div>

</template>

<script>
export default {
	name: 'Login',
	data: () => {
		return {
			email: '',
			password: ''
		}
	},

methods: {
async doLogin () {
	const { email, password  } = this
	
	try {
			const res = await this.$firebase.auth().signInWithEmailAndPassword(email, password)

		window.uid = res.user.uid

		this.$router.push({ name: 'home' })

	} catch (err) {
		console.log(err)
			}
		}
	}
}
</script>



<style>

*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}


body{
    font-family: 'Poppins', sans-serif;
}

.container.wave{
	position: fixed;
	bottom: 10px;
	left: 10px;
	height: 83%;
	z-index: -1;
}

.phone{
	position: relative;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}

.container{
    width: 90vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
}

.img{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.login-content{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
}

.img img{
	width: 500px;
}

form{
	width: 360px;
	margin-left: 50px;
}

.login-content img{
    height: 100px;
}

.login-content h2{
	margin: 15px 0;
	color: #333;
	text-transform: uppercase;
	font-size: 2.8rem;
}

.login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one{
	margin-top: 0;
}

.i{
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div > div{
    position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 17px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #6c63ff;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #6c63ff;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus > div > h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus > .i > i{
	color: #6c63ff;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
}

.input-div.pass{
	margin-bottom: 4px;
}

a{
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
}

a:hover{
	color: #6c63ff;
}

.btn{
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #6c60ff, #6c71ff, #6c60ff);
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
}
.btn:hover{
	background-position: right;
}


@media screen and (max-width: 1250px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	form{
		width: 290px;
	}

	.login-content h2{
        font-size: 2.4rem;
        margin: 8px 0;
	}

	.img img{
		width: 400px;
	}
	.phone{
		display: none;
	}

}

@media screen and (max-width: 850px){
	.container{
		grid-template-columns: 1fr;
	}

	.img{
		display: none;
	}

	.wave{
		display: none;
	}

	.login-content{
		justify-content: center;
	}

	.phone{
		position: fixed;
		right: 0;
		bottom: 0;
		width: 140vh;
		height: 20%;
		z-index: -1;
		margin-left: 10px;
	}
}

p::first-letter {
	color: #6c63ff;
}


</style>