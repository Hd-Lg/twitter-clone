'use client';
import { useState } from 'react';

const Login = () => {
	const [showLogin, setShowLogin] = useState(true);
	return (
		<div>
			{showLogin ? (
				<>
					<div>Bird</div>
					<div>
						<h3>Sign in to Twitter</h3>
						<div>Google Apple</div>
						<div>or</div>
						<input type={'email'} placeholder='Email' />
						<button>Next</button>
						<button>Forgot password?</button>
					</div>
					<div>
						<p>
							Don't have an account?{' '}
							<span
								onClick={() => setShowLogin(false)}
								className='cursor-pointer text-blue-500'>
								Sign up
							</span>
						</p>
					</div>
				</>
			) : (
				<>
					<div>Bird</div>
					<div>
						<h3>Join Twitter today</h3>
						<div>Google Apple</div>
						<div>or</div>
						<button>Create account</button>
						<p>
							By signing up, you agree to the <span>Terms of Service</span> and{' '}
							<span>Privacy Policy</span>, including <span>Cookie Use</span>.
						</p>
					</div>
					<div>
						<p>
							Have an account already?{' '}
							<span
								onClick={() => setShowLogin(true)}
								className='cursor-pointer text-blue-500'>
								Login
							</span>
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default Login;
