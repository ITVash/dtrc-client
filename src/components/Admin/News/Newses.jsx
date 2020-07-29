import React from "react"
import PropTypes from "prop-types"
import RichEditor from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Button } from "antd"

const Newses = ({ close }) => {
	const [obj, setObj] = React.useState({
		_id: "",
		title: "",
		text_min: "",
		text: "",
		created_at: "",
		gallery: [],
		author: "",
		published: false,
	})
	const modules = {
		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],

			[{ header: 1 }, { header: 2 }], // custom button values
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }], // superscript/subscript
			[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
			[{ direction: "rtl" }], // text direction

			[{ size: ["small", false, "large", "huge"] }], // custom dropdown
			[{ header: [1, 2, 3, 4, 5, 6, false] }],

			[{ color: [] }, { background: [] }], // dropdown with defaults from theme
			[{ font: [] }],
			[{ align: [] }],

			["clean"], // remove formatting button
		],
	}

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"code-block",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"align",
		"font",
		"color",
		"background",
		"size",
		"direction",
		"script",
		"clean",
	]
	return (
		<div>
			<h1>Добавить новость</h1>
			<RichEditor
				theme='snow'
				modules={modules}
				formats={formats}
				value={obj.text_min}
				onChange={(e) => setObj({ ...obj, text_min: e })}
			/>
			{obj.text_min && (
				<div
					className='question-text'
					dangerouslySetInnerHTML={{ __html: obj.text_min }}
				/>
			)}
			<Button onClick={close} type='default' danger>
				Закрыть
			</Button>
			<Button type='primary'>Сохранить и закрыть</Button>
		</div>
	)
}

Newses.propTypes = {
	close: PropTypes.func.isRequired,
}

export default Newses
