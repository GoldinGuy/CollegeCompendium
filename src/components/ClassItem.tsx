import {
	faArrowCircleRight,
	faClipboard,
	faExternalLinkAlt,
	faFileInvoice,
	faFileSignature,
	faFileVideo,
	faPencilAlt,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Class } from "../typings/interfaces";
import { collegeColors } from "../utils";

const ClassItem = ({ _class, idx }: { _class: Class, idx: number }) => {
	return (
		<div
			className="group hover:scale-105 rounded hover:shadow-xl"
			style={{ height: "fit-content" }}
			key={_class.id + idx}
		>
			<div
				className="w-full h-2 mb-1"
				style={{
					background:
						collegeColors[_class.source.toLowerCase()],
				}}
			/>
			<a href={_class.url} target="_blank" rel="noreferrer">
				<div className="p-3">
					<p
						className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase"
													
					>
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
						{/* <FontAwesomeIcon
															icon={faClipboard}
															className="mr-3"
															size="lg"
														/>
														<FontAwesomeIcon
															icon={faPencilAlt}
															className="mr-3"
															size="lg"
														/>
														<FontAwesomeIcon
															icon={faVideo}
															className="mr-3"
															size="lg"
														/> */}
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
}
export default ClassItem