import React from "react";
import { Link } from "react-router-dom";
import { ClassGallery, CTA } from "../components";
import CLASSES from "../data/class_data.json";
import { faArrowCircleRight, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StanfordLogo from "../assets/schools/stanford.png";
import PennLogo from "../assets/schools/upenn.png";
import DartmouthLogo from "../assets/schools/dartmouth.png";
import MITLogo from "../assets/schools/mit.png";
import CarnegieLogo from "../assets/schools/carnegiemellon.png";
import BerkeleyLogo from "../assets/schools/berkeley.png";
import CalTechLogo from "../assets/schools/caltech.png";
import HarvardLogo from "../assets/schools/harvard.png";

const HomePage = () => {
	return (
		<div className="overflow-x-hidden">
			{/* hero  */}
			<section className="px-4 py-16 sm:pb-20 sm:pt-15 mx-auto max-w-7xl">
				<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
					<h1 className="mb-6 congress text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
						Computer Science
						<br />
						<span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-500 lg:inline">
							Learn For Free
						</span>
					</h1>
					<p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
						Learn at your own pace with our curated collection of <br />
						<strong>
							free computer science classes from top colleges across America
						</strong>
					</p>
					<div className="mb-4 space-x-0 md:space-x-2 md:mb-6">
						<Link
							className="inline-flex items-center justify-center w-full mb-2 text-white font-semibold btn btn-primary bg-fuchsia-400 hover:bg-fuchsia-500 px-4 py-2 btn-lg sm:w-auto sm:mb-0 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 mr-2"
							to="/explore"
						>
							Find A Class
							<FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
						</Link>
						<Link
							className="inline-flex items-center justify-center w-full text-white font-semibold mb-2 bg-fuchsia-400 hover:bg-fuchsia-500 px-4 py-2 btn btn-light btn-lg sm:w-auto sm:mb-0 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105"
							to="/contribute"
						>
							Contribute To YakClasses
							<FontAwesomeIcon icon={faMap} className="ml-2" />
						</Link>
					</div>
				</div>
				<div className="w-full mx-auto mt-8 sm:mt-16 text-center md:w-10/12 bg-gradient-to-r from-fuchsia-400  to-blue-500 rounded-lg">
					<img
						src="https://user-images.githubusercontent.com/47064842/121788823-80234b00-cb9e-11eb-82c0-927759e0dba6.png"
						// src="https://user-images.githubusercontent.com/47064842/121788773-04290300-cb9e-11eb-8e5e-95fa321e18db.png"
						alt="Hero"
						className="w-full h-64 rounded-lg sm:h-auto  shadow-2xl object-cover object-center-top opacity-70"
					/>
				</div>
			</section>

			{/* College Logos  */}
			<section className="px-4 py-12 mx-auto max-w-7xl">
				{/* <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
					CS Classes From America's Top Universities
				</h1> */}
				<div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8 filter saturate-200 drop-shadow-lg contrast-125">
					<div className="flex items-center justify-center">
						<img
							src={CarnegieLogo}
							alt="Carnegie Mellon"
							className="block object-contain h-12"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							src={MITLogo}
							alt="MIT"
							className="block object-contain h-12"
						/>
					</div>

					<div className="flex items-center justify-center">
						<img
							src={HarvardLogo}
							alt="Harvard"
							className="block object-contain h-12"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							src={StanfordLogo}
							alt="Stanford"
							className="block object-contain h-12"
						/>
					</div>

					<div className="flex items-center justify-center">
						<img
							src={CalTechLogo}
							alt="Cal Tech"
							className="block object-contain h-12"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							src={PennLogo}
							alt="Penn"
							className="block object-contain h-12"
						/>
					</div>

					<div className="flex items-center justify-center">
						<img
							src={BerkeleyLogo}
							alt="Berkeley"
							className="block object-contain h-12"
						/>
					</div>
					<div className="flex items-center justify-center">
						<img
							src={DartmouthLogo}
							alt="Dartmouth"
							className="block object-contain h-12"
						/>
					</div>
				</div>
			</section>

			{/* about  */}
			<section className="px-4 pt-20 pb-10 mx-auto max-w-7xl">
				<div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
					<div className="text-left">
						<h2 className="mb-4 text-2xl congress font-extrabold tracking-tight text-black md:leading-tight text-left md:text-4xl">
							Help, help, I'm being repressed! Oh! Come and see the violence
							inherent in the system! Help
						</h2>
						<p className="mb-8 text-base  text-gray-600 text-left md:text-lg">
							Well, I didn't vote for you. Did you dress her up like this? …Are
							you suggesting that coconuts migrate? Well, we did do the nose.
							Well, I didn't vote for you. You don't frighten us, English
							pig-dogs! Go and boil your bottoms, sons of a silly person! I blow
							my nose at you, so-called Ah-thoor Keeng, you and all your silly
							English K-n-n-n-n-n-n-n-niggits! Well, we did do the nose. He
							hasn't got shit all over him. Ni! Ni! Ni! Ni! The nose? Now, look
							here, my good man. Shut up! Knights of Ni, we are but simple
							travelers who seek the enchanter who lives beyond these woods.
							Well, what do you want? Oh! Come and see the violence inherent in
							the system!
						</p>
						<Link
							to="/news"
							className="w-full btn btn-dark text-white font-semibold bg-fuchsia-400  hover:bg-fuchsia-500 rounded-lg px-6 py-3 btn-lg sm:w-auto  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 "
						>
							Start Learning
							<FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
						</Link>
					</div>
					<div className=" bg-gradient-to-r from-fuchsia-400  to-blue-500 rounded-lg ">
						<img
							className="w-full bg-gray-200 rounded-lg object-cover object-center-top h-72 sm:h-full opacity-70 "
							alt="info"
							src="https://user-images.githubusercontent.com/47064842/121788773-04290300-cb9e-11eb-8e5e-95fa321e18db.png"
						/>
					</div>
				</div>
			</section>

			{/* fav vids  */}
			<section className=" mx-auto px-4 max-w-7xl lg:max-w-9xl mb-6  mr-6 md:mr-16 lg:mr-24">
				<h2 className="mb-2 text-3xl congress font-extrabold leading-tight text-gray-900 ">
					Featured Classes
				</h2>
				<p className="mb-6 text-lg font-regular text-gray-500">
					"Education is the most powerful weapon which you can use to change the
					world."{" "}
					<span className="text-sm text-fuchsia-400"> - Nelson Mandela </span>
				</p>
			</section>
			<ClassGallery classes={CLASSES} />

			{/* Stats section */}
			<div className="relative bg-gray-900 mt-20">
				<div className="h-80 absolute bottom-0 xl:inset-0 xl:h-full xl:w-full">
					<div className="h-full w-full xl:grid xl:grid-cols-2">
						<div className="h-full xl:relative xl:col-start-2">
							<img
								className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
								src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
								alt="People working on laptops"
							/>
							<div
								aria-hidden="true"
								className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
							/>
						</div>
					</div>
				</div>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
					<div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
						<h2 className="text-sm font-semibold tracking-wide uppercase">
							<span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
								Why learn computer science?
							</span>
						</h2>
						<p className="mt-3 text-3xl font-extrabold text-white">
							Computer Scientists Improve Our World. You Can Too
						</p>
						<p className="mt-5 text-lg text-gray-300">
							Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
							quis in viverra tristique sem. Ornare feugiat viverra eleifend
							fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
							laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
							quis at.
						</p>
						<div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
							<p>
								<span className="block text-2xl font-bold text-white">
									$50000+
								</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Annual cost of attending{" "}
									</span>
									the universities with listed classes
								</span>
							</p>
							<p>
								<span className="block text-2xl font-bold text-white">
									1000+
								</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Computer science classes compiled
									</span>{" "}
									and listed on YakClasses
								</span>
							</p>
							<p>
								<span className="block text-2xl font-bold text-white">
									10000+
								</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Hours of computer science
									</span>{" "}
									content to learn on YakClasses
								</span>
							</p>
							<p>
								<span className="block text-2xl font-bold text-white">
									100%
								</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Free & open-source for everyone
									</span>{" "}
									looking to learn computer science
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<CTA />
		</div>
	);
};
export default HomePage;
