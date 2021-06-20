import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Class } from "../typings/interfaces";
import { shuffle } from "../utils";

const ClassGallery = ({ classes }: { classes: Class[] }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};

	return (
		<Carousel
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
					return (
						<div
							className="group hover:scale-105 rounded shadow-lg hover:shadow-xl"
							key={_class.id + idx}
						>
							<a href={_class.url}>
								<div className="relative mb-3">
									<img
										src={_class.thumb}
										className="object-cover w-full h-56 bg-center rounded-t transition duration-500 ease-in-out transform group-hover:bg-fuchsia-500 group-hover:opacity-80 z-0 "
										alt="Thumbnail"
										loading="lazy"
									/>
									<span className="flex items-center text-gray-50 z-10 absolute top-5 right-5">
										<img
											src={_class.source_thumb}
											alt="logo"
											loading="lazy"
											className="h-16"
										/>
									</span>
								</div>

								<div className="p-3">
									<p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
										{_class.source} | {_class.year}{" "}
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
											className="float-right"
										/>
									</p>

									<h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
										<span className="text-gray-900 group-hover:text-fuchsia-500">
											{_class.title}
										</span>
									</h2>
									<p className="mb-4 text-sm font-normal text-gray-600">
										{_class.desc}
									</p>
								</div>
							</a>
						</div>
					);
				})}
		</Carousel>
	);
};
export default ClassGallery;
