import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { _id, author, title, details, image_url, rating, total_view } = news;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Image
                        className='me-2'
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0 fw-semibold'>{author?.name}</p>
                        <p className='mb-0'><small>{author?.published_date}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-3' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    <div>
                        {
                            details?.length > 250 ?
                                <p>{details?.slice(0, 250) + '...'} <Link to={`news/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2' />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2' />
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;