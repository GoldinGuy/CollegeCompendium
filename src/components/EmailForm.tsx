import { useState } from "react";

const EmailForm = () => {
	const [email, setEmail] = useState("");

	return (
		<section className="px-4 py-8 mx-auto max-w-7xl">
			<div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
			
				<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
					<i className="mb-4 block">
						We’re on a mission to bring the best of open source learning to
						students everywhere
					</i>
					Join our mailing list and hear about more awesome CS resources!
				</p>
				<form className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12">
					<label className="col-auto lg:col-span-4 ">
						<span className="sr-only">Your Email</span>
						<input
							className="w-full p-3 text-md text-gray-900 bg-gray-200 rounded-xl focus:outline-none focus:shadow-outline"
							type="email"
							placeholder="Enter your email..."
							required={true}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</label>
					<button
						onClick={() => {
							if (
								email.includes("@") &&
								email.includes(".") &&
								process.env.REACT_APP_IFTTT_KEY
							) {
								console.log("Email is valid: ", email);
								fetch(
									`https://maker.ifttt.com/trigger/email_received/with/key/${process.env.REACT_APP_IFTTT_KEY}?&value1=${email}`,
									{
										method: "POST",
										mode: "no-cors",
										// headers: {
										// 	"Content-Type": "application/json"
										// 	// "Access-Control-Allow-Methods": "*"
										// },
										// body: JSON.stringify({
										// 	value1: email
										// })
									}
								);
								setEmail("");
							}
						}}
						className="w-full col-auto btn py-3 btn-primary btn-lg lg:col-span-2 rounded-xl text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
						type="submit"
					>
						Oh Yeah!
					</button>
				</form>
			</div>
		</section>
	);
};
export default EmailForm;
