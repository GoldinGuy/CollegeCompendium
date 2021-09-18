const Toggle = ({ onTrigger, label }: { onTrigger: () => void, label: string }) => {

return (
	<div className="sm:inline-block items-center">
		<label className="flex items-center cursor-pointer">
			<div className="relative">
				<input
					type="checkbox"
					id="toggle-check"
					className="sr-only"
					onClick={onTrigger}
				/>
				<div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
				<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
			</div>
			<div className="ml-3 whitespace-nowrap text-base text-gray-700 font-medium">
				{label}
			</div>
		</label>
	</div>
);
}
export default Toggle