import React from "react";
import amy from "/public/images/avatars/image-amyrobson.webp";
const Comments = ({
	items,
	currentUser,
	onHandleDelete,
}) => {
	return (
		<div className=' md:mx-auto max-w-[768px] mx-4 '>
			<h1 className='text-3xl text-black mb-4'>
				Comments
			</h1>
			<div className='grid grid-cols-1  gap-4'>
				{items.comments.map((com) => (
					<Comment
						onHandleDelete={onHandleDelete}
						currentUser={currentUser}
						com={com}
						key={com.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Comments;

function Comment({
	com,
	currentUser,
	onHandleDelete,
}) {
	return (
		<div className='grid grid-cols-1 gap-4'>
			<div className=' flex  gap-4 w-[100%]  bg-[#fff] rounded-md p-4'>
				<div className='h-[100%] hidden md:grid  grid-rows-3 gap-2 bg-primary  p-2 rounded-2xl items-center justify-center'>
					<img
						className=' w-[3rem] h-[auto]'
						src='/images/icon-plus.svg'
						alt=''
					/>
					<span className='text-[#fff] text-center'>
						{com.score}
					</span>
					<img
						className='w-[3rem] h-[auto]'
						src='/images/icon-minus.svg'
						alt=''
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<div
						data-avatar
						className='flex  items-center justify-between w-[100%]  '>
						<div className='flex items-center gap-2'>
							<img
								className='w-[2.5rem] h-auto rounded-full overflow-hidden'
								src={com.user.image.png}
								alt=''
							/>
							<span className='font-ter'>
								{com.user.username}
							</span>
							<span className='text-time'>
								{com.createdAt}
							</span>
						</div>

						<button className=' text-primary px-2 py-1 rounded-md md:flex gap-2 items-center hidden  hover:opacity-[50%] transition-all'>
							<img
								src='/images/icon-reply.svg'
								alt=''
							/>
							Reply
						</button>
					</div>
					<p className='text-time'>
						{com.content}
					</p>
					<div className='flex  md:hidden justify-between'>
						<div className='h-[100%] flex flex-row-reverse justify-between gap-4 bg-lightGray2  p-2 rounded-2xl  items-center'>
							<img
								className='w-[2rem] md:w-[3rem] h-[auto]  nums'
								src='/images/icon-plus.svg'
								alt=''
							/>

							<span className='text-primary text-center'>
								{com.score}
							</span>
							<img
								className='w-[2rem] md:w-[3rem] h-[auto] nums fill-red-500 cursor-pointer'
								src='/images/icon-minus.svg'
								alt=''
							/>
						</div>
						<div className='flex items-center gap-2 hover:opacity-[50%] transition-all'>
							<img
								src='/images/icon-reply.svg'
								alt=''
							/>
							<span className='text-primary '>
								Reply
							</span>
						</div>
					</div>
				</div>
			</div>
			{com.replies.length > 0 && (
				<div className='grid grid-cols-1 gap-4 pl-8 md:pl-12 replies md:ml-8'>
					{com.replies.map((r, index) => {
						return (
							<Reply
								parentId={com.id}
								onHandleDelete={onHandleDelete}
								currentUser={currentUser}
								index={index}
								r={r}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

function Reply({
	r,
	currentUser,
	onHandleDelete,
	parentId,
	index,
}) {
	return (
		<div className=' flex  gap-4 w-[100%]  bg-[#fff] rounded-md p-4'>
			<div className='h-[100%] hidden md:grid  grid-rows-3 gap-2 bg-primary  p-2 rounded-2xl items-center justify-center'>
				<img
					className=' w-[3rem] h-[auto]'
					src='/images/icon-plus.svg'
					alt=''
				/>
				<span className='text-[#fff] text-center'>
					{r.score}
				</span>
				<img
					className='w-[3rem] h-[auto]'
					src='/images/icon-minus.svg'
					alt=''
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<div
					data-avatar
					className='flex  items-center justify-between w-[100%]  '>
					<div className='flex items-center gap-2'>
						<img
							className=' rounded-full overflow-hidden'
							src={r.user.image.png}
							alt=''
						/>
						<span className='font-ter'>
							{r.user.username}
						</span>
						{currentUser.username ===
						r.user.username ? (
							<span className='px-2 bg-primary text-white font-ter'>
								you
							</span>
						) : null}

						<span className='text-time'>
							{r.createdAt}
						</span>
					</div>
					{currentUser.username ===
					r.user.username ? (
						<div
							onClick={() => {
								onHandleDelete(index, parentId);
							}}
							className='hidden md:flex gap-2'>
							<button className=' text-danger px-2 py-1 rounded-md flex gap-2 items-center'>
								<img
									src='/images/icon-delete.svg'
									alt=''
								/>
								Delete
							</button>
							<button className=' text-primary px-2 py-1 rounded-md flex gap-2 items-center'>
								<img
									src='/images/icon-edit.svg'
									alt=''
								/>
								Edit
							</button>
						</div>
					) : (
						<div className='hidden  md:flex items-center gap-2 hover:opacity-[50%] transition-all'>
							<img
								src='/images/icon-reply.svg'
								alt=''
							/>
							<span className='text-primary '>
								Reply
							</span>
						</div>
					)}
				</div>
				<p className='text-time'>{r.content}</p>
				<div className='flex  md:hidden justify-between'>
					<div className='h-[100%] flex flex-row-reverse justify-between gap-4 bg-lightGray2  p-2 rounded-2xl  items-center'>
						<img
							className='w-[2rem] md:w-[3rem] h-[auto]  nums'
							src='/images/icon-plus.svg'
							alt=''
						/>

						<span className='text-primary text-center'>
							{r.score}
						</span>
						<img
							className='w-[2rem] md:w-[3rem] h-[auto] nums fill-red-500 cursor-pointer'
							src='/images/icon-minus.svg'
							alt=''
						/>
					</div>
					{currentUser.username ===
					r.user.username ? (
						<div className='flex gap-2'>
							<button className=' text-danger px-2 py-1 rounded-md flex gap-2 items-center'>
								<img
									src='/images/icon-delete.svg'
									alt=''
								/>
								Delete
							</button>
							<button className=' text-primary px-2 py-1 rounded-md flex gap-2 items-center'>
								<img
									src='/images/icon-edit.svg'
									alt=''
								/>
								Edit
							</button>
						</div>
					) : (
						<div className='hidden  md:flex items-center gap-2 hover:opacity-[50%] transition-all'>
							<img
								src='/images/icon-reply.svg'
								alt=''
							/>
							<span className='text-primary '>
								Reply
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
