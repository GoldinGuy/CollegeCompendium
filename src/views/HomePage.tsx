/*  College Compendium Component File
Copyright (C) 2021 Seth Goldin & Samuel Crombie
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version. 
You may not use your own version of this program commerically.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
You can contact us for more details at team@collegecompendium.org. */

import React from "react";
import { Link } from "react-router-dom";
import { ClassGallery, CTA } from "../components";
// import FEATURED from "../data/featured.json";
import { faArrowCircleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Class } from "../typings/interfaces";

const HomePage = React.memo(({ featured, loading }: { featured: Class[]; loading: boolean }) => {
	return (
		<div className="overflow-x-hidden" id="hero">
			{/* hero  */}
			<section className="px-4 py-16 sm:pb-20 sm:pt-15 mx-auto max-w-7xl">
				<div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
					<h1 className="mb-6 congress text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
						Audit Over <br className="sm:hidden" /> 900 CS Classes
						<br className="hidden sm:flex" />
						<span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-500 lg:inline">
							{" "}
							From Top Universities
						</span>
					</h1>
					<p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
						Learn at your own pace with a curated collection of{" "}
						<br className="hidden sm:flex" />
						<strong>
							free and open source computer science resources from top colleges
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

						<a
							className="inline-flex items-center justify-center w-full text-white font-semibold mb-2 bg-fuchsia-400 hover:bg-fuchsia-500 px-4 py-2 btn btn-light btn-lg sm:w-auto sm:mb-0 transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/GoldinGuy/CollegeCompendium"
						>
							Star On GitHub
							<FontAwesomeIcon icon={faStar} className="ml-2" />
						</a>
					</div>
				</div>

				<div className="w-full mx-auto mt-12 text-center md:w-10/12 bg-gradient-to-r from-fuchsia-400  to-blue-500 rounded-lg">
					<img
						src="https://user-images.githubusercontent.com/47064842/121788773-04290300-cb9e-11eb-8e5e-95fa321e18db.png"
						//src="https://user-images.githubusercontent.com/47064842/122480760-71240a80-cf9b-11eb-8865-97e822d3f064.jpg"
						alt="Hero"
						loading="lazy"
						className="w-full rounded-lg sm:h-auto  shadow-2xl object-cover object-center-top opacity-70" //max-h-96
					/>
				</div>
			</section>

			{/* info  */}
			<section className="px-4 pt-20 pb-10 mx-auto max-w-7xl" id="info">
				<div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
					<div className="text-left">
						<h2 className="mb-4 text-2xl congress font-extrabold tracking-tight text-black md:leading-tight text-left md:text-4xl">
							We Complement Your CS Journey By Cataloging CS Resources Across
							Topics & Experience Levels
						</h2>
						<p className="mb-8 text-base  text-gray-600 text-left md:text-lg">
							College Compendium serves a single purpose: we help you find your
							next computer science resource or curriculum. Regardless of where
							you are in your journey, we've compiled a catalog of CS course
							resources that are relevant to your skill-level, time-commitment,
							and learning style. With hundreds of classes (and growing), you
							will never hit a dead end.
						</p>
						<Link
							to="/explore"
							className="w-full btn btn-dark text-white font-semibold bg-fuchsia-400  hover:bg-fuchsia-500 px-6 py-3 btn-lg sm:w-auto  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 "
						>
							Start Learning
							<FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
						</Link>
					</div>
					<div className=" rounded-lg relative">
						<img
							className="w-full bg-gray-200 rounded-lg object-cover object-center-top h-72 sm:h-full opacity-100 "
							alt="info"
							loading="lazy"
							src="https://user-images.githubusercontent.com/47064842/127606430-11de7939-b12d-4cef-8d15-8dd76aaa372c.png"
						/>
						{/* <img
							className="w-full bg-gray-200 rounded-lg object-cover object-center-top h-72 sm:h-full opacity-70 "
							alt="info"
							loading="lazy"
							src="https://user-images.githubusercontent.com/47064842/121788773-04290300-cb9e-11eb-8e5e-95fa321e18db.png"
						/>
						<div className="absolute top-0 left-0 w-full h-full flex-col flex items-center justify-center">
							<h1 className="mb-4 text-ld font-bold tracking-wide text-center text-gray-200 uppercase">
								AS Seen On
							</h1>
							<div className="filter grayscale brightness-50 invert not-selectable">
								<a
									className="flex items-center justify-center"
									href="https://www.morningbrew.com/sidekick/stories/2021/06/21/sidekicks-smarter-living-recs-0621"
									target="_blank"
									rel="noreferrer"
								>
									<img
										draggable="false"
										className="block object-contain h-14"
										src="https://morningbrew-oslo.s3.us-west-2.amazonaws.com/1582323261.jpg"
										alt="Morning Brew"
									></img>
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</section>

			{/* featured  */}
			<section
				className="mx-auto px-4 max-w-7xl lg:max-w-9xl mb-6 mr-6 md:mr-16 lg:mr-24"
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
			<ClassGallery classes={featured} loading={loading} />

			{/* about  */}
			<section className="px-4 pt-20 pb-10 mx-auto max-w-7xl" id="about">
				<div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
					<div className="rounded-lg ">
						<img
							className="w-full bg-gray-200 rounded-lg object-cover object-center-top h-72 sm:h-full "
							alt="info"
							loading="lazy"
							src="https://user-images.githubusercontent.com/47064842/122471339-28655500-cf8d-11eb-8928-2d8050ce5a57.png"
						/>
					</div>
					<div className="text-left">
						<h2 className="mb-4 text-2xl congress font-extrabold tracking-tight text-black md:leading-tight text-left md:text-4xl">
							For Computer Scientists, <br />
							By Computer Scientists
						</h2>
						<p className="mb-8 text-base  text-gray-600 text-left md:text-lg">
							College Compendium is a nonprofit organization led by{" "}
							<a
								href="https://github.com/GoldinGuy"
								target="_blank"
								rel="noreferrer"
								className="text-fuchsia-500 hover:text-fuchsia-600"
							>
								@GoldinGuy
							</a>{" "}
							and{" "}
							<a
								href="https://www.linkedin.com/in/samcrombie/"
								target="_blank"
								rel="noreferrer"
								className="text-fuchsia-500 hover:text-fuchsia-600"
							>
								@Samfydega
							</a>
							, two student developers passionate about improving access to
							high-quality educational computer science resources to intellectually
							curious people across the world. Learning and applying computer
							science skills can be a difficult journey, which is why we've
							created a catalog of public classes with resources to help
							you achieve your personal goals.
						</p>
						<a
							className="w-full btn btn-dark text-white font-semibold bg-fuchsia-400  hover:bg-fuchsia-500 px-6 py-3 btn-lg sm:w-auto  transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 "
							target="_blank"
							rel="noreferrer"
							href="https://discord.gg/gKYSMeJ"
						>
							Join The Discord
							<FontAwesomeIcon icon={faDiscord} className="ml-2" />
						</a>
					</div>
				</div>
			</section>

			{/* stats */}
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
								Improving Access To Computer Science
							</span>
						</h2>
						<p className="mt-3 text-3xl font-extrabold text-white">
							Join Over 60000 Programmers In 147 Countries Learning with College Compendium
						</p>
						<p className="mt-5 text-lg text-gray-300">
							Startup founder, CS student, data enthusiast, or first-time coder.
							Our compilation of courses spans hundreds of classes across dozens
							of domains, ranging from introductory courses to Graduate-Level
							Seminars. Topics include: Algorithms, Data Science, Data
							Structures, Systems, Quantum Computing, Cryptography,
							Cybersecurity, Application Development, Video Game Design,
							Software Engineering, and more!
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
								<span className="block text-2xl font-bold text-white">
									900+
								</span>
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

			{/* cta  */}
			<CTA />
		</div>
	);
});
export default HomePage;
