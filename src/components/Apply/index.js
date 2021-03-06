import React from "react"
import { BorderWrapper, ApplyWrapper, ApplyButton } from "./styles"
export function Apply() {
	return (
		<BorderWrapper>
			<ApplyWrapper>
				<div id="first">
					<span>Topic</span> <br />
					<h4>Financial Planning</h4>
				</div>
				<div>
					<span>Students</span> <br />
					<h4>Self-paced</h4>
				</div>
				<div>
					<span>Life-time Access</span> <br />
					<h4>Rs. 1499/- </h4>
				</div>
				<ApplyButton className="buy-button">
					<h3>
						Buy the course{"  "}
						<span role="img" aria-label="rocket">
							🚀
						</span>
					</h3>
				</ApplyButton>
			</ApplyWrapper>
		</BorderWrapper>
	)
}
