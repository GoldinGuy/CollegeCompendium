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

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Class } from "../../typings/interfaces";
import { SOURCE_COLORS } from "../../globals";

const ExploreTable = React.memo(({ classes }: { classes: Class[] }) => {
	if (classes.length > 0) {
		return (
			<div className="flex flex-col py-12">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											key="meta"
										>
											Meta
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											key="title"
										>
											Title
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											key="desc"
										>
											Description
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											key="contains"
										>
											Contains
										</th>
										{/* <th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Tags
										</th> */}
									</tr>
								</thead>
								{classes.map((_class, idx) => {
									return (
										<tbody
											className="bg-white divide-y divide-gray-200"
											key={_class.id + idx}
										>
											<tr>
												<td className="px-6 py-4 whitespace-nowrap relative">
													<div
														className="w-2 h-full mb-3 absolute bottom-0 left-0 top-0"
														style={{
															background:
																SOURCE_COLORS[
																	_class.source
																		.toString()
																		.toLowerCase()
																		.replace(" ", "")
																		.trim()
																],
														}}
													/>
													<div className="flex items-center">
														<div
															className="w-2 h-full mb-3"
															style={{
																background:
																	SOURCE_COLORS[
																		_class.source
																			.toString()
																			.toLowerCase()
																			.replace(" ", "")
																			.trim()
																	],
															}}
														/>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{_class.source}
															</div>
															<div className="text-sm text-gray-500">
																{_class.year}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4">
													<a
														href={_class.url}
														className="text-sm font-semibold text-fuchsia-500 hover:text-blue-700"
													>
														{_class.title}
													</a>
													<div className="text-xs text-gray-500">
														{_class.id}
													</div>
												</td>

												<td
													className="px-6 py-4 inline-block h-auto break-words text-sm text-gray-500"
													style={{ width: "40rem" }}
												>
													{_class.desc}
												</td>
												<td className="px-6 py-4 ">
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
														{_class.contains.videos && (
															<span className="flex items-center text-sm text-gray-500 whitespace-nowrap">
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
															<span className="flex items-center  text-sm text-gray-500 whitespace-nowrap">
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
															<span className="flex items-center text-sm text-gray-500 whitespace-nowrap">
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
												</td>
												{/* <td className="px-6 py-4 ">
													{_class.tags.map((word) => {
														if (
															word.toString().toUpperCase() !==
																_class.source.toString().toUpperCase() &&
															word !== "cs"
														) {
															return (
																<span className="px-2  text-xs inline-flex leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 uppercase mr-1">
																	{word}
																</span>
															);
														} else return null;
													})}
												</td> */}
											</tr>
										</tbody>
									);
								})}
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	} else return null;
});
export default ExploreTable;
