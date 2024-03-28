import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [isSearchIconRotated, setIsSearchIconRotated] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
		setIsSearchIconRotated(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setIsSearchIconRotated(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission if needed
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center p-2">
			<label className="flex items-center w-full rounded-sm bg-primary px-2">
				<div className={`icon-container ${isSearchIconRotated ? 'rotate' : ''}`}>
					{isFocused ? (
						< IoMdArrowRoundBack className="w-4 text-notify outline-none mr-1" />
					) : (
						<IoSearchSharp className="w-4 outline-none mr-1" />
					)}
				</div>
				<input
					type="text"
					placeholder="Search or start new chat"
					className="outline-none bg-primary text-xs h-8 rounded-md"
					value={search}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</label>
		</form>
	);
};

export default SearchInput;