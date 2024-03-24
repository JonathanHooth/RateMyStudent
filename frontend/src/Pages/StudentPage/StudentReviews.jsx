import React from "react";
import "./StudentReviews.css"

export default function StudentReviews({reviewList}){



    return reviewList.map((review, index) =>(
            <>
            <div className='review' key={index}>

                <div className="review-ins">
                <div className="beegWrap">
                <div className="basicWrap">
                    <div className="review-subject">
                        Teacher: {review.teacher_name}
                    </div>
                    <div className="review-subject">
                        Subject: {review.review_subject}
                    </div>
                </div>
                <div className="reviewStats">
                    <div>
                        Study Method: {review.study_method}
                    </div>
                    <div>
                        Collaboration Level: {review.teamwork}
                    </div>
                    <div>
                        Exam Proficiency: {review.exam_taking}
                    </div>
                    <div>
                        Class Participation Level: {review.class_behavior}
                    </div>
                    <div>
                        Behavior in Class: {review.overall_grade}
                    </div>
                    <div>
                        Study Method: {review.participation_level}
                    </div>
                </div>
                </div>

                <div className="review-disc">
                    Review Description: {review.review_description}
                </div>
                </div>
            </div>
            
        </>
    ))
}