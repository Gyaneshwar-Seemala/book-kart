import React from 'react'
import { TestImage, TestimonialDiv, TestimonialText } from './Testimonial.styles'
import { TestName } from './Testimonial.styles'

function Testimonials() {
    return (
        <TestimonialDiv>
            <TestImage>
                <TestimonialText>
                    BookKart has revolutionized my reading experience. Sharing books with juniors who share my passion has been incredibly rewarding. The platform's ease of use and vast collection make it a go-to for book enthusiasts. It fosters a sense of community and sparks insightful discussions. BookKart is more than a platform; it's a gateway to knowledge and connection. Highly recommend for any book lover
                </TestimonialText>
                <TestName>-A Happy Student</TestName>
            </TestImage>
        </TestimonialDiv>
    )
}

export default Testimonials