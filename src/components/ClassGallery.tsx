import { faExternalLinkAlt, faFileInvoice, faFileSignature, faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Class } from "../typings/interfaces";
import { collegeColors, shuffle } from "../utils";

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
							className="group hover:scale-105 rounded hover:shadow-xl"
							style={{ height: "fit-content" }}
							key={_class.id + idx}
						>
							<div
								className="w-full h-2 mb-1"
								style={{
									background: collegeColors[_class.source.toLowerCase()],
								}}
							/>
							<a href={_class.url} target="_blank" rel="noreferrer">
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
									<span className="py-2 text-gray-500">
										<FontAwesomeIcon
											icon={faFileVideo}
											size="lg"
											className="mr-3"
											title="Video Lecture"
										/>
										<FontAwesomeIcon
											icon={faFileInvoice}
											className="mr-3"
											size="lg"
											title="Written Notes"
										/>
										<FontAwesomeIcon
											icon={faFileSignature}
											className="mr-3"
											size="lg"
											title="Assignments"
										/>
									</span>
								</div>
							</a>
						</div>
					);
				})}
		</Carousel>
	);
};
export default ClassGallery;
