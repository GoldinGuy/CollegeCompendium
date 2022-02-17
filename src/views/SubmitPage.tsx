/*  College Compendium Component File
Copyright (C) 2022 Seth Goldin & Samuel Crombie
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
import { ContributeForm, CTA } from "../components";

const SubmitPage = React.memo(() => {
	return (
		<div className="overflow-x-hidden bg-gray-50">
			<ContributeForm />
			{/* cta  */}
			<CTA />
		</div>
	);
});
export default SubmitPage;
