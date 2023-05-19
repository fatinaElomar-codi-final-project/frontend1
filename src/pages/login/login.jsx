import React from 'react'
import "./login.css"
export default function Login() {
 
  return (
    <div className='login-container'>
<script  src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ></script>
<div class="body">
		<div class="veen">
			<div class="login-btn splits">
				<p>Already an user?</p>
				<button class="active">Login</button>
			</div>
			<div class="rgstr-btn splits">
				<p>Don't have an account?</p>
				<button>Register</button>
			</div>
			<div class="wrapper">
				<form id="login" tabindex="500">
					<h3>Login</h3>
					<div class="mail">
						<input type="mail" name=""/>
						<label>Mail or Username</label>
					</div>
					<div class="passwd">
						<input type="password" name=""/>
						<label>Password</label>
					</div>
					<div class="submit">
						<button class="dark">Login</button>
					</div>
				</form>
				<form id="register" tabindex="502">
					<h3>Register</h3>
					<div class="name">
						<input type="text" name=""/>
						<label>Full Name</label>
					</div>
					<div class="mail">
						<input type="mail" name=""/>
						<label>Mail</label>
					</div>
					<div class="uid">
						<input type="text" name=""/>
						<label>User Name</label>
					</div>
					<div class="passwd">
						<input type="password" name=""/>
						<label>Password</label>
					</div>
					<div class="submit">
						<button class="dark">Register</button>
					</div>
				</form>
			</div>
		</div>	
	</div>


	{/* <style type="text/css">
		.site-link{
      padding: 5px 15px;
			position: fixed;
			z-index: 99999;
			background: #fff;
			box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
			right: 30px;
			bottom: 30px;
			border-radius: 10px;
		}
		.site-link img{
			width: 30px;
			height: 30px;
		}
	</style> */}
</div>
  )
}

