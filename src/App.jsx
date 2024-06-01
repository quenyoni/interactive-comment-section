import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "./data.json";
import Comments from "./Components/Comments";

export default function App() {
	const [items, setItems] = useState(data);
	const [currentUser, setCurrentUser] = useState(
		items.currentUser,
	);

	function onHandleDelete(id, parentId) {
		setItems((prevData) => ({
			...prevData,
			comments: prevData.comments.map((comment) =>
				comment.id === parentId
					? {
							...comment,
							replies: comment.replies.filter(
								(reply) => reply.id !== id,
							),
					  }
					: comment,
			),
		}));
	}

	return (
		<main className='bg-lightGray2 min-h-screen'>
			<div className='container mx-auto  py-8'>
				<Comments
					items={items}
					currentUser={currentUser}
					onHandleDelete={onHandleDelete}
				/>
			</div>
		</main>
	);
}
