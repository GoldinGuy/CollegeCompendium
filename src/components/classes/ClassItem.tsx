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

import {
	faCheck,
	faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Class } from "../../typings/interfaces";
import { SOURCE_COLORS } from "../../globals";
import React from "react";
import posthog from "posthog-js";

const ClassItem = React.memo(({ _class, idx }: { _class: Class; idx: number }) => {
	return (
		<div
			className="group hover:scale-105 rounded hover:shadow-xl"
			style={{ height: "fit-content" }}
			key={_class.title + idx}
		>
			<div
				className="w-full h-2 mb-1"
				key={"color" + idx}
				style={{
					background:
						SOURCE_COLORS[
							_class.source.toString().toLowerCase().trim().replaceAll(" ", "")
						],
				}}
			/>
			<a
				href={_class.url}
				target="_blank"
				rel="noreferrer"
				key={_class.id + idx}
				onClick={() => {
					posthog?.capture("view-resource", {
						url: _class.url,
						title: _class.title,
					});
				}}
			>
				<div className="p-3 ph-no-capture">
					<p
						className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase"
						key={"meta" + idx}
					>
						{_class.source} | {_class.year}{" "}
						<FontAwesomeIcon icon={faExternalLinkAlt} className="float-right" />
					</p>

					<h2
						className="mb-2 text-xl font-bold leading-snug text-gray-900"
						key={"title" + idx}
					>
						<span className="text-gray-900 group-hover:text-fuchsia-500">
							{_class.title}
						</span>
					</h2>
					<p
						className="mb-4 text-sm font-normal text-gray-600"
						key={"desc" + idx}
					>
						{_class.desc}
					</p>
					<span className="py-2 text-gray-500" key={"contains" + idx}>
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
						{_class.contains.videos && (
							<span
								className="flex items-center text-sm text-gray-500"
								key={"videos" + idx}
							>
								<FontAwesomeIcon
									icon={faCheck}
									size="sm"
									className="mr-2 text-fuchsia-500"
									// title="Video Lecture"
								/>{" "}
								Video Lecture(s)
							</span>
						)}
						{_class.contains.written && (
							<span
								className="flex items-center  text-sm text-gray-500"
								key={"notes" + idx}
							>
								<FontAwesomeIcon
									icon={faCheck}
									size="sm"
									className="mr-2 text-fuchsia-500"
									// title="Written Notes"
								/>{" "}
								Written Notes
							</span>
						)}
						{_class.contains.assignments && (
							<span
								className="flex items-center text-sm text-gray-500"
								key={"assign" + idx}
							>
								<FontAwesomeIcon
									icon={faCheck}
									className="mr-2 text-fuchsia-500"
									size="sm"
									// title="Assignments"
								/>
								Assignments
							</span>
						)}
					</span>
				</div>
			</a>
		</div>
	);
});
export default ClassItem;
