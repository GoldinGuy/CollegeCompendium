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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClipLoader } from "react-spinners";
import { Class } from "../typings/interfaces";
import { shuffle } from "../utils";
import ClassItem from "./ClassItem";

const ClassGallery = ({ classes,loading }: { classes: Class[], loading: boolean }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
	<>
			{loading ? (
				<div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center"
					key="gallery-loader">
					<ClipLoader
						color={"#e47cfc"}
						loading={loading}
						size={100}
					/>
				</div> ) : 
				(<Carousel
					swipeable={true}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // render carousel on server-side.
					infinite={true}
					autoPlay={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					// deviceType={this.props.deviceType}
					dotListClass="custom-dot-list-style focus:outline-none focus:border-0 text-fuchsia-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
					itemClass="carousel-item-padding-40-px p-6 "
					className="mb-6"
				>
					{shuffle(classes)
						?.slice(0, 9)
						.map((_class, idx) => {
							return <ClassItem _class={_class} idx={idx} />;
						}) ?? []}
				</Carousel>)
			}
			</>
	);
};
export default ClassGallery;
