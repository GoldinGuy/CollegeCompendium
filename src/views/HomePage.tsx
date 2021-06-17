import React from "react";
import { Link } from "react-router-dom";
import { ClassGallery, CTA } from "../components";
import CLASSES from "../data/class_data.json";
import { faArrowCircleRight, faPen } from "@fortawesome/free-solid-svg-icons";
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
		<div className="overflow-x-hidden" id="hero">
			{/* hero  */}
			<section className="px-4 py-16 sm:pb-20 sm:pt-15 mx-auto max-w-7xl">
				<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
					<h1 className="mb-6 congress text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
						Audit Over 650 CS Classes
						<br className="hidden sm:flex" />
						<span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-500 lg:inline">
							From Top Universities
						</span>
					</h1>
					<p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
						Learn at your own pace with our curated collection of{" "}
						<br className="hidden sm:flex" />
						<strong>
							free Computer Science classes from top colleges across America
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
							Contribute To Compendium
							<FontAwesomeIcon icon={faPen} className="ml-2" />
						</Link>
					</div>
				</div>

				<section className="px-4 py-12 mx-auto max-w-7xl" id="logos">
					{/* <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">
					CS Classes From America's Top Universities
				</h1> */}
					<div className="grid grid-cols-2 gap-10  text-center lg:grid-cols-8 filter grayscale brightness-90">
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

				<div className="w-full mx-auto mt-8 text-center md:w-10/12 bg-gradient-to-r from-fuchsia-400  to-blue-500 rounded-lg">
					<img
						src="https://user-images.githubusercontent.com/47064842/121788823-80234b00-cb9e-11eb-82c0-927759e0dba6.png"
						// src="https://user-images.githubusercontent.com/47064842/121788773-04290300-cb9e-11eb-8e5e-95fa321e18db.png"
						alt="Hero"
						className="w-full h-64 rounded-lg sm:h-auto  shadow-2xl object-cover object-center-top opacity-70"
					/>
				</div>
			</section>

			{/* about  */}
			<section className="px-4 pt-20 pb-10 mx-auto max-w-7xl" id="about">
				<div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
					<div className="text-left">
						<h2 className="mb-4 text-2xl congress font-extrabold tracking-tight text-black md:leading-tight text-left md:text-4xl">
							We Complement Your CS Journey By Cataloging Classes Across Topics
							& Experience Levels
						</h2>
						<p className="mb-8 text-base  text-gray-600 text-left md:text-lg">
							College Compendium serves a single purpose: we help you find your
							next Computer Science resource or curriculum. Regardless of where
							you are in your journey, we provide a catalog of classes that are
							relevant to your skill-level, time-commitment, and learning style.
							At College Compendium, we pride ourselves in giving users the
							tools to try, fail, and try again. With hundreds of classes (and
							growing), you will never hit a dead end.
						</p>
						<Link
							to="/explore"
							className="w-full btn btn-dark text-white font-semibold bg-fuchsia-400  hover:bg-fuchsia-500 px-6 py-3 btn-lg sm:w-auto  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 "
						>
							Start Learning
							<FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
						</Link>
					</div>
					<div className=" bg-gradient-to-r from-fuchsia-400  to-blue-500 rounded-lg ">
						<img
							className="w-full bg-gray-200 rounded-lg object-cover object-center-top h-72 sm:h-full opacity-100 "
							alt="info"
							src="https://user-images.githubusercontent.com/47064842/122471339-28655500-cf8d-11eb-8928-2d8050ce5a57.png"
							// src="https://user-images.githubusercontent.com/47064842/121788773-04290300-cb9e-11eb-8e5e-95fa321e18db.png"
						/>
					</div>
				</div>
			</section>

			{/* fav vids  */}
			<section
				className=" mx-auto px-4 max-w-7xl lg:max-w-9xl mb-6  mr-6 md:mr-16 lg:mr-24"
				id="featured"
			>
				<h2 className="mb-2 text-3xl congress font-extrabold leading-tight text-gray-900 ">
					Featured Classes
				</h2>
				<p className="mb-6 text-lg font-regular italic font-semibold text-gray-500">
					"Education is the most powerful weapon which you can use to change the
					world."{" "}
					<span className="text-base text-fuchsia-400"> - Nelson Mandela </span>
				</p>
			</section>
			<ClassGallery classes={CLASSES} />

			{/* Stats section */}
			<div className="relative bg-gray-900 mt-20" id="stats">
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
							Computer Scientists Improve Our World. You Can Too!
						</p>
						<p className="mt-5 text-lg text-gray-300">
							Startup founder, CS student, data enthusiast, or first-time coder.
							Our compilation of courses spans hundreds of classes across dozens
							of domains, ranging from introductory courses to Graduate-Level
							Seminars. Topics include: Algorithms, Data Science, Data
							Structures, Systems, Quantum Computing, Cryptography,
							Cybersecurity, Application Development, Video Game Design,
							Software Engineering, and much more!
						</p>
						<div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
							<p>
								<span className="block text-2xl font-bold text-white">
									$68,800
								</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Annual cost of attending a university{" "}
									</span>
									with a top CS curriculum
								</span>
							</p>
							<p>
								<span className="block text-2xl font-bold text-white">675</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Computer Science classes compiled
									</span>{" "}
									and listed on College Compendium
								</span>
							</p>
							<p>
								<span className="block text-2xl font-bold text-white">
									125,000+
								</span>
								<span className="mt-1 block text-base text-gray-300">
									<span className="font-medium text-white">
										Hours of Computer Science content{" "}
									</span>{" "}
									to learn on College Compendium
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
									looking to learn Computer Science
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
