import { Link } from "react-router-dom";
const SignUp = () => {
	return (
		<div className="p-3 max-w-xl mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sing Up</h1>
			<form action="" className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="username"
					className="border p-3 rounded-lg"
					id="ussername"
				/>
				<input
					type="text"
					placeholder="email"
					className="border p-3 rounded-lg"
					id="email"
				/>
				<input
					type="text"
					placeholder="password"
					className="border p-3 rounded-lg"
					id="password"
				/>
				<button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
					Sign Up
				</button>
			</form>
			<div className="flex gap-4 mt-5">
				<p>Have you an account?</p>
				<Link to="/sign-in">
					<span className="text-blue-700">Sign in</span>
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
