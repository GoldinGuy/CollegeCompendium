import { Class } from "../typings/interfaces";

const ExploreTable = ({ classes }: { classes: Class[] }) => {
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
										>
											Meta
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Title
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Description
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Tags
										</th>
									</tr>
								</thead>
								{classes.map(_class => {
									return (
										<tbody className="bg-white divide-y divide-gray-200">
											<tr>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="flex-shrink-0 h-10 w-10">
															<img
																className="h-10 m-auto"
																src={_class.source_thumb}
																alt="logo"
															/>
														</div>
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
													{_class.tags.map(word => {
														if (
															word.toUpperCase() !==
																_class.source.toUpperCase() &&
															word !== "cs"
														) {
															return (
																<span className="px-2  text-xs inline-flex leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 uppercase mr-1">
																	{word}
																</span>
															);
														} else return null;
													})}
												</td>
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
};
export default ExploreTable;
