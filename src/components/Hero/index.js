import React from "react"
import {
	HeroWrapper,
	HeaderImage,
	HeaderText,
	HeaderContainer,
	BlobImage,
	MobileBlobImage,
} from "./styles"
import HeroImage from "../../images/header.svg"
import Blob from "../../images/blob.svg"
import MobileBlob from "../../images/mobileBlob.svg"
export function Hero() {
	return (
		<HeroWrapper id="Home">
			<HeaderContainer>
				<HeaderText>
					<h1>This course will change your life!</h1>
					<h3>- #FakeNewsButTrue</h3>
				</HeaderText>
				<BlobImage src={Blob} alt="Blob" />
				<MobileBlobImage src={MobileBlob} alt="Blob" />
				<HeaderImage src={HeroImage} alt="Header" />
			</HeaderContainer>
		</HeroWrapper>
	)
}
