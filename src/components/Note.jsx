import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function Note({ id, text, date, handleDeleteNote }) {
    return (
		<div className='note'>
			<p className='note_text'>{text}</p>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
}
