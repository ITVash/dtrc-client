import React from "react"
import PropTypes from "prop-types"

import "./style.scss"

const Section = ({ children }) => {
	return (
		<section className='section'>
			<div className='wrap'>{children}</div>
		</section>
	)
}

Section.propTypes = {
	children: PropTypes.any.isRequired,
}

export default Section
