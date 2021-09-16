import posthog from "posthog-js";
import { CLASS_TAGS } from "../../globals";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../utils";

const Filters = (() => {
	const history = useHistory();
	let query = useQuery();

    return (
        
        <div className="pt-4 pb-0 text-center max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl  ph-no-capture">
            {CLASS_TAGS.map((tag) => {
                return (
                    <div
                        onClick={() => {
                            posthog?.capture("filtering", {
                                filter: tag,
                            });
                            history.push(
                                `/search?q=${tag
                                    .toLowerCase()
                                    .trim()
                                    .replaceAll(" ", "-")}${query.get("table") === "true" ? "&table=true" : ""
                                }`
                            );
                        }}
                        className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-1 bg-fuchsia-200 text-fuchsia-700 rounded-full cursor-pointer"
                        key={tag}
                    >
                        #{tag}
                    </div>
                );
            })}
        </div>
    )
})
export default Filters;