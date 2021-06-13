import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Class } from "../typings/interfaces";

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
			dotListClass="custom-dot-list-style focus:outline-none text-fuchsia-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
			itemClass="carousel-item-padding-40-px p-6 "
			className="mb-6"
		>
			{classes?.slice(0, 9).map(Class => {
				return (
					<a href={Class.url} className="" key={Class.id}>
						<img
							src={Class.thumb}
							className="object-cover w-full h-56 mb-5 bg-center rounded transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:shadow-xl"
							alt="Thumbnail"
							loading="lazy"
						/>
						<h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
							<a
								href={Class.url}
								className="text-gray-900 hover:text-fuchsia-500"
							>
								{Class.title}
							</a>
						</h2>
						<p className="mb-4 text-sm font-normal text-gray-600">
							{Class.desc}
						</p>
					</a>
				);
			})}
		</Carousel>
	);
};
export default ClassGallery;
